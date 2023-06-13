<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                                    => $this->id,
            'title'                                 => $this->title,
            'content'                               => $this->content,
            'link'                                  => $this->link,
            'type'                                  => $this->type,
            'address'                               => $this->address,
        ];
    }
}
