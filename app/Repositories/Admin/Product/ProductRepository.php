<?php

namespace App\Repositories\Admin\Product;

use App\Models\Campaign;
use App\Models\CampaignProduct;
use App\Models\Category;
use App\Models\CompareProduct;
use App\Models\Product;
use App\Models\ProductLanguage;
use App\Models\ProductStock;
use App\Models\ProductView;
use App\Models\Search;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\Product\ProductLanguageInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Traits\ImageTrait;
use App\Traits\RandomStringTrait;
use App\Traits\SlugTrait;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Sentinel;

class ProductRepository implements ProductInterface
{
    use SlugTrait, ImageTrait, RandomStringTrait;

    protected $productLang;
    protected $seller;

    public function __construct(ProductLanguageInterface $productLang, SellerInterface $seller)
    {
        $this->productLang  = $productLang;
        $this->seller       = $seller;
    }

    public function get($id)
    {
        return Product::CheckSellerSystem()->find($id);
    }

    public function getByLang($id, $lang)
    {
        if ($lang == null):
            $product_lang = ProductLanguage::with('product')
                ->where('lang', 'en')
                ->where('product_id', $id)
                ->when(settingHelper('seller_system') != 1, function ($q) {
                    $q->whereHas('product', function ($qu) {
                        $qu->where('user_id', 1);
                    });
                })->first();
        else:
            $product_lang = ProductLanguage::with('product')
                ->where('lang', $lang)
                ->where('product_id', $id)
                ->when(settingHelper('seller_system') != 1, function ($q) {
                    $q->whereHas('product', function ($qu) {
                        $qu->where('user_id', 1);
                    });
                })->first();
            if (blank($product_lang)):
                $product_lang = ProductLanguage::with('product')
                    ->where('lang', 'en')
                    ->where('product_id', $id)
                    ->when(settingHelper('seller_system') != 1, function ($q) {
                        $q->whereHas('product', function ($qu) {
                            $qu->where('user_id', 1);
                        });
                    })->first();
                $product_lang['translation_null'] = 'not-found';
            endif;
        endif;

        return $product_lang;
    }

    public function all()
    {
        return Product::with('productLanguages', 'createdBy')
            ->when(!addon_is_activated('wholesale'), function ($q) {
                $q->where('is_wholesale', 0);
            })->CheckSellerSystem()->latest();
    }

    public function paginate($request, $status, $limit, $product_for = null)
    {
        $products = Product::with('createdBy', 'productLanguages','user','stock')
            ->where('is_deleted', 0)
            ->CheckSellerSystem()
            ->whereHas('productLanguages', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->q . '%');
                $q->orWhere('tags', 'like', '%' . $request->q . '%');
                $q->orwhere('description', 'like', '%' . $request->q . '%');
                $q->orwhere('short_description', 'like', '%' . $request->q . '%');
                $q->orwhere('meta_title', 'like', '%' . $request->q . '%');
                $q->orwhere('meta_description', 'like', '%' . $request->q . '%');
                $q->orwhere('meta_keywords', 'like', '%' . $request->q . '%');
            })
            ->when($status == 'trash' && $status != null, function ($query) {
                $query->onlyTrashed();
            })
            ->when($status != 'trash' && $status != 'pending' && $status != null, function ($query) use ($status) {
                $query->where('status', $status)->where('is_approved',1);
            })
            ->when($status == 'pending', function ($query) {
                $query->where('is_approved', 0);
            })
            ->when($request->sq != null, function ($q) use ($request) {
                $q->where('user_id', $request->sq);
            })
            ->when(!addon_is_activated('wholesale'), function ($q) {
                $q->where('is_wholesale', 0);
            })
            ->when($product_for != '', function ($q) use ($product_for) {
                $q->when($product_for == 'admin', function ($for) {
                    $for->where('user_id', 1);
                });
                $q->when($product_for == 'seller', function ($for) {
                    $for->where('user_id', '!=', 1);
                });
                $q->when($product_for == 'digital', function ($for) {
                    $for->where('is_digital', 1);
                });
                $q->when($product_for == 'catalog', function ($for) {
                    $for->where('is_catalog', 1);
                });
                $q->when($product_for == 'classified', function ($for) {
                    $for->where('is_classified', 1);
                });
                $q->when($product_for == 'wholesale', function ($for) {
                    $for->where('is_wholesale', 1);
                });
            })
            ->when($request->sl != null, function ($query) use ($request) {
                $seller = $this->seller->getSeller($request->sl);
                $query->where('user_id', $seller->user_id);
            })
            ->when($request->c != null, function ($q) use ($request) {
                $q->where('category_id', $request->c);
            });
        $sorting = $request->s;
        switch ($sorting) {
            case 'latest_on_top':
                $products->orderByDesc('id');
                break;
            case 'oldest_on_top':
                $products->orderBy('id');
                break;
            case 'sale_high':
                $products->orderByDesc('total_sale');
                break;
            case 'sale_low':
                $products->orderBy('total_sale');
                break;
            case 'rating_high':
                $products->orderByDesc('rating');
                break;
            case 'rating_low':
                $products->orderBy('rating');
                break;
            default:
                $products->orderBy('id', 'desc');
                break;
        }
        return $products->paginate($limit);
    }

    public function stockProduct($request)
    {
        $stocks = ProductStock::query();

        if ($request->p && $request->q) {
            $stocks->whereHas('product.productLanguages', function ($p) use ($request) {
                $p->where('name', 'like', '%' . $request->p . '%');
                $p->orWhere('name', 'like', '%' . $request->q . '%');
                $p->orWhere('barcode', 'like', '%' . $request->p . '%');
                $p->orWhere('barcode', 'like', '%' . $request->q . '%');
            });
        }
        else{
            if ($request->q) {
                $stocks->whereHas('product.productLanguages', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->q . '%');
                    $q->orWhere('barcode', 'like', '%' . $request->q . '%');
                });
            }
            if ($request->p) {
                $stocks->whereHas('product.productLanguages', function ($p) use ($request) {
                    $p->where('name', 'like', '%' . $request->p . '%');
                    $p->orWhere('barcode', 'like', '%' . $request->p . '%');
                });
            }
        }

        if ($request->category_id) {
            $category_ids = \App\Utility\CategoryUtility::getMyAllChildIds($request->category_id);
            $category_ids[] = (int)$request->category_id;

            $stocks->whereHas('product', function ($q) use ($category_ids) {
                $q->whereIn('category_id', $category_ids);
            });
        }

        if ($request->brand_id) {
            $stocks->whereHas('product', function ($q) use ($request) {
                $q->where('brand_id', $request->brand_id);
            });
        }
        return $stocks->with('product.productLanguages')
            ->whereHas('product',function ($query) use ($request){
            $query->when(Sentinel::getUser()->user_type == 'seller', function ($q){
                $q->where('user_id',authId())->UserCheck()->IsWholesale()->ProductPublished();
            });
            $query->when(Sentinel::getUser()->user_type == 'admin', function ($q){
                $q->where('user_id',1)->UserCheck()->IsWholesale()->ProductPublished();
            });
            $query->when(Sentinel::getUser()->user_type == 'staff', function ($q){
                $q->where('user_id',1)->UserCheck()->IsWholesale()->ProductPublished();
            });

        })->where('current_stock', '>', '0')->latest()->paginate(16);
    }

    public function store($request)
    {
        DB::BeginTransaction();
        try {
            $product = new Product();
            $product->description_images = $this->saveMultipleImage($request->description_images,$product);
            if ($request->thumbnail):
                $files     = $this->getImageWithRecommendedSize($request->thumbnail,190,230);
                if ($files):
                    $product->thumbnail     = $files;
                    $product->thumbnail_id  = $request->thumbnail;
                else:
                    $product->thumbnail = [];
                endif;
            else:
                $product->thumbnail = [];
            endif;
            if ($request->images != ''):
                $selected_images        = explode(',', $request->images);
                $images = array();
                foreach ($selected_images as $key=>$image):
                    $files  = $this->getImage($image);
                    if($files):
                        array_push($images, $files);
                    else:
                        unset($selected_images[$key]);
                    endif;
                endforeach;
                $product->images        = $images;
                $product->image_ids     = implode(',',$selected_images);
            else:
                $product->images = [];
            endif;
            $product->slug              = $this->getSlug($request->name, $request->slug);
            $product->category_id       = $request->category != '' ? $request->category : null;
            $product->brand_id          = $request->brand != '' ? $request->brand : null;
            $product->created_by        = authUser($request)->id;
            if (authUser($request)->user_type != 'seller'):
                $product->user_id       = 1;
                $product->is_approved   = 1;
            else:
                $product->user_id = authUser($request)->id;
                if (settingHelper('seller_product_auto_approve') == 1):
                    $product->is_approved = 1;
                endif;
            endif;
            $product->status = $request->status;
            $product->minimum_order_quantity    = $request->minimum_order_quantity != '' ? $request->minimum_order_quantity : 1;
            $product->barcode                   = $request->barcode != '' ? $request->barcode : $this->generate_random_string(16, 'upper');

            if ($request->video_provider != '' && $request->video_url != ''):
                $product->video_provider    = $request->video_provider;
                $product->video_url         = $request->video_url;
            endif;

            $product->price = priceFormatUpdate($request->price ,settingHelper('default_currency'));

            if ($request->special_discount_type != ''):
                $product->special_discount_type     = $request->special_discount_type;
                $product->special_discount          = priceFormatUpdate($request->special_discount,settingHelper('default_currency'));

                $dates = explode(" - ", $request->special_discount_period);

                $product->special_discount_start    = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
                $product->special_discount_end      = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            endif;
            if ($request->has_variant == 1):
                $product->has_variant   = 1;
                $product->current_stock = 0;
            else:
                $product->current_stock = $request->current_stock != '' ? $request->current_stock : 0;
            endif;

            $product->colors            = $request->colors ?? [];
            $product->attribute_sets    = $request->attribute_sets ?? [];
            if ($request->has('vat_taxes')):
                $product->vat_taxes     = implode(',', $request->vat_taxes);
            endif;

            if ($request->meta_image != ''):
                $files     = $this->getImageWithRecommendedSize($request->meta_image, 1200, 630);
                if ($files):
                    $product->meta_image     = $files;
                    $product->meta_image_id  = $request->thumbnail;
                else:
                    $product->meta_image    = $product->thumbnail;
                    $product->meta_image_id = $product->thumbnail_id;
                endif;
            else:
                $product->meta_image    = $product->thumbnail;
                $product->meta_image_id = $product->thumbnail_id;
            endif;

            if ($request->low_stock_to_notify != ''):
                $product->stock_notification    = 1;
                $product->low_stock_to_notify   = $request->low_stock_to_notify;
            endif;
            $product->stock_visibility          = $request->stock_visibility ?? 'hide_stock';
            if ($request->has('cash_on_delivery')):
                $product->cash_on_delivery      = 1;
            endif;
            if ($request->has('is_refundable')):
                $product->is_refundable         = 1;
            endif;
            if ($request->has('is_catalog')):
                $product->is_catalog            = 1;
            endif;
            if ($request->has('is_featured')):
                $product->is_featured           = 1;
            endif;
            //digital product will not get delivered
            if ($request->has('is_digital')):
                $product->is_digital             = 1;
                $product->minimum_order_quantity = 1;
                if ($request->product_file):
                    $file = $this->getFile($request->product_file);
                    if ($file):
                        $product->product_file = $file;
                        $product->product_file_id = $request->product_file;
                    else:
                        $product->product_file = [];
                    endif;
                else:
                    $product->product_file = [];
                endif;
            else:
                $product->estimated_shipping_days = $request->estimated_shipping_days != '' ? $request->estimated_shipping_days : 0;
            endif;

            if ($request->has('todays_deal')):
                $product->todays_deal = $request->todays_deal;
            endif;

            //cost
            if ($request->has('shipping_type')) :
                if ($request->shipping_type == 'free_shipping'):
                    $product->shipping_fee = 0.00;
                elseif ($request->shipping_type == 'flat_rate'):
                    $product->shipping_fee = $request->shipping_fee != '' ?  priceFormatUpdate($request->shipping_fee,settingHelper('default_currency')) : 0.00;
                endif;
                $product->shipping_type = $request->shipping_type;

                if ($request->has('shipping_fee_depend_on_quantity')):
                    $product->shipping_fee_depend_on_quantity = $request->shipping_fee_depend_on_quantity;
                endif;
            endif;

            if ($request->has('is_classified')):
                $product->is_classified = 1;

                $contact_details['contact_name']    = $request->contact_name;
                $contact_details['phone_no']        = $request->phone_no;
                $contact_details['email']           = $request->email;
                $contact_details['address']         = $request->address;
                $contact_details['others']          = $request->others;
                $product->contact_info              = $contact_details;
            endif;

            $product->save();

            $request['product_id'] = $product->id;
            if (!isset($request->lang)) :
                $request['lang'] = 'en';
            endif;

            $this->productLang->store($request);

            if ($request->campaign) :
                $campaign_product                   = new CampaignProduct();
                $campaign_product->campaign_id      = $request->campaign;
                $campaign_product->product_id       = $product->id;
                $campaign_product->discount         = priceFormatUpdate($request->campaign_discount,settingHelper('default_currency'));
                $campaign_product->discount_type    = $request->campaign_discount_type;
                $campaign_product->save();

                $campaign = Campaign::find($request->campaign);
                $product->special_discount_type     = $request->campaign_discount_type;
                $product->special_discount          = priceFormatUpdate($request->campaign_discount,settingHelper('default_currency'));
                $product->special_discount_start    = $campaign->start_date;
                $product->special_discount_end      = $campaign->end_date;
            endif;
            if ($product->has_variant == 1 && $request->has('variant_name')):
                $total_stock = 0;
                foreach ($request->variant_name as $key => $variant):
                    if ($request['variant_name'][$key]):
                        $product_stock                  = new ProductStock();
                        $product_stock->product_id      = $product->id;
                        $product_stock->name            = $request['variant_name'][$key];
                        $product_stock->variant_ids     = $request['variant_ids'][$key];
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
                        $total_stock                    += $product_stock->current_stock;
                        $product_stock->save();
                    endif;

                    $selected_variants = array();
                    $selected_variants_ids = array();

                    if ($request->has('attribute_sets')):
                        foreach ($request->attribute_sets as $attribute_set):
                            $attribute_values = 'attribute_values_' . $attribute_set;
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

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            dd($e);
            return false;
        }

    }

    public function update($request)
    {
        DB::BeginTransaction();
        try {
            $product = $this->get($request->id);
            $product->description_images = $this->saveMultipleImage($request->description_images,$product);

            if ($request->thumbnail):
                $files = $this->getImageWithRecommendedSize($request->thumbnail, 190, 230);
                if ($files):
                    $product->thumbnail = $files;
                    $product->thumbnail_id = $request->thumbnail;
                else:
                    $product->thumbnail = [];
                    $product->thumbnail_id = null;
                endif;
            else:
                $product->thumbnail = [];
                $product->thumbnail_id = null;
            endif;

            if ($request->images != ''):
                $selected_images = explode(',', $request->images);
                $images = array();
                foreach ($selected_images as $key => $image):
                    $files = $this->getImage($image);
                    if ($files):
                        array_push($images, $files);
                    else:
                        unset($selected_images[$key]);
                    endif;
                endforeach;
                $product->images = $images;
                $product->image_ids = implode(',', $selected_images);
            else:
                $product->images = [];
                $product->image_ids = null;
            endif;

            $product->slug = $this->getSlug($request->name, $request->slug);
            $product->category_id = $request->category != '' ? $request->category : null;
            $product->brand_id = $request->brand != '' ? $request->brand : null;
//            $product->created_by                = Sentinel::getUser()->id;

            $product->minimum_order_quantity = $request->minimum_order_quantity != '' ? $request->minimum_order_quantity : 1;
            $product->barcode = $request->barcode != '' ? $request->barcode : $this->generate_random_string(16, 'upper');

            if ($request->video_provider != '' && $request->video_url != ''):
                $product->video_provider = $request->video_provider;
                $product->video_url = $request->video_url;
            else:
                $product->video_provider    = '';
                $product->video_url         = '';
            endif;

            $product->price = priceFormatUpdate($request->price,settingHelper('default_currency'));

            if ($request->special_discount_type != ''):
                $product->special_discount_type = $request->special_discount_type;
                $product->special_discount =  priceFormatUpdate($request->special_discount,settingHelper('default_currency'));

                $dates = explode(" - ", $request->special_discount_period);

                $product->special_discount_start = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
                $product->special_discount_end = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
            else :
                $product->special_discount_type = null;
                $product->special_discount = 0.00;

                $product->special_discount_start = null;
                $product->special_discount_end = null;
            endif;
            if ($request->has_variant == 1):
                $product->has_variant = 1;
                $product->current_stock = 0;
                $product->colors = $request->colors ?? [];
                $product->attribute_sets = $request->attribute_sets ?? [];
            else:
                $product->has_variant = 0;
                $product->colors = [];
                $product->attribute_sets = [];
                $product->current_stock = $request->current_stock != '' ? $request->current_stock : 0;
            endif;


            if ($request->has('vat_taxes')):
                $product->vat_taxes = implode(',', $request->vat_taxes);
            else:
                $product->vat_taxes = '';
            endif;

            if ($request->meta_image != ''):
                $files = $this->getImageWithRecommendedSize($request->meta_image, 1200, 630);
                if ($files):
                    $product->meta_image    = $files;
                    $product->meta_image_id = $request->thumbnail;
                else:
                    $product->meta_image    = $product->thumbnail;
                    $product->meta_image_id = $product->thumbnail_id;
                endif;
            else:
                $product->meta_image = $product->thumbnail;
                $product->meta_image_id = $product->thumbnail_id;
            endif;

            if ($request->low_stock_to_notify != ''):
                $product->stock_notification = 1;
                $product->low_stock_to_notify = $request->low_stock_to_notify;
            endif;
            $product->stock_visibility = $request->stock_visibility ?? 'hide_stock';
            if ($request->has('cash_on_delivery')):
                $product->cash_on_delivery = 1;
            else:
                $product->cash_on_delivery = 0;
            endif;
            if ($request->has('is_refundable')):
                $product->is_refundable = 1;
            else:
                $product->is_refundable = 0;
            endif;
            if ($request->has('is_catalog')):
                $product->is_catalog = 1;
                $product->external_link = $request->external_link;
            else:
                $product->is_catalog = 0;
            endif;
            if ($request->has('is_featured')):
                $product->is_featured = 1;
            else:
                $product->is_featured = 0;
            endif;
            //digital product will not get delivered
            if ($request->has('is_digital')):
                $product->is_digital = 1;
                $product->minimum_order_quantity = 1;
                if ($request->product_file):
                    $file = $this->getFile($request->product_file);
                    if ($file):
                        $product->product_file = $file;
                        $product->product_file_id = $request->product_file;
                    else:
                        $product->product_file = [];
                    endif;
                else:
                    $product->product_file = [];
                endif;
            else:
                $product->is_digital = 0;
                $product->estimated_shipping_days = $request->estimated_shipping_days != '' ? $request->estimated_shipping_days : 0;
            endif;

            if ($request->has('todays_deal')):
                $product->todays_deal = $request->todays_deal;
            else:
                $product->todays_deal = 0;
            endif;

            //cost
            if ($request->has('shipping_type')) :
                if ($request->shipping_type == 'free_shipping'):
                    $product->shipping_fee = 0.00;
                elseif ($request->shipping_type == 'flat_rate'):
                    $product->shipping_fee = $request->shipping_fee != '' ? priceFormatUpdate($request->shipping_fee,settingHelper('default_currency')) : 0.00;
                endif;
                $product->shipping_type = $request->shipping_type;

                if ($request->has('shipping_fee_depend_on_quantity')):
                    $product->shipping_fee_depend_on_quantity = $request->shipping_fee_depend_on_quantity;
                endif;
            endif;
            if ($request->has('is_classified')):
                $product->is_classified = 1;

                $contact_details['contact_name'] = $request->contact_name;
                $contact_details['phone_no'] = $request->phone_no;
                $contact_details['email'] = $request->email;
                $contact_details['address'] = $request->address;
                $contact_details['others'] = $request->others;

                $product->contact_info = $contact_details;
            endif;
            $product->save();

            $request['product_id'] = $product->id;
            if (!isset($request->lang)) :
                $request['lang'] = 'en';
            endif;

            $this->productLang->store($request);

            if ($request->campaign) :
                if ($product->campaign):
                    $campaign_product = CampaignProduct::find($product->campaign->id);
                else :
                    $campaign_product = new CampaignProduct();
                endif;
                $campaign_product->campaign_id      = $request->campaign;
                $campaign_product->product_id       = $product->id;
                $campaign_product->discount         = priceFormatUpdate($request->campaign_discount,settingHelper('default_currency'));
                $campaign_product->discount_type    = $request->campaign_discount_type;
                $campaign_product->save();

                $campaign                           = Campaign::find($request->campaign);
                $product->special_discount_type     = $request->campaign_discount_type;
                $product->special_discount          = priceFormatUpdate($request->campaign_discount ,settingHelper('default_currency'));
                $product->special_discount_start    = $campaign->start_date;
                $product->special_discount_end      = $campaign->end_date;
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
                            $product_stock = new ProductStock();
                        endif;
                        $product_stock->product_id      = $product->id;
                        $product_stock->variant_ids     = $request['variant_ids'][$key];
                        $product_stock->name            = $request['variant_name'][$key];
                        $product_stock->sku             = $request['variant_sku'][$key];
                        $product_stock->current_stock   = $request['variant_stock'][$key];
                        $product_stock->price           = priceFormatUpdate($request['variant_price'][$key],settingHelper('default_currency'));
                        if ($request['variant_image'][$key] != ''):
                            $files = $this->getImage($request['variant_image'][$key]);
                            if ($files):
                                $product_stock->image = $files;
                                $product_stock->image_id = $request['variant_image'][$key];
                            else:
                                $product_stock->image = [];
                                $product_stock->image_id = null;
                            endif;
                        else:
                            $product_stock->image = [];
                            $product_stock->image_id = null;
                        endif;
                        $total_stock += $product_stock->current_stock;
                        $product_stock->save();
                    endif;

                    $selected_variants      = array();
                    $selected_variants_ids  = array();

                    if ($request->has('attribute_sets')):
                        foreach ($request->attribute_sets as $attribute_set):
                            $attribute_values = 'attribute_values_' . $attribute_set;
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
                    $product->selected_variants         = $selected_variants;
                    $product->selected_variants_ids     = $selected_variants_ids;
                endforeach;

                $product->current_stock                 = $total_stock;
                $product->save();
            else:
                $product_stock                          = $product->stock->first();
                if ($product_stock == ''):
                    $product_stock                      = new ProductStock();
                endif;
                $product_stock->product_id              = $product->id;
                $product_stock->sku                     = $request->sku;
                $product_stock->name                    = '';
                $product_stock->price                   = priceFormatUpdate($product->price ,settingHelper('default_currency'));
                $product_stock->image                   = [];
                $product_stock->image_id                = null;
                $product_stock->current_stock           = $product->current_stock;
                $product_stock->save();
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function productView($request)
    {
        DB::BeginTransaction();
        try {
            $product                = Product::where('slug', $request['product_slug'])->CheckSellerSystem()->first();

            $user_id                = authId();
            ProductView::where('product_id', $product->id)->delete();

            $view               = new ProductView();
            $view->product_id   = $product->id;
            $view->user_id      = $user_id;
            $view->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $product = $this->get($request['id']);
            if ($request['change_for'] != 'status') :
                $product[$request['change_for']] = $request['status'];
            else:
                $product->status = $request['status'] == '1' ? 'published' : 'unpublished';
            endif;
            $product->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function variantStore($request, $product_id)
    {

    }

    public function restore($id)
    {
        DB::beginTransaction();
        try {
            $product = Product::withTrashed()->find($id);
            $product->status        = 'unpublished';
            $product->is_deleted    = 0;
            $product->save();

            Product::withTrashed()->find($id)->restore();
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function productStatusChange($status, $id)
    {
        DB::beginTransaction();
        try {
            $product = $this->get($id);
            if ($status == 'pending'):
                $product->is_approved = 0;
            elseif ('approve'):
                $product->is_approved = 1;
            endif;
            $product->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    //for api
    public function todayDeals()
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->selectRaw('id,price,special_discount,minimum_order_quantity,current_stock,special_discount_type,special_discount_start,special_discount_end,rating,thumbnail,slug,reward,todays_deal,has_variant')
            ->ProductPublished()->where('todays_deal', 1)
            ->UserCheck()->IsWholesale()->IsStockOut()->latest()->take(16)->get();
    }

    public function bestSelling()
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->UserCheck()->IsWholesale()->IsStockOut()
            ->selectRaw('id,price,special_discount,minimum_order_quantity,current_stock,special_discount_type,special_discount_start,special_discount_end,rating,total_sale,thumbnail,slug,reward,current_stock')
            ->ProductPublished()->orderBy('total_sale', 'desc')->latest()->take(12)->get();
    }

    public function offerEndingSoon($limit = null)
    {
        if (!$limit)
        {
            $limit = 8;
        }
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->UserCheck()->IsWholesale()->IsStockOut()->where('is_wholesale',0)
            ->selectRaw('id,price,special_discount,is_wholesale,special_discount_type,minimum_order_quantity,current_stock,special_discount_start,special_discount_end,rating,thumbnail,slug,reward')
            ->where('special_discount', '>', 0)->where('special_discount_end', '!=', null)->ProductPublished()
            ->orderBy(DB::raw('ABS(DATEDIFF(products.special_discount_end, NOW()))'))->latest()->paginate($limit);
    }

    public function productByOffer()
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('special_discount', '>', 0)->where('special_discount_end', '!=', null)->ProductPublished()
            ->orderBy(DB::raw('ABS(DATEDIFF(products.special_discount_end, NOW()))'))->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate(16);
    }

    public function productByBestSelling($limit = null)
    {
        if (!$limit)
        {
            $limit = 16;
        }
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')
            ->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,total_sale,thumbnail,slug,reward,current_stock')
            ->ProductPublished()->orderBy('total_sale', 'desc')->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($limit);

    }

    public function productByGadget($slug)
    {
        $category = Category::where('slug', $slug)->first();
        return Product::withAvg('reviews','rating')->withCount('reviews')->where('category_id', $category->id)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate(16);
    }

    public function viewedProduct()
    {
        $auth_id = authId();
        $viewed_products = Product::withAvg('reviews','rating')->whereHas('viewedProducts', function ($query) use ($auth_id) {
            $query->where('user_id', $auth_id)->groupBy('product_id')->latest();
        })->selectRaw('id,thumbnail,slug,price,rating,current_stock,reward,minimum_order_quantity,special_discount,special_discount_start,special_discount_end')
            ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->take(10)->get();

        if (count($viewed_products) < 20) {
            $left_product = 20 - count($viewed_products);

            $products = Product::withAvg('reviews','rating')->whereHas('viewedProducts', function ($query) {
                $query->groupBy('product_id')->latest();
            })->selectRaw('id,thumbnail,slug,price,rating,current_stock,reward,minimum_order_quantity,special_discount,special_discount_start,special_discount_end')
                ->ProductPublished()->whereNotIn('id', $viewed_products->pluck('id')->toArray())->UserCheck()->IsWholesale()->IsStockOut()->latest()->take($left_product)->get();

            return $viewed_products->merge($products);
        }
        return $viewed_products;
    }

    public function productDetails($slug)
    {
        return Product::with(['brand:id', 'category:id', 'reviews', 'stock', 'userWishlist','userReview'])->withAvg('reviews','rating')
            ->withCount('monthlyOrders')->withCount('reviews')->where('slug', $slug)->UserCheck()->IsWholesale()->IsStockOut()->first();
    }

    public function dailyDeals($paginate)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()
            ->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,thumbnail,slug,reward,current_stock,created_at')
            ->where('todays_deal', 1)->latest()->paginate($paginate);
    }

    public function productByCampaign($campaign_id, $paginate = null): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        if (!$paginate) {
            $paginate = 12;
        }

        return Product::withAvg('reviews','rating')->join('campaign_products', 'products.id', 'campaign_products.product_id')
            ->join('campaigns', 'campaign_products.campaign_id', 'campaigns.id')
            ->join('users', 'products.user_id', 'users.id')->where('users.status', 1)
            ->where('campaigns.id', $campaign_id)->where('products.status', 'published')->where('products.is_approved',1)
            ->where('users.is_user_banned', 0)->IsWholesale()->IsStockOut()
            ->select('products.id', 'campaigns.id as campaign_id', 'campaigns.slug as campaign_slug', 'current_stock', 'products.price', 'special_discount', 'special_discount_type', 'rating', 'text_color', 'start_date', 'end_date', 'products.special_discount_start', 'products.special_discount', 'products.special_discount_end', 'products.thumbnail', 'products.slug', 'reward')
            ->orderBy('campaigns.created_at', 'desc')->paginate($paginate);
    }

    public function categoryProducts($slug): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        $category = Category::where('slug', $slug)->first();
        return Product::withAvg('reviews','rating')->withCount('reviews')->where('category_id', $category->id)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()
            ->paginate(8);
    }

    public function filterProduct($data): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        $price_range = $this->priceRange();
        $products = Product::query();

        if (array_key_exists('key', $data) && !empty($data['key'])) {
            $products->whereHas('productLanguages', function ($query) use ($data) {
                $query->where('name', 'like', '%' . $data['key'] . '%');
            });
        } else {
            if ($data['route'] == 'product.by.brand') {
                $products->whereHas('brand', function ($q) use ($data) {
                    $q->where('slug', $data['slug']);
                });
            }
            if ($data['route'] == 'product.by.category' || $data['route'] == 'product.by.gadget') {

                $category = Category::where('slug', $data['slug'])->first();
                $category_ids = \App\Utility\CategoryUtility::getMyAllChildIds($category->id);
                $category_ids[] = $category->id;
                $all_nested_category = array();
                if ($category) {
                    if (array_key_exists('child_category', $data) && count($data['child_category']) > 0) {
                        foreach ($data['child_category'] as $child) {
                            $nested_category = \App\Utility\CategoryUtility::getMyAllChildIds($child);
                            $nested_category[] = (int)$child;
                            $all_nested_category[] = $nested_category;
                        }
                        $all_nested_category[] = [(int)$category->id];
                        $products->whereIn('category_id', array_merge(...$all_nested_category));
                    } else {
                        $products->whereIn('category_id', $category_ids);
                    }
                }
            }
            if ($data['route'] == 'product.by.offer') {
                $products->where('special_discount', '>', 0)->where('special_discount_end', '!=', null);
            }

            if ($data['route'] == 'shop') {

                $products->whereHas('sellerProfile', function ($q) use ($data) {
                    $q->where('slug', $data['slug']);
                });
            }

            if (array_key_exists('category', $data) && count($data['category']) > 0) {
                $all_nested_category = [];
                foreach ($data['category'] as $child) {
                    $nested_category = \App\Utility\CategoryUtility::getMyAllChildIds($child);
                    $nested_category[] = (int)$child;
                    $all_nested_category[] = $nested_category;
                }
                $products->whereIn('category_id', array_merge(...$all_nested_category));
            }
            if (array_key_exists('brand', $data) && count($data['brand']) > 0) {
                $products->whereIn('brand_id', $data['brand']);
            }
            if (array_key_exists('price', $data)) {
                $price = json_decode($data['price']);

                if ($price->min == 0 && $price->max == 0)
                {
                    $max = $price_range['max'];
                    $min = $price_range['min'];
                }
                else{
                    $max = $price->max;
                    $min = $price->min;
                }
                if (!$min)
                {
                    $min = 0;
                }
                if (!$max) {
                    $max = 0;
                    $products->where('price', '>', $min);
                } else {
                    $products->whereBetween('price', [$min, $max]);
                }
            }
            if (array_key_exists('color', $data) && count($data['color']) > 0) {

                $products->where(function ($query) use ($data) {
                    foreach ($data['color'] as $color) {
                        $query->where('colors', 'like', "%\"{$color}\"%");
                    }
                });
            }
            $length = array_key_exists('rating', $data) ? count($data['rating']) : 0;
            if ($length > 0) {
                sort($data['rating']);

                if ($length > 1) {
                    $products->whereBetween('rating', [(int)$data['rating'][0], (int)$data['rating'][$length - 1]]);
                } else {
                    $products->whereBetween('rating', [$data['rating'][0] - 0.5, (int)$data['rating'][0]]);
                }
            }
            if (array_key_exists('attribute_value_id', $data) && count($data['attribute_value_id']) > 0) {
                $products->where(function ($query) use ($data) {
                    foreach ($data['attribute_value_id'] as $attribute_value) {
                        $query->orWhere('selected_variants_ids', 'like', "%\"{$attribute_value}\"%");
                    }
                });
            }
            if ($data['sort'] == 'newest') {
                if ($data['route'] == 'product.by.selling') {
                    $products->orderByRaw("total_sale DESC, id DESC");
                } else {
                    $products->latest();
                }
            } elseif ($data['sort'] == 'oldest') {
                $products->oldest();
            } elseif ($data['sort'] == 'top_rated') {
                $products->orderBy('rating', 'desc');
            } elseif ($data['sort'] == 'top_selling') {
                $products->withCount('orders')->orderBy('orders_count', 'desc');
            }
        }

        return  $products->with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')
            ->when($data['route'] == 'product.by.selling', function($q){
                $q->orderByDesc('total_sale');
            })
            ->selectRaw('id,category_id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,reward,current_stock,has_variant,minimum_order_quantity,todays_deal,total_sale')
            ->ProductPublished()
            ->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($data['paginate']);

    }

    protected function saveSearchQuery($data){
        $oldQuery                   = Search::where('query',$data['key'])->first();
        if(blank($oldQuery) || $oldQuery == null):
            $searchQ                = new Search();
            $searchQ->query         = $data['key'];
            $searchQ->total_search  = 1;
            $searchQ->save();
        else:
            $oldQuery->total_search = $oldQuery->total_search+1;
            $oldQuery->save();
        endif;

    }

    public function relatedProducts($id, $take, $product_id)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('category_id', $id)->where('id', '!=', $product_id)
            ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->take($take)->get();
    }

    public function compareList(): int
    {
        if (authUser()) {
            $count = CompareProduct::whereHas('product')->where('user_id', authId())->count();
        } else {
            $count = session()->get('compare_list') ? count(session()->get('compare_list')) : 0;
        }
        return $count;
    }

    public function addToCompare($id)
    {
        return CompareProduct::create([
            'user_id'       => authId(),
            'product_id'    => $id,
        ]);
    }

    public function productByIds($ids)
    {
        return Product::with('brand:id', 'category:id','userWishlist')->withAvg('reviews','rating')->withCount('reviews')
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->whereIn('id', $ids)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->get();
    }

    public function compareProducts()
    {
        $product_ids = CompareProduct::where('user_id', authId())->pluck('product_id')->toArray();
        return $this->productByIds($product_ids);
    }

    public function removeCompareProduct($id)
    {
        $compare = CompareProduct::where('user_id', authId())->where('product_id', $id)->first();
        $product = $compare->product;
        $compare->delete();
        return $product;
    }

    public function bestSellingProduct($category_id)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('category_id',$category_id)->ProductPublished()
            ->UserCheck()->IsWholesale()->IsStockOut()->orderBy('total_sale','desc')->first();
    }

    //seller wise products
    public function featuredProducts($ids)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->whereIn('id',$ids)->ProductPublished()->where('is_featured',1)
            ->UserCheck()->IsWholesale()->IsStockOut()
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')->get();
    }

    public function newProducts($user_id)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('user_id',$user_id)->ProductPublished()->latest()
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->UserCheck()->IsWholesale()->IsStockOut()->take(4)->get();
    }

    public function sellerBestSelling($user_id)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('user_id',$user_id)->ProductPublished()->orderBy('total_sale','desc')
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->UserCheck()->IsWholesale()->IsStockOut()->take(12)->get();
    }

    public function sellerOfferEnding($user_id)
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('user_id',$user_id)->orderBy('total_sale','desc')->where('is_wholesale',0)
            ->where('special_discount', '>', 0)->where('special_discount_end', '!=', null)->ProductPublished()
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->UserCheck()->IsWholesale()->IsStockOut()->take(12)->get();
    }

    public function sellerProducts($user_id): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return Product::with('userWishlist')->withAvg('reviews','rating')->withCount('reviews')->where('user_id', $user_id)->ProductPublished()
            ->orderBy('id', 'desc')
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->UserCheck()->IsWholesale()->IsStockOut()->paginate(12);
    }

    public function campaignProducts()
    {
        return $this->takeCampaignProducts(8, null, 0);

    }

    public function latestProducts()
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->ProductPublished()->latest()
            ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->UserCheck()->IsWholesale()->IsStockOut()->take(6)->get();
    }

    public function productByFlashSale()
    {
        return $this->takeAllCampaignProducts(0, null, 0);
    }

    public function takeCampaignProducts($take, $id, $skip)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->join('campaign_products', 'products.id', 'campaign_products.product_id')
            ->join('campaigns', 'campaign_products.campaign_id', 'campaigns.id')
            ->join('users', 'products.user_id', 'users.id')->where('users.status', 1)
            ->where('products.status', 'published')->where('is_approved',1)->when($id,function($q) use ($id){
                $q->where('campaigns.id', $id);
            })
            ->where('users.is_user_banned', 0)->IsWholesale()->IsStockOut()
            ->select('products.id', 'campaigns.id as campaign_id','campaigns.slug as campaign_slug','current_stock', 'products.price', 'special_discount', 'special_discount_type', 'rating',
                'text_color', 'start_date', 'end_date', 'products.special_discount_start', 'products.special_discount','products.special_discount_end','products.thumbnail', 'products.slug','reward','minimum_order_quantity')
            ->orderBy('campaigns.created_at', 'desc')->take($take)->get();
    }

    public function takeAllCampaignProducts($take, $id, $skip)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->join('campaign_products', 'products.id', 'campaign_products.product_id')
            ->join('campaigns', 'campaign_products.campaign_id', 'campaigns.id')
            ->join('users', 'products.user_id', 'users.id')->where('users.status', 1)
            ->where('products.status', 'published')->where('is_approved',1)->when($id,function($q) use ($id){
                $q->where('campaigns.id', $id);
            })->where('products.status', 'published')
            ->where('users.is_user_banned', 0)->IsWholesale()->IsStockOut()
            ->select('products.id', 'campaigns.id as campaign_id','campaigns.slug as campaign_slug','current_stock', 'products.price', 'special_discount', 'special_discount_type', 'rating', 'text_color', 'start_date', 'end_date', 'products.special_discount_start', 'products.special_discount','products.special_discount_end','products.thumbnail', 'products.slug','reward')
            ->orderBy('campaigns.created_at', 'desc')->paginate(16);
    }

    public function priceRange(): array
    {
        $min = ProductStock::min('price');


        $max = ProductStock::max('price');

        return [
            'min' => $min,
            'max' => $max,
        ];
    }

    public function searchProduct($key)
    {
        $this->saveSearchQuery(['key' => $key]);

        return Product::withAvg('reviews','rating')->withCount('reviews')->whereHas('productLanguages', function ($query) use ($key) {
            $query->where('name', 'like', '%' . $key . '%');
        })->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->take(20)->get();
    }
    //api end

    //mobileApi
    public function getLatestProducts($limit,$data)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->ProductPublished()->when(array_key_exists('seller_id',$data),function ($query) use($data){
            $query->whereHas('sellerProfile',function ($q) use($data){
                $q->where('id',$data['seller_id']);
            });
        })->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($limit);
    }

    public function getTopProducts($limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->ProductPublished()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->UserCheck()->IsWholesale()->IsStockOut()->orderBy('total_sale', 'desc')->paginate($limit);
    }

    public function bestRatedProducts($limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->ProductPublished()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->UserCheck()->IsWholesale()->IsStockOut()->orderBy('rating', 'desc')->paginate($limit);
    }

    public function flashDeals($limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->join('campaign_products', 'products.id', 'campaign_products.product_id')
        ->join('campaigns', 'campaign_products.campaign_id', 'campaigns.id')
        ->join('users', 'products.user_id', 'users.id')->where('users.status', 1)
        ->where('products.status', 'published')->where('is_approved',1)->where('campaigns.flash_sale',1)
        ->where('users.is_user_banned', 0)->where('users.status',1)->IsWholesale()->IsStockOut()
        ->select('products.id', 'current_stock', 'products.price', 'special_discount', 'special_discount_type', 'rating', 'products.special_discount_start', 'products.special_discount','products.special_discount_end',
            'products.thumbnail', 'products.slug','reward','minimum_order_quantity','reward','total_sale')
        ->orderBy('campaigns.created_at', 'desc')->paginate($limit);
    }

    public function brandProducts($id, $limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->where('brand_id',$id)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->paginate($limit);
    }

    public function categoryByProducts($id, $limit)
    {
        $category_ids = \App\Utility\CategoryUtility::getMyAllChildIds($id);
        $category_ids[] = (int)$id;

        return Product::withAvg('reviews','rating')->withCount('reviews')->whereIn('category_id',$category_ids)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->paginate($limit);
    }

    public function shopProducts($user_id, $limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->where('user_id',$user_id)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->paginate($limit);
    }

    public function search($key, $paginate)
    {
        if (!$paginate) {
            $paginate = 12;
        }

        $this->saveSearchQuery(['key' => $key]);

        return Product::withAvg('reviews','rating')->withCount('reviews')->whereHas('productLanguages', function ($query) use ($key) {
            $query->where('name', 'like', '%' . $key . '%');
        })->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
            ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($paginate);
    }

    public function wishlistsProduct($user_id,$limit)
    {
        return Product::withAvg('reviews','rating')->withCount('reviews')->whereHas('wishlists',function ($query) use($user_id){
            $query->where('user_id',$user_id);
        })->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()
            ->selectRaw('id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,reward,current_stock,total_sale,has_variant')
            ->paginate($limit);
    }

    public function viewedProducts($user,$paginate)
    {
        if ($user)
        {
            $auth_id = $user->id;
            $products = Product::withAvg('reviews','rating')->withCount('reviews')->whereHas('viewedProducts', function ($query) use ($auth_id) {
                $query->where('user_id', $auth_id)->groupBy('product_id')->latest();
            })->selectRaw('id,thumbnail,slug,price,rating,current_stock,reward,minimum_order_quantity,special_discount,special_discount_start,special_discount_end')
                ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($paginate);
        }
        else{
            $products = Product::withAvg('reviews','rating')->withCount('reviews')->whereHas('viewedProducts', function ($query) {
                $query->groupBy('product_id')->latest();
            })->selectRaw('id,thumbnail,slug,price,rating,current_stock,reward,minimum_order_quantity,special_discount,special_discount_start,special_discount_end')
                ->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->paginate($paginate);

        }
        return $products;
    }

    public function adminProducts($id)
    {
        return Product::where('user_id',1)->where('id', '!=',$id)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->latest()->limit(4)->get();
    }
}
