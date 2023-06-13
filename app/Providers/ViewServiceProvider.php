<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }
    public function boot()
    {
        View::composer(
            ['admin.partials.header'],
            'App\Http\View\Composers\LanguageComposer'
        );
        View::composer(
            ['admin.partials.header-assets','admin.partials.header'],
            'App\Http\View\Composers\LocaleLanguageComposer'
        );
        View::composer(
            ['admin.partials.header','admin.partials.header'],
            'App\Http\View\Composers\NotificationComposer'
        );
    }
}
