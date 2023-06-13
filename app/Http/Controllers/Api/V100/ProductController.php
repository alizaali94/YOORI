<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\AttributeResource;
use App\Http\Resources\ColorResource;
use App\Http\Resources\ProductPaginateResource;
use App\Http\Resources\ReviewResource;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;
use App\Repositories\Interfaces\Admin\Product\ColorInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\ReviewInterface;
use App\Traits\ApiReturnFormatTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    use ApiReturnFormatTrait;

    public $product;

    public function __construct(ProductInterface $product)
    {
        $this->product = $product;
    }

    public function latestProduct(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->getLatestProducts(get_pagination('api_paginate'),$request->all()));
            return $this->responseWithSuccess(__('Latest Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function topProduct(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->getTopProducts(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Top Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function bestRatedProduct(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->bestRatedProducts(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Best Rated Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function bestSellingProduct(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->productByBestSelling(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Best Selling Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function offerEndingProduct(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->offerEndingSoon(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Offer Ending Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function todayDeal(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->dailyDeals(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Today Deal Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function flashDeal(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->flashDeals(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Flash Deal Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function brandProducts($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->brandProducts($id,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Brand Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function categoryProducts($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->categoryByProducts($id,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Category Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function shopProducts($user_id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->shopProducts($user_id,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Shop Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function campaignProducts($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = ProductPaginateResource::collection($this->product->productByCampaign($id,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Campaign Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function viewedProduct(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), '', 404);
                    }
                } catch (\Exception $e) {
                }
            }
            $data = ProductPaginateResource::collection($this->product->viewedProducts($user,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Viewed Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function details($id,ColorInterface $color,AttributeInterface $attribute,ReviewInterface $review,Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), '', 404);
                    }
                } catch (\Exception $e) {
                }
            }

            $product = $this->product->get($id);
            $stock                              = $product->stock;
            $first_stock                        = '';

            $images = $wholesale_prices = $description_images = [];
            $image_no                           = 0;

            if($product->images)
            {
                foreach ($product->images as $image) {
                    if ($image && (arrayCheck(['image_320x320'], @$image['storage']) || @is_file_exists($image['image_320x320'], @$image['storage'])) || (arrayCheck(['image_320x320'], @$image['storage']) || @is_file_exists($image['image_387x200'], @$image['storage'])))
                    {
                        if (arrayCheck(['image_320x320'], @$image['storage']) && is_file_exists($image['image_387x200'], @$image['storage']))
                        {
                            $size = 'image_387x280';
                        }
                        else{
                            $size = 'image_320x320';
                        }
                        $images[] = @get_media(@$image[$size], @$image['storage']);

                        $image_no++;
                    }
                }
            }

            if ($product->has_variant) {
                foreach ($stock as $key => $item) {
                    if ($key == 0) {
                        $first_stock = $item;
                    }

                    if ($item->image && (arrayCheck(['image_320x320'], @$item->image['storage']) || @is_file_exists($item->image['image_320x320'], @$item->image['storage'])) || (arrayCheck(['image_320x320'], @$item->image['storage']) || @is_file_exists($item->image['image_387x200'], @$item->image['storage'])))
                    {
                        if (arrayCheck(['image_320x320'], @$item->image['storage']) && is_file_exists($item->image['image_387x200'], @$item->image['storage']))
                        {
                            $size = 'image_387x280';
                        }
                        else{
                            $size = 'image_320x320';
                        }
                        $images[] = @get_media(@$item->image[$size], @$item->image['storage']);

                        $image_no++;
                    }
                }
            } else if (addon_is_activated('wholesale')) {
                $first_stock = $product->firstStock;
                foreach($first_stock->wholeSalePrice as $item){
                    $item->price = (string)$item->price;
                }
                $wholesale_prices =  $first_stock->wholeSalePrice;
            }

            if ($product->thumbnail && count($product->thumbnail) > 0 && !arrayCheck('320x320',$product->thumbnail) && !@is_file_exists($product->thumbnail['320x320'], $product->thumbnail['storage']))
            {
                $large_size_image = '320x320';
            }
            else{
                $large_size_image = '387x280';
            }

            if ($product->description_images && count($product->description_images) > 0)
            {
                foreach ($product->description_images as $description_image) {

                    if (is_file_exists($description_image['image'],$description_image['storage']))
                    {
                        $description_images[] = get_media($description_image['image'],$description_image['storage']);
                    }
                }
            }

            $images[] = @getFileLink($large_size_image, @$product->thumbnail);

            $now = Carbon::now()->format('Y-m-d H:i:s');

            $reviews = $review->productReviews($product->id,get_pagination('api_paginate'));

            $name = $product->getTranslation('name',apiLanguage($request->lang));
            $data = [
                'title'                     => $name,
                'special_discount_type'     => nullCheck($product->special_discount_type),
                'special_discount'          => number_format($product->special_discount_check,3),
                'discount_price'            => (string)$product->discount_percentage,
                'price'                     => (string)$product->price,
                'rating'                    => (double)$product->rating,
                'total_reviews'             => count($reviews),
                'current_stock'             => (int)$product->current_stock,
                'minimum_order_quantity'    => (int)$product->minimum_order_quantity,
                'reward'                    => (double)$product->reward,
                'total_images'              => count($images),
                'images'                    => $images,
                'colors'                    => ColorResource::collection($color->colorByIds($product->colors)),
                'attributes'                => AttributeResource::collection($attribute->attributes(array_keys($product->selected_variants),$product->selected_variants_ids)),
                'special_discount_start'    => $product->is_wholesale != 1 && $product->special_discount_start <= $now && $product->special_discount_end >= $now ? $product->special_discount_start : '',
                'special_discount_end'      => $product->is_wholesale != 1 && $product->special_discount_end >= $now ? $product->special_discount_end : '',
                'description'               => route('api.product.details',$product->id),
                'details'                   => $product->getTranslation('description',apiLanguage($request->lang)),
                'is_favourite'              => $user && count($product->wishlists) && $product->wishlists->where('user_id', $user->id)->first(),
                'short_description'         => html_entity_decode($product->getTranslation('short_description',apiLanguage($request->lang))),
                'has_variant'               => (bool)$product->has_variant == 1,
                'is_wholesale'              => (bool) (addon_is_activated('wholesale') ? $product->is_wholesale : false),
                'is_catalog'                => (bool)$product->is_catalog,
                'is_featured'               => (bool)$product->is_featured,
                'is_classified'             => (bool)$product->is_classified,
                'is_digital'                => (bool)$product->is_digital,
                'is_refundable'             => (bool)$product->is_refundable,
                'description_images'        => $description_images,
                'specifications'            => $product->getTranslation('specification',apiLanguage($request->lang)) ? : '',
                'reviews'                   => ReviewResource::collection($reviews),
                'is_reviewed'               => $user && count($reviews) && $reviews->where('user_id', $user->id)->first(),
                'delivery'                  => $product->is_digital == 0 ? $product->estimated_shipping_days : 0,
                'return'                    => addon_is_activated('refund') ? (int)settingHelper('refund_request_time') : 0,
                'stock_visibility'          => !($product->is_catalog == 1 || $product->is_classified == 1) && $product->is_digital != 1 && $product->stock_visibility != 'hide_stock' ?
                                                ($product->stock_visibility == 'visible_with_quantity' ? $first_stock->current_stock : __('ask_about_this_product')) : '',
                'wholesale_prices'          => settingHelper('wholesale_price_variations_show') == 1 && $product->is_wholesale == 1 && count($wholesale_prices) > 0 ? $wholesale_prices : [],
                'classified_contact_info'   => $product->is_classified == 1 ? [
                    'name'      => nullCheck(@$product['contact_info']['contact_name']),
                    'phone'     => nullCheck(@$product['contact_info']['phone_no']),
                    'email'     => nullCheck(@$product['contact_info']['email']),
                    'address'   => nullCheck(@$product['contact_info']['address']),
                    'others'    => nullCheck(@$product['contact_info']['others']),
                ] : null,
                'catalog_external_link' => $product->is_catalog == 1 ? $product->external_link : '',
                'form'                      => [
                    'product_id'        => $product->id,
                    'quantity'          => $product->minimum_order_quantity ? (int)$product->minimum_order_quantity : 1,
                ],
                'links' => [
                    'facebook' => 'https://www.facebook.com/sharer/sharer.php?u='.url('product/'.$product->slug),
                    'twitter' => 'https://twitter.com/intent/tweet?text='.$name.'&url='.url('product/'.$product->slug),
                    'linkedin' => 'https://www.linkedin.com/sharing/share-offsite?mini=true&url='.url('product/'.$product->slug).'&title='.$name.'&summary=Extra+linkedin+summary+can+be+passed+here',
                    'whatsapp' => 'https://wa.me/?text='.url('product/'.$product->slug),
                ]
            ];

            return $this->responseWithSuccess(__('Product Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function search(Request $request)
    {
        try {
            $data = ProductPaginateResource::collection($this->product->search($request->key,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Product Found Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function findVariant(Request $request,AttributeInterface $attribute): \Illuminate\Http\JsonResponse
    {
        try {
            $i = 0;
            $variant = $request->color_id;

            foreach (array_filter($request->attribute_ids) as $key => $value) {
                if ($request->color_id) {
                    $variant .= '-' . $value;
                } elseif ($i == 0 && !$request->color_id) {
                    $variant .= $value;
                } else {
                    $variant .= '-' . $value;
                }
                $i++;
            }

            $stock = $attribute->findStock($variant, $request->product_id);
            $images = '';

            if ($stock) {
                $images = @is_file_exists($stock->image['image_320x320'], $stock->image['storage']) ? @get_media($stock->image['image_320x320'], $stock->image['storage']) : static_asset('images/default/default-image-320x320.png');
            }
            $data = [
                'product_stock'  => [
                'id'                => @$stock->id,
                'current_stock'     => @$stock->current_stock,
                'variant'           => @$stock->name,
                'image'             => @$stock->image_190x230,
                'price'             => round(@$stock->price,2),
                'sku'               => @$stock->sku,
                'variant_ids'       => @$stock->variant_ids,
                'discount_price'    => round(@$stock->discount_percentage,3),
                'formatted_price'   => @$stock->price,
                'formatted_discount'=> @$stock->discount_percentage ? @$stock->discount_percentage : 0,
                ],
                'msg'           => $stock ? __('Product Available of this Variant') : __('Stock Out'),
                'image'         => $images,
            ];
            return $this->responseWithSuccess(__('Product Found Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function getDescription($id)
    {
        try {
            $product = $this->product->get($id);

            $data = [
                'description' => $product->translate->description
            ];

            return view('api.product-description',$data);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
