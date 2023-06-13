<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogDetailsResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'category_id'           => $this->category_id,
            'title'                 => $this->getTranslation('title',languageCheck()),
            'short_description'     => nullCheck($this->getTranslation('short_description',languageCheck())),
            'thumbnail'             => $this->thumbnail,
        ];
    }
}
