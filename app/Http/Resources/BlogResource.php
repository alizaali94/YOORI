<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'url'                   => route('api.post.details',$this->id),
            'title'                 => $this->getTranslation('title',apiLanguage($request->lang)),
            'short_description'     => nullCheck($this->short_description),
            'thumbnail'             => $this->thumbnail,
        ];
    }
}
