<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MobileCouponResource extends JsonResource
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
                    'id'                    => $this->id,
                    'title'                 => $this->title,
                    'code'                  => $this->code,
                    'discount_type'         => $this->discount_type,
                    'discount'              => $this->discount,
                    'image_145x110'         => $this->image_145x110,
                ];
    }
}
