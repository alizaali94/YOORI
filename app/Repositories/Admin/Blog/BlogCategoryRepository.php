<?php

namespace App\Repositories\Admin\Blog;

use App\Models\BlogCategory;
use App\Models\BlogCategoryLanguage;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryLanguageInterface;
use App\Traits\SlugTrait;
use DB;

class BlogCategoryRepository implements BlogCategoryInterface
{
    use SlugTrait;

    protected $blogCategoryLang;

    public function __construct(BlogCategoryLanguageInterface $blogCategoryLang)
    {
        $this->blogCategoryLang        = $blogCategoryLang;
    }
    public function get($id)
    {
        return BlogCategory::find($id);
    }

    public function all()
    {
        return BlogCategory::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->with('currentLanguage')->paginate($limit);
    }
    public function getByLang($id, $lang)
    {
        if($lang == null):
            $blogCategoryByLang = BlogCategoryLanguage::with('blogCategory')->where('lang', 'en')->where('blog_category_id', $id)->first();
        else:
            $blogCategoryByLang = BlogCategoryLanguage::with('blogCategory')->where('lang', $lang)->where('blog_category_id', $id)->first();
            if (blank($blogCategoryByLang)):
                $blogCategoryByLang = BlogCategoryLanguage::with('blogCategory')->where('lang', 'en')->where('blog_category_id', $id)->first();
                $blogCategoryByLang['translation_null'] = 'not-found';
            endif;
        endif;
        return $blogCategoryByLang;
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $category                  = new  BlogCategory();
            $category->slug            = $this->getSlug($request->title, $request->slug);
            $category->save();

            $request['blog_category_id'] = $category->id;
            if ($request->lang == ''):
                $request['lang']    = 'en';
            endif;
            $this->blogCategoryLang->store($request);

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
            $category          = $this->get($request->blog_category_id);
            $category->slug    = $this->getSlug($request->title, $request->slug);

            $category->save();

            if ($request->blog_category_lang_id == '') :
                $this->blogCategoryLang->store($request);
            else:
                $this->blogCategoryLang->update($request);
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
            $category           = $this->get($request['id']);
            $category->status   = $request['status'];
            $category->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

}

