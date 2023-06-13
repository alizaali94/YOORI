<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Models\VatTax;
use App\Repositories\Interfaces\Admin\SettingInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Http\Requests\Admin\VatTaxRequest;
use App\Repositories\Interfaces\Admin\VatTaxInterface;


class VatTaxController extends Controller
{
    private $vat_tax;
    private $setting;

    public function __construct(VatTaxInterface $vat_tax, SettingInterface $setting){

        $this->vat_tax = $vat_tax;
        $this->setting = $setting;
    }
    public function index(){
        $vat_tax     = $this->vat_tax->paginate(get_pagination('pagination'));
        return view('admin.system-setup.vat-tax',compact('vat_tax'));
    }
    public function store(VatTaxRequest $request){
        if($this->vat_tax->store($request)):
            Toastr::success(__('Tax Added Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }
    public function update(VatTaxRequest $request){

        if($this->vat_tax->update($request)):
            Toastr::success(__('Tax Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error('Something went wrong, please try again.');
            return redirect()->back();
        endif;
    }
    public function statusChange(Request $request)
    {
        if (vat_tax($request['data']['id'])):
            $response['message'] = __('Unable to update because this type is already used');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        endif;

        if ($this->vat_tax->statusChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
        endif;
        return response()->json($response);
    }

    public function configuration(Request $request)
    {
        if ($this->setting->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }
}
