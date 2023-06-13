<?php

namespace App\Http\Requests\Admin\DeliveryHero;

use Illuminate\Foundation\Http\FormRequest;

class DeliveryHeroRequest extends FormRequest
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
            'phone'         => 'required|unique:users|min:4|max:20',
            'email'         => 'required|unique:users|email|max:50',
            'password'      => 'required|min:6|max:32',
            'country_id'    => 'required|numeric',
            'city_id'       =>'nullable|numeric',
            'balance'       =>'nullable|numeric',
        ];
    }
}
