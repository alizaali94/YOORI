<?php

namespace App\Http\Controllers\Admin\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\PickupHubRequest;
use App\Models\PickupHub;
use App\Models\User;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Order\PickupHubInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class PickupHubController extends Controller
{
    private $pickup;
    private $languages;
    public function __construct(PickupHubInterface $pickup, LanguageInterface $languages){
        $this->pickup       = $pickup;
        $this->languages    = $languages;

    }
    public function index(){
        $pickups  = $this->pickup->paginate(get_pagination('pagination'));
        $staffs   = User::where('user_type','staff')->whereDoesntHave('pickupHub')->get();
        return view('admin.orders.pickup-hub-index',compact('staffs','pickups'));
    }
    public function store(PickupHubRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->pickup->store($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }

    public function edit(Request $request, $id){
        $languages      = $this->languages->all()->orderBy('id', 'asc')->get();
        $lang           = $request->lang == '' ? \App::getLocale() : $request->lang;
        $pickups_lang   = $this->pickup->getByLang($id,$lang);
        $staffs         = User::where('user_type','staff')->get();
        return view('admin.orders.pickup-hub-update',compact('lang','pickups_lang','languages','staffs'));

    }

    public function update(PickupHubRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->pickup->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }
    public function statusChane(Request $request){
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if ($this->pickup->statusChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        endif;
    }
}
