<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class CurrencyRequest extends FormRequest
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
            'name'               =>'required',
            'symbol'             =>'required|',
            'code'               =>'required|unique:currencies,code,'.$this->id,
            'exchange_rate'      =>'required|numeric',
        ];
    }
}
