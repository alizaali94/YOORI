<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class AttributeValueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

            'id'                    => $this->id,
            'attribute_id'          => (int)$this->attribute_id,
            'value'                 => $this->value,
            'created_at'            => $this->created_at,
            'update_at'             => $this->updated_at,
        ];
    }
}
