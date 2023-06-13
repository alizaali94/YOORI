<?php
namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\AttributeRequest;
use App\Http\Requests\Admin\Product\AttributeValuesRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    protected $attribute;
    protected $languages;
    protected $categories;

    public function __construct(AttributeInterface $attribute, LanguageInterface $languages, CategoryInterface $categories)
    {
        $this->attribute    = $attribute;
        $this->languages    = $languages;
        $this->categories   = $categories;
    }

    public function index()
    {
        $attributes = $this->attribute->paginate(get_pagination('index_form_paginate'));
        $categories                 = $this->categories->allCategory()->where('parent_id', null)->where('status',1);
        return view('admin.products.attributes.index', compact('attributes','categories'));
    }

    public function store(AttributeRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->attribute->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('attributes');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function edit($id, Request $request)
    {
        try {
            $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
            $categories                 = $this->categories->allCategory()->where('parent_id', null)->where('status',1);
            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();
            $r          = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
            if ($attribute_language  = $this->attribute->getByLang($id, $lang)) :
                return view('admin.products.attributes.update', compact('attribute_language','categories', 'languages', 'lang', 'r'));
            else:
                Toastr::error(__('Not found'));
                return back()->withInput();
            endif;
        } catch (\Exception $e){
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }

    public function update(AttributeRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->attribute->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect($request->r);
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function attributeValues($id)
    {
        if ($attribute = $this->attribute->get($id) and $attributeValues = $this->attribute->getAttributeValues($id,get_pagination('index_form_paginate'))):
            return view('admin.products.attributes.attributes-values', compact('attribute', 'attributeValues'));
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function attributeValuesStore(AttributeValuesRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->attribute->AttributeValuesStore($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->back();
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function attributeValuesEdit($id, Request $request)
    {
        if ($data = $this->attribute->AttributeValuesEdit($id)):
            $r = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
            return view('admin.products.attributes.attribute-values-update', compact('data', 'r'));
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function attributeValuesUpdate(AttributeValuesRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        $this->attribute->AttributeValuesUpdate($request);
        Toastr::success(__('Updated Successfully'));
        return redirect($request->r);
    }
    public function allValues(){
        if ($attributeValues = $this->attribute->allAttributeValuesPaginate(get_pagination('index_form_paginate')) and $attributes = $this->attribute->all()->where('lang', 'en')->get()):
            return view('admin.products.attributes.all-attribute-values', compact('attributeValues', 'attributes'));
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
}
