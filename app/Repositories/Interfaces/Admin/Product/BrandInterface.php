<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface BrandInterface
{
    public function get($id);

    public function getByLang($id, $request);

    public function all();

    public function paginate($limit);

    public function store($request);

    public function update($request);

    public function statusChange($request);

    public function shopBrand();

    public function allBrands();

    public function homePageBrands();

    public function brand($slug);

    public function brandByCampaign($id,$paginate=null);

    public function getAllBrands($user_id=null);
    public function allBrandsAPI($limit);
}
