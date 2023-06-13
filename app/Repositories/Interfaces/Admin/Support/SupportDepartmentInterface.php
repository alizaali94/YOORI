<?php

namespace App\Repositories\Interfaces\Admin\Support;

interface SupportDepartmentInterface
{
    public function all();

    public function get($id);

    public function edit($id);

    public function getByLang($id,$lang);

    public function store($request);

    public function paginate($limit);

    public function update($request);
}
