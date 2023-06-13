<?php

namespace App\Http\Requests\Admin\PaymentGateway;

use Illuminate\Foundation\Http\FormRequest;

class PaymentGatewayRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'paypal_client_id'           => 'required_if:payment_method,paypal',

            'stripe_key'                 => 'required_if:payment_method,stripe',
            'stripe_secret'              => 'required_if:payment_method,stripe',

            'sslcommerz_id'              => 'required_if:payment_method,sslcommerz',
            'sslcommerz_password'        => 'required_if:payment_method,sslcommerz',

            'merchant_id'                => 'required_if:payment_method,paytm',
            'merchant_key'               => 'required_if:payment_method,paytm',
            'merchant_website'           => 'required_if:payment_method,paytm',
            'channel'                    => 'required_if:payment_method,paytm',
            'industry_type'              => 'required_if:payment_method,paytm',

            'jazz_cash_merchant_id'      => 'required_if:payment_method,JazzCash',
            'jazz_cash_password'         => 'required_if:payment_method,JazzCash',
            'jazz_cash_integrity_salt'   => 'required_if:payment_method,JazzCash',

            'razorpay_key'               => 'required_if:payment_method,razorpay',
            'razorpay_secret'            =>  'required_if:payment_method,razorpay',
        ];
    }
}
