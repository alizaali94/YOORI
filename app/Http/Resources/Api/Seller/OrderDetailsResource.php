<?php

namespace App\Http\Resources\Api\Seller;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailsResource extends JsonResource
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
         'product_name' => @$this->product->product_name,
         'name'         => $this->billing_address['name'],
         'phone'        => $this->billing_address['phone_no'],
         'address'        => $this->billing_address['address'],
         'code'             => $this->order->code,
       ];
    }
}
