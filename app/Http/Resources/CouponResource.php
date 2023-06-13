<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CouponResource extends JsonResource
{
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
