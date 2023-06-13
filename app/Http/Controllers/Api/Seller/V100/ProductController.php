<?php

namespace App\Http\Controllers\Api\Seller\V100;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\ProductStoreRequest;
use App\Http\Requests\ApiProductRequest;
use App\Http\Resources\Api\Seller\ProductListResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ColorResource;
use App\Http\Resources\SiteResource\AttributeResource;
use App\Http\Resources\SiteResource\BrandResource;
use App\Http\Resources\SiteResource\ProductResource;
use App\Repositories\Interfaces\Admin\CommonInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Admin\Product\ColorInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductController extends Controller
{

    use ApiReturnFormatTrait;
    protected $products;
    protected $categories;
    protected $brands;
    protected $colors;
    protected $attributes;
    protected $languages;

    public function __construct(ProductInterface $products,
                                CategoryInterface $categories,
                                BrandInterface $brands,
                                ColorInterface $colors,
                                AttributeInterface $attributes,
                                LanguageInterface $languages)
    {
        $this->products         = $products;
        $this->categories       = $categories;
        $this->brands           = $brands;
        $this->colors           = $colors;
        $this->attributes       = $attributes;
        $this->languages        = $languages;
    }

    public function index(Request $request){
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
            $products       = $this->products->paginate($request, $request->status ,get_pagination('api_paginate'),'');
            if ($products->isEmpty()):
                return response()->json([
                    'success'   => false,
                    'message'   => 'Product Not Found',
                ],404);
            endif;
            $products = ProductResource::collection($products);
            return response()->json([
                'success'   => true,
                'message'   => 'Product Fetched Successfully',
                'data'   => $products,
            ],200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
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

        try{
            if($user->user_type == 'seller' && $user->sellerProfile->verified_at != null){
                $product = $this->products->store($request);
            }
            return $this->responseWithSuccess(__('Product Created Successfully'), $product, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function productCreateFormItems(Request $request){

        try{
            $categories     = $this->categories->allCategory()->where('parent_id', null)->where('status',1);
            $brands         = $this->brands->all()->where('lang','en')->where('status',1)->get();
            $colors         = $this->colors->all()->where('lang', 'en')->get();
            $attributes     = $this->attributes->all()->where('lang', 'en')->get();
            $r              = $request->r != ''? $request->r : $request->server('HTTP_REFERER');

            $data = [
                'categories'    => CategoryResource::collection($categories),
                'brands'        => BrandResource::collection($brands),
                'colors'        => ColorResource::collection($colors),
                'attributes'    => AttributeResource::collection($attributes),
                'r'             => $r,
            ];
            return $this->responseWithSuccess(__('Product Create Form Items Fetched Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function digitalProducts(Request $request, $status = null){

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
            $request['sq']  = $user->id;
            $products       = $this->products->paginate($request, $status ,get_pagination('pagination'),'digital');
            $selected_category = null;
            if (isset($request->c)):
                $selected_category = $this->categories->get($request->c);
            endif;

            $data = [
                'products'=> new ProductListResource($products),
                'selected_category'=> $selected_category,
                'status'=> $status,
            ];
            return $this->responseWithSuccess(__('Product Fetched Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function catalogProducts(Request $request, $status = null){

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
            $request['sq']  = $user->id;
            $products       = $this->products->paginate($request, $status ,\Config::get('yrsetting.paginate'),'catalog');
            $selected_category = null;
            if (isset($request->c)):
                $selected_category = $this->categories->get($request->c);
            endif;

            $data = [
                'products'=> new ProductListResource($products),
                'selected_category'=> $selected_category,
                'status'=> $status,
            ];
            return $this->responseWithSuccess(__('Product Fetched Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function classifiedProducts(Request $request, $status = null){

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
            $request['sq']  = $user->id;
            $products       = $this->products->paginate($request, $status ,\Config::get('yrsetting.paginate'),'classified');
            $selected_category = null;
            if (isset($request->c)):
                $selected_category = $this->categories->get($request->c);
            endif;

            $data = [
                'products'=> new ProductListResource($products),
                'selected_category'=> $selected_category,
                'status'=> $status,
            ];
            return $this->responseWithSuccess(__('Product Fetched  Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function createDigitalProduct(Request $request){

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

        $categories     = $this->categories->allCategory()->where('parent_id', null)->where('status',1);
        $brands         = $this->brands->all()->where('lang','en')->where('status',1)->get();
        $colors         = $this->colors->all()->where('lang', 'en')->get();
        $attributes     = $this->attributes->all()->where('lang', 'en')->get();
        $is_digital     = 1;
        $r              = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
        return view('seller.products.form',compact('categories','brands','colors','attributes','is_digital','r'));
    }

    public function delete(Request $request,CommonInterface $common)
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
        try {
            $data = $common->sellerProductDelete($request);
            return response()->json([
                'success'   => true,
                'message'   => 'Product Deleted Successfully',
            ],200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }
}
