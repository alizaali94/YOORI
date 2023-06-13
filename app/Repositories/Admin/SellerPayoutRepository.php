<?php

namespace App\Repositories\Admin;

use App\Models\Account;
use App\Models\SellerPayout;
use App\Models\SellerProfile;
use App\Models\Setting;
use App\Models\User;
use App\Models\Wallet;
use App\Repositories\Interfaces\Admin\SellerPayoutInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\ImageTrait;
use Brian2694\Toastr\Facades\Toastr;
use DB;
use http\Env\Request;
use PHPUnit\Exception;
use Sentinel;

class SellerPayoutRepository implements SellerPayoutInterface
{
    use ImageTrait;

    public function get($id)
    {
        return User::find($id);
    }

    public function all()
    {
        return SellerPayout::with('user')->latest();
    }

    public function paginate($limit, $status, $for = '')
    {
        return $this->all()
            ->when($status != null, function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->when($for == 'seller', function ($q) {
                $q->where('user_id', Sentinel::getUser()->id);
            })
            ->paginate($limit);
    }

    public function allPayoutRequest($limit)
    {
        return SellerPayout::whereNotIn('status', ['rejected', 'canceled', 'processed'])->paginate($limit);
    }

    public function allPayoutProcessed($limit)
    {
        return SellerPayout::where('status', 'processed')->paginate($limit);
    }

    public function statusChange($id, $status)
    {
        DB::beginTransaction();
        try {
            $payout = SellerPayout::find($id);

            if ($status == 'rejected'):
                $user = User::find($payout->user_id);
                $user->balance += $payout->amount;
                $user->save();
            endif;

            $payout->status = $status;
            $payout->save();

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function sendPayoutRequest($request)
    {

        DB::beginTransaction();
        try {
            $user               = User::find(Sentinel::getUser()->id);
            if ($user->balance >= $request->amount):
                $user->balance  = priceFormatUpdate($user->balance - $request->amount,settingHelper('default_currency'));
                $user->save();
            else:
                DB::rollback();
                Toastr::error(__('Insufficient balance in your account'));
                return false;
            endif;

            $payout             = new SellerPayout();

            if ($request->account_type_id != 'cash'):
                $account            = Account::where('id', $request->account_type_id)->first();
                $payout->payment_to = $account->account_details;
            elseif ($request->account_type_id == 'cash'):
                $account_details['bank_name']          = $request->account_type_id;
                $account_details['account_type']       = 'cash';
                $payout->payment_to                    = $account_details;
            endif;

            $payout->amount     = priceFormatUpdate($request->amount,settingHelper('default_currency'));
            $payout->user_id    = Sentinel::getUser()->id;
            $payout->message    = $request->message;

            $payout->save();

            DB::commit();
            Toastr::success(__('Request Send Successfully'));
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }
    }

    public function sendPayoutReject($id)
    {
        DB::beginTransaction();
        try {
            $payout         = SellerPayout::find($id);

            if($payout->status != 'pending'):
                DB::rollback();
                Toastr::error(__('Something went wrong, please try again'));
                return false;
            endif;

            $payout->status = 'canceled';
            $payout->save();

            $user           = User::where('id', Sentinel::getUser()->id)->first();
            $user->balance +=  priceFormatUpdate($payout->amount,settingHelper('default_currency'));
            $user->save();

            DB::commit();
            Toastr::success(__('Request Reject Successfully'));
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }

    }

    public function payoutRequestProcessed($request)
    {
        $id                                 = $request->payout_id;
        $payout                             = SellerPayout::where('id', $id)->first();

        try {

            if ($admin_account_details = get_account_details($payout->payment_to['account_type'])){

                $wallet                     = new Wallet;
                $wallet->user_id            = $payout->user_id;
                $wallet->amount             = priceFormatUpdate($payout->amount,settingHelper('default_currency'));
                $wallet->source             = 'payout';
                $wallet->type               = 'expense';
                $wallet->payment_method     = $payout->payment_to['account_type'];
                $wallet->payment_details    = $payout->payment_to;
                $wallet->save();

                $wallet                     = new Wallet;
                $wallet->user_id            = Sentinel::getUser()->id;
                $wallet->amount             = priceFormatUpdate($payout->amount,settingHelper('default_currency'));
                $wallet->source             = 'payout';
                $wallet->type               = 'expense';
                $wallet->payment_method     = $admin_account_details['account_type'];
                $wallet->payment_details    = $admin_account_details;
                $wallet->save();
            }

            $payout->payment_by             = Sentinel::getUser()->user_type;
            $payout->payment_from           = $admin_account_details;
            $payout->status                 = 'processed';
            $payout->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }

    }

    public function allPaymentType()
    {
        $data = array();
        $check_for = [
            'is_paypal_activated',
            'is_stripe_activated',
            'is_sslcommerz_activated',
            'is_paytm_activated',
            'is_2checkout_activated',
            'is_paystack_activated',
            'is_razorpay_activated',
        ];
        foreach ($check_for as $title):
            if (settingHelper($title) == 1):
                $data[] = $title;
            endif;
        endforeach;
        return $data;
    }

}
