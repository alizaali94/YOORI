<?php

namespace App\Http\View\Composers;

use App\Models\Language;
use Illuminate\View\View;

class LocaleLanguageComposer{
    public function __construct()
    {

    }

    public function compose(View $view)
    {
        $language = Language::where('locale', \App::getLocale() ?? settingHelper('default_language'))->first();

        $view->with('locale_language', $language);
    }
}
