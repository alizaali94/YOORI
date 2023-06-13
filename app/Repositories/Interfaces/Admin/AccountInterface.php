<?php
namespace App\Repositories\Interfaces\Admin;

interface AccountInterface{
    public function get($id);

    public function allWallets($limit);

    public function update($request);

    public function defaultStatusChange($request);

    public function allPaymentType($id);

    public function activeMethod($request);

    public function checkCreadentials($account);
}
