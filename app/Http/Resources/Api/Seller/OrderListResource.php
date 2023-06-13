<?php

namespace App\Http\Resources\Api\Seller;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderListResource extends ResourceCollection
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
            'data' => $this->collection->map(function ($data)  use ($request){

                return [
                    'id'                                         => $data->order->id,
                    'brand'                                      => @$data->product->brand->getTranslation('title',$request->lang),
                    'category'                                   => @$data->product->category->getTranslation('title',$request->lang),
                    'slug'                                       => $data->slug,
                    'product_name'                               => $data->product->product_name,
                    'image_72x72'                                => $data->product->image_72x72,
                    'delivery_status'                            => $data->order->delivery_status,
                    'is_refunded'                                => $data->product->is_refundable,
                    'total_amount'                               => $data->order->total_amount,
                    'code'                                       => $data->order->code,
                    'date'                                       => $data->order->date,
                ];
            }),

            'total'         => $this->total(),
            'count'         => $this->count(),
            'per_page'      => $this->perPage(),
            'current_page'  => $this->currentPage(),
            'total_pages'   => $this->lastPage(),
            'last_page'     => $this->lastPage(),
            'next_page_url' => $this->nextPageUrl(),
            'has_more_data' => $this->hasMorePages(),

        ];
    }
}
