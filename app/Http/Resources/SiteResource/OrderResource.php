<?php

namespace App\Http\Resources\SiteResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                $sku_product = $data->product->stock->where('name', $data->variation)->first();
                return [
                    'id'                    => $data->id,
                    'product_name'          => $data->product->product_name,
                    'variation'             => $data->variation,
                    'sku'                   => $sku_product ? $sku_product->sku : '',
                    'order_date'            => $data->order->order_date,
                    'delivery_status'       => $data->order->delivery_status,
                    'payment_status'        => $data->order->payment_status,
                    'total_payable'         => $data->order->total_payable,
                    'order_id'              => $data->order_id,
                    'code'                  => $data->order->code,
                    'product_file_id'       => $data->product->product_file_id,
                    'image'                 => getFileLink('40x40',@$data->product->thumbnail),
                    'is_deleted'            => $data->order->is_deleted,
                ];
            }),

            'total' => $this->total(),
            'count' => $this->count(),
            'per_page' => $this->perPage(),
            'current_page' => $this->currentPage(),
            'total_pages' => $this->lastPage(),
            'last_page' => $this->lastPage(),
            'next_page_url' => $this->nextPageUrl(),
            'has_more_data' => $this->hasMorePages(),

        ];
    }
}
