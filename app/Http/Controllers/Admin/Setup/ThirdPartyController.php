<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\ThirdPartiRequest;
use App\Repositories\Interfaces\Admin\SettingInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class ThirdPartyController extends Controller
{
    private $settings;


    public function __construct(SettingInterface $settings)
    {
        $this->settings     = $settings;
    }

    public function facebookService(){
        return view('admin.system-setup.facebook-service');
    }
    public function googleService(){
        return view('admin.system-setup.google-service');
    }
    public function googleRecaptcha()
    {
        return view('admin.system-setup.google-recaptcha');
    }
    public function pusherNotification(){
        return view('admin.system-setup.pusher-notification');
    }

    public function thirdParty(Request $request){
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
    public function checkEmptyProvider($check_for){
        foreach (get_yrsetting($check_for) as $title):
            if (settingHelper($title) == ''):
                return false;
            endif;
        endforeach;
        return true;
    }
    public function update(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if(!$this->checkEmptyProvider($request['data']['id'])):
            $response['message']    = __('You can active this service when provide all required fields');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        else:
            try {
                if ($this->settings->statusChange($request['data'])):
                    $response['message']    = __('Updated Successfully');
                    $response['title']      = __('Success');
                    $response['status']     = 'success';
                    $response['data']       = 'success';
                    return response()->json($response);
                endif;
            } catch (\Exception $e){
                $response['message']    = __('Something went wrong, please try again');
                $response['title']      = __('Ops..!');
                $response['status']     = 'error';
                return response()->json($response);
            }
        endif;

    }

    public function firebase()
    {
        return view('admin.store-front.firebase');
    }
}
