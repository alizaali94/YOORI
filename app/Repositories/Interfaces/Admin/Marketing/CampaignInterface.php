<?php

namespace App\Repositories\Interfaces\Admin\Marketing;

interface CampaignInterface
{
    public function all();

    public function paginate($limit);

    public function get($id);

    public function getBySlug($slug);

    public function getByLang($id, $lang);

    public function store($request);

    public function update($request);

    public function statusChange($request);

    public function featuredChange($request);

    public function flashSaleChange($request);

    public function campaignProductStore($request);

    public function campaignProductRequests($id, $limit);

    public function allCampaignProductRequests($limit);

    //for sellers
    public function storeRequest($request);

    public function campaignByIds($ids);

    public function campaigns($limit);

}
