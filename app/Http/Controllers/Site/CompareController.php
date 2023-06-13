<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;

class CompareController extends Controller
{
    protected $product;

    public function __construct(ProductInterface $product)
    {
        $this->product = $product;
    }
    public function addToCompare($id): \Illuminate\Http\JsonResponse
    {
        try {
            if (authUser()) {

                $data = [
                    'compare' => $this->product->addToCompare($id),
                    'compare_list' => $this->product->compareList(),
                    'product' => $this->product->all()->where('id',$id)->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,status')->first(),
                    'success' => __('Added To Compare List'),
                ];
            } else {
                $session_products = session()->get('compare_list') ?: [];
                $products[$id] = $id;
                session()->put('compare_list', $products + $session_products);
                $data = [
                    'compare_list' => $this->product->compareList(),
                    'product' => $this->product->all()->where('id',$id)->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,status')->first(),
                    'success' => __('Added To Compare List'),
                ];
            }
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.Something Went Wrong')
            ]);
        }
    }

    public function parseProduct($products): array
    {
        $compare_list = [];

        foreach ($products as $product) {
            $brand = $product->brand;
            $category = $product->category;

            $compare_list[] = [
                'id' => $product->id,
                'slug' => $product->slug,
                'has_variant' => $product->has_variant,
                'minimum_order_quantity' => $product->minimum_order_quantity,
                'product_name' => $product->getTranslation('name',languageCheck()),
                'image_190x230' => $product->image_190x230,
                'special_discount_check' => $product->special_discount_check,
                'discount_percentage' => $product->discount_percentage,
                'price' => $product->price,
                'brand' => $brand ? $brand->getTranslation('title',languageCheck()) : '',
                'category' => $category ? $category->getTranslation('title',languageCheck()) : '',
                'status' => $product->status,
            ];
        }
        return $compare_list;
    }

    public function compareList(): \Illuminate\Http\JsonResponse
    {
        try {
            if (authUser()) {
                $products = $this->product->compareProducts();

            } else {
                $compare_list = session()->get('compare_list');

                $products = $compare_list ? $this->product->productByIds(array_keys($compare_list)) : [];
            }

            return response()->json([
                'products' => $this->parseProduct($products)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.Something Went Wrong')
            ]);
        }
    }

    public function removeCompareProduct($id): \Illuminate\Http\JsonResponse
    {
        try {
            if (authUser()) {

                $data = [
                    'product' => $this->product->removeCompareProduct($id),
                    'compare_list' => $this->product->compareList(),
                ];
                $products = $this->product->compareProducts();

            } else {
                $products = session()->get('compare_list');

                unset($products[$id]);

                session()->put('compare_list', $products);

                $list = session()->get('compare_list');
                $products = $this->product->productByIds($list);

                $data = [
                    'compare_list' => $this->product->compareList(),
                    'product' => $this->product->all()->where('id',$id)->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail')->first(),
                ];
            }
            $data['products'] = $this->parseProduct($products);

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.Something Went Wrong')
            ]);
        }
    }
}
