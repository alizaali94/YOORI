<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class GeneralSettingRequest extends FormRequest
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
            'system_name'       => 'required',
            'default_time_zone' => 'required',
            'default_language'  => 'required',
            'default_currency'  => 'required',
            'purchase_code'     => 'required',
            'favicon'           => 'mimes:jpg,JPG,JPEG,ico,jpeg,png,PNG,webp,WEBP|max:5120',
        ];
    }
}
