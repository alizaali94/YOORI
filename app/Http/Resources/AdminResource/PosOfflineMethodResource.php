<?php

namespace App\Http\Resources\AdminResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PosOfflineMethodResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'               => $this->id,
            'name'             => $this->name,
            'image'            => $this->image,
            'instructions'     => $this->instructions,
        ];
    }
}
