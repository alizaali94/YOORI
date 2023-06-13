<?php

namespace App\Http\Controllers\Admin\Marketing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\CampaignRequest;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Marketing\CampaignInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    protected $product;
    protected $campaign;
    protected $languages;

    public function __construct(ProductInterface $product, CampaignInterface $campaign, LanguageInterface $languages)
    {
        $this->product       = $product;
        $this->campaign      = $campaign;
        $this->languages     = $languages;
    }

    public function index(Request $request)
    {
        $campaigns          = $this->campaign->paginate(get_pagination('pagination'));
        return view('admin.marketing.campaign', compact('campaigns'));
    }

    public function create()
    {
        return view('admin.marketing.campaign-create');
    }

    public function store(CampaignRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->campaign->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('campaign')->with('success', __('Data added Successfully'));
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function edit(Request $request, $id)
    {
        try {
            $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
            $lang       = $request->lang != '' ? $request->lang : \App::getLocale();

            $product_ids        = [];

            $campaignByLang     = $this->campaign->getByLang($id, $lang);
            foreach ($campaignByLang->campaign->campaignProducts as $product) {
                $product_ids[]  = $product->id;
            }

            $startDate          = Carbon::parse($campaignByLang->campaign->start_date)->format('m-d-Y h:m A');
            $endDate            = Carbon::parse($campaignByLang->campaign->end_date)->format('m-d-Y h:m A');

            $date = $startDate . ' - ' . $endDate;
            $r = $request->server('HTTP_REFERER');
            return view('admin.marketing.campaign-update', compact(
                'campaignByLang',
                'r',
                'lang',
                'date',
                'languages',
                'product_ids'
            ));
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function update(CampaignRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->campaign->update($request)):
            Toastr::success(__('Updated Successfully'));

            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function productByAjax(Request $request)
    {
        $term = trim($request->q);
        if (empty($term)) {
            return response()->json([]);
        }

        $products = $this->product->all()->whereHas('productLanguages', function ($q) use ($request) {
            $q->where('name', 'like', '%' . $request->q . '%');
        })->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->limit(20)->get();

        $formatted_products = [];

        foreach ($products as $product) {
            $formatted_products[] = ['id' => $product->id, 'text' => $product->getTranslation('name', \App::getLocale())];
        }

        return response()->json($formatted_products);

    }

    public function showDivAjax(Request $request, $page_name, $param1 = null)
    {
        $data = $request->product_id;

        $otherLinks = null;
        if ($param1) :
            $otherLinks = explode('/', $param1);
        endif;

        return view("admin.modals.$page_name", compact('otherLinks', 'data','request'));
    }

    public function statusChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if ($this->campaign->statusChange($request['data'])):
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

    public function featuredChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if ($this->campaign->featuredChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        endif;
    }

    public function flashSaleChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if ($this->campaign->flashSaleChange($request['data'])):
            $response['message'] = __('Updated Successfully');
            $response['title'] = __('Success');
            $response['status'] = 'success';
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['title'] = __('Ops..!');
            $response['status'] = 'error';
            return response()->json($response);
        endif;
    }

    public function campaignProducts(Request $request, $id){
        $lang               = $request->lang != '' ? $request->lang : \App::getLocale();
        $campaignByLang     = $this->campaign->getByLang($id, $lang);
        return view('admin.marketing.campaign-products', compact('campaignByLang'));
    }

    public function campaignProductStore(Request $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->campaign->campaignProductStore($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        endif;
    }

    public function campaignProductRequest($id){
        $products          = $this->campaign->campaignProductRequests($id, get_pagination('pagination'));
        return view('admin.marketing.campaign-product-request', compact('products'));
    }

    public function campaignProductRequestStatus(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->campaign->campaignProductRequestStatus($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }

    public function campaignRequests(){
        $products          = $this->campaign->allCampaignProductRequests(get_pagination('pagination'));
        return view('admin.marketing.all-campaign-request', compact('products'));
    }

}
