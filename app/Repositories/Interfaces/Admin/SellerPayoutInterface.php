<?php

namespace App\Repositories\Interfaces\Admin;

interface SellerPayoutInterface
{
    public function all();

    public function paginate($limit,$status,$for);

    public function get($id);

    public function statusChange($id, $status);

    public function sendPayoutRequest($request);

    public function sendPayoutReject($id);

    public function payoutRequestProcessed($id);

    public function allPaymentType();

//    public function allPayoutProcessed($limit);

}
