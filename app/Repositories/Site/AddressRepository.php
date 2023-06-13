<?php

namespace App\Repositories\Site;

use App\Models\Address;
use App\Models\City;
use App\Models\Country;
use App\Models\State;
use App\Repositories\Interfaces\Site\AddressInterface;
use Illuminate\Support\Str;
use Sentinel;

class AddressRepository implements AddressInterface {

    //for APi
    public function userAddress()
    {
        return [
            'shipping_addresses' => Address::where('user_id',authId())->where('type',0)->get(),
            'billing_addresses' => Address::where('user_id',authId())->where('type',1)->get(),
        ];
    }

    public function storeAddress($request)
    {
        $request['user_id'] = authId();

        $country = Country::find($request['country_id']);
        $state   = State::find($request['state_id']);
        $city    = City::find($request['city_id']);

        $request['address_ids'] = [
            'country_id'    => $request['country_id'],
            'state_id'      => $request['state_id'],
            'city_id'       => $request['city_id'],
        ];

        $request['country'] = $country->name;
        $request['state']   = $state->name;
        $request['city']    = $city->name;
        $request['longitude']   = $city->longitude;
        $request['latitude']    = $city->latitude;

        if (authUser())
        {
            if (blank(Sentinel::getUser()->addresses)):
                $request['default_shipping'] = 1;
                $request['default_billing'] = 1;
            endif;
            if (@$request['id'])
            {

                $address = Address::find($request['id']);
                $address->update($request);
            }
            else{
                $address = Address::create($request);
            }
        }
        else{
            $addresses = session()->get('addresses');

            if (array_key_exists('id',$request) && $request['id'])
            {
                foreach ($addresses as $key=> $session_address)
                {
                    if ($request['id'] == $session_address['id'])
                    {
                        $addresses[$key] = [
                            'name' => $request['name'],
                            'email' => $request['email'],
                            'phone_no' => $request['phone_no'],
                            'address' => $request['address'],
                            'address_ids' => $request['address_ids'],
                            'country' => $request['country'],
                            'state' => $request['state'],
                            'city' => $request['city'],
                            'latitude' => $request['latitude'],
                            'postal_code' => $request['postal_code'],
                        ];
                    }
                }
            }
            else{
                $addresses[] = [
                    'id' => Str::random(6),
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'phone_no' => $request['phone_no'],
                    'address' => $request['address'],
                    'address_ids' => $request['address_ids'],
                    'country' => $request['country'],
                    'state' => $request['state'],
                    'city' => $request['city'],
                    'latitude' => $request['latitude'],
                    'postal_code' => $request['postal_code'],
                ];
            }
            session()->put('addresses', $addresses);
        }


        return true;
    }

    public function makeDefault($type, $id)
    {
        if ($type == 'shipping'):
            Sentinel::getUser()->addresses()->update(['default_shipping' => 0]);
            Sentinel::getUser()->addresses()->where('id',$id)->update(['default_shipping' => 1]);
        elseif ($type == 'billing'):
            Sentinel::getUser()->addresses()->update(['default_billing' => 0]);
            Sentinel::getUser()->addresses()->where('id',$id)->update(['default_billing' => 1]);
        endif;

    }

    public function deleteAddress($id): int
    {
        if (authUser())
        {
            return Address::destroy($id);
        }
        else{
            $addresses = session()->get('addresses');

            foreach ($addresses as $key => $cart) {
                if (array_key_exists('id',$cart) && $cart['id'] == $id) {
                    unset($addresses[$key]);
                }
            }
            session()->put('addresses', $addresses);
            return true;
        }
    }

    public function store($request)
    {
        $country = Country::find($request['country_id']);
        $state   = State::find($request['state_id']);
        $city    = City::find($request['city_id']);

        $request['address_ids'] = [
            'country_id'    => $request['country_id'],
            'state_id'      => $request['state_id'],
            'city_id'       => $request['city_id'],
        ];

        $request['country'] = $country->name;
        $request['state']   = $state->name;
        $request['city']    = $city->name;
        $request['longitude']   = $city->longitude;
        $request['latitude']    = $city->latitude;

        return Address::create($request);
    }

    public function edit($id)
    {
        return Address::find($id);
    }

    public function update($request,$id)
    {
        $country = Country::find($request['country_id']);
        $state   = State::find($request['state_id']);
        $city    = City::find($request['city_id']);

        $request['address_ids'] = [
            'country_id'    => $request['country_id'],
            'state_id'      => $request['state_id'],
            'city_id'       => $request['city_id'],
        ];

        $request['country'] = $country->name;
        $request['state']   = $state->name;
        $request['city']    = $city->name;
        $request['longitude']   = $city->longitude;
        $request['latitude']    = $city->latitude;

        $address = Address::find($id);

        $address->update($request);

        return $address;
    }

    public function destroy($id): int
    {
        return Address::destroy($id);
    }

    public function getAdrByUser($id)
    {
        return Address::where('user_id',$id)->get();
    }
}
