<?php

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\BlogCategoryRequest;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryLanguageInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    protected $blogCategory;
    protected $blogCatLang;
    protected $languages;

    public function __construct(BlogCategoryInterface $category, BlogCategoryLanguageInterface $catLang, LanguageInterface $languages)
    {
        $this->blogCategory     = $category;
        $this->blogCatLang      = $catLang;
        $this->languages        = $languages;
    }
    public function index(){

        try {
            $categories = $this->blogCategory->paginate(get_pagination('index_form_paginate'));
            return view('admin.blogs.blog-categories',compact('categories'));
        } catch (\Exception $e){
            Toastr::error( __('Something went wrong, please try again'));
            return back();
        }
    }
    public function store(BlogCategoryRequest $request){
        if (isDemoServer()):
            Toastr::info( __('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->blogCategory->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->back()->with('success', 'Data added Successfully');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        endif;

    }
    public function edit($id,  Request $request){

        try {
            $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();
            $r = $request->server('HTTP_REFERER');
            if ($category_language = $this->blogCategory->getByLang($id, $lang)):
                return view('admin.blogs.update-category', compact('category_language', 'languages', 'lang', 'r'));
            else:
                Toastr::error(__('Not Found'));
                return back();
            endif;
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function update(BlogCategoryRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->blogCategory->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function statusChane(Request $request){
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if ($this->blogCategory->statusChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        endif;
    }
}
