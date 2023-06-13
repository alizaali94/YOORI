<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CampaignPaginateResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ShopResource;
use App\Repositories\Interfaces\Admin\Marketing\CampaignInterface;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    use ApiReturnFormatTrait;

    public $campaign;
    public $product;
    public $brand;
    public $shop;

    public function __construct(CampaignInterface $campaign, ProductInterface $product, BrandInterface $brand, SellerInterface $shop)
    {
        $this->campaign = $campaign;
        $this->product  = $product;
        $this->brand    = $brand;
        $this->shop     = $shop;
    }

    public function campaigns()
    {
        try {
            $data = CampaignPaginateResource::collection($this->campaign->campaigns(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Campaigns Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function campaignDetails($id): \Illuminate\Http\JsonResponse
    {
        $campaign = $this->campaign->get($id);
        if (!blank($campaign)):
            $data['campaign'] = [
                'id'                    => $campaign->id,
                'slug'                  => $campaign->slug,
                'title'                 => $campaign->title,
                'short_description'     => nullCheck($campaign->short_description),
                'start_date'            => nullCheck($campaign->start_date),
                'end_date'              => nullCheck($campaign->end_date),
                'banner'                => $campaign->image_1920x412,
            ];
            $data['brands']   = BrandResource::collection($this->brand->brandByCampaign($campaign->id,get_pagination('api_paginate')));
            $data['shops']    = ShopResource::collection(settingHelper('seller_system') == 1 ? $this->shop->shopByCampaign($campaign->id) : []);
            $data['products'] = ProductResource::collection($this->product->productByCampaign($campaign->id,get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Campaigns Details Retrieved'), $data, 200);
        else:
            return $this->responseWithError(__('Campaign not found'), [], null);
        endif;
    }

    public function campaignProducts(Request $request, CampaignInterface $campaign): \Illuminate\Http\JsonResponse
    {
        try {

            $campaign = $this->campaign->get($request->id);
            $campaign_products = ProductResource::collection($this->product->productByCampaign($campaign->id,get_pagination('api_paginate')));
            $data = [
                'products' => $campaign_products,
            ];
            return $this->responseWithSuccess(__('Campaigns Products Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Campaign not found'), [], null);
        }
    }

    public function campaignData(Request $request, BrandInterface $brand, CampaignInterface $campaign, SellerInterface $shop): \Illuminate\Http\JsonResponse
    {
        $campaign = $this->campaign->get($request->id);
        try {
            if ($request->type == 'shop') {
                $data = [
                    'shops' => settingHelper('seller_system') == 1 ? ShopResource::collection($shop->shopByCampaign($campaign->id,get_pagination('api_paginate'))) : [],
                ];
            } else {
                $data = [
                    'brands' => BrandResource::collection($brand->brandByCampaign($campaign->id,get_pagination('api_paginate'))),
                ];
            }

            return $this->responseWithSuccess(__('Campaigns Data Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Campaign not found'), [], null);
        }
    }
}
