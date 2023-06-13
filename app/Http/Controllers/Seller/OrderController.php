<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $order;
    protected $lang;

    public function __construct(OrderInterface $order, LanguageInterface $lang){
        $this->order = $order;
        $this->lang = $lang;
    }
    public function index(Request $request){
        try{
            $request['sl'] = Sentinel::getUser()->sellerProfile->id;
            $orders = $this->order->sellerOrder($request, get_pagination('pagination'));
            return view('seller.orders.index',compact('orders'));
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function invoiceDownload($id){
        $seller_id = $this->order->get($id)->seller_id;
        if (Sentinel::getUser()->id == $seller_id):
            if ($this->order->invoiceDownload($id)):
                return back();
            else:
                Toastr::error(__('Something went wrong, please try again'));
                return back();
            endif;
        else:
            abort(404);
        endif;
    }

    public function view($id)
    {
        $order = $this->order->get($id);
        if (Sentinel::getUser()->id == $order->seller_id):
            try {
                return view('seller.orders.order-details', compact('order'));
            } catch (\Exception $e){
                Toastr::error(__('Something went wrong, please try again'));
                return back();
            }
        else:
            abort(404);
        endif;
    }
}
