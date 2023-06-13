<?php

namespace App\Repositories\Interfaces\Admin;

interface StaffInterface{
    public function get($id);

    public function all();

    public function paginate($request, $limit);

    public function store($request);

    public function update($request);

    public function logActivity($limit);

    public function updatePassword($request);

    public function collectFormStaff($request);

}
