<?php

namespace App\Http\Resources\AdminResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class StockPaginateResource extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                $tax =0;
                if (settingHelper('vat_and_tax_type') == 'product_base'):
                    $price = $data->product->has_variant == 1 ? $data->price : $data->product->price;
                    foreach ($data->product->vatTaxes($data->product) as $product_tax) :
                        $tax += ($price * $product_tax->percentage) / 100;
                    endforeach;
                endif;
                return [
                    'id'                                    => $data->id,
                    'product_id'                            => $data->product_id,
                    'seller_id'                             => $data->product->user_id,
                    'current_stock'                         => $data->product->has_variant == 1 ? (int)$data->current_stock : (int)@$data->product->current_stock,
                    'name'                                  => $data->name,
                    'product_name'                          => @$data->product->product_name,
                    'special_discount'                      => @$data->product->special_discount_check,
                    'discount_price'                        => $data->product->has_variant == 1 ? @$data->discount_percentage : @$data->product->discount_percentage,
                    'has_variant'                           => (int)@$data->product->has_variant,
                    'price'                                 => $data->product->has_variant == 1 ? @$data->product->price : $data->price,
                    'image'                                 => $data->product->has_variant == 1 ? $data->image_190x230 : $data->product->image_190x230,
                    'tax'                                   => $tax,
                    'barcode'                               => $data->product->barcode,
                    'min_order_quantity'                    => $data->product->minimum_order_quantity,
                    'discount_amount'                       => $data->product->special_discount_check > 0 ? ($data->product->has_variant == 1 ? ($data->price - $data->discount_percentage) : ($data->product->price - $data->product->discount_percentage)) : 0,
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
