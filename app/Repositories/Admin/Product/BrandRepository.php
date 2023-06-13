<?php

namespace App\Repositories\Admin\Product;

use App\Models\Brand;
use App\Models\BrandLanguage;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use Illuminate\Support\Facades\DB;
use App\Repositories\Interfaces\Admin\Product\BrandLanguageInterface;

class BrandRepository implements BrandInterface
{
    use SlugTrait;
    use ImageTrait;

    protected $brandLanguage;

    public function __construct(BrandLanguageInterface $brandLanguage)
    {
        $this->brandLanguage        = $brandLanguage;
    }

    public function get($id)
    {
        return Brand::find($id);
    }

    public function getByLang($id, $lang)
    {
        if($lang == null):
            $brandByLang = BrandLanguage::with('brand')->where('lang', 'en')->where('brand_id', $id)->first();
        else:
            $brandByLang = BrandLanguage::with('brand')->where('lang', $lang)->where('brand_id', $id)->first();
            if (blank($brandByLang)):
                $brandByLang = BrandLanguage::with('brand')->where('lang', 'en')->where('brand_id', $id)->first();
                $brandByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $brandByLang;
    }

    public function all()
    {
        return Brand::leftJoin('brand_languages', 'brand_languages.brand_id', '=', 'brands.id')
                    ->select('brands.*', 'brand_languages.id as brand_lang_id', 'brand_languages.title', 'brand_languages.lang',
                        'brand_languages.meta_title', 'brand_languages.meta_description');
    }

    public function paginate($limit)
    {
        return $this->all()->latest()->where('lang', 'en')->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $brand                  = new  Brand();
            $brand->slug            = $this->getSlug($request->title, $request->slug);

            if ($request->logo != ''):
                $brand->logo        = $this->getImageWithRecommendedSize($request->logo, 130,93);
                $brand->logo_id     = $request->logo;
            else:
                $brand->logo        = [];
            endif;
            if ($request->banner != ''):
                $brand->banner        = $this->getImageWithRecommendedSize($request->banner,835,200,true);
                $brand->banner_id     = $request->banner;
            else:
                $brand->banner        = [];
                $brand->banner_id     = null;
            endif;

            $brand->save();

            $request['brand_id'] = $brand->id;
            if ($request->lang == ''):
                $request['lang']    = 'en';
            endif;
            $this->brandLanguage->store($request);

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $brand          = $this->get($request->brand_id);
            $brand->slug    = $this->getSlug($request->title, $request->slug);
            if ($request->logo != ''):
                $brand->logo        = $this->getImageWithRecommendedSize($request->logo, '130','93');
                $brand->logo_id     = $request->logo;
            else:
                $brand->logo        = [];
                $brand->logo_id     = null;
            endif;

            if ($request->banner != ''):
                $brand->banner        = $this->getImageWithRecommendedSize($request->banner,835,200,true);
                $brand->banner_id     = $request->banner;
            else:
                $brand->banner        = [];
                $brand->banner_id     = null;
            endif;

            $brand->save();

            if ($request->brand_lang_id == '') :
                $this->brandLanguage->store($request);
            else:
                $this->brandLanguage->update($request);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $brand            = $this->get($request['id']);
            $brand->status    = $request['status'];
            $brand->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    //for api
    public function shopBrand()
    {
        return Brand::active()->latest()->paginate(5);
    }

    public function allBrands()
    {
        return Brand::active()->latest()->paginate(30);
    }

    public function homePageBrands()
    {
        return Brand::select('id','logo','slug')->where('status',1)->take(10)->get();
    }

    public function brand($slug)
    {
        $brand =  Brand::where('slug',$slug)->first();
        return $brand ? $brand->makeHidden(['banner','logo']) : '';
    }

    public function brandByCampaign($id,$paginate=null): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        if (!$paginate)
        {
            $paginate = 12;
        }
        return Brand::with('currentLanguage')->whereHas('products' , function($query) use($id){
           $query->whereHas('campaign',function ($q) use($id)
           {
               $q->where('status','accepted')->where('campaign_id',$id);
           });
        })->latest()->paginate($paginate);
    }

    public function getAllBrands($user_id=null)
    {
        return Brand::withCount('products')->when($user_id,function ($query) use ($user_id){
            $query->whereHas('products',function ($q) use ($user_id){
                if(authUser()->user_type == 'staff' || authUser()->user_type == 'admin')
                {
                    $q->where('user_id',1);
                }
                else{
                    $q->where('user_id',$user_id);
                }
            });
        })->having('products_count','>',0)->active()->latest()->get();
    }

    public function allBrandsAPI($limit){
        return Brand::with('currentLanguage')->active()->latest()->paginate($limit);
    }
}

