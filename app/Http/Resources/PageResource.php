<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'type'              => $this->type,
            'title'             => $this->getTranslation('title',apiLanguage($request->lang)),
            'link'              => url('/api/v100/page/'.$this->id),
        ];
    }
}
