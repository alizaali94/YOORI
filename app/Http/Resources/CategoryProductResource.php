<?php

namespace App\Http\Resources;

use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->getTranslation('title',apiLanguage($request->lang)),
            'products'              => ProductResource::collection($this->products)
        ];
    }
}
