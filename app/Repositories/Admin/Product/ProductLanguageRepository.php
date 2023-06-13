<?php

namespace App\Repositories\Admin\Product;

use App\Models\ProductLanguage;
use App\Repositories\Interfaces\Admin\Product\ProductLanguageInterface;
use App\Traits\ImageTrait;
use DB;
use function PHPUnit\Framework\isEmpty;

class ProductLanguageRepository implements ProductLanguageInterface
{
    use ImageTrait;

    public function get($id)
    {
        return ProductLanguage::find($id);
    }
    public function getByLang($id, $request)
    {
        return ProductLanguage::where('product_id', $id)->where('lang', $request->lang);
    }

    public function all()
    {
        return ProductLanguage::latest();
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            if ($request->product_lang_id != ''):
                $product_lang                      = $this->get($request->product_lang_id);
            else:
                $product_lang                      = new  ProductLanguage();
            endif;
            $product_lang->name                = $request->name;
            $product_lang->product_id          = $request->product_id;
            $product_lang->lang                = $request->lang;
            $product_lang->short_description   = $request->short_description;
            $product_lang->description         = $request->description;
            $product_lang->tags                = $request->tags;
            $product_lang->unit                = $request->unit;
            $product_lang->meta_title          = $request->meta_title;
            $product_lang->meta_description    = $request->meta_description;
            $product_lang->meta_keywords       = $request->meta_keywords;
            if ($request->pdf_specification != ''):
                $file   = $this->getFile($request->pdf_specification);
                if ($file):
                    $product_lang->pdf_specification        = $file;
                    $product_lang->pdf_specification_id     = $request->pdf_specification;
                else:
                    $product_lang->pdf_specification        = [];
                endif;
            else:
                $product_lang->pdf_specification        = [];
                $product_lang->pdf_specification_id     = null;
            endif;
            $product_lang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}
