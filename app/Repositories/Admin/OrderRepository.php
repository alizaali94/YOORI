<?php

namespace App\Repositories\Admin;

use App\Models\Cart;
use App\Models\Checkout;
use App\Models\DeliveryHistory;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\PaymentHistory;
use App\Models\ProductStock;
use App\Models\SellerProfile;
use App\Repositories\Admin\Addon\WalletRepository;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Traits\PaymentTrait;
use App\Traits\RandomStringTrait;
use App\Traits\SendMailTrait;
use Carbon\Carbon;
use DB;
use PDF;
use Sentinel;

class OrderRepository implements OrderInterface
{
    use RandomStringTrait, PaymentTrait,SendMailTrait;

    protected $lang;
    protected $product;
    protected $wallet;

    public function __construct(LanguageInterface $lang, ProductInterface $product, WalletInterface $wallet)
    {
        $this->lang         = $lang;
        $this->product      = $product;
        $this->wallet       = $wallet;
    }



    public function all()
    {
        return Order::latest();
    }

    public function get($id)
    {
        return Order::find($id);
    }

    public function getDetail($id)
    {
        return OrderDetail::find($id);
    }

    public function paginate($request, $limit)
    {
        $start_date = $end_date = null;

        if ($request->dt != null):
            $dates          = explode(" - ", $request->dt);
            $start_date     = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date       = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;
        $orders = Order::with('orderDetails.product')->withCount('orderDetails')
            ->when($request->ds != null, function ($query) use ($request) {
                $query->where('delivery_status', $request->ds);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('orders.created_at', '>=', $start_date)
                    ->whereDate('orders.created_at', '<=', $end_date);
            })
            ->when($request->sl != null, function ($query) use ($request) {
                $seller = sellerProfile::find($request->sl);
                $query->where('orders.seller_id', $seller->user_id);
            })
            ->when($request->q != null, function ($query) use ($request) {
                $query->where('code', 'like', '%' . $request->q . '%');
                $query->orwhereHas('user', function ($q) use ($request) {
                    $q->where('first_name', 'like', '%' . $request->q . '%');
                    $q->orwhere('last_name', 'like', '%' . $request->q . '%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%" . $request->q . "%");
                    $q->orwhere('phone', 'like', '%' . $request->q . '%');
                });
            })
            /*->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })*/
            ->where('status', 1);

        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_on_top':
                $orders->orderByDesc('id');
                break;
            case 'oldest_on_top':
                $orders->orderBy('id');
                break;
            case 'price_high':
                $orders->orderByDesc('total_amount');
                break;
            case 'price_low':
                $orders->orderBy('total_amount');
                break;
            case 'total_product_high':
                $orders->orderByDesc('order_details_count');
                break;
            case 'total_product_low':
                $orders->orderBy('order_details_count');
                break;
            default:
                $orders->orderBy('id', 'desc');
                break;
        }
        return $orders->paginate($limit);
    }

    public function sellerOrder($request, $limit)
    {
        $start_date = null;
        $end_date = null;
        if ($request->dt != null):
            $dates = explode(" - ", $request->dt);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;
        $orders = Order::withCount('orderDetails')
            ->where('seller_id', '!=', 1)
            ->with(['orderDetails.product.sellerProfile'])
            ->when($request->ds != null, function ($query) use ($request) {
                $query->where('delivery_status', $request->ds);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('orders.created_at', '>=', $start_date)
                    ->whereDate('orders.created_at', '<=', $end_date);
            })
            ->when($request->q != null, function ($query) use ($request) {
                $query->where('code', 'like', '%' . $request->q . '%');
                $query->orwhereHas('user', function ($q) use ($request) {
                    $q->where('first_name', 'like', '%' . $request->q . '%');
                    $q->orwhere('last_name', 'like', '%' . $request->q . '%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%" . $request->q . "%");
                    $q->orwhere('phone', 'like', '%' . $request->q . '%');
                });
            })
            ->when($request->sl != null, function ($query) use ($request) {
                $seller = SellerProfile::find($request->sl);
                $query->where('orders.seller_id', $seller->user_id);
            })->where('status', 1);

        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_on_top':
                $orders->orderByDesc('id');
                break;
            case 'oldest_on_top':
                $orders->orderBy('id');
                break;
            case 'price_high':
                $orders->orderByDesc('total_amount');
                break;
            case 'price_low':
                $orders->orderBy('total_amount');
                break;
            case 'total_product_high':
                $orders->orderByDesc('order_details_count');
                break;
            case 'total_product_low':
                $orders->orderBy('order_details_count');
                break;
            default:
                $orders->orderBy('id', 'desc');
                break;
        }
        return $orders->paginate($limit);

    }

    public function adminOrder($request, $limit)
    {
        $start_date = null;
        $end_date = null;
        if ($request->dt != null):
            $dates = explode(" - ", $request->dt);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;
        $orders = Order::with('orderDetails.product')->withCount('orderDetails')
            ->where('seller_id', 1)
            ->when($request->ds != null, function ($query) use ($request) {
                $query->where('delivery_status', $request->ds);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('orders.created_at', '>=', $start_date)
                    ->whereDate('orders.created_at', '<=', $end_date);
            })
            ->when($request->q != null, function ($query) use ($request) {
                $query->where('code', 'like', '%' . $request->q . '%');
                $query->orwhereHas('user', function ($q) use ($request) {
                    $q->where('first_name', 'like', '%' . $request->q . '%');
                    $q->orwhere('last_name', 'like', '%' . $request->q . '%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%" . $request->q . "%");
                    $q->orwhere('phone', 'like', '%' . $request->q . '%');
                });
            })->where('status', 1);

        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_on_top':
                $orders->orderByDesc('id');
                break;
            case 'oldest_on_top':
                $orders->orderBy('id');
                break;
            case 'price_high':
                $orders->orderByDesc('total_amount');
                break;
            case 'price_low':
                $orders->orderBy('total_amount');
                break;
            case 'total_product_high':
                $orders->orderByDesc('order_details_count');
                break;
            case 'total_product_low':
                $orders->orderBy('order_details_count');
                break;
            default:
                $orders->orderBy('id', 'desc');
                break;
        }
        return $orders->paginate($limit);
    }

    public function pickupHubOrder($request, $limit)
    {
        $start_date         = null;
        $end_date           = null;

        if ($request->dt != null):
            $dates          = explode(" - ", $request->dt);
            $start_date     = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date       = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;

        $orders = Order::with('pickupHub')->withCount('orderDetails')
            ->whereNotNull('pickup_hub_id')
            ->when($request->ds != null, function ($query) use ($request) {
                $query->where('delivery_status', $request->ds);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('orders.created_at', '>=', $start_date)
                    ->whereDate('orders.created_at', '<=', $end_date);
            })
            ->when($request->sl != null, function ($query) use ($request) {
                $seller = sellerProfile::find($request->sl);
                $query->where('seller_id', $seller->user_id);
            })
            ->when($request->q != null, function ($query) use ($request) {
                $query->where('code', 'like', '%' . $request->q . '%');
            })
            ->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })
            ->where('status', 1);

        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_on_top':
                $orders->orderByDesc('id');
                break;
            case 'oldest_on_top':
                $orders->orderBy('id');
                break;
            case 'price_high':
                $orders->orderByDesc('total_amount');
                break;
            case 'price_low':
                $orders->orderBy('total_amount');
                break;
            case 'total_product_high':
                $orders->orderByDesc('order_details_count');
                break;
            case 'total_product_low':
                $orders->orderBy('order_details_count');
                break;
            default:
                $orders->orderBy('id', 'desc');
                break;
        }
        return $orders->paginate($limit);
    }

    public function sellerProfile($id)
    {
        return SellerProfile::find($id);
    }

    public function invoiceDownload($id)
    {
        try {
            $order  = $this->get($id);
            $pdf    = PDF::loadView('admin.orders.invoice', [
                'order' => $order,
            ]);

            return $pdf->stream($order->code . '.pdf');
        } catch (\Exception $e) {
            return false;
        }
    }
    public function invoiceDownloadApi($id)
    {
        try {
            $order  = $this->get($id);
            $pdf    = PDF::loadView('admin.orders.invoice', [
                'order' => $order,
            ]);

            return $pdf->download($order->code . '.pdf');
        } catch (\Exception $e) {
            return false;
        }
    }

    public function assignDeliveryHero($request)
    {
        DB::beginTransaction();
        try {
            $order                              = $this->get($request->id);
            $order->delivery_hero_id            = $request->delivery_hero;
            $order->delivery_hero_assign_at     = Carbon::now();
            $order->save();

            $old_assign_history                 = DeliveryHistory::where('order_id', $order->id)->where('event', 'delivery_hero_assigned')->first();
            $delivery_history                   = new DeliveryHistory();
            $delivery_history->event            = $old_assign_history ? 'delivery_hero_changed' : 'delivery_hero_assigned';
            $delivery_history->user_id          = Sentinel::getUser()->id;
            $delivery_history->order_id         = $order->id;
            $delivery_history->delivery_hero_id = $request->delivery_hero;

            $delivery_history->save();

            DB::commit();
            return true;
        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function deliveryStatusChange($request)
    {
        DB::beginTransaction();
        try {
            $order                  = $this->get($request->id);
            $previous_status        = $order->delivery_status;
            $order->delivery_status = $request->delivery_status;

            if ($request->delivery_status == 'canceled'):
                $this->cancelOrder($order, '','',$request->has('user_id') ? $request->user_id : '' );
            else:
                if ($request->delivery_status == 'delivered'):
                    $this->wallet->manageDeliveredOrder($order);
                    foreach ($order->orderDetails as $key => $orderDetail) :
                        $this->saleUpdate($orderDetail);
                    endforeach;
                endif;

                if ($previous_status == 'canceled'):
                    if (!$this->adjustQuantity($order, true)):
                        DB::rollback();
                        return 'product_not_available';
                    endif;
                endif;
                $this->deliveryEvent('order_'.$request->delivery_status.'_event', $order->id, $order->delivery_hero_id, '',$request->has('user_id') ? $request->user_id : '' );
            endif;

            $order->save();

            sendNotification(Sentinel::findById($order->user_id),__("Your order (:code) status is updated",['code'=>$order->code]),'success',"get-invoice/{$order->code}", __('Your order (:code) status is updated is :delivery_status now.', ['code'=>$order->code,'delivery_status'=>$request->delivery_status]));
//            sendMail($order->user, $order, 'order_status_update', '',);
            $this->SendMail($order->user->email, 'Order Status Updated', $order, 'email.order-status-update',url('/'). '/get-invoice/' .$order->code);


            DB::commit();
            return true;
        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
            return false;
        }
    }

    public function paymentStatusChange($request)
    {

        DB::beginTransaction();
        try {
            $order = $this->get($request->id);
            $previous_payment_status = $order->payment_status;
            if ($request->payment_status == 'paid'):
                $order->payment_status = 'paid';
                $this->wallet->insertPayment($order, $request->all());
                $this->paymentHistoryEvent("order_payment_{$request->payment_status}_event", $order->id, "With {$request['payment_type']}",$request->has('user_id') ? $request->user_id : '');
            elseif ($request->payment_status == 'unpaid'):
                if ($previous_payment_status == 'paid'):
                    $order->payment_status = 'refunded_to_wallet';
                    $this->wallet->removePayment($order, 'payment_status_changed');
                    $this->paymentHistoryEvent('order_payment_refunded_to_wallet_event', $order->id, '',$request->has('user_id') ? $request->user_id : '');
                else:
                    $order->payment_status = 'unpaid';
                    $this->paymentHistoryEvent("order_payment_{$request->payment_status}_event", $order->id, '',$request->has('user_id') ? $request->user_id : '');
                endif;
            elseif($request->payment_status == 'offline_payment'):
                $order->payment_status = 'paid';
                $this->paymentHistoryEvent("order_payment_{$request->payment_status}_event", $order->id, "With offline payment",$request->has('user_id') ? $request->user_id : '');
            endif;

            $order->save();
            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    //for frontend api
    public function orderByCode($orderCode)
    {
        return Order::with('orderDetails.product','orderDetails.refund','user')
            ->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })->where('code', $orderCode)->first();
    }

    public function orders($take)
    {
        if (authUser()) {
            return OrderDetail::with('product:id,thumbnail,slug,product_file_id', 'order')
                ->whereHas('order', function ($query) {
                    $query->where('user_id', authId());
                        $query->where('is_deleted', 0);
                        /*$query->when(settingHelper('seller_system') != 1, function ($q) {
                            $q->where('seller_id',1);
                        });*/
                        $query->where(function ($q){
                            $q->where('status', 1)->orWhere('payment_type',0);
                        });
                })->groupBy('order_id')->latest()->paginate($take);
        } else {
            return [];
        }
    }
    public function digitalProductOrders($limit,$token=null)
    {
        $user_id = authUser() ? authId() : $token;
        if ($user_id) {
            return OrderDetail::with('product:id,thumbnail,slug,product_file_id', 'order')
                ->whereHas('order', function ($query) use ($user_id){
                    $query->where('user_id', $user_id);
                    $query->where('payment_status','paid');
                    $query->where('is_deleted', 0);
                    $query->where('status', 1);
                    $query->when(settingHelper('seller_system') != 1, function ($q) {
                        $q->where('seller_id',1);
                    });
                })->whereHas('product', function($q){
                    $q->where('product_file_id','!=',null);
                    $q->where('is_digital',1);
                })
                ->Where( function($qu){
                    $qu->whereHas('refund', function($q){
                        $q->where('status','!=','approved');
                        $q->Where('status','!=','processed');
                    });
                    $qu->orWhereDoesntHave('refund');
                })

                ->groupBy('order_id')
                ->latest()
                ->paginate($limit);
        } else {
            return [];
        }
    }

    public function productOrderList($item,$user)
    {
        if ($user) {
            return OrderDetail::with(['product' => function($q) use($user){
                $q->withTrashed();
                $q->select('id','thumbnail','slug','product_file_id');
            },'order'])
                ->whereHas('order', function ($query) use($user){
                    $query->where('user_id', $user->id);
                    $query->where('is_deleted', 0);
                    $query->where(function ($q){
                        $q->where('status', 1)->orWhere('payment_type',0);
                    });
                    $query->when(settingHelper('seller_system') != 1, function ($q) {
                        $q->where('seller_id',1);
                    });
                })->groupBy('order_id')->latest()->paginate($item);
        } else {
            return [];
        }
    }

    public function deleteOrder($id)
    {
        $order = $this->get($id);
        if ($order && $order->user_id == authId())
        {
            $order->is_deleted = 1;
            $order->save();
        }
        else{
            return abort(403);
        }

        return $order;
    }

    public function confirmOrder($checkout, $carts, $data,$user)
    {
        $walk_in_customer = getWalkInCustomer();

        $orders =[];

        if ($user && $carts->first()->user_id != $user->id)
        {
            return abort(403);
        }
        elseif (!$user && $carts->first()->user_id != $walk_in_customer->id)
        {
            return abort(403);
        }
        $coupon_discount = 0;
        if (count($carts) > 0)
        {
            foreach ($checkout as $key => $cart_group) {
                $sub_total = $total_discount = $total_tax = $shipping_cost = 0;
                if (array_key_exists('seller_id',$cart_group))
                {
                    foreach ($carts->whereIn('seller_id', $cart_group['seller_id']) as $item) {
                        $sub_total += $item->price * $item->quantity;
                        $total_discount += $item->discount * $item->quantity;
                        $total_tax += $item->tax * $item->quantity;
                        $shipping_cost += $item->shipping_cost;

                        if ($item->product->current_stock < $item->quantity)
                        {
                            return $item->product->product_name .' is out of Stock';
                        }
                    }
                    if (authUser())
                    {
                        $coupon_discount = Checkout::where('seller_id',$cart_group['seller_id'])->where('trx_id',$carts->first()->trx_id)->where('user_id',authId())->where('status',1)->sum('coupon_discount');
                    }
                }

                $shipping_cost += $cart_group['shipping_cost'];


                if (array_key_exists('pick_hub_id',$data) && !empty($data['pick_hub_id'])) {
                    $shipping_cost      = 0;
                }
                elseif (settingHelper('shipping_fee_type') == 'area_base') {
                    $city_id = $data['shipping_address']['address_ids']['city_id'];
                    $shipping_repo = new ShippingRepository();
                    $city = $shipping_repo->getCity($city_id);
                    $shipping_cost += $city ? $city->cost : 0;
                }

                $total_tax += $cart_group['tax'];

                if (settingHelper('vat_type') == 'after_tax' && settingHelper('vat_and_tax_type') == 'order_base')
                {
                    $total_amount = ($sub_total) - ($total_discount + $coupon_discount);
                    $total_payable = $total_amount + $total_tax + $shipping_cost;
                }
                else{
                    $total_amount = ($sub_total + $total_tax) - ($total_discount + $coupon_discount);
                    $total_payable = $total_amount + $shipping_cost;
                }

                $tax = [
                    'vat_tax_type'  => settingHelper('vat_and_tax_type'),
                    'tax_type'      => settingHelper('vat_type'),
                ];

                $order = Order::create([
                    'seller_id'                 => $key,
                    'user_id'                   => $user ? $user->id : $walk_in_customer->id,
                    'billing_address'           => array_key_exists('billing_address',$data) ? $data['billing_address'] : [],
                    'shipping_address'          => array_key_exists('shipping_address',$data) ? $data['shipping_address'] : [],
                    'payment_type'              => array_key_exists('payment_type',$data) ? $data['payment_type'] : '',
                    'sub_total'                 => $sub_total,
                    'discount'                  => $total_discount,
                    'coupon_discount'           => $coupon_discount,
                    'total_tax'                 => $total_tax,
                    'total_amount'              => $total_amount,
                    'shipping_cost'             => $shipping_cost,
                    'total_payable'             => $total_payable,
                    'code'                      => settingHelper('order_prefix') . '-' . $this->generate_random_string(10, 'number'),
                    'trx_id'                    => $carts->first()->trx_id,
                    'pickup_hub_id'             => array_key_exists('pick_hub_id',$data) && !empty($data['pick_hub_id']) ? $data['pick_hub_id'] : null,
                    'date'                      => now(),
                    'shipping_method'           => settingHelper('shipping_fee_type'),
                    'is_coupon_system_active'   => settingHelper('coupon_system'),
                    'tax_method'                => $tax,
                ]);

                $orders[] = $order;

                foreach ($carts->whereIn('seller_id', $cart_group['seller_id']) as $item) {
                    $shipping_cost = [
                        'type'                  => '',
                        'depend_on_quantity'    => 0,
                        'per_cost'              => 0,
                        'total_cost'            => 0
                    ];
                    $coupon = [
                        'code'                  => '',
                        'discount'              => 0,
                    ];

                    if ($item->shipping_cost > 0 && settingHelper('shipping_fee_type') != 'invoice_base') {
                        $product = $item->product;
                        $shipping_cost = [
                            'type'               => $product->shipping_type,
                            'depend_on_quantity' => $product->shipping_fee_depend_on_quantity,
                            'per_cost'           => $product->shipping_fee_depend_on_quantity == 1 ? $product->shipping_fee : 0,
                            'total_cost'         => $item->shipping_cost
                        ];
                    }

                    if ($item->coupon_discount > 0) {
                        $coupon = [
                            'code'      => $cart_group['code'],
                            'discount'  => $item->coupon_discount,
                        ];
                    }

                    OrderDetail::create([
                        'order_id'          => $order->id,
                        'product_id'        => $item->product_id,
                        'variation'         => $item->variant,
                        'price'             => $item->price,
                        'tax'               => $item->tax,
                        'discount'          => $item->discount,
                        'shipping_cost'     => $shipping_cost,
                        'coupon_discount'   => $coupon,
                        'quantity'          => $item->quantity,
                        'is_refundable'     => $item->product->is_refundable,
                    ]);
                }
            }
        }
        else{
            return abort(403);
        }


        return $orders;
    }

    public function takePaymentOrder($trx_id)
    {
        return Order::where('trx_id', $trx_id)
                ->when(settingHelper('seller_system') != 1, function ($q) {
                    $q->where('seller_id',1);
                })
                ->where('status', 0)->get();
    }


    public function completeOrder($data, $user,$offline)
    {
        $payment_details = $carts = [];

        $walk_in_user = getWalkInCustomer();
        if (array_key_exists('guest', $data) && $data['guest'] == 1)
        {
            $carts = Cart::where('user_id',$walk_in_user->id)->where('trx_id',$data['trx_id'])->get();
            $orders = Order::where('trx_id', $data['trx_id'])->where('user_id',$walk_in_user->id)->get();

        }
        else{

            if (array_key_exists('code', $data) && !empty($data['code']) && $data['code'] != 'undefined') {
                $orders = $this->orderByCodes($data['code']);
                if (!$user)
                {
                    Sentinel::login($orders->first()->user);
                    $user = authUser();
                }

            } else {

                if ($user)
                {
                    $carts = Cart::where('user_id',$user->id)->where('trx_id',$data['trx_id'])->get();
                }

                $trx_id = array_key_exists('trx_id',$data) ?  $data['trx_id'] : $carts->first()->trx_id;
                $orders = $this->takePaymentOrder($trx_id);

                if (!$user)
                {
                    if (count($orders) == 0)
                    {
                        $orders = Order::where('trx_id', $trx_id)->where('status', 1)->get();
                    }
                    Sentinel::login($orders->first()->user);
                    $user = authUser();
                    $carts = Cart::where('user_id',$user->id)->where('trx_id',$trx_id)->get();
                }
            }
        }

        if ($user || (array_key_exists('guest', $data) && $data['guest'] == 1))
        {
            foreach ($carts as $cart):
                $product = $this->product->get($cart->product_id);
                if ($product != null):
                    $product->current_stock -= $cart->quantity;
                    $product->save();
                endif;
                $product_stock = ProductStock::where('product_id', $cart->product_id)
                    ->where('name', $cart->variant)
                    ->first();
                if ($product_stock != null) :
                    $product_stock->current_stock -= $cart->quantity;
                    $product_stock->save();
                endif;
                $cart->delete();
            endforeach;
            $payment_details = $this->methodCheck($data, $orders,$user);

            if ($data['payment_type'] == 'mollie')
            {
                if ($payment_details['status'] != 'paid')
                {
                    return __('transaction_cant_be_completed');
                }
            }
            if ($data['payment_type'] == 'bKash')
            {
                if (isset($payment_details['statusCode']) && $payment_details['statusCode'] != '0000')
                {
                    return __('transaction_cant_be_completed');
                }
            }

            if ($data['payment_type'] == 'paystack')
            {
                if ($payment_details['status'] != 'success')
                {
                    return __('transaction_cant_be_completed');
                }
            }
            if ($data['payment_type'] == 'kkiapay')
            {
                if (!arrayCheck('status',$payment_details) || $payment_details['status'] != 'SUCCESS')
                {
                    return __('transaction_cant_be_completed');
                }
            }

            $storage = settingHelper('default_storage') == 'aws_s3' ? 'aws_s3' : 'local';

            if (array_key_exists('file', $data) && $data['file']) {
                $fileName                   = time() . '.' . $data['file']->extension();
                $data['file']->move(public_path('images/orders/'), $fileName);

                $data['image']['storage']   = $storage;
                $data['image']['image']     = 'images/orders/' . $fileName;
            }

            if ($data['payment_type'] == 'offline_method')
            {
                $offline_payment            = $offline->get($data['id']);
                $payment_details['name']    = $offline_payment->name;
                $payment_details['image']   = $offline_payment->image;
                $payment_details['type']    = $offline_payment->type;
            }


            foreach ($orders as $order) {
                $order->payment_type        = $data['payment_type'];
                $this->deliveryEvent('order_create_event', $order->id);


                if (!in_array($data['payment_type'], ['cash_on_delivery', 'pay_later'])) {
                    $order->payment_status      = array_key_exists('id', $data) && $data['id'] ? 'unpaid' : 'paid';
                    $order->offline_method_id   = array_key_exists('id', $data) && $data['id'] ? $data['id'] : null;
                    $order->offline_method_file = array_key_exists('image', $data) && $data['image'] ? $data['image'] : [];
                    $order->payment_details     = $payment_details ?: [];

                    if ($order->payment_status == 'paid'):
                        $this->wallet->managePlacedOrder($order, $data);
                    endif;
                }
                $order->status = 1;

                if ($data['payment_type'] == 'wallet')
                {
                    $order->payment_status = 'paid';

                    $wallet_repo = new WalletRepository();

                    $wallet_repo->store([
                        'user_id'       => $user->id,
                        'order_id'      => $order->id,
                        'amount'        => $order->total_payable,
                        'source'        => 'order_created',
                        'type'          => 'expense',
                        'status'        => 'approved',
                        'payment_method' => 'wallet',
                    ]);
                }

                $order->save();
                $this->paymentHistoryEvent('order_payment_'.$order->payment_status.'_event', $order->id, 'With_'.$data['payment_type']);
                $url = "orders/view/{$order->id}";
                if($order->seller_id != 1):
                    sendNotification(Sentinel::findById($order->seller_id),__('New order is created.'),'success',$url,__('See it in Details'));
                endif;
                sendNotification(Sentinel::findById(1),__('New order is created.'),'success',$url,__('See it in Details'));
                if($order->pickup_hub_id):
                    sendNotification(Sentinel::findById($order->pickupHub->user_id),__('New order is created.'),'success',$url,__('See it in Details'));
                endif;

                foreach($order->orderDetails as $orderDetail):
                    if($orderDetail->product->stock_notification == 1):
                        if($orderDetail->product->low_stock_to_notify >= $orderDetail->product->current_stock):
                            sendNotification(Sentinel::findById($orderDetail->product->user_id),__('Product stock in low.'),'warning',"edit-product/{$orderDetail->product->id}",__('Product Stock in low'));
                        endif;
                    endif;
                endforeach;

            }
            session()->put('trx_id',$data['trx_id']);
            session()->forget('bkash_token');
        }

        return $payment_details;
    }

    public function deliveryEvent($event, $order_id, $delivery_hero_id = null, $remarks = '',$user_id = '')
    {
        $data = [
            'event'             => $event,
            'user_id'           => authUser() ? authId() : ($user_id != '' ? $user_id : getWalkInCustomer()->id),
            'order_id'          => $order_id,
            'remarks'           => $remarks,
            'delivery_hero_id'  => $delivery_hero_id,
        ];
        return DeliveryHistory::create($data);
    }
    public function paymentHistoryEvent($event, $order_id, $remarks = '', $user_id = '')
    {
        $data = [
            'event'             => $event,
            'user_id'           => authUser() ? authId() : ($user_id != '' ? $user_id : getWalkInCustomer()->id),
            'order_id'          => $order_id,
            'remarks'           => $remarks,
        ];
        return PaymentHistory::create($data);
    }

    public function invoiceByTrx($trx_id)
    {
        return Order::with('orderDetails.product')
            ->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })->where('trx_id', $trx_id)->get();
    }

    //frontend api completed
    public function cancelOrder($order, $remarks = '', $order_updated = false, $user_id = '')
    {
        if (!$order_updated):
            $order->delivery_status = 'canceled';
            if ($order->payment_status == 'paid'):
                //wallet & balance transaction for users
                $this->wallet->manageCanceledOrder($order);
                $order->payment_status = 'refunded_to_wallet';
            endif;

            if($user_id != ''):
                $order->cancel_request          = 1;
                $order->cancel_request_at       = Carbon::now();
            endif;

            $order->save();
        endif;

        $this->adjustQuantity($order, false);

        $this->deliveryEvent('order_canceled_event', $order->id, $order->delivery_hero_id, $remarks,$user_id);
        return $order;
    }

    //for frontend api
    public function orderByCodes($orderCode)
    {
        return Order::with('orderDetails.product:id,thumbnail')
            ->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })->where('code', $orderCode)->get();
    }

    public function adjustQuantity($order, $remove_quantity = false)
    {
        foreach ($order->orderDetails as $key => $orderDetail) :
            return $this->updateQuantity($orderDetail, $remove_quantity);
        endforeach;

        return true;
    }

    public function updateQuantity($orderDetail, $remove_quantity = false)
    {
        $product = $this->product->get($orderDetail->product_id);
        if ($product != null):
            if ($remove_quantity):
                if ($orderDetail->quantity <= $product->current_stock):
                    $product->current_stock -= $orderDetail->quantity;
                else:
                    return false;
                endif;
            else:
                $product->current_stock += $orderDetail->quantity;
            endif;

            $product_stock = ProductStock::where('product_id', $orderDetail->product_id)
                ->where('name', $orderDetail->variation)
                ->first();
            if ($product_stock != null) :
                if ($remove_quantity):
                    if ($orderDetail->quantity <= $product_stock->current_stock):
                        $product_stock->current_stock -= $orderDetail->quantity;
                    else:
                        return false;
                    endif;
                else:
                    $product_stock->current_stock += $orderDetail->quantity;
                endif;
                $product_stock->save();
            endif;
            $product->save();
        endif;

        return true;
    }

    public function saleUpdate($orderDetail, $remove_sale = false)
    {
        $product = $this->product->get($orderDetail->product_id);
        if ($product != null):
            if ($remove_sale):
                if ($orderDetail->quantity <= $product->current_stock):
                    $product->total_sale    -= $orderDetail->quantity;
                else:
                    return false;
                endif;
            else:
                $product->total_sale    += $orderDetail->quantity;
            endif;
            $product->save();
        endif;

        return true;
    }

    public function checkCodByTrx($trx_id)
    {
        return Order::whereHas('orderDetails.product',function ($query){
                $query->where('cash_on_delivery',0);
            })->when(settingHelper('seller_system') != 1, function ($q) {
                $q->where('seller_id',1);
            })->where('trx_id', $trx_id)->exists();
    }

    public function checkCodByCode($code)
    {
        return Order::whereHas('orderDetails.product',function ($query)
        {
            $query->where('cash_on_delivery',0);
        })->when(settingHelper('seller_system') != 1, function ($q) {
            $q->where('seller_id',1);
        })->where('code', $code)->exists();
    }

    public function allOrder($take,$user)
    {
        return Order::where('user_id',$user->id)->when(settingHelper('seller_system') != 1, function ($q) {
            $q->where('seller_id',1);
        })->where('is_deleted', 0)->where(function ($query){
            $query->where('status', 1)->orWhere('payment_type',0);
        })->latest()->paginate($take);
    }

    public function apiSellerOrder($user,$take,$status=null)
    {
        return OrderDetail::with('order','product.brand','product.category')->whereHas('order',function ($q) use ($user){
            $q->where('seller_id',$user->id)->where('status',1);
        })->when($status == 'pending', function ($q) use ($user){
            $q->whereHas('order',function ($q) use ($user){
                $q->where('delivery_status','pending')->where('seller_id',$user->id)->where('status',1);
            });
        })->latest()->paginate($take);
    }

}
