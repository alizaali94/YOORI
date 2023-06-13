<?php

namespace App\Repositories\Admin;

use App\Http\Resources\RewardHistoryResource;
use App\Models\Product;
use App\Models\Reward;
use App\Models\RewardDetails;
use App\Models\SellerProfile;
use App\Repositories\Admin\Addon\WalletRepository;
use App\Repositories\Interfaces\Admin\RewardSystemInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Support\Facades\DB;

class RewardSystemRepository implements RewardSystemInterface{
    use ApiReturnFormatTrait;

    public function all()
    {
        return Product::with('productLanguages','user')->where('reward', '!=',0.00)->latest();
    }

    public function byUser($id,$limit)
    {
        return RewardDetails::with('product')->where('reward_id',$id)->paginate($limit);
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }
    public function get($id)
    {
        return Reward::where('user_id',$id)->first();
    }


    public function setRewardBy($request)
    {
        DB::beginTransaction();
        try {
            if($request->type == 'product' && $request->product_id != ''):
            foreach ($request->product_id as $product) {
                $each_product = Product::where('id',$product)->first();
                $each_product->reward = $request->reward;
                $each_product->save();

                DB::commit();
                return true;
            }
            elseif($request->type == 'seller' && $request->seller_id != ''):
                $seller_id       = SellerProfile::find($request->seller_id)->user_id;
                $seller_products = Product::where('user_id',$seller_id)->get();
                foreach ($seller_products as $product) {
                    $product->reward = $request->reward;
                    $product->save();
                }

                DB::commit();
                return true;
            elseif($request->type == 'category' && $request->c != ''):
                $category_ids = [];
                if($request->has('sub_category')):
                    $category_ids   = \App\Utility\CategoryUtility::getMyAllChildIds($request->c);
                endif;
                $category_ids[] = (int)$request->c;
                $category_products = Product::whereIn('category_id',$category_ids)->get();
                foreach ($category_products as $product) {
                    $product->reward = $request->reward;
                    $product->save();
                }

                DB::commit();
                return true;
            endif;
        }catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function updateReward($request)
    {
        DB::beginTransaction();
        try {
            $product = Product::where('id',$request->product_id)->first();
            $product->reward = $request->reward;
            $product->save();

            DB::commit();
            return true;
        }catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }


    public function rewardUser($limit)
    {
        return Reward::with('user')->latest()->paginate($limit);
    }

    public function createReward($order)
    {
        $reward = Reward::where('user_id',$order->user_id)->first();

        if (blank($reward))
        {
            $reward = Reward::create([
                'user_id' => $order->user_id,
                'rewards' => 0,
            ]);
        }

        $total_reward = 0;

        $reward_details = [];
        $order_details  = $order->orderDetails;

        foreach ($order_details as $key=> $order_detail)
        {
            $product        = $order_detail->product;
            $reward_point   = $product ? $product->reward : 0;
            $total_reward   += $reward_point * $order_detail->quantity;
            if ($reward_point > 0)
            {
                $reward_details[$key]   =[
                    'reward_id'         => $reward->id,
                    'product_id'        => @$product->id,
                    'product_qty'       => $order_detail->quantity,
                    'reward'            => $reward_point * $order_detail->quantity,
                    'created_at'        => now(),
                    'updated_at'        => now(),
                ];
            }

        }

        RewardDetails::insert($reward_details);

        $reward->rewards += $total_reward;
        $reward->save();

        return $reward;
    }

    public function convertReward($data)
    {
        $reward                  = Reward::where('user_id',authId())->first();
        $reward->rewards        -= $data['reward'];
        $reward->last_converted  = now();
        $reward->save();

        $reward->user->balance  += $data['amount'];
        $reward->user->save();

        $wallet_repo             = new WalletRepository();

        $data                    = [
            'user_id'   => authId(),
            'amount'    => $data['amount'],
            'source'    => 'reward_point_convert',
            'type'      => 'income',
            'status'    => 'approved',
            'payment_method'     => 'system_automated',
            'payment_details'    => ['type'=> 'system_automated'],
        ];

        $wallet_repo->store($data);

        return $reward;
    }

    public function apiConvertReward($data,$id,$reward)
    {

        $amount = $data['converted_reward'] / settingHelper('reward_convert_rate');

        $reward->rewards        -= $data['converted_reward'];
        $reward->last_converted  = now();
        $reward->save();

        $reward->user->balance  += $amount;
        $reward->user->save();

        $wallet_repo             = new WalletRepository();

        $data                    = [
            'user_id'   => $id,
            'amount'    => $amount,
            'source'    => 'reward_point_convert',
            'type'      => 'income',
            'status'    => 'approved',
            'payment_method'     => 'system_automated',
            'payment_details'    => ['type'=> 'system_automated'],
        ];

        $wallet_repo->store($data);
        $data = [
            'rewards' => $reward->rewards,
            'balance' => $reward->user->balance,
        ];
        return $data;
    }

    public function rewardHistory(): array
    {
        $reward = Reward::where('user_id',authId())->first();

        $reward_details = '';

        if ($reward)
        {
            $reward_details = RewardDetails::with('product:id')->where('reward_id',$reward->id)->paginate(10);
        }

        return [
            'reward' => $reward,
            'reward_details' => $reward_details,
        ];
    }

    public function apiRewardHistory($id): array
    {
        $reward = Reward::where('user_id',$id)->first();

        $reward_details = '';

        if ($reward)
        {
            $reward_details = RewardHistoryResource::collection(RewardDetails::with('product:id')->where('reward_id',$reward->id)->paginate(10));
        }
        return [
            'reward' => $reward,
            'reward_details' => $reward_details,
        ];
    }
}
