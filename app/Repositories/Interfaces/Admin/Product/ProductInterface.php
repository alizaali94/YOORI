<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface ProductInterface
{
    public function get($id);

    public function getByLang($id, $request);

    public function all();

    public function paginate($request, $status, $limit, $product_for);

    public function store($request);

    public function update($request);

    public function statusChange($request);

    public function restore($id);

    public function productStatusChange($status,$id);

    public function productView($request);

    //for api
    public function todayDeals();

    public function bestSelling();

    public function offerEndingSoon($limit);

    public function viewedProduct();

    public function relatedProducts($id,$take,$product_id);

    public function categoryProducts($slug);

    public function productDetails($slug);

    public function dailyDeals($paginate);

    public function productByCampaign($campaign_id,$paginate=null);

    public function filterProduct($data);

    public function productByOffer();

    public function productByBestSelling($limit = null);

    public function productByGadget($slug);

    public function addToCompare($id);

    public function compareList();

    public function compareProducts();

    public function productByIds($ids);

    public function removeCompareProduct($id);

    public function featuredProducts($ids);

    public function newProducts($user_id);

    public function sellerBestSelling($user_id);

    public function sellerOfferEnding($user_id);

    public function sellerProducts($user_id);

    public function priceRange();

    public function searchProduct($key);
    //api end

    //mobileAPI
    public function getLatestProducts($number,$data);

    public function getTopProducts($limit);

    public function bestRatedProducts($limit);

    public function flashDeals($limit);

    public function brandProducts($id,$limit);

    public function categoryByProducts($id, $limit);

    public function shopProducts($user_id, $limit);

    public function search($key, $paginate);

    public function wishlistsProduct($user_id,$limit);

    public function viewedProducts($user,$paginate);

    public function adminProducts($id);
}
