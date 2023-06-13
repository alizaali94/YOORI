<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class WhiteLevelRequest extends FormRequest
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
            'admin_panel_title'             => 'required',
            'admin_panel_copyright_text'    => 'required',
        ];
    }
    public function messages()
    {
        return [
            "admin_panel_title.required" => __('Title field is required'),
            "admin_panel_copyright_text.required" => __('Copyright text field is required'),
        ];
    }
}
