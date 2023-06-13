<?php

namespace App\Http\Controllers\Api\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\ProductUpdateRequest;
use App\Http\Requests\ApiProductRequest;
use App\Http\Resources\Api\Seller\ProductListResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ColorResource;
use App\Http\Resources\SiteResource\AttributeResource;
use App\Http\Resources\SiteResource\BrandResource;
use App\Models\ProductStock;
use App\Repositories\Admin\VatTaxRepository;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Admin\Product\ColorInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\WholesaleProductInterface;
use App\Traits\ApiReturnFormatTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class WholesaleController extends Controller
{
    use ApiReturnFormatTrait;
    protected $products;
    protected $wholesale_products;
    protected $categories;
    protected $brands;
    protected $colors;
    protected $attributes;
    protected $vat_tax;
    protected $languages;
    protected $seller;

    public function __construct(ProductInterface $products,
                                WholesaleProductInterface $wholesale_products,
                                CategoryInterface $categories,
                                BrandInterface $brands,
                                ColorInterface $colors,
                                AttributeInterface $attributes,
                                VatTaxRepository $vat_tax,
                                SellerInterface $seller,
                                LanguageInterface $languages)
    {
        $this->products             = $products;
        $this->wholesale_products   = $wholesale_products;
        $this->categories           = $categories;
        $this->brands               = $brands;
        $this->colors               = $colors;
        $this->attributes           = $attributes;
        $this->vat_tax              = $vat_tax;
        $this->languages            = $languages;
        $this->seller               = $seller;
    }

    public function wholesaleProducts(Request $request, $status = null){
        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }

        try {
            $request['sq']          = $user->id;
            $products               = $this->products->paginate($request, $status ,get_pagination('pagination'),'wholesale');
            $selected_category      = isset($request->c) ? $this->categories->get($request->c) : null;

            $data = [
                'products' => new ProductListResource($products),
                'selected_category' => $selected_category,
            ];
            return $this->responseWithSuccess(__('Product Fetched  Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }
    public function store(ApiProductRequest $request)
    {
        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }
        $request['currency']    = $request->currency;
        $request['lang']        = $request->lang;
        try{
            if($user->user_type == 'seller' && $user->sellerProfile->verified_at != null){
                $wholesale_products = $this->wholesale_products->store($request);
            }
            return $this->responseWithSuccess(__('Product Created Successfully'), $wholesale_products, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function edit($id, Request $request){
        try {
            $languages  = $this->languages->all()->orderBy('id', 'asc')->get();

            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();
            $product    = $this->products->get($id);
            if ($product->user_id == authUser($request)->id && $product_language = $this->products->getByLang($id, $lang)):
                $categories             = CategoryResource::collection($this->categories->allCategory()->where('parent_id', null)->where('status',1));
                $brands                 = BrandResource::collection($this->brands->all()->where('lang','en')->where('status',1)->get());
                $colors                 = ColorResource::collection($this->colors->all()->where('lang', 'en')->get());
                $attributes             = AttributeResource::collection($this->attributes->all()->where('lang', 'en')->get());
                $wholesalePrices        = $this->wholesale_products->wholesalePrices($id);
                $r                      = $request->r != ''? $request->r : $request->server('HTTP_REFERER');

                $data = [
                    'product_language' => $product_language,
                    'categories' => $categories,
                    'brands' => $brands,
                    'colors' => $colors,
                    'attributes' => $attributes,
                    'wholesalePrices' => $wholesalePrices,
                    'languages' => $languages,
                    'r' => $r,
                ];

                return $this->responseWithSuccess(__('Product Fetched Successfully'), $data, 200);
            else:
                return $this->responseWithError(__('Something Went Wrong'), [], null);

            endif;
        } catch (\Exception $e){
            return $this->responseWithError(__($e->getMessage()), [], null);

        }
    }

    public function update(ProductUpdateRequest $request)
    {

        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }
        $product    = $this->products->get($request->id);
        if ($product->user_id == $user->id):

//            DB::beginTransaction();
//            try{
//
//                session()->forget('attributes');
//                if ($request->variant_ids && count($request->variant_ids))
//                {
//                    ProductStock::where('product_id',$request->id)->delete();
//                    session()->put('attributes',count($request->variant_ids));
//                }
//
//                $product = $this->products->get($request->id);
//
//                $validator = Validator::make($request->all(), [
//                    'name'                      => 'required|max:190',
//                    'slug'                      => 'nullable|nullable|max:190|unique:products,slug,'.$request->id,
//                    'category'                  => 'required',
//                    'price'                     => 'numeric|required',
//                    'unit'                      => 'required',
//                    'variant_sku.*'             => 'required_if:has_variant,1|distinct|unique:product_stocks,sku',
//                    'video_url'                 => 'required_with:video_provider',
//                    'minimum_order_quantity'    => 'numeric|min:1',
//                    'low_stock_to_notify'       => 'numeric|min:0',
//                    'shipping_fee'              => 'required_if:shipping_type,flat_rate',
//                    'special_discount_period'   => 'required_with:special_discount_type',
//                    'special_discount'          => 'required_with:special_discount_type',
//
//                    'campaign_discount'         => 'required_with:campaign',
//                    'campaign_discount_type'    => 'required_with:campaign'
//                ]);
//
//                DB::commit();
//
//                if ($validator->fails()) {
//                    DB::rollBack();
//                    return back()->withInput()->withErrors($validator);
//                }
//
//                if(!$request->has_variant)
//                {
//                    $sku_validator = Validator::make($request->all(), [
//                        'sku'      => 'required_without:has_variant|unique:product_stocks,sku,'.$product->stock()->first()->id,
//                    ]);
//
//                    if ($sku_validator->fails()) {
//                        DB::rollBack();
//                        return back()->withInput()->withErrors($sku_validator);
//                    }
//                }
//
//            } catch (\Exception $e) {
//                DB::rollBack();
//                return $this->responseWithError(__($e->getMessage()), [], null);
//            }
            if ($wholesale_products = $this->wholesale_products->update($request)):
                return $this->responseWithSuccess(__('Product Updated Successfully'), $wholesale_products, 200);
            else:
                return $this->responseWithError(__('Something Went Wrong'), [], null);
            endif;
        else:
            abort(404);
        endif;
    }

}
