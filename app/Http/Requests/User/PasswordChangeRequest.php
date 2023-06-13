<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class PasswordChangeRequest extends FormRequest
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
            'old_password'   => 'required|min:6|max:32',
            'new_password'   => 'required|min:6|max:32|required_with:confirm_password|same:confirm_password',
            'confirm_password'   => 'required|min:6|max:32',
        ];
    }
}
