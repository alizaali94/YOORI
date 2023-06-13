<?php

namespace App\Http\Resources\Api\Seller;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductListResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//        dd($this);
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                                         => $data->id,
                    'brand_id'                                   => $data->brand_id,
                    'category_id'                                => $data->category_id,
                    'user_id'                                    => $data->user_id,
                    'slug'                                       => $data->slug,
                    'price'                                      => $data->price,
                    'image_72x72'                                => $data->image_72x72,
                    'product_name'                               => $data->product_name,
                    'rating'                                     => $data->rating,
                    'total_sale'                                 => $data->total_sale,
                    'is_catalog'                                 => $data->is_catalog,
                    'todays_deal'                                => $data->todays_deal,
                    'is_featured'                                => $data->is_featured,
                    'status'                                     => $data->status,
                    'date'                                       => $data->date,
                    'stock'                                      => ProductStockResource::collection($data->stock),
                    'user'                                       => $data->user->first_name.' '.$data->user->last_name,
                ];
            }),

            'total'         => $this->total(),
            'count'         => $this->count(),
            'per_page'      => $this->perPage(),
            'current_page'  => $this->currentPage(),
            'total_pages'   => $this->lastPage(),
            'last_page'     => $this->lastPage(),
            'next_page_url' => $this->nextPageUrl(),
            'has_more_data' => $this->hasMorePages(),

        ];
    }
}
