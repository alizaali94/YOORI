<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface ProductLanguageInterface
{
    public function get($id);

    public function getByLang($id, $request);

    public function all();

    public function store($request);
}
