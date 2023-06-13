<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PayoutProcessedRequest;
use App\Http\Requests\Admin\SellerSettingRequest;
use App\Repositories\Interfaces\Admin\SellerPayoutInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class SellerPayoutsController extends Controller
{
    protected $payouts;
    private $settings;

    public function __construct(SellerPayoutInterface $sellerPayouts, SettingInterface $settings){
        if(settingHelper('seller_system') != 1){
            abort(403);
        }
        $this->payouts          = $sellerPayouts;
        $this->settings         = $settings;
    }
    public function index($status=null){
        $payouts = $this->payouts->paginate(get_pagination('pagination'),$status);
        return view('admin.sellers.payouts-index',compact('payouts','status'));
    }
    public function payoutRequest(){
        $payouts = $this->payouts->allPayoutRequest(get_pagination('pagination'));
        $payment_types = $this->payouts->allPaymentType();
        return view('admin.sellers.payout-request',compact('payouts','payment_types'));
    }

    public function payoutRequestAccept($id){

        if ($this->payouts->statusChange($id,'accepted')):
            Toastr::success(__('Accepted Successfully'));
        return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
        return back()->withInput();
        endif;
    }
    public function payoutRequestReject($id){

        if ($this->payouts->statusChange($id,'rejected')):
            Toastr::success(__('Rejected Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function payoutRequestProcessed(PayoutProcessedRequest $request){

        if ($this->payouts->payoutRequestProcessed($request,'rejected')):
            Toastr::success(__('payout request successfully processed'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function sellerSetting(){
        return view('admin.sellers.seller-setting');
    }
    public function sellerCommission(SellerSettingRequest $request){
        if ($this->settings->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }
}
