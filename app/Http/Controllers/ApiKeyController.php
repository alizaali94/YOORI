<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\Admin\ApiKeyInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiKeyController extends Controller
{
    protected $apiKey;

    public function __construct(ApiKeyInterface $apiKey)
    {
        $this->apiKey = $apiKey;
    }

    public function index()
    {
        try {
            $data       = [
                'apis'  => $this->apiKey->all()->paginate(get_pagination('index_form_paginate'))
            ];

            return view('admin.mobile-apps.api_keys.index',$data);

        } catch (\Exception $e) {
            return back()->with(['error' => __('Oops.....Something Went Wrong')]);
        }

    }

    public function create(Request $request)
    {
        $data   = [
            'r' => $request->r != ''? $request->r : $request->server('HTTP_REFERER')
        ];
        return view('admin.mobile-apps.api_keys.form',$data);
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        $request->validate([
            'key' => 'required|unique:api_key_languages,title',
            'title' => 'required|unique:api_keys,key',
        ]);

        DB::beginTransaction();
        try {
            $this->apiKey->store($request->all());
            DB::commit();
            Toastr::success(__('API key Created Successfully'));
            return redirect()->route('apis.settings');

        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }

    public function edit($id,LanguageInterface $language,Request $request)
    {
        try {
            $data = [
                'languages' => $language->all()->orderBy('id', 'asc')->get(),
                'lang'      => $request->lang != '' ? $request->lang : \App::getLocale(),
                'r'         => $request->r != ''? $request->r : $request->server('HTTP_REFERER'),
                'edit'   => $this->apiKey->find($id),
            ];
            $data['api_key_language'] = $this->apiKey->getByLang($id, $data['lang']);

            return view('admin.mobile-apps.api_keys.form',$data);

        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function update(Request $request, $id): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        $request->validate([
            'title' => 'required|unique:api_keys,key,'.$id,
        ]);

        DB::beginTransaction();
        try {
            $this->apiKey->update($request->all(),$id);
            DB::commit();
            Toastr::success(__('API key Updated Successfully'));
            return redirect()->route('apis.settings');

        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }
}
