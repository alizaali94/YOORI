<?php

namespace App\Repositories\Interfaces\Role;

interface RoleInterface{
    public function all();

    public function paginate($limit);

    public function get($id);

    public function save($role, $data);

    public function store($data);

    public function update($request);

    public function delete($id);
}
