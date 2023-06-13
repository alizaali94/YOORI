<?php

namespace App\Repositories\Admin;
use App\Models\Cart;
use App\Models\CompareProduct;
use App\Models\CouponLanguage;
use App\Models\DeliveryHero;
use App\Models\OfflineMethodLanguage;
use App\Models\PageLanguage;
use App\Models\ServiceLanguage;
use App\Models\VideoShoppingLanguage;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use App\Models\Blog;
use App\Models\User;
use App\Models\Product;
use App\Models\PickupHub;
use App\Traits\ImageTrait;
use App\Models\OrderDetail;
use App\Models\BrandLanguage;
use App\Models\CampaignProduct;
use App\Models\AppIntroLanguage;
use App\Models\CampaignLanguage;
use App\Models\CategoryLanguage;
use App\Models\PickupHubLanguage;
use App\Models\SupportDepartment;
use App\Models\BlogCategoryLanguage;
use App\Models\SupportDepartmentLanguages;
use App\Repositories\Interfaces\UserInterface;
use App\Repositories\Interfaces\Admin\CommonInterface;
use Sentinel;

class CommonRepository implements CommonInterface{
    use ImageTrait;

    private $user;

    public function __construct(UserInterface $user)
    {
        $this->user = $user;
    }

    public function delete($table, $id){
        DB::beginTransaction();
        try {
            if ($table == 'staff' || $table == 'customer' || $table == 'seller'):
                $user = User::find($id);
                $this->deleteImage($user->images);
                $user->delete();
            elseif($table == 'delivery_hero'):
                $user = User::find($id);
                $this->deleteImage($user->images);
                $deliveryHero = DeliveryHero::where('user_id',$id)->first();
                $this->deleteImage($deliveryHero->driving_licence_image);
                $deliveryHero->delete();
                $user->delete();
            elseif($table == 'brands'):
                BrandLanguage::where('brand_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'categories'):
                CategoryLanguage::where('category_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'blog_categories'):
                BlogCategoryLanguage::where('blog_category_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'pages'):
                PageLanguage::where('page_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'blogs'):
                $blog = Blog::withTrashed()->find($id);
                if($blog->status == 'trash'):
                    $blog->forceDelete();
                else:
                    $blog->status = 'trash';
                    $blog->save();
                    Blog::find($id)->delete();
                endif;
            elseif($table == 'products'):
                $product = Product::withTrashed()->find($id);
                Wishlist::where('product_id',$id)->delete();
                CompareProduct::where('product_id',$id)->delete();
                Cart::where('product_id',$id)->delete();
                if($product->status == 'trash'):
//                    ProductLanguage::where('product_id',$id)->delete();
//                    ProductStock::where('product_id',$id)->delete();
                    CampaignProduct::where('product_id',$id)->delete();

                    $product->is_deleted = 1;

                    if ($product->description_images && count($product->description_images) > 0)
                    {
                        foreach ($product->description_images as $description_image) {
                            $this->deleteFile($description_image['image'],$description_image['storage']);
                        }
                    }

                    $product->save();
//                    $product->forceDelete();
                else:
                    $product->status = 'trash';
                    $product->save();
                    Product::find($id)->delete();
                endif;
            elseif($table == 'campaigns'):
                CampaignLanguage::where('campaign_id',$id)->delete();
                $campaign_products = CampaignProduct::where('campaign_id', $id)->get();

                foreach ($campaign_products as $campaign_product):
                    $this->removeDiscount($campaign_product);
                endforeach;

                CampaignProduct::where('campaign_id', $id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'orders'):
                OrderDetail::where('order_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'pickup_hubs'):
                PickupHub::where('id',$id)->delete();
                PickupHubLanguage::where('pickup_hub_id',$id)->delete();
            elseif($table == 'support_departments'):
                SupportDepartment::where('id',$id)->delete();
                SupportDepartmentLanguages::where('support_department_id',$id)->delete();
            elseif($table == 'vat_taxes'):
                if (vat_tax($id)):
                    return 'used';
                endif;
                DB::table($table)->delete($id);

            elseif($table == 'app_intros'):
                AppIntroLanguage::where('app_intro_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'campaign_products'):
                $campaign_product = CampaignProduct::findOrFail($id);

                $this->removeDiscount($campaign_product);

                $campaign_product->delete();
            elseif($table == 'coupons'):
                CouponLanguage::where('coupon_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'offline_methods'):
                OfflineMethodLanguage::where('offline_method_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'sliders'):
                DB::table($table)->delete($id);
            elseif($table == 'services'):
                ServiceLanguage::where('service_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'video_shoppings'):
                VideoShoppingLanguage::where('video_shopping_id',$id)->delete();
                DB::table($table)->delete($id);
            elseif($table == 'currencies'):
                DB::table($table)->delete($id);
                cache()->flush();
                Artisan::call('optimize:clear');
            else:
                DB::table($table)->delete($id);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function removeDiscount($campaign_product)
    {
        try {
            $product = Product::find($campaign_product->product_id);
            $product->special_discount_type = null;
            $product->special_discount      = 0.00;
            $product->special_discount_start  = null;
            $product->special_discount_end    = null;
            $product->save();

            return true;
        } catch (\Exception $e){
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $user           = $this->user->get($request['id']);
            $user->status   = $request['status'];
            $user->save();

            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function sellerProductDelete($request)
    {
        $id = $request->id;
        DB::beginTransaction();
        try {
            $product = Product::withTrashed()->find($id);
            Wishlist::where('product_id',$id)->delete();
            CompareProduct::where('product_id',$id)->delete();
            Cart::where('product_id',$id)->delete();
            if($request->status == 'trash'):
                CampaignProduct::where('product_id',$id)->delete();

                $product->is_deleted = 1;

                if ($product->description_images && count($product->description_images) > 0)
                {
                    foreach ($product->description_images as $description_image) {
                        $this->deleteFile($description_image['image'],$description_image['storage']);
                    }
                }

                $product->save();
            else:
                $product->status = 'trash';
                $product->save();
                Product::find($id)->delete();
            endif;
            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }
}
