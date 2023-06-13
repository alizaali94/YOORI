<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SliderRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Slider\BannerInterface;
use App\Repositories\Interfaces\Admin\Slider\SliderInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SliderController extends Controller
{
    protected $slider;

    public function __construct(SliderInterface $slider)
    {
        $this->slider = $slider;
    }

    public function index(BannerInterface $banner)
    {
        try {
            $data = [
                'sliders' => $this->slider->paginate(get_pagination('index_form_paginate')),
                'banners' => $banner->paginate(get_pagination('index_form_paginate'))
            ];

            return view('admin.sliders.index', $data);
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function create(){
        return view('admin.sliders.form');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        DB::beginTransaction();
        try {
            $this->slider->store($request->all());
            DB::commit();
            Toastr::success(__('Created Successfully'));

            if ($request->for_mobile)
            {
                return redirect()->route('mobile.slider.settings');
            }
            else{
                return redirect()->route('sliders.index');
            }

        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }

    public function edit($id, Request $request, LanguageInterface $language)
    {
        try {
            $data = [
                'edit' => $this->slider->find($id),
                'sliders' => $this->slider->paginate(get_pagination('index_form_paginate')),
                'r'    => $request->r != ''? $request->r : $request->server('HTTP_REFERER'),
            ];

            return view('admin.sliders.form', $data);
        } catch (\Exception $e) {
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
        DB::beginTransaction();
        try {
            $this->slider->update($request->all(), $id);
            DB::commit();
            Toastr::success(__('Updated Successfully'));
            if ($request->for_mobile)
            {
                return redirect()->route('mobile.slider.settings');
            }
            else{
                return redirect()->route('sliders.index');
            }


        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function statusChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if ($this->slider->statusChange($request['data'])):
            $response['message']    = __('Updated Successfully');
            $response['title']      = __('Success');
            $response['status']     = 'success';
            return response()->json($response);
        else:
            $response['message']    = __('Something went wrong, please try again');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
    }
}
