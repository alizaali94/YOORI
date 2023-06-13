<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ResetPasswordPostRequest;
use App\Models\PasswordRequest;
use App\Models\RegistrationRequest;
use App\Models\User;
use App\Traits\ApiReturnFormatTrait;
use App\Traits\ImageTrait;
use App\Traits\SendMailTrait;
use App\Traits\SmsSenderTrait;
use App\Utility\AppSettingUtility;
use AWS\CRT\Log;
use Carbon\Carbon;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Cartalyst\Sentinel\Laravel\Facades\Reminder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Exceptions\JWTException;
use Sentinel;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    use ApiReturnFormatTrait,SmsSenderTrait,ImageTrait,SendMailTrait;

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => 'required|max:255',
                'password'  => 'required|min:5|max:30',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $user = User::where('email', $request->email)->where('user_type','customer')->where('is_deleted',0)->first();

            if (blank($user)) {
                return $this->responseWithError( __('User not found'), [], 422);
            } elseif($user->is_user_banned == 1) {
                return $this->responseWithError( __('Your account has been banned'), [], 401);
            }

            if ($user->status == 0):
                return $this->responseWithError( __('Your account status is inactive'), []);
            elseif ($user->status == 2):
                return $this->responseWithError( __('Your account is suspend'), []);
            endif;

            $credentials = $request->only('email', 'password');

            try {
                if (!$token = JWTAuth::attempt($credentials)) {
                    return $this->responseWithError(__('Invalid credentials'), [], 401);
                }
            } catch (JWTException $e) {
                return $this->responseWithError(__('Unable to login, please try again'), [], 422);

            } catch (ThrottlingException $e) {
                return $this->responseWithError(__('Suspicious activity on your ip, try after').' '. $e->getDelay() .' '.  __('seconds'), [], 422);

            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Account is not activated. Verify your account first'),[],400);

            } catch (\Exception $e) {
                return $this->responseWithError(__($e->getMessage()), [], 500);
            }

            try {
                Sentinel::authenticate($request->all());
            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Your account is not verified.Please verify your account.'),[],500);
            }

            $data['token'] = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['id']             = $user->id;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);
            $data['socials']        = $user->socials == null ? [] : $user->socials;

            return $this->responseWithSuccess(__('Login Successfully'),$data,200);

        } catch (\Exception $e){
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'email' => 'required|max:255|unique:users,email',
                'password' => 'required|min:5|max:30|confirmed',
            ]);
            if ($validator->fails()) {
                if($validator->messages()->get('email')){
                    return $this->responseWithError($validator->messages()->get('email')[0], $validator->errors(), 422);
                }else{
                    return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
                }
            }
            $request['user_type']   = 'customer';
            $request['permissions'] = [];
            $user = Sentinel::register($request->all());
            $activation = Activation::create($user);

            sendMail($user, $activation->code, 'verify_email');
            $this->sendmail($request->email, 'Registration', $user, 'email.auth.activate-account-email',url('/') . '/activation/' . $request->email . '/' . $activation->code);
            return $this->responseWithSuccess(__('Check your mail to verify your account'),[],200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function registerByPhone(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'phone' => 'required|max:255|unique:users,phone'
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            DB::beginTransaction();

            $request['phone'] = str_replace(' ','',$request->phone);

            $req = RegistrationRequest::where('phone',$request->phone)->first();

            if ($req && Carbon::parse($req->created_at)->addMinutes(2) >= Carbon::now())
            {
                return $this->responseWithError(__('Verification Code was Already Sent'), $validator->errors(), 500);
            }

            RegistrationRequest::where('phone',$request->phone)->delete();

            $otp = rand(10000, 99999);
            if ($request->phone && addon_is_activated('otp_system')):
                $sms_templates  = AppSettingUtility::smsTemplates();
                $sms_template   = $sms_templates->where('tab_key','signup')->first();
                $sms_body       = str_replace('{otp}', $otp, @$sms_template->sms_body);
                if (!$this->send($request->phone, $sms_body, $sms_template->template_id)):
                    return response()->json([
                        'error' => __('Unable to send otp')
                    ]);
                endif;
            endif;
            $request['otp'] = $otp;
            RegistrationRequest::create($request->all());

            DB::commit();
            return $this->responseWithSuccess(__('OTP Send Successfully'),[],200);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function verifyRegistrationOTP(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            DB::beginTransaction();
            $validator = Validator::make($request->all(), [
                'phone' => 'required',
                'otp'   => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $request['phone'] = str_replace(' ','',$request->phone);

            $row = RegistrationRequest::where('phone',$request->phone)->first();

            if (blank($row)) {
                return $this->responseWithError( __('no_requests_found'), [], 422);
            }

            if ($request->otp != $row->otp)
            {
                return $this->responseWithError( __('OTP Doesnt Match'), [], 422);
            }

            $request['first_name']  = $row->first_name;
            $request['last_name']   = $row->last_name;
            $request['password']    = '123456';
            $request['user_type']   = 'customer';
            $request['email']       = null;


            Sentinel::registerAndActivate($request->all());

            RegistrationRequest::where('phone',$request['phone'])->delete();

            $credentials = ['phone' => $request['phone'] , 'password' => $request['password']];

            try {
                if (!$token = JWTAuth::attempt($credentials)) {
                    return $this->responseWithError(__('Invalid credentials'), [], 401);
                }
            } catch (JWTException $e) {
                return $this->responseWithError(__('Unable to login, please try again'), [], 422);

            } catch (ThrottlingException $e) {
                return $this->responseWithError(__('Suspicious activity on your ip, try after').' '. $e->getDelay() .' '.  __('seconds'), [], 422);

            } catch (\Exception $e) {
                return $this->responseWithError(__($e->getMessage()), [], 500);
            }

            try {
                Sentinel::authenticate($request->all());
            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Your account is not verified.Please verify your account.'),[],500);
            }

            $user = User::where('phone', $request->phone)->where('user_type','customer')->first();

            $data['token'] = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);
            $data['socials']        = $user->socials;

            DB::commit();
            return $this->responseWithSuccess(__('Registration Successfully'),$data,200);

        } catch (\Exception $e){
            dd($e);
            DB::rollBack();
            return $this->responseWithError(__($e->getMessage()),[],500);
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

    public function getOtp(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'phone'     => 'required|max:255',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }

            $request['phone'] = str_replace(' ','',$request->phone);

            $user  = User::where('phone', $request['phone'])->where('user_type','customer')->first();

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
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function verifyLoginOtp(Request $request): \Illuminate\Http\JsonResponse
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

            $user = User::where('phone', $request->phone)->first();

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
                return $this->responseWithError(__($e->getMessage()), [], 500);
            }

            $data['token']          = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);
            $data['socials']        = $user->socials;

            return $this->responseWithSuccess(__('Login Successfully'),$data,200);

        } catch (\Exception $e){
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function forgotPassword(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        try {
            $user = User::whereEmail($request->email)->first();

            if ($user)
            {
                if ($user->status == 0):
                    return $this->responseWithError( __('Your account status is inactive'), []);
                elseif ($user->status == 2):
                    return $this->responseWithError( __('Your account is suspend'), []);
                elseif ($user->status == 2):
                    return $this->responseWithError( __('Your account has been banned'), []);
                endif;

                $otp = rand(10000, 99999);

                PasswordRequest::where('user_id',$user->id)->delete();

                PasswordRequest::create([
                    'user_id' => $user->id,
                    'otp' => $otp,
                ]);

                $reminder = Reminder::create($user);
//                sendMail($user, $reminder->code, 'forgot_password', '','',$otp);
                $this->sendmail($request->email, 'Forgot Password', $user, 'email.auth.forgot-password-email',url('/') . '/activation/' . $request->email . '/' . $reminder->code,'',$otp);

                return $this->responseWithSuccess( __('You have received an email for reset your password'), ['code' => $reminder->code]);
            }
            else{
                return $this->responseWithError( __('User not found'), [], 422);
            }

        } catch (\Exception $e) {
            dd($e);
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function createNewPassword(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6|max:32|confirmed'
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }

        try {
            $user = User::byEmail($request->email);
            $otp = PasswordRequest::where('otp', $request->otp)->where('user_id', $user->id)->latest()->first();

            $reminder = Reminder::exists($user, $request->code);
            if ($otp && $reminder) {
                $user->password = bcrypt($request->password);
                $otp->delete();

                Reminder::complete($user, $request->code, $request->password);
//                sendMail($user, '', 'reset_password', $request->password);
                $this->sendmail($request->email, 'Forgot Password', $user, 'email.auth.forgot-password-email', url('/') . '/reset/' . $request->email . '/' . $reminder->code);

                return $this->responseWithSuccess(__('Successfully Password Changed'), [], 500);

            } else {
                return $this->responseWithError(__('Please Request Another Code'), [], 500);
            }
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], 500);
        }
    }

    public function socialLogin(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'uid' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }


            $user = User::where('firebase_auth_id', $request->uid)->where('user_type','customer')->first();

            if($user):
                if($user->is_user_banned == 1) :
                    return $this->responseWithError(__('Your account is banned'), []);
                elseif($user->status == 0):
                    return $this->responseWithError(__('Your account is inactive'), []);
                endif;
            else:
                $images = [];

                try {
                    $curl = curl_init();
                    curl_setopt_array($curl, array(
                        CURLOPT_URL => $request->image,
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => "",
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 30,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => "GET",
                    ));

                    $response = curl_exec($curl);

                    $err = curl_error($curl);
                    curl_close($curl);
                    $url = $response;
                }
                catch (\Exception $e){
                    $url = '';
                }


                if ($url)
                {
                    $images = $this->saveImage('','_staff_','',$url);
                }
                else if ($request->image)
                {
                    $images = $this->saveImage('','_staff_','',file_get_contents($request->image));
                }

                $name   = explode(' ',$request->name);
                $credentials = [
                    'first_name'            => array_key_exists(0,$name) ? $name[0] : '',
                    'last_name'             => array_key_exists(1,$name) ? $name[1] : ' '.(array_key_exists(2,$name) ? ' '.$name[2] : ''),
                    'email'                 => $request->email ? : '',
                    'phone'                 => $request->phone ? : '',
                    'images'                => array_key_exists('images',$images) ? $images['images'] : [],
                    'password'              => 'social-login',
                    'user_type'             => 'customer',
                    'date_of_birth'         => $request->dob ? Carbon::parse($request->dob)->format('Y-m-d') : null,
                    'gender'                => $request->gender,
                    'firebase_auth_id'      => $request->uid,
                    'permissions'           => [],
                    'is_password_set'       => 0,
                ];

                $user               = Sentinel::register($credentials);
                $activation         = Activation::create($user);
                Activation::complete($user, $activation->code);
            endif;

            try {
                Sentinel::authenticate($user);
            } catch (NotActivatedException $e) {
                return $this->responseWithError(__('Your account is not verified.Please verify your account.'),[],500);
            }

            try {
                if (!$token = JWTAuth::fromUser($user)) :
                    return $this->responseWithError(__('Invalid credentials'), [], 401);
                endif;
            } catch (JWTException $e) {
                return $this->responseWithError(__('Unable to login, please try again'), [], 422);

            } catch (ThrottlingException $e) {
                return $this->responseWithError(__('Suspicious activity on your ip, try after').' '. $e->getDelay() .' '.  __('seconds'), [], 422);

            } catch (\Exception $e) {
                return $this->responseWithError(__($e->getMessage()), [], 500);
            }
            $data['token']          = $token;
            $data['first_name']     = $user->first_name;
            $data['last_name']      = $user->last_name;
            $data['image']          = $user->profile_image;
            $data['phone']          = nullCheck($user->phone);
            $data['email']          = nullCheck($user->email);
            $data['socials']        = $user->socials;

            return $this->responseWithSuccess(__('Login Successfully'),$data,200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function verifyOtp(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'otp' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        try {

            $user = User::where('email', $request->email)->first();
            $request = PasswordRequest::where('otp', $request->otp)->where('user_id', $user->id)->latest()->first();

            if ($request) {
                return $this->responseWithSuccess( __('otp_verified'), []);
            } else {
                return $this->responseWithError( __('request_another_one'), [],403);
            }
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()),[],500);
        }
    }

    public function createPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        try {
            $user = User::where('email', $request->email)->where('status', 1)->first();
            $otp = PasswordRequest::where('otp', $request->otp)->where('user_id', $user->id)->where('status', 0)->latest()->first();
            if ($otp) {
                $user->password = bcrypt($request->password);
                $user->save();
                $otp->delete();
                return response()->json([
                    'success' => "password hs been changed",
                    'changed' => true,
                ], 200);
                //change password
            } else {
                return response()->json(['errors' => "Please Request Another One"], 403);
            }
        } catch (\Exception $e) {
            return response()->json(['errors' => "Something Went wrong"]);
        }
    }
}