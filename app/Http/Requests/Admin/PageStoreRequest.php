<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PageStoreRequest extends FormRequest
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
            'title'                 =>'required|min:3|max:30',
            'link'                  =>'required_if:type,==,custom_page|min:5',
            'content'               =>'nullable|min:2',
            'meta_title'            =>'nullable|min:2',
            'meta_description'      =>'nullable|min:2',
            'keywords'              =>'nullable|min:2',
            'phone'                 =>'nullable|min:8|max:20',
            'image'                 =>'mimes:jpg,JPG,JPEG,jpeg,png,PNG,webp,WEBP|max:5120',
        ];
    }
    public function messages()
    {
        return [
            "link.required_if" => __('Link/Slug field is required'),
        ];
    }
}
