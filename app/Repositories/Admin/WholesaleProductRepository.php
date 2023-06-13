<?php
namespace App\Repositories\Admin;

use App\Models\Campaign;
use App\Models\CampaignProduct;
use App\Models\Product;
use App\Models\ProductStock;
use App\Models\WholesalePrice;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\Product\ProductLanguageInterface;
use App\Repositories\Interfaces\Admin\WholesaleProductInterface;
use App\Traits\ImageTrait;
use App\Traits\RandomStringTrait;
use App\Traits\SlugTrait;
use Carbon\Carbon;
use Sentinel;
use Illuminate\Support\Facades\DB;

class WholesaleProductRepository implements WholesaleProductInterface

{
    use SlugTrait, ImageTrait, RandomStringTrait;
    protected $productLang;
    protected $products;

    public function __construct(ProductLanguageInterface $productLang, ProductInterface $products)
    {
        $this->productLang  = $productLang;
        $this->products     = $products;
    }

    public function store($request)
    {
        DB::BeginTransaction();
        try {

            $product                   = new Product();

            if ($request->thumbnail ):
                $product->thumbnail        = $this->getImageWithRecommendedSize($request->thumbnail,190,230);
                $product->thumbnail_id     = $request->thumbnail;
            else:
                $product->thumbnail        = [];
            endif;
            if ($request->images != ''):
                $selected_images = explode(',',$request->images);
                $images = array();
                foreach ($selected_images as $image):
                    $files = $this->getImage($image);
                    array_push($images, $files);
                endforeach;
                $product->images                = $images;
                $product->image_ids             = $request->images;
            else:
                $product->images                = [];
            endif;
            $product->slug                      = $this->getSlug($request->name, $request->slug);
            $product->category_id               = $request->category != '' ? $request->category : null;
            $product->brand_id                  = $request->brand != '' ? $request->brand : null;
            $product->created_by                = Sentinel::getUser()->id;
            if (Sentinel::getUser()->user_type != 'seller'):
                $product->user_id                   = 1;
            else:
                $product->user_id               = Sentinel::getUser()->id;
                if (settingHelper('seller_product_auto_approve') == 1):
                    $product->is_approved           = 1;
                endif;
            endif;
            $product->status                    = $request->status;
            $product->minimum_order_quantity    = $request->minimum_order_quantity != '' ? $request->minimum_order_quantity : 1;
            $product->barcode                   = $request->barcode != '' ? $request->barcode : $this->generate_random_string(16, 'upper');

            if ($request->video_provider != '' && $request->video_url != ''):
                $product->video_provider        = $request->video_provider;
                $product->video_url             = $request->video_url;
            endif;
            $product->price = priceFormatUpdate($request->price,settingHelper('default_currency'));
            if ($request->special_discount_type != ''):
                $product->special_discount_type        = $request->special_discount_type;
                $product->special_discount         = priceFormatUpdate($request->special_discount,settingHelper('default_currency'));;

                $dates = explode(" - ", $request->special_discount_period);

                $product->special_discount_start         = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
                $product->special_discount_end           = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            endif;
            if ($request->has_variant == 1):
                $product->has_variant   = 1;
                $product->current_stock = 0;
            else:
                $product->current_stock         = $request->current_stock != '' ? $request->current_stock : 0;
            endif;


            $product->colors                = $request->colors ?? [];
            $product->attribute_sets        = $request->attribute_sets ?? [];
            if ($request->has('vat_taxes')):
                $product->vat_taxes             = implode(',', $request->vat_taxes);
            endif;

            if ($request->meta_image != ''):
                $product->meta_image = $this->getImageWithRecommendedSize($request->meta_image,1200,630);
                $product->meta_image_id     = $product->thumbnail_id;
            else:
                $product->meta_image        = $product->thumbnail;
                $product->meta_image_id     = $product->thumbnail_id;
            endif;

            if ($request->low_stock_to_notify != ''):
                $product->stock_notification = 1;
                $product->low_stock_to_notify   = $request->low_stock_to_notify;
            endif;
            $product->stock_visibility      = $request->stock_visibility ?? 'hide_stock';
            if ($request->has('cash_on_delivery')):
                $product->cash_on_delivery      = 1;
            endif;
            if ($request->has('is_refundable')):
                $product->is_refundable      = 1;
            endif;
            if ($request->has('is_catalog')):
                $product->is_catalog      = 1;
            endif;
            if ($request->has('is_featured')):
                $product->is_featured      = 1;
            endif;

            //digital product will not get delivered
            if ($request->has('is_digital')):
                $product->is_digital      = 1;
            else:
                $product->estimated_shipping_days      = $request->estimated_shipping_days != '' ? $request->estimated_shipping_days : 0;
            endif;

            if ($request->has('todays_deal')):
                $product->todays_deal      = $request->todays_deal;
            endif;

            //cost
            if ($request->has('shipping_type')) :
                if($request->shipping_type == 'free_shipping'):
                    $product->shipping_fee = 0.00;
                elseif ($request->shipping_type == 'flat_rate'):
                    $product->shipping_fee = $request->shipping_fee != '' ? priceFormatUpdate($request->shipping_fee,settingHelper('default_currency')) : 0.00;
                endif;
                $product->shipping_type = $request->shipping_type;

                if ($request->has('shipping_fee_depend_on_quantity')):
                    $product->shipping_fee_depend_on_quantity = $request->shipping_fee_depend_on_quantity;
                else:
                    $product->shipping_fee_depend_on_quantity = 0;
                endif;
            endif;

            if ($request->has('is_classified')):
                $product->is_classified      = 1;

                $contact_details['contact_name']    = $request->contact_name;
                $contact_details['phone_no']        = $request->phone_no;
                $contact_details['email']           = $request->email;
                $contact_details['address']         = $request->address;
                $contact_details['others']          = $request->others;

                $product->contact_info              = $contact_details;
            endif;

            $product->is_wholesale                  = 1;
            $product->save();

            $request['product_id'] = $product->id;
            if (!isset($request->lang)) :
                $request['lang']   = 'en';
            endif;

            $this->productLang->store($request);

//            if($request->vat_taxes) :
//                foreach ($request->vat_taxes as $vat_tax) :
//                    $percentage         = VatTax::find($vat_tax)->percentage;
//                    $product_tax        = new ProductVatTax();
//                    $product_tax->product_id = $product->id;
//                    $product_tax->vat_tax_id = $vat_tax;
//                    $product_tax->amount     = $percentage;
//                    $product_tax->save();
//                endforeach;
//            endif;

            if($request->campaign) :
                $campaign_product               = new CampaignProduct();
                $campaign_product->campaign_id  = $request->campaign;
                $campaign_product->product_id   = $product->id;
                $campaign_product->discount     = priceFormatUpdate($request->campaign_discount ,settingHelper('default_currency'));
                $campaign_product->discount_type  = $request->campaign_discount_type;
                $campaign_product->save();

                $campaign = Campaign::find($request->campaign);
                $product->special_discount_type = $request->campaign_discount_type;
                $product->special_discount = priceFormatUpdate($request->campaign_discount ,settingHelper('default_currency'));
                $product->special_discount_start = $campaign->start_date;
                $product->special_discount_end = $campaign->end_date;
            endif;

            if ($product->has_variant == 1 && $request->has('variant_name')):
                $total_stock = 0;
                foreach ($request->variant_name as $key => $variant):
                    if ($request['variant_name'][$key]):
                        $product_stock                  = new ProductStock();
                        $product_stock->product_id      = $product->id;
                        $product_stock->name            = $request['variant_name'][$key];
                        $product_stock->sku             = $request['variant_sku'][$key];
                        $product_stock->current_stock   = $request['variant_stock'][$key];
                        $product_stock->price           = priceFormatUpdate($request['variant_price'][$key],settingHelper('default_currency'));
                        if ($request['variant_image'][$key] != ''):
                            $files  = $this->getImage($request['variant_image'][$key]);
                            if ($files):
                                $product_stock->image       = $files;
                                $product_stock->image_id    = $request['variant_image'][$key];
                            else:
                                $product_stock->image       = [];
                            endif;
                        else:
                            $product_stock->image       = [];
                        endif;
                        $total_stock += $product_stock->current_stock;
                        $product_stock->save();
                    endif;

                    $selected_variants      = array();
                    $selected_variants_ids  = array();

                    if ($request->has('attribute_sets')):
                        foreach ($request->attribute_sets as $attribute_set):
                            $attribute_values = 'attribute_values_'.$attribute_set;
                            $values = array();
                            if ($request->has($attribute_values)):
                                foreach ($request[$attribute_values] as $value):
                                    array_push($values, $value);
                                    array_push($selected_variants_ids, $value);
                                endforeach;
                                $selected_variants[$attribute_set] = $values;
                            endif;
                        endforeach;
                    endif;
                    $product->selected_variants     = $selected_variants;
                    $product->selected_variants_ids = $selected_variants_ids;
                endforeach;

                $product->current_stock         = $total_stock;
                $product->save();
            else:
                $product_stock                  = new ProductStock();
                $product_stock->product_id      = $product->id;
                $product_stock->sku             = $request->sku;
                $product_stock->name            = '';
                $product_stock->price           = priceFormatUpdate($product->price,settingHelper('default_currency'));
                $product_stock->current_stock   = $product->current_stock;
                $product_stock->save();
            endif;
            $qty = $request->min_qty;
            if ($qty):
                foreach ($qty as $key => $value):
                    $wholesale                      = new WholesalePrice();
                    $wholesale->product_stock_id    = $product_stock->id;
                    $wholesale->min_qty             = $request->min_qty[$key];
                    $wholesale->max_qty             = $request->max_qty[$key];
                    $wholesale->price               = priceFormatUpdate($request->wholesaleprice[$key],settingHelper('default_currency'));

                    $wholesale->save();
                endforeach;
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }

    }

    public function update($request)
    {
        DB::BeginTransaction();
        try {
            $product                   = $this->products->get($request->id);

            if ($request->thumbnail):
                $product->thumbnail = $this->getImageWithRecommendedSize($request->thumbnail,190,230);
                $product->thumbnail_id     = $request->thumbnail;
            else:
                $product->thumbnail        = [];
                $product->thumbnail_id     = null;
            endif;
            if ($request->images != ''):
                $selected_images = explode(',',$request->images);
                $images = array();
//                foreach ($selected_images as $image):
//                    $files = $this->getImage($image);
//                    array_push($images, $files);
//                endforeach;
                foreach ($selected_images as $image):
                    $files = $this->getImage($image);
                    array_push($images, $files);
                endforeach;
                $product->images                = $images;
                $product->image_ids             = $request->images;
            else:
                $product->images                = [];
                $product->image_ids             = null;
            endif;

            $product->slug                      = $this->getSlug($request->name, $request->slug);
            $product->category_id               = $request->category != '' ? $request->category : null;
            $product->brand_id                  = $request->brand != '' ? $request->brand : null;
//            $product->created_by                = Sentinel::getUser()->id;

            $product->minimum_order_quantity    = $request->minimum_order_quantity != '' ? $request->minimum_order_quantity : 1;
            $product->barcode                   = $request->barcode != '' ? $request->barcode : $this->generate_random_string(16, 'upper');

            if ($request->video_provider != '' && $request->video_url != ''):
                $product->video_provider        = $request->video_provider;
                $product->video_url             = $request->video_url;
            else:
                $product->video_provider    = '';
                $product->video_url         = '';
            endif;

            $product->price = priceFormatUpdate($request->price,settingHelper('default_currency'));

            if ($request->special_discount_type != ''):
                $product->special_discount_type    = $request->special_discount_type;
                $product->special_discount         = priceFormatUpdate($request->special_discount,settingHelper('default_currency'));

                $dates = explode(" - ", $request->special_discount_period);

                $product->special_discount_start         = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
                $product->special_discount_end           = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            else :
                $product->special_discount_type        = null;
                $product->special_discount             = 0.00;

                $product->special_discount_start         = null;
                $product->special_discount_end           = null;
            endif;
            if ($request->has_variant == 1):
                $product->has_variant   = 1;
                $product->current_stock = 0;
                $product->colors                = $request->colors ?? [];
                $product->attribute_sets        = $request->attribute_sets ?? [];
            else:
                $product->has_variant   = 0;
                $product->colors                = [];
                $product->attribute_sets        = [];
                $product->current_stock         = $request->current_stock != '' ? $request->current_stock : 0;
            endif;


            if ($request->has('vat_taxes')):
                $product->vat_taxes             = implode(',', $request->vat_taxes);
            else:
                $product->vat_taxes             = '';
            endif;

            if ($request->meta_image != ''):
                $product->meta_image = $this->getImageWithRecommendedSize($request->meta_image,1200,630);
                $product->meta_image_id     = $request->meta_image;
            else:
                $product->meta_image        = $product->thumbnail;
                $product->meta_image_id     = $product->thumbnail_id;
            endif;

            if ($request->low_stock_to_notify != ''):
                $product->stock_notification = 1;
                $product->low_stock_to_notify   = $request->low_stock_to_notify;
            endif;
            $product->stock_visibility      = $request->stock_visibility ?? 'hide_stock';
            if ($request->has('cash_on_delivery')):
                $product->cash_on_delivery      = 1;
            else:
                $product->cash_on_delivery      = 0;
            endif;
            if ($request->has('is_refundable')):
                $product->is_refundable      = 1;
            else:
                $product->is_refundable      = 0;
            endif;
            if ($request->has('is_catalog')):
                $product->is_catalog      = 1;
            else:
                $product->is_catalog      = 0;
            endif;
            if ($request->has('is_featured')):
                $product->is_featured      = 1;
            else:
                $product->is_featured      = 0;
            endif;
            //digital product will not get delivered
            if ($request->has('is_digital')):
                $product->is_digital      = 1;
            else:
                $product->is_digital      = 0;
                $product->estimated_shipping_days      = $request->estimated_shipping_days != '' ? $request->estimated_shipping_days : 0;
            endif;

            if ($request->has('todays_deal')):
                $product->todays_deal      = $request->todays_deal;
            else:
                $product->todays_deal      = 0;
            endif;

            //cost
            if ($request->has('shipping_type')) :
                if($request->shipping_type == 'free_shipping'):
                    $product->shipping_fee = 0.00;
                elseif ($request->shipping_type == 'flat_rate'):
                    $product->shipping_fee = $request->shipping_fee != '' ? priceFormatUpdate($request->shipping_fee ,settingHelper('default_currency')): 0.00;
                endif;
                $product->shipping_type = $request->shipping_type;

                if ($request->has('shipping_fee_depend_on_quantity')):
                    $product->shipping_fee_depend_on_quantity = $request->shipping_fee_depend_on_quantity;
                else:
                    $product->shipping_fee_depend_on_quantity = 0;
                endif;
            endif;
            if ($request->has('is_classified')):
                $product->is_classified      = 1;

                $contact_details['contact_name']    = $request->contact_name;
                $contact_details['phone_no']        = $request->phone_no;
                $contact_details['email']           = $request->email;
                $contact_details['address']         = $request->address;
                $contact_details['others']          = $request->others;
                $product->contact_info              = $contact_details;
            endif;
//            $product->status       = $request->status;
            $product->save();

            $request['product_id'] = $product->id;
            if (!isset($request->lang)) :
                $request['lang']   = 'en';
            endif;

            $this->productLang->store($request);

//            if($request->vat_taxes) :
//                foreach ($request->vat_taxes as $vat_tax) :
//                    $percentage         = VatTax::find($vat_tax)->percentage;
//                    $product_tax        = new ProductVatTax();
//                    $product_tax->product_id = $product->id;
//                    $product_tax->vat_tax_id = $vat_tax;
//                    $product_tax->amount     = $percentage;
//                    $product_tax->save();
//                endforeach;
//            endif;

            if($request->campaign) :
                if($product->campaign):
                    $campaign_product = CampaignProduct::find($product->campaign->id);
                else :
                    $campaign_product = new CampaignProduct();
                endif;
                $campaign_product->campaign_id  = $request->campaign;
                $campaign_product->product_id   = $product->id;
                $campaign_product->discount     = priceFormatUpdate($request->campaign_discount,settingHelper('default_currency'));
                $campaign_product->discount_type  = $request->campaign_discount_type;
                $campaign_product->save();

                $campaign = Campaign::find($request->campaign);
                $product->special_discount_type = $request->campaign_discount_type;
                $product->special_discount = priceFormatUpdate($request->campaign_discount,settingHelper('default_currency'));
                $product->special_discount_start = $campaign->start_date;
                $product->special_discount_end = $campaign->end_date;
            endif;
            foreach ($product->stock as $key => $stock):
                $stock->delete();
            endforeach;
            if ($product->has_variant == 1 && $request->has('variant_name')):
                $total_stock = 0;
                foreach ($request->variant_name as $key => $variant):
                    if ($request['variant_name'][$key]):
                        $product_stock = ProductStock::where('product_id', $product->id)->where('name', $request['variant_name'][$key])->first();
                        if ($product_stock == ''):
                            $product_stock                  = new ProductStock();
                        endif;
                        $product_stock->product_id      = $product->id;
                        $product_stock->name            = $request['variant_name'][$key];
                        $product_stock->sku             = $request['variant_sku'][$key];
                        $product_stock->current_stock   = $request['variant_stock'][$key];
                        $product_stock->price           = priceFormatUpdate($request['variant_price'][$key],settingHelper('default_currency'));
                        if ($request['variant_image'][$key] != ''):
                            $files  = $this->getImage($request['variant_image'][$key]);
                            if ($files):
                                $product_stock->image       = $files;
                                $product_stock->image_id    = $request['variant_image'][$key];
                            else:
                                $product_stock->image       = [];
                                $product_stock->image_id    = null;
                            endif;
                        else:
                            $product_stock->image       = [];
                            $product_stock->image_id    = null;
                        endif;
                        $total_stock += $product_stock->current_stock;
                        $product_stock->save();
                    endif;

                    $selected_variants      = array();
                    $selected_variants_ids  = array();

                    if ($request->has('attribute_sets')):
                        foreach ($request->attribute_sets as $attribute_set):
                            $attribute_values = 'attribute_values_'.$attribute_set;
                            $values = array();
                            if ($request->has($attribute_values)):
                                foreach ($request[$attribute_values] as $value):
                                    array_push($values, $value);
                                    array_push($selected_variants_ids, $value);
                                endforeach;
                                $selected_variants[$attribute_set] = $values;
                            endif;
                        endforeach;
                    endif;
                    $product->selected_variants     = $selected_variants;
                    $product->selected_variants_ids = $selected_variants_ids;
                endforeach;

                $product->current_stock     = $total_stock;
                $product->save();
            else:
                $product_stock                  = $product->stock->first();
                if ($product_stock == ''):
                    $product_stock                  = new ProductStock();
                endif;
                $product_stock->product_id      = $product->id;
                $product_stock->sku             = $request->sku;
                $product_stock->name            = '';
                $product_stock->price           = priceFormatUpdate($product->price,settingHelper('default_currency'));
                $product_stock->image           = [];
                $product_stock->image_id        = null;
                $product_stock->current_stock   = $product->current_stock;
                $product_stock->save();
            endif;
            WholesalePrice::where('product_stock_id', $product_stock->id)->delete();
            $qty = $request->min_qty;
            if ($qty):
                foreach ($qty as $key => $value):
                    $wholesale                      = new WholesalePrice();
                    $wholesale->product_stock_id    = $product_stock->id;
                    $wholesale->min_qty             = $request->min_qty[$key];
                    $wholesale->max_qty             = $request->max_qty[$key];
                    $wholesale->price               = priceFormatUpdate($request->wholesaleprice[$key],settingHelper('default_currency'));

                    $wholesale->save();
                endforeach;
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function wholesalePrices($id)
    {
        // TODO: Implement wholesalePrices() method.
        return WholesalePrice::where('product_stock_id',Product::find($id)->stock->first()->id)->get();
    }
}
