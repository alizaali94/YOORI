<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\CategoryResource;
use App\Http\Resources\Api\CategoryWithoutChildResource;
use App\Http\Resources\FeatureCategoryWithChild;
use App\Models\Category;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Traits\ApiReturnFormatTrait;

class CategoryController extends Controller
{
    use ApiReturnFormatTrait;

    public $category;

    public function __construct(CategoryInterface $category)
    {
        $this->category = $category;
    }

    public function allCategory()
    {
        try {
            $featured = [
                'title'               =>'Featured Category',
                'icon'                =>'mdi mdi-crowd',
                'banner'              => settingHelper('featured_category_banner') ? getFileLink('240x100',settingHelper('featured_category_banner')['images']) : 'images/default/240x100_no_bg.png',
                'featured_sub_categories' => CategoryWithoutChildResource::collection(Category::where('is_featured',1)->where('status',1)->paginate(get_pagination('api_paginate'))),
            ];
            $data = [
                'featured_category' =>$featured,
                'categories' => CategoryResource::collection( $this->category->mobileCategory(get_pagination('api_paginate')))
            ];
            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function featureCategory()
    {
        try {
            $data = [
                'featured_categories' => CategoryWithoutChildResource::collection(Category::where('is_featured',1)->where('status',1)->paginate(get_pagination('api_paginate'))),
            ];
            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
