<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class MiscRequest extends FormRequest
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
            'pagination'            => 'numeric|max:100',
            'api_paginate'          => 'numeric|max:100',
            'index_form_paginate'   => 'numeric|max:100',
            'media_paginate'        => 'numeric|max:100',
            'order_prefix'          => 'max:3',
        ];
    }
}
