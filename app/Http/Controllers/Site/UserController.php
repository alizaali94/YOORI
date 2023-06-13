<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ResetPasswordPostRequest;
use App\Http\Resources\AdminResource\PosOfflineMethodResource;
use App\Http\Resources\FollowShop;
use App\Http\Resources\SiteResource\ShopPaginateResource;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use App\Repositories\Interfaces\Admin\Marketing\CouponInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Site\AddressInterface;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\SendMailTrait;
use Carbon\Carbon;
use Cartalyst\Sentinel\Laravel\Facades\Reminder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Sentinel;
use App\Models\User;

class UserController extends Controller
{
    use SendMailTrait;
    public function changePassword(Request $request): \Illuminate\Http\JsonResponse
    {
        if (isDemoServer()):
            return response()->json([
                'error' => __('This function is disabled in demo server.')
            ]);
        endif;
        $request->validate([
            'current_password'       => 'required_if:is_password_set,==,1|min:6|max:32',
            'new_password'           => 'required|min:6|max:32|required_with:confirm_password|same:confirm_password',
            'confirm_password'       => 'required|min:6|max:32',
        ],
        [
            'current_password.required_if' => 'current password field is required'
        ]);

        try {
            $user = authUser();
            if (Hash::check($request->new_password, $user->password)) {
                return response()->json([
                    'error' => __('New password cannot be same as current password')
                ]);
            }
            if(Hash::check($request->current_password, $user->password)){
            $user->password = bcrypt($request->new_password);
            $user->last_password_change = Carbon::now();
            $user->save();
                return response()->json([
                    'success' => __('Password Changed Successfully'),
                ]);
            }elseif ($request->is_password_set == 0){
                $user->password = bcrypt($request->new_password);
                $user->is_password_set = 1;
                $user->save();
                return response()->json([
                    'success' => __('Password Set Successfully'),
                     'data' => $user,
                ]);
            } else{
                return response()->json([
                    'error' => __('Current Password does not match with old password')
                ]);
            }

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function resetPassword(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'email' => 'required|exists:users,email'
        ]);
        try {
            $user = User::whereEmail($request->email)->first();

            $remainder = Reminder::create($user);
            $this->sendmail($request->email, 'Forgot Password', $user, 'email.auth.forgot-password-email', url('/') . '/reset/' . $request->email . '/' . $remainder->code);
            return response()->json([
                'success' => __('You have received an email for reset your password')
            ]);
        } catch (\Exception $e) {
            DD($e);
            return response()->json([
                'error' => __('Ops..!')
            ]);
        }
    }

    public function getResetActivation($email, $resetCode)
    {
        $user       = User::byEmail($email);

        if ($reminder = Reminder::exists($user, $resetCode)) :
            return redirect()->route('home');
        else :
            return redirect()->route('login');
        endif;
    }

    public function createNewPassword(ResetPasswordPostRequest $request)
    {

        $user       = User::byEmail($request->email);
        if ($reminder = Reminder::exists($user, $request->resetCode)) {

            Reminder::complete($user, $request->resetCode, $request->newPassword);
//            sendMail($user, '', 'reset_password', $request->newPassword);
            $this->sendmail($request->email, 'Forgot Password', $user, 'email.auth.forgot-password-email', url('/') . '/reset/' . $request->email . '/' . $reminder->code);


            return response()->json([
                'success' => __('Successfully Password Changed')
            ]);
        } else {
            return redirect()->route('login');
        }
    }

    public function coupons(CouponInterface $coupon): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'coupons' => $coupon->couponPage()
            ];
            return response()->json($data);
        } catch (\Exception $e) {

            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function editProfile(AddressInterface $address): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'addresses' => $address->userAddress(),
            ];
            return response()->json($data);

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function updateProfile(Request $request,UserInterface $userInterface): \Illuminate\Http\JsonResponse
    {
        if (isDemoServer()):
            return response()->json([
                'error' => __('This function is disabled in demo server.')
            ]);
        endif;
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required_without:email',
            'gender' => 'required',
            'date_of_birth' => 'required',
        ]);
        try {
            if($request->phone):
                $request['phone'] = str_replace(' ','',$request->phone);
            endif;

            $userInterface->update($request);

            $data['user'] = User::find(authId());
            $data['success'] = __('Profile Updated Successfully');

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function walletData(CurrencyInterface $currency,OfflineMethodInterface $offlineMethod): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'indian_currency'   => $currency->currencyByCode('INR'),
                'offline_methods'   => addon_is_activated('offline_payment') ? PosOfflineMethodResource::collection($offlineMethod->activeMethods()) : [],
                'jazz_data'         => [],
                'jazz_url'          => config('jazz_cash.TRANSACTION_POST_URL'),
                'xof'               => $currency->currencyByCode('XOF'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function walletRecharge(Request $request,WalletInterface $wallet)
    {
        try {
            if ($request->user_id && !authUser())
            {
                $user = User::find($request->user_id);
                Sentinel::login($user);
            }

            $data = [
                'success' => 'Recharge Successful',
                'wallet' => $wallet->walletRecharge($request->all()),
                'recharges' => $wallet->walletHistory(),
                'balance' => $wallet->userBalance()
            ];

            if ($request->token)
            {
                return redirect()->route('api.payment.success');
            }

            if (!request()->ajax())
            {
                return redirect('my-wallet');
            }
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function walletHistory(WalletInterface $wallet): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'recharges' => $wallet->walletHistory(),
                'balance' => $wallet->userBalance()
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function followShop(Request $request,SellerInterface $sellers)
    {
        try {
            $sellers->followSeller($request->id);

            $data = [
                'follower' => FollowShop::collection($sellers->shop()
                    ->withCount('products')
                    ->whereHas('users', function($q){
                        $q->where('user_id',authId());
                    })
                    ->where('verified_at','!=',null)
                    ->orderBy('products_count','desc')
                    ->latest()
                    ->get()),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }
    public function userFollowedShop(SellerInterface $sellers)
    {
        try {
            $data = [
                'sellers' => new ShopPaginateResource($sellers->shop()
                    ->withCount('products')
                    ->whereHas('users', function($q){
                        $q->where('user_id',authId());
                    })
                    ->where('verified_at','!=',null)
                    ->orderBy('products_count','desc')
                    ->latest()
                    ->paginate(12))
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function removeFollow(Request $request,SellerInterface $seller)
    {
        try {
            $data = [
                'follower' => $seller->unfollowSeller($request->id),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }
}
