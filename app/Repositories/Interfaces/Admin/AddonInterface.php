<?php

namespace App\Repositories\Interfaces\Admin;

interface AddonInterface{

    public function get($id);

    public function all();

    public function install($request);

    public function paginate($limit);

    public function statusChange($request);

    public function activePlugin();

    public function activeAddons();
}
