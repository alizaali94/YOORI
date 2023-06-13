<?php

namespace App\Http\Controllers\Admin\Setup;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Http\Requests\Admin\Setup\StorageSettingRequest;

class StorageSettingsController extends Controller
{
    private $settings;

    public function __construct(SettingInterface $settings){
        $this->settings=$settings;
    }

    public function index(){
        return view('admin.system-setup.storage-settings');
    }
    public function update(StorageSettingRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->settings->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }

}
