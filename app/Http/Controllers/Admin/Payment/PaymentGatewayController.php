<?php

namespace App\Http\Controllers\Admin\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Http\Requests\Admin\PaymentGateway\PaymentGatewayRequest;
use App\Repositories\Interfaces\Admin\Payment\PaymentGatewayInterface;
use Stripe;
use Session;

class PaymentGatewayController extends Controller
{
    protected $settings;
    public function __construct(SettingInterface $settings){

        $this->settings = $settings;

    }
    public function index(){
        return view('admin.settings.payment-gateway.index');
    }

    public function paymentUpdate(PaymentGatewayRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->update($request)):
            Toastr::success(__('Payment Methods Updated Successfully'));
            return redirect()->back()->withInput();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }

    public function testPayment(){
//        return view('admin.settings.payment-gateway.test-payment');
    }
    public function stripePayment(Request $request){
        Stripe\Stripe::setApiKey(settingHelper('stripe_secret'));
        $data = Stripe\Charge::create([
            "amount"=>200*100,
            "currency"=>"usd",
            "source"=>$request->stripeToken,
            "description"=>"Test payment from expert rohila 2"
        ]);
        echo "<pre>"; print_r($data); die();
        Session::flash("success","Payment successfully!");

        return back();
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
