<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class ChildCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'parent_id'         => $this->parent_id,
            'slug'              => $this->slug,
            'title'             => $this->getTranslation('title',languageCheck()),
        ];
    }
}
