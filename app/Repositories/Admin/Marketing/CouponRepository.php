<?php

namespace App\Repositories\Admin\Marketing;

use App\Models\Checkout;
use App\Models\Coupon;
use App\Models\CouponLanguage;
use App\Repositories\Interfaces\Admin\Marketing\CouponInterface;
use App\Repositories\Interfaces\Admin\Marketing\CouponLangInterface;
use App\Traits\ImageTrait;
use DB;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;
use Sentinel;
use Tymon\JWTAuth\Facades\JWTAuth;

class CouponRepository implements CouponInterface
{
    use ImageTrait;

    protected $couponLanguage;

    public function __construct(CouponLangInterface $couponLanguage)
    {
        $this->couponLanguage        = $couponLanguage;
    }

    public function get($id)
    {
        return Coupon::find($id);
    }

    public function getByLang($id, $lang)
    {
        if($lang == null):
            $couponByLang = CouponLanguage::with('coupon')->where('lang', 'en')->where('coupon_id', $id)->first();
        else:
            $couponByLang = CouponLanguage::with('coupon')->where('lang', $lang)->where('coupon_id', $id)->first();
            if (blank($couponByLang)):
                $couponByLang = CouponLanguage::with('coupon')->where('lang', 'en')->where('coupon_id', $id)->first();
                $couponByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $couponByLang;
    }

    public function all()
    {
        return Coupon::latest()->when(Sentinel::getUser()->user_type == 'seller', function ($q){
                            $q->where('user_id', Sentinel::getUser()->id);
                        });
    }

    public function paginate($request, $limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $coupon = new Coupon();
            $coupon->user_id            = Sentinel::getUser()->user_type == 'seller' ? Sentinel::getUser()->id : 1;
            $coupon->type               = $request->type;
            $coupon->code               = $request->code;
            $dates = explode(" - ", $request->date);

            $coupon->start_date         = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $coupon->end_date           = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            $coupon->discount_type      = $request->discount_type;
            $coupon->discount           = priceFormatUpdate($request->discount,settingHelper('default_currency'));
            $coupon->product_id         = $request->product_id;
            $coupon->minimum_shopping   = $request->minimum_shopping == '' ? 0 : priceFormatUpdate($request->minimum_shopping,settingHelper('default_currency'));
            $coupon->maximum_discount   = $request->maximum_discount == '' ? null : priceFormatUpdate( $request->maximum_discount,settingHelper('default_currency'));

            if ($request->banner != ''):
                $coupon->banner        = $this->getImageWithRecommendedSize($request->banner,145,110);
                $coupon->banner_id     = $request->banner;
            else:
                $coupon->banner        = [];
            endif;

            $coupon->save();

            $request['coupon_id'] = $coupon->id;
            if ($request->lang == ''):
                $request['lang']    = 'en';
            endif;

            $this->couponLanguage->store($request);

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function update($request){

        DB::beginTransaction();
        try {
            $coupon                     = $this->get($request->coupon_id);
            $coupon->type               = $request->type;
            $coupon->code               = $request->code;
            $dates = explode(" - ", $request->date);

            $coupon->start_date         = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $coupon->end_date           = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            $coupon->discount_type      = $request->discount_type;
            $coupon->discount           =  priceFormatUpdate($request->discount,settingHelper('default_currency'));;
            $coupon->product_id         = $request->product_id;
            $coupon->minimum_shopping   = $request->minimum_shopping == '' ? 1 : priceFormatUpdate($request->minimum_shopping,settingHelper('default_currency'));
            $coupon->maximum_discount   = $request->maximum_discount == '' ? null : priceFormatUpdate( $request->maximum_discount,settingHelper('default_currency'));

            if ($request->banner != ''):
                $coupon->banner        = $this->getImageWithRecommendedSize($request->banner,145,110);
                $coupon->banner_id     = $request->banner;
            else:
                $coupon->banner        = [];
                $coupon->banner_id     = null;
            endif;

            $coupon->save();

            if ($request->coupon_lang_id == '') :
                $this->couponLanguage->store($request);
            else:
                $this->couponLanguage->update($request);
            endif;
            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request){
        DB::beginTransaction();
        try {
            $coupon            = $this->get($request['id']);
            $coupon->status    = $request['status'];
            $coupon->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function couponPage()
    {
        $now = Carbon::now()->format('Y-m-d H:i:s');
        return Coupon::with('currentLanguage')->where('start_date','<=',$now)->where('end_date','>=',$now)->where('status',1)->latest()->paginate(10);
    }

    public function sellerCoupons($id)
    {
        $now = Carbon::now()->format('Y-m-d H:i:s');
        return  Coupon::with('currentLanguage')->where(function ($q) use ($now) {
            $q->where('end_date', '>=', $now);
        })->where('user_id', $id)->where('status', 1)->latest()->paginate(16);
    }

    public function deleteCoupon($request)
    {
        return Checkout::where('coupon_id',$request->coupon_id)->where('user_id',$request->user_id)->where('trx_id',$request->trx_id)->update(['status' => 0]) ;
    }

}
