<?php

namespace App\Repositories\Admin\Product;

use App\Models\AttributeLanguage;
use App\Repositories\Interfaces\Admin\Product\AttributeLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class AttributeLanguageRepository implements AttributeLanguageInterface
{
    use SlugTrait;

    public function get($id)
    {
        return AttributeLanguage::find($id);
    }

    public function all()
    {
        return AttributeLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $attributeLang = new AttributeLanguage();
            $attributeLang->title = $request->title;
            $attributeLang->attribute_id = $request->attribute_id;
            $attributeLang->lang = $request->lang;
            $attributeLang->save();

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
            $attributeLang = $this->get($request->attribute_lang_id);
            $attributeLang->title = $request->title;
            $attributeLang->attribute_id = $request->attribute_id;
            $attributeLang->lang = $request->lang != '' ? $request->lang : 'en' ;
            $attributeLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

}

