<?php

namespace App\Http\Requests\Admin\MobileApps;

use Illuminate\Foundation\Http\FormRequest;

class AppIntroUpdateRequest extends FormRequest
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
            'title'         =>'required|min:2|max:50',
        ];
    }
}
