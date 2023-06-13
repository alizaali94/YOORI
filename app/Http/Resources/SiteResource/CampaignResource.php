<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class CampaignResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->getTranslation('title',languageCheck()),
            'short_description'     => nullCheck($this->getTranslation('description',languageCheck())),
            'campaign_start_date'   => nullCheck($this->campaign_start_date),
            'campaign_end_date'     => nullCheck($this->campaign_end_date),
            'image_1920x412'        => $this->image_1920x412,
            'image_374x374'         => $this->image_374x374,
        ];
    }
}
