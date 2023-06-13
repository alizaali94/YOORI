<?php

namespace App\Http\Requests\Seller;

use Illuminate\Foundation\Http\FormRequest;

class SellerUpdateRequest extends FormRequest
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
            'shop_name'         => 'required|min:2|max:50',
            'slug'              => 'max:70|unique:blogs,slug,'.\Request()->blog_id,
            'phone_no'          => 'required',
            'address'           => 'required',
        ];
    }
}
