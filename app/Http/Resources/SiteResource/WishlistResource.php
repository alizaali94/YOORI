<?php

namespace App\Http\Resources\SiteResource;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class WishlistResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                            => $data->id,
                    'slug'                          => $data->product->slug,
                    'image_72x72'                   => $data->product->image_72x72,
                    'product_name'                  => $data->product->product_name,
                    'current_stock'                 => (int)$data->product->current_stock,
                    'special_discount_type'         => nullCheck($data->special_discount_type),
                    'special_discount_check'        => $data->product->special_discount_check,
                    'discount_percentage'           => $data->product->discount_percentage,
                    'price'                         => (double)$data->product->price,
                    'status'                        => (double)$data->product->status,
                    'date'                          => Carbon::parse($data->created_at)->format('d M Y'),
                    'product'                       => [
                        'id'                        => $data->product->id,
                        'slug'                      => $data->product->slug,
                        'category_id'               => $data->product->category_id,
                        'image_190x230'             => $data->product->image_190x230,
                        'price'                     => (double)$data->product->price,
                        'current_stock'             => (int)$data->product->current_stock,
                        'reward'                    => (double)$data->product->reward,
                        'minimum_order_quantity'    => (int)$data->product->minimum_order_quantity,
                        'todays_deal'               => (int)$data->product->todays_deal,
                        'has_variant'               => (int)$data->product->has_variant,
                    ]
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
