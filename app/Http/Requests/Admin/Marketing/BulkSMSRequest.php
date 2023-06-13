<?php

namespace App\Http\Requests\Admin\Marketing;

use Illuminate\Foundation\Http\FormRequest;

class BulkSMSRequest extends FormRequest
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
            'user_id'   => 'required',
            'message'   => 'required',
            'template'   => 'required'
        ];
    }
    public function attributes()
    {
        return [
            'user_id'            => __('user'),
            'message'            => __('message'),
            'template'            => __('template'),

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
