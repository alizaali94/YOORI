<?php

namespace App\Repositories\Interfaces\Admin;

interface LanguageInterface
{
    public function get($id);

    public function getByLocale($locale);

    public function store($request);

    public function update($request);

    public function deleteConfirm($language, $id);

    public function all();

    public function flags();

    public function paginate($limit);

    public function statusChange($request);

    public function directionChange($request);

    public function activeLanguages();
}

