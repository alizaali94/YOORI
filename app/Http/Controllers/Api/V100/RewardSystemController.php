<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Models\Reward;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\RewardSystemInterface;
use App\Traits\ApiReturnFormatTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class RewardSystemController extends Controller
{
    use ApiReturnFormatTrait;
    public function myReward(Request $request,RewardSystemInterface $reward): \Illuminate\Http\JsonResponse
    {
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
        try {
            $data = $reward->apiRewardHistory($user->id);
            return $this->responseWithSuccess(__('Wallet Data Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function convertReward(Request $request,RewardSystemInterface $rewardSystem): \Illuminate\Http\JsonResponse
    {
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

        $reward = Reward::with('user')->where('user_id',$user->id)->first();

        if (!$reward):
            return $this->responseWithError(__('Not found'), [], 200);
        endif;

        if ($reward && $request->converted_reward > $reward->rewards):
            return $this->responseWithError(__('You don not have enough rewards'), [], 200);
        endif;

        if ($request->converted_reward < 9):
            return $this->responseWithError(__('Minimum converted rewards should be 10'), [], 200);
        endif;

        try {
            $reward = $rewardSystem->apiConvertReward($request->all(),$user->id,$reward);
            return $this->responseWithSuccess(__('Reward converted Successfully'), $reward, 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Something went wrong, please try again')
            ]);
        }
    }

    public function digitalProductOrders(Request $request, OrderInterface $order): \Illuminate\Http\JsonResponse
    {
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
        try {
            cache()->forget('order_urls');
            $urls = cache('order_urls');
            $data = [];

            if (!$urls) {
                $order_details = $order->digitalProductOrders(10,$user->id);
                foreach ($order_details as $key => $order_detail) {
                    $url = \Illuminate\Support\Facades\URL::temporarySignedRoute('file.download', now()->addMinutes(60), ['u' => authId(), 'od' => $order_detail->id, 'product_file' => $order_detail->product->product_file_id, 'response' => 'yes']);
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
                'success' => true,
                'message' => 'Digital Product Retrieved Successfully',
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


}
