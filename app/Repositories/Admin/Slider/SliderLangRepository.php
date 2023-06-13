<?php

namespace App\Repositories\Admin\Slider;

use App\Models\SliderLanguage;
use App\Repositories\Interfaces\Admin\Slider\SliderLangInterface;

class SliderLangRepository implements SliderLangInterface {

    public function find($id)
    {
        return SliderLanguage::find($id);
    }

    public function store($request)
    {
        return SliderLanguage::create($request);
    }

    public function update($request)
    {
        $slider = SliderLanguage::find($request['translate_id']);
        $slider->update($request);
        return $slider;
    }
}
