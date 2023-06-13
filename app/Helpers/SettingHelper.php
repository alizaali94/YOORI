<?php

use App\Utility\AppSettingUtility;

if (!function_exists('settingHelper')) {

    function settingHelper($title, $lang = 'en')
    {
        try {
            $settings = AppSettingUtility::settings();
            if (!blank($title)):
                if (in_array($title, get_yrsetting('setting_array')) || in_array($title, get_yrsetting('setting_image'))):
                    $data = $settings->where('title', $title)->first();
                    if (!blank($data)):
                        return $data->value ? unserialize($data->value) : [];
                    endif;
                else:
                    if (in_array($title, get_yrsetting('setting_by_lang'))) :
                        $data = $settings->where('title', $title)->where('lang', $lang)->first();

                        if (blank($data)):
                            $data = $settings->where('title', $title)->where('lang', 'en')->first();
                            return !blank($data) ? $data->value : '';
                        endif;
                        return $data->value;
                    else:
                        $data = $settings->where('title', $title)->first();
                    endif;
                    return !blank($data) ? $data->value : '';
                endif;
            else:
                return '';
            endif;
        } catch (\Exception $e){
            return '';
        }
    }
}
