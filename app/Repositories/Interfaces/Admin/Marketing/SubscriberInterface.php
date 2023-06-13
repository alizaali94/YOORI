<?php

namespace App\Repositories\Interfaces\Admin\Marketing;

interface SubscriberInterface
{
    public function all();

    public function paginate($request, $limit);

    public function get($id);

    public function store($request);

}
