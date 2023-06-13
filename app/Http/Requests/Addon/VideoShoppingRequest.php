<?php

namespace App\Http\Requests\Addon;

use Illuminate\Foundation\Http\FormRequest;

class VideoShoppingRequest extends FormRequest
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
            'title'         => 'required|min:3|max:190',
            'slug'          => 'unique:video_shoppings,slug|max:190',
            'style'         => 'required|min:5',
            'video_type'    => 'required',
            'video_url'     => 'required|min:5',
            'meta_title'    => 'nullable|max:190',
        ];
    }
}
