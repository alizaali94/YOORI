<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                => $data->id,
                    'parent_id'         => $data->parent_id,
                    'slug'              => $data->slug,
                    'title'             => $data->getTranslation('title',languageCheck()),
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
