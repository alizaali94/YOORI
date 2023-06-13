<?php

namespace App\Http\Resources\AdminResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PosBrandResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'title'             => $this->getTranslation('title',app()->getLocale()),
            'total_products'    => $this->products_count,
        ];
    }
}
