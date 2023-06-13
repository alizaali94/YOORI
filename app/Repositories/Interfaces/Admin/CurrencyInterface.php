<?php

namespace App\Repositories\Interfaces\Admin;

interface CurrencyInterface
{
    public function all();

    public function get($id);

    public function store($request);

    public function paginate($limit);

    public function update($request);

    public function statusChange($request);

    public function activeCurrency();

    public function currencyByCode($code);
}
