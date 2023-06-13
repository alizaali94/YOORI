<?php

namespace App\Repositories\Admin;

use App\Models\SellerProfile;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use DB;
use Sentinel;

class SellerProfileRepository implements SellerProfileInterface
{
    use ImageTrait;
    use SlugTrait;

    public function get($id)
    {
        return SellerProfile::find($id);
    }

    public function all()
    {
        return SellerProfile::latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {

        DB::beginTransaction();
        try {
            if (!blank($request->file('logo'))) {
                $requestImage           = $request->file('logo');
                $image_response_logo    = $this->saveImage($requestImage, 'seller_logo');
            }
            if (!blank($request->file('banner'))) {
                $requestImage           = $request->file('banner');
                $image_response_banner  = $this->saveImage($requestImage, 'seller_banner');
            }
            if (!blank($request->file('tax_paper'))) {
                $requestImage           = $request->file('tax_paper');
                $tax_paper              = $this->saveFile($requestImage, 'seller_banner',false);
            }
            $seller                     = new SellerProfile();
            $seller->shop_name          = $request->shop_name;
            $seller->user_id            = $request->user_id;
            $seller->slug               = $this->getSlug($request->shop_name, $request->slug);
            $seller->phone_no           = $request->phone_no;
            $seller->address            = $request->address;
            $seller->facebook           = $request->facebook;
            $seller->google             = $request->google;
            $seller->twitter            = $request->twitter;
            $seller->youtube            = $request->youtube;
            $seller->license_no         = $request->license_no;

            $seller->logo               = $image_response_logo['images'] ?? [];
            $seller->banner             = $image_response_banner['images'] ?? [];

            if ($request->shop_banner != '' || $request->has('shop_banner')):
                $seller->shop_banner    = $this->getImageWithRecommendedSize($request['shop_banner'], '899','480', true);
                $seller->shop_banner_id = $request->shop_banner;
            else:
                $seller->shop_banner_id = null;
                $seller->shop_banner = [];
            endif;

            $seller->tax_paper          = $tax_paper ?? [];

            $shop_page_content          = [["new_arrival"=>"1"],["best_selling_products"=>"3"],["best_rated_products"=>"2"]];
            $seller->shop_page_contents = $shop_page_content;

            $seller->meta_title         = $request->meta_title;
            $seller->meta_description   = $request->meta_description;
            $seller->save();

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
            $seller = SellerProfile::where('user_id', $request->user_id)->first();

            $seller->shop_name = $request->shop_name;
            $seller->slug = $this->getSlug($request->shop_name, $request->slug);
            $seller->phone_no = $request->phone_no;
            $seller->address = $request->address;
            $seller->facebook = $request->facebook;
            $seller->google = $request->google;
            $seller->twitter = $request->twitter;
            $seller->youtube = $request->youtube;

            if ($request->file('logo') != ''):
                $this->deleteImage($seller->logo);
                $requestImage = $request->file('logo');
                $image_response_logo = $this->saveImage($requestImage, 'seller_logo');
                $seller->logo = $image_response_logo['images'];
            endif;
            if ($request->file('banner') != ''):
                $this->deleteImage($seller->banner);
                $requestImage = $request->file('banner');
                $image_response_banner = $this->saveImage($requestImage, 'seller_banner');
                $seller->banner = $image_response_banner['images'] ?? [];
            endif;
            if ($request->file('tax_paper') != ''):
                $this->deleteImage($seller->tax_paper);
                $requestImage = $request->file('tax_paper');
                $image_response_tax_paper = $this->saveImage($requestImage, '_shop_');
                $seller->tax_paper = $image_response_tax_paper['images'] ?? [];
            endif;
            $seller->shop_tagline       = $request->shop_tagline;
            if ($request->shop_banner):
                $files                  = $this->getImageWithRecommendedSize($request['shop_banner'], '899','480', true);
                if ($files):
                    $seller->shop_banner    = $files;
                    $seller->shop_banner_id = $request->shop_banner;
                else:
                    $seller->shop_banner_id = null;
                    $seller->shop_banner = [];
                endif;
            else:
                $seller->shop_banner_id = null;
                $seller->shop_banner = [];
            endif;

            $seller->meta_title = $request->meta_title;
            $seller->meta_description = $request->meta_description;

            $seller->license_no = $request->license_no;
            $seller->save();

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return 0;
        }
    }

    public function sellerBySlug($slug)
    {
        return SellerProfile::where('slug',$slug)->first();
    }

    public function shopUpdate($request)
    {
        $shop_page_contents = [];
        $for_mobile = $request->has('for_mobile') ? : false;

        if ($request->contents):
            foreach ($request->contents as $key => $content):
                $content_number = $request->content_numbers[$key];
                $requested_content = $content . '_' . $content_number;
                if ($content == 'banner'):
                    $shop_page_contents[$key]['banner']['thumbnail'] = [];
                    $shop_page_contents[$key]['banner']['url'] = [];
                    $banner_thumbnail = 'banner_thumbnail_' . $content_number;
                    $banner_url = 'banner_url_' . $content_number;
                    foreach ($request->$banner_thumbnail as $url_key => $thumbnail):

                        $this->getImageArrayRecommendedSize($thumbnail,[1260,620,400,300],[452,320,235,170]);

                        $url = $request->$banner_url[$url_key];
                        array_push($shop_page_contents[$key]['banner']['thumbnail'], $thumbnail);
                        array_push($shop_page_contents[$key]['banner']['url'], $url);
                    endforeach;
                    unset($request[$banner_thumbnail]);
                    unset($request[$banner_url]);
                elseif ($content == 'featured_products' || $content == 'new_arrival' || $content == 'todays_deal' ||
                    $content == 'best_rated_products' || $content == 'best_selling_products' || $content == 'offer_ending_soon'):
                    $shop_page_contents[$key][$content] = $request->$requested_content;
                endif;
                unset($request[$requested_content]);
            endforeach;
        endif;
        $shop_page_content = [["new_arrival"=>"1"],["best_selling_products"=>"3"],["best_rated_products"=>"2"]];
        $seller_profile = Sentinel::getUser()->sellerProfile;
        if ($shop_page_contents == []):
            $shop_page_contents = $shop_page_content;
        endif;
        if($for_mobile):
            $seller_profile->mobile_shop_page_contents = $shop_page_contents;
        else:
            $seller_profile->shop_page_contents = $shop_page_contents;
        endif;
        $seller_profile->save();

        return true;
    }

    public function shopFollower()
    {
        return SellerProfile::join('seller_profile_user','seller_profile_user.seller_profile_id','sellers.id')
            ->selectRaw('sellers.id,seller_profile_user.user_id')->get();
   }
    public function shopFollowerForApi($user = null,$paginate = 10)
    {
        if (!$user) {
            $user   = authUser();
        }
        return SellerProfile::whereHas('followedUsers',function($query) use($user){
            $query->where('user_id',$user->id);
        })->latest()->paginate($paginate);
    }

    public function shopDetails($slug)
    {
        return SellerProfile::where('slug',$slug)->Available()->first();
    }

    public function shopDetailsForMobile($id)
    {
        return SellerProfile::where('user_id',$id)->Available()->first();
    }

}
