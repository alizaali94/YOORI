<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\Seller\SellerUpdateRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;
use Illuminate\Http\Request;

class ShopSetupController extends Controller
{
    protected $sellers;
    protected $language;

    public function __construct(SellerInterface $sellers, LanguageInterface $language)
    {
        $this->sellers  = $sellers;
        $this->language = $language;
    }
    public function shop(){
        try {
            return view('seller.setup.shop-setup');
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function updateShopContent(Request $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->sellers->sellerShopUpdate($request)):
            Toastr::success(__('Shop Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function shopDetails()
    {
        try {
            $user = $this->sellers->get(Sentinel::getUser()->id);
            return view('seller.setup.shop-details',compact('user'));
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function shopDetailsUpdate(SellerUpdateRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->sellers->sellerProfileUpdate($request)):
            Toastr::success(__('Shop Details Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function getContent(Request $request)
    {
        try {
            $type = $request->type;
            $content_count = $request->content_count;
            $for_content = $request->for_content ?? '';

            return view('seller.setup.store-page-contents',
                compact('type','content_count','for_content'));
        } catch (\Exception $e){
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        }
    }

    public function mobileShopDetails()
    {
        try {
            return view('seller.setup.mobile-shop-setup');
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function mobileShopPageUpdate(Request $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        $request['for_mobile'] = 1;

        if ($this->sellers->sellerShopUpdate($request)):
            Toastr::success(__('Shop Details Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
}
