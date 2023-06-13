<?php

namespace App\Http\Requests\Addon;

use Illuminate\Foundation\Http\FormRequest;

class ChatMessengerRequest extends FormRequest
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
            'facebook_page_id'          => 'required_if:chat_messenger,facebook',
            'facebook_messenger_color'  => 'required_if:chat_messenger,facebook',

            'tawk_property_id'          => 'required_if:chat_messenger,tawk',
            'tawk_widget_id'            => 'required_if:chat_messenger,tawk',
        ];
    }
}
