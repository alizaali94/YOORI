<?php

namespace App\Http\Controllers\Api\DeliveryHero\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\OrderResource;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Traits\ApiReturnFormatTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderController extends Controller
{
    use ApiReturnFormatTrait;

    protected $order;

    public function __construct(OrderInterface $order)
    {
        $this->order            = $order;
    }

    public function orders(Request $request, $slug)
    {
        try {
            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            if ($slug == 'pending'):
                $data = OrderResource::collection($user->deliveryHero->orders->whereNotIn('delivery_status',['delivered','canceled']));
            elseif($slug == 'canceled'):
                $data = OrderResource::collection($user->deliveryHero->orders->where('delivery_status','canceled'));
            elseif ($slug == 'delivered'):
                $data = OrderResource::collection(
                    $user->deliveryHero->orders->where('delivery_status','delivered'));
            endif;
            return $this->responseWithSuccess(__('Data Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function orderDetails(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            $order = $this->order->get($request->id);

            if (blank($order)) return $this->responseWithError(__('Order not found'), [], 404);
            foreach ($order->orderDetails as $orderDetail) {
                $product = $orderDetail->product;
                $total_amount = (($orderDetail->price * $orderDetail->quantity) + $orderDetail->tax + $orderDetail->shipping_cost['total_cost']) - ($orderDetail->discount + $orderDetail->coupon_discount['discount']);
                $order_details[] = [
                    'id'                        =>  $orderDetail->id,
                    'product_name'              =>  $product ? $product->getTranslation('name',app()->getLocale()) : '',
                    'quantity'                  =>  $orderDetail->quantity,
                    'price'                     =>  get_price($orderDetail->price),
                    'tax'                       =>  get_price($orderDetail->tax),
                    'discount'                  =>  get_price($orderDetail->discount),
                    'coupon_discount'           =>  get_price($orderDetail->coupon_discount['discount']),
                    'shipping_cost'             =>  get_price($orderDetail->shipping_cost['total_cost']),
                    'sub_total'                 =>  get_price($orderDetail->price * $orderDetail->quantity),
                    'total_payable'             =>  get_price($total_amount),
                ];
            }

            $data = [
                'order' => [
                    'id'                        => $order->id,
                    'invoice_no'                => $order->code,
                    'shipping_address'          => [
                                        'name'      => arrayCheck('name',$order->shipping_address) ? $order->shipping_address['name'] : '',
                                        'email'     => arrayCheck('email',$order->shipping_address) ? $order->shipping_address['email'] : '',
                                        'phone_no'  => arrayCheck('phone_no',$order->shipping_address) ? $order->shipping_address['phone_no'] : '',
                                        'address'   => arrayCheck('address',$order->shipping_address) ? $order->shipping_address['address'] : '',
                                        'country'   => arrayCheck('country',$order->shipping_address) ? $order->shipping_address['country'] : '',
                                        'state'     => arrayCheck('state',$order->shipping_address) ? $order->shipping_address['state'] : '',
                                        'city'      => arrayCheck('city',$order->shipping_address) ? $order->shipping_address['city'] : '',
                    ],
                    'date'                      => Carbon::parse($order->date)->format('d F Y'),
                    'order_status'              => $order->delivery_status,
                    'payment_status'            => $order->payment_status,
                    'payment_type'              => $order->payment_type,
                    'sub_total'                 => get_price($order->sub_total),
                    'discount'                  => get_price($order->discount),
                    'coupon_discount'           => get_price($order->coupon_discount),
                    'tax'                       => get_price($order->total_tax),
                    'shipping_cost'             => get_price($order->shipping_cost),
                    'total_payable'             => get_price($order->total_payable),
                    'is_order_placed'           => true,
                    'is_order_accepted'         => $order->delivery_status == 'confirm',
                    'is_order_processing'       => $order->delivery_status != 'confirm' || $order->delivery_status != 'pending',
                    'is_order_delivered'        => $order->delivery_status == 'delivered',
                    'order_details'             => $order_details
                ]
            ];

            return $this->responseWithSuccess(__('Data Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function deliveryStatusUpdate(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'delivery_status'   => 'required',
                'order_id'          => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $order = $this->order->get($request->order_id);
            $request['id']          = $order->id;
            $request['user_id']     = $user->id;

            if ($order->delivery_status != 'delivered'):
                if ($order->delivery_status == $request['delivery_status']):
                    return $this->responseWithError(__('Delivery status has been already updated to :status', ['status' => $request['delivery_status']]), [] );
                else:
                    if (($order->payment_status == 'unpaid' || $order->payment_status == 'refunded_to_wallet')  && $request['delivery_status'] == 'delivered'):
                        return $this->responseWithError(__('Unpaid order can not get delivered'), [] );
                    else:
                        $status = $this->order->deliveryStatusChange($request);
                        if ($status === 'product_not_available'):
                            return $this->responseWithError(__('Product stock not available'), [] );
                        elseif ($status == true):
                            return $this->responseWithSuccess(__('Updated Successfully'), [], 200);
                        else:
                            return $this->responseWithError(__('Something went wrong, please try again'), [] );
                        endif;
                    endif;
                endif;
            else:
                return $this->responseWithError(__('Status cannot change,please check previous status'), [], 403);
            endif;


        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function paymentStatusUpdate(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'payment_status'    => 'required',
                'order_id'          => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            if($request->payment_status != 'paid'){
                return $this->responseWithError(__('You cannot change this status.'), [], 403);
            }

            $order                                  = $this->order->get($request['order_id']);
            $request['id']                          = $order->id;
            $request['user_id']                     = $user->id;
            $request['paid_to_delivery_man']        = 1;
            $request['payment_type']                = 'cash';


            if ($order->delivery_status != 'delivered'):
                if ($order->payment_status == 'refunded_to_wallet' && $request['payment_status'] == 'unpaid'):
                    return $this->responseWithError(__('Refunded payment can not get unpaid'), []);
                endif;
                if ($order->payment_status == $request['payment_status']):
                    return $this->responseWithError(__('Payment status already been :status', ['status' => $request['payment_status']]), []);
                else:
                    if ($request['payment_type'] == 'wallet' && $order->user->balance < $order->total_payable):
                        return $this->responseWithError(__('Customer does not have enough wallet balance'), []);
                    endif;

                    if ($this->order->paymentStatusChange($request)):
                        return $this->responseWithSuccess(__('Updated Successfully'), [], 200);
                    else:
                        return $this->responseWithError(__('Something went wrong, please try again'), []);
                    endif;
                endif;
            else:
                return $this->responseWithError(__('Delivered order can not get updated'), []);
            endif;


        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }
}
