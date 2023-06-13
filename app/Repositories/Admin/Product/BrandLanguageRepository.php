<?php

namespace App\Repositories\Admin\Product;

use App\Models\Brand;
use App\Models\BrandLanguage;
use App\Repositories\Interfaces\Admin\Product\BrandLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class BrandLanguageRepository implements BrandLanguageInterface
{
    use SlugTrait;

    public function get($id)
    {
        return BrandLanguage::find($id);
    }
    public function getByLang($id, $request)
    {
        return BrandLanguage::where('brand_id', $id)->where('lang', $request->lang);
    }

    public function all()
    {
        return BrandLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $brandLang                      = new  BrandLanguage();
            $brandLang->title               = $request->title;
            $brandLang->brand_id            = $request->brand_id;
            $brandLang->lang                = $request->lang;
            $brandLang->meta_title          = $request->meta_title;
            $brandLang->meta_description    = $request->meta_description;
            $brandLang->save();

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
            $brandLang                      = $this->get($request->brand_lang_id);
            $brandLang->title               = $request->title;
            $brandLang->brand_id            = $request->brand_id;
            $brandLang->lang                = $request->lang != '' ? $request->lang : 'en';
            $brandLang->meta_title          = $request->meta_title;
            $brandLang->meta_description    = $request->meta_description;
            $brandLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}

