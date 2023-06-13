<?php

namespace App\Http\Requests\Admin\Marketing;

use Illuminate\Foundation\Http\FormRequest;

class CampaignRequest extends FormRequest
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
            'title'             => 'required|min:2|max:100',
            'slug'              => 'nullable|max:60|unique:campaigns,slug,'.\Request()->campaign_id,
            'date'              => 'required',
            'background_color'  => 'nullable|regex:/(#)/',
            'text_color'        => 'nullable|regex:/(#)/',
            'product_id'        => 'required',
        ];
    }
    public function attributes()
    {
        return [
            'title'             => __('Title'),
            'date'              => __('Date'),
            'product_id'        => __('Product'),
            'discount_type'     => __('Discount Type'),
            'discount'          => __('Discount'),

        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
// use trans instead on Lang
        return [
//            'user_id.required' => Lang::get('userpasschange.usernamerequired'),
        ];
    }
}
