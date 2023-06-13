<?php

namespace App\Http\Controllers\Api\DeliveryHero\V100;

use App\Http\Controllers\Controller;
use App\Models\RegistrationRequest;
use App\Models\User;
use App\Traits\ApiReturnFormatTrait;
use App\Traits\SmsSenderTrait;
use App\Utility\AppSettingUtility;
use Carbon\Carbon;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Sentinel;
use JWTAuth;

class AuthController extends Controller
{
    use ApiReturnFormatTrait,SmsSenderTrait;

    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => 'required|max:255',
                'password'  => 'required|min:5|max:30',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = User::where('email', $request->email)->where('user_type','delivery_hero')->first();

            if (blank($user)) {
                return $this->responseWithError( __('User not found'), [], 422);
            } elseif($user->is_user_banned == 1) {
                return $this->responseWithError( __('Your account has been banned'), [], 401);
            }

            $credentials = $request->only('email', 'password');

            try {
                if (!$token = \Tymon\JWTAuth\Facades\JWTAuth::attempt($credentials)) {
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

            try {
                Sentinel::authenticate($request->all());
            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Your account is not verified.Please verify your account.'),[],500);
            }

            $data['token']          = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);

            return $this->responseWithSuccess(__('Login Successfully'),$data,200);

        } catch (\Exception $e){
            return $this->responseWithError(__('Something went wrong'),[],500);
        }
    }

    public function logout(Request $request)
    {
        try {
            Sentinel::logout();
            JWTAuth::invalidate(JWTAuth::getToken());
            return $this->responseWithSuccess(__('Logout Successfully'),[],200);
        } catch (JWTException $e) {
            JWTAuth::unsetToken();
            return $this->responseWithError(__('Failed to logout'), [], 500);
        }
    }

    public function getOtp(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'phone'     => 'required|max:255',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $request['phone'] = str_replace(' ','',$request->phone);

            $user = User::where('phone', $request['phone'])->where('user_type','delivery_hero')->first();

            if (blank($user)):
                return $this->responseWithError(__('User Not found'), [], 500);
            endif;

            if($user->status == 0):
                return $this->responseWithError(__('Your account status is inactive'), [], 500);

            elseif($user->status == 2):
                return $this->responseWithError(__('Your account is suspend'), [], 500);

            elseif(!Activation::completed($user)):
                return $this->responseWithError(__('Your account is not verified.Please verify your account.'), [], 500);
            endif;

            $sms_templates  = AppSettingUtility::smsTemplates();

            $sms_template   = $sms_templates->where('tab_key','login')->first();
            $otp            = rand(10000,99999);
            $sms_body       = str_replace('{otp}', $otp, $sms_template->sms_body);
            if (addon_is_activated('otp_system')):
                if ($this->send($request['phone'], $sms_body, $sms_template->template_id)):
                    $user->otp  = $otp;
                    $user->save();
                    return $this->responseWithSuccess(__('Otp send successfully'),[],200);
                else:
                    return $this->responseWithSuccess(__('Unable to send otp'),[],200);
                endif;
            else:
                return $this->responseWithSuccess(__('Service is unavailable'),[],200);
            endif;
        } catch (\Exception $e){
            return $this->responseWithError(__('Something went wrong'),[],500);
        }
    }

    public function verifyLoginOtp(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'phone'     => 'required|max:255',
                'otp'       => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $request['phone'] = str_replace(' ','',$request->phone);

            $user = User::where('phone', $request->phone)->where('user_type','delivery_hero')->first();

            if (blank($user)) {
                return $this->responseWithError( __('User not found'), [], 422);
            }
            if($user->is_user_banned == 1) {
                return $this->responseWithError( __('Your account has been banned'), [], 401);
            }
            if ($user->status == 0):
                return $this->responseWithError(__('You Are not Activated Yet'), [], 401);
            elseif ($user->status == 2):
                return $this->responseWithError(__('Your account is suspend'), [], 401);
            endif;

            if ($user->otp != $request->otp):
                return $this->responseWithError(__('OTP did not match. Please provide correct OTP'), [], 401);
            endif;

            try {
                if (!$token = JWTAuth::fromUser($user)) {
                    return $this->responseWithError(__('Invalid credentials'), [], 401);
                }
            } catch (JWTException $e) {
                return $this->responseWithError(__('Unable to login, please try again'), [], 422);

            } catch (ThrottlingException $e) {
                return $this->responseWithError(__('Suspicious activity on your ip, try after').' '. $e->getDelay() .' '.  __('seconds'), [], 422);

            } catch (\Exception $e) {
                return $this->responseWithError(__('Something went wrong'), [], 500);
            }

            $data['token'] = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);
            $data['completed_delivery']     = $user->deliveryHero->orders->where('delivery_status','delivered')->count();
            $data['pending_delivery']       = $user->deliveryHero->orders->whereNotIn('delivery_status',['delivered','canceled'])->count();
            $data['cancelled_delivery']     = $user->deliveryHero->orders->where('delivery_status','canceled')->count();

            return $this->responseWithSuccess(__('Login Successfully'),$data,200);

        } catch (\Exception $e){
            return $this->responseWithError(__('Something went wrong'),[],500);
        }
    }
}

