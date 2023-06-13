<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CampaignPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                    => $data->id,
                    'slug'                  => $data->slug,
                    'title'                 => $data->title,
                    'short_description'     => nullCheck($data->short_description),
                    'campaign_start_date'   => nullCheck($data->campaign_start_date),
                    'campaign_end_date'     => nullCheck($data->campaign_end_date),
                    'image_374x374'         => $data->image_374x374,
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
