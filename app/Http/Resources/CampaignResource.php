<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CampaignResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->title,
            'short_description'     => nullCheck($this->short_description),
            'start_date'            => nullCheck($this->start_date),
            'end_date'              => nullCheck($this->end_date),
            'banner'                => $this->image_1920x412,
        ];
    }
}
