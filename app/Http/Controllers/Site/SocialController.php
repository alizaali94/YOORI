<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Repositories\Interfaces\Site\WishlistInterface;
use App\Traits\HomePage;
use App\Traits\ImageTrait;
use Carbon\Carbon;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Sentinel;
use Activation;

class SocialController extends Controller
{
    use ImageTrait,HomePage;

    public function login(Request $request, ProductInterface $product, WishlistInterface $wishlist, CartInterface $cart)
    {
        try {
            $request->validate([
                'uid' => 'required'
            ]);

            $user = User::where('firebase_auth_id', $request->uid)->where('user_type','customer')->first();

            if($user):
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
               /* if ($request->image && !$url)
                {
                    $images = $this->saveImage('','_staff_','',file_get_contents($request->image));
                }*/

                $name   = explode(' ',$request->name);
                $credentials = [
                    'first_name'            => array_key_exists(0,$name) ? $name[0] : '',
                    'last_name'             => array_key_exists(1,$name) ? $name[1] : ' '.(array_key_exists(2,$name) ? ' '.$name[2] : ''),
                    'email'                 => $request->email ? : '',
                    'phone'                 => $request->phone ? : '',
                    'images'                => array_key_exists('images',$images) ? $images['images'] : [],
                    'password'              => 'social-login',
                    'user_type'             => 'customer',
                    'firebase_auth_id'      => $request->uid,
                    'date_of_birth'         => $request->dob ? Carbon::parse($request->dob)->format('Y-m-d') : null,
                    'gender'                => $request->gender,
                    'permissions'           => [],
                    'is_password_set'       => 0,
                ];

                $user               = Sentinel::register($credentials);
                $activation         = \Cartalyst\Sentinel\Laravel\Facades\Activation::create($user);
                Activation::complete($user, $activation->code);
            endif;

            try {
                Sentinel::authenticate($user);
            } catch (NotActivatedException $e) {
                return response()->json([
                    'error' => __('Your account is not verified.Please verify your account')
                ]);
            }

            return response()->json([
                'success'   => __('Login successfully'),
                'user'      => authUser(),
                'wishlists' => $wishlist->getHeaderWishlist(),
                'compare_list' => $product->compareList(),
                'carts'     => $this->cartList($cart->all()),
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function callback($provider)
    {
        try{
            $userSocial 	= Socialite::driver($provider)->user();
            $avater = $provider == 'twitter' ? $userSocial->avatar_original : $userSocial->getAvatar();

            if (!blank($avater)) {
                $image_response = $this->getImageWithRecommendedSize(null,[],[],false,$avater);
            }

            $user       	= User::where('email', $userSocial->getEmail())->first();
            $name           = explode(' ', $userSocial->getName());
            $credentials = [
                'first_name'     => $name[0],
                'last_name'      => $name[1].(@$name[2] ? ' '.$name[2] : ''),
                'email'          => $userSocial->getEmail(),
                'images'         => $image_response['images'] ?? [],
                'password'       => 'social-login',
                'is_password_set'=> 0,
            ];

            if($user){

                if($user->is_user_banned == 1) {
                    return redirect()->back()->with(['error' => __('Your account is banned')]);
                } elseif($user->status == 0){
                    return redirect()->back()->with(['error' => __('Your account is inactive')]);
                }

                Sentinel::authenticate($user);
                return redirect()->route('home')->with(['success' => __('Login successfully')]);
            }else{
                $user               = Sentinel::register($credentials);
                $activation         = Activation::create($user);
                Activation::complete($user, $activation->code);

                Sentinel::authenticate($credentials);
                return redirect()->route('home')->with(['success' => __('Login successfully')]);
            }

        } catch(\Exception $e) {
            DB::rollBack();
            return redirect('login')->with(['error' => __($e->getMessage())]);

        }
    }
}
