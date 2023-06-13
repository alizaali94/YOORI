<?php

namespace App\Repositories\Interfaces\Admin\DeliveryHero;

interface DeliveryHeroInterface
{
    public function all();

    public function paginate($request, $limit);

    public function get($id);

    public function getHero($id);

    public function store($data);

    public function update($data);

    public function ban($id);

    public function cancelRequests($request, $limit);

    public function commissionHistory($request, $limit);

    public function depositHistory($request, $limit);

    public function collectionHistory($request, $limit);

    public function collectFormDeliveryHero($request);

    public function salaryToDeliveryHero($request);

    public function getCommission($delivery_hero_id,$day);

    public function transactionHistory($delivery_hero_id,$limit);

}
