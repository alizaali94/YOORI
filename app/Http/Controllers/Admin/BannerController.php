<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerRequest;
use App\Repositories\Interfaces\Admin\Slider\BannerInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BannerController extends Controller
{
    protected $banner;

    public function __construct(BannerInterface $banner)
    {
        $this->banner = $banner;
    }

    public function create(){
        return view('admin.banners.form');
    }

    public function store(BannerRequest $request): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        DB::beginTransaction();
        try {
            $this->banner->store($request->all());
            DB::commit();
            Toastr::success(__('Created Successfully'));

            return redirect()->route('sliders.index');

        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }

    public function edit($id, Request $request)
    {
        try {
            $data = [
                'edit' => $this->banner->find($id),
                'r'    => $request->r != ''? $request->r : $request->server('HTTP_REFERER'),
            ];

            return view('admin.banners.form', $data);
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function update(BannerRequest $request, $id): \Illuminate\Http\RedirectResponse
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        DB::beginTransaction();
        try {
            $this->banner->update($request->all(), $id);
            DB::commit();
            Toastr::success(__('Updated Successfully'));

            return redirect()->route('sliders.index');

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
        if ($this->banner->statusChange($request['data'])):
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
