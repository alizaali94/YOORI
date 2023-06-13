<?php

namespace App\Http\Resources\Api;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class CouponResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'title'                 => $this->getTranslation('title',apiLanguage($request->lang)),
            'code'                  => $this->code,
            'discount_type'         => $this->discount_type,
            'discount'              => $this->discount,
            'end_time'              => Carbon::parse($this->end_date)->format('d M y h:m A'),
            'image_145x110'         => $this->image_145x110,
        ];
    }
}
