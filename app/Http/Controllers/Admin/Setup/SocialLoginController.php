<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\SocialLoginRequest;
use App\Repositories\Interfaces\Admin\SettingInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class SocialLoginController extends Controller
{
    protected $settings;

    public function __construct(SettingInterface $settings){
        $this->settings = $settings;
    }
    public function index(){
        return view('admin.system-setup.social-login-setting');
    }
    public function socialLoginUpdate(SocialLoginRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->update($request)):
            Toastr::success(__('Social Login Updated Successfully'));
            return redirect()->back()->withInput();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back()->withInput();
        endif;
    }

    public function update(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if(!checkEmptyProvider($request['data']['id'])):
            $response['message']    = __('You can active this service when you will configure all credentials');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        else:
            try {
                if ($this->settings->statusChange($request['data'])):
                    $response['message']    = __('Updated Successfully');
                    $response['title']      = __('Success');
                    $response['status']     = 'success';
                    $response['data']     = 'success';
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
}
