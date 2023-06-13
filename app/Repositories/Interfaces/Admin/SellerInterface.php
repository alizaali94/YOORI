<?php

namespace App\Repositories\Interfaces\Admin;

interface SellerInterface
{
    public function all();

    public function paginate($request, $limit);

    public function get($id);
    public function getSeller($id);

    public function store($request);

    public function update($request);

    public function verify($id);

    public function shop();

    public function sellerProfileUpdate($request);

    public function homePageSellers();

    public function allSeller($data);

    public function shopData($slug);

    public function shopByCampaign($id,$paginate=null);

    public function sellerShopUpdate($request);

    public function followSeller($id);

    public function allSellerAPI($limit);
    public function bestShop($limit);
    public function topShop($limit);

}
