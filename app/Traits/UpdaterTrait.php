<?php

namespace App\Traits;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use ZipArchive;
trait UpdaterTrait{
    public function checkForUpdate()
    {
        try {
            define('ITEM_ID', '37142846');

            $script_url = str_replace("install/process", "", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
            $fields = array(
                'item_id' => urlencode(ITEM_ID),
            );

            $fields_string = '';
            foreach ($fields as $key => $value) {
                $fields_string .= $key . '=' . $value . '&';
            }
            rtrim($fields_string, '&');

            $url = "https://desk.spagreen.net/version-check";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, count($fields));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            $curl_response = curl_exec($ch);
            $curl_info = curl_getinfo($ch);
            curl_close($ch);

            if ($curl_info["http_code"] == "200"):
                return json_decode($curl_response);
            endif;
            return false;

        } catch (\Exception $e){
            return false;
        }
    }

    public function downloadUpdateFile()
    {
        try {
            $url        = 'https://desk.spagreen.net//download-update';
            $params = array(
                "item_id"        => 37142846,
                "purchase_code"  => settingHelper('purchase_code')
            );

            $data   = http_build_query($params);
            $getUrl = $url."?".$data;

            $response = file_get_contents($getUrl);
            $contents = json_decode($response);
            if (isset($contents->status)):
                return $contents;
            else:
                if (is_dir(base_path('public/update')) == false):
                    try {
                        mkdir(base_path('public/update'), 0777, true);
                    } catch (\Exception $e) {
                        return false;
                    }
                endif;
                $path = base_path('public/update/update.zip');

                file_put_contents($path, $response);
                if (class_exists('ZipArchive')) :
                    $zip            = new ZipArchive();
                    $open_able      = $zip->open($path);

                    if ($open_able === true) :
                        $zip->extractTo(base_path());
                        $zip->close();
                        unlink($path);
                    else:
                        return false;
                    endif;
                else:
                    return 'extension_not_installed';
                endif;

                return true;
            endif;

        } catch (\Exception $e){
            return false;
        }
    }
}
