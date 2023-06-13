<?php

namespace App\Http\Requests\Addon;

use Illuminate\Foundation\Http\FormRequest;

class VideoShoppingUpdateRequest extends FormRequest
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
            'title'         =>'required|min:2|max:190',
            'slug'          => 'nullable|max:190|unique:video_shoppings,slug,'.\Request()->video_id,
            'style'         => 'required|min:5',
            'video_type'    => 'required',
            'video_url'     => 'required|min:5',
            'meta_title'    => 'nullable|max:190',
        ];
    }
}
