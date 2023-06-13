<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class EmailSettingRequest extends FormRequest
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
            'mail_driver'                    =>'required',

            'smtp_mail_host'                 =>'required_if:mail_driver,smtp',
            'smtp_mail_port'                 =>'nullable|required_if:mail_driver,smtp|numeric',
            'smtp_mail_address'              =>'nullable|required_if:mail_driver,smtp|email',
            'smtp_name'                      =>'nullable|required_if:mail_driver,smtp',
            'smtp_mail_username'             =>'nullable|required_if:mail_driver,smtp',
            'smtp_mail_password'             =>'nullable|required_if:mail_driver,smtp|min:2|max:50',
            'smtp_mail_encryption_type'      =>'nullable|in:tls,ssl',

            'sendgrid_mail_host'             =>'required_if:mail_driver,sendgrid',
            'sendgrid_mail_port'             =>'nullable|required_if:mail_driver,sendgrid|numeric',
            'sendgrid_mail_address'          =>'nullable|required_if:mail_driver,sendgrid|email',
            'sendgrid_name'                  =>'nullable|required_if:mail_driver,sendgrid',
            'sendgrid_mail_username'         =>'nullable|required_if:mail_driver,sendgrid',
            'sendgrid_mail_password'         =>'nullable|required_if:mail_driver,sendgrid|min:2|max:500',
            'sendgrid_mail_encryption_type'  =>'nullable|in:tls,ssl',

            'sendmail_path'                  =>'nullable|required_if:mail_driver,sendmail',

            'mail_signature'                 =>'nullable',
        ];
    }
}
