<?php

namespace App\Repositories\Admin\Slider;


use App\Models\Banner;
use App\Repositories\Interfaces\Admin\Slider\BannerInterface;
use App\Traits\ImageTrait;
use Illuminate\Support\Facades\DB;

class BannerRepository implements BannerInterface
{
    use ImageTrait;

    public function all()
    {
        return Banner::latest();
    }

    public function paginate($limit): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return Banner::latest()->paginate($limit);
    }

    public function find($id)
    {
        return Banner::find($id);
    }


    public function store($request)
    {
        if ($request['image'] != ''):
            $request['image_id']     = $request['image'];
            $request['image']        = $this->getImageWithRecommendedSize($request['image'], '220','125',true);
        else:
            $request['image']        = [];
        endif;

        return Banner::create($request);
    }

    public function update($request,$id)
    {
        $slider = Banner::find($id);
        if ($request['image'] != ''):
            $request['image_id']     = $request['image'];
            $request['image']        = $this->getImageWithRecommendedSize($request['image'], '220','125', true);
        else:
            $request['image']        = [];
        endif;

        $slider->update($request);

        return $slider;
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $slider            = Banner::find($request['id']);
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
    public function frontendBanners()
    {
        return Banner::orderBy('order')->where('status',1)->latest()->get();
    }
}
