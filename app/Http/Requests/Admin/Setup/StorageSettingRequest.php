<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class StorageSettingRequest extends FormRequest
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
            'default_storage'               => 'required|in:local,aws_s3,wasabi',
            'aws_access_key_id'             => 'required_if:default_storage,==,aws_s3',
            'aws_secret_access_key'         => 'required_if:default_storage,==,aws_s3',
            'aws_default_region'            => 'required_if:default_storage,==,aws_s3',
            'aws_bucket'                    => 'required_if:default_storage,==,aws_s3',

            'wasabi_access_key_id'         => 'required_if:default_storage,==,wasabi',
            'wasabi_secret_access_key'     => 'required_if:default_storage,==,wasabi',
            'wasabi_default_region'        => 'required_if:default_storage,==,wasabi',
            'wasabi_bucket'                => 'required_if:default_storage,==,wasabi',
        ];
    }
}
