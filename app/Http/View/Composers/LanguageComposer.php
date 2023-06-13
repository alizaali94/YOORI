<?php

namespace App\Http\View\Composers;

use App\Models\Addon;
use App\Models\Language;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class LanguageComposer{
    public function __construct()
    {

    }

    public function compose(View $view)
    {
        $languages =  Language::where('status',1)->get();
        $view->with('active_languages', $languages);
    }
}
