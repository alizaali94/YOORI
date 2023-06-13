<?php

namespace App\Http\Requests\Seller;

use Illuminate\Foundation\Http\FormRequest;

class PayoutRequest extends FormRequest
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
            'amount'            => 'required|min:3|max:10',
            'message'           => 'nullable|min:3',
            'account_type_id'   => 'required'
        ];
    }
    public function messages()
    {
        return [
            "account_type_id.required" => __('Select account type field'),
        ];
    }
}
