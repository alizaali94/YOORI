<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\MediaInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Sentinel;

class MediaController extends Controller
{
    protected $medias;

    public function __construct(MediaInterface $medias)
    {
        $this->medias       = $medias;
    }

    public function index(Request $request)
    {
        $medias     = $this->medias->paginate($request, get_pagination('media_paginate'));

        return view('seller.medias.index', compact('medias'));
    }

    public function create()
    {
        return view('seller.medias.create');
    }

    public function delete($id)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        $media  = $this->medias->get($id);
        if (blank($media) || $media->user_id != Sentinel::getUser()->id):
            $success['message'] = __('Not Found');
            $success['status']  = 'error';
            $success['title']   = __('404');
            return response()->json($success);
        endif;
        if ($this->medias->delete($id)):
            $success['message'] = __('Deleted Successfully!');
            $success['status']  = 'success';
            $success['title']   = __('Deleted');
            return response()->json($success);
        else:
            $success['message'] = __('Something went wrong, please try again');
            $success['status']  = 'error';
            $success['title']   = __('Ops..!');
            return response()->json($success);
        endif;
    }

    public function details(Request $request)
    {
        $media = $this->medias->get($request->id);
        if (blank($media) || $media->user_id != Sentinel::getUser()->id):
            Toastr::error(__('Not Found'));
            return back();
        endif;
        if (!blank($media)):
            $title = 'file_info';
            return view('admin.common.modal', compact('media','title'))->render();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        endif;
    }
}
