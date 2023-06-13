<?php

namespace App\Repositories\Interfaces\Admin\Slider;

interface SliderInterface{

    public function all();

    public function paginate($limit);

    public function find($id);

    public function store($request);

    public function update($request,$id);

    public function statusChange($request);

    public function frontendSliders();

    public function mobileSliders($limit);

    public function homeScreenSliders();
}
