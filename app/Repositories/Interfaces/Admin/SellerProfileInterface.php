<?php

namespace App\Repositories\Interfaces\Admin;

interface SellerProfileInterface
{
    public function all();

    public function paginate($limit);

    public function get($id);

    public function store($request);

    public function update($request);

    public function sellerBySlug($slug);

    public function shopUpdate($request);

    public function shopFollower();

    public function shopFollowerForApi($user,$paginate);

    public function shopDetails($slug);


}
