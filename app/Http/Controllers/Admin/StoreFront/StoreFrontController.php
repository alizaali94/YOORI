<?php

namespace App\Http\Controllers\Admin\StoreFront;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageStoreRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Page\PageInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\ImageTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\Admin\Product\BrandInterface;


class StoreFrontController extends Controller
{
    use ImageTrait;

    private $setting;
    private $languages;
    private $page;
    private $campaigns;
    private $categories;

    public function __construct(SettingInterface $setting,
                                LanguageInterface $languages,
                                PageInterface $page)
    {
        $this->setting          = $setting;
        $this->languages        = $languages;
        $this->page             = $page;
    }

    public function themOptions()
    {
        return view('admin.store-front.theme-options');
    }

    public function websiteSeo(Request $request)
    {
        $languages = $this->languages->all()->orderBy('id', 'asc')->get();
        $lang = $request->lang == '' ? \App::getLocale() : $request->lang;

        return view('admin.store-front.website-seo', compact('languages', 'lang'));
    }


    public function homePage()
    {
        $languages = $this->languages->all()->orderBy('id', 'asc')->get();
        return view('admin.store-front.home-page', compact('languages'));
    }

    public function getContent(Request $request,BrandInterface $brands)
    {
        try {
            $data = [
                'type' => $request->type,
                'content_count' => $request->content_count,
                'for_content' => $request->for_content ?? '',
                'mobile' => $request->mobile == 1 ? 1 : 0,
                'brands'  => ($request->type == 'banner-image' || $request->type == 'banner') && $request->mobile == 1  ? $brands->all()->where('lang','en')->where('status',1)->get() : []
            ];

            return view('admin.store-front.home-page-contents',$data);
        } catch (\Exception $e){
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        }
    }

    public function getContentUpdate() {
        $home_contents = settingHelper('home_page_contents');
    }

    public function updateHomeContent(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->page->updateHomeContent($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }

    //For Custom CSS
    public function cssSetting()
    {
        return view('admin.store-front.custom-css');
    }

    //For Custom JS
    public function jsSetting()
    {
        return view('admin.store-front.custom-js');
    }

    //for GDPR
    public function gdprSetting(Request $request,PageInterface $page)
    {
        $data = [
            'languages' => $this->languages->all()->orderBy('id', 'asc')->get(),
            'lang'      => $request->lang == '' ? app()->getLocale() : $request->lang,
            'pages'     => $page->allPages(),
        ];

        return view('admin.store-front.gdpr', $data);
    }

    //for Website Popup
    public function popupSetting(Request $request)
    {
        $languages = $this->languages->all()->orderBy('id', 'asc')->get();
        $lang = $request->lang == '' ? \App::getLocale() : $request->lang;
        return view('admin.store-front.website-popup', compact('languages', 'lang'));
    }


    //Header content
    public function header(Request $request)
    {
        return view('admin.store-front.header-content');
    }

    public function topbarSetting()
    {
        return view('admin.store-front.topbar');
    }

    public function bannerSetting()
    {
        return view('admin.store-front.banner');
    }

    public function menuSetting()
    {
//        return settingHelper('header_menu');
        return view('admin.store-front.menu');
    }


    //Footer content
    public function footerSetting()
    {
        return view('admin.store-front.footer-content');
    }

    public function about(Request $request)
    {
        $languages = $this->languages->all()->orderBy('id', 'asc')->get();
        return view('admin.store-front.about', compact('languages',));
    }

    public function contact()
    {
        return view('admin.store-front.contact');
    }

    public function copyright(Request $request)
    {
        $languages = $this->languages->all()->orderBy('id', 'asc')->get();
        $lang = $request->lang == '' ? \App::getLocale() : $request->lang;
        return view('admin.store-front.copyright', compact('languages', 'lang'));
    }

    public function link()
    {
        return view('admin.store-front.link');
    }

    public function socialLink()
    {
        return view('admin.store-front.social-link');
    }

    public function pageLink()
    {
        return view('admin.store-front.pages-link');
    }

    public function banners()
    {
        return view('admin.store-front.banners');
    }

    public function bannersUpdate(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        try {
            if ($request->user_dashboard_banner != null) {
                $key = "user_dashboard_banner";
                $images[$key] = [
                    'id' => $request->user_dashboard_banner,
                    'images' => $this->getImageWithRecommendedSize($request->user_dashboard_banner, '940', '110')
                ];
            }
            if ($request->featured_category_banner != null) {
                $key = "featured_category_banner";
                $images[$key] = [
                    'id' => $request->featured_category_banner,
                    'images' => $this->getImageWithRecommendedSize($request->featured_category_banner, '240', '100')
                ];
            }
            if ($request->category_default_banner != null) {
                $key = "category_default_banner";
                $images[$key] = [
                    'id' => $request->category_default_banner,
                    'images' => $this->getImageWithRecommendedSize($request->category_default_banner, '835', '200', true)
                ];
            }
            if ($request->product_details_site_banner != null) {
                $key = "product_details_site_banner";
                $images[$key] = [
                    'id' => $request->product_details_site_banner,
                    'images' => $this->getImageWithRecommendedSize($request->product_details_site_banner, '263', '263', true)
                ];
            }
            if ($request->seller_sing_up_banner != null) {
                $key = "seller_sing_up_banner";
                $images[$key] = [
                    'id' => $request->seller_sing_up_banner,
                    'images' => $this->getImageWithRecommendedSize($request->seller_sing_up_banner, '320', '852', true)
                ];
            }
            if ($request->top_bar_banner != null) {
                $key = "top_bar_banner";
                $images[$key] = [
                    'id' => $request->top_bar_banner,
                    'images' => $this->getImageWithRecommendedSize($request->top_bar_banner, '2600', '100', true)
                ];
            }
            foreach ($request->except('_token', '_method') as $key => $banner):

                $images[$key] = [
                    'id' => $banner,
                    'images' => $this->getImageWithRecommendedSize($banner, '320', '520')
                ];
            endforeach;
            $request = new Request($images);
            if ($this->setting->update($request)):
                Toastr::success(__('Setting Updated Successfully'));
                return redirect()->back();
            else:
                Toastr::error(__('Something went wrong, please try again.'));
                return redirect()->back();
            endif;
        } catch (\Exception $e) {
        }

    }
    public function paymentMethodBanner()
    {
        return view('admin.store-front.payment-methods');
    }

    public function update(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->setting->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }

    public function aboutDesc(Request $request)
    {
        return settingHelper($request->title, $request->lang);
    }

    public function headerMenuUpdate(Request $request)
    {
        $fromAjax  = $request->header('From-Ajax');
        if (isDemoServer()):
            if (!$fromAjax):
                Toastr::info(__('This function is disabled in demo server.'));
                return redirect()->back();
            else:
                $response['message']    = __('This function is disabled in demo server.');
                $response['title']      = __('Ops..!');
                $response['status']     = 'error';
                return response()->json($response);
            endif;
        endif;
        if ($request->has('label')):
            $menu           = array();
            $parent = 0;
            for($i = 0; $i < count($request->label); $i++):

                if ($request['menu_lenght'][$i] == 1):
                    $menu[] = array(
                        'label' => $request['label'][$i],
                        'url' => $request['url'][$i] == '#' ? 'javascript:void(0)' : (preg_match("/^http/", $request['url'][$i]) ? $request['url'][$i] : ($request['url'][$i][0] == '/' ? $request['url'][$i] : '/'.$request['url'][$i])),
                    );
                    $parent++;
                else:
                    $menu[count($menu) -1][] =  array(
                        'label' => $request['label'][$i],
                        'url' => $request['url'][$i] == '#' ? 'javascript:void(0)' : (preg_match("/^http/", $request['url'][$i]) ? $request['url'][$i] : ($request['url'][$i][0] == '/' ? $request['url'][$i] : '/'.$request['url'][$i])),
                    );
                endif;

            endfor;

            foreach ($request->label as $key => $label):
                $data[$key]['label'] = $request['label'][$key];
                $data[$key]['url'] = $request['url'][$key];
            endforeach;

            $request['header_menu'] = $menu;
            unset($request['label']);
            unset($request['url']);
            unset($request['menu_lenght']);

            if ($this->setting->update($request)):
                if(!$fromAjax):
                    Toastr::success(__('Menu Updated Successfully'));
                    return redirect()->back();
                else:
                    $response['message'] = __('Menu Order Updated Successfully');
                    $response['title']  = __('Success');
                    return response()->json($response);
                endif;
            else:
                if(!$fromAjax):
                    Toastr::error(__('Something went wrong, please try again.'));
                    return redirect()->back();
                else:
                    $response['message'] = __('Unable To Update Menu Order');
                    $response['title']  = __('Ops..!');
                    $response['status'] = 'error';
                    return response()->json($response);
                endif;
            endif;
        else:
            Toastr::error(__('No Menu Found'));
            return redirect()->back();
        endif;
    }
    public function footerMenuUpdate(Request $request){
        if ($request->has('label')):
            $fromAjax  = $request->header('From-Ajax');
            if (isDemoServer()):
                if (!$fromAjax):
                    Toastr::info(__('This function is disabled in demo server.'));
                    return redirect()->back();
                else:
                    $response['message']    = __('This function is disabled in demo server.');
                    $response['title']      = __('Ops..!');
                    $response['status']     = 'error';
                    return response()->json($response);
                endif;
            endif;
            foreach ($request->label as $key => $label):
                $data[$key]['label'] = $request['label'][$key];
                $data[$key]['url'] = $request['url'][$key] == '#' ? 'javascript:void(0)' : (preg_match("/^http/", $request['url'][$key]) ? $request['url'][$key] : ($request['url'][$key][0] == '/' ? $request['url'][$key] : '/'.$request['url'][$key]));
            endforeach;

            $request['footer_menu'] = $data;
            unset($request['label']);
            unset($request['url']);

            if ($this->setting->update($request)):
                if(!$fromAjax):
                    Toastr::success(__('Menu Updated Successfully'));
                    return redirect()->back();
                else:
                    $response['message'] = __('Menu Order Updated Successfully');
                    $response['title']  = __('Success');
                    return response()->json($response);
                endif;
            else:
                if(!$fromAjax):
                    Toastr::error(__('Something went wrong, please try again.'));
                    return redirect()->back();
                else:
                    $response['message']    = __('Unable To Update Menu Order');
                    $response['title']      = __('Ops..!');
                    $response['status']     = 'error';
                    return response()->json($response);
                endif;
            endif;
        else:
            Toastr::error(__('No Menu Found'));
            return redirect()->back();
        endif;
    }

    public function footerPageUpdate(Request $request)
    {
        $fromAjax  = $request->header('From-Ajax');
        if (isDemoServer()):
            if (!$fromAjax):
                Toastr::info(__('This function is disabled in demo server.'));
                return redirect()->back();
            else:
                $response['message']    = __('This function is disabled in demo server.');
                $response['title']      = __('Ops..!');
                $response['status']     = 'error';
                return response()->json($response);
            endif;
        endif;
        if ($request->has('label')):
            foreach ($request->label as $key => $label):
                $data[$key]['label'] = $request['label'][$key];
                $data[$key]['url'] = $request['url'][$key] == '#' ? 'javascript:void(0)' : (preg_match("/^http/", $request['url'][$key]) ? $request['url'][$key] : ($request['url'][$key][0] == '/' ? $request['url'][$key] : '/'.$request['url'][$key]));
            endforeach;

            $request['useful_links'] = $data;
            unset($request['label']);
            unset($request['url']);

            if ($this->setting->update($request)):
                if(!$fromAjax):
                    Toastr::success(__('Menu Updated Successfully'));
                    return redirect()->back();
                else:
                    $response['message'] = __('Menu Order Updated Successfully');
                    $response['title']  = __('Success');
                    return response()->json($response);
                endif;
            else:
                if(!$fromAjax):
                    Toastr::error(__('Something went wrong, please try again.'));
                    return redirect()->back();
                else:
                    $response['message'] = __('Unable To Update Menu Order');
                    $response['title']  = __('Success');
                    return response()->json($response);
                endif;
            endif;
        else:
            Toastr::error(__('No Menu Found'));
            return redirect()->back();
        endif;
    }
    public function otherPages(){
        $otherPages = $this->page->paginate(get_pagination('pagination'));
        return view('admin.store-front.other-pages',compact('otherPages'));
    }
    public function addPage(){
        return view('admin.store-front.other-pages-create');
    }
    public function storePage(PageStoreRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->page->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('other.pages');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function updatePage(PageStoreRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($request->map_api_key || $request->zoom_level || $request->latitude || $request->longitude):
            $newRequest = Request::capture();
            $newRequest->replace($request->only('map_api_key','zoom_level','latitude','longitude'));
            $this->setting->update($newRequest);
        endif;
        if ($this->page->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect()->route('other.pages');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function deletePaymentBanner(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->setting->deleteBanner($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('other.pages');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function editPage(Request $request, $id){

        try {
            $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();
            $r = $request->server('HTTP_REFERER');
            if ($pageLang = $this->page->getByLang($id, $lang)):
                return view('admin.store-front.other-page-edit', compact('pageLang', 'languages', 'lang', 'r'));
            else:
                Toastr::error(__('Not found'));
                return back();
            endif;
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function statusChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if ($this->page->statusChange($request['data'])):
            $response['message']    = __('Updated Successfully');
            $response['title']      = __('Success');
            $response['status']     = 'success';
            return response()->json($response);
        else:
            $response['message']    = __('Something went wrong, please try again');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
    }
}
