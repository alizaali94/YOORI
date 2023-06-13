<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Admin\ReportsInterface;
use App\Repositories\Interfaces\Admin\SellerProfileInterface;
use App\Repositories\Interfaces\UserInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    private $reports;
    private $categories;

    public function __construct(ReportsInterface $reports,CategoryInterface $categories)
    {
        $this->reports      = $reports;
        $this->categories   = $categories;
    }
    public function productStock(Request $request){
        try {
            $categories = $this->categories->allCategory()->where('status', 1);
            $all_filter_products = $this->reports->stockProduct($request, get_pagination('pagination'));
            return view('seller.reports.product-stock', compact('categories', 'all_filter_products'));
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function productWishlist(Request $request){
        try {
            $categories = $this->categories->allCategory()->where('status', 1);
            $wishlist   = $this->reports->wishlist($request, get_pagination('pagination'));
            return view('admin.reports.product-wishlist', compact('categories', 'wishlist'));
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function productSale(Request $request){
        try {
            $categories = $this->categories->allCategory()->where('status', 1);
            $products   = $this->reports->product($request, get_pagination('pagination'));
            return view('seller.reports.seller-product', compact('products', 'categories'));
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function commissionHistory(Request $request){
        try {
            $commissions = $this->reports->commissionHistory($request, get_pagination('pagination'));
            return view('seller.reports.commission-history', compact('commissions'));
        } catch (\Exception $e) {
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
}
