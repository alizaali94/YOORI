<?php

namespace App\Http\Controllers\Api\Seller\V100;

use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\SignUpRequest;
use App\Http\Resources\AddOnResource;
use App\Http\Resources\Api\OrderResource;
use App\Http\Resources\Api\Seller\OrderListResource;
use App\Http\Resources\Api\Seller\WalletResource;
use App\Http\Resources\PageResource;
use App\Http\Resources\SiteResource\CampaignPaginateResource;
use App\Http\Resources\SiteResource\CampaignResource;
use App\Models\Activation;
use App\Models\Currency;
use App\Models\Language;
use App\Repositories\Admin\Page\PageRepository;
use App\Repositories\Interfaces\Admin\AccountInterface;
use App\Repositories\Interfaces\Admin\AddonInterface;
use App\Repositories\Interfaces\Admin\Marketing\CampaignInterface;
use App\Repositories\Interfaces\Admin\MediaInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ApiReturnFormatTrait;
use App\Utility\AppSettingUtility;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Cartalyst\Sentinel\Sentinel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            if ($request->bearerToken()) {
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
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function updateProfile(Request $request,UserInterface $userInterface,SellerInterface $seller): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->bearerToken()) {
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
//            JWTAuth::invalidate(JWTAuth::getToken());

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
                return $this->responseWithError(__($e->getMessage()), [], 500);
            }

            $user = JWTAuth::toUser($token);
            $data = [
                'first_name'        => $user->first_name,
                'last_name'         => $user->last_name,
                'image'             => getFileLink('128x128',$user->images),
                'email'             => nullCheck($user->email),
                'phone'             => nullCheck($user->phone),
                'gender'            => nullCheck($user->gender),
                'date_of_birth'     => nullCheck($user->date_of_birth),
                'token'             => $token,
            ];
            return $this->responseWithSuccess(__('Profile Updated Successfully'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function shopDetailsUpdate(Request $request,SellerProfileInterface $seller,MediaInterface $medias)
    {
        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }

        if($request->seller_shop_banner){
            $media = new MediaController($medias);
           $shop_banner =  $media->sellerBannerstore($request->seller_shop_banner,$user->id);
           $request['shop_banner'] = $shop_banner['id'];
        }
        $request['user_id'] = $user->id;
        try{
           $data = $seller->update($request);
            return response()->json([
                'success'   => true,
                'message'   => 'Shop Details Updated Successfully',
            ],200);
        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function shopDetails(Request $request,SellerInterface $sellers)
    {
        $user = null;
        if ($request->bearerToken()) {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
        }
        $user = $sellers->get($user->id);
        $data = [
                'id'                    => $user->id,
                'shop_name'             => $user->sellerProfile->shop_name,
                'phone_no'              => $user->sellerProfile->phone_no,
                'address'               => $user->sellerProfile->address,
                'slug'                  => $user->sellerProfile->slug,
                'shop_tagline'          => $user->sellerProfile->shop_tagline,
                'logo'                  => @$user->sellerProfile->logo? getFileLink('72x72',@$user->sellerProfile->logo) :"",
                'banner'                => @$user->sellerProfile->banner ? getFileLink('72x72',@$user->sellerProfile->banner): "",
                'shop_banner'           => @$user->sellerProfile->shop_banner ? getFileLink('72x72',@$user->sellerProfile->shop_banner): "",
                'meta_title'            => $user->sellerProfile->meta_title,
                'meta_description'      => $user->sellerProfile->meta_description,
                'facebook'              => $user->sellerProfile->facebook,
                'google'                => $user->sellerProfile->google,
                'twitter'               => $user->sellerProfile->twitter,
                'youtube'               => $user->sellerProfile->youtube,
                'license_no'            => $user->sellerProfile->license_no,
                'tax_paper'             => $user->sellerProfile->tax_paper !=[] && is_file_exists(@$user->sellerProfile->tax_paper['image_72x72']) ? getFileLink('72x72',$user->sellerProfile->tax_paper) : ""
        ];
        try{
            return $this->responseWithSuccess(__('Shop Details Fetched Successfully'), $data, 200);

        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
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
            if ($request->bearerToken()) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            if (Hash::check($request->new_password, $user->password)) {
                return $this->responseWithError(__('New password cannot be same as current password'), [], 422);

            }
            if(Hash::check($request->current_password, $user->password)){
                $user->password = bcrypt($request->new_password);
                $user->last_password_change = Carbon::now();
                $user->save();
                return $this->responseWithSuccess(__('Password Changed Successfully'), [], 200);

            } else{
                return $this->responseWithError(__('Current Password does not match with old password'), [], 422);
            }

        } catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function wallets(Request $request,AccountInterface $accounts){
        try{
            $wallets = $accounts->allWallets(get_pagination('pagination'),$request);
            $wallets = WalletResource::collection($wallets);
            return response()->json([
                'success'   => true,
                'message'   => 'Transactions Fetched Successfully',
                'total_balance'=> number_format(authUser($request)->balance,2),
                'data'=> $wallets,
            ],200);
        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function campaigns(Request $request, CampaignInterface $campaign){
        try{
            $campaigns          = CampaignResource::collection($campaign->paginate(get_pagination('pagination')));
            return response()->json([
                'success'   => true,
                'message'   => 'Campaigns Fetched Successfully',
                'data'=> $campaigns,
            ],200);
        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }

    public function homeScreen(Request$request,SellerProfileInterface $seller,ProductInterface $product,OrderInterface $order){

        try{
            $user = null;
            if ($request->bearerToken()) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            $shop                   = $seller->get($user->id);
            $products               = count($product->sellerProducts($user->id));
            $total_order_completed  = count($order->all()->where('seller_id',$user->id)->where('delivery_status','delivered')->get());
            $total_order_received   = count($order->all()->where('seller_id',$user->id)->where('status',1)->get());
            $total_sales            = $order->all()->where('delivery_status', 'delivered')->where('seller_id',$user->id)->sum('total_payable');
            $pending_order          = new OrderListResource($order->apiSellerOrder($user, get_pagination('api_paginate'),'pending'));

            $data = [
              'shop_name'               =>   $shop->shop_name,
              'logo'                    =>   asset($shop->logo['image_72x72']),
              'total_products'          =>   $products,
              'total_order_completed'   =>   $total_order_completed,
              'total_order_received'    =>   $total_order_received,
              'total_sales'             =>   $total_sales,
              'pending_order'           =>   $pending_order,
            ];
            return $this->responseWithSuccess(__('Home Screen Fetched Successfully'), $data, 200);
        }catch (\Exception $e) {
            return $this->responseWithError(__($e->getMessage()), [], null);
        }
    }


}
