<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\VideoShoppingResource;
use App\Http\Resources\SiteResource\VideoPaginateResource;
use App\Http\Resources\SiteResource\VideoResource;
use App\Repositories\Interfaces\Admin\Addon\VideoShoppingInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;

class VideoShoppingController extends Controller
{
    use ApiReturnFormatTrait;
    public function __construct(VideoShoppingInterface $videoShopping, LanguageInterface $languages,ProductInterface $product)
    {
        if(!addon_is_activated('video_shopping')){
            abort(404);
        }

        $this->videoShopping    = $videoShopping;
        $this->languages        = $languages;
        $this->product          = $product;
    }
    public function allVideos(): \Illuminate\Http\JsonResponse
    {

        try{
            $data = VideoResource::collection($this->videoShopping->all()->active()->SellerCheck()->paginate(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Videos Found Successfully'), $data, 200);

        } catch(\Exception $e){
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function videoShoppingDetails(VideoShoppingInterface $shopping,$slug): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'video' => $shopping->shopBySlugApi($slug),
            ];
            return $this->responseWithSuccess(__('Videos Found Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }
}
