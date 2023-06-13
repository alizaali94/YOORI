<?php

namespace App\Http\Resources\AdminResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PosCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'title'             => $this->getTranslation('title',languageCheck())
        ];
    }
}
