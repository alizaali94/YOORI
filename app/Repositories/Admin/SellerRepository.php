<?php

namespace App\Repositories\Admin;

use App\Models\SellerProfile;
use App\Models\User;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Traits\ImageTrait;
use App\Traits\SendMailTrait;
use Brian2694\Toastr\Facades\Toastr;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use DB;
use Sentinel;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class SellerRepository implements SellerInterface
{
    use ImageTrait,SendMailTrait;

    protected $sellerProfile;

    public function __construct(SellerProfileInterface $sellerProfile)
    {
        $this->sellerProfile = $sellerProfile;
    }

    public function get($id)
    {
        return User::find($id);
    }

    public function getSeller($id)
    {
        return SellerProfile::find($id);
    }
    public function all()
    {
        return User::with('sellerProfile')->where('user_type', 'seller')->latest();
    }

    public function paginate($request, $limit)
    {

        return User::with('sellerProfile')->where('user_type','seller')
            ->when($request->q != null, function ($query) use ($request){

                $query->where(function ($q) use ($request){
                    $q->where('email', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere('phone', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%".$request->q."%");
                });
                $query->orwhereHas('sellerProfile', function ($q) use ($request){
                    $q->where('shop_name', 'LIKE', '%'.$request->q.'%');
                });
            })
            ->when($request->a != null, function ($query) use ($request){
                $query->whereHas('sellerProfile', function ($que) use ($request){
                    $que->when($request->a == "unverified", function ($q) use ($request){
                        $q->WhereNull('verified_at');
                    });
                    $que->when($request->a == "verified", function ($q) use ($request){
                        $q->WhereNotNull('verified_at');
                    });
                });
            })
            ->latest()
            ->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {

            if (!blank($request->file('image'))) {
                $requestImage   = $request->file('image');
                $image_response = $this->saveImage($requestImage, '_staff_');
            }

            $user = new User();
            $user->first_name   = $request->first_name;
            $user->last_name    = $request->last_name;
            $user->email        = $request->email;
            $user->phone        = $request->phone;
            $user->user_type    = 'seller';
            $user->password     = bcrypt($request->password);
            $user->permissions  = [];
            $user->images       = $image_response['images'] ?? [];
            $user->save();

            $request['user_id'] = $user->id;
            $this->sellerProfile->store($request);

            $activation = Activation::create($user);
            try {
//                sendMail($user, $activation->code, 'verify_email', '');
                $this->sendmail($request->email, 'Registration', $user, 'email.auth.activate-account-email',url('/') . '/activation/' . $request->email . '/' . $activation->code);

            } catch (\Exception $e) {
                Toastr::error(__('Please check your email configuration'));
                DB::rollback();
                return false;
            }

            Toastr::success(__('Created Successfully'));
            DB::commit();
            return true;

        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {


        DB::beginTransaction();
        try {

            $user = $this->get($request->id);

            if (!blank($request->file('image'))) {
                $requestImage = $request->file('image');

                $this->deleteImage($user->images);
                $image_response = $this->saveImage($requestImage, '_staff_');
                $user->images = $image_response['images'];
            }

            $user->first_name       = $request->first_name;
            $user->last_name        = $request->last_name;
            $user->phone            = $request->phone;
            $user->email            = $request->email;
            if ($request->password != ""):
                    $user->password = bcrypt($request->password);
            endif;
            $user->save();
            $request['user_id']     = $request->id;

            $seller_profile         = SellerProfile::where('user_id', $request->id)->first();

            if (!blank($seller_profile)):
                $this->sellerProfile->update($request);
            else:
                $this->sellerProfile->store($request);
            endif;


            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function verify($id){

        DB::beginTransaction();
        try {
            $shop = SellerProfile::find($id);
            if($shop->verified_at == null):
                $shop->verified_at = Carbon::now();
            else:
                $shop->verified_at = null;
            endif;
            $shop->save();
            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function shop(){
        return SellerProfile::latest();
    }
    public function sellerProfileUpdate($request){
        DB::beginTransaction();
        try {
            $request['user_id']     = authUser($request)->id;
            $this->sellerProfile->update($request);
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function allSeller($data)
    {
        $sellers = SellerProfile::query();

        if (array_key_exists('sort',$data))
        {
            if ($data['sort'] == 'newest') {
                $sellers->latest();
            } elseif ($data['sort'] == 'oldest') {
                $sellers->oldest();
            } elseif ($data['sort'] == 'top_rated') {
                $sellers->orderBy('rating_count', 'desc');
            } elseif ($data['sort'] == 'top_selling') {
                $sellers->withSum('products','total_sale')->orderBy('products_sum_total_sale', 'desc');
            }
        }
        else{
            $sellers->latest();
        }

        if (!array_key_exists('paginate',$data))
        {
            $data['paginate'] = 12;
        }


        return $sellers->Available()->paginate($data['paginate']);
    }

    public function homePageSellers()
    {
        $sellers = SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')->whereHas('products',function ($q){
            $q->orderBy('total_sale','desc');
        })->Available()->take(10)->get();
        return $sellers->makeHidden(['logo','banner']);
    }
    public function homePageBestSellers()
    {
        $sellers = SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')->with(['products' => function($q){
            $q->ProductPublished();
        }])->orderBy('rating_count','desc')
            ->Available()
            ->get();
        return $sellers->makeHidden(['logo','banner']);
    }

    public function homePageFeaturedSellers($ids)
    {
        $sellers = SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')->with(['products' => function($q){
            $q->ProductPublished();
        }])->orderBy('rating_count','desc')
            ->Available()
            ->whereIn('user_id',$ids)->get();
        return $sellers->makeHidden(['logo','banner']);
    }

    public function homePageExpressSellers($ids)
    {
        $sellers = SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')->whereIn('user_id',$ids)->Available()->get();
        return $sellers->makeHidden(['logo','banner']);
    }

    public function shopData($slug)
    {
        return SellerProfile::where('slug',$slug)->select('banner','meta_title','meta_description','shop_name')->Available()->first();
    }

    public function shopByCampaign($id,$paginate=null)
    {
        if (!$paginate)
        {
            $paginate = 12;
        }

        return SellerProfile::whereHas('products', function ($query) use ($id){
            $query->whereHas('campaign', function ($q) use ($id){
                $q->where('status','accepted')->where('campaign_id',$id);
            });
        })->Available()->latest()->paginate($paginate);
    }

    public function sellerShopUpdate($request)
    {
        DB::beginTransaction();
        try {
            $request['user_id']     = Sentinel::getUser()->id;
            $this->sellerProfile->shopUpdate($request);
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function followedSeller()
    {
        return SellerProfile::whereHas('follow', function ($query){
            $query->where('user_id',authId());
        })->Available()->latest()->paginate(12);
    }

    public function followSeller($seller_id)
    {
        $user = Sentinel::getUser();
        return $user->sellers()->attach($seller_id);
    }

    public function unfollowSeller($seller_id)
    {
        $user   = Sentinel::getUser();
        $user->sellers()->detach($seller_id);
        $records = $user->sellers;
        return $records;

    }

    public function allSellerAPI($limit)
    {
        return SellerProfile::with('followedUsers')->Available()->latest()->paginate($limit);
    }
    public function bestShop($limit){
        return SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')->with(['products' => function($q){
            $q->ProductPublished();
            }])
            ->orderBy('rating_count','desc')
            ->Available()
            ->paginate($limit);
    }

    public function topShop($limit){
        return SellerProfile::with('followedUsers')->select('id','logo','slug','user_id','shop_name','reviews_count','rating_count','logo','banner')
            ->withSum('products','total_sale')
            ->orderBy('products_sum_total_sale', 'desc')
            ->Available()
            ->paginate($limit);
    }
}
