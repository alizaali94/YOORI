<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public function toArray($request)
    {

        return [
            'id'                => $this->id,
            'icon'              => nullCheck($this->icon),
            'parent_id'         => (int)$this->parent_id,
            'slug'              => $this->slug,
            'banner'            => $this->popular_banner,
            'title'             => $this->getTranslation('title',languageCheck()),
            'image'             => $this->popular_image,
            'sub_categories'    => SubCategoryResource::collection($this->childCategories)
        ];
    }
}
