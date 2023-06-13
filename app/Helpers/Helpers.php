<?php

use App\Events\PusherNotification;
use App\Mail\SendSmtpMail;
use App\Models\Account;
use App\Models\Currency;
use App\Models\Language;
use App\Models\Notification;
use App\Models\Product;
use App\Models\Setting;
use App\Models\SmsTemplate;
use App\Models\Addon;
use App\Models\User;
use App\Utility\AppSettingUtility;
use App\Traits\SmsSenderTrait;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use GeoSot\EnvEditor\Facades\EnvEditor;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\HtmlString;

if (!defined('STDIN')) {
    define('STDIN', fopen('php://stdin', 'r'));
}

if (!function_exists('update_version')):
    function update_version()
    {
        if (settingHelper('current_version') == '1.0.0' || settingHelper('current_version') < 153):

            if (is_dir(base_path('public/frontend/js/chunks-152')))
            {
                \Illuminate\Support\Facades\File::deleteDirectory(base_path('public/frontend/js/chunks-152'));
            }

            if (isAppMode())
            {
                $version = 106;
                $version_code = "1.0.6";
            }
            else{
                $version = 153;
                $version_code = "1.5.3";
            }


            $code = Setting::where('title','version_code')->first();

            if ($code)
            {
                $code->update([
                    'value' => $version_code,
                ]);
            }
            else{
                Setting::create([
                    'title' => "version_code",
                    'value' => $version_code
                ]);
            }

            $setting = Setting::where('title','current_version')->first();
            $setting->value = $version;
            $setting->save();
            \Artisan::call('migrate');
            Cache::forget('settings');
            \Artisan::call('optimize:clear');
        endif;
    }
endif;

if (!function_exists('validate_purchase')):
    function validate_purchase($code, $data)
    {
        // do not change it
        if (isAppMode())
        {
            define('VERSION', 106);
            define('ITEM_ID', '38944711');
        }
        else{
            define('VERSION', 153);
            define('ITEM_ID', '37142846');
        }


        $script_url = str_replace("install/process", "", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
        envWrite('DB_HOST', $data['DB_HOST']);
        envWrite('DB_DATABASE', $data['DB_DATABASE']);
        envWrite('DB_USERNAME', $data['DB_USERNAME']);
        envWrite('DB_PASSWORD', $data['DB_PASSWORD']);
        sleep(3);
        return 'success';
    }
endif;

if (!function_exists('formatBytes')) {

    function formatBytes($size, $precision = 2)
    {
        $base = log($size, 1024);
        $suffixes = array('B', 'KB', 'MB', 'GB', 'TB');

        return round(pow(1024, $base - floor($base)), $precision) . ' ' . $suffixes[floor($base)];
    }
}

if (!function_exists('hasPermission')) {

    function hasPermission($key_word)
    {
        if (in_array($key_word, Sentinel::getUser()->permissions)) {
            return true;
        }
        return false;
    }
}

if (!function_exists('isDemoServer')) {

    function isDemoServer(): bool
    {
        if (strtolower(\Config::get('app.demo_mode')) == 'yes') {
            return true;
        }
        return false;
    }
}

if (!function_exists('isInstalled')) {

    function isInstalled(): bool
    {
        if (strtolower(config('app.app_installed')) == 'yes') {
            return true;
        }
        return false;
    }
}

if (!function_exists('is_file_exists')) {
    function is_file_exists($item, $storage = 'local')
    {
        if (!blank($item) and !blank($storage)) :
            if ($storage == 'local') :
                if (file_exists('public/' . $item)) :
                    return true;
                endif;
            elseif ($storage == 'aws_s3') :
                if (Storage::disk('s3')->exists($item)) :
                    return true;
                endif;
            elseif ($storage == 'wasabi') :
                if (Storage::disk('wasabi')->exists($item)) :
                    return true;
                endif;
            endif;

        endif;

        return false;
    }
}

if (!function_exists('get_media')) {
    function get_media($item, $storage = 'local', $updater = false)
    {
        if (!blank($item) and !blank($storage)) :
            if ($storage == 'local') :
                if($updater):
                    return base_path('public/'.$item);
                else:
                    return app('url')->asset('public/' . $item);
                endif;
            elseif ($storage == 'aws_s3') :
                return Storage::disk('s3')->url($item);
            elseif ($storage == 'wasabi') :
                return Storage::disk('wasabi')->url($item);
            endif;
        endif;

        return false;
    }
}

if (!function_exists('is_refundable')) {
    function is_refundable($order)
    {
        $created_date = Carbon::createFromFormat('Y-m-d H:s:i', $order->created_at);
        $refundable_date = $created_date->addDays(settingHelper('refund_request_time'));
        if ($created_date <= $refundable_date):
            return true;
        else:
            return false;
        endif;
    }
}

if (!function_exists('static_asset')) {

    function static_asset($path = null, $secure = null)
    {
        if (strpos(php_sapi_name(), 'cli') !== false || defined('LARAVEL_START_FROM_PUBLIC')) :
            return app('url')->asset($path, $secure);
        else:
            return app('url')->asset('public/' . $path, $secure);
        endif;
    }
}

if (!function_exists('baseUrlForApi')) {

    function baseUrlForApi($path = null, $secure = null)
    {
        $url = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
        $url .= "://".$_SERVER['HTTP_HOST'];
        $url .= str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']);

        return $url;
    }
}

if (!function_exists('get_price')) {

    function get_price($price,$curr=null)
    {
        return format_price(convert_price($price,$curr),$curr);
    }
}
if (!function_exists('user_curr')) {
    function user_curr()
    {
        $user = User::where('id',authId())->first();
        return $user->currency_code;
    }
}

if (!function_exists('format_price')) {

    function format_price($price,$curr=null)
    {
        $no_of_decimals = settingHelper('no_of_decimals');
        $decimal_separator = settingHelper('decimal_separator') ? settingHelper('decimal_separator') : '.';
        $thousands_separator = $decimal_separator == ',' ? '.' : ',';
        $currency_symbol_format = settingHelper('currency_symbol_format') ? settingHelper('currency_symbol_format') : 'amount_symbol';

        if ($no_of_decimals != ''):
            $price = number_format($price, $no_of_decimals, $decimal_separator, $thousands_separator);
        else:
            $price = number_format($price, 3, $decimal_separator, $thousands_separator);
        endif;

        if ($currency_symbol_format == 'amount_symbol'):
            return $price . get_symbol($curr);
        elseif ($currency_symbol_format == 'symbol_amount'):
            return get_symbol($curr) . $price;
        elseif ($currency_symbol_format == 'amount__symbol'):
            return $price . ' ' . get_symbol($curr);
        elseif ($currency_symbol_format == 'symbol__amount'):
            return get_symbol($curr) . ' ' . $price;
        endif;
    }
}

if (!function_exists('convert_price')) {

    function convert_price($price,$curr=null)
    {
        $currencies = AppSettingUtility::currencies();
        $default_currency = settingHelper('default_currency'); //22572
        $exchange_rate = 1;

        if($curr)
        {
            $currency = $currencies->where('code',$curr)->first();
            if($currency)
            {
                $exchange_rate = $currency->exchange_rate;
            }
        }
        else if ($default_currency)
        {
            $currency = $currencies->where('id',$default_currency)->first();
            if($currency)
            {
                $exchange_rate = $currency->exchange_rate;
            }
        }

        return floatval($price) * floatval($exchange_rate);
    }
}

if (!function_exists('get_symbol')) {

    function get_symbol($curr=null)
    {
        $currencies = AppSettingUtility::currencies();

        $default_currency = settingHelper('default_currency');

        $symbol = '$';

        if ($curr){
            $currency = $currencies->where('code', $curr)->first();
            if ($currency)
            {
                $symbol = $currency->symbol;
            }
        }
        else if ($default_currency)
        {
            $currency = $currencies->where('id',$default_currency)->first();
            if($currency)
            {
                $symbol = $currency->symbol;
            }
        }

        return $symbol;
    }
}

if (!function_exists('vat_tax')) {

    function vat_tax($id)
    {
        $products = Product::whereRaw("FIND_IN_SET(?, vat_taxes) > 0", [$id])->get();
        if ($products->count() > 0):
            return true;
        else:
            return false;
        endif;
    }
}

if (!function_exists('special_discount_applicable')) {

    function special_discount_applicable($product)
    {
        if ($product->is_wholesale == false):
            if (date('Y-m-d H:i:s') >= date('Y-m-d H:i:s', strtotime($product->special_discount_start)) &&
                date('Y-m-d H:i:s') <= date('Y-m-d H:i:s', strtotime($product->special_discount_end))):
                return true;
            endif;
        endif;

        return false;
    }
}

if (!function_exists('base_price')) {

    function base_price($product)
    {
        $price = $product->price;
        $tax = 0;
        if ($product->vat_tax != ''):
            foreach ($product->vatTaxes($product) as $vatTax):
                $tax += ($price * $vatTax->percentage) / 100;
            endforeach;
        endif;
        $price += $tax;
        return format_price(convert_price($price));
    }
}

if (!function_exists('special_price')) {

    function special_price($product)
    {
        $price = $product->price;
        $tax = 0;

        if (special_discount_applicable($product)):
            if ($product->special_discount_type == 'flat'):
                $price -= $product->special_discount;
            elseif ($product->special_discount_type == 'percentage'):
                $price -= ($price * $product->special_discount) / 100;
            endif;
        endif;
        if ($product->vat_tax != ''):
            foreach ($product->vatTaxes($product) as $vatTax):
                $tax += ($price * $vatTax->percentage) / 100;
            endforeach;
        endif;
        $price += $tax;

        return format_price(convert_price($price));
    }
}

if (!function_exists('detail_base_price')) {

    function detail_base_price($product)
    {
        $lowest_price = $product->price;
        $highest_price = $product->price;

        if ($product->has_variant):
            foreach ($product->stock as $key => $stock):
                if ($lowest_price > $stock->price):
                    $lowest_price = $stock->price;
                endif;
                if ($highest_price < $stock->price):
                    $highest_price = $stock->price;
                endif;
            endforeach;
        endif;
        return get_price_range($product, $lowest_price, $highest_price);
    }
}

if (!function_exists('detail_special_price')) {

    function detail_special_price($product)
    {
        $lowest_price = $product->price;
        $highest_price = $product->price;

        if ($product->has_variant):
            foreach ($product->stock as $key => $stock):
                if ($lowest_price > $stock->price):
                    $lowest_price = $stock->price;
                endif;
                if ($highest_price < $stock->price):
                    $highest_price = $stock->price;
                endif;
            endforeach;
        endif;
        if (special_discount_applicable($product)):
            if ($product->special_discount_type == 'flat'):
                $lowest_price -= $product->special_discount;
                $highest_price -= $product->special_discount;
            elseif ($product->special_discount_type == 'percentage'):
                $lowest_price -= ($lowest_price * $product->special_discount) / 100;
                $highest_price -= ($highest_price * $product->special_discount) / 100;
            endif;
        endif;
        return get_price_range($product, $lowest_price, $highest_price);
    }
}

if (!function_exists('get_price_range')) {

    function get_price_range($product, $lowest_price, $highest_price)
    {
        $lowest_price_tax = 0;
        $highest_price_tax = 0;
        if ($product->vat_tax != ''):
            foreach ($product->vatTaxes($product) as $vatTax):
                $lowest_price_tax += ($lowest_price * $vatTax->percentage) / 100;
                $highest_price_tax += ($highest_price * $vatTax->percentage) / 100;
            endforeach;
        endif;
        $lowest_price = convert_price($lowest_price + $lowest_price_tax);
        $highest_price = convert_price($highest_price + $highest_price_tax);

        if ($lowest_price == $highest_price):
            return format_price($lowest_price);
        else:
            return format_price($lowest_price) . ' - ' . format_price($highest_price);
        endif;
    }
}

if (!function_exists('get_yrsetting')) {

    function get_yrsetting($setting_for)
    {
        return \Config::get('yrsetting.' . $setting_for);
    }
}

if (!function_exists('get_sms_body')) {
    function get_sms_body($for)
    {
        $sms_template = SmsTemplate::where('tab_key', $for)->first();

        $otp = rand(10000, 99999);
        $sms_body = str_replace('{otp}', $otp, $sms_template->sms_body);
        return $sms_body;
    }
}

if (!function_exists('addon_is_activated')) {
    function addon_is_activated($addon_unique_identity)
    {
        $addon = AppSettingUtility::addons()->where('addon_identifier', $addon_unique_identity)->first();
        return isset($addon);
    }
}

if (!function_exists('get_addon_version')) {
    function get_addon_version($addon_unique_identity)
    {
        $addon = AppSettingUtility::addons()->where('addon_identifier', $addon_unique_identity)->first();
        return $addon->version;
    }
}

if (!function_exists('get_account_details')) {
    function get_account_details($withdraw_to)
    {
        if ($withdraw_to == 'bank'):
            return $data['account_details'] = ["bank_name" => "ICC Bank", "owner_name" => "Zahid Hasan", "bank_phone_no" => "01770077007", "branch" => "dhaka,mirpur", "account_number" => "24400440440", "routing_no" => "777", "account_type" => "bank"];
        elseif ($withdraw_to == 'paypal'):
            return $data['account_details'] = ["paypal_email" => "almahmud@gmail.com", "account_type" => "paypal"];
        elseif ($withdraw_to == 'cash'):
            return $data['account_details'] = ["bank_name" => "cash", "account_type" => "cash"];
        endif;
    }
}

if (!function_exists('get_account_info')) {
    function get_account_info($check_for)
    {
        $account_details = Account::where('id', $check_for['id'])->select('account_details')->first();
        if (blank($account_details)):
            return false;
        else:
            $account_details = $account_details->account_details;

            foreach (get_yrsetting($check_for['is_active']) as $title):
                if ($account_details[$title] == '') {
                    return false;
                }
            endforeach;
        endif;
        return true;
    }
}

if (!function_exists('parseHomePageData')) {
    function parseHomePageData($key)
    {
        $settings = settingHelper('home_page_contents');
        foreach ($settings as $key => $setting) {
        }
    }
}

if (!function_exists('isTableExists')) {
    function isTableExists($table): bool
    {
        if (Schema::hasTable($table)) //check the column
        {
            return true;
        }
        return false;
    }
}

if (!function_exists('isColumnExists')) {
    function isColumnExists($table, $column): bool
    {
        if (Schema::hasColumn($table, $column)) //check the column
        {
            Schema::table($table, function (Blueprint $table) use ($column) {
                return true;
            });
        }
        return false;
    }
}

if (!function_exists('settingData')) {
    function settingData($data = [], $lang = null)
    {
        if ($lang) {
            $settings = AppSettingUtility::settings()->where('lang', $lang)->whereIn('title', $data)->pluck('value', 'title')->toArray();
        } else {
            $settings = AppSettingUtility::settings()->whereIn('title', $data)->pluck('value', 'title')->toArray();
        }

        return $settings;
    }
}

if (!function_exists('authUser')) {
    function authUser($request = null)
    {
        if (Sentinel::check()) {
            $user = Sentinel::getUser();
        }elseif ($request && $request->bearerToken() != null && in_array('api',$request->route()->getAction('middleware'))) {
            $user = JWTAuth::parseToken()->authenticate();
            return $user;
        }elseif ($request && $request->has('token') && in_array('api',$request->route()->getAction('middleware'))) {
            $user = JWTAuth::parseToken()->authenticate();
            return $user;
        }
        else {
            $user = null;
        }
        return $user;
    }
}

if (!function_exists('authId')) {
    function authId(): int
    {
        if (Sentinel::check()) {
            $user = Sentinel::getUser()->id;
        } else {
            $user = 0;
        }
        return $user;
    }
}

if (!function_exists('checkEmptyProvider')) {
    function checkEmptyProvider($check_for)
    {
        foreach (get_yrsetting($check_for) as $title):
            if (settingHelper($title) == ''):
                return false;
            endif;
        endforeach;
        return true;
    }
}

if (!function_exists('getFileLink')) {
    function getFileLink($size, $array,$offline=null)
    {
//            dd($array);
        if ($size == 'original_image' && is_array($array) && array_key_exists($size, $array))
        {
            if (@is_file_exists($array[$size], $array['storage'])):
                return get_media($array[$size], $array['storage']);
            else:
                return static_asset('images/default/default-image-320x320.png');
            endif;
        }
        if (is_array($array) && array_key_exists('image_' . $size, $array)) :
            if (@is_file_exists($array['image_' . $size], $array['storage'])):
                return get_media($array['image_' . $size], $array['storage']);
            endif;
        endif;
        return static_asset('images/default/default-image-' . $size . '.png');
    }
}

//    fonts
if (!function_exists('fontURL')):
    function fontURL()
    {
        $fonts_url = static_asset('fonts/poppins/css.css');
        $font_title = settingHelper('fonts');
        $font_title_sl = preg_replace('/\s+/', '_', strtolower($font_title));
        if (File::exists(public_path('fonts/' . $font_title_sl . '/css.css'))):
            $fonts_url = static_asset('fonts/' . $font_title_sl . '/css.css');
        endif;
        return $fonts_url;
    }
endif;

if (!function_exists('primaryFont')):
    function primaryFont()
    {
        $primary_font = 'Poppins';
        $font_title = settingHelper('fonts');
        $font_title_sl = preg_replace('/\s+/', '_', strtolower($font_title));
        if (File::exists(public_path('fonts/' . $font_title_sl . '/css.css'))):
            $primary_font = $font_title;
        endif;
        return $primary_font;
    }
endif;

if (!function_exists('getVideoId')):
    function getVideoId($provider, $link)
    {
        if ($provider == 'vimeo'):
            if (preg_match("/(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/?(showcase\/)*([0-9))([a-z]*\/)*([0-9]{6,11})[?]?.*/", $link, $output_array)):
                return $output_array[6];
            endif;
        elseif ($provider == 'youtube'):
//                preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $link, $match);
//                return $match[1];
            $id = '';
            preg_match("#([\/|\?|&]vi?[\/|=]|youtu\.be\/|embed\/)([a-zA-Z0-9_-]+)#", $link, $id);
            return end($id);
        elseif ($provider == 'embedded_video'):
            $url = '';
            preg_match('/src="([^"]+)"/', $link, $url);
            if(array_key_exists(1,$url)):
                return $url[1];
            else:
                return $link;
            endif;
        elseif ($provider == 'mp4'):
            return $link;
        endif;

        return '';
    }
endif;

if (!function_exists('getFileName')):
    function getFileName($file)
    {
        $name = '';
        if ($file) {
            $file = explode('/', $file);
            $name = $file[count($file) - 1];
        }
        return $name;
    }
endif;

if (!function_exists('sendNotification')):
    function sendNotification($user, $message = null, $message_type = 'success', $url = null, $details = null)
    {
        $notification = new Notification();
        $notification->user_id = $user->id;
        $notification->title = $message;
        $notification->details = $details;
        $notification->url = $url;
        $notification->save();


        try {
            if (settingHelper('is_pusher_notification_active') == 1):
                event(new PusherNotification($user, $message, $message_type, $url, $details));
            endif;
        } catch (\Exception $e) {

        }

        return true;
    }
endif;

if (!function_exists('envWrite')) {
    function envWrite($key,$value)
    {
        if (EnvEditor::keyExists($key)) {
            EnvEditor::editKey($key, '"' . trim($value) . '"');
        } else {
            EnvEditor::addKey($key, '"' . trim($value) . '"');
        }
    }
}

if (!function_exists('emailAddressMask')):
    function emailAddressMask($email)
    {
        if ($email != null || $email != ''):
            list($first, $last)     = explode('@', $email);
            if(strlen($first) <= 3):
                $first = '***';
            else:
                $first                  = str_replace(substr($first, '2'), str_repeat('*', strlen($first) - 3), $first);
            endif;
            $last                   = explode('.', $last);
            $last_domain            = str_replace(substr($last['0'], '1'), str_repeat('*', strlen($last['0']) - 1), $last['0']);
            $last_1 = '';
            if (array_key_exists('1',$last)) {
                $last_1 = $last['1'];
            }
            return $first . '@' . $last_domain . '.' . $last_1;
        else:
            return '';
        endif;
    }
endif;

if (!function_exists('nullCheck')):
    function nullCheck($value)
    {
        return $value ?: '';
    }
endif;

if (!function_exists('languageCheck')):
    function languageCheck()
    {
        /*if (authUser()) {
            $lang = authUser()->lang_code;
        } else*/if (session()->has('lang')) {
            $lang = session()->get('lang');
        }elseif (settingHelper('default_language')) {
            $lang = settingHelper('default_language');
        } else {
            $lang = 'en';
        }
        return $lang;
    }
endif;
if (!function_exists('currencyCheck')):
    function currencyCheck()
    {
        /*if (authUser()) {
            $currency   = authUser()->currency_id;
        } else*/if (session()->has('currency')) {
            $currency   = session()->get('currency');
        }elseif (settingHelper('default_currency')) {
            $currency   = settingHelper('default_currency');
        } else {
            $currency   = 1;
        }
        return $currency;
    }
endif;

if (!function_exists('apiLanguage')):
    function apiLanguage($lang)
    {
        if ($lang) {
            return $lang;
        } else {
            if (settingHelper('default_language') != '') {
                $lang = settingHelper('default_language');
            }
            else{
                $lang = 'en';
            }
        }
        return $lang;
    }
endif;

if (!function_exists('priceFormatUpdate')):
    function priceFormatUpdate($price,$curr,$type=null)
    {
        if (!$price)
        {
            $price = 0;
        }
        $active_currency = AppSettingUtility::currencies()->where('id',$curr)->first();
        $rate = $active_currency->exchange_rate;
        if ($type == '*') {
            return $price*$rate;
        } else {
            return $price/$rate;
        }
    }
endif;

if (!function_exists('getWalkInCustomerId')):
    function getWalkInCustomer()
    {
        $user = User::where('user_type','walk_in')->first();
        if (!$user)
        {
            $user = User::create([
                'first_name' => 'Walk-In',
                'last_name'  => 'Customer',
                'permissions' => [],
                'password' => bcrypt(123456),
                'user_type' => "walk_in"
            ]);
            $activation = Activation::create($user);
            Activation::complete($user, $activation->code);
        }

        return $user;
    }
endif;

if (!function_exists('has_key')):
    function has_key($array, $in_array)
    {
        foreach ($array as $key => $value){
            if ($in_array->has($value)):
                return true;
            endif;
        }

        return false;
    }
endif;

if (!function_exists('check_install')):
    function check_install()
    {
        try {
            DB::connection()->getPdo();
            if (!isInstalled())
                return response()->view('install.index');
        } catch (\Exception $e) {
            return redirect('install');
        }
    }
endif;

if (!function_exists('get_pagination')):
    function get_pagination($paginate): int
    {

        return settingHelper($paginate);
        return settingHelper($paginate) != '' ? settingHelper($paginate) : Config::get('yrsetting.'.$paginate);
    }
endif;

if (!function_exists('app_config')):
    function app_config()
    {
        $default_language       = settingHelper('default_language');

        if (!empty($default_language)) :
            Config::set('app.locale', $default_language);
        endif;

        $timezone       = settingHelper('default_time_zone');

        if (!empty($timezone)) :
            date_default_timezone_set($timezone);
        else :
            date_default_timezone_set('Asia/Dhaka');
        endif;

        //supported language setting to laravellocalization
        $languageList              =  Language::where('status',1)->get();
        $supportedLocales          = array();
        if ($languageList->count() > 0) :
            foreach ($languageList as $lang) :
                $langConfigs            = $lang->languageConfig->select('name', 'script', 'native', 'regional')->get();
                foreach ($langConfigs as $langConfig) :
                    $langConfig->flag_icon = $lang->flag;
                    $supportedLocales[$lang->locale] = $langConfig;
                endforeach;
            endforeach;
            Config::set('laravellocalization.supportedLocales', $supportedLocales);
        endif;
    }
endif;

if (!function_exists('mail_config')):
    function mail_config()
    {
        $mail_driver    = settingHelper('mail_driver');
        $mail_host      = $mail_port = $mail_encryption_type = $mail_username = $mail_password = $mailgun_domain = $mailgun_secret = '';
        $sendmail_path  = $mail_address = $name = '';
        $driver         = "smtp";

        if ($mail_driver)
        {
            if($mail_driver == 'smtp'):
                $mail_host                 = settingHelper('smtp_mail_host');
                $mail_port                 = settingHelper('smtp_mail_port');
                $mail_address              = settingHelper('smtp_mail_address');
                $name                      = settingHelper('smtp_name');
                $mail_username             = settingHelper('smtp_mail_username');
                $mail_password             = settingHelper('smtp_mail_password');
                $mail_encryption_type      = settingHelper('smtp_mail_encryption_type');
            elseif($mail_driver == 'sendgrid'):
                $mail_host                 = settingHelper('sendgrid_mail_host');
                $mail_port                 = settingHelper('sendgrid_mail_port');
                $mail_address              = settingHelper('sendgrid_mail_address');
                $name                      = settingHelper('sendgrid_name');
                $mail_username             = settingHelper('sendgrid_mail_username');
                $mail_password             = settingHelper('sendgrid_mail_password');
                $mail_encryption_type      = settingHelper('sendgrid_mail_encryption_type');
            elseif($mail_driver == 'sendmail'):
                $sendmail_path                  = settingHelper('sendmail_path');
            elseif($mail_driver == 'mailgun'):
                $mail_host                 = settingHelper('mailgun_mail_host');
                $mail_port                 = settingHelper('mailgun_mail_port');
                $mail_address              = settingHelper('mailgun_mail_address');
                $name                      = settingHelper('mailgun_name');
                $mail_username             = settingHelper('mailgun_mail_username');
                $mail_password             = settingHelper('mailgun_mail_password');
                $mail_encryption_type      = settingHelper('mailgun_mail_encryption_type');

                $mailgun_domain                 = settingHelper('mailgun_domain');
                $mailgun_secret                 = settingHelper('mailgun_secret');
            endif;
            $driver = $mail_driver == 'sendmail' ? 'sendmail' : "smtp";
        }

        $config = array(
            'default'       => $driver,
            'mailers'       => [
                'smtp'          =>[
                    'transport'     => 'smtp',
                    'host'          => $mail_host ? : env('MAIL_HOST', 'smtp.mailgun.org'),
                    'port'          => $mail_port ?  : env('MAIL_PORT', 587),
                    'encryption'    => $mail_encryption_type ? : 'tls',
                    'username'      => $mail_username ? : "",
                    'password'      => $mail_password ? : "",
                    'timeout'       => null,
                    'auth_mode'     => null,

                ],
                'ses'           => [
                    'transport'     => '',
                ],
                'mailgun'       => [
                    'transport'     => 'mailgun',
                    'domain' => $mailgun_domain->value ?? "",
                    'secret' => $mailgun_secret->value ?? "",
                    'endpoint' => env('MAILGUN_ENDPOINT', 'api.eu.mailgun.net'),
                ],
                'postmark' => [
                    'transport'     => 'postmark',
                ],

                'sendmail' => [
                    'transport'     => 'sendmail',
//                                'host'          => 'localhost',
//                                'port'          => 25,
                    'path'          => $sendmail_path->value ?? "",
                ],

                'log' => [
                    'transport'     => 'log',
                    'channel'       => env('MAIL_LOG_CHANNEL'),
                ],

                'array' => [
                    'transport'     => 'array',
                ],

                'failover' => [
                    'transport'     => 'failover',
                    'mailers'       => [
                        'smtp',
                        'log',
                    ],
                ],
            ],
            'from' => [
                'address' => $mail_address ? : "",
                'name' => $name ? : "",
            ],
        );
        Config::set('mail', $config);
    }
endif;

if (!function_exists('pwa_config')):
    function pwa_config()
    {
        $icon = settingHelper('favicon');
        $short_name = settingHelper('system_short_name') != '' ? settingHelper('system_short_name') : 'Yoori';
        $pwa = array(
            'name'          => 'Yoori',
            'manifest'      => [
                'name'              => config('app.name'),
                'short_name'        => $short_name,
                'scope'             => '/',
                'start_url'         => '/',
                'background_color'  => '#ffffff',
                'theme_color'       => '#000000',
                'display'           => 'standalone',
                'orientation'       => 'portrait',
                'status_bar'        => 'black',
                'icons'             => [
                    '72x72' => [
                        'path'      => @is_file_exists(@$icon['image_72x72_url']) ? static_asset(@$icon['image_72x72_url']) : static_asset('images/ico/favicon-72x72.png'),
                        'purpose'   => 'any'
                    ],
                    '96x96' => [
                        'path'      => @is_file_exists(@$icon['image_96x96_url']) ? static_asset(@$icon['image_96x96_url']) : static_asset('images/ico/favicon-96x96.png'),
                        'purpose'   => 'any'
                    ],
                    '128x128' => [
                        'path'      => @is_file_exists(@$icon['image_128x128_url']) ? static_asset(@$icon['image_128x128_url']) : static_asset('images/ico/favicon-128x128.png'),
                        'purpose'   => 'any'
                    ],
                    '144x144' => [
                        'path'      => @is_file_exists(@$icon['image_144x144_url']) ? static_asset(@$icon['image_144x144_url']) : static_asset('images/ico/favicon-144x144.png'),
                        'purpose'   => 'maskable any'
                    ],
                    '152x152' => [
                        'path'      => @is_file_exists(@$icon['image_152x152_url']) ? static_asset(@$icon['image_152x152_url']) : static_asset('images/ico/favicon-152x152.png'),
                        'purpose'   => 'any'
                    ],
                    '192x192' => [
                        'path'      => @is_file_exists(@$icon['image_192x192_url']) ? static_asset(@$icon['image_192x192_url']) : static_asset('images/ico/favicon-192x192.png'),
                        'purpose'   => 'any'
                    ],
                    '384x384' => [
                        'path'      => @is_file_exists(@$icon['image_384x384_url']) ? static_asset(@$icon['image_384x384_url']) : static_asset('images/ico/favicon-384x384.png'),
                        'purpose'   => 'any'
                    ],
                    '512x512' => [
                        'path'      => @is_file_exists(@$icon['image_512x512_url']) ? static_asset(@$icon['image_512x512_url']) : static_asset('images/ico/favicon-512x512.png'),
                        'purpose'   => 'any'
                    ],
                ],
                'splash' => [
                    '640x1136'  => @is_file_exists(@$icon['splash_640x1136_url']) ? static_asset(@$icon['splash_640x1136_url']) : static_asset('images/ico/splash-640x1136.png'),
                    '750x1334'  => @is_file_exists(@$icon['splash_750x1334_url']) ? static_asset(@$icon['splash_750x1334_url']) : static_asset('images/ico/splash-750x1334.png'),
                    '828x1792'  => @is_file_exists(@$icon['splash_828x1792_url']) ? static_asset(@$icon['splash_828x1792_url']) : static_asset('images/ico/splash-828x1792.png'),
                    '1125x2436' => @is_file_exists(@$icon['splash_1125x2436_url']) ? static_asset(@$icon['splash_1125x2436_url']) : static_asset('images/ico/splash-1125x2436.png'),
                    '1242x2208' => @is_file_exists(@$icon['splash_1242x2208_url']) ? static_asset(@$icon['splash_1242x2208_url']) : static_asset('images/ico/splash-1242x2208.png'),
                    '1242x2688' => @is_file_exists(@$icon['splash_1242x2688_url']) ? static_asset(@$icon['splash_1242x2688_url']) : static_asset('images/ico/splash-1242x2688.png'),
                    '1536x2048' => @is_file_exists(@$icon['splash_1536x2048_url']) ? static_asset(@$icon['splash_1536x2048_url']) : static_asset('images/ico/splash-1536x2048.png'),
                    '1668x2224' => @is_file_exists(@$icon['splash_1668x2224_url']) ? static_asset(@$icon['splash_1668x2224_url']) : static_asset('images/ico/splash-1668x2224.png'),
                    '1668x2388' => @is_file_exists(@$icon['splash_1668x2388_url']) ? static_asset(@$icon['splash_1668x2388_url']) : static_asset('images/ico/splash-1668x2388png'),
                    '2048x2732' => @is_file_exists(@$icon['splash_2048x2732_url']) ? static_asset(@$icon['splash_2048x2732_url']) : static_asset('images/ico/splash-2048x2732.png'),
                ],@
                'custom' => []
            ]
        );

        Config::set('laravelpwa', $pwa);
    }
endif;

if (!function_exists('get_version')):
    function get_version(string $input, int $splitLength = 1)
    {
        $string = '';
        for($i = 0; $i < strlen($input); $i++) {
            $string .= ($i > 0 ? '.' : '').$input[$i];
        }
        return $string;
    }
endif;

if (!function_exists('get_update_url')):
    function get_update_url()
    {
        $url        = 'https://desk.spagreen.net//download-update';
        $params = array(
            "item_id"        => 37142846,
            "purchase_code"  => settingHelper('purchase_code')
        );
        $data   = http_build_query($params);
        return $url."?".$data;
    }
endif;

if (!function_exists('arrayCheck')):
    function arrayCheck($key,$array): bool
    {
        return is_array($array) && count($array) > 0 && array_key_exists($key,$array) && !empty($array[$key]) && $array[$key] != 'null';
    }
endif;

if (!function_exists('isAppMode')):
    function isAppMode(): bool
    {
        return config('app.mobile_mode') == 'on' || !file_exists(base_path('resources/views/frontend/master.blade.php'));
    }
endif;

if (! function_exists('mixUrl')) {

    function mixUrl($path, $manifestDirectory = '', $baseUrl = null)
    {
        static $manifest;

        if (!starts_with($path, '/')) {
            $path = "/{$path}";
        }



        if (file_exists(public_path($manifestDirectory.'/hot'))) {
            return new HtmlString($baseUrl.$path);
        }

        if (!$manifest) {
            if (!file_exists($manifestPath = 'public/mix-manifest.json')) {
                throw new Exception('The Mix manifest does not exist.');
            }

            $manifest = json_decode(file_get_contents($manifestPath), true);
        }

        if (!is_null($baseUrl)){
            if (strlen($baseUrl) > 1 && Str::endsWith($baseUrl, '/')) {
                $baseUrl = substr($baseUrl, 0, -1);
            }
            return new HtmlString($baseUrl . $manifestDirectory . $manifest[$path]);
        }

        if (! array_key_exists($path, $manifest)) {
            throw new Exception(
                "Unable to locate Mix file: {$path}. Please check your ".
                'webpack.mix.js output paths and try again.'
            );
        }

        return new HtmlString($manifestDirectory.$manifest[$path]);
    }

    function starts_with($path, string $string)
    {
        return false;
    }
}
