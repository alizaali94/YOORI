<?php

namespace App\Repositories\Interfaces\Admin\Payment;

interface PaymentGatewayInterface {

    //public function timezones();

    public function update($request);

    public function statusChange($request);

}
