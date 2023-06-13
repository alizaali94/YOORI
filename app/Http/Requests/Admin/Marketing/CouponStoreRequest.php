<?php

namespace App\Http\Requests\Admin\Marketing;

use Illuminate\Foundation\Http\FormRequest;

class CouponStoreRequest extends FormRequest
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
            'type'                    =>'required|in:product_base,invoice_base',
            'code'                    =>'required|unique:coupons,code,'.\Request()->id,
            'title'                   =>'required',
            'date'                    =>'required',
            'discount_type'           =>'required|in:flat,percent',
            'discount'                =>'required|numeric',
            'product_id'              =>'required_if:type,product_base',
            'minimum_shopping'        =>'required_if:type,invoice_base',
            'maximum_discount'        =>'required_if:type,invoice_base',
        ];
    }
}
