<?php

namespace App\Http\Controllers\Site;

use Anand\LaravelPaytmWallet\Facades\PaytmWallet;
use App\Http\Controllers\Controller;
use App\Library\SslCommerz\SslCommerzNotification;
use App\Models\Country;
use App\Repositories\Admin\CurrencyRepository;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Traits\ApiReturnFormatTrait;
use App\Traits\HomePage;
use App\Traits\PaymentTrait;
use App\Utility\AppSettingUtility;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\URL;
use Obydul\LaraSkrill\SkrillClient;
use Obydul\LaraSkrill\SkrillRequest;
use Sentinel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Mollie\Api\Exceptions\ApiException;
use Stripe\Stripe;
use Tymon\JWTAuth\Facades\JWTAuth;
use Xenon\NagadApi\Base;
use Xenon\NagadApi\Helper;

class PaymentController extends Controller
{
    use HomePage,PaymentTrait,ApiReturnFormatTrait;

    public $order;

    public function __construct(OrderInterface $order)
    {
        $this->order = $order;
    }

    public function tokenGenerator($data): string
    {
        if (arrayCheck('type',$data) && $data['type'] == 'wallet')
        {
            $trx_id = Str::random();
        }
        else{
            $trx_id = arrayCheck('trx_id',$data) ? $data['trx_id'] : '';
        }
        return $trx_id;
    }

    public function codeGenerator($data): string
    {
        return arrayCheck('code',$data) && $data['code'] != 'undefined' ? $data['code'] : '';
    }

    public function findOrders($data)
    {
        if ($this->codeGenerator($data)) {
            $orders = $this->order->orderByCodes($data['code']);
        } else {
            $orders = $this->order->takePaymentOrder($this->tokenGenerator($data));
        }
        return $orders;
    }

    protected function apiToken($data): string
    {
        return arrayCheck('token',$data) ? $data['token'] : '';
    }

    public function successUrl($request,$user=null,$amount=null)
    {
        $token = $this->apiToken($request->all());

        if($request->type == 'wallet' && $user)
        {
            $str = Str::random();
            $url = URL::temporarySignedRoute('recharge.wallet', now()->addMinutes(5), [
                'user_id' => $user->id,
                'total' => $amount,
                'transaction_id' => $str,
                'response' => 'yes',
                'payment_type' => $request->payment_type,
                'token' => $token
            ]);
        }
        else
        {
            if (authUser() || $token)
            {
                if ($request->payment_mode == 'api')
                {
                    $url = url("api/complete-order?trx_id=$request->trx_id&code=$request->code&payment_type=$request->payment_type&token=$token&curr=$request->curr&paymentID=$request->paymentID");

                }
                else
                {
                    $url = url("user/complete-order?trx_id=$request->trx_id&code=$request->code&payment_type=$request->payment_type&paymentID=$request->paymentID");
                }
            }
            else
            {
                if ($request->payment_mode == 'api')
                {
                    $url = url("api/complete-order?guest=1&trx_id=$request->trx_id&payment_type=$request->payment_type&curr=$request->curr&paymentID=$request->paymentID");
                }
                else
                {
                    $url = url("user/complete-order?guest=1&trx_id=$request->trx_id&payment_type=$request->payment_type&paymentID=$request->paymentID");
                }

            }
        }
        return $url;
    }

    public function cancelUrl($request)
    {
        if($request->type == 'wallet' || $request->payment_mode == 'wallet_recharge')
        {
            $url = url("my-wallet");
        }
        else
        {
            if ($request->payment_mode == 'api')
            {
                $url = url("api/complete-order?trx_id=$request->trx_id&code=$request->code&payment_type=$request->payment_type&token=$request->token&curr=$request->curr");
            }
            else
            {
                $url = url("payment");
            }
        }

        return $url;
    }

    public function findUser($data)
    {
        $user = null;
        if (arrayCheck('token',$data))
        {
            try {
                $user = JWTAuth::parseToken()->authenticate();
            } catch (\Exception $e) {
                $user ='';
            }
        }
        if (!$user)
        {
            $user = authUser();
        }
        elseif (!authUser())
        {
            $user = getWalkInCustomer();
        }
        return $user;
    }

    public function indianAmountCalculator($orders=null,$data): array
    {
        $repo=new CurrencyRepository();
        $india_currency = $repo->currencyByCode('INR');
        $amount = $orders && count($orders) > 0 ? $orders->sum('total_payable') : $data['amount'];

        $active_currency = $this->activeCurrencyCheck($data);

        $rate = $amount/$active_currency->exchange_rate;

        $db_amount = 0;
        if (array_key_exists('type', $data) && $data['type'] == 'wallet')
        {
            if ($active_currency->code != $india_currency->code)
            {
                $total_amount = $rate * $india_currency->exchange_rate;
                $db_amount = $rate;
            }
            else{
                $total_amount = $amount;
                $db_amount = $amount/$india_currency->exchange_rate;
            }
        }
        else{
            if ($active_currency->code != $india_currency->code)
            {
                $total_amount = $rate * $india_currency->exchange_rate;
            }
            else{
                $total_amount = $amount * $india_currency->exchange_rate;
            }
        }

        return [
            'db_amount'     => $db_amount,
            'total_amount'  => $total_amount,
        ];
    }

    public function findSystemCountry(): string
    {
        $country = Country::find(settingHelper('default_country'));
        if ($country)
        {
            $region = $country->iso3;
        }
        else{
            $region = 'USA';
        }
        return $region;
    }

    public function findAmount($data,$orders=null,$active_currency=null)
    {
        $amount = 0;

        if (arrayCheck('type',$data) && $data['type'] == 'wallet')
        {
            $amount = $data['amount'];
        }
        else{
            if ($orders && count($orders) > 0)
            {
                if ($active_currency)
                {
                    $amount = $orders->sum('total_payable') * $active_currency->exchange_rate;
                }
                else{
                    $amount = $orders->sum('total_payable');
                }
            }
        }
        return $amount;
    }

    public function stripeRedirect(Request $request)
    {
        try {
            Stripe::setApiKey(settingHelper('stripe_secret'));
            $data = $request->all();
            $request['payment_type'] = 'stripe';
            $orders = $this->findOrders($data);
            $active_currency = $this->activeCurrencyCheck($data);
            $amount = $this->findAmount($data,$orders);
            $url = $this->successUrl($request,$this->findUser($data),$this->findAmount($data,$orders,$active_currency));
            if ($request->type != 'wallet' && count($orders) == 0) {
                return back()->with(['error' => __('Oops.....Something Went Wrong')]);
            }
            $left = ['acss_debit', 'affirm', 'afterpay_clearpay', 'au_becs_debit', 'bacs_debit', 'boleto', 'fpx', 'grabpay', 'konbini', 'oxxo', 'paynow', 'promptpay', 'wechat_pay'];
            $us = ['card', 'alipay', 'us_bank_account', 'klarna'];
            $eur = ['bancontact', 'eps', 'ideal', 'p24', 'sepa_debit', 'sofort', 'card'];

            if ($active_currency && $active_currency->code == 'EUR') {
                $stripe_currency = strtolower($active_currency->code);
            } else {
                $stripe_currency = 'usd';
            }

            if ($request->type == 'wallet')
            {
                if ($active_currency->code == 'USD' || $active_currency->code == 'EUR') {
                    $amount = round($amount * 100);
                } else {
                    $amount = round(($amount *100) /$active_currency->exchange_rate);
                }
            }
            else{
                $amount = $stripe_currency == 'eur' ? round(($amount*100) * $active_currency->exchange_rate) : round($amount*100);
            }

            $session = \Stripe\Checkout\Session::create([
                'payment_method_types' => $stripe_currency == 'eur' ? $eur : $us,
                //            'payment_intent_data' => 'shipping',
                'line_items' => [
                    [
                        'price_data' => [
                            'currency' => $stripe_currency,
                            'product_data' => [
                                'name' => "Payment"
                            ],
                            'unit_amount' => $amount,
                        ],

                        'quantity' => 1,
                    ]
                ],
                'phone_number_collection' => [
                    'enabled' => true,
                ],

                'mode' => 'payment',
                'success_url' => $url,
                'cancel_url' => url()->previous(),
            ]);
            session()->put('payment_intent', $session->payment_intent);
            return redirect($session->url);
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function mollieRedirect(Request $request)
    {
        try {
            mollie()->setApiKey(settingHelper('mollie_api_key'));

            $data                       = $request->all();
            $request['payment_type']    = 'mollie';
            $orders                     = $this->findOrders($data);
            $url                        = $this->successUrl($request);

            if (count($orders) == 0) {
                return back()->with(['error' => __('Oops.....Something Went Wrong')]);
            }

            $euro_exchange_rate      = 1;
            $euro = AppSettingUtility::currencies()->where('code','EUR')->first();
            if($euro):
                $euro_exchange_rate     = $euro->exchange_rate;
            endif;

            $payment = mollie()->payments()->create([
                'amount' => [
                    'currency' => 'EUR', // Type of currency you want to send
                    'value' => number_format($orders->sum('total_payable') * $euro_exchange_rate, 2, '.', ''), // You must send the correct number of decimals, thus we enforce the use of strings
                ],
                'description' => __('payment_by') . ' ' . settingHelper('system_name'),
                'redirectUrl' => $url, // after the payment completion where you to redirect
                //            "webhookUrl" => route('webhooks.mollie'),
                "metadata" => [
                    "order_id" => date('YmdHis'),
                ],
            ]);

            session()->put('id', $payment->id);// redirect customer to Mollie checkout page
            cache()->put('id', $payment->id);// redirect customer to Mollie checkout page

            return redirect($payment->getCheckoutUrl(), 303);
        } catch (ApiException $e) {
            return back()->with(['error' => __('Oops.....Something Went Wrong')]);
        }
    }

    public function mollieSuccess(Request $request, OfflineMethodInterface $offlineMethod)
    {
        DB::beginTransaction();
        $user = authUser();


        $data = [
            'trx_id' => $request->trx,
            'payment_type' => 'mollie',
        ];

        if (!$user) {
            $user = getWalkInCustomer();
            $data['guest'] = 1;
        }

        if ($request->code) {
            $data['code'] = $request->code;
        }

        try {
            $this->order->completeOrder($data, authUser(), $offlineMethod);
            $data = [
                'success' => __('Order Completed')
            ];

            DB::commit();

            if (request()->ajax()) {
                return response()->json($data);
            } else {
                if ($request->code) {
                    return redirect('get-invoice/' . $request->code);
                } else {
                    return redirect('invoice/' . session()->get('trx_id'));
                }
            }
        } catch (\Exception $e) {
            DB::rollBack();
            session()->forget('trx_id');
            if (request()->ajax()) {
                return response()->json([
                    'error' => __('Oops.....Something Went Wrong')
                ]);
            } else {
                return redirect()->back()->with(['error' => __('oops...Something Went Wrong')]);
            }
        }
    }

    public function rechargeWithMollie(Request $request)
    {
        try {
            mollie()->setApiKey(settingHelper('mollie_api_key'));

            $data                       = $request->all();
            $request['payment_type']    = 'mollie';
            $active_currency            = $this->activeCurrencyCheck($data);

            if(isset($data['curr'])){
                $api_curr = AppSettingUtility::currencies()->where('code',$data['curr'])->first();
            }

            $euro = AppSettingUtility::currencies()->where('code','EUR')->first();
            if($euro):
                $euro_exchange_rate     = $euro->exchange_rate;
            endif;

            $base_currency_amount = $data['amount'] / $active_currency->exchange_rate;

            if(isset($data['token'])){
                if($data['curr'] != "EUR"){
                    $final_amount = $base_currency_amount * $euro_exchange_rate;
                }else{
                    $base_currency_amount = $data['amount'] / $api_curr->exchange_rate;
                    $final_amount = $data['amount'] * 1;
                }
            }else{
                if($active_currency->code != "EUR"){
                    $final_amount = $base_currency_amount * $euro_exchange_rate;
                }else{
                    $final_amount = $data['amount'] * 1;
                }
            }

            $payment = mollie()->payments()->create([
                'amount' => [
                    'currency' => 'EUR', // Type of currency you want to send
                    'value' => number_format($final_amount, 2, '.', ''), // You must send the correct number of decimals, thus we enforce the use of strings
                ],
                'description' => __('Recharge') . ' ' . settingHelper('system_name'),
                'redirectUrl' => url($request->token ? 'mollie/recharge-success?amount='.$base_currency_amount.'&token='.$request->token : 'mollie/recharge-success?amount='.$base_currency_amount), // after the payment completion where you to redirect
            ]);
            $payment = mollie()->payments()->get($payment->id);
            session()->put('id', $payment->id);// redirect customer to Mollie checkout page
            return redirect($payment->getCheckoutUrl(), 303);
        } catch (ApiException $e) {
            return back()->with(['error' => __('Oops.....Something Went Wrong')]);
        }
    }

    public function mollieRechargeSuccess(Request $request, WalletInterface $wallet)
    {
        $user = null;
        if ($request->token) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }

        $data['payment_type'] = 'mollie';
        $data['amount'] = $request->amount;
        $source = 'wallet_recharge';
        $payment_details = $this->methodCheck($data,[]);

        $userWallet['user_id']              = authId() ?: $user->id;
        $userWallet['order_id']             = null;
        $userWallet['amount']               = $data['amount'];
        $userWallet['source']               = $source;
        $userWallet['type']                 = 'income';
        $userWallet['status']               = 'pending';
        $userWallet['image']                = array_key_exists('file',$data) ? $data['file'] : [];
        $userWallet['transaction_id']       = array_key_exists('transaction_id',$data) ? $data['transaction_id'] : null;
        $userWallet['payment_method']       = $data['payment_type'];
        $userWallet['payment_details']      = $payment_details;

        $wallet->customerBalanceStore($userWallet, 'wallet_recharge');

        sendNotification(Sentinel::findById(1),"New Wallet Request Is Created.",'success',"wallet/recharge-requests",'');

        return redirect('my-wallet');
    }

    public function jazzCash(): bool
    {
        return true;
    }

    public function sslResponse(Request $request)
    {
        try {
            $bdt_currency = $this->bdtCurrency();

            if (!$bdt_currency)
            {
                return false;
            }

            $data                       = $request->all();
            $request['payment_type']    = 'ssl_commerze';
            $orders                     = $this->findOrders($data);
            $active_currency            = $this->activeCurrencyCheck();
            $user                       = $this->findUser($data);
            $url                        = '';
            $amount                     = $this->bdAmountCalculator($orders,$data,$active_currency,$bdt_currency);
            $post_data['total_amount']  = round($amount['total_amount']);
            $db_amount                  = $amount['db_amount'];

            $post_data['currency']          = "BDT";
            $post_data['tran_id']           = date('YmdHis'); // tran_id must be unique
            # CUSTOMER INFORMATION
            $post_data['cus_name']          = 'cus_name';
            $post_data['cus_email']         = 'cus_email';
            $post_data['cus_add1']          = 'Customer Address';
            $post_data['cus_add2']          = "";
            $post_data['cus_city']          = "";
            $post_data['cus_state']         = "";
            $post_data['cus_postcode']      = "";
            $post_data['cus_country']       = "Bangladesh";
            $post_data['cus_phone']         = 'cus_phone';
            $post_data['cus_fax']           = "";
            # SHIPMENT INFORMATION
            $post_data['ship_name']         = "Store Test";
            $post_data['ship_add1']         = "Dhaka";
            $post_data['ship_add2']         = "Dhaka";
            $post_data['ship_city']         = "Dhaka";
            $post_data['ship_state']        = "Dhaka";
            $post_data['ship_postcode']     = "1000";
            $post_data['ship_phone']        = "";
            $post_data['ship_country']      = "Bangladesh";
            $post_data['shipping_method']   = "NO";
            $post_data['product_name']      = "Computer";
            $post_data['product_category']  = "Goods";
            $post_data['product_profile']   = "physical-goods";

            config(['sslcommerz.success_url' => str_replace(url('/'), '', $this->successUrl($request,$user,$db_amount))]);
            config(['sslcommerz.cancel_url' => str_replace(url('/'), '', $this->cancelUrl($request))]);

            config(['sslcommerz.apiCredentials.store_id' => settingHelper('sslcommerz_id')]);
            config(['sslcommerz.apiCredentials.store_password' => settingHelper('sslcommerz_password')]);

            $sslc = new SslCommerzNotification();

            $response = $sslc->makePayment($post_data);
            if ($response)
            {
                $data = json_decode($response);
                $url = $data->data;
            }
            if ($url)
            {
                return redirect($url);
            }
            else{
                return back()->with(['error' => __('Ops..!')]);
            }

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function paytmPayment(Request $request)
    {
        try {
            $user                       = authUser();
            $data                       = $request->all();
            $trx_id                     = $this->tokenGenerator($data);
            $request['payment_type']    = 'paytm';
            $orders                     = $this->findOrders($data);
            $code                       = $this->codeGenerator($data);
            $token                      = $this->apiToken($data);
            $amount                     = $this->indianAmountCalculator($orders,$data);
            $total_amount               = $amount['total_amount'];
            $db_amount                  = $amount['db_amount'];

            if (authUser() || $token)
            {
                if ($request->payment_mode == 'api')
                {
                    try {
                        if (!$user = JWTAuth::parseToken()->authenticate()) {
                            return $this->responseWithError(__('unauthorized_user'), [], 401);
                        }
                    } catch (\Exception $e) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                    $url = url('paytm/success?trx_id='.$trx_id.'&code='.$code.'&payment_type=paytm&&payment_mode=api&token='.$token.'&curr='.$request->curr);
                }
                else
                {
                    $url = url('paytm/success?trx_id='.$trx_id.'&code='.$code.'&payment_type=paytm');
                }
                if ($request->type == 'wallet')
                {
                    $url = url("paytm/success?user_id=$user->id&total=$db_amount&transaction_id=$trx_id&payment_type=$request->payment_type&type=wallet");
                }
            }
            else{
                $user   = getWalkInCustomer();
                if ($request->payment_mode == 'api')
                {
                    $url = url('paytm/success?trx_id='.$trx_id.'&code='.$code.'&payment_type=paytm&payment_mode=api&guest=1&curr='.$request->curr);
                }
                else
                {
                    $url = url('paytm/success?trx_id='.$trx_id.'&code='.$code.'&payment_type=paytm&guest=1');
                }
            }

            $payment = PaytmWallet::with('receive');

            $payment->prepare([
                'order' => Str::random(),
                'user' => $user->id,
                'mobile_number' => $user->phone ?? '00000001111',
                'email' => $user->email ?? Str::slug(settingHelper('system_name')) . '@yoori.com',
                'amount' => round($total_amount,2),
                'callback_url' => $url
            ]);

            return $payment->receive();
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function payTmSuccess(Request $request, OfflineMethodInterface $offlineMethod)
    {
        DB::beginTransaction();

        if ($request->STATUS == 'TXN_FAILURE')
        {
            $url = url("payment");

            if ($request->payment_mode == 'api')
            {
                $url = url("api/v100/payment?trx_id=$request->trx_id&token=$request->token&curr=$request->curr&lang=$request->lang");
            }
            session()->flash('error', $request->RESPMSG);
            return redirect($url);
        }
        if ($request->type == 'wallet')
        {
            $str = Str::random();
            return redirect(URL::temporarySignedRoute('recharge.wallet', now()->addMinutes(5), ['user_id' => $request->user_id, 'total' => $request->total, 'transaction_id' => $str, 'response' => 'yes','payment_type' => $request->payment_type]));
        }

        $user = authUser();

        $data = [
            'trx_id' => $request->trx,
            'payment_type' => 'paytm',
        ];

        if (!$user) {
            $user = getWalkInCustomer();
            $data['guest'] = 1;
        }

        if ($request->code) {
            $data['code'] = $request->code;
        }

        try {
            $this->order->completeOrder($data, authUser(), $offlineMethod);
            $data = [
                'success' => __('Order Completed')
            ];

            DB::commit();

            if (request()->ajax()) {
                return response()->json($data);
            } else {
                if ($request->code) {
                    return redirect('get-invoice/' . $request->code);
                } else {
                    return redirect('invoice/' . $request->trx_id);
                }
            }
        } catch (\Exception $e) {
            DB::rollBack();

            session()->forget('trx_id');
            if (request()->ajax()) {
                return response()->json([
                    'error' => __('Oops.....Something Went Wrong')
                ]);
            } else {
                return redirect()->back()->with(['error' => __('oops...Something Went Wrong')]);
            }
        }
    }

    public function mercadoPago(Request $request)
    {
        $access_key = settingHelper('mercadopago_access');

        if (!$access_key)
        {
            return back()->with(['warning' => __('provide_correct_credential')]);
        }

        $data                       = $request->all();
        $request['payment_type']    = 'mercadopago';
        $data                       = $this->tokenGenerator($data);
        $orders                     = $this->findOrders($data);
        $success_url                = $this->successUrl($request);

        $billing_details = [
            'name'=> '',
            'postal_code'=> '',
        ];

        if (count($orders) > 0)
        {
            $order = $orders->first();

            if (!$order->pickup_hub_id && $order->billing_address && count($order->billing_address) > 0)
            {
                $billing_details = $order->billing_address;
            }
        }

        $data = [
            'success_url'       => $success_url,
            'fail_url'          => url()->previous(),
            'billing_details'   => $billing_details,
            'amount'            => $orders->sum('total_payable'),
        ];

        return view('frontend.payments.mercado_pago',$data);
    }

    public function telrRedirect(Request $request)
    {
        $data                       = $request->all();
        $request['payment_type']    = 'telr';
        $orders                     = $this->findOrders($data);
        $success_url                = $this->successUrl($request);

        $params = [
            'ivp_method'  => 'create',
            'ivp_store'   => settingHelper('telr_store_id'),
            'ivp_authkey' => settingHelper('telr_auth_key'),
            'ivp_cart'    => rand(),
            'ivp_test'    => '1',
            'ivp_amount'  => round($orders->sum('total_payable'),2),
            'ivp_currency'=> 'AED',
            'ivp_desc'    => 'Order Processes',
            'return_auth' => $success_url,
            'return_can'  => $this->cancelUrl($request),
            'return_decl' => $this->cancelUrl($request)
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://secure.telr.com/gateway/order.json");
        curl_setopt($ch, CURLOPT_POST, count($params));
        curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
        $results = curl_exec($ch);
        curl_close($ch);
        $results = json_decode($results,true);
        $ref= isset($results['order']) ? trim($results['order']['ref']) : '';
        $url= isset($results['order']) ? trim($results['order']['url']) : '';
        if (empty($ref) || empty($url)) {
            return back()->with(['error' => __('failed_to_create_telr')]);
        }
        else{
            return redirect($url);
        }
    }

    public function redirect_to_merchant($url)
    {
        ?>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head><script type="text/javascript">
                function closethisasap() { document.forms["redirectpost"].submit(); }
            </script></head>
        <body onLoad="closethisasap();">

        <form name="redirectpost" method="post" action="<?php echo 'https://sandbox.aamarpay.com/'.$url; ?>"></form>
        </body>
        </html>
        <?php
        exit;
    }

    public function aamarpayRedirect(Request $request)
    {
        $bdt_currency = $this->bdtCurrency();

        if (!$bdt_currency)
        {
            return false;
        }

        if (settingHelper('is_amarpay_sandbox_mode_activated') == 1) {
            $api_url = 'https://sandbox.aamarpay.com/request.php';
        }
        else {
            $api_url = 'https://secure.aamarpay.com/request.php';
        }


        $data                       = $request->all();
        $request['payment_type']    = 'amarpay';
        $orders                     = $this->findOrders($data);
        $active_currency            = $this->activeCurrencyCheck($data);
        $token                      = $this->apiToken($data);
        $user                       = $this->findUser($data);
        $trx_id                     = $this->tokenGenerator($data);
        $code                       = $this->codeGenerator($data);
        $amount                     = $this->bdAmountCalculator($orders,$data,$active_currency,$bdt_currency);
        if (array_key_exists('payment_type',$request->all()) && $request->type == 'wallet') {
            $data['payment_type']  = 'aamarpay';
            $payment['trx_id']     = $trx_id;
            $payment['code']       = $code;
            $payment['api_token']  = '';
            $payment['is_guest']   = $user->id;
            $payment['amount']     =  $amount['db_amount'];
            $payment['type']       = '';
            DB::table('payment_method')->insert($payment);
        }

        $success_url = '';
        if ($request->type != 'wallet')
        {
            if ($request->payment_mode == 'api')
            {
                $success_url = url("api/complete-order?payment_type=amarpay");
            }
            else
            {
                $success_url = url("user/complete-order?payment_type=amarpay");
            }
        }else if($request->type == 'wallet'){
            $success_url = url("user/recharge-wallet?payment_type=amarpay");
        }
        $total_amount               = $amount['total_amount'];
        $fields = [
            'store_id'      => settingHelper('amrapay_store_id'),
            'amount'        => round($total_amount),
            'payment_type'  => 'VISA',
            'currency'      => 'BDT',
            'tran_id'       => date('YmdHis'),
            'cus_name'      => $user ? $user->full_name : 'Yoori Customer',
            'cus_email'     => $user ? $user->email : 'yoori@example.com',
            'cus_add1'      => '',
            'cus_add2'      => '',
            'cus_city'      => '',
            'cus_state'     => '',
            'cus_postcode'  => '',
            'cus_country'   => 'Bangladesh',
            'cus_phone'     => $user ? $user->phone : '01634896248',
            'cus_fax'       => 'Not¬Applicable',
            'ship_name'     => $user ? $user->name : 'Yoori Customer',
            'ship_add1'     => '',
            'ship_add2'     => '',
            'ship_city'     => '',
            'ship_state'    => '',
            'ship_postcode' => '',
            'ship_country'  => 'Bangladesh',
            'desc'          => 'Order Payments',
            'success_url'   => $success_url,
            'fail_url'      => $this->cancelUrl($request),
            'cancel_url'    => $this->cancelUrl($request),
            'opt_a'         => $user || $token ? '' : 1,
            'opt_b'         => $trx_id,
            'opt_c'         => $code,
            'opt_d'         => '',
            'signature_key' => settingHelper('amarpay_signature_key')
        ];
        $fields_string = '';
        foreach($fields as $key=>$value)
        {
            $fields_string .= $key.'='.$value.'&';
        }


        $fields_string = rtrim($fields_string, '&');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $url_forward = str_replace('"', '', stripslashes(curl_exec($ch)));
        curl_close($ch);

        $this->redirect_to_merchant($url_forward);

    }

    public function bkashRedirect(Request $request)
    {
        try {
            $bdt_currency = $this->bdtCurrency();
            if (!$bdt_currency) {
                return false;
            }

            if (settingHelper('is_bkash_sandbox_mode_activated') == 1)
            {
                $base_url = 'https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized';
            }
            else{
                $base_url = 'https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized';
            }

            $data = $request->all();
            $request['payment_type'] = 'bKash';
            $orders = $this->findOrders($data);
            $active_currency = $this->activeCurrencyCheck($data);
            $token = $this->apiToken($data);
            $trx_id = $this->tokenGenerator($data);
            $code = $this->codeGenerator($data);
            $amount = $this->bdAmountCalculator($orders, $data, $active_currency, $bdt_currency);
            $total_amount = $amount['total_amount'];
            $client = new \GuzzleHttp\Client();

            $bkash_token = $this->bKashTokenGenerator($client);

            if ($bkash_token) {
                $auth = $bkash_token;
                session()->put('id_token', $auth);
                $requestbody = [
                    'mode' => '0011',
                    'amount' => round($total_amount, 2),
                    'currency' => 'BDT',
                    'intent' => 'sale',
                    'payerReference' => settingHelper('system_name'),
                    'merchantInvoiceNumber' => date('YmdHis'),
                    'callbackURL' => url("bkash/execute?trx_id=$trx_id&code=$code&token=$token&lang=$request->lang&curr=$request->curr&payment_mode=$request->payment_mode&payment_type=bKash")
                ];

                $requestbodyJson = json_encode($requestbody);

                $response = $client->request('POST', "$base_url/checkout/create", [
                    'body' => $requestbodyJson,
                    'headers' => [
                        'accept' => 'application/json',
                        'content-type' => 'application/json',
                        'Authorization' => $auth,
                        'X-APP-Key' => settingHelper('bkash_app_key'),
                    ],
                ]);
                $obj = json_decode($response->getBody()->getContents());

                return redirect($obj->bkashURL);

            }
            return back()->with(['error' => __('Oops...Something Went Wrong')]);
        } catch (\Exception $e) {
            return back()->with(['error' => __('Oops...Something Went Wrong')]);
        }
    }

    public function bkashExecute(Request $request)
    {
        try {
            $data = $request->all();
            $id = $request->paymentID;
            $status = $request->status;
            $auth = session()->get('id_token');
            $active_currency = $this->activeCurrencyCheck($data);
            $bdt_currency = $this->bdtCurrency();
            $user = $this->findUser($request->all());
            $orders = $this->findOrders($data);
            $amount = $this->bdAmountCalculator($orders, $data, $active_currency, $bdt_currency);
            $db_amount = $amount['db_amount'];
            if (!$id || $status != 'success' || !$auth) {
                return redirect($this->cancelUrl($request))->with(['error' => __('Something went wrong, please try again.')]);
            }
            if ($request->type == 'wallet' && $user) {
                $str = Str::random();
                $url = URL::temporarySignedRoute('recharge.wallet', now()->addMinutes(5), [
                    'user_id' => $user->id,
                    'total' => $db_amount,
                    'transaction_id' => $str,
                    'response' => 'yes',
                    'payment_type' => 'bKash',
                    'token' => $request->token
                ]);
                return redirect($url);
            } else {
                return redirect($this->successUrl($request));
            }
        } catch (\Exception $e) {
            Toastr::error(__('Ops..!'));
            return back();
        }
    }

    public function nagadRedirect(Request $request)
    {
        $currency = new CurrencyRepository();
        $bdt_currency = $currency->currencyByCode('BDT');
        if (!$bdt_currency) {
            return false;
        }

        $data                       = $request->all();
        $request['payment_type']    = 'NAGAD';
        $orders                     = $this->findOrders($data);
        $active_currency            = $this->activeCurrencyCheck($data);
        $token                      = $this->apiToken($data);
        $trx_id                     = $this->tokenGenerator($data);
        $code                       = $this->codeGenerator($data);
        $amount                     = $this->bdAmountCalculator($orders,$data,$active_currency,$bdt_currency);
        $total_amount               = $amount['total_amount'];

        $config = [
            'NAGAD_APP_ENV' => 'development', //development|production
            'NAGAD_APP_LOG' => '1',
            'NAGAD_APP_ACCOUNT' => settingHelper('nagad_merchant_no'), //demo
            'NAGAD_APP_MERCHANTID' => settingHelper('nagad_merchant_id'), //demo
            'NAGAD_APP_MERCHANT_PRIVATE_KEY' => settingHelper('nagad_private_key'),
            'NAGAD_APP_MERCHANT_PG_PUBLIC_KEY' => settingHelper('nagad_public_key'),
            'NAGAD_APP_TIMEZONE' => 'Asia/Dhaka',
        ];

        $nagad = new Base($config, [
            'amount' => round($total_amount,2),
            'invoice' => Helper::generateFakeInvoice(15, true),
            'merchantCallback' => url("nagad/callback?token=$token&lang=$request->lang&curr=$request->curr&code=$code&trx_id=$trx_id"),
        ]);

        return redirect($nagad->payNow($nagad));
    }

    public function nagadVerify(Request $request,OfflineMethodInterface $offlineMethod)
    {
        $config = [
            'NAGAD_APP_ENV' => 'development', //development|production
            'NAGAD_APP_LOG' => '1',
            'NAGAD_APP_ACCOUNT' => settingHelper('nagad_merchant_no'), //demo
            'NAGAD_APP_MERCHANTID' => settingHelper('nagad_merchant_id'), //demo
            'NAGAD_APP_MERCHANT_PRIVATE_KEY' => settingHelper('nagad_private_key'),
            'NAGAD_APP_MERCHANT_PG_PUBLIC_KEY' => settingHelper('nagad_public_key'),
            'NAGAD_APP_TIMEZONE' => 'Asia/Dhaka',
        ];
        $helper = new Helper($config);
        $response = $helper->verifyPayment($request->payment_ref_id);

        if ($response && $response['statusCode'] == "000")
        {
            $data = [
                'merchantId'                => $response['merchantId'],
                'orderId'                   => $response['orderId'],
                'paymentRefId'              => $response['paymentRefId'],
                'amount'                    => $response['amount'],
                'clientMobileNo'            => $response['clientMobileNo'],
                'merchantMobileNo'          => $response['merchantMobileNo'],
                'orderDateTime'             => $response['orderDateTime'],
                'issuerPaymentDateTime'     => $response['issuerPaymentDateTime'],
                'issuerPaymentRefNo'        => $response['issuerPaymentRefNo'],
                'additionalMerchantInfo'    => $response['additionalMerchantInfo'],
                'status'                    => $response['status'],
                'statusCode'                => $response['statusCode'],
                'cancelIssuerDateTime'      => $response['cancelIssuerDateTime'],
                'cancelIssuerRefNo'         => $response['cancelIssuerRefNo'],
                'trx_id'                    => $request->trx_id,
                'code'                      => $request->code,
                'payment_type'              => 'nagad',
                'guest'                     => authUser() ? 0 : 1,
            ];

            try {
                $this->order->completeOrder($data, authUser(), $offlineMethod);
                $data = [
                    'success' => __('Order Completed')
                ];

                DB::commit();

                if (request()->ajax()) {
                    return response()->json($data);
                } else {
                    if ($request->code) {
                        return redirect('get-invoice/' . $request->code);
                    } else {
                        return redirect('invoice/' . session()->get('trx_id'));
                    }
                }
            } catch (\Exception $e) {
                DB::rollBack();
                session()->forget('trx_id');
                if (request()->ajax()) {
                    return response()->json([
                        'error' => __('Oops.....Something Went Wrong')
                    ]);
                } else {
                    return redirect()->back()->with(['error' => __('oops...Something Went Wrong')]);
                }
            }
        }
        return redirect('payment')->with(['error' =>  __('Something went wrong, please try again.')]);
    }

    public function skrillRedirect(Request $request): \Illuminate\Http\RedirectResponse
    {
        $data                               = $request->all();
        $request['payment_type']            = 'skrill';
        $orders                             = $this->findOrders($data);
        $active_currency                    = $this->activeCurrencyCheck($data);
        $trx_id                             = $this->tokenGenerator($data);
        $amount =                           $this->findAmount($data,$orders,$active_currency);
        $success_url                        = $this->successUrl($request,$this->findUser($data),$amount);
        $logo                               = settingHelper('dark_logo') != [] && @is_file_exists(settingHelper('dark_logo')['original_image']) ?  get_media(@settingHelper('dark_logo')['original_image'], @settingHelper('dark_logo')['storage']) : static_asset('images/default/dark-logo.png');

        $skrilRequest                       = new SkrillRequest();
        $skrilRequest->pay_to_email         = settingHelper('skrill_merchant_email'); // your merchant email
        $skrilRequest->return_url           = $success_url;
        $skrilRequest->cancel_url           = url()->previous();
        $skrilRequest->logo_url             = $logo;  // optional
        $skrilRequest->status_url           = $success_url;
        $skrilRequest->amount               = $amount;
        $skrilRequest->currency             = $active_currency->code;
        $skrilRequest->language             = 'EN';
        $skrilRequest->country              = $this->findSystemCountry();
        $skrilRequest->prepare_only         = '1';
        $skrilRequest->merchant_fields      = 'site_name, customer_email';
        $skrilRequest->site_name            = settingHelper('system_name');
        $skrilRequest->customer_email       = authUser()->email;
        $skrilRequest->detail1_description  = "Product Sale for $trx_id";
        $skrilRequest->detail1_text         = "Product Sale for $trx_id";
        $skrilRequest->transaction_id       = date('YmdHis');

        $client     = new SkrillClient($skrilRequest);
        $sid        = $client->generateSID(); //return SESSION ID
        $jsonSID    = json_decode($sid);

        if ($jsonSID != null && $jsonSID->code == "BAD_REQUEST")
            return $jsonSID->message;

        $redirectUrl = $client->paymentRedirectUrl($sid); //return redirect url
        return redirect()->to($redirectUrl);
    }

    public function iyzicoRedirect(Request $request)
    {

        try {
            if (settingHelper('is_iyzico_sandbox_enabled')) {
                $url = "https://sandbox-api.iyzipay.com";
            } else {
                $url = "https://api.iyzipay.com";
            }
            $data = $request->all();
            $orders = $this->findOrders($data);
            $user = $this->findUser($data);
            $amount = round($orders->sum('total_payable'), 2);
            $basket_id = date('YmdHis');
            $shipping_address = '';
            $billing_address = '';
            $conversation_id = rand(100000000, 999999999);

            if (count($orders) > 0) {
                $shipping_address = $orders->first()->shipping_address;
                $billing_address = $orders->first()->billing_address;
            }
            $options = new \Iyzipay\Options();
            $options->setApiKey(settingHelper('iyzico_api_key'));
            $options->setSecretKey(settingHelper('iyzico_secret_key'));
            $options->setBaseUrl($url);
            $request = new \Iyzipay\Request\CreatePayWithIyzicoInitializeRequest();
            if (settingHelper('default_language') == 'tr') {
                $request->setLocale(\Iyzipay\Model\Locale::TR);
            } else {
                $request->setLocale(\Iyzipay\Model\Locale::EN);
            }
            $request->setConversationId($conversation_id);
            $request->setPrice($amount);
            $request->setPaidPrice($amount);
            $request->setCurrency(\Iyzipay\Model\Currency::TL);
            $request->setLocale(\Iyzipay\Model\Locale::EN);
            $request->setBasketId($basket_id);
            $request->setPaymentGroup(\Iyzipay\Model\PaymentGroup::PRODUCT);
            $request->setCallbackUrl(route('iyzico.callback', [
                'conversation_id' => $conversation_id,
            ]));
            $request->setEnabledInstallments(array(2, 3, 6, 9));
            $buyer = new \Iyzipay\Model\Buyer();
            $buyer->setId(date('YmdHis'));
            $buyer->setName($user->first_name);
            $buyer->setSurname($user->last_name);
            $buyer->setGsmNumber($user->phone);
            $buyer->setEmail($user->email);
            $buyer->setIdentityNumber(date('YmdHis'));
            $buyer->setLastLoginDate(date('Y-m-d H:i:s'));
            $buyer->setRegistrationDate($user->created_at);
            $buyer->setRegistrationAddress("Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1");
            $buyer->setIp("85.34.78.112");
            $buyer->setCity("Istanbul");
            $buyer->setCountry("Turkey");
            $buyer->setZipCode("34732");
            $request->setBuyer($buyer);
            $basket_items = [];
            $firstBasketItem = new \Iyzipay\Model\BasketItem();
            $firstBasketItem->setId($basket_id);
            $firstBasketItem->setName("Product Purchase");
            $firstBasketItem->setCategory1("Order");
            $firstBasketItem->setItemType(\Iyzipay\Model\BasketItemType::VIRTUAL);
            $firstBasketItem->setPrice($amount);
            $basket_items[0] = $firstBasketItem;
            $request->setShippingAddress($this->getAddress($shipping_address));
            $request->setBillingAddress($this->getAddress($billing_address));
            $request->setBasketItems($basket_items);# make request
            $payWithIyzicoInitialize = \Iyzipay\Model\PayWithIyzicoInitialize::create($request, $options);

            session()->put('iyzico_token',$payWithIyzicoInitialize->getToken());
            return redirect($payWithIyzicoInitialize->getPayWithIyzicoPageUrl());

        } catch (\Exception $e) {
            return back()->with(['error' => $e->getMessage()]);
        }
    }

    public function retrieveIyzico(Request $request)
    {
        $options = new \Iyzipay\Options();
        $options->setApiKey(settingHelper('iyzico_api_key'));
        $options->setSecretKey(settingHelper('iyzico_secret_key'));

        if(settingHelper('is_iyzico_sandbox_mode') == 1) {
            $options->setBaseUrl("https://sandbox-api.iyzipay.com");
        } else {
            $options->setBaseUrl("https://api.iyzipay.com");
        }

        $iyzico_request = new \Iyzipay\Request\RetrievePayWithIyzicoRequest();
        if (settingHelper('default_language') == 'tr')
        {
            $iyzico_request->setLocale(\Iyzipay\Model\Locale::TR);
        }
        else{
            $iyzico_request->setLocale(\Iyzipay\Model\Locale::EN);
        }
        $iyzico_request->setConversationId($request->conversation_id);
        $iyzico_request->setToken(session()->get('iyzico_token'));

        return \Iyzipay\Model\PayWithIyzico::retrieve($iyzico_request, $options);
    }

    public function getAddress($billing_address): \Iyzipay\Model\Address
    {
        $billingAddress = new \Iyzipay\Model\Address();
        $billingAddress->setContactName($billing_address ? $billing_address['name'] : 'Yoori Customer');
        $billingAddress->setCity($billing_address ? $billing_address['city'] : 'Istanbul');
        $billingAddress->setCountry($billing_address ? $billing_address['country'] : "Turkey");
        $billingAddress->setAddress($billing_address ? $billing_address['address'] : "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1");
        $billingAddress->setZipCode($billing_address ? $billing_address['postal_code'] : "34742");
        return $billingAddress;
    }
}
