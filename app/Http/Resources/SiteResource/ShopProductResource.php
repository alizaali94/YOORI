<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class ShopProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                                    => $this->id,
            'slug'                                  => $this->slug,
            'product_name'                          => $this->product_name,
            'special_discount_type'                 => nullCheck($this->special_discount_type),
            'special_discount_check'                => $this->special_discount_check,
            'discount_price'                        => $this->discount_percentage,
            'image_72x72'                           => $this->image_72x72,
            'price'                                 => (double)$this->price,
        ];
    }
}
