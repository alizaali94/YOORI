<?php

namespace App\Http\Requests\Admin\Blog;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
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
            'title'                     =>'required|max:300',
            'slug'                      =>'max:70|unique:blogs,slug,'.\Request()->blog_id,
            'category_id'               =>'required',
            'short_description'         =>'nullable',
            'long_description'          =>'nullable',
            'image'                     =>'nullable',
            'meta_keyword'              =>'nullable',
            'status'                    =>'required',
            'meta_title'                =>'nullable',
            'meta_description'          =>'nullable',
        ];
    }
}
