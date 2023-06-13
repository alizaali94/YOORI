<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {

                return [
                    'id'                        => $data->id,
                    'slug'                      => $data->slug,
                    'category_id'               => $data->category_id,
                    'product_name'              => $data->getTranslation('name',languageCheck()),
                    'special_discount_type'     => nullCheck($data->special_discount_type),
                    'special_discount_check'    => $data->special_discount_check,
                    'discount_percentage'       => $data->discount_percentage,
                    'image_190x230'             => $data->image_190x230,
                    'price'                     => (double)$data->price,
                    'rating'                    => (double)$data->reviews_avg_rating,
                    'reviews_count'             => (int)$data->reviews_count,
                    'current_stock'             => (int)$data->current_stock,
                    'reward'                    => (double)$data->reward,
                    'minimum_order_quantity'    => (int)$data->minimum_order_quantity,
                    'todays_deal'               => (int)$data->todays_deal,
                    'has_variant'               => (int)$data->has_variant,
                    'user_wishlist'             => (bool)$data->userWishlist,
                    'is_catalog'                => (bool)$data->is_catalog,
                    'is_classified'             => (bool)$data->is_classified,
                ];
            }),

            'total' => $this->total(),
            'count' => $this->count(),
            'per_page' => $this->perPage(),
            'current_page' => $this->currentPage(),
            'total_pages' => $this->lastPage(),
            'last_page' => $this->lastPage(),
            'next_page_url' => $this->nextPageUrl(),
            'has_more_data' => $this->hasMorePages(),

        ];
    }
}
