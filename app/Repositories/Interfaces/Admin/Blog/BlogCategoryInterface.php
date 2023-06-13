<?php

namespace App\Repositories\Interfaces\Admin\Blog;

interface BlogCategoryInterface
{
    public function get($id);

    public function getByLang($id, $request);

    public function store($request);

    public function all();

    public function paginate($limit);

    public function update($request);

    public function statusChange($request);
}
