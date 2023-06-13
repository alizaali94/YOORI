<?php

namespace App\Repositories\Admin\Page;

use App\Models\Page;
use App\Models\PageLanguage;
use App\Models\Setting;
use App\Repositories\Interfaces\Admin\Page\PageInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use Carbon\Carbon;
use DB;
use Dflydev\DotAccessData\Data;

class PageRepository implements PageInterface
{
    use SlugTrait;
    use ImageTrait;

    protected $settings;

    public function __construct(SettingInterface $settings)
    {
        $this->settings = $settings;
    }

    public function get($id)
    {
        return Page::find($id);
    }

    public function getByLang($id, $lang)
    {
        if ($lang == null):
            $pageLang = PageLanguage::with('page')->where('lang', 'en')->where('page_id', $id)->first();
        else:
            $pageLang = PageLanguage::with('page')->where('lang', $lang)->where('page_id', $id)->first();
            if (blank($pageLang)):
                $pageLang = PageLanguage::with('page')->where('lang', 'en')->where('page_id', $id)->first();
                $pageLang['translation_null'] = 'not-found';
            endif;
        endif;
        return $pageLang;
    }

    public function all()
    {
        return Page::orderBy('id', 'asc');
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $page = new Page();
            $page->type = 'custom_page';
            $page->link = $request->link;

            if ($request->meta_image != ''):
                $files  = $this->getImage($request->meta_image);
                if ($files):
                    $page->meta_image    = $files;
                    $page->meta_image_id = $request->meta_image;
                else:
                    $page->meta_image = [];
                endif;
            else:
                $page->meta_image = [];
                $page->meta_image_id = null;
            endif;
            $page->save();

            $this->createPageLang($request, $page->id);

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    protected function createPageLang($request, $page_id)
    {
        $pageLanguage = new PageLanguage();
        $pageLanguage->page_id      = $page_id;
        $pageLanguage->lang         = $request->lang != '' ? $request->lang : 'en';
        $pageLanguage->title        = $request->title;
        $pageLanguage->content      = $request->content;
        $pageLanguage->meta_title   = $request->meta_title;
        $pageLanguage->keywords     = $request->keywords;
        $pageLanguage->address      = $request->address;
        $pageLanguage->meta_description = $request->meta_description;

        $pageLanguage->save();
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {

            $page = Page::find($request->page_id);
            if ($request->page_id > 7):
                $page->type = 'custom_page';
                $page->link = $request->link;
            endif;
            if ($request->meta_image != ''):
                $files  = $this->getImage($request->meta_image);
                if ($files):
                    $page->meta_image    = $files;
                    $page->meta_image_id = $request->meta_image;
                else:
                    $page->meta_image    = [];
                    $page->meta_image_id = null;
                endif;
            else:
                $page->meta_image       = [];
                $page->meta_image_id    = null;
            endif;
            if($request->page_id == 7):
                $page->email            = $request->email != '' ? $request->email : null;
                $page->optional_email   = $request->optional_email != '' ? $request->optional_email : null;
                $page->phone            = $request->phone != '' ? $request->phone : null;
                $page->optional_phone   = $request->optional_phone != '' ? $request->optional_phone : null;
            endif;
            $page->save();

            $pageLanguage = PageLanguage::find($request->page_lang_id);

            if (!blank($pageLanguage)):
                $pageLanguage->page_id      = $page->id;
                $pageLanguage->lang         = $request->lang != '' ? $request->lang : 'en';
                $pageLanguage->title        = $request->title;
                $pageLanguage->content      = $request->content;
                $pageLanguage->meta_title   = $request->meta_title;
                $pageLanguage->keywords     = $request->keywords;
                $pageLanguage->address      = $request->address;
                $pageLanguage->meta_description = $request->meta_description;
                $pageLanguage->save();
            else:
                $this->createPageLang($request, $request->page_id);
            endif;

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
            $page = $this->get($request['id']);
            $page->status = $request['status'];
            $page->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function updateHomeContent($request)
    {
        $home_page_contents = [];
        if ($request->contents):
            foreach ($request->contents as $key => $content):
                $content_number = $request->content_numbers[$key];
                $requested_content = $content . '_' . $content_number;
                if ($content == 'banner'):
                    $home_page_contents[$key]['banner']['thumbnail']    = [];
                    $home_page_contents[$key]['banner']['url']          = [];
                    $banner_thumbnail                                   = 'banner_thumbnail_' . $content_number;
                    $banner_url = 'banner_url_' . $content_number;
                    foreach ($request->$banner_thumbnail as $url_key => $thumbnail):

                        $this->getImageArrayRecommendedSize($thumbnail,[1260,620,400,300],[452,320,235,170]);

                        $url = $request->$banner_url[$url_key];
                        array_push($home_page_contents[$key]['banner']['thumbnail'], $thumbnail);
                        array_push($home_page_contents[$key]['banner']['url'], $url);
                    endforeach;
                    unset($request[$banner_thumbnail]);
                    unset($request[$banner_url]);
                elseif ($content == 'category_section'):
                    $category   = $requested_content . '_category';
                    $banner     = $requested_content . '_banner';
                    $banner_url = $requested_content . '_banner_url';
                    $this->getImageWithRecommendedSize($request->$banner, '405','745',true);
                    $home_page_contents[$key]['category_section']['category'] = $request->$category;
                    $home_page_contents[$key]['category_section']['banner'] = $request->$banner;
                    $home_page_contents[$key]['category_section']['banner_url'] = $request->$banner_url;

                    unset($request[$category]);
                    unset($request[$banner]);
                    unset($request[$banner_url]);
                elseif ($content == 'offer_ending_soon'):
                    $banner = $requested_content . '_banner';
                    $banner_url = $requested_content . '_banner_url';
                    $this->getImageWithRecommendedSize($request->$banner, '405','745',true);
                    $home_page_contents[$key]['offer_ending_soon']['banner'] = $request->$banner;
                    $home_page_contents[$key]['offer_ending_soon']['banner_url'] = $request->$banner_url;

                    unset($request[$banner]);
                    unset($request[$banner_url]);
                elseif ($content == 'download_section'):
                    $text = $requested_content . '_text';
                    $sub_text = $requested_content . '_sub_text';
                    $banner = $requested_content . '_banner';
                    $home_page_contents[$key]['download_section']['text'] = $request->$text;
                    $home_page_contents[$key]['download_section']['sub_text'] = $request->$sub_text;
                    $home_page_contents[$key]['download_section']['banner'] = $request->$banner;

                   $this->getImageWithRecommendedSize($request->$banner, '320','320');

                    unset($request[$text]);
                    unset($request[$sub_text]);
                    unset($request[$banner]);
                elseif ($content == 'campaign' || $content == 'popular_category' || $content == 'top_category' ||
                    $content == 'best_selling_products' || $content == 'popular_brands' ||
                    $content == 'top_sellers' || $content == 'best_sellers' || $content == 'todays_deal' || $content == 'flash_deal' || $content == 'latest_news'
                    || $content == 'featured_sellers' || $content == 'express_sellers' || $content == 'latest_product' || $content == 'video_shopping'):
                    $home_page_contents[$key][$content] = $request->$requested_content;
                endif;
                unset($request[$requested_content]);
            endforeach;

            $this->settings->updateHomePageContents($home_page_contents);
        endif;

        unset($request['contents']);
        unset($request['content_numbers']);
        unset($request['status']);

        $request['show_subscription_section']       = $request->has('show_subscription_section') ? 1 : 0;
        $request['show_blog_section']               = $request->has('show_blog_section') ? 1 : 0;
        $request['show_service_info_section']       = $request->has('show_service_info_section') ? 1 : 0;
        $request['show_recent_viewed_products']     = $request->has('show_recent_viewed_products') ? 1 : 0;
        $request['show_categories_section']         = $request->has('show_categories_section') ? 1 : 0;

        $this->settings->update($request);

        return true;
    }

    public function contactPage()
    {
        return Page::with('currentLanguage')->where('id',7)->where('status',1)->first();
    }

    public function pageBySlug($slug)
    {
        return Page::with('currentLanguage')->where('link',$slug)->where('status',1)->first();
    }

    public function allPages()
    {
        return Page::all();
    }

    public function updateMobileHomeContent($request)
    {
        $home_page_contents = [];
        if ($request->contents):
            foreach ($request->contents as $key => $content):
                $content_number = $request->content_numbers[$key];
                $requested_content = $content . '_' . $content_number;
                if ($content == 'banner'):
                    $home_page_contents[$key]['banner']['thumbnail'] = [];
                    $home_page_contents[$key]['banner']['action_type'] = [];
                    $home_page_contents[$key]['banner']['action_to'] = [];
                    $banner_thumbnail = 'banner_thumbnail_' . $content_number;
                    $banner_action_type = 'action_type_' . $content_number;
                    $banner_action_id = '';

                    foreach ($request->$banner_thumbnail as $url_key => $thumbnail):

                        $this->getImageArrayRecommendedSize($thumbnail,[1260,620,400,300],[452,320,235,170]);

                        $url = $request->$banner_action_type[$url_key];

                        if ($url == 'product')
                        {
                            $banner_action_id = 'product_id_' . $content_number;
                        }
                        if ($url == 'category')
                        {
                            $banner_action_id = 'category_id_' . $content_number;
                        }
                        if ($url == 'brand')
                        {
                            $banner_action_id = 'brand_id_' . $content_number;
                        }
                        if ($url == 'blog')
                        {
                            $banner_action_id = 'blog_id_' . $content_number;
                        }
                        if ($url == 'seller')
                        {
                            $banner_action_id = 'sl_' . $content_number;
                        }
                        if ($url == 'url')
                        {
                            $banner_action_id = 'slider_url' . $content_number;
                        }
                        $home_page_contents[$key]['banner']['thumbnail'][] = $thumbnail;
                        $home_page_contents[$key]['banner']['action_type'][] = $url;
                        $home_page_contents[$key]['banner']['action_to'][] = $request[$banner_action_id];
                    endforeach;
                    unset($request[$banner_thumbnail]);
                    unset($request[$banner_action_type]);
                elseif ($content == 'category_section'):
                    $category = $requested_content . '_category';
                    $banner = $requested_content . '_banner';
                    $banner_url = $requested_content . '_banner_url';
                    $this->getImageWithRecommendedSize($request->$banner, '405','745',true);
                    $home_page_contents[$key]['category_section']['category'] = $request->$category;
                    $home_page_contents[$key]['category_section']['banner'] = $request->$banner;
                    $home_page_contents[$key]['category_section']['banner_url'] = $request->$banner_url;


                    unset($request[$category]);
                    unset($request[$banner]);
                    unset($request[$banner_url]);
                elseif ($content == 'offer_ending_soon'):
                    $banner = $requested_content . '_banner';
                    $banner_url = $requested_content . '_banner_url';
                    $this->getImageWithRecommendedSize($request->$banner, '405','745',true);
                    $home_page_contents[$key]['offer_ending_soon']['banner'] = $request->$banner;
                    $home_page_contents[$key]['offer_ending_soon']['banner_url'] = $request->$banner_url;

                    unset($request[$banner]);
                    unset($request[$banner_url]);
                elseif ($content == 'download_section'):
                    $text = $requested_content . '_text';
                    $sub_text = $requested_content . '_sub_text';
                    $banner = $requested_content . '_banner';
                    $home_page_contents[$key]['download_section']['text'] = $request->$text;
                    $home_page_contents[$key]['download_section']['sub_text'] = $request->$sub_text;
                    $home_page_contents[$key]['download_section']['banner'] = $request->$banner;

                    $this->getImageWithRecommendedSize($request->$banner, '320','320');

                    unset($request[$text]);
                    unset($request[$sub_text]);
                    unset($request[$banner]);
                elseif ($content == 'campaign' || $content == 'popular_category' || $content == 'top_category' ||
                    $content == 'best_selling_products' || $content == 'popular_brands' ||
                    $content == 'top_sellers' || $content == 'best_sellers' || $content == 'todays_deal' || $content == 'flash_deal' || $content == 'latest_news'
                    || $content == 'featured_sellers' || $content == 'express_sellers' || $content == 'latest_product' || $content == 'video_shopping'):
                    $home_page_contents[$key][$content] = $request->$requested_content;
                endif;
                unset($request[$requested_content]);
            endforeach;
            $this->settings->updateMobileHomePageContents($home_page_contents);
        endif;

        unset($request['contents']);
        unset($request['content_numbers']);
        unset($request['status']);

        $request['show_subscription_section']       = $request->has('show_subscription_section') ? 1 : 0;
        $request['show_blog_section']               = $request->has('show_blog_section') ? 1 : 0;
        $request['show_service_info_section']       = $request->has('show_service_info_section') ? 1 : 0;
        $request['show_recent_viewed_products']     = $request->has('show_recent_viewed_products') ? 1 : 0;
        $request['show_categories_section']         = $request->has('show_categories_section') ? 1 : 0;

        $this->settings->update($request);

        return true;
    }

}
