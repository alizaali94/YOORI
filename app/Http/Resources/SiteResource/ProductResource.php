<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                                    => $this->id,
            'slug'                                  => $this->slug,
            'category_id'                           => $this->category_id,
            'product_name'                          => @$this->getTranslation('name',languageCheck()),
            'special_discount_type'                 => nullCheck($this->special_discount_type),
            'special_discount_check'                => $this->special_discount_check,
            'discount_percentage'                   => $this->discount_percentage,
            'image_190x230'                         => $this->image_190x230,
            'image_40x40'                           => $this->image_40x40,
            'is_approved'                           => $this->is_approved,
            'price'                                 => (double)$this->price,
            'status'                                => $this->is_approved == 0 ? 'pending' : $this->status,
            'rating'                                => (double)$this->reviews_avg_rating,
            'reviews_count'                         => (int)$this->reviews_count,
            'current_stock'                         => (int)$this->current_stock,
            'reward'                                => (double)$this->reward,
            'minimum_order_quantity'                => (int)$this->minimum_order_quantity,
            'todays_deal'                           => (int)$this->todays_deal,
            'has_variant'                           => (int)$this->has_variant,
            'user_wishlist'                         => (bool)$this->userWishlist,
            'is_catalog'                            => (bool)$this->is_catalog,
            'is_classified'                         => (bool)$this->is_classified,
        ];
    }
}
