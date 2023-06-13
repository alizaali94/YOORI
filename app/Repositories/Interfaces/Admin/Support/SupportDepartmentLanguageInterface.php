<?php

namespace App\Repositories\Interfaces\Admin\Support;

interface SupportDepartmentLanguageInterface
{
    public function all();

    public function get($id);

    public function store($request);

    public function paginate($limit);

    public function update($request);
}
