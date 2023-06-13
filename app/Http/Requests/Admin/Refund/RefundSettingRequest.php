<?php

namespace App\Http\Requests\Admin\Refund;

use Illuminate\Foundation\Http\FormRequest;

class RefundSettingRequest extends FormRequest
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
            'refund_request_time'                 => 'required_if:refund_request,refund',
            'refund_sticker'                      => 'required_if:refund_request,refund',
        ];
    }
}
