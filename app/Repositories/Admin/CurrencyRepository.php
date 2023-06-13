<?php

namespace App\Repositories\Admin;

use App\Models\Currency;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use DB;
use Illuminate\Support\Facades\Cache;

class CurrencyRepository implements CurrencyInterface
{
    public function all()
    {
        return Currency::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function get($id)
    {
        return Currency::find($id);
    }

    public function store($request)
    {

        DB::beginTransaction();
        try {
           $currency                    = new Currency();
           $currency->name              = $request->name;
           $currency->symbol            = $request->symbol;
           $currency->code              = $request->code;
           $currency->exchange_rate     = $request->exchange_rate;

           $currency->save();

            DB::commit();
            Cache::forget('currencies');
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $currency = $this->get($request->id);

            $currency->name              = $request->name;
            $currency->symbol            = $request->symbol;
            $currency->code              = $request->code;
            $currency->exchange_rate     = $request->exchange_rate;
            $currency->save();

            DB::commit();
            Cache::forget('currencies');
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $currency           = $this->get($request['id']);
            if($currency->id != settingHelper('default_currency') ):
                $currency->status   = $request['status'];
                $currency->save();

                DB::commit();
                Cache::forget('currencies');
                return true;
            else:
                DB::rollback();
                return false;
            endif;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    //for APi
    public function activeCurrency()
    {
        return Currency::where('status',1)->get();
    }

    public function currencyByCode($code)
    {
        return Currency::where('code',$code)->first();
    }

}
