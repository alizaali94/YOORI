<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\Interfaces\Admin\Order\PickupHubInterface;
use App\Repositories\Interfaces\Admin\ShippingInterface;
use App\Repositories\Interfaces\Site\AddressInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function addresses(CartInterface $cart, ShippingInterface $shipping,PickupHubInterface $pickupHub): \Illuminate\Http\JsonResponse
    {
        try {
            $carts = $cart->all();

            $data = [
                'addresses' => authUser() ? authUser()->addresses : (session()->has('addresses') ? session()->get('addresses') : []),
                'carts' => $carts,
                'checkouts' => count($carts) > 0 ? $cart->checkoutCoupon($carts,['coupon'],authUser()) : [],
                'coupons'   => count($carts) > 0 && settingHelper('coupon_system') == 1 ? $cart->appliedCoupons(['trx_id' => $carts->first()->trx_id]) : [],
                'pickup_hubs' => authUser() && settingHelper('pickup_point') == 1 ? $pickupHub->activeHubs() : [],
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function allAddress(ShippingInterface $shipping): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'addresses' => authUser()->addresses,
                'countries' => $shipping->getAllCountries(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function countries(ShippingInterface $shipping): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'countries' => $shipping->getAllCountries(),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function getStates($id, ShippingInterface $shipping): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'states' => $shipping->getStateByCountry($id),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function getCities($id, ShippingInterface $shipping): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'cities' => $shipping->getCitiesByState($id),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function saveAddress(Request $request, AddressInterface $address): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone_no' => 'required',
            'country_id' => 'required',
            'state_id' => 'required',
            'city_id' => 'required',
            'postal_code' => 'required',
            'address' => 'required',
        ]);
        try {
            $address->storeAddress($request->all());
            $data = [
                'address' => 'Address Added',
                'success' => __('Address Created Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function updateDefault($type, $id, AddressInterface $address): \Illuminate\Http\JsonResponse
    {
        try {
            $address->makeDefault($type, $id);

            $data = [
                'user' => User::find(authId()),
                'success' => __('Updated Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function deleteAddress($id, AddressInterface $address): \Illuminate\Http\JsonResponse
    {
        if (isDemoServer()):
            $data = [
                'error' => __('This function is disabled in demo server.')
            ];
            return response()->json($data);
        endif;
        try {
            $data = [
                'address' => $address->deleteAddress($id),
                'success' => __('Address Deleted Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }

    public function searchCountry(Request $request, ShippingInterface $shipping)
    {
        try {
            $countries = $shipping->countriesSearch($request);
            return response()->json([
                'countries' => $countries
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops...Something Went Wrong')
            ]);
        }
    }
}
