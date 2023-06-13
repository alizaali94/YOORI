<?php

namespace App\Repositories\Interfaces\Admin;

use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;

interface OrderInterface
{
    public function all();

    public function get($id);
    public function getDetail($id);

    public function sellerProfile($id);

    public function paginate($request, $limit);

    public function adminOrder($request, $limit);

    public function sellerOrder($request, $limit);

    public function pickupHubOrder($request, $limit);

    public function assignDeliveryHero($request);

    public function deliveryStatusChange($request);

    public function paymentStatusChange($request);

    public function invoiceDownload($id);

    public function orderByCode($orderCode);

    public function orders($take);

    public function productOrderList($item,$user);

    public function deleteOrder($id);

    public function cancelOrder($order,$remarks);

    public function confirmOrder($checkout,$carts,$data,$user);

    public function deliveryEvent($event, $order_id, $delivery_hero_id, $remarks);

    public function paymentHistoryEvent($event, $order_id, $remarks);

    public function takePaymentOrder($trx_id);

    public function completeOrder($data,$user,$offline);

    public function checkCodByTrx($trx_id);

    public function checkCodByCode($code);

    public function digitalProductOrders($limit,$token);

    //quantity manage
    public function adjustQuantity($order, $remove_quantity);

    public function updateQuantity($orderDetail, $remove_quantity = false);

    public function saleUpdate($orderDetail, $remove_sale = false);

    public function allOrder($take,$user);

    public function apiSellerOrder($user,$take);

}
