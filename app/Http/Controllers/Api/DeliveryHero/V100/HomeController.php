<?php

namespace App\Http\Controllers\Api\DeliveryHero\V100;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\DeliveryHero\DeliveryHeroInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Traits\ApiReturnFormatTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;


class HomeController extends Controller
{
    use ApiReturnFormatTrait;

    protected $order;
    protected $deliveryHero;

    public function __construct(OrderInterface $order,DeliveryHeroInterface $deliveryHero)
    {
        $this->order            = $order;
        $this->deliveryHero     = $deliveryHero;
    }

    public function homePageData(Request $request): \Illuminate\Http\JsonResponse
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
            $delivery_hero_id             = $user->deliveryHero->id;
            $data['completed']            = $user->deliveryHero->orders->where('delivery_status','delivered')->count();
            $data['canceled']             = $user->deliveryHero->orders->where('delivery_status','canceled')->count();
            $data['pending']              = $user->deliveryHero->orders->whereNotIn('delivery_status',['delivered','canceled'])->count();
            $data['total_collection']     = get_price($user->deliveryHero->total_collection);
            $data['today_collection']     = get_price($this->deliveryHero->getCommission($delivery_hero_id,'today'));
            $data['earning']              = get_price($user->deliveryHero->total_commission);
            $transaction_history          = $this->deliveryHero->transactionHistory($delivery_hero_id,2);

            $formated_transaction_history = [];
            foreach ($transaction_history as $transaction):
                $formated_transaction_history[] = [
                    'order_id'      => $transaction->id,
                    'invoice_no'    => $transaction->code,
                    'amount'        => get_price($transaction->amount),
                    'purpose'       => $transaction->source,
                    'transaction_type'          => $transaction->type == 'income' ? 'credit':'debit',
                    'created_at'    => Carbon::parse($transaction->created_at)->format('d F Y h:i A'),
                ];
            endforeach;

            $data['transaction_history'] = $formated_transaction_history;

            return $this->responseWithSuccess(__('Data Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

}
