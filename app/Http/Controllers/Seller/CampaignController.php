<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\Marketing\CampaignInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Sentinel;

class CampaignController extends Controller
{
    protected $product;
    protected $campaign;
    protected $languages;

    public function __construct(ProductInterface $product, CampaignInterface $campaign, LanguageInterface $languages)
    {
        $this->product      = $product;
        $this->campaign     = $campaign;
        $this->languages     = $languages;
    }

    public function index(Request $request)
    {
        $campaigns          = $this->campaign->paginate((int)settingHelper('pagination'));
        return view('seller.marketing.campaign', compact('campaigns'));
    }

    public function addToCampaign(Request $request, $id)
    {
        $campaign    = $this->campaign->get($id);

        if ($campaign):
            $r = $request->server('HTTP_REFERER');
            return view('seller.marketing.add-to-campaign', compact(
                'campaign',
                'r'
            ));
        else:
            abort(404);
        endif;
    }

    public function storeRequest(Request $request){
        if ($this->campaign->storeRequest($request)):
            Toastr::success(__('Requested Successfully'));
            return redirect()->route('seller.campaign');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        endif;
    }

    public function productByAjax(Request $request)
    {
        $term = trim($request->q);
        if (empty($term)) {
            return \Response::json([]);
        }

        $products = $this->product->all()->where('user_id', Sentinel::getUser()->id)
                        ->whereHas('productLanguages', function ($q) use ($request) {
                            $q->where('name', 'like', '%' . $request->q . '%');
                        })->limit(20)->get();

        $formatted_products = [];

        foreach ($products as $product) {
            $formatted_products[] = ['id' => $product->id, 'text' => $product->getTranslation('name', \App::getLocale())];
        }

        return \Response::json($formatted_products);

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

    public function campaignProducts(Request $request, $id){
        $lang               = $request->lang != '' ? $request->lang : \App::getLocale();
        $campaign           = $this->campaign->get($id);
        $products           = $campaign->campaignProducts->where('user_id', Sentinel::getUser()->id);
        return view('seller.marketing.campaign-products', compact('campaign','products'));
    }
}
