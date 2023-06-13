<?php

namespace App\Http\Resources\SiteResource;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ShopPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                    => $data->id,
                    'slug'                  => $data->slug,
                    'image_82x82'           => $data->image_82x82,
                    'image_297x203'         => $data->image_297x203,
                    'rating_count'          => round($data->rating_count,2),
                    'reviews_count'         => (int)$data->reviews_count,
                    'shop_name'             => $data->shop_name,
                    'total_products'        => count($data->products),
                    'join_date'             => Carbon::parse($data->created_at)->format('d M Y'),
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
