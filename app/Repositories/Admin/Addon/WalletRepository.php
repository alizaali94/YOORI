<?php

namespace App\Repositories\Admin\Addon;
use App\Events\PusherNotification;
use App\Models\CommissionHistory;
use App\Models\DeliveryHero;
use App\Models\DeliveryHeroAccount;
use App\Models\OfflineMethod;
use App\Models\User;
use App\Models\Wallet;
use App\Repositories\Admin\CurrencyRepository;
use App\Repositories\Admin\RewardSystemRepository;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\UserRepository;
use App\Traits\ImageTrait;
use App\Traits\PaymentTrait;
use DB;
use Illuminate\Support\Str;
use Sentinel;

class WalletRepository implements WalletInterface
{
    use ImageTrait, PaymentTrait;

    public function get($id)
    {
        return Wallet::find($id);
    }

    public function all()
    {
        return Wallet::latest();
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $wallet = new Wallet();
            $wallet->user_id            = $request['user_id'];
            $wallet->order_id           = $request['order_id'] ?? null;
            $wallet->amount             = $request['amount'];
            $wallet->source             = $request['source'];
            $wallet->type               = $request['type'];
            $wallet->status             = $request['status'];
            $wallet->payment_method     = $request['payment_method'] ?? '';
            $wallet->payment_details    = $request['payment_details'] ?? [];
            $wallet->transaction_id     = $request['transaction_id'] ?? '';
            $image_response             = array_key_exists('image',$request) ? $this->saveImage($request['image'], 'single_file') : [];
            $wallet->image              = @$image_response['images'] ?? [];
            $wallet->save();
            DB::commit();
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function paginate($limit, $for = '', $request)
    {
        return $this->all()
            ->when(Sentinel::getUser()->user_type != 'admin' || Sentinel::getUser()->user_type == 'staff', function ($q){
                $q->where('user_id', Sentinel::getUser()->id);
            })
            ->when($for != '', function ($q) use ($for){
                $q->where('source' , $for);
            })
            ->when($request->q != null, function ($q) use ($request){
                $q->where('amount', 'LIKE', '%'.$request->q.'%');
                $q->orWhere('status', 'LIKE', '%'.$request->q.'%');
                $q->orWhere('payment_method', 'LIKE', '%'.$request->q.'%');
                $q->orWhere('transaction_id', 'LIKE', '%'.$request->q.'%');

                $q->orWhereHas('user', function ($qu) use ($request) {
                    $qu->where('email', 'LIKE', '%' . $request->q . '%');
                    $qu->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%" . $request->q . "%");
                });
            })
            ->when($request->s != null, function ($query) use ($request){
                $query->where('status', $request->s);
            })->paginate($limit);
    }

    public function manageDeliveredOrder($order)
    {
        $this->calculateCommission($order);
        if ($order->deliveryHero):
            $this->deliveryHeroCommissionStore($order);
        endif;
        if (addon_is_activated('reward')):
            $reward_repo = new RewardSystemRepository();

            $reward_repo->createReward($order);
        endif;
    }
    public function managePlacedOrder($order, $data)
    {
        $this->insertPayment($order, $data);
    }
    public function manageCanceledOrder($order)
    {
        $this->removePayment($order, 'order_canceled');
    }

    public function sellerBalanceStore($data, $source)
    {
        $user           = new UserRepository();
        $seller         = $user->get($data['user_id']);

        $seller->balance += $data['amount'];
        $seller->save();
        $this->store($data);
    }

    public function customerBalanceStore($data, $source)
    {
        $user               = new UserRepository();

        if ($source != 'wallet_recharge'):
            $customer           = $user->get($data['user_id']);
            $customer->balance += $data['amount'];
            $customer->save();
        endif;

        $this->store($data);
    }

    public function deliveryHeroCommissionStore($order)
    {
        //get hero
        $delivery_hero  = $order->deliveryHero;
        //get user
        if (!blank($delivery_hero)):
            $user           = $delivery_hero->user;

            if(settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission' || settingHelper('delivery_hero_payment_type') == 'salary_and_commission'):

                $delivery_hero->total_commission += $delivery_hero->commission;

                //delivery_hero_commission record
                $delivery_hero_account                      = new DeliveryHeroAccount();
                $delivery_hero_account->order_id            = $order->id;
                $delivery_hero_account->delivery_hero_id    = $delivery_hero->id;
                $delivery_hero_account->source              = 'delivery_hero_commission';
                $delivery_hero_account->type                = 'income';
                $delivery_hero_account->amount              = $delivery_hero->commission;
                $delivery_hero_account->save();

            endif;

            if($order->payment_type == 'cash_on_delivery' && $order->payment_status == 'unpaid') :
                //delivery_hero_commission record
                $delivery_hero_account                      = new DeliveryHeroAccount();
                $delivery_hero_account->order_id            = $order->id;
                $delivery_hero_account->delivery_hero_id    = $delivery_hero->id;
                $delivery_hero_account->source              = 'cod_collected';
                $delivery_hero_account->type                = 'income';
                $delivery_hero_account->amount              = $order->total_payable;
                $delivery_hero_account->save();

                $user->balance                              += $order->total_payable;
                $delivery_hero->total_collection            += $order->total_payable;
                $order->payment_status                      = 'paid';
            endif;

            $user->save();
            $delivery_hero->save();
            $order->save();
        endif;
    }

    public function adminBalanceStore($data, $source)
    {
        $user           = new UserRepository();
        $owner          = $user->get($data['user_id']);
        $owner->balance += $data['amount'];
        $owner->save();
        $this->store($data);
    }

    public function adminBalanceRemove($data, $source)
    {
        $user           = new UserRepository();
        $owner          = $user->get($data['user_id']);

        $owner->balance -= $data['amount'];
        $owner->save();

        $this->store($data);
    }

    public function customerBalanceRemove($data, $source)
    {
        $user           = new UserRepository();
        $customer       = $user->get($data['user_id']);

        $customer->balance -= $data['amount'];
        $customer->save();

        $this->store($data);
    }

    public function sellerBalanceRemove($order, $source)
    {
        // TODO: Implement sellerBalanceRemove() method.
    }

    public function deliveryHeroCommissionRemove($order)
    {
        // TODO: Implement deliveryHeroCommissionRemove() method.
    }

    public function calculateCommission($order)
    {
        $commission_percentage  = 0;
        $admin_commission       = 0;
        $seller_earning         = 0;

        foreach ($order->orderDetails as $key=> $orderDetail):
            if ($order->seller_id != 1) :
                if (settingHelper('category_commission_status')) :
                    $commission_percentage = $orderDetail->product->category->commission;
                elseif (settingHelper('seller_commission_status')) :
                    $commission_percentage = settingHelper('seller_commission') != '' ? settingHelper('seller_commission') : 0;
                endif;

                $commission          = (($orderDetail->price * $commission_percentage) / 100) * $orderDetail->quantity;
                $seller_earning     += (((($orderDetail->price + $orderDetail->tax) - ($orderDetail->discount + $orderDetail->coupon_discount['discount'])) * $orderDetail->quantity)  - $commission);
                $admin_commission   += $commission;
            endif;
        endforeach;

        if ($order->seller_id != 1) :
            $data['user_id']            = 1;
            $data['order_id']           = $order->id;
            $data['amount']             = $admin_commission;
            $data['source']             = 'order_commission';
            $data['type']               = 'income';
            $data['status']             = 'approved';
            $data['payment_method']     = 'system_automated';
            $data['payment_details']    = ['type'=> 'system_automated'];

            $this->adminBalanceStore($data, 'commission');

            $data['user_id']            = $order->seller_id;
            $data['order_id']           = $order->id;
            $data['amount']             = $admin_commission;
            $data['source']             = 'order_commission';
            $data['type']               = 'expense';
            $data['status']             = 'approved';
            $data['payment_method']     = 'system_automated';
            $data['payment_details']    = ['type'=> 'system_automated'];
            $this->sellerBalanceStore($data, 'order_delivery');

            $data['user_id']            = $order->seller_id;
            $data['order_id']           = $order->id;
            $data['amount']             = $seller_earning;
            $data['source']             = 'order_delivery';
            $data['type']               = 'income';
            $data['status']             = 'approved';
            $data['payment_method']     = 'system_automated';
            $data['payment_details']    = ['type'=> 'system_automated'];
            $this->sellerBalanceStore($data, 'order_delivery');

            $commission_history                     = new CommissionHistory();
            $commission_history->order_id           = $order->id;
            $commission_history->seller_id          = $order->seller_id;
            $commission_history->admin_commission   = $admin_commission;
            $commission_history->seller_earning     = $seller_earning;
            $commission_history->save();


        endif;

        $order->commission_calculated = 1;
        $order->save();
    }

    public function insertPayment($order, $request)
    {
        if (array_key_exists('payment_type', $request)):
            $payment_details    = $order->payment_details == "[]" ? [] : $order->payment_details;

            if (array_key_exists('paid_to_delivery_man', $request) && $request['payment_type'] == 'cash'):

                //delivery hero collection record
                $delivery_hero  = $order->deliveryHero;
                $user           = $delivery_hero->user;

                $delivery_hero_account                      = new DeliveryHeroAccount();
                $delivery_hero_account->order_id            = $order->id;
                $delivery_hero_account->delivery_hero_id    = $delivery_hero->id;
                $delivery_hero_account->source              = 'cod_collected';
                $delivery_hero_account->type                = 'income';
                $delivery_hero_account->amount              = $order->total_payable;
                $delivery_hero_account->save();

                $user->balance                              += $order->total_payable;
                $delivery_hero->total_collection            += $order->total_payable;
                $order->payment_status                      = 'paid';
                $user->save();
            else:
                $data['user_id']            = authUser() && Sentinel::getUser()->user_type == 'staff' ? Sentinel::getUser()->id : 1;
                $data['order_id']           = $order->id;
                $data['amount']             = $order->total_amount;
                $data['source']             = 'order_total_amount';
                $data['type']               = 'income';
                $data['status']             = 'approved';
                $data['payment_details']    = $payment_details;
                $this->adminBalanceStore($data, 'order_total_amount');

                $data['user_id']            = authUser() && Sentinel::getUser()->user_type == 'staff' ? Sentinel::getUser()->id : 1;
                $data['order_id']           = $order->id;
                $data['amount']             = $order->shipping_cost;
                $data['source']             = 'order_shipping_cost';
                $data['type']               = 'income';
                $data['status']             = 'approved';
                $data['payment_details']    = $payment_details;
                $this->adminBalanceStore($data, 'order_shipping_cost');
            endif;

            if ($request['payment_type'] == 'wallet'):
                $data['user_id']            = $order->user_id;
                $data['order_id']           = $order->id;
                $data['amount']             = $order->total_amount;
                $data['source']             = 'order_total_amount';
                $data['type']               = 'expense';
                $data['status']             = 'approved';
                $data['payment_method']     = 'wallet';
                $data['payment_details']    = $payment_details;
                $this->customerBalanceRemove($data, 'order_total_amount');

                $data['user_id']            = $order->user_id;
                $data['order_id']           = $order->id;
                $data['amount']             = $order->shipping_cost;
                $data['source']             = 'order_shipping_cost';
                $data['type']               = 'expense';
                $data['status']             = 'approved';
                $data['payment_method']     = 'wallet';
                $data['payment_details']    = $payment_details;
                $this->customerBalanceRemove($data, 'order_shipping_cost');
            endif;
        endif;
    }

    public function removePayment($order, $source)
    {
        $data['payment_method']         = 'system_automated';
        //remove admin amount
        $data['user_id']                = 1;
        $data['order_id']               = $order->id;
        $data['amount']                 = $order->total_amount;
        $data['source']                 = $source == 'order_canceled' ? 'order_total_amount': $source;
        $data['type']                   = 'expense';
        $data['status']                 = 'approved';
        $data['payment_details']        = ['type'=> 'system_automated'];
        $this->adminBalanceRemove($data, $source);

        //remove shipping charges
        $data['user_id']                = 1;
        $data['order_id']               = $order->id;
        $data['amount']                 = $order->shipping_cost;
        $data['source']                 = $source == 'order_canceled' ? 'order_shipping_cost': $source;
        $data['type']                   = 'expense';
        $data['status']                 = 'approved';
        $data['payment_details']                = ['type'=> 'system_automated'];
        $this->adminBalanceRemove($data, $source);

        //remove shipping charges
        $data['user_id']                = $order->user_id;
        $data['order_id']               = $order->id;
        $data['amount']                 = $order->shipping_cost;
        $data['source']                 = $source == 'order_canceled' ? 'order_shipping_cost': $source;
        $data['type']                   = 'income';
        $data['status']                 = 'approved';
        $data['payment_details']        = ['type'=> 'system_automated'];
        $this->customerBalanceStore($data, $source);

        $data['user_id']                = $order->user_id;
        $data['order_id']               = $order->id;
        $data['amount']                 = $order->total_amount;
        $data['source']                 = $source == 'order_canceled' ? 'order_total_amount': $source;
        $data['type']                   = 'income';
        $data['status']                 = 'approved';
        $data['payment_details']        = ['type'=> 'system_automated'];
        $this->customerBalanceStore($data, $source);
    }

    public function walletRecharge($data)
    {
        $source = 'wallet_recharge';
        $amount = array_key_exists('total',$data) ? $data['total'] : $data['amount'];
        $payment_details = [];

        if (array_key_exists('id', $data))
        {
            $source = 'offline_recharge';
            $offline_payment            = OfflineMethod::find($data['id']);
            $payment_details['name']    = $offline_payment->name;
            $payment_details['image']   = $offline_payment->image;
            $payment_details['type']    = $offline_payment->type;
        }
        else{
            $payment_details = $this->methodCheck($data,[]);
        }

        $currency = new CurrencyRepository();

        if (session()->has('currency')) {
            $user_currency = session()->get('currency');
        } else {
            $user_currency = settingHelper('default_currency');
        }

        $active_currency = $currency->get($user_currency);
        //remove shipping charges
        $wallet['user_id']              = authId();
        $wallet['order_id']             = null;
        $wallet['amount']               = $amount / $active_currency->exchange_rate;
        $wallet['source']               = $source;

        if (array_key_exists('payment_type',$payment_details) && $payment_details['payment_type'] == 'aamarpay') {
            $token = \Illuminate\Support\Facades\DB::table('payment_method')->where('trx_id',$data['opt_b'])->first();
            $data['payment_type']   = 'aamarpay';
            $wallet['user_id']      = $token->is_guest;
            $wallet['amount']       = $token->amount;
        }

        $wallet['type']                 = 'income';
        $wallet['status']               = 'pending';
        $wallet['image']                = array_key_exists('file',$data) ? $data['file'] : [];
        $wallet['transaction_id']       = array_key_exists('transaction_id',$data) ? $data['transaction_id'] : null;
        $wallet['payment_method']       = $data['payment_type'];
        $wallet['payment_details']      = $payment_details;

        $this->customerBalanceStore($wallet, 'wallet_recharge');

        sendNotification(Sentinel::findById(1),"New Wallet Request Is Created.",'success',"wallet/recharge-requests",'');

        return $payment_details;
    }

    public function walletHistory()
    {
        return Wallet::where('user_id',authId())->latest()->paginate(15);
    }

    public function userBalance()
    {
        return Wallet::where('user_id',authId())->where('source','wallet_recharge')->where('type','income')->where('status','approved')->sum('amount');
    }

    public function walletApproveRequest($id)
    {
        DB::beginTransaction();
        try{
            $wallet         = Wallet::find($id);
            $pre_status     = $wallet->status;
            if($pre_status == 'pending' || $pre_status == 'rejected'):
                $user               = User::find($wallet->user_id);
                $user->balance      += $wallet->amount;
                $user->save();
            endif;
            $wallet->status = 'approved';
            $wallet->save();

            sendNotification(Sentinel::findById($wallet->user_id),"Your Wallet Recharge Request Is Approved.",'success',"my-wallet",'');

            DB::commit();
            return true;
        }catch(Exception $e){

            DB::rollBack();
            return false;
        }
    }

    public function walletRejectRequest($id)
    {
        DB::beginTransaction();
        try{
            $wallet         = Wallet::find($id);
            $pre_status     = $wallet->status;
            if($pre_status == 'approved'):
                $user               = User::find($wallet->user_id);
                $user->balance      -= $wallet->amount;
                $user->save();
            endif;
            $wallet->status = 'rejected';
            $wallet->save();

            sendNotification(Sentinel::findById($wallet->user_id),"Your Wallet Recharge Request Is Rejected.",'success',"my-wallet",'');

            DB::commit();
            return true;
        }catch(Exception $e){

            DB::rollBack();
            return false;
        }
    }
}
