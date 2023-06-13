<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'parent_id'         => $this->parent_id,
            'slug'              => $this->slug,
            'title'             => $this->getTranslation('title',languageCheck()),
            'all_popular_image' => $this->all_popular_image,
            'child_categories'  => NestedCategoryResource::collection($this->categories)
        ];
    }
}
