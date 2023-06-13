<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface ColorInterface
{
    public function get($id);

    public function store($request);

    public function update($request);

    // public function deleteConfirm($language, $id);

    public function all();

    public function paginate($limit);

    public function shopColors();

    public function colorByIds($ids);
}

