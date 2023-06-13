<?php

namespace App\Imports;

use App\Models\Product;
use App\Models\ProductLanguage;
use App\Models\ProductStock;
use App\Traits\SlugTrait;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\Importable;
use Sentinel;

class ProductImport implements ToCollection, WithHeadingRow, WithChunkReading, SkipsEmptyRows, SkipsOnError, WithValidation
{
    use SlugTrait, SkipsErrors, Importable;

    public function collection(Collection $rows)
    {
        if (Sentinel::getUser()->user_type == 'seller'):
            $user_id = authId();
        else:
            $user_id = 1;
        endif;
        foreach ($rows as $row):
            $product = Product::create([
                            'user_id'               => $user_id,
                            'brand_id'              => $row['brand_id'] ? : null,
                            'category_id'           => $row['category_id'] ? : null,
                            'created_by'            => authId(),
                            'slug'                  => $this->getSlug($row['name'],$row['slug']),
                            'price'                 => $row['price'],
                            'purchase_cost'         => '',
                            'barcode'               => $row['barcode'] ? : '',
                            'video_provider'        => $row['video_provider'] ? : '',
                            'video_url'             => $row['video_url'] ? : '',
                            'current_stock'         => $row['current_stock'],
                            'minimum_order_quantity'=> $row['minimum_order_quantity'],
                            'is_approved'           => $user_id == 1 ? 1 : 0,
                            'is_catalog'            => $row['is_catalog'] ? : 0,
                            'external_link'         => $row['external_link'],
                            'is_refundable'         => $row['is_refundable'] ? : 0,
                            'cash_on_delivery'      => $row['cash_on_delivery'] ? : 0,
                            'attribute_sets'        => [],
                            'thumbnail'             => [],
                            'images'                => [],
                            'meta_image'            => [],
                            'colors'                => [],
                            'selected_variants'     => [],
                            'selected_variants_ids' => [],
                            'contact_info'          => [],
                        ]);

            ProductLanguage::create([
                'product_id'            => $product->id,
                'name'                  => $row['name'],
                'short_description'     => $row['short_description'],
                'description'           => $row['description'],
                'tags'                  => $row['tags'],
                'meta_title'            => $row['meta_title'],
                'meta_description'      => $row['meta_description'],
            ]);

            ProductStock::create([
                'product_id'            => $product->id,
                'name'                  => '',
                'sku'                   => $row['sku'],
                'price'                 => $row['price'],
                'current_stock'         => $row['current_stock'],
                'image'                 => [],
            ]);


        endforeach;
    }

    public function chunkSize(): int
    {
        return 2000;
    }

    public function rules(): array
    {
        return [
            '*.name'                    => 'required|string',
            '*.short_description'       => 'nullable|string',
            '*.description'             => 'nullable|string',
            '*.sku'                     => 'nullable|string',
            '*.tags'                    => 'nullable|string',
            '*.slug'                    => 'nullable|string|unique:products,slug',
            '*.price'                   => 'required|numeric',
            '*.category_id'             => 'required|exists:categories,id',
            '*.brand_id'                => 'nullable|exists:brands,id',
            '*.video_provider'          => 'string|nullable|in:youtube,vimeo,mp4',
            '*.video_url'               => 'required_with:video_provider',
            '*.current_stock'           => 'required',
            '*.minimum_order_quantity'  => 'required|numeric',
            '*.external_link'           => 'required_with:is_catalog',
        ];
    }
}
