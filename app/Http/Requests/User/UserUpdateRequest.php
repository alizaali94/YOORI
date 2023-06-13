<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'first_name' => 'required|max:50|regex:/^[a-zA-Z\s]*$/',
            'last_name'  => 'required|max:50|regex:/^[a-zA-Z\s]*$/',
            'shop_name'  => 'nullable|min:2|max:50',
            'email'      => 'required|max:50|email|unique:users,email,'.\Request()->id,
            'phone'      => 'required|min:4|max:20|unique:users,phone,'.\Request()->id,
            'password'   => 'nullable|min:6|max:32',
            'image'      => 'mimes:jpg,JPG,JPEG,jpeg,png,PNG,webp,WEBP|max:5120',
        ];
    }
}
