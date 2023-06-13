<?php
namespace App\Repositories\Admin;

use App\Models\Account;
use App\Models\Wallet;
use App\Repositories\Interfaces\Admin\AccountInterface;
use Sentinel;
use Illuminate\Support\Facades\DB;

class AccountRepository implements AccountInterface{

    public function get($id){
        return Account::find($id);
    }
    public function allPaymentType($id)
    {
        return Account::where('user_id',$id->id)->where('status',1)->select('account_type','id')->get();
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $account = Account::where('user_id',Sentinel::getUser()->id)->where('account_type',$request->account_type)->first();

            if(blank($account)):
                $account                               = new Account();
            endif;
            $account->account_type	               = $request->account_type;
            $account->user_id	                   = Sentinel::getUser()->id;
            $account->status                       = 0;

            if($request->account_type == 'bank'):
                $account_details['bank_name']          = $request->bank_name;
                $account_details['owner_name']         = $request->owner_name;
                $account_details['bank_phone_no']      = $request->bank_phone_no;
                $account_details['branch']             = $request->branch;
                $account_details['account_number']     = $request->account_number;
                $account_details['routing_no']         = $request->routing_no;
                $account_details['account_type']       = $request->account_type;
            elseif ($request->account_type == 'paypal'):
                $account_details['paypal_email']       = $request->paypal_email;
            endif;
            $account->account_details	               = $account_details;

            $account->save();
            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function defaultStatusChange($request)
    {
        DB::beginTransaction();
        try {
            $accounts               = Sentinel::getUser()->accounts;

            foreach ($accounts as $account):
                $account->is_default = false;
                $account->save();
            endforeach;

            $account                = $this->get($request['id']);
            $account->is_default    = true;
            $account->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function activeMethod($request)
    {

        DB::beginTransaction();
        try {
            $account            = Account::where('id',$request['id'])->first();
            $account->status    = $request['status'];
            $account->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function allWallets($limit, $request = null){
        return Wallet::where('user_id',authUser($request)->id)->latest()->paginate($limit);
    }

    public function checkCreadentials($account)
    {
        if (blank($account)):
            return false;
        else:
            if ($account->account_details):
                foreach ($account->account_details as $detail):
                    if ($detail == ''):
                        return false;
                    endif;
                endforeach;
            endif;
            return true;
        endif;

    }
}
