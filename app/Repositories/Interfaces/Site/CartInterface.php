<?php

namespace App\Repositories\Interfaces\Site;

interface CartInterface{

    public function all();

    public function get($id);

    public function addToCart($request,$product,$user);

    public function updateCart($request);

    public function removeFromCart($id);

    public function userCart($take);

    public function applyCoupon($data,$user);

    public function checkoutCoupon($carts,$data,$user);

    public function shippingCostFind($carts,$data);

    public function cartFind($product_id,$variant);

    public function cartList($user);

    public function appliedCoupons($request);

}
