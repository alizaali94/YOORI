<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AddonInstallRequest;
use App\Repositories\Interfaces\Admin\AddonInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AddonController extends Controller
{
    protected $addon;

    public function __construct(AddonInterface $addon){
        $this->addon = $addon;
    }
    public function installAddons(){

        $addons = $this->addon->paginate(get_pagination('pagination'));
        return view('admin.addons.installed-addons',compact('addons'));
    }

    public function availableAddons(){

//        $url        = "https://desk.spagreen.net/yoori-plugins";

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://desk.spagreen.net/yoori-plugins",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_SSL_VERIFYPEER=> false,
            CURLOPT_MAXREDIRS => 2,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer gjMhFjGmLXsafyZ2",
                "Content-Type: application/json",
            ),

        ));

        $response = curl_exec($curl);

        $curl_info      = curl_getinfo($curl);
        curl_close($curl);

//        $response   = Http::get($url);

            $decodedResponse =json_decode($response);
            return view('admin.addons.available-addons',compact('decodedResponse','curl_info'));

    }
    public function statusChange(Request $request){
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if($this->addon->statusChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title']   = __('Success');
            $response['status']   = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title']   = __('Ops..!');
            $response['status']   = 'error';
            return response()->json($response);
        endif;
    }

    public function installNewAddon(AddonInstallRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($response = $this->addon->install($request)):
            if ($response !== true){

                return redirect()->route('admin.installed.addon')->with('response', $response);
            }
            return redirect()->back()->with('success', __('Addon installed successfully'));
        else:
//            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
}
