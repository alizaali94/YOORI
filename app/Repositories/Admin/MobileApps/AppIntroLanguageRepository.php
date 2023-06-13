<?php

namespace App\Repositories\Admin\MobileApps;

use DB;
use App\Models\AppIntroLanguage;
use App\Repositories\Interfaces\Admin\MobileApps\AppIntroLanguageInterface;

class AppIntroLanguageRepository implements AppIntroLanguageInterface
{

    public function get($id)
    {
        return AppIntroLanguage::find($id);
    }
    public function getByLang($id, $request)
    {
        return AppIntroLanguage::where('app_intro_id', $id)->where('lang', $request->lang);
    }

    public function all()
    {
        return AppIntroLanguage::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $appIntroLang                          = new  AppIntroLanguage();
            $appIntroLang->title                   = $request->title;
            $appIntroLang->order                   = $request->order;
            $appIntroLang->app_intro_id            = $request->app_intro_id;
            $appIntroLang->lang                    = $request->lang;
            $appIntroLang->description             = $request->description;
            $appIntroLang->save();

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
            $appIntroLang                          = $this->get($request->app_intro_lang_id);
            $appIntroLang->title                   = $request->title;
            $appIntroLang->order                   = $request->order;
            $appIntroLang->app_intro_id            = $request->app_intro_id;
            $appIntroLang->lang                    = $request->lang != '' ? $request->lang : 'en';
            $appIntroLang->description             = $request->description;
            $appIntroLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}
