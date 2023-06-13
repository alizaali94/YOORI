<?php


namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class PreferenceSettingRequest extends FormRequest
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
//            'https'                 => 'required',
//            'maintenance_mode'      => 'required',
//            'image_encoding'        => 'required',
//            'seller_system'         => 'required',
//            'classified_product'    => 'required',
//            'wallet_system'         => 'required',
//            'coupon_system'         => 'required',
//            'picup_point'           => 'required',
//            'conversation'          => 'required',
//            'color_filter'          => 'required',
        ];
    }
}
