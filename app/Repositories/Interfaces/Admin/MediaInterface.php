<?php

namespace App\Repositories\Interfaces\Admin;

interface MediaInterface
{
    public function get($id);

    public function all();

    public function paginate($request, $limit);

    public function store($request, $type);

    public function delete($request);
}
