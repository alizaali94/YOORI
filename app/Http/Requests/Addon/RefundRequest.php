<?php

namespace App\Http\Requests\Addon;

use Illuminate\Foundation\Http\FormRequest;

class RefundRequest extends FormRequest
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
            'refund_reason'   => 'required',
            'order'           => 'required',
            'order_detail_id' => 'required',
        ];
    }
}
