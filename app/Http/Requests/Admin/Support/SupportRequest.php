<?php

namespace App\Http\Requests\Admin\Support;

use Illuminate\Foundation\Http\FormRequest;

class SupportRequest extends FormRequest
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
            'subject'  => 'required|min:3|max:100',
            'user_id'  => 'required',
            'support_department_id'  => 'required',
            'priority'  => 'required',
            'status'  => 'required',
        ];
    }
    public function messages()
    {
        return [
            "user_id.required" => __('Select customer field'),
            "support_department_id" => __('Select Department field'),
        ];
    }
}
