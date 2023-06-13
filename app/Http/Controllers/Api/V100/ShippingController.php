<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Order\PickupHubInterface;
use App\Repositories\Interfaces\Admin\ShippingInterface;
use App\Repositories\Interfaces\Site\AddressInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class ShippingController extends Controller
{
    use ApiReturnFormatTrait;

    protected $shipping;
    protected $address;

    public function __construct(ShippingInterface $shipping,AddressInterface $address)
    {
        $this->shipping = $shipping;
        $this->address = $address;
    }

    public function index(Request $request,CartInterface $cart,PickupHubInterface $pickupHub): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }
            $carts = $cart->cartList($user,$request->all());
            $checkouts = $cart->checkoutCoupon($carts, ['coupon'],$user);

            $data = [
                'addresses' => $user ? $user->addresses : [],
                'pickup_hubs' => settingHelper('pickup_point') == 1 ? $pickupHub->activeHubs() : [],

            ];
            return $this->responseWithSuccess(__('Address Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required',
            'phone_no'      => 'required',
            'country_id'    => 'required',
            'state_id'      => 'required',
            'city_id'       => 'required',
            'postal_code'   => 'required',
            'address'       => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            $request['user_id'] = $user->id;
            $this->address->store($request->all());

            return $this->responseWithSuccess(__('Address Created Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function edit($id,Request $request): \Illuminate\Http\JsonResponse
    {
        try {

            $data = [
                'address' => $this->address->edit($id),
            ];
            return $this->responseWithSuccess(__('Address Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required',
            'phone_no'      => 'required',
            'country_id'    => 'required',
            'state_id'      => 'required',
            'city_id'       => 'required',
            'postal_code'   => 'required',
            'address'       => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            $request['user_id'] = $user->id;
            $this->address->update($request->all(),$id);

            return $this->responseWithSuccess(__('Address Updated Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function destroy($id,Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->address->destroy($id);
            return $this->responseWithSuccess(__('Address Deleted'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function countries(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'countries' => $this->shipping->getAllCountries(),
            ];
            return $this->responseWithSuccess(__('Countries Retrieved'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function getStates($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'states' => $this->shipping->getStateByCountry($id),
            ];
            return $this->responseWithSuccess(__('States Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function getCities($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'cities' => $this->shipping->getCitiesByState($id),
            ];
            return $this->responseWithSuccess(__('Cities Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
