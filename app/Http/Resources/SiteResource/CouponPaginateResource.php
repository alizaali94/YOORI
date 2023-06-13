<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CouponPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                    => $data->id,
                    'title'                 => $data->title,
                    'code'                  => $data->code,
                    'discount_type'         => $data->discount_type,
                    'discount'              => $data->discount,
                    'image_145x110'         => $data->image_145x110,
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
