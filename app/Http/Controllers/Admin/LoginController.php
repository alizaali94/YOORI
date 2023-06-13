<?php

namespace App\Http\Controllers\Admin;

use App\Models\Cart;
use App\Models\CompareProduct;
use App\Models\LogActivity as LogActivityModel;
use App\Models\User;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Repositories\Interfaces\Site\WishlistInterface;
use App\Traits\GetUserBrowser;
use App\Traits\HomePage;
use App\Traits\SendMailTrait;
use App\Traits\SmsSenderTrait;
use App\Utility\AppSettingUtility;
use Brian2694\Toastr\Facades\Toastr;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Sentinel;
use Cartalyst\Sentinel\Laravel\Facades\Activation;

class LoginController extends Controller
{
    use GetUserBrowser, SmsSenderTrait,HomePage,SendMailTrait;

    public function login()
    {
        return redirect()->route('home');
    }

    public function sellerLogin()
    {
        return view('admin.auth.login');
    }

    public function adminLogin()
    {
        return view('admin.auth.login');
    }

    public function postlogin(Request $request, ProductInterface $product, WishlistInterface $wishlist, CartInterface $cart)
    {
        try {
            if (settingHelper('is_recaptcha_activated') == 1 && !$request->has('phone') && !$request->captcha) {
                return response()->json([
                    'captcha' => __('Recaptcha Verification is Required')
                ]);
            }
            $phone = '';
            $user = null;

            if($request->phone):
                $phone = str_replace(' ','',$request->phone);
            endif;
            if ($request->has('email') && $request->email != ''):
                $user = User::where('email', $request->email)->first();
            elseif ($request->has('phone') && $phone != ''):
                $user = User::where('phone', $phone)->first();
            endif;

            if (blank($user)):
                return response()->json([
                    'error' => __('User Not found')
                ]);
            endif;

            if ($user->status == 0):
                return response()->json([
                    'error' => __('You Are not Activated Yet')
                ]);
            endif;

            if ($user->is_deleted == 1):
                return response()->json([
                    'error' => __('User Not found')
                ]);
            endif;

            if ($user->is_user_banned == 1):
                return response()->json([
                    'error' => __('You Are Banned From The Admin')
                ]);
            endif;

            if ($user->user_type == 'seller'):
                if (empty($user->sellerProfile->verified_at)):
                    Toastr::error(__('Please Verify Your Mail First'));
                    return back()->withInput();
                endif;

                if (settingHelper('seller_system') != 1):
                    Toastr::error(__('You Are Not Allowed to Login'));
                    return back()->withInput();
                endif;
            endif;

            if ($request->has('otp')):
                if ($user->otp != $request->otp):
                    return response()->json([
                        'error' => __("OTP did not match. Please provide correct OTP")
                    ]);
                endif;
            endif;

            if ($user->status == 0):
                return response()->json([
                    'error' => __('Your account status is inactive')
                ]);
            elseif ($user->status == 2):
                return response()->json([
                    'error' => __('Your account is suspend')
                ]);
            endif;

            if ($request->has('email')):
                if (!Hash::check($request->get('password'), $user->password)):
                    return response()->json([
                        'error' => __('Invalid Credentials')
                    ]);
                endif;
                $credentials = ['email' => $request->email, 'password' => $request->password];
            endif;

            $remember_me = $request->remember == 1 ? 1 : 0;
            try {
                if ($request->has('phone')):
                    $remember_me ? Sentinel::authenticateAndRemember($credentials) : Sentinel::authenticate($user);
                else:
                    $remember_me ? Sentinel::authenticateAndRemember($credentials) : Sentinel::authenticate($credentials);
                endif;

                $this->generalFunction($cart);

            } catch (NotActivatedException $e) {
                return response()->json([
                    'error' => __('Your account is not verified.Please verify your account.')
                ]);
            } catch (ThrottlingException $e) {
                return response()->json([
                    'error' => __('You are banned')
                ]);
            }
            $log            = [];
            $log['url']     = \Request::fullUrl();
            $log['method']  = \Request::method();
            $log['ip']      = \Request::ip();
            $log['browser'] = $this->getBrowser(\Request::header('user-agent'));
            $log['platform']= $this->getPlatForm(\Request::header('user-agent'));
            $log['user_id'] = $user->id;
            LogActivityModel::create($log);

            return response()->json([
                'success'           => __('Login successfully'),
                'user'              => authUser(),
                /*'active_currency'   => $currency->get(authUser()->currency_id),
                'active_language'   => $language->getByLocale(authUser()->lang_code),*/
                'wishlists'         => $wishlist->getHeaderWishlist(),
                'compare_list'      => $product->compareList(),
                'carts'             => $this->cartList($cart->all()),
            ]);
        } catch (\Exception $e){
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    protected function generalFunction($cart, $remove = false)
    {
        if (session()->get('compare_list'))
        {
            $compares = [];

            if (!$remove):
                foreach (session()->get('compare_list') as $key=> $item) {
                    $compares[$key] = [
                        'user_id' => authId(),
                        'product_id' => $item,
                    ];
                }

                CompareProduct::insert($compares);
            endif;
            session()->forget('compare_list');
        }

        if (session()->get('walk_in_id'))
        {
            if (!$remove):
                Cart::where('user_id', getWalkInCustomer()->id)->where('trx_id',session()->get('walk_in_id'))->update(['user_id' => authId()]);
            endif;
            session()->forget('walk_in_id');
            session()->forget('addresses');
        }
    }

    public function logout()
    {
        try {
            if(authUser()->user_type == 'admin' || authUser()->user_type == 'staff'):
                $redirect_to = 'admin.login.form';
            elseif(authUser()->user_type == 'seller'):
                $redirect_to = 'seller.login.form';
            else:
                $redirect_to = 'login';
            endif;


            Sentinel::logout();
            if (request()->ajax()) {
                session()->flush();
                session()->regenerate();
                $token = csrf_token();
                return response()->json([
                    'success' => __('Logout successfully'),
                    'token' => $token,
                ]);
            }
            Toastr::success(__('Logout successfully'));

            return redirect()->route($redirect_to);

        } catch (\Exception $e) {
            if (request()->ajax()) {
                return response()->json([
                    'error' => __('Oops...Something Went Wrong')
                ]);
            } else {
                return back();
            }
        }
    }

    public function loginByUser($id)
    {
        try {
            $user = Sentinel::findById($id);
            try {
                Sentinel::authenticate($user);
                Toastr::success(__('Successfully Login'));
                return redirect()->route('seller.dashboard')->with('success', __('Login As successfully'));

            } catch (NotActivatedException $e) {
                Toastr::error(__('Account is not verified.Please verify account first.'));
                return redirect()->back();
            } catch (ThrottlingException $e) {
                Toastr::error(__('Account is banned'));
                return redirect()->back();
            }
        } catch (\Exception $e) {
            Toastr::error(__($e->getMessage()));
            return back();
        }
    }
    public function activation($email, $activationCode)
    {
        $user       = User::whereEmail($email)->first();
        if (Activation::complete($user, $activationCode)) :
            $this->sendmail($user->email, 'Verify Email', $user, 'email.auth.activate-account-email','');
//            sendMail($user, '', 'verify_email_success', '');
            Toastr::success(__('Your account is active now.'));
            return redirect()->route('login');
        else:
            Toastr::error(__('Please check your credential'));
            return redirect()->route('login');
        endif;
    }

    public function getOtp(Request $request)
    {
        $request->validate([
            'phone' => 'required',
        ]);
        try {
            $phone = '';
            if($request->phone):
                $phone = str_replace(' ','',$request->phone);
            endif;
            $user  = User::where('phone', $phone)->first();

            if (blank($user)):
                return response()->json([
                    'error' => __('User Not found')
                ]);
            endif;

            if ($user->is_deleted == 1):
                return response()->json([
                    'error' => __('User Not found')
                ]);
            endif;

            if($user->status == 0):
                return response()->json([
                    'error' => __('Your account status is inactive')
                ]);
            elseif($user->status == 2):
                return response()->json([
                    'error' => __('Your account is suspend')
                ]);
            elseif(!Activation::completed($user)):
                return response()->json([
                    'error' => __('Your account is not verified.Please verify your account.')
                ]);
            endif;

            $sms_templates  = AppSettingUtility::smsTemplates();

            $sms_template   = $sms_templates->where('tab_key','login')->first();
            $otp            = rand(10000,99999);
            $sms_body       = str_replace('{otp}', $otp, $sms_template->sms_body);
            if (addon_is_activated('otp_system')):
                if ($this->send($request->phone, $sms_body, $sms_template->template_id)):
                    $user->otp  = $otp;
                    $user->save();
                    return response()->json([
                        'success' => __('Otp send successfully'),
                    ]);
                else:
                    return response()->json([
                        'error' => __('Unable to send otp')
                    ]);
                endif;
            else:
                return response()->json([
                    'error'     => __('Service is unavailable')
                ]);
            endif;
        } catch (\Exception $e){
            return response()->json([
                'error'         => __('Oops... Something Went Wrong')
            ]);
        }
    }

    public function checkAuth(OrderInterface $order): \Illuminate\Http\JsonResponse
    {
        try {
            return response()->json([
                'user'          => authUser(),
                'reward'        => authUser()->reward,
                'download_urls' => count($order->digitalProductOrders(1)) > 0,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error'         => __('Oops... Something Went Wrong')
            ]);
        }
    }

    public function adminSellerlogin(Request $request, CartInterface $cart)
    {

        try {
            if (settingHelper('is_recaptcha_activated') == 1 && env('NOCAPTCHA_SITEKEY') != '') {
                $validator = Validator::make($request->all(), [
                    'g-recaptcha-response' => 'required|captcha'
                ]);

                if ($validator->fails()) {
                    Toastr::error(__('Recaptcha Verification is Required'));
                    return back()->withInput();
                }
            }

            $user = User::where('email', $request->email)->first();
            if (blank($user)):
                Toastr::error(__('User not found'));
                return back()->withInput();
            endif;

            if ($user->status == 0):
                Toastr::error(__('You Are not Activated Yet'));
            endif;

            if ($user->user_type == 'seller' && empty($user->sellerProfile->verified_at))
            {
                Toastr::error(__('Please Verify Your Mail First'));
                return back()->withInput();
            }

            if ($user->is_user_banned == 1):
                Toastr::error(__('You Are Banned From The Admin'));
                return back()->withInput();
            endif;

            if ($user->user_type == 'seller' && settingHelper('seller_system') != 1):
                Toastr::error(__('You Are Not Allowed to Login'));
                return back()->withInput();
            endif;

            if ($user->status == 0):
                Toastr::error(__('Your account status is inactive'));
                return back()->withInput();
            elseif ($user->status == 2):
                Toastr::error(__('Your account is suspend'));
                return back()->withInput();
            endif;

            if ($request->has('email')):
                if (!Hash::check($request->get('password'), $user->password)):
                    Toastr::error(__('Invalid Credentials'));
                    return back()->withInput();
                endif;
                $credentials = ['email' => $request->email, 'password' => $request->password];
            endif;

            $remember_me = $request->remember == 1 ? 1 : 0;
            try {
                $remember_me ? Sentinel::authenticateAndRemember($credentials) : Sentinel::authenticate($credentials);

                $this->generalFunction($cart, true);

            } catch (NotActivatedException $e) {
                Toastr::error(__('Your account is not verified.Please verify your account.'));
                return back()->withInput();
            } catch (ThrottlingException $e) {
                Toastr::error(__('You are banned'));
                return back()->withInput();
            }
            $log            = [];
            $log['url']     = \Request::fullUrl();
            $log['method']  = \Request::method();
            $log['ip']      = \Request::ip();
            $log['browser'] = $this->getBrowser(\Request::header('user-agent'));
            $log['platform']= $this->getPlatForm(\Request::header('user-agent'));
            $log['user_id'] = $user->id;
            LogActivityModel::create($log);

            if ($user->user_type == 'admin' || $user->user_type == 'staff'):
                return redirect()->route('dashboard');
            else:
                return redirect()->route('seller.dashboard');
            endif;
        } catch (\Exception $e){
            Toastr::error(__('Oops...Something Went Wrong'));
            return back()->withInput();
        }
    }


}
