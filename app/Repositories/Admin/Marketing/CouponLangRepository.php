<?php

namespace App\Repositories\Admin\Marketing;

use App\Models\CouponLanguage;
use App\Repositories\Interfaces\Admin\Marketing\CouponLangInterface;
use DB;

class CouponLangRepository implements CouponLangInterface
{

    public function get($id)
    {
        return CouponLanguage::find($id);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $couponLang                      = new  CouponLanguage();
            $couponLang->title               = $request->title;
            $couponLang->coupon_id           = $request->coupon_id;
            $couponLang->lang                = $request->lang;
            $couponLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $couponLang                      = $this->get($request->coupon_lang_id);
            $couponLang->title               = $request->title;
            $couponLang->coupon_id           = $request->coupon_id;
            $couponLang->lang                = $request->lang;
            $couponLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}
