<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;
use App\Traits\ApiReturnFormatTrait;

class BrandController extends Controller
{
    use ApiReturnFormatTrait;

    public $brand;

    public function __construct(BrandInterface $brand)
    {
        $this->brand = $brand;
    }

    public function allBrand()
    {
        try {
            $data = BrandResource::collection($this->brand->allBrandsAPI(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
