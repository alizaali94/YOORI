<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Site\PaymentController;
use App\Repositories\Admin\CurrencyRepository;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Xenon\NagadApi\Base;
use Xenon\NagadApi\Helper;

class WalletController extends Controller
{
    protected $wallet;

    public function __construct(WalletInterface $wallet){
        $this->wallet = $wallet;
    }

    public function walletRechargeRequests(Request $request){
        try {
            $wallet_recharge_requests = $this->wallet->paginate(get_pagination('pagination'), 'wallet_recharge', $request);
            return view('admin.wallet.wallet-recharge-requests', compact('wallet_recharge_requests'));
        }catch (\Exception $e) {
            Toastr::error($e->getMessage());
            return redirect()->back();
        }
    }

    public function walletApproveRequest($id){

        if ($this->wallet->walletApproveRequest($id)):
            $response['message'] = __('Approved Successfully');
            $response['status']  = 'success';
            $response['title']   = __('Success');
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        endif;
    }
    public function walletRejectRequest($id){

        if ($this->wallet->walletRejectRequest($id)):
            $response['message'] = __('Reject Successfully');
            $response['status']  = 'success';
            $response['title']   = __('Success');
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        endif;
    }

    public function mercadoPago(Request $request,OrderInterface $order)
    {
        $paymentController = new paymentController($order);

        $access_key = settingHelper('mercadopago_access');

        if (!$access_key)
        {
            return back()->with(['warning' => __('provide_correct_credential')]);
        }

        $data                       = $request->all();
        $request['payment_mode']    = 'wallet_recharge';
        $request['payment_type']    = 'mercadopago';
//        $data                       = $paymentController->tokenGenerator($data);
        $success_url                = $paymentController->successUrl($request);

        $billing_details = [
            'name'=> '',
            'postal_code'=> '',
        ];

        $data = [
            'success_url'       => $success_url,
            'fail_url'          => url()->previous(),
            'billing_details'   => $billing_details,
            'amount'            => $request->amount
        ];

        return view('frontend.payments.mercado_pago',$data);
    }

    public function bkashRedirect(Request $request,OrderInterface $order)
    {
        $paymentController = new paymentController($order);

        $bdt_currency = $this->bdtCurrency();

        if (!$bdt_currency)
        {
            return false;
        }

        if (settingHelper('is_bkash_sandbox_mode_activated') == 1) {
            $base_url = 'https://checkout.sandbox.bka.sh';
        } else {
            $base_url = 'https://checkout.pay.bka.sh';
        }

        $data                       = $request->all();
        $request['payment_type']    = 'bKash';
//        $active_currency          = $paymentController->activeCurrencyCheck($data);
//        $token                      = $paymentController->apiToken($data);
//        $trx_id                     = $paymentController->tokenGenerator($data);
        $total_amount                 = $request->amount;

        $request_data = [
            'app_key' => settingHelper('bkash_app_key'),
            'app_secret' => settingHelper('bkash_app_secret')
        ];
        $url = curl_init("$base_url/tokenized/checkout/token/grant");
        $request_data_json = json_encode($request_data);
        $header = [
            "Content-Type:application/json",
            "username:" . settingHelper('bkash_username') . " ",
            "password:" . settingHelper('bkash_password') . " "
        ];
        curl_setopt($url, CURLOPT_HTTPHEADER, $header);
        curl_setopt($url, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($url, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($url, CURLOPT_POSTFIELDS, $request_data_json);
        curl_setopt($url, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($url, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        $response = curl_exec($url);
        curl_close($url);
        $decoded_data = json_decode($response);
        if (property_exists($decoded_data, 'id_token') && $decoded_data->id_token) {
            $auth = $decoded_data->id_token;

            session()->put('bkash_token', $auth);

            $requestbody = [
                'mode' => '0011',
                'amount' => round($total_amount, 2),
                'currency' => 'BDT',
                'intent' => 'sale',
                'payerReference' => settingHelper('system_name'),
                'merchantInvoiceNumber' => date('YmdHis'),
                'callbackURL' => url("bkash/execute/wallet?amount=$request->amount&lang=$request->lang&curr=$request->curr")
            ];

            $url = curl_init("$base_url/v1.2.0-beta/tokenized/checkout/create");

            $requestbodyJson = json_encode($requestbody);

            $header = [
                "Content-Type:application/json",
                "Authorization:" . $auth,
                "X-APP-Key:" . settingHelper('bkash_app_key') . " "
            ];

            curl_setopt($url, CURLOPT_HTTPHEADER, $header);
            curl_setopt($url, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($url, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($url, CURLOPT_POSTFIELDS, $requestbodyJson);
            curl_setopt($url, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($url, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
            $resultdata = curl_exec($url);
            curl_close($url);

            $obj = json_decode($resultdata);

            if (property_exists($decoded_data, 'bkashURL') && $decoded_data->bkashURL) {
                return redirect($obj->bkashURL);
            }
        }
        return back()->with(['error' => __('Oops...Something Went Wrong')]);
    }
    public function bkashExecute(Request $request,OfflineMethodInterface $offlineMethod,OrderInterface $order,WalletInterface $wallet)
    {
        $paymentController = new paymentController($order);

        if (settingHelper('is_bkash_sandbox_mode_activated') == 1) {
            $base_url = 'https://checkout.sandbox.bka.sh';
        }
        else {
            $base_url = 'https://checkout.pay.bka.sh';
        }

        $data   = $request->all();
        $code   = $this->codeGenerator($data);
        $id     = $request->paymentID;
        $status = $request->status;
        $auth   = session()->get('bkash_token');

        if (!$id || $status != 'success' || !$auth)
        {
            return redirect('payment')->with(['error' =>  __('Something went wrong, please try again.')]);
        }

        if ($status == 'success')
        {
            $post_token = array(
                'paymentID' => $id
            );

            $url = curl_init("$base_url/v1.2.0-beta/tokenized/checkout/execute");
            $posttoken = json_encode($post_token);

            $header = array(
                'Content-Type:application/json',
                'Authorization:' . $auth,
                "X-APP-Key:".settingHelper('bkash_app_key')." "
            );
            curl_setopt($url, CURLOPT_HTTPHEADER, $header);
            curl_setopt($url, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($url, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($url, CURLOPT_POSTFIELDS, $posttoken);
            curl_setopt($url, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($url, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
            $resultdata = curl_exec($url);

            curl_close($url);

            $obj = json_decode($resultdata);

            if ($obj->statusCode == '0000')
            {
                $payment_details = [
                    'trx_id'                => $request->trx,
                    'payment_type'          => 'bKash',
                    'code'                  => $code,
                    'guest'                 => authUser() ? 0 : 1,
                    "statusCode"            => $obj->statusCode,
                    "statusMessage"         => $obj->statusMessage,
                    "paymentID"             => $obj->paymentID,
                    "payerReference"        => $obj->payerReference,
                    "customerMsisdn"        => $obj->customerMsisdn,
                    "bkash_trxID"           => $obj->trxID,
                    "amount"                => $obj->amount,
                    "transactionStatus"     => $obj->transactionStatus,
                    "paymentExecuteTime"    => $obj->paymentExecuteTime,
                    "currency"              => $obj->currency,
                    "intent"                => $obj->intent,
                    "merchantInvoiceNumber" => $obj->merchantInvoiceNumber
                ];

                $user_id =  authId();
                $data['payment_type']      = 'bkash';
                $paymentController->storeWallet($request,$user_id,$wallet,$payment_details,$data);
            }
            return redirect('payment')->with(['error' =>  __('Something went wrong, please try again.')]);
        }
        return redirect('payment')->with(['error' =>  __('Something went wrong, please try again.')]);
    }



    public function walletStore(Request $request,WalletInterface $wallet,OrderInterface $order,$other=null)
    {
        dd($other);
        $paymentController = new paymentController($order);
        $user_id =  authId();
        if($request->payment_type == 'google_pay'){
            $payment_details = [
                'name'=> '',
                'postal_code'=> '',
            ];
            $data['payment_type']      = 'google_pay';
        }else if($request->merchant_id == 'aamarpay'){
            $token = DB::table('payment_method')->where('trx_id',$request->opt_b)->first();
            if($token && $token->type == 'api'){
                $request['amount'] = $token->amount;
                $payment_details = $request->all();
                $data['payment_type']      = 'aamarpay';
                $user_id = $token->is_guest;
            }else{
                $request['amount'] = $token->amount;
                $payment_details = $request->all();
                $data['payment_type']      = 'aamarpay';
                $user_id = $token->is_guest;
            }

        }
        else if($request->payment_type == 'mercadopago'){
            $payment_details = [
                'name'=> '',
                'postal_code'=> '',
            ];
            $data['payment_type']      = 'mercadopago';
        }
        $paymentController->storeWallet($request,$user_id,$wallet,$payment_details,$data);

    }

    public function nagadRedirect(Request $request)
    {
        try {
            $currency = new CurrencyRepository();
            $bdt_currency = $currency->currencyByCode('BDT');
            if (!$bdt_currency) {
                return false;
            }

            $data                       = $request->all();
            $request['payment_type']    = 'NAGAD';

//        $token                      = $this->apiToken($data);
//        $trx_id                     = $this->tokenGenerator($data);
//        $code                       = $this->codeGenerator($data);


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
                'amount' => round($request->amount,2),
                'invoice' => Helper::generateFakeInvoice(15, true),
                'merchantCallback' => url("nagad/callback/wallet?amount=$request->amount&lang=$request->lang&curr=$request->curr"),
            ]);

            return redirect($nagad->payNow($nagad));
        }catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }

    }


    public function nagadVerify(Request $request,OfflineMethodInterface $offlineMethod,OrderInterface $order,WalletInterface $wallet)
    {
        $paymentController = new paymentController($order);

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
            $payment_details = [
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
            $user_id =  authId();
            $data['payment_type']      = 'nagad';
            $paymentController->storeWallet($request,$user_id,$wallet,$payment_details,$data);
        }
        return redirect('payment')->with(['error' =>  __('Something went wrong, please try again.')]);
    }

    public function aamarpayRedirect(Request $request,OrderInterface $order)
    {

        try {
            $bdt_currency = $this->bdtCurrency();
            $paymentController = new paymentController($order);
            if (!$bdt_currency) {
                return false;
            }
            if (settingHelper('is_amarpay_sandbox_mode_activated') == 1) {
                $api_url = 'https://sandbox.aamarpay.com/request.php';
            } else {
                $api_url = 'https://secure.aamarpay.com/request.php';
            }
            $data = $request->all();
            $data['type'] = 'wallet';
            $request['payment_type'] = 'amarpay';
            $request['payment_mode'] = 'wallet';
            $user = $paymentController->findUser($data);
            $trx_id = $paymentController->tokenGenerator($data);
            $code = $paymentController->codeGenerator($data);
            $active_currency = $paymentController->activeCurrencyCheck($data);
            $amount = $paymentController->bdAmountCalculator(null, $data, $active_currency, $bdt_currency);
            $total_amount = $amount['total_amount'];
            $transaction_id = str::random(10);
            $user_data = ['user_id' => $user->id, 'amount' => $request->amount, 'trx_id' => $transaction_id, 'response' => 'yes', 'expires' => Carbon::now()->addMinutes(1)->timestamp, 'signature' => Str::random()];
            $success_url = URL::temporarySignedRoute('wallet.complete.recharge', now()->addMinutes(5));//        http://ftp.lzk.ssu.mybluehost.me

            $payment['trx_id']     = $trx_id;
            $payment['code']       = $code;
            $payment['api_token']  = '';
            $payment['is_guest']   = $user->id;
            $payment['amount']     = $request->amount;
            $payment['type']       = '';

            DB::table('payment_method')->insert($payment);


            $fields = [
                'store_id' => settingHelper('amrapay_store_id'),
                'amount' => round($total_amount),
                'payment_type' => 'VISA',
                'currency' => 'BDT',
                'tran_id' => date('YmdHis'),
                'cus_name' => $user ? $user->full_name : 'Yoori Customer',
                'cus_email' => $user ? $user->email : 'yoori@example.com',
                'cus_add1' => '',
                'cus_add2' => '',
                'cus_city' => '',
                'cus_state' => '',
                'cus_postcode' => '',
                'cus_country' => 'Bangladesh',
                'cus_phone' => $user ? $user->phone : '01634896248',
                'cus_fax' => 'Not¬Applicable',
                'ship_name' => $user ? $user->name : 'Yoori Customer',
                'ship_add1' => $request->amount,
                'ship_add2' => '',
                'ship_city' => '',
                'ship_state' => '',
                'ship_postcode' => '',
                'opt_b' => $trx_id,
                'ship_country' => 'Bangladesh',
                'desc' => 'Wallet Recharge',
                'success_url' => $success_url,
                'fail_url' => $paymentController->cancelUrl($request),
                'cancel_url' => $paymentController->cancelUrl($request),
                'signature_key' => settingHelper('amarpay_signature_key')
            ];
            $fields_string = '';
            foreach ($fields as $key => $value) {
                $fields_string .= $key . '=' . $value . '&';
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
        } catch (\Exception $e) {
            dd($e);
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

    public function skrillRedirect(Request $request,OrderInterface $order,WalletInterface $wallet): \Illuminate\Http\RedirectResponse
    {
        $paymentController = new paymentController($order);
        $data                               = $request->all();
        $request['payment_type']            = 'skrill';
        $active_currency                    = $paymentController->activeCurrencyCheck($data);
        $success_url                        = $paymentController->successUrl($request);
        $logo                               = settingHelper('dark_logo') != [] && @is_file_exists(settingHelper('dark_logo')['original_image']) ?  get_media(@settingHelper('dark_logo')['original_image'], @settingHelper('dark_logo')['storage']) : static_asset('images/default/dark-logo.png');

        $skrilRequest                       = new SkrillRequest();
        $skrilRequest->pay_to_email         = settingHelper('skrill_merchant_email'); // your merchant email
        $skrilRequest->return_url           = $success_url;
        $skrilRequest->cancel_url           = url()->previous();
        $skrilRequest->logo_url             = $logo;  // optional
        $skrilRequest->status_url           = $success_url;
        $skrilRequest->amount               = round($request->amount * $active_currency->exchange_rate,2);
        $skrilRequest->currency             = $active_currency->code;
        $skrilRequest->language             = 'EN';
        $skrilRequest->country              = $paymentController->findSystemCountry();
        $skrilRequest->prepare_only         = '1';
        $skrilRequest->merchant_fields      = 'site_name, customer_email';
        $skrilRequest->site_name            = settingHelper('system_name');
        $skrilRequest->customer_email       = authUser()->email;

        $client     = new SkrillClient($skrilRequest);
        $sid        = $client->generateSID(); //return SESSION ID
        $jsonSID    = json_decode($sid);

        if ($jsonSID != null && $jsonSID->code == "BAD_REQUEST")
            return $jsonSID->message;

        $data_info = [
                'amount'=>$request->amount,
                'payment_type'=>'skrill',
        ];

        $this->walletStore($request,$wallet,$order,$data_info);

//        $redirectUrl = $client->paymentRedirectUrl($sid); //return redirect url
//        return redirect()->to($redirectUrl);
    }

    public function iyzicoRedirect(Request $request,OrderInterface $order,WalletInterface $wallet)
    {
        $paymentController = new paymentController($order);
        try {
            if (settingHelper('is_iyzico_sandbox_enabled')) {
                $url = "https://sandbox-api.iyzipay.com";
            } else {
                $url = "https://api.iyzipay.com";
            }
            $data = $request->all();
            $user = $paymentController->findUser($data);
            $amount = round($request->amount, 2);
            $basket_id = date('YmdHis');
            $conversation_id = rand(100000000, 999999999);

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
            $request->setCallbackUrl(route('iyzico.callback.wallet', [
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

    public function telrRedirect(Request $request,OrderInterface $order)
    {
        $paymentController = new paymentController($order);
        $data                       = $request->all();
        $request['payment_type']    = 'telr';
        $request['payment_mode']    = 'wallet_recharge';
        $success_url                = $paymentController->successUrl($request);

        $params = [
            'ivp_method'  => 'create',
            'ivp_store'   => settingHelper('telr_store_id'),
            'ivp_authkey' => settingHelper('telr_auth_key'),
            'ivp_cart'    => rand(),
            'ivp_test'    => '1',
            'ivp_amount'  => round($request->amount,2),
            'ivp_currency'=> 'AED',
            'ivp_desc'    => 'Recharge Wallet',
            'return_auth' => $success_url,
            'return_can'  => $paymentController->cancelUrl($request),
            'return_decl' => $paymentController->cancelUrl($request)
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

    protected function bdtCurrency()
    {
        $currency = new CurrencyRepository();
        return $currency->currencyByCode('BDT');
    }
}
