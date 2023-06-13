<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FollowShop extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'seller_profile_id' => $this->id,
            'user_id'           => authId(),
        ];
    }
}
