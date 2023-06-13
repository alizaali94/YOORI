<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface AttributeLanguageInterface
{
    public function get($id);

    public function all();

    public function paginate($limit);

    public function store($request);

    public function update($request);

}
