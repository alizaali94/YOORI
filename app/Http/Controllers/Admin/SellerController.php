<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Http\Resources\SiteResource\CouponPaginateResource;
use App\Http\Resources\SiteResource\ProductPaginateResource;
use App\Http\Resources\SiteResource\ProductResource;
use App\Imports\SellerImport;
use App\Repositories\Interfaces\Admin\Marketing\CouponInterface;
use App\Repositories\Interfaces\Admin\MediaInterface;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Admin\SellerInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Traits\HomePage;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    use HomePage;

    protected $sellers;

    public function __construct(SellerInterface $sellers)
    {
        if(settingHelper('seller_system') != 1){
            abort(403);
        }
        $this->sellers = $sellers;
    }

    public function index(Request $request)
    {
        try{
            $users = $this->sellers->paginate($request, get_pagination('pagination'));
            return view('admin.sellers.index', compact('users'));
        } catch (\Exception $e) {
            dd($e);
        }

    }
    public function create()
    {
        return view('admin.sellers.form');
    }

    public function store(UserStoreRequest $request)
    {
        if($this->sellers->store($request)):
            return redirect()->route('sellers')->with('success',__('Data added Successfully'));
        else:
            return back();
        endif;
    }

    public function edit(Request $request, $id)
    {
        if ($user = $this->sellers->get($id)):
            if ($user->user_type == 'seller'):
                $r = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
                return view('admin.sellers.form', compact('user','r'));
            else:
                Toastr::error(__('Not found'));
                return back();
            endif;
        else:
            Toastr::error(__('Not found'));
            return back();
        endif;
    }

    public function update(UserUpdateRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->sellers->update($request) != 0):
            Toastr::success(__('Data Updated Successfully'));
            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function verify($id, $user_id){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if($id == 0):
            Toastr::error(__('Please complete your shop details.'));
            return redirect()->route('admin.seller.edit',$user_id);
        endif;
        if ($this->sellers->verify($id)):
            Toastr::success(__('Data Updated Successfully'));
            return redirect()->route('sellers');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function sellerByAjax(Request $request){
        $term           = trim($request->q);
        if (empty($term)) {
            return \Response::json([]);
        }

        $sellers = $this->sellers->shop()
            ->where('shop_name', 'like', '%'.$term.'%')
            ->where('verified_at','!=',null)
            ->limit(30)
            ->get();

        $formatted_seller   = [];

        foreach ($sellers as $seller) {
            $formatted_seller[] = ['id' => $seller->id, 'text' => $seller->shop_name];
        }

        return \Response::json($formatted_seller);
    }

    public function shop(SellerProfileInterface $seller,MediaInterface $media,ProductInterface $product,CouponInterface $coupon, $slug): \Illuminate\Http\JsonResponse
    {
        try {
            $shop = $seller->shopDetails($slug);

            $contents = $shop->shop_page_contents;

            $data = [
                'shop' => [
                    'id'                    => $shop->id,
                    'slug'                  => $slug,
                    'contents'              => $this->parseShopData($shop,$media,$product),
                    'component_names'       => $contents ? array_keys(array_merge(...$contents)) : [],
                    'image_82x82'           => $shop->image_82x82,
                    'image_899x480'         => $shop->image_899x480,
                    'shop_name'             => $shop->shop_name,
                    'shop_page_contents'    => $shop->shop_page_contents,
                    'rating_count'          => round($shop->rating_count,2),
                    'reviews_count'         => (int)$shop->reviews_count,
                    'shop_tagline'          => $shop->shop_tagline,
                    'image_297x203'         => $shop->image_297x203,
                    'total_products'        => count($shop->products),
                    'join_date'             => Carbon::parse($shop->created_at)->format('d M Y'),
                ],
                'coupons' => new CouponPaginateResource($coupon->sellerCoupons($shop->user_id)),
                'products' => new ProductPaginateResource($product->sellerProducts($shop->user_id)),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Ops..!')
            ]);
        }
    }
    public function sellerImport(Request $request)
    {
        return view('admin.sellers.import-seller');
    }

    public function importSeller(Request $request)
    {
        $extension = request()->file('file')->getClientOriginalExtension();

        if ($extension != 'xlsx' && $extension != 'xls' && $extension != 'csv'):
            return back()->with('danger', __('file_type_not_supported'));
        endif;

        $file = request()->file('file')->store('import');
        $import = new SellerImport();
        $import->import($file);

        unlink(storage_path('app/'.$file));
        Toastr::success(__('successfully_imported'));
        return back();
    }
}
