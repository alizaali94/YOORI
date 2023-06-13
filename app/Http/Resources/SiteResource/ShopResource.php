<?php

namespace App\Http\Resources\SiteResource;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'image_82x82'           => $this->image_82x82,
            'image_297x203'         => $this->image_297x203,
            'rating_count'          => round($this->rating_count,2),
            'reviews_count'         => (int)$this->reviews_count,
            'shop_name'             => $this->shop_name,
            'total_products'        => count($this->products),
            'join_date'             => Carbon::parse($this->created_at)->format('d M Y'),
        ];
    }
}
