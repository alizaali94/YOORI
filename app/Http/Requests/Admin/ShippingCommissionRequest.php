<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ShippingCommissionRequest extends FormRequest
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
            'shipping_fee_type' => 'required',
            'shipping_fee_flat_rate' => 'required_if:shipping_fee_type,flat_rate|min:0',
            'shipping_fee_admin_product' => 'required_if:shipping_fee_type,seller_base|min:0'
        ];
    }
}
