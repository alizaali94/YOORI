<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class NestedCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'slug'              => $this->slug,
            'title'             => $this->getTranslation('title',languageCheck()),
            'icon'              => $this->icon,
            'categories'        => NestedCategoryResource::collection($this->childCategories),
        ];
    }
}
