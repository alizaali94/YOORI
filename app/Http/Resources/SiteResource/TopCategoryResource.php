<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class TopCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'slug'              => $this->slug,
            'title'             => $this->getTranslation('title',languageCheck()),
            'popular_image'     => $this->popular_image,
            'top_image'         => $this->top_image,
        ];
    }
}
