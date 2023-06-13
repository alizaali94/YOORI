<?php

namespace App\Repositories\Admin;

use App\Models\Setting;
use App\Models\Timezone;
use App\Repositories\Interfaces\Admin\MediaInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\ImageTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use ZipArchive;

class SettingRepository implements SettingInterface{
    use ImageTrait;

    protected $media;

    public function __construct(MediaInterface $media)
    {
        $this->media = $media;
    }

    public function timezones()
    {
        return Timezone::orderBy('timezone')->get();
    }
    public function allTimezones()
    {
        return Timezone::latest();
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $site_lang   = $request->site_lang ?? 'en';
            foreach ($request->except('_token','_method','site_lang','mobile_app','chat_messenger') as $key => $value):

                if ($key == 'default_language'):
                    $setting            = Setting::where('title', $key)->first();
                else:
                    //if change by chosen lang get setting record by lang

                    if (isset($site_lang) && in_array($key, get_yrsetting('setting_by_lang'))):
                        $setting            = Setting::where('title', $key)->where('lang', $site_lang)->first();

                    else:
                        $setting            = Setting::where('title', $key)->where('lang', 'en')->first();

                    endif;
                endif;

                if (in_array($key,get_yrsetting('setting_image'))):

                    if (!blank($setting)):
                        $this->deleteImage(settingHelper($key));
                    endif;

                    $response   = $this->saveImage($request->file($key), $key);
                    $value      = serialize($response['images']);
                endif;

                if (in_array($key,get_yrsetting('setting_array'))):
                    if ($request->invoice_based_shipping_fee)
                    {
                        $invoice_array = [];
                        foreach ($request->invoice_based_shipping_fee as $invoice_key=> $item) {
                            if ($invoice_key == 'max_amount')
                            {
                                foreach ($item as $k=> $data)
                                {
                                    $invoice_array[$k]['max_amount'] = priceFormatUpdate($data,settingHelper('default_currency'));
                                }
                            }
                            if ($invoice_key == 'min_amount')
                            {
                                foreach ($item as $k=> $data)
                                {
                                    $invoice_array[$k]['min_amount'] = priceFormatUpdate($data,settingHelper('default_currency'));
                                }
                            }
                            if ($invoice_key == 'fee')
                            {
                                foreach ($item as $k=> $data)
                                {
                                    $invoice_array[$k]['fee'] = priceFormatUpdate($data,settingHelper('default_currency'));
                                }
                            }
                        }
                        $value      = $invoice_array;
                    }
                    $value      = serialize($value);
                endif;


                if (blank($setting)) :
                    $setting        = new Setting();
                    $setting->title = $key;
                    //if change by chosen lang set lang = chosen lang
                    if (isset($site_lang) && in_array($key, get_yrsetting('setting_by_lang'))):
                        $setting->lang  = $site_lang;
                    else:
                        $setting->lang  = 'en';
                    endif;
                    $setting->value = $value;
                else:
                    //if change by chosen lang set lang = chosen lang
                    if (isset($site_lang) && in_array($key, get_yrsetting('setting_by_lang'))):
                        $setting->lang  = $site_lang;
                    else:
                        $setting->lang  = 'en';
                    endif;
                    $setting->value = $value;
                endif;

                $setting->save();

            endforeach;

            DB::commit();
            Cache::forget('settings');

            if ($request->has('system_name')):
                $system_name = Setting::where('title', 'system_name')->where('lang',config('app.locale'))->first();
                if (!blank($system_name)):
                    envWrite('APP_NAME',$system_name->value);
                else:
                    $system_name = Setting::where('title', 'system_name')->first();
                    if (!blank($system_name)):
                        envWrite('APP_NAME',$system_name->value);
                    endif;
                endif;
            endif;

            if ($request->has('is_cache_enabled')):
                if (settingHelper('is_cache_enabled') == 'enable'):
                    if(settingHelper('default_cache') == 'redis'):
                        envWrite('CACHE_DRIVER', 'redis');
                        envWrite('REDIS_CLIENT', 'predis');
                        envWrite('REDIS_HOST',settingHelper('redis_host'));
                        envWrite('REDIS_PASSWORD',settingHelper('redis_password'));
                        envWrite('REDIS_PORT',settingHelper('redis_port'));
                    else:
                        envWrite('CACHE_DRIVER', 'file');
                    endif;
                else:
                    envWrite('CACHE_DRIVER', 'file');
                endif;
            endif;
            if($request->has('default_storage')):
                if ($request->default_storage == 'aws_s3'):
                    $aws_url                    ="http://".settingHelper('aws_bucket').".s3.".settingHelper('aws_default_region').".amazonaws.com";

                    envWrite('AWS_ACCESS_KEY_ID', settingHelper('aws_access_key_id'));
                    envWrite('AWS_SECRET_ACCESS_KEY', settingHelper('aws_secret_access_key'));
                    envWrite('AWS_DEFAULT_REGION', settingHelper('aws_default_region'));
                    envWrite('AWS_BUCKET', settingHelper('aws_bucket'));
                    envWrite('AWS_URL', $aws_url);
                    envWrite('FILESYSTEM_DRIVER', 's3');
                elseif ($request->default_storage == 'wasabi'):
                    $was_url                    ="https://".settingHelper('wasabi_bucket').".s3.".settingHelper('wasabi_default_region').".wasabisys.com";

                    envWrite('WAS_ACCESS_KEY_ID', settingHelper('wasabi_access_key_id'));
                    envWrite('WAS_SECRET_ACCESS_KEY', settingHelper('wasabi_secret_access_key'));
                    envWrite('WAS_DEFAULT_REGION', settingHelper('wasabi_default_region'));
                    envWrite('WAS_BUCKET', settingHelper('wasabi_bucket'));
                    envWrite('WAS_URL', $was_url);
                    envWrite('FILESYSTEM_DRIVER', 'wasabi');
                else:
                    envWrite('FILESYSTEM_DRIVER', 'local');
                endif;
            endif;

            if ($request->has('pusher_app_key')):
                //pushar
                if (checkEmptyProvider('is_pusher_notification_active')):
                    envWrite('PUSHER_APP_KEY', settingHelper('pusher_app_key'));
                    envWrite('PUSHER_APP_SECRET', settingHelper('pusher_app_secret'));
                    envWrite('PUSHER_APP_ID', settingHelper('pusher_app_id'));
                    envWrite('PUSHER_APP_CLUSTER', settingHelper('pusher_app_cluster'));
                endif;
            endif;

            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function updateHomePageContents($content)
    {
        DB::beginTransaction();
        try {
            $setting            = Setting::where('title', 'home_page_contents')->first();
            if (blank($setting)) :
                $setting        = new Setting();
                $setting->title = 'home_page_contents';
            endif;
            $setting->value = serialize($content);
            $setting->save();
            DB::commit();
            Cache::forget('settings');
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function updateMobileHomePageContents($content): bool
    {
        DB::beginTransaction();
        try {
            $setting            = Setting::where('title', 'mobile_home_page_contents')->first();
            if (blank($setting)) :
                $setting        = new Setting();
                $setting->title = 'mobile_home_page_contents';
            endif;
            $setting->value = serialize($content);
            $setting->save();
            DB::commit();
            Cache::forget('settings');
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request){
        DB::beginTransaction();
        try {
            if (in_array($request['id'], get_yrsetting('setting_by_lang'))):
                $default_language       = settingHelper('default_language');
            else:
                $default_language       = 'en';
            endif;
            $setting                = Setting::where('title', $request['id'])->where('lang', $default_language)->first();


            if (blank($setting)) :
                $setting            = new Setting();
                $setting->title     = $request['id'];
                $setting->value     = $request['status'];
                $setting->lang      = $default_language;
            else :
                if($setting->title == "category_commission_status"):
                    $seller_commission_status = Setting::where('title', 'seller_commission_status')->where('lang', $default_language)->first();

                    $seller_commission_status->value = 0;
                    $seller_commission_status->save();

                    $setting->value     = $request['status'];
                    $setting->lang      = $default_language;

                elseif($setting->title == "seller_commission_status"):
                    $seller_commission_status = Setting::where('title', 'category_commission_status')->where('lang', $default_language)->first();

                    $seller_commission_status->value = 0;
                    $seller_commission_status->save();

                    $setting->value     = $request['status'];
                    $setting->lang      = $default_language;

                else:
                    $setting->value     = $request['status'];
                    $setting->lang      = $default_language;
                endif;
            endif;


            $setting->save();

            DB::commit();
            Cache::forget('settings');

            if (in_array('is_pusher_notification_active',$request)):
               $setting =  Setting::where('title', 'is_pusher_notification_active')->where('lang', $default_language)->first();
                if ($setting->value == 1):
                    envWrite('BROADCAST_DRIVER', 'pusher');
                else:
                    envWrite('BROADCAST_DRIVER', 'null');
                endif;
            endif;

            if (in_array('is_recaptcha_activated',$request)):
               $setting =  Setting::where('title', 'is_recaptcha_activated')->where('lang', $default_language)->first();
                if ($setting->value == 1):

                    envWrite('NOCAPTCHA_SECRET', settingHelper('recaptcha_secret'));
                    envWrite('NOCAPTCHA_SITEKEY', settingHelper('recaptcha_Site_key'));
                else:
                    envWrite('NOCAPTCHA_SECRET', '');
                    envWrite('NOCAPTCHA_SITEKEY', '');
                endif;
            endif;
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function deleteBanner($request)
    {
        try{
            $setting    = Setting::where('title', $request->title)->first();
            $setting->value = '';
            $setting->save();
            DB::commit();
            return true;
        }catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function updateServer($request)
    {
        try {
            if (class_exists('ZipArchive')) :
                if ($request->has('update_file')) :
                    $zip            = new ZipArchive();
                    $file           = $this->media->get($request->update_file);
                    $open_able      = $zip->open(get_media($file->original_file,$file->storage,true));

                    if ($open_able === true) :
                        $zip->extractTo(base_path());
                        $zip->close();
                        Toastr::success(__('Server updated successfully'));
                        return true;
                    else:
                        Toastr::warning(__('Unable to open file, please try again'));
                        return false;
                    endif;
                endif;
            else:
                Toastr::error(__('Please enable ZipArchive extension to update'));
                return false;
            endif;
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }
    }
}
