<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ServiceRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Service\ServiceInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    protected $service;

    public function __construct(ServiceInterface $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        try {
            $data = [
                'services' => $this->service->paginate(get_pagination('index_form_paginate'))
            ];

            return view('admin.services.index', $data);
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function create(){
        return view('admin.services.form');
    }

    public function store(ServiceRequest $request): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        try {
            $this->service->store($request);

            Toastr::success(__('Created Successfully'));
            return redirect()->route('services.index');
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }

    }

    public function edit($id, Request $request, LanguageInterface $language)
    {
        try {
            $data = [
                'edit' => $this->service->find($id),
                'services' => $this->service->paginate(get_pagination('index_form_paginate')),
                'languages' => $language->all()->orderBy('id', 'asc')->get(),
                'lang' => $request->lang ? : app()->getLocale(),
                'r'    => $request->r != ''? $request->r : $request->server('HTTP_REFERER'),
            ];

            $data['service_language'] = $this->service->getByLang($id, $data['lang']);

            return view('admin.services.form', $data);
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function update(ServiceRequest $request, $id): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        try {
            $this->service->update($request, $id);
            Toastr::success(__('Updated Successfully'));
            return redirect()->route('services.index');

        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
}
