<?php

namespace App\Repositories\Interfaces\Admin\Slider;

interface SliderLangInterface{

    public function find($id);

    public function store($request);

    public function update($request);
}
