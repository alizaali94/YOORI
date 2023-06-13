<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminResource\PosOfflineMethodResource;
use App\Http\Resources\SiteResource\OrderResource;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Repositories\Interfaces\Site\WishlistInterface;
use App\Traits\PaymentTrait;
use App\Traits\SendMailTrait;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Sentinel;


class OrderController extends Controller
{
    protected $cart;
    protected $order;

    use PaymentTrait,SendMailTrait;

    public function __construct(CartInterface $cart, OrderInterface $order)
    {
        $this->cart = $cart;
        $this->order = $order;
    }

    public function shipping()
    {
        $cart_items = $this->cart->all()->where('user_id', authId());
        if ($cart_items && count($cart_items) > 0) :
            return $cart_items;
        endif;
        Toastr::error(__('Your cart is empty'));
        return back();
    }

    public function profileOrder(OrderInterface $order,CurrencyInterface $currency): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'orders' => new OrderResource($order->orders(5)),
                'xof'    => $currency->currencyByCode('XOF'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function orderList(OrderInterface $order): \Illuminate\Http\JsonResponse
    {
        try {

            $data = [
                'orders' => $order->orders(10),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function digitalProductOrders(Request $request, OrderInterface $order): \Illuminate\Http\JsonResponse
    {
        try {
            cache()->forget('order_urls');
            $urls = cache('order_urls');
            $data = [];

            if (!$urls) {
                $order_details = $order->digitalProductOrders(10,'');

                foreach ($order_details as $key => $order_detail) {
                    $url = \Illuminate\Support\Facades\URL::temporarySignedRoute('file.download', now()->addMinutes(60), [
                        'u' => authId(),
                        'od' => $order_detail->id,
                        'product_file' => $order_detail->product->product_file_id,
                        'response' => 'yes',
                        'token' => $request->token,
                    ]);
                    $data[$key] = [
                        'id' => $order_detail->id,
                        'url' => $url,
                        'product_name' => $order_detail->product->product_name,
                        'date' => Carbon::parse($order_detail->created_at)->format('d M Y'),
                        'total' => ($order_detail->price + $order_detail->tax + $order_detail->shipping_cost['total_cost']) - ($order_detail->discount + $order_detail->coupon_discount['discount']),
                    ];
                }
                cache(['order_urls' => $data], now()->addMinutes(60));
                $urls = cache('order_urls');
            }

            $next_page_url = $request->page * 10 > $order_details->total() ? false : true;
            $data = [
                'download_urls' => $urls,
                'next_page_url' => $next_page_url,
            ];
            return response()->json($data);

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function removeOrder(OrderInterface $orderList, $id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'deleteOrder' => $orderList->deleteOrder($id),
                'success' => __('Order Removed Successfully'),
            ];

            return response()->json($data);
        } catch (\Exception $e) {

            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function cancelOrder(Request $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $order_find = $this->order->get($request->id);
            if ($order_find && $order_find->user_id == authId() && $order_find->delivery_status == 'pending'):
                $data = [
                    'orders' => $this->order->cancelOrder($order_find, $request->remarks),
                    'success' => __('Order canceled Successfully'),
                    'user' => $order_find->user
                ];
                DB::commit();
                return response()->json($data);
            else:
                return response()->json([
                    'error' => __('You can not cancel the order anymore')
                ]);
            endif;
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function getInvoice($orderCode): \Illuminate\Http\JsonResponse
    {
        try {
            $order = $this->order->orderByCode($orderCode);

            if ($order):
                foreach ($order->orderDetails as $order_detail ) {
                    $order_detail->product['product_name'] = $order_detail->product->getTranslation('title', languageCheck());
                    $order_detail['product_name'] = $order_detail->product['product_name'];
                    unset($order_detail->product);
                }

                try {
                    $data = [
                        'order' => $order,
                    ];


                    if (authUser() && $data['order']->user_id != authId())
                    {
                        return response()->json([
                            'error' => __('Not found')
                        ]);
                    }
                    if (!authUser() && $data['order']->user_id != getWalkInCustomer()->id)
                    {
                        return response()->json([
                            'error' => __('Not found')
                        ]);
                    }
                    return response()->json($data);
                } catch (\Exception $e) {
                    return response()->json([
                        'error' => __('Oops.....Something Went Wrong')
                    ]);
                }
            else:
                return response()->json([
                    'error' => __('Not found')
                ]);
            endif;
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function confirmOrder(Request $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $carts = $this->cart->all();
            $checkout = $this->cart->checkoutCoupon($carts, ['coupon'],authUser());
            $order = $this->order->confirmOrder($checkout, $carts, $request->all(),authUser());


            if (is_array($order)) {
                $data = [
                    'success' => __('Order done')
                ];
            } else {
                $data = [
                    'error' => $order
                ];
            }
            DB::commit();
            return response()->json($data);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function userLastOrder(CartInterface $cart, OrderInterface $order, CurrencyInterface $currency, OfflineMethodInterface $offlineMethod, Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            if (!empty($request->code)) {
                $orders = $order->orderByCodes($request->code);
                $check_code = $order->checkCodByCode($request->code);
            } else {
                $carts = $cart->all();
                $trx_id = count($carts) > 0 ?  $carts->first()->trx_id : '';
                $orders = $order->takePaymentOrder($trx_id);
                $check_code = $order->checkCodByTrx($trx_id);
            }

            if (count($orders) > 0 && ($orders->first()->user_id == authId() || $orders->first()->user_id == getWalkInCustomer()->id))
            {
                $data = [
                    'orders'            => $orders,
                    'indian_currency'   => $currency->currencyByCode('INR'),
                    'offline_methods'   => addon_is_activated('offline_payment') ? PosOfflineMethodResource::collection($offlineMethod->activeMethods()) : [],
                    'jazz_data'         => $this->jazzCashPayment(),
                    'check_cod'         => $check_code,
                    'xof'               => $currency->currencyByCode('XOF'),
                    'jazz_url'          => config('jazz_cash.TRANSACTION_POST_URL'),
                    'mid_trans_token'   =>  $this->generateMidTransToken($orders),
                ];
            }
            else{
                $data = [
                    'error' => __('Permission Declined')
                ];
            }

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function completeOrder(OrderInterface $order, OfflineMethodInterface $offlineMethod, Request $request)
    {
        DB::beginTransaction();
        try {

            $request_data = $request->all();

            if ($request->payment_type == 'amarpay')
            {
                $request_data['guest'] = $request->opt_a;
                $request_data['trx_id'] = $request->opt_b;
                $request_data['code'] = $request->opt_c;
                $request_data['token'] = $request->opt_d;
            }

            $order = $order->completeOrder($request_data, authUser(), $offlineMethod);

            if (is_string($order)) {
                $data = [
                    'error' => $order
                ];
                DB::commit();

                if (request()->ajax()) {
                    return response()->json($data);
                } else {
                    return redirect('payment')->with(['error' => $order]);
                }
            } else {
                $data = [
                    'success' => __('Order done')
                ];
            }

            DB::commit();
            if (request()->ajax()) {
                return response()->json($data);
            } else {
                if ($request->code && $request->code != "undefined")
                {
                    return redirect('get-invoice/'.$request->code);
                }
                else{
                    return redirect('invoice/' . $request->trx_id);
                }
            }
        } catch (\Exception $e) {
            DB::rollBack();
            session()->forget('trx_id');
            if (request()->ajax()) {
                return response()->json([
                    'error' => __('Oops.....Something Went Wrong')
                ]);
            } else {
                return redirect()->back()->with(['error' => __('oops...Something Went Wrong')]);
            }
        }
    }

    public function sellerWiseInvoices(OrderInterface $order, $trx_id, WishlistInterface $wishlist, ProductInterface $product): \Illuminate\Http\JsonResponse
    {
        try {
            session()->forget('trx_id');
            $orders = $order->invoiceByTrx($trx_id);

            foreach ($orders as $order) {
                $order_details = $order->orderDetails;

                foreach ($order_details as $order_detail){
                    $order_detail->product['product_name'] = $order_detail->product->getTranslation('title', languageCheck());
                    $order_detail['product_name'] = $order_detail->product['product_name'];
                    unset($order_detail->product);
                }
            }

            if (count($orders) > 0 && ($orders->first()->user_id == authId() || $orders->first()->user_id == getWalkInCustomer()->id))
            {
                $data = [
                    'orders' => $orders,
                    'user' => $orders->first()->user,
                    'wishlists' => $wishlist->getHeaderWishlist(),
                    'compare_list' => $product->compareList(),
                    'guest' => session()->get('walk_in_id'),
                ];

                if (session()->get('walk_in_id'))
                {
                    Sentinel::logout();
                    session()->forget('walk_in_id');
                    session()->forget('addresses');
                }
            }
            else{
                $data = [
                    'error' => __( 'Permission Denied')
                ];
            }
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function userSendMail(OrderInterface $order, $trx_id): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $orders = $order->invoiceByTrx($trx_id);
            foreach ($orders as $item) {
                $item->is_mailed = 1;
                $item->save();
//                sendMail(authUser(), $item->code, 'invoice', null, $item);
//                sendMail($item->seller, $item->code, 'seller_invoice', null, $item);
//                dd($item->code);
                $this->sendMail(authUser()->email, 'invoice', authUser(), 'email.order-complete-email','',$item);
                $this->sendMail($item->seller->email, 'seller_invoice', $item, 'email.order-complete-email','',$item);

            }
            DB::commit();
            return response()->json([
                'success' => __('Mailed Successfully'),
                'orders' => $orders,
            ]);
        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function sendMailSeller(OrderInterface $order, $trx_id): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $orders = $order->invoiceByTrx($trx_id);
            foreach ($orders as $item) {
                sendMail($item->seller, $item->code, 'seller_invoice', null, $item);
            }
            DB::commit();
            return response()->json([
                'success' => __('Seller Mailed Successfully'),
                'orders' => $orders,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function invoiceDownload($id): \Illuminate\Http\JsonResponse
    {
        $order = $this->order->get($id);

        if ($order && authUser() && $order->user_id != authId())
        {
            return response()->json([
                'error' => __('Access Denied')
            ],500);
        }
        if ($order && !authUser() && $order->user_id != getWalkInCustomer()->id)
        {
            return response()->json([
                'error' => __('Access Denied')
            ],500);
        }

        $pdf = $this->order->invoiceDownload($id);
        if ($pdf):
            return $pdf;
        else:
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        endif;
    }
}
