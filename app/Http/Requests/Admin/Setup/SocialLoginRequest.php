<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class SocialLoginRequest extends FormRequest
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
            'google_client_id'            => 'required_if:social_login,google',
            'google_client_secret'        => 'required_if:social_login,google',
//            'google_callback_url'         => 'required_if:social_login,google',

            'facebook_client_id'           => 'required_if:social_login,facebook',
            'facebook_client_secret'       => 'required_if:social_login,facebook',
//            'facebook_callback_url'        => 'required_if:social_login,facebook',


            'twitter_client_id'            => 'required_if:social_login,twitter',
            'twitter_client_secret'        => 'required_if:social_login,twitter',
//            'twitter_callback_url'         => 'required_if:social_login,twitter',

        ];
    }
}
