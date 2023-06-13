<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PackageRequest extends FormRequest
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
            'title'                 => 'required|unique:seller_package_languages,title,'.$this->lang_id,
            'price'                 => 'required',
            'product_upload_limit'  => 'required|numeric',
            'duration'              => 'required|numeric',
        ];
    }
}
