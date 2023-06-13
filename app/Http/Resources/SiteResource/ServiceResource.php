<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'title'                 => $this->getTranslation('title',languageCheck()),
            'sub_tile'              => $this->getTranslation('sub_title',languageCheck()),
            'service_image'         => $this->service_image,
        ];
    }
}
