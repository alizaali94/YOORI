<?php

namespace App\Repositories\Interfaces\Admin\Marketing;

interface CouponInterface
{
    public function all();

    public function paginate($request, $limit);

    public function get($id);

    public function getByLang($id, $lang);

    public function store($request);

    public function update($request);

    public function couponPage();

    public function sellerCoupons($id);

    public function deleteCoupon($request);
}
