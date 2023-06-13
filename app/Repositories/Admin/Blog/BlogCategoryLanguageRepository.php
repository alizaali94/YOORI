<?php

namespace App\Repositories\Admin\Blog;

use App\Models\BlogCategoryLanguage;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class BlogCategoryLanguageRepository implements BlogCategoryLanguageInterface
{
    use SlugTrait;

    public function get($id)
    {
        return BlogCategoryLanguage::find($id);
    }

    public function all()
    {
        return BlogCategoryLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $cateLang = new BlogCategoryLanguage();

            $cateLang->title             = $request->title;
            $cateLang->blog_category_id  = $request->blog_category_id;
            $cateLang->lang              = $request->lang != '' ? $request->lang : 'en' ;
            $cateLang->meta_title        = $request->meta_title;
            $cateLang->meta_description  = $request->meta_title;
            $cateLang->save();

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
            $cateLang                    = $this->get($request->blog_category_lang_id);

            $cateLang->title             = $request->title;
            $cateLang->blog_category_id  = $request->blog_category_id;
            $cateLang->lang              = $request->lang != '' ? $request->lang : 'en' ;
            $cateLang->meta_title        = $request->meta_title;
            $cateLang->meta_description  = $request->meta_title;
            $cateLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

}

