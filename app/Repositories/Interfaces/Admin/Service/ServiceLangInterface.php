<?php

namespace App\Repositories\Interfaces\Admin\Service;

interface ServiceLangInterface{

    public function find($id);

    public function store($request);

    public function update($request);
}
