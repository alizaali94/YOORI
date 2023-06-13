<?php

namespace App\Repositories\Interfaces\Admin\Service;

interface ServiceInterface{

    public function all();

    public function paginate($limit);

    public function find($id);

    public function store($request);

    public function update($request,$id);

    public function getByLang($id,$lang);

    public function frontendService();
}
