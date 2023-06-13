<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordPostRequest extends FormRequest
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
             'newPassword'   => 'required|min:6|max:32|required_with:confirmPassword|same:confirmPassword',
            'confirmPassword'   => 'required|min:6|max:32',
        ];
    }
}
