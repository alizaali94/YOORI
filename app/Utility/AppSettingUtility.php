<?php

namespace App\Utility;

use App\Models\Addon;
use App\Models\Currency;
use App\Models\Language;
use App\Models\Setting;
use App\Models\SmsTemplate;
use Illuminate\Support\Facades\Cache;

class AppSettingUtility
{
    public static function currencies()
    {
       return Cache::rememberForever('currencies', function (){
            return Currency::all();
        });
    }
    public static function settings()
    {
        return Cache::rememberForever('settings', function (){
            return Setting::all();
        });
    }
    public static function smsTemplates()
    {
        return Cache::rememberForever('smsTemplates', function (){
            return SmsTemplate::all();
        });
    }
    public static function addons()
    {
        return Cache::rememberForever('addons', function (){
            return Addon::all()->where('status', 1);
        });
    }
    public static function languages()
    {
        return Cache::rememberForever('languages', function (){
            return Language::where('status',1)->all();
        });
    }
}
