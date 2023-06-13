<?php

namespace App\Traits;

use App\Utility\AppSettingUtility;
use Carbon\Carbon;

trait MetaGeneratorTrait {
    public function generateMeta($product,$blog,$category,$brand,$seller): array
    {

        $lang = languageCheck();

        if (request()->route()->getName() == 'product-details')
        {
            $slug = request()->route()->parameter('slug');
            $product    =   $product->productDetails($slug);
            if ($product)
            {
                $stock      =   ($product->current_stock < 1)? 'OutOfStock': 'InStock';
                $language = $product->translate;

                $default_currency   = settingHelper('default_currency');
                $currency           = AppSettingUtility::currencies()->where('id', $default_currency)->first();
                $code               = $currency->code;

                $product_image = array();
                array_push($product_image,getFileLink('320x320', $product->thumbnail));
                foreach ($product->images as $image) {
                    array_push($product_image, getFileLink('320x320', $image));
                }

                $meta_data = [
                    'meta_title' => $language->meta_title == '' ? strip_tags($language->name) : strip_tags($language->meta_title),
                    'meta_description' => $language->meta_short_description == '' ? substr(strip_tags($language->description), 0, 250) : strip_tags($language->meta_short_description),
                    'meta_keywords' => $language->meta_keywords,
                    'meta_image' => getFileLink('320x320', $product->meta_image),
                    'meta_published_time' => $product->created_at,
                    'meta_section' => 'Product Details',
                    'meta_url' => url()->current(),
                    //   itemprop data
                    'title' => $language->name,
                    'itemprop'=>'{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "'.$language->name.'",
                  "image": '.json_encode($product_image).',
                  "description": "'.strip_tags($language->short_description).'",
                  "sku": "0446310786",
                  "mpn": "925872",
                  "brand": {
                    "@type": "Brand",
                    "name": "'.@$product->brand->title.'"
                  },
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "'.round($product->rating).'",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "'.settingHelper('author_name').'"
                    }
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "'.@$product->userReview->rating.'",
                    "reviewCount": "'.count($product->reviews).'"
                  },
                  "offers": {
                    "@type": "Offer",
                    "url": "'.url('/campaigns').'",
                    "priceCurrency": "'.$code.'",
                    "price": "'.get_price($product->price).'",
                    "priceValidUntil": "'.Carbon::now()->addDays(30)->format('Y-m-d').'",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/'.$stock.'"
                  }
                }',

                ];
            }
            else{
                $meta_data = [
                    'meta_title' => 'Yoori',
                    'meta_description' => 'Yoori - Ecommerce CMS Platform',
                    'meta_image' => is_file_exists(@settingHelper('favicon')['image_16x16_url']) ? get_media(settingHelper('favicon')['image_16x16_url']) : static_asset('images/ico/favicon.ico'),
                    'meta_keywords' => 'Yoori,e-commerce',
                    'meta_published_time' => date('Y-m-d H:i:s'),
                    'meta_section' => 'Home Section',
                    'meta_url' => url()->current(),
                    'url_exception' => 1,
                    'itemprop' => '{}',
                ];
            }
            }


        elseif (request()->route()->getName() == 'blog-details'){
            $slug = request()->route()->parameter('slug');
            $blog = $blog->blogDetails($slug);
       
            if ($blog)
            {
                $meta_data = [
                    'title'             => strip_tags($blog->getTranslation('title',languageCheck())),
                    'meta_title'        => $blog->getTranslation('meta_title',languageCheck()) != '' ? strip_tags($blog->getTranslation('meta_title',languageCheck())) : strip_tags(($blog->getTranslation('title',languageCheck()))),
                    'meta_description'  => $blog->getTranslation('meta_description',languageCheck()) != ''? strip_tags($blog->getTranslation('meta_description',languageCheck())) : substr(strip_tags($blog->getTranslation('description',languageCheck())), 0,250),
                    'meta_keywords'     => $blog->getTranslation('meta_keyword',languageCheck()),
                    'meta_image'        => getFileLink('320x320', $blog->image),
                    'meta_published_time' => $blog->created_at,
                    'meta_section'      => 'Blog Details',
                    'meta_url'          => url()->current(),
                ];
            }

            else{
                $meta_data = [
                    'meta_title' => 'Yoori',
                    'meta_description' => 'Yoori - Ecommerce CMS Platform',
                    'meta_image' => is_file_exists(@settingHelper('favicon')['image_16x16_url']) ? get_media(settingHelper('favicon')['image_16x16_url']) : static_asset('images/ico/favicon.ico'),
                    'meta_keywords' => 'Yoori,e-commerce',
                    'meta_published_time' => date('Y-m-d H:i:s'),
                    'meta_section' => 'Home Section',
                    'meta_url' => url()->current(),
                    'url_exception' => 1,
                ];
            }
        }
        elseif (request()->route()->getName() == 'category-by-slug' || request()->route()->getName() == 'brand-by-slug' ||  request()->route()->getName() == 'seller-by-slug' || request()->route()->getName() == 'blog-details'){
            $slug = request()->route()->parameter('slug');
            if(request()->route()->getName() == 'category-by-slug'){
                $details = $category->category($slug);
                $type = 'Category Details';

            }if(request()->route()->getName() == 'brand-by-slug'){
                $details = $brand->brand($slug);
                $type = 'Brand Details';
            }if(request()->route()->getName() == 'seller-by-slug'){
                $details = $seller->sellerBySlug($slug);
                $type = 'Seller Details';
            }

            if ($details)
            {
                $title = $details->getTranslation('title',languageCheck());
                $meta_title = $details->getTranslation('meta_title',languageCheck());
                $meta_description = $details->getTranslation('meta_description',languageCheck());
                $meta_keywords = $details->getTranslation('meta_keywords',languageCheck());
                $description = substr(strip_tags($details->getTranslation('description',languageCheck())), 0,250);

                $meta_data = [
                    'title'             => $title,
                    'meta_title'        => $meta_title ? strip_tags($meta_title) : strip_tags($title),
                    'meta_description'  => $meta_description ? strip_tags($meta_description) : $description,
                    'meta_keywords'     => $meta_keywords,
                    'meta_image'        => getFileLink('320x320', $details->logo),
                    'meta_published_time' => $details->created_at,
                    'meta_section'      => $type,
                    'meta_url'          => url()->current(),
                ];
            }
            else{
                $meta_data = [
                    'meta_title' => 'Yoori',
                    'meta_description' => 'Yoori - Ecommerce CMS Platform',
                    'meta_image' => is_file_exists(@settingHelper('favicon')['image_16x16_url']) ? get_media(settingHelper('favicon')['image_16x16_url']) : static_asset('images/ico/favicon.ico'),
                    'meta_keywords' => 'Yoori,e-commerce',
                    'meta_published_time' => date('Y-m-d H:i:s'),
                    'meta_section' => 'Home Section',
                    'meta_url' => url()->current(),
                    'url_exception' => 1,
                ];
            }
        }
        elseif (request()->route()->getName() == 'home'){

            $setting = AppSettingUtility::settings()->first();

            $meta_data = [
                'meta_title' => settingHelper('meta_title', $lang) ? : settingHelper('system_name'),
                'meta_description' => settingHelper('meta_description', $lang) ? : settingHelper('system_name'),
                'meta_image' => is_file_exists(@settingHelper('favicon')['image_16x16_url']) ? get_media(settingHelper('favicon')['image_16x16_url']) : static_asset('images/ico/favicon.ico'),
                'meta_keywords' => settingHelper('meta_keywords', $lang) ,
                'meta_published_time' => $setting ? $setting->created_at : null,
                'meta_section' => 'Home Section',
                'meta_url' => url()->current(),
            ];
        }
        else{

            $meta_data = [
                'meta_title' => 'Yoori',
                'meta_description' => 'Yoori - Ecommerce CMS Platform',
                'meta_image' => is_file_exists(@settingHelper('favicon')['image_16x16_url']) ? get_media(settingHelper('favicon')['image_16x16_url']) : static_asset('images/ico/favicon.ico'),
                'meta_keywords' => 'Yoori,e-commerce',
                'meta_published_time' => date('Y-m-d H:i:s'),
                'meta_section' => 'Home Section',
                'meta_url' => url()->current(),
            ];
        }
        return $meta_data;
    }

}
