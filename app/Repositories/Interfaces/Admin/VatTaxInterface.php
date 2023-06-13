<?php

namespace App\Repositories\Interfaces\Admin;

interface VatTaxInterface{

    public function store($request);

    public function get($id);

    public function all();

    public function update($request);

    public function paginate($limit);

    public function statusChange($request);
}