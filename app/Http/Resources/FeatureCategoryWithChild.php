<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeatureCategoryWithChild extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id'                => $this->id,
            'icon'              => nullCheck($this->icon),
            'title'             => $this->getTranslation('title',languageCheck()),
            'image'             => $this->image,
//            'sub_categories'    => CategoryWithoutChildResource::collection($this->childCategories)
        ];
    }
}
