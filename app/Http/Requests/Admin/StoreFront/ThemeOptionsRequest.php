<?php

namespace App\Http\Requests\Admin\StoreFront;

use Illuminate\Foundation\Http\FormRequest;

class ThemeOptionsRequest extends FormRequest
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
            'primary_color'         =>          'required',
            'secondary_color'       =>          'required',
            'menu_background_color' =>          'required',
            'fonts'                 =>          'required',
        ];
    }
}
