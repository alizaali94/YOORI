<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class SignUpRequest extends FormRequest
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
    public function rules(Request $request)
    {
        if ($request->user_type == 'seller')
        {
            return [
                'email'         => 'required|unique:users,email|email',
                'first_name'    => 'required|min:2',
                'last_name'     => 'required|min:2',
                'phone'         => 'required|unique:users,phone|min:6',
                'password'      => 'required|required_without:phone|min:6|max:50',
                'shop_name'     => 'required',
                'address'       => 'required',
            ];
        }
        if ($request->user_type == 'seller-migrate')
        {
            return [
                'shop_name'     => 'required',
                'address'       => 'required',
                'phone_no'      => 'required',
            ];
        }
        else{
            return [
                'email'         => 'required_without:phone|nullable|unique:users,email|email',
                'first_name'    => 'required_without:user_type|min:2',
                'last_name'     => 'required_without:user_type|min:2',
                'phone'         => 'required_without:email|nullable|unique:users,phone|min:6',
                'password'      => 'required_without:phone|nullable|min:6|max:50',
                'shop_name'     => 'required_if:user_type,==,seller-migrate|min:2',
            ];
        }
    }

    public function messages()
    {
       return [
           'email.required_without_all'      => 'email field is required',
           'shop_name.required_if'           => 'shop name field is required',
           'address.required_if'             => 'address field is required',
           'phone_no.required_if'            => 'phone number field is required',
           'email.required_without'          => 'email field is required',
           'first_name.required_without'     => 'first name field is required',
           'last_name.required_without'      => 'last name field is required',
           'password.required_without_all'   => 'password field is required',
           'phone.required_without'          => 'phone field is required',
       ];
    }
}
