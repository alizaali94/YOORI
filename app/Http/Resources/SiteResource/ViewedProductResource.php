<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class ViewedProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
                'id'                   => $this->id,
                'slug'                 => $this->slug,
                'product_name'         => $this->product_name,
                'image_72x72'          => $this->image_72x72,
        ];
    }
}
