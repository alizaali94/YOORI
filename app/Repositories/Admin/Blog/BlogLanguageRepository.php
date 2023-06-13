<?php

namespace App\Repositories\Admin\Blog;

use App\Models\BlogLanguage;
use App\Repositories\Interfaces\Admin\Blog\BlogLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class BlogLanguageRepository implements BlogLanguageInterface
{
    use SlugTrait;

    public function get($id)
    {
        return BlogLanguage::find($id);
    }

    public function all()
    {
        return BlogLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $blogLang                       = new BlogLanguage();
            $blogLang->title                = $request->title;
            $blogLang->blog_id              = $request->blog_id;
            $blogLang->lang                 = $request->lang != '' ? $request->lang : 'en' ;
            $blogLang->short_description    = $request->short_description;
            $blogLang->long_description     = $request->long_description;
            $blogLang->meta_title           = $request->meta_title;
            $blogLang->meta_description     = $request->meta_description;
            $blogLang->meta_keyword         = $request->meta_keyword;
            $blogLang->tags                 = $request->tags;

            $blogLang->save();

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
            $blogLang                    = $this->get($request->blog_lang_id);

            $blogLang->title                = $request->title;
            $blogLang->lang                 = $request->lang != '' ? $request->lang : 'en' ;
            $blogLang->short_description    = $request->short_description;
            $blogLang->long_description     = $request->long_description;
            $blogLang->meta_title           = $request->meta_title;
            $blogLang->meta_description     = $request->meta_description;
            $blogLang->meta_keyword         = $request->meta_keyword;
            $blogLang->tags                 = $request->tags;

            $blogLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

}

