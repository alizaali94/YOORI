<?php

namespace App\Repositories\Admin;

use App\Models\Addon;
use App\Repositories\Interfaces\Admin\AddonInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Storage;
use ZipArchive;
use DB;
use File;

class AddonRepository implements AddonInterface
{
    public function all()
    {
        return Addon::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function get($id)
    {
        return Addon::find($id);
    }

    public function install($request)
    {
        $rand_str_dir = Str::random(10);
        try {
            $verify_code = $this->valid_purchase_code($request->purchase_code);
            if($verify_code == 'unverified'):
                Toastr::error('There is a problem with your purchase code.Please contact with Envato support team.');
                return false;
            endif;

            if (class_exists('ZipArchive')) :
                if ($request->hasFile('addon_zip_file')) :
                    // Plugin directory
                    $dir            = 'public/addons';
                    if (!is_dir(base_path($dir))):
                        mkdir(base_path($dir), 0777, true);
                    endif;
                    $storage_path   = Storage::disk('local')->put('addons', $request->addon_zip_file);
                    $zip            = new ZipArchive();
                    $open_able      = $zip->open(storage_path('app/' . $storage_path));

                    if ($open_able === true) :
                        $zip->extractTo(base_path('public/addons/' . $rand_str_dir));
                        $zip->close();
                        Storage::disk('local')->delete($storage_path);
                    else:
                        Toastr::warning(__('Unable to open file, please try again'));
                        return false;
                    endif;

                    $read_json = file_get_contents(base_path('public/addons/' . $rand_str_dir . '/config.json'));
                    $decoded_json = json_decode($read_json, true);

                    if (settingHelper('current_version') >= $decoded_json['required_cms_version']):

                        $addon = Addon::where('addon_identifier', $decoded_json['addon_identifier'])->first();

                        if ($addon):
                            //make required directories
                            $errors = array();
                            if (!empty($decoded_json['directories'])):
                                foreach ($decoded_json['directories'] as $directory):
                                    if (is_dir(base_path($directory)) == false):
                                        try{
                                            mkdir(base_path($directory), 0777, true);
                                        } catch (\Exception $e){
                                            $message = 'Unable to create directory '.base_path($directory);
                                            array_push($errors, $message);
                                        }
                                    endif;
                                endforeach;
                                if (!empty($errors)):
                                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                    $message = '**** Make sure you have writable permissions to these directories and try again ****';
                                    array_push($errors, $message);
                                    return $errors;
                                endif;
                            endif;

                            //create or replace old files
                            if (!empty($decoded_json['files'])):
                                foreach ($decoded_json['files'] as $file):
                                    try{
                                        File::copy(base_path('public/addons/' . $rand_str_dir . '/' . $file['from_directory']), base_path($file['to_directory']));
                                    } catch (\Exception $e){
                                        $message = 'Unable to replace files to '.base_path($file['to_directory']);
                                        array_push($errors, $message);
                                    }
                                endforeach;
                                if (!empty($errors)):
                                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                    $message = '**** Make sure you have writable permissions to these files and try again ****';
                                    array_push($errors, $message);
                                    return $errors;
                                endif;
                            endif;
                            //code for sql
                            if ($addon->version != $decoded_json['version'] ):
                                if (!empty($decoded_json['sql_files'])):
                                    foreach ($decoded_json['sql_files'] as $sql):
                                        $sql_path = base_path('public/addons/' . $rand_str_dir . '/database/' . $sql);
                                        if (file_exists($sql_path)):
                                            try {
                                                DB::unprepared(file_get_contents($sql_path));
                                            } catch (\Exception $e){
                                                $message = $e->getMessage();
                                                array_push($errors, $message);
                                            }
                                        endif;
                                    endforeach;
                                    if (!empty($errors)):
                                        \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                        return $errors;
                                    endif;
                                endif;

                                $addon->version        = $decoded_json['version'];
                                $addon->purchase_code  = $request->purchase_code;
                                $addon->image          = $decoded_json['addon_banner'];
                                $addon->save();
                            endif;
                        else:
                            $errors = array();
                            if (!empty($decoded_json['directories'])):
                                foreach ($decoded_json['directories'] as $directory):
                                    if (is_dir(base_path($directory)) == false):
                                        try{
                                            mkdir(base_path($directory), 0777, true);
                                        } catch (\Exception $e){
                                            $message = 'Unable to create directory '.base_path($directory);
                                            array_push($errors, $message);
                                        }
                                    endif;
                                endforeach;
                                if (!empty($errors)):
                                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                    return $errors;
                                endif;
                            endif;

                            //create or replace old files
                            if (!empty($decoded_json['files'])):
                                foreach ($decoded_json['files'] as $file):
                                    try{
                                        copy(base_path('public/addons/' . $rand_str_dir . '/' . $file['from_directory']), base_path($file['to_directory']));
                                    } catch (\Exception $e){
                                        $message = 'Unable to replace files to '.base_path($file['to_directory']);
                                        array_push($errors, $message);
                                    }
                                endforeach;
                                if (!empty($errors)):
                                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                    return $errors;
                                endif;
                            endif;
                            //code for sql
                            if (!empty($decoded_json['sql_files'])):
                                foreach ($decoded_json['sql_files'] as $sql):
                                    $sql_path = base_path('public/addons/' . $rand_str_dir . '/database/' . $sql);
                                    if (file_exists($sql_path)):
                                        try {
                                            DB::unprepared(file_get_contents($sql_path));
                                        } catch (\Exception $e){
                                            $message = $e->getMessage();
                                            array_push($errors, $message);
                                        }
                                    endif;
                                endforeach;
                                if (!empty($errors)):
                                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                                    return $errors;
                                endif;
                            endif;

                            $addon = new Addon();
                            $addon->name               = $decoded_json['name'];
                            $addon->version            = $decoded_json['version'];
                            $addon->addon_identifier   = $decoded_json['addon_identifier'];
                            $addon->purchase_code      = $request->purchase_code;
                            $addon->image              = $decoded_json['addon_banner'];
                            $addon->save();
                        endif;

                        if ($addon):
                            Cache::forget('addons');
                            Toastr::success(__('Addon Updated successfully'));
                        else:
                            Cache::forget('addons');
                            Toastr::success(__('Addon installed successfully'));
                        endif;
                        \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                        return true;
                    //version error
                    else:
                        \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                        Toastr::warning(__('This version is not capable of installing , Please update.'));
                        return false;
                    endif;
                endif;
            else:
                if (is_dir(base_path('public/addons/' . $rand_str_dir))):
                    \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
                endif;
                Toastr::error(__('Something went wrong, please try again'));
                return false;
            endif;
            if (is_dir(base_path('public/addons/' . $rand_str_dir))):
                \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
            endif;
            Toastr::error(__('No file found'));
            return false;
        } catch (\Exception $e) {
            if (is_dir(base_path('public/addons/' . $rand_str_dir))):
                \File::deleteDirectory(base_path('public/addons/' . $rand_str_dir));
            endif;
            Toastr::error(__('Something went wrong, please try again'));
            dd($e);
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $addon = $this->get($request['id']);
            $addon->status = $request['status'];
            $addon->save();
            Cache::forget('addons');
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            Cache::forget('addons');
            return false;
        }
    }

    public function activePlugin()
    {
        return Addon::where('status',1)->pluck('addon_identifier')->toArray();
    }

    public function activeAddons()
    {
        return Addon::where('status',1)->selectRaw('id,name,addon_identifier,version')->get();
    }

    function valid_purchase_code($purchase_code = ''){
        $purchase_code  = urlencode($purchase_code);
        $verified       = "unverified";
        if(!empty($purchase_code) && $purchase_code !='' && $purchase_code !=NULL && strlen($purchase_code) > 24):
            $url = 'https://api.envato.com/v3/market/author/sale?code='.$purchase_code;
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; Envato API Wrapper PHP)');

            $header = array();
            $header[] = 'Content-length: 0';
            $header[] = 'Content-type: application/json';
            $header[] = 'Authorization: Bearer 5CZXrrM34RPf7ukUzCKqod2BAcQJNKE6';

            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

            $data = curl_exec($ch);
            curl_getinfo($ch,CURLINFO_HTTP_CODE);
            curl_close($ch);
            if( !empty($data) ):
                $result = json_decode($data,true);
                if(isset($result['buyer']) && isset($result['item']['id'])):
                    return $result;
                endif;
            endif;
        endif;
        return $verified;
    }
}
