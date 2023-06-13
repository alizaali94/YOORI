<?php

namespace App\Http\Resources;

use App\Http\Resources\Api\OrderResource;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RechargeHistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id'                 => $this->id,
            'amount'             => $this->amount,
            'user_id'            => $this->user_id,
            'type'               => $this->type,
            'date'             => Carbon::parse($this->created_at)->format('d M Y'),
            'payment_method'     => $this->payment_method,
            'status'             => $this->status,
            'transaction_id'     => $this->transaction_id,
        ];
    }
}
