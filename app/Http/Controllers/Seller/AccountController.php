<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Repositories\Interfaces\Admin\AccountInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    protected $account;

    public function __construct(AccountInterface $account)
    {
        $this->account = $account;
    }

    public function index()
    {
        $account = Account::where('user_id', Sentinel::getUser()->id)->get();
        $paypal = $account->where('account_type', 'paypal')->first();
        $bank_account = $account->where('account_type', 'bank')->first();
        return view('seller.payment.payment', compact('bank_account', 'paypal'));
    }

    public function updatePaymentAccount(Request $request)
    {
        if ($this->account->update($request)):
            Toastr::success(__('Data Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function defaultStatusChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if ($this->account->defaultStatusChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        endif;
    }

    public function activeMethod(Request $request)
    {
        $account = $this->account->get($request['data']['id']);
        if (blank($account) || !$this->account->checkCreadentials($account)):
            $response['message'] = __('You can active this service when you will configure all credentials');
            $response['title'] = __('Ops..!');
            $response['status'] = 'warning';
            return response()->json($response);
        endif;
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        try   {

            if ($this->account->activeMethod($request['data'])):
                $response['message'] = __('Updated Successfully');
                $response['title'] = __('Success');
                $response['status'] = 'success';
                $response['data'] = 'success';
                return response()->json($response);
            endif;
        } catch (\Exception $e) {
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        }
    }
}
