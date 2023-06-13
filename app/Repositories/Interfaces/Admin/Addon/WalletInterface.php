<?php

namespace App\Repositories\Interfaces\Admin\Addon;

interface WalletInterface
{
    public function get($id);

    public function all();

    public function walletApproveRequest($id);
    public function walletRejectRequest($id);

    public function store($request);

    public function paginate($limit, $for, $request);

    public function manageDeliveredOrder($order);
    public function manageCanceledOrder($order);
    public function managePlacedOrder($order, $data);

    public function adminBalanceStore($data, $source);
    public function adminBalanceRemove($data, $source);

    public function customerBalanceStore($data, $source);
    public function customerBalanceRemove($data, $source);

    public function sellerBalanceStore($data, $source);
    public function sellerBalanceRemove($data, $source);

    public function deliveryHeroCommissionStore($order);
    public function deliveryHeroCommissionRemove($order);

    public function calculateCommission($order);

    public function insertPayment($order, $request);

    public function walletHistory();

    public function userBalance();
}
