<?php

namespace App\Http\Resources\Api\Seller;

use Illuminate\Http\Resources\Json\JsonResource;

class WalletResource extends JsonResource
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
            'id'                                    => $this->id,
            'user_id'                               => $this->user_id,
            'order_id'                              => $this->order_id,
            'amount'                                => (double)$this->amount,
            'source'                                => $this->source,
            'type'                                  => $this->type,
            'payment_method'                        => $this->payment_method,
            'status'                                => $this->status,
            'transaction_id'                        => $this->transaction_id,
            'created_at'                            => $this->recharge_date,
        ];
    }
}
