<?php

namespace App\Repositories\Interfaces\Admin\Blog;

interface BlogLanguageInterface
{
    public function get($id);

    public function all();

    public function paginate($limit);

    public function store($request);

    public function update($request);

}
