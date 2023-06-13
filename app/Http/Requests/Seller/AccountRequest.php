<?php

namespace App\Http\Requests\Seller;

use Illuminate\Foundation\Http\FormRequest;

class AccountRequest extends FormRequest
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
            'bank_name'         => 'required',
            'owner_name'        => 'required',
            'bank_phone_no'     => 'required',
            'branch'            => 'required',
            'account_number'    => 'required',
            'routing_no'        => 'required',
        ];
    }
}
