<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class MobileProductResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id'                        => $this->id,
            'slug'                      => $this->slug,
            'category_id'               => $this->category_id,
            'product_name'              => $this->getTranslation('name',languageCheck()),
            'special_discount_type'     => nullCheck($this->special_discount_type),
            'special_discount_check'    => $this->special_discount_check,
            'discount_percentage'       => $this->discount_percentage,
            'image_190x230'             => $this->image_190x230,
            'price'                     => (double)$this->price,
            'rating'                    => (double)$this->rating,
            'reviews_count'             => (int)$this->reviews_count,
            'current_stock'             => (int)$this->current_stock,
            'reward'                    => (double)$this->reward,
            'minimum_order_quantity'    => (int)$this->minimum_order_quantity,
            'todays_deal'               => (int)$this->todays_deal,
            'has_variant'               => (int)$this->has_variant,
            'user_wishlist'             => (bool)$this->userWishlist,
        ];
    }
}
