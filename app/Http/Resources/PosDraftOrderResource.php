<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PosDraftOrderResource extends ResourceCollection
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
            'data' => $this->collection->map(function ($data) {
                return [
                    'id'                                         => $data->id,
                    'sub_total'                                  => $data->sub_total,
                    'discount'                                   => $data->discount,
                    'total_tax'                                  => $data->total_tax,
                    'total_amount'                               => $data->total_amount,
                    'shipping_cost'                              => $data->shipping_cost,
                    'total_payable'                              => $data->total_payable,
                    'trx'                                        => $data->trx_id,
                    'date'                                       => $data->date,
                    'user'                                       => $data->user->first_name.' '.$data->user->last_name,
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
