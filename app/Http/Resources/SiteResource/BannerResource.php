<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'    => $this->id,
            'link'  => $this->link,
            'image' => getFileLink('220x125',$this->image),
        ];
    }
}
