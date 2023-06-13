<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BrandResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->getTranslation('title',apiLanguage($request->lang)),
            'thumbnail'             => $this->image_130x93,
        ];
    }
}
