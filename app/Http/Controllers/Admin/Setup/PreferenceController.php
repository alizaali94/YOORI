<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\GeneralSettingRequest;
use App\Http\Requests\Admin\Setup\PreferenceSettingRequest;
use App\Models\Setting;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Utility\AppSettingUtility;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use function PHPUnit\Framework\directoryExists;

class PreferenceController extends Controller
{
    private $settings;

    public function __construct(SettingInterface $settings)
    {
        $this->settings     = $settings;
    }

    public function index(){
        return view('admin.system-setup.preference');
    }

    public function update(Request $request)
    {
        if (array_key_exists('maintenance_secret', $request->all())):
            $command = $request['maintenance_secret'];
            if ($this->settings->update($request)):
                if (isDemoServer()):
                    Toastr::info(__('This function is disabled in demo server.'));
                    return redirect()->back();
                endif;

                \Artisan::call('down --refresh=15 --secret='.$command);
                Toastr::success(__('Updated Successfully'));
                $url = route('home').'/'.$request['maintenance_secret'];
                return redirect('/'.$command);
            else:
                Toastr::error(__('Something went wrong, please try again'));
                return back();
            endif;
        endif;
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if($this->settings->statusChange($request['data'])):
            if ($request['data']['id'] == 'maintenance_mode'):
                \Artisan::call('up');
            endif;

            if ($request['data']['id'] == 'migrate_web'):
                if (is_dir('resources/views/admin/store-front')):
                    envWrite('MOBILE_MODE','off');
                    Artisan::call('optimize:clear');
                else:
                    $response['message']    = __('migrate_permission');
                    $response['title']      = __('error');
                    $response['status']     = 'error';
                    $response['type']       = 'migrate_error';
                    return response()->json($response);
                endif;
            endif;

            $response['message']    = __('Updated Successfully');
            $response['title']      = __('Success');
            $response['status']     = 'success';

            return response()->json($response);
        else:
            $response['message']    = __('Something went wrong, please try again');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

    }
}
