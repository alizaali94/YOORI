<?php

namespace App\Repositories\Admin\Service;

use App\Models\Service;
use App\Models\ServiceLanguage;
use App\Repositories\Interfaces\Admin\Service\ServiceInterface;
use App\Traits\ImageTrait;

class ServiceRepository implements ServiceInterface
{

    use ImageTrait;

    protected $serviceLangRepository;

    public function __construct(ServiceLangRepository $serviceLangRepository)
    {
        $this->serviceLangRepository = $serviceLangRepository;
    }

    public function all()
    {
        return Service::with('serviceLanguages')->latest();
    }

    public function paginate($limit): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return Service::with('serviceLanguages')->latest()->paginate($limit);
    }

    public function find($id)
    {
        return Service::find($id);
    }

    public function getByLang($id, $lang)
    {
        if ($lang == null) {
            $slideByLang = ServiceLanguage::where('lang', 'en')->where('service_id', $id)->first();
        } else {
            $slideByLang = ServiceLanguage::where('lang', $lang)->where('service_id', $id)->first();
            if (blank($slideByLang)) {
                $slideByLang = ServiceLanguage::where('lang', 'en')->where('service_id', $id)->first();
                $slideByLang['translation_null'] = 'not-found';
            }
        }

        return $slideByLang;
    }

    public function store($request)
    {
        $service = new Service();

        if ($request->image != ''):
            $service->image        = $this->saveImage($request->image,'service_image');
//            $service->image_id     = $request->image;
        else:
            $service->image        = [];
        endif;
        $service->position = $request->position;
        $service->save();
        $request['lang'] = 'en';
        $request['service_id'] = $service->id;
        $this->serviceLangRepository->store($request);

    }


    public function update($request, $id)
    {
        $service = Service::find($id);
        if ($request->image != ''):
            $service->image        = $this->saveImage($request->image,'service_image');
//            $service->image       = serialize($response['images']);

//            $service->image_id     = $request->image;
        else:
            $service->image        = [];
        endif;
        $service->position = $request->position;
        $service->save();

        if ($request['translate_id']) {
            $request['lang'] = $request['lang'] ?: 'en';
            $this->serviceLangRepository->update($request);
        } else {
            $request['lang'] = $request['lang'] ?: 'en';
            $request['service_id'] = $service->id;
            $this->serviceLangRepository->store($request);
        }
        return $service;
    }
    //for api
    public function frontendService()
    {
        return Service::with('currentLanguage')->orderBy('position')->take(4)->get();
    }
}
