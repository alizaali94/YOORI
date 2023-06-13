<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\CouponStoreRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Marketing\CouponInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Sentinel;

class CouponController extends Controller
{
    protected $coupons;
    protected $product;
    protected $languages;

    public function __construct(CouponInterface $coupons, ProductInterface $product, LanguageInterface $languages)
    {
        if(settingHelper('coupon_system') != 1):
            abort(403);
        endif;
        $this->coupons = $coupons;
        $this->product = $product;
        $this->languages    = $languages;
    }

    public function index(Request $request){
        $coupons = $this->coupons->paginate($request ,get_pagination('index_form_paginate'));
        return view('seller.marketing.coupons', compact('coupons'));
    }

    public function store(CouponStoreRequest $request){
        if ($this->coupons->store($request)):
            Toastr::success(__('Coupon Created Successfully'));
            return redirect()->route('seller.coupons');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function edit($id, Request $request){
        try {
            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();
            $coupon_language  = $this->coupons->getByLang($id, $lang);

            if ($coupon_language->coupon->user_id == Sentinel::getUser()->id):
                $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
                $r          = $request->r != ''? $request->r : $request->server('HTTP_REFERER');

                $startDate      = Carbon::parse($coupon_language->coupon->start_date)->format('m-d-Y h:m A');
                $endDate        = Carbon::parse($coupon_language->coupon->end_date)->format('m-d-Y h:m A');

                $date           = $startDate .' - '. $endDate;
                $products = $this->product->all()
                    ->find($coupon_language->coupon->product_id);
                return view('seller.marketing.coupon-update', compact('coupon_language','date', 'products', 'r','languages','lang'));
            else:
                Toastr::error(__('Not found'));
                return back()->withInput();
            endif;
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        }
    }

    public function update(CouponStoreRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->coupons->update($request)):
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
        if ($this->coupons->statusChange($request['data'])):
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

    public function coupons($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'coupons' => settingHelper('coupon_system') == 1 ? $this->coupons->sellerCoupons($id) : []
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Ops..!')
            ]);
        }
    }
}
