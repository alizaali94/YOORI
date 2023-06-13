<?php

namespace App\Repositories\Admin\Service;

use App\Models\ServiceLanguage;
use App\Repositories\Interfaces\Admin\Service\ServiceLangInterface;

class ServiceLangRepository implements ServiceLangInterface {

    public function find($id)
    {
        return ServiceLanguage::find($id);
    }

    public function store($request)
    {
        $request = $request->all();
        return ServiceLanguage::create($request);
    }

    public function update($request)
    {
        $request = $request->all();
        $slider = ServiceLanguage::find($request['translate_id']);
        $slider->update($request);
        return $slider;
    }
}
