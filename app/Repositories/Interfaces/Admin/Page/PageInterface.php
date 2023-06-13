<?php

namespace App\Repositories\Interfaces\Admin\Page;

interface PageInterface
{
    public function all();

    public function paginate($limit);

    public function get($id);

    public function getByLang($id, $lang);

    public function store($request);

    public function update($request);

    public function statusChange($request);

    public function updateHomeContent($request);

    public function updateMobileHomeContent($request);

    public function contactPage();

    public function pageBySlug($slug);


}
