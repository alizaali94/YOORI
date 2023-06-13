<?php

namespace App\Http\Controllers\Api\DeliveryHero\V100;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Addon\WalletInterface;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ApiReturnFormatTrait;
use Carbon\Carbon;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    use ApiReturnFormatTrait;

    public function profile(Request $request): \Illuminate\Http\JsonResponse
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
            $data = [
                'first_name'        => $user->first_name,
                'last_name'         => $user->last_name,
                'email'             => nullCheck($user->email),
                'phone'             => nullCheck($user->phone),
                'image'             => $user->profile_image,
            ];
            return $this->responseWithSuccess(__('Data Retrieved Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function updateProfile(Request $request,UserInterface $userInterface): \Illuminate\Http\JsonResponse
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
            $request['id']              = $user->id;

            $validator = Validator::make($request->all(), [
                'first_name'    => 'required|max:50|regex:/^[a-zA-Z\s]*$/',
                'last_name'     => 'required|max:50|regex:/^[a-zA-Z\s]*$/',
                'email'         => 'required_without:phone|max:50|email|unique:users,email,'.\Request()->id,
                'phone'         => 'required_without:email|min:4|max:20|unique:users,phone,'.\Request()->id,
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            if($request->phone):
                $request['phone'] = str_replace(' ','',$request->phone);
            endif;

            $userInterface->update($request);
            JWTAuth::invalidate(JWTAuth::getToken());

            try {
                if (!$token = JWTAuth::fromUser($user)) {
                    return $this->responseWithError(__('Invalid credentials'), [], 401);
                }
            } catch (JWTException $e) {
                return $this->responseWithError(__('Unable to login, please try again'), [], 422);

            } catch (ThrottlingException $e) {
                return $this->responseWithError(__('Suspicious activity on your ip, try after').' '. $e->getDelay() .' '.  __('seconds'), [], 422);

            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Account is not activated. Verify your account first'),[],400);

            } catch (\Exception $e) {
                return $this->responseWithError(__('Something went wrong'), [], 500);
            }

            $data = [
                'first_name'        => $user->first_name,
                'last_name'         => $user->last_name,
                'email'             => nullCheck($user->email),
                'phone'             => nullCheck($user->phone),
                'gender'            => nullCheck($user->gender),
                'date_of_birth'     => nullCheck($user->date_of_birth),
                'token'             => $token,
            ];
            return $this->responseWithSuccess(__('Profile Updated Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function changePassword(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'current_password'       => 'min:6|max:32',
            'new_password'           => 'required|min:6|max:32|required_with:confirm_password|same:confirm_password',
            'confirm_password'       => 'required|min:6|max:32',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }

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

            if (Hash::check($request->new_password, $user->password)) {
                return $this->responseWithError(__('New password cannot be same as current password'), [], 200);

            }
            if(Hash::check($request->current_password, $user->password)){
                $user->password = bcrypt($request->new_password);
                $user->last_password_change = Carbon::now();
                $user->save();
                return $this->responseWithSuccess(__('Password Changed Successfully'), [], 200);

            } else{
                return $this->responseWithError(__('Current Password does not match with old password'), [], 200);
            }

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function myWallet(WalletInterface $wallet): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'recharges' => $wallet->walletHistory(),
                'balance' => $wallet->userBalance()
            ];
            return $this->responseWithSuccess(__('Wallet Data Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
