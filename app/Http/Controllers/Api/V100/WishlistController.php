<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ShopResource;
use App\Repositories\Admin\Product\ProductRepository;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Repositories\Interfaces\Site\WishlistInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class WishlistController extends Controller
{
    use ApiReturnFormatTrait;

    public function index(Request $request,ProductRepository $productRepository,SellerProfileInterface $seller): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $data = [
                'favourite_shop'     => settingHelper('seller_system') == 1 ? ShopResource::collection($seller->shopFollowerForApi($user,get_pagination('api_paginate'))) : [],
                'favourite_products' => ProductResource::collection($productRepository->wishlistsProduct($user->id,get_pagination('api_paginate'))),
            ];
            return $this->responseWithSuccess(__('Products Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function addOrRemove($product_id,Request $request,WishlistInterface $wishlist): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $wishlist->addOrRemove($product_id,$user->id);

            return $this->responseWithSuccess(__('Success'), [], 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
