<?php

namespace App\Http\Requests\Admin\MobileApps;

use Illuminate\Foundation\Http\FormRequest;

class MobileAppsRequest extends FormRequest
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
            'api_server_url'                 => 'required_if:mobile_apps,apis',
            'api_key_app'                    => 'required_if:mobile_apps,apis',

            'latest_apk_version'             => 'required_if:mobile_apps,android',
            'latest_apk_code'                => 'required_if:mobile_apps,android',
            'apk_file_url'                   => 'required_if:mobile_apps,android',
            'whats_new_latest_apk'           => 'required_if:mobile_apps,android',

            'latest_ipa_version'             => 'required_if:mobile_apps,ios',
            'latest_ipa_code'                => 'required_if:mobile_apps,ios',
            'ipa_file_url'                   => 'required_if:mobile_apps,ios',
            'whats_new_latest_ipa'           => 'required_if:mobile_apps,ios',

            'privacy_policy_url'             => 'required_if:mobile_apps,app_config',
            'terms_condition_url'            => 'required_if:mobile_apps,app_config',
            'support_url'                    => 'required_if:mobile_apps,app_config',

            'admob_app_id'                   => 'required_if:mobile_apps,ads_config',
            'admob_banner_ads_id'            => 'required_if:mobile_apps,ads_config',
            'admob_interstitial_ads_id'      => 'required_if:mobile_apps,ads_config',
            'admob_native_ads_id'            => 'required_if:mobile_apps,ads_config',
        ];
    }
}
