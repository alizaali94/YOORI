<?php

namespace App\Repositories\Interfaces\Admin;

interface ApiKeyInterface{

    public function all();

    public function paginate($limit);

    public function getByLang($id, $lang);

    public function find($id);

    public function store($request);

    public function update($request,$id);
}
