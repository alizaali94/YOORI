<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'reply'             => $this->reply,
            'date'              => $this->reply_date,
            'user'         => [
                'id'        => $this->user->id,
                'name'      => $this->user->full_name,
                'image'     => $this->user->user_profile_image,
            ],
        ];
    }
}
