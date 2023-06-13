<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CampaignPaginateResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->getTranslation('title',apiLanguage($request->lang)),
            'short_description'     => $this->getTranslation('short_description',apiLanguage($request->lang)),
            'start_date'            => $this->start_date,
            'end_date'              => $this->end_date,
            'banner'                => $this->image_1920x412,
        ];
    }
}
