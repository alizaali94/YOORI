<?php

namespace App\Repositories\Admin\Slider;

use App\Models\Slider;
use App\Repositories\Interfaces\Admin\Slider\SliderInterface;
use App\Traits\ImageTrait;
use DB;

class SliderRepository implements SliderInterface {

    use ImageTrait;

    protected $sliderLangRepository;

    public function __construct(SliderLangRepository $sliderLangRepository)
    {
        $this->sliderLangRepository        = $sliderLangRepository;
    }

    public function all()
    {
        return Slider::with('imageMedia')->latest();
    }

    public function paginate($limit): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return Slider::where('for_mobile',0)->latest()->paginate($limit);
    }

    public function find($id)
    {
        return Slider::find($id);
    }

    public function store($request)
    {
        if ($request['bg_image'] != ''):
            $request['bg_image_id']     = $request['bg_image'];
            $request['bg_image']        = $this->getImageWithRecommendedSize($request['bg_image'], '970','400',true);
        else:
            $request['bg_image']        = [];
        endif;
        if(key_exists('for_mobile', $request)):
            if($request['for_mobile']):
                if(array_key_exists('product_id',$request) && $request['action_type'] == 'product'){
                    $request['link'] = $request['product_id'];
                }else if(array_key_exists('category_id',$request) && $request['action_type'] == 'category'){
                    $request['link'] = $request['category_id'];
                }else if(array_key_exists('brand_id',$request) && $request['action_type'] == 'brand'){
                    $request['link'] = $request['brand_id'];
                }else if(array_key_exists('sl',$request) && $request['action_type'] == 'seller'){
                    $request['link'] = $request['sl'];
                }else if(array_key_exists('blog_id',$request) && $request['action_type'] == 'blog'){
                    $request['link'] = $request['blog_id'];
                }
                else if(array_key_exists('slider_url',$request) && $request['action_type'] == 'url'){
                    $request['link'] = $request['slider_url'];
                }
            endif;
        endif;
        if (array_key_exists('for_mobile',$request))
        {
            $request['for_mobile'] = 1;
        }
        return Slider::create($request);
    }

    public function update($request,$id)
    {
        $slider = Slider::find($id);
        if ($request['bg_image'] != ''):
            $request['bg_image_id']     = $request['bg_image'];
            $request['bg_image']        = $this->getImageWithRecommendedSize($request['bg_image'], '970','400', true);
        else:
            $request['bg_image']        = [];
        endif;

        if(key_exists('for_mobile', $request)):
            if($request['for_mobile']):
                if(array_key_exists('product_id',$request) && $request['action_type'] == 'product'){
                    $request['link'] = $request['product_id'];
                }else if(array_key_exists('category_id',$request) && $request['action_type'] == 'category'){
                    $request['link'] = $request['category_id'];
                }else if(array_key_exists('brand_id',$request) && $request['action_type'] == 'brand'){
                    $request['link'] = $request['brand_id'];
                }else if(array_key_exists('sl',$request) && $request['action_type'] == 'seller'){
                    $request['link'] = $request['sl'];
                }else if(array_key_exists('blog_id',$request) && $request['action_type'] == 'blog'){
                    $request['link'] = $request['blog_id'];
                }
                else if(array_key_exists('slider_url',$request) && $request['action_type'] == 'url'){
                    $request['link'] = $request['slider_url'];
                }
            endif;
        endif;

        if (array_key_exists('for_mobile',$request))
        {
            $request['for_mobile'] = 1;
        }

        $slider->update($request);

        return $slider;
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $slider            = Slider::find($request['id']);
            $slider->status    = $request['status'];
            $slider->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    //for api
    public function frontendSliders()
    {
        return Slider::where('status',1)->where('for_mobile',0)->orderBy('order')->latest()->get();
    }

    public function mobileSliders($limit)
    {
        return Slider::where('for_mobile',1)->orderBy('order')->where('status',1)->paginate($limit);
    }

    public function homeScreenSliders()
    {
        return Slider::where('for_mobile',1)->where('status',1)->orderBy('order')->latest()->get();
    }
}
