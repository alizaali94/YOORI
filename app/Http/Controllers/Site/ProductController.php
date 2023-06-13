<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\SiteResource\AttributeResource;
use App\Http\Resources\SiteResource\BrandPaginateResource;
use App\Http\Resources\SiteResource\CategoryPaginateResource;
use App\Http\Resources\SiteResource\ColorResource;
use App\Http\Resources\SiteResource\OrderResource;
use App\Http\Resources\SiteResource\ProductPaginateResource;
use App\Http\Resources\SiteResource\ProductResource;
use App\Http\Resources\SiteResource\ShopPaginateResource;
use App\Http\Resources\SiteResource\ViewedProductResource;
use App\Models\Review;
use App\Repositories\Interfaces\Admin\Marketing\CampaignInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Admin\Product\ColorInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Repositories\Interfaces\Site\ReviewInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    protected $product;
    protected $review;

    public function __construct(ProductInterface $product, ReviewInterface $review)
    {
        $this->product = $product;
        $this->review = $review;
    }


    public function productDetails($slug, ColorInterface $color, AttributeInterface $attribute): \Illuminate\Http\JsonResponse
    {
        try {

            $best_seller                        = 0;
            $product                            = $this->product->productDetails($slug);
            $product->video_link                = $product->video_provider == 'mp4' ? $product->video_url : getVideoId($product->video_provider, $product->video_url);
            $language_product                   = $product->translate;
            $product->meta_short_description    = $language_product->meta_short_description;
            $product->category_title            = @$product->category->getTranslation('title',languageCheck());
            $product->category_slug             = @$product->category->slug;
            $product->brand_slug                = @$product->brand->slug;
            $product->brand_title               = @$product->brand ? $product->brand->getTranslation('title',languageCheck()) : '';
            $product->brand_image               = @$product->brand->image_130x93;
            $product->product_meta_title        = $language_product->product_meta_title;
            $product->product_meta_keywords     = $language_product->meta_keywords;
            $product->product_meta_image        = get_media(@$product->meta_image['image_1200x630'],$product->meta_image['storage'] ?? '');
            $wholesale_prices = $description_images = [];
            $product->variation_price           = detail_special_price($product);

            if ($product->description_images && count($product->description_images) > 0)
            {
                foreach ($product->description_images as $description_image) {

                    if (is_file_exists($description_image['image'],$description_image['storage']))
                    {
                        $description_images[] = get_media($description_image['image'],$description_image['storage']);
                    }
                }
            }

            $image_no                           = 0;
            $stock                              = $product->stock;
            $first_stock                        = '';

            $best_selling_product               = $this->product->bestSellingProduct($product->category_id);

            if ($best_selling_product && $best_selling_product->user_id == $product->user_id) {
                $best_seller = 1;
            }

            $product->best_seller               = $best_seller;

            if($product->images)
            {
                foreach ($product->images as $image) {
                    if ($image && (@is_file_exists($image['image_72x72'], @$image['storage']) || @is_file_exists($image['image_320x320'], @$image['storage'])))
                    {
                        $gallery_images['large'][] = getFileLink('original_image', $image);

                        $gallery_images['small'][] =  getFileLink('72x72', $image);


                        $image_no++;
                    }

                }
            }

            if ($product->has_variant) {
                foreach ($stock as $key => $item) {
                    if ($key == 0) {
                        $first_stock = $item;
                    }

                    if ($item->image && (@is_file_exists($item->image['image_72x72'], @$item->image['storage']) || @is_file_exists($item->image['image_320x320'], @$item->image['storage'])))
                    {
                        $gallery_images['large'][] =  getFileLink('original_image', @$item->image);

                        $gallery_images['small'][] =  getFileLink('72x72', @$item->image);

                        $image_no++;
                    }
                }
            } else {
                $first_stock = $product->firstStock;
                $wholesale_prices = addon_is_activated('wholesale') ? $first_stock->wholeSalePrice : [];
            }

            $gallery_images['large'][] = getFileLink('original_image', @$product->thumbnail);

            $gallery_images['small'][] = getFileLink('72x72', @$product->thumbnail);

            $product->makeHidden(['images', 'image_ids',  'thumbnail', 'thumbnail_id', 'meta_image', 'meta_image_id',
                'category_id', 'purchase_cost', 'barcode', 'stock_notification', 'total_sale', 'is_approved', 'is_featured', 'low_stock_to_notify',
                'deleted_at', 'created_at', 'updated_at']);

            $product_colors                     = $color->colorByIds($product->colors);
            $attributes                         = $attribute->attributeByIds(array_keys($product->selected_variants));

            $product->gallery                   = $gallery_images;
            $product->language_product          = $product->translate;
            $product->related_products          = ProductResource::collection($this->product->relatedProducts($product->category_id, 6, $product->id));
            $product->product_colors            = $product_colors;
            $product->product_stock             = $first_stock;
            $product->wholesale_prices          = $wholesale_prices;
            $product->attribute_values          = $attribute->attributeValueByIds($product->selected_variants_ids);
            $product->short_description         = @$language_product->short_description;
            $product->product_name              = @$language_product->product_name;
            $product->description_image         = $description_images;
            $seller                             = $product->sellerProfile;
            $product->brand                    = @$product->brand;


            $days = Carbon::now()->diffInDays(Carbon::parse($product->special_discount_end),false);
            $hours = 23 - Carbon::now()->format('H');
            $mins = 59 - Carbon::now()->format('i');
            $secs = 59 - Carbon::now()->format('s');

            $countdown = [
                'days'    => $days,
                'hours'   => $hours,
                'mins'    => $mins,
                'secs'    => $secs
            ];

            $product['countdown'] = $countdown;

            if ($seller):
                $products = $seller->products;
                $product->seller            = [
                    'id'                    => $seller->id,
                    'slug'                  => $seller->slug,
                    'logo'                  => $seller->image_197x152,
                    'banner'                => $seller->image_1920x412,
                    'rating'                => round($seller->rating,2),
                    'total_reviews'         => (int)$seller->total_reviews,
                    'shop_name'             => $seller->shop_name,
                    'total_products'        => count($products),
                    'image_82x82'           => $seller->image_82x82,
                    'image_297x203'         => $seller->image_297x203,
                    'rating_count'          => (double)$seller->rating_count,
                    'reviews_count'         => (int)$seller->reviews_count,
                    'join_date'             => Carbon::parse($seller->created_at)->format('d M Y'),
                ];
                $product->sidebar_products = ProductResource::collection($seller->products->where('id','!=', $product->id)->take(4));

            else:
                $product->sidebar_products = ProductResource::collection($this->product->adminProducts($product->id));

            endif;

            unset($product->sellerProfile);

            $request_form                       = [];
            $color_id                           = '';

            if ($product->has_variant && $first_stock->variant_ids) {
                $attribute_sets = explode('-', $first_stock->variant_ids);
                foreach ($attribute_sets as $key => $item) {
                    if ($key == 0) {
                        $color_id = $item;
                    } else {
                        $request_form[$key - 1] = $item;
                    }
                }
            }

            $product->form          = [
                'attribute_values'  => $request_form,
                'id'                => $product->id,
                'quantity'          => $product->minimum_order_quantity ? (int)$product->minimum_order_quantity : 1,
            ];

            $data                   = [
                'product'           => $product,
                'attributes'        => $attributes,
            ];

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( __('Oops...Something Went Wrong'))
            ]);
        }
    }

    public function findVariants(Request $request, AttributeInterface $attribute): \Illuminate\Http\JsonResponse
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
            $images = [];

            if ($stock) {
                $images = [
                    'image_72x72'     => @is_file_exists($stock->image['image_72x72'], $stock->image['storage']) ? @get_media($stock->image['image_72x72'], $stock->image['storage']) : static_asset('images/default/default-image-72x72.png'),
                    'image_320x320'   => @is_file_exists($stock->image['image_320x320'], $stock->image['storage']) ? @get_media($stock->image['image_320x320'], $stock->image['storage']) : static_asset('images/default/default-image-320x320.png')
                ];
            }

            $data = [
                'product_stock' => $stock && $stock->current_stock > 0 ? $stock : '',
                'msg'           => $stock && $stock->current_stock > 0 ? __('Product Available of this Variant') : __('Stock Out'),
                'images'        => $images,
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __(__('Oops...Something Went Wrong'))
            ]);
        }
    }

    protected function calculatePercentage($id, $total): array
    {

        $one_star           = 0;
        $two_star           = 0;
        $three_star         = 0;
        $four_star          = 0;
        $five_star          = 0;
        $reviews            = $this->review->reviewPercentage($id);

        $total = $total != 0 ?  $total : 1;
        foreach ($reviews as $key => $review) {
            if ($key == 1) {
                $one_star = round(($review * 100) / $total, 2);
            }
            if ($key == 2) {
                $two_star = round(($review * 100) / $total, 2);
            }
            if ($key == 3) {
                $three_star = round(($review * 100) / $total, 2);
            }
            if ($key == 4) {
                $four_star = round(($review * 100) / $total, 2);
            }
            if ($key == 5) {
                $five_star = round(($review * 100) / $total, 2);
            }
        }
        return [
            5 => $five_star,
            4 => $four_star,
            3 => $three_star,
            2 => $two_star,
            1 => $one_star,
        ];
    }

    public function storeReview(Request $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $request['user_id'] = authId();

            $review = $this->review->storeReview($request->all());
            $reviews = $this->review->get($request->product_id, $request->paginate * 10);

            $data = [
                'review'        => $review,
                'percentages'   => $this->calculatePercentage($request->product_id, $reviews->total()),
                'reviews'       => $reviews,
                'success'       => __('Review Added Successfully'),
            ];
            DB::commit();
            return response()->json($data);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => __(__('Oops...Something Went Wrong'))
            ]);
        }
    }

    public function reviews($id): \Illuminate\Http\JsonResponse
    {
        try {
            $reviews = $this->review->get($id, 10);
            $data = [
                'reviews'       => $this->review->get($id, 10),
                'percentages'   => $this->calculatePercentage($id, $reviews->total()),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function storeReply(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request['user_id'] = authId();
            $data = [
                'review'    => $this->review->storeReply($request->all()),
                'reviews'   => $this->review->get($request->product_id, $request->paginate * 10),
                'success'   => __('Replied Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function reviewLike(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id'           => authId(),
                'reviewable_id'     => $request->id,
                'reviewable_type'   => Review::class,
            ];
            $data = [
                'like'      => $this->review->storeLike($data),
                'reviews'   => $this->review->get($request->product_id, $request->paginate * 10),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function unlikeReview(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id'           => authId(),
                'reviewable_id'     => $request->id,
                'reviewable_type'   => Review::class,
            ];

            $data = [
                'unlike'    => $this->review->unLike($data),
                'reviews'   => $this->review->get($request->product_id, $request->paginate * 10),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function loadCategories(CategoryInterface $category): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'categories' => $category->shopCategory(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function loadBrands(BrandInterface $brand): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'brands' => $brand->shopBrand(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function loadColors(ColorInterface $color): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'colors' => $color->shopColors(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function campaignProducts(Request $request, CampaignInterface $campaign): \Illuminate\Http\JsonResponse
    {
        try {

            $campaign = $campaign->getBySlug($request->slug);
            $campaign_products = $this->product->productByCampaign($campaign->id);
            $data = [
                'products' => $campaign_products,
                'campaign' => $campaign ? $campaign->makeHidden(['banner', 'banner_id', 'created_at', 'updated_at']) : [],
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function campaignBrands(Request $request, BrandInterface $brand, CampaignInterface $campaign, SellerInterface $shop): \Illuminate\Http\JsonResponse
    {
        $campaign = $campaign->getBySlug($request->slug);
        try {
            if ($request->type == 'shop') {
                $data = [
                    'shops' => settingHelper('seller_system') == 1 ? new ShopPaginateResource($shop->shopByCampaign($campaign->id)) : [],
                ];
            } else {
                $data = [
                    'brands' => $brand->brandByCampaign($campaign->id),
                ];
            }

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function productByFlashSale(ProductInterface $flashSaleProduct, BrandInterface $brand, CategoryInterface $category, AttributeInterface $attribute, ColorInterface $color): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'products'          => $flashSaleProduct->productByFlashSale(),
//                'categories'        => $category->shopCategory(),
//                'brands'            => $brand->shopBrand(),
//                'attributes'        => $attribute->shopAttribute(),
//                'colors'            => $color->shopColors(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function productOrderList(OrderInterface $orderList): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'orderList' => new OrderResource($orderList->productOrderList(10,authUser())),
            ];

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function productBySearch(Request $request, ProductInterface $product): \Illuminate\Http\JsonResponse
    {

        try {
            $data = [
                'products' => $product->filterProduct($request->all())
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function productView(Request $request, ProductInterface $product)
    {
        try {
            $data = [
                'products' => $product->productView($request->all()),
                'viewProduct' => ViewedProductResource::collection($product->viewedProduct()),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function filterData(CategoryInterface $category, BrandInterface $brand, ColorInterface $color,AttributeInterface $attribute,Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'categories'        => $category->shopCategory(),
                'brands'            => new BrandPaginateResource($brand->shopBrand()),
                'attributes'        => AttributeResource::collection($attribute->shopAttribute($request->slug)),
                'price_range'       => $this->product->priceRange(),
                'colors'            => settingHelper('color') == 1 ? new ColorResource($color->shopColors()) : [],
            ];
            return response()->json($data);

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function loadAttributes(AttributeInterface $attribute,Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'attributes'   => AttributeResource::collection($attribute->shopAttribute($request->category)),
            ];
            return response()->json($data);

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function filterProducts(Request $request, ProductInterface $product, CategoryInterface $category, BrandInterface $brand, SellerProfileInterface $profile): \Illuminate\Http\JsonResponse
    {
        try {
            $page = [];
            if ($request->route == 'product.by.category' || $request->route == 'product.by.gadget') {
                $type = 'category';
                $page = $category->category($request->slug);
                $child_categories = [];

                foreach ($page->categories as $child_category) {
                    $child_categories[] = [
                        'id'    => $child_category->id,
                        'title' => $child_category->getTranslation('title',languageCheck()),
                    ];
                }

                $page['child_categories'] = $child_categories;

                if ($page->banner)
                {
                    $page->image_835x200 = @getFileLink('835x200',$page->banner);
                }
                else{
                    $page->image_835x200 = @getFileLink('835x200',settingHelper('category_default_banner')['images']);
                }
            } else if ($request->route == 'product.by.brand') {
                $type = 'brand';
                $page = $brand->brand($request->slug);
            } else if ($request->route == 'product.by.offer') {
                $type = 'offer';
            } else if ($request->route == 'product.by.selling') {
                $type = 'best_selling';
            } else if ($request->route == 'shop') {
                $type = 'shop';
            } else {
                $type = 'products';
                $page['title'] = 'All Products';
            }
            $data = [
                'type'      => $type,
                'slug'      => $request->slug,
                'page'      => $page,
                'products'  => new ProductPaginateResource($product->filterProduct($request->all())),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function searchProduct(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            if($request->key)
            {
                $data = [
                    'products' => ProductResource::collection($this->product->searchProduct($request->key))
                ];
            }
            else{
                $data = [
                    'products' => []
                ];
            }

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }
}
