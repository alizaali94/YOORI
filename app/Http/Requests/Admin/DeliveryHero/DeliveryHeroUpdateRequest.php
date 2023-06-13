<?php

namespace App\Http\Requests\Admin\DeliveryHero;

use Illuminate\Foundation\Http\FormRequest;

class DeliveryHeroUpdateRequest extends FormRequest
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
            'first_name'    => 'required|max:50',
            'last_name'     => 'required|max:50',
            'email'         => 'required|max:50|email|unique:users,email,'.\Request()->id,
            'phone'         => 'required|min:4|max:20|unique:users,phone,'.\Request()->id,
            'password'      => 'nullable|min:6|max:32',
            'image'         => 'mimes:jpg,JPG,JPEG,jpeg,png,PNG,webp,WEBP|max:5120',
            'country_id'    => 'required|numeric',
            'state_id'      => 'nullable|numeric',
            'city_id'       => 'nullable|numeric',
        ];
    }
}
