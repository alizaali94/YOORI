<?php

namespace App\Http\Controllers\Api\Seller\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Seller\OrderDetailsResource;
use App\Http\Resources\Api\Seller\OrderListResource;
use App\Http\Resources\Api\Seller\OrderResource;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Traits\ApiReturnFormatTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderController extends Controller
{
    use ApiReturnFormatTrait;

    protected $order;
    protected $lang;

    public function __construct(OrderInterface $order, LanguageInterface $lang)
    {
        $this->order = $order;
        $this->lang = $lang;
    }

    public function orders(Request $request)
    {

        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }
        try {
            $orders = OrderResource::collection($this->order->apiSellerOrder($user, get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Order Fetched Successfully'), $orders, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function orderDetails(Request $request, $id)
    {
        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }
        $order = $this->order->get($id);
        foreach ($order->orderDetails as $orderDetail) {
            $order_details[] = [
                'id' => $orderDetail->id,
                'product_name' => @$orderDetail->product->product_name,
                'quantity' => $orderDetail->quantity,
                'price' => number_format($orderDetail->price,2),
                'total_price' => number_format($orderDetail->price * $orderDetail->quantity,2),
            ];
        }
        $data = [
            'id' => $order->id,
            'code' => $order->code,
            'customer_name' => $order->shipping_address['name'],
            'customer_phone' => $order->shipping_address['phone_no'],
            'address' => $order->shipping_address['address'],
            'payment_method' => $order->payment_type,
            'total_amount' => number_format($order->total_amount,2),
            'delivery_status' => $order->delivery_status,
            'sub_total' => number_format($order->sub_total,2),
            'tax' => number_format($order->total_tax,2),
            'shipping_cost' => number_format($order->shipping_cost,2),
            'discount' => number_format($order->discount,2),
            'products' => $order_details,
        ];
        if ($user->id == $order->seller_id):
            try {
                return $this->responseWithSuccess(__('Order Details Fetched Successfully'), $data, 200);
            } catch (\Exception $e) {
                return $this->responseWithError(__($e->getMessage()), [], null);
            }
        else:
            abort(404);
        endif;
    }

    public function invoiceDownload(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->bearerToken()) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }
            return $this->order->invoiceDownloadApi($id);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function cancelOrder(Request $request,$id): \Illuminate\Http\JsonResponse
    {
        try {
            $order_find = $this->order->get($id);
                $data = [
                    'orders' => $this->order->cancelOrder($order_find, $request->remarks),
                ];
            return response()->json([
                'success'   => true,
                'message'   => 'Order canceled Successfully',
            ],200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function deliveredOrder(Request $request)
    {
        try{
            $order = $this->order->get($request['id']);
            if ($order->delivery_status != 'delivered'):
                if ($order->delivery_status == $request['delivery_status']):
                    return $this->responseWithSuccess(__('Delivery status has been already updated to :status'), '', 200);
                else:
                    if (($order->payment_status == 'unpaid' || $order->payment_status == 'refunded_to_wallet')  && $request['delivery_status'] == 'delivered'):
                        return response()->json([
                            'success'   => false,
                            'message'   => 'Unpaid order can not get delivered',
                        ],401);
                    else:
                        $status = $this->order->deliveryStatusChange($request);
                        if ($status === 'product_not_available'):
                            return response()->json([
                                'success'   => false,
                                'message'   => 'Product stock not available',
                            ],200);
                        elseif ($status == true):
                            return response()->json([
                                'success'   => true,
                                'message'   => 'Update Successfully',
                            ],200);
                        else:
                            return response()->json([
                                'success'   => false,
                                'message'   => 'Something went wrong, please try again',
                            ],200);
                        endif;
                    endif;
                endif;
            else:
                return response()->json([
                    'success'   => false,
                    'message'   => 'Delivered order can not get updated',
                ],null);
            endif;
        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()) [], null);
        }
    }
}
