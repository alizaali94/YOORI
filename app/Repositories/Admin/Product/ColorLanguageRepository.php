<?php

namespace App\Repositories\Admin\Product;

use App\Models\ColorLanguage;
use App\Repositories\Interfaces\Admin\Product\ColorLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class ColorLanguageRepository implements ColorLanguageInterface
{
    use SlugTrait;

    public function get($id)
    {
        return ColorLanguage::find($id);
    }
    public function getByLang($id, $request)
    {
        return ColorLanguage::where('brand_id', $id)->where('lang', $request->lang);
    }

    public function all()
    {
        return ColorLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
//        dd($request->all());
        DB::beginTransaction();
        try {
            $colorLang                      = new  ColorLanguage();
            $colorLang->name                = $request->name;
            $colorLang->color_id            = $request->color_id;
            $colorLang->lang                = $request->lang;
            $colorLang->save();

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
            $colorLang                      = $this->get($request->color_lang_id);
            $colorLang->name               = $request->name;
            $colorLang->color_id            = $request->color_id;
            $colorLang->lang                = $request->lang != '' ? $request->lang : 'en';
            $colorLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}

