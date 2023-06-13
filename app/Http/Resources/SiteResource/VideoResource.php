<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'slug'      => $this->slug,
            'is_live'   => (bool)$this->is_live,
            'thumbnail' => getFileLink('299x536',$this->thumbnail),
            'title'     => $this->getTranslation('title',languageCheck()),
        ];
    }
}
