<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\CouponResource;
use App\Repositories\Interfaces\Admin\Marketing\CouponInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;

class CartController extends Controller
{
    use ApiReturnFormatTrait;

    protected $cart;

    public function __construct(CartInterface $cart)
    {
        $this->cart = $cart;
    }

    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $carts = $this->cart->cartList($user,$request->all());
            $checkouts = $this->cart->checkoutCoupon($carts, ['coupon'],$user);

            $results =[];
            $shipping_cost = $tax = $sub_total = $discount = 0;

            foreach ($checkouts as $key=> $checkout) {
                $seller_carts = $carts->where('seller_id',$key);
                foreach ($seller_carts as $cart) {
                    $product = $cart->product;
                    $results[] = [
                        'id'                        => (int)$cart->id,
                        'seller_id'                 => (int)$cart->seller_id,
                        'product_id'                => (int)$cart->product_id,
                        'product_name'              => nullCheck($product->getTranslation('name',apiLanguage($request->lang))),
                        'product_image'             => nullCheck($cart->image_72x72),
                        'shop_name'                 => nullCheck($checkout['name']),
                        'shop_image'                => nullCheck($checkout['image']),
                        'variant'                   => nullCheck($cart->variant),
                        'quantity'                  => (int)$cart->quantity,
                        'minimum_order_quantity'    => (int)$product->minimum_order_quantity,
                        'stock'                     => (int)$product->current_stock,
                        'price'                     => (string)round($cart->price,3),
                        'formatted_price'           => (string)$cart->price,
                        'discount'                  => (string)round($cart->discount,3),
                        'sub_total'                 => (string)round(($cart->price - $cart->discount) * $cart->quantity,3),
                        'formatted_discount'        => (string) $cart->discount,
                        'formatted_sub_total'       => (string) (($cart->price - $cart->discount) * $cart->quantity),
                    ];
                    $tax        += $cart->tax * $cart->quantity;
                    $sub_total  += $cart->price * $cart->quantity;
                }

            }

            if (settingHelper('shipping_fee_type') == 'product_base')
            {
                $shipping_cost += $carts->sum('shipping_cost');
            }

            $shipping_cost  += array_sum(array_column($checkouts,'shipping_cost'));
            $tax            += array_sum(array_column($checkouts,'tax'));
            foreach ($carts as $cart) {
                $discount += $cart->discount * $cart->quantity;
            }
            $coupon_discount = array_sum(array_column($checkouts,'discount'));

            $data = [
                'carts'         => $results,
                'trx_id'        => count($carts) > 0 ? $carts->first()->trx_id : '',
                'calculations'  => [
                    'sub_total'                     => (string)$sub_total,
                    'formatted_sub_total'           => (string)$sub_total,
                    'discount'                      => (string)$discount,
                    'formatted_discount'            => (string)$discount,
                    'shipping_cost'                 => (string)$shipping_cost,
                    'formatted_shipping_cost'       => (string)$shipping_cost,
                    'tax'                           => (string)$tax,
                    'formatted_tax'                 => (string)$tax,
                    'coupon_discount'               => (string)$coupon_discount,
                    'formatted_coupon_discount'     => (string)$coupon_discount,
                    'total'                         => (string)(($sub_total + $tax + $shipping_cost) - ($discount + $coupon_discount)),
                    'formatted_total'               => (string)(($sub_total + $tax + $shipping_cost) - ($discount + $coupon_discount)),
                ],
            ];

            return $this->responseWithSuccess(__('Cart List Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function store(Request $request,ProductInterface $product): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'product_id'    => 'required',
                'quantity'      => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }


            $product = $product->get($request->product_id);

            if (!$product->is_digital && ($product->minimum_order_quantity > $request->quantity)):
                return response()->json([
                    'error' => __('Please order minimum of :quantity quantity', ['quantity' => $product->minimum_order_quantity])
                ]);
            endif;

            if (!$request->trx_id) {
                $request['trx_id'] = Str::random(21);
            }
            else{
                $request['trx_id'] = $request->trx_id;
            }

            $response = $this->cart->addToCart($request, $product,$user);


            DB::commit();

            if (is_string($response) && $response == 'out_of_stock')
            {
                return $this->responseWithError(__('Product is out of stock'), [], null);
            }

            $data = [
                'trx_id' => $request['trx_id']
            ];

            return $this->responseWithSuccess(__('Successfully added to cart'), $data, 200);

        } catch (\Exception $e) {
            DB::rollback();
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'quantity'      => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            DB::beginTransaction();

            $request['id'] = $id;
            $response = $this->cart->updateCart($request);


            DB::commit();

            if (is_string($response) && $response == 'out_of_stock') {
                return $this->responseWithError(__('Product is out of stock'), [], null);

            }
            if (is_array($response) && $response['msg'] == 'min_qty') {
                return $this->responseWithError(__('please_order_minimum_of') . ' '.$response['qty'] .' '.__('Quantity'), [], null);
            }

            DB::commit();
            return $this->responseWithSuccess(__('Successfully Updated'), $response, 200);

        } catch (\Exception $e) {
            DB::rollback();
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        try {
            $this->cart->removeFromCart($id);

            return $this->responseWithSuccess(__('Cart Deleted'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function couponList(CouponInterface $coupon): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'coupons' => CouponResource::collection($coupon->couponPage())
            ];

            return $this->responseWithSuccess(__('Coupons Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function applyCoupon(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $carts = $this->cart->cartList($user);
            $checkouts = $this->cart->checkoutCoupon($carts, ['coupon'],$user);

            $coupon_apply = $this->cart->applyCoupon($request->all(),$user);
            if (is_string($coupon_apply)) {
                return $this->responseWithError($coupon_apply, [], null);
            }
            return $this->responseWithSuccess(__('Coupon Applied'), $coupon_apply, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function findShippingCost(Request $request,CartInterface $cart): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $carts = $this->cart->cartList($user,$request->all());


            $cost = $cart->shippingCostFind($carts, $request->all());

            $data = [
                'shipping_cost'             => $cost,
                'formatted_shipping_cost'   => get_price($cost,$request->curr),
            ];

            return $this->responseWithSuccess(__('Cost Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function appliedCoupons(Request $request)
    {
        try {
            $coupons = $this->cart->appliedCoupons($request->all());
            return $this->responseWithSuccess(__('Applied Coupons'), $coupons, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }
}
