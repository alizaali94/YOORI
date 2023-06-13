<?php

namespace App\Http\Resources\AdminResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PosUserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'full_name'         => $this->full_name,
            'balance'           => $this->balance,
        ];
    }
}
