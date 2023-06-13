<?php

namespace App\Http\Resources\Api\Seller;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'id'                                         => $this->order->id,
            'brand'                                      => @$this->product->brand->getTranslation('title',$request->lang),
            'category'                                   => @$this->product->category->getTranslation('title',$request->lang),
            'slug'                                       => $this->slug,
            'product_name'                               => $this->product->product_name,
            'image_72x72'                                => $this->product->image_72x72,
            'delivery_status'                            => $this->order->delivery_status,
            'is_refunded'                                => $this->product->is_refundable,
            'total_amount'                               => $this->order->total_amount,
            'code'                                       => $this->order->code,
            'date'                                       => $this->order->date,
        ];
    }
}
