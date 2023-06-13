<?php

namespace App\Repositories\Interfaces;

interface UserInterface{
    public function all();

    public function allTypeUser();

    public function paginate($request, $limit);

    public function get($id);

    public function store($data);

    public function update($data);

    public function ban($id);

    public function emailVerify($user_id);
}
