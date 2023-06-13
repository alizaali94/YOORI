<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class OtpSettingRequest extends FormRequest
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
            'fast_2_auth_key'       => 'required_if:sms_method,fast_2|min:2|max:150',
            'fast_2_entity_id'      => 'required_if:sms_method,fast_2|min:2|max:150',
            'fast_2_route'          => 'required_if:sms_method,fast_2|min:2|max:150',
            'fast_2_language'       => 'required_if:sms_method,fast_2|min:2|max:150',
            'fast_2_sender_id'      => 'required_if:sms_method,fast_2|min:2|max:150',

            'mim_sms_api_key'       => 'required_if:sms_method,mim_sms|min:2|max:150',
            'mim_sms_sender_id'     => 'required_if:sms_method,mim_sms|min:2|max:150',

            'mimo_username'         => 'required_if:sms_method,mimo_sms|min:2|max:150',
            'mimo_sms_password'     => 'required_if:sms_method,mimo_sms|min:2|max:150',
            'mimo_sms_sender_id'    => 'required_if:sms_method,mimo_sms|min:2|max:150',

            'nexmo_sms_key'         => 'required_if:sms_method,nexmo_sms|min:2|max:150',
            'nexmo_sms_secret_key'  => 'required_if:sms_method,nexmo_sms|min:2|max:150',

            'twilio_sms_sid'            => 'required_if:sms_method,twilio|min:2|max:150',
            'twilio_sms_auth_token'     => 'required_if:sms_method,twilio|min:2|max:150',
//            'twilio_sms_verify_sid'     => 'required_if:sms_method,twilio|min:2|max:150',
            'valid_twilio_sms_number'   => 'required_if:sms_method,twilio|min:2|max:150',

            'ssl_sms_api_token'   => 'required_if:sms_method,ssl_wireless|min:2|max:150',
            'ssl_sms_sid'         => 'required_if:sms_method,ssl_wireless|min:2|max:150',
            'ssm_sms_url'         => 'required_if:sms_method,ssl_wireless|min:2|max:150',

        ];
    }
}
