<?php

namespace App\Repositories\Admin\DeliveryHero;

use App\Models\DeliveryHero;
use App\Models\DeliveryHeroAccount;
use App\Models\Order;
use App\Models\User;
use App\Models\Wallet;
use App\Repositories\Admin\Addon\WalletRepository;
use App\Repositories\Interfaces\Admin\DeliveryHero\DeliveryHeroInterface;
use App\Traits\ImageTrait;
use App\Traits\RandomStringTrait;
use App\Traits\SlugTrait;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use DB;
use Illuminate\Support\Facades\Schema;
use Sentinel;

class DeliveryHeroRepository implements DeliveryHeroInterface
{
    use SlugTrait, ImageTrait, RandomStringTrait;

    use ImageTrait;

    public function all()
    {
        return User::where('user_type','delivery_hero')->latest();
    }

    public function paginate($request, $limit)
    {
        return User::where('user_type','delivery_hero')
            ->when($request->q != null, function ($query) use ($request){
                $query->where(function ($q) use ($request){
                    $q->where('email', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere('phone', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%".$request->q."%");
                });
            })
            ->when($request->ph != null, function ($query) use ($request){
                $query->whereHas('deliveryHero', function ($q) use ($request){
                    $q->where('pickup_hub_id', $request->ph);
                });
            })
            ->latest()->paginate($limit);

    }

    public function get($id)
    {
        return User::find($id);
    }

    public function getHero($id)
    {
        return DeliveryHero::find($id);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {

            if (!blank($request->file('image'))) :
                $requestImage           = $request->file('image');
                $image_response         = $this->saveImage($requestImage, '_staff_');
            endif;
            if (!blank($request->file('driving_licence_image'))) :
                $requestImage2          = $request->file('driving_licence_image');
                $image_response_licence = $this->saveImage($requestImage2, '_driving_licence_image_');
            endif;
            $user = new User();
            $user->first_name                       = $request->first_name;
            $user->last_name                        = $request->last_name;
            $user->email                            = $request->email;
            $user->phone                            = $request->phone;
            $user->user_type                        = 'delivery_hero';
            $user->password                         = bcrypt($request->password);
            $user->permissions                      = [];
            $user->images                           = $image_response['images'] ?? [];
            $user->save();

            $activation         = Activation::create($user);
            Activation::complete($user, $activation->code);

            if($request->balance != null || $request->balance != 0):
                $wallet                     = new Wallet();
                $wallet->user_id            = $user->id;
                $wallet->amount             = $request->balance == '' ? 0 : $request->balance;
                $wallet->source             = 'opening_balance';
                $wallet->save();
            endif;

            $deliveryHero                           = new DeliveryHero();
            $deliveryHero->user_id                  = $user->id;
            $deliveryHero->pickup_hub_id            = $request->pickup_hub_id != null ? $request->pickup_hub_id : null;
            $deliveryHero->driving_licence          = $request->driving_licence;

            $deliveryHero->commission               = $request->commission == '' ? 0 : priceFormatUpdate($request->commission,settingHelper('default_currency'));
            $deliveryHero->salary                   = $request->salary == '' ? 0 : priceFormatUpdate($request->salary,settingHelper('default_currency'));

            $deliveryHero->driving_licence_image    = $image_response_licence['images'] ?? [];
            $deliveryHero->country_id               = $request->country_id;
            $deliveryHero->state_id                 = $request->state_id;
            $deliveryHero->city_id                  = $request->city_id == '' ? null : $request->city_id;
            $deliveryHero->address                  = $request->address;

            $deliveryHero->save();

            Toastr::success(__('Created Successfully'));
            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }

    }

    public function update($request)
    {
        DB::beginTransaction();
        try {

            $user = $this->get($request->id);

            if (!blank($request->file('image'))) :
                $requestImage   = $request->file('image');

                $this->deleteImage($user->images);
                $image_response = $this->saveImage($requestImage, '_staff_');
                $user->images   = $image_response['images'];
            endif;

            $user->first_name   = $request->first_name;
            $user->last_name    = $request->last_name;
            $user->email        = $request->email;
            $user->phone        = $request->phone;
            if ($request->password != ""):
                $user->password = bcrypt($request->password);
            endif;
            $user->permissions  = [];
            $user->save();

            $deliveryHero                           = DeliveryHero::where('user_id',$user->id)->first();

            if(blank($deliveryHero)):
                $deliveryHero                       = new DeliveryHero();
            endif;

            if (!blank($request->file('driving_licence_image'))) {
                $requestImage   = $request->file('driving_licence_image');

                $this->deleteImage($deliveryHero->driving_licence_image);
                $image_response = $this->saveImage($requestImage, '_licence_');
                $deliveryHero->driving_licence_image   = $image_response['images'];
            }

            $deliveryHero->user_id                  = $user->id;
            $deliveryHero->pickup_hub_id            = $request->pickup_hub_id != null ? $request->pickup_hub_id : null;
            $deliveryHero->driving_licence          = $request->driving_licence;
            $deliveryHero->commission               = priceFormatUpdate($request->commission,settingHelper('default_currency'));
            $deliveryHero->salary                   = priceFormatUpdate($request->salary,settingHelper('default_currency'));
            $deliveryHero->country_id               = $request->country_id;
            $deliveryHero->state_id                 = $request->state_id;
            $deliveryHero->city_id                  = $request->city_id;
            $deliveryHero->address                  = $request->address;

            $deliveryHero->save();

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function ban($id){

        DB::beginTransaction();
        try {
            $user = $this->get($id);
            $user->is_user_banned = $user->is_user_banned == 0 ? 1 : 0;
            $user->save();

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function cancelRequests($request, $limit)
    {
        return Order::with('deliveryHero')->where('cancel_request', 1)->paginate($limit);
    }
    public function commissionHistory($request, $limit)
    {
        return DeliveryHeroAccount::with('deliveryHero.user')->where('source','delivery_hero_commission')->latest()->paginate($limit);
    }
    public function depositHistory($request, $limit)
    {
        return DeliveryHeroAccount::with('deliveryHero.user')->where('source','account_deposit')->latest()->paginate($limit);
    }
    public function collectionHistory($request, $limit)
    {
        return DeliveryHeroAccount::with('deliveryHero.user')->where('source','cod_collected')->latest()->paginate($limit);
    }
    public function collectFormDeliveryHero($request)
    {
        DB::beginTransaction();
        try {
            $deliveryHero   = $this->getHero($request->delivery_hero_id);
            $user           = $deliveryHero->user;
            $user->balance  = $user->balance - $request->amount;
            $user->save();

            $hero_account                     = new DeliveryHeroAccount();
            $hero_account->delivery_hero_id    = $request->delivery_hero_id;
            $hero_account->source             = 'account_deposit';
            $hero_account->type               = 'expense';
            $hero_account->amount             = priceFormatUpdate($request->amount,settingHelper('default_currency'));
            $hero_account->save();

            //save that amount to processed by use account
            $wallet = new WalletRepository();
            $data['user_id']            = Sentinel::getUser()->id;
            $data['order_id']           = null;
            $data['amount']             = priceFormatUpdate($request->amount,settingHelper('default_currency'));
            $data['source']             = 'delivery_man_account_deposit';
            $data['type']               = 'income';
            $data['status']             = 'approved';
            $data['payment_method']     = 'system_automated';
            $data['payment_details']    = ['type'=> 'system_automated'];

            $wallet->adminBalanceStore($data, 'account_deposit');

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function salaryToDeliveryHero($request)
    {
        DB::beginTransaction();
        try {
            $user                 = User::find($request->user_id);

            if($request->paid_amount != null || $request->paid_amount != 0):
                $hero_account                     = new DeliveryHeroAccount();
                $hero_account->delivery_hero_id   = $user->deliveryHero->id;
                $hero_account->source             = 'salary';
                $hero_account->type               = 'income';
                $hero_account->amount             = priceFormatUpdate($request->paid_amount,settingHelper('default_currency'));
                $hero_account->save();
            endif;
            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    //delivery hero api
    public function getCommission($delivery_hero_id, $day)
    {
        return DeliveryHeroAccount::where('delivery_hero_id',$delivery_hero_id)
            ->where('source','delivery_hero_commission')
            ->when($day=='today',function($q){
                $q->whereDate('created_at', Carbon::today());
            })
            ->when($day=='yesterday',function($q){
                $q->whereDate('created_at', Carbon::yesterday());
            })

            ->where('source','delivery_hero_commission')
            ->sum('amount');
    }

    public function transactionHistory($delivery_hero_id, $limit)
    {
        return DeliveryHeroAccount::join('orders','delivery_hero_accounts.order_id', '=',  'orders.id')
            ->where('delivery_hero_accounts.delivery_hero_id',$delivery_hero_id)
            ->select('orders.id','orders.code','delivery_hero_accounts.amount','delivery_hero_accounts.created_at','delivery_hero_accounts.source','delivery_hero_accounts.type')
            ->latest()
            ->when($limit != 'all', function ($q) use ($limit){
                $q->take($limit);
            })
            ->when($limit == 'all', function ($q) use ($limit){
                $q->paginate(get_pagination('api_paginate'));
            })
            ->get();
    }

}
