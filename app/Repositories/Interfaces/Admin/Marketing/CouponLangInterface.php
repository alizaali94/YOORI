<?php

namespace App\Repositories\Interfaces\Admin\Marketing;

interface CouponLangInterface
{
    public function get($id);

    public function store($request);

    public function update($request);
}
