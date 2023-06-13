<?php

namespace App\Repositories\Admin;

use App\Models\CommissionHistory;
use App\Models\Product;
use App\Models\Search;
use App\Models\Wallet;
use App\Models\Wishlist;
use App\Repositories\Interfaces\Admin\ReportsInterface;
use Carbon\Carbon;
use Sentinel;
use DB;

class ReportsRepository implements ReportsInterface
{

    public function stockProduct($request, $limit)
    {
        $start_date = null;
        $end_date = null;

        if ($request->time_period != null) {
            $dates = explode(' - ', $request->time_period);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);

        }

        return Product::when($request->time_period != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('created_at', '>=', $start_date)
                    ->whereDate('created_at', '<=', $end_date);
            })
            ->when($request->c != null, function ($query) use ($request) {
                $query->where('category_id', $request->c);
            })
            ->when(Sentinel::getUser()->user_type == 'seller', function ($query) {
                $query->where('user_id', Sentinel::getUser()->id);
            })->CheckSellerSystem()
            ->paginate($limit);
    }

    public function product($request, $limit, $for = null)
    {
        $start_date = null;
        $end_date = null;
        if ($request->dt != null):
            $dates = explode(" - ", $request->dt);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;

        $product = Product::with('category')->CheckSellerSystem()
            ->when($for != null, function ($query) use ($for, $request) {
                $query->when($for == 'for_admin', function ($q) {
                    $q->where('user_id', 1);
                });
                $query->when($for == 'for_seller', function ($sellerQ) use ($request) {
                    $sellerQ->where('user_id', '!=', 1);
                    $sellerQ->when($request->sl != null, function ($qu) use ($request) {
                        $qu->whereHas('sellerProfile', function ($query) use ($request) {
                            $query->where('id', $request->sl);
                        });
                    });
                });
            })
            ->when(Sentinel::getUser()->user_type != null, function ($query) use ($request) {
                $query->when(Sentinel::getUser()->user_type == 'seller', function ($sellerQ) use ($request) {
                    $sellerQ->where('user_id', Sentinel::getUser()->id);
                });
            })
            ->when($request->c != null, function ($query) use ($request) {
                $query->where('category_id', $request->c);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('created_at', '>=', $start_date)
                    ->whereDate('created_at', '<=', $end_date);
            })
            ->whereHas('orders.order', function ($q){
                $q->where('delivery_status', 'delivered');
            })
            ->withsum('orders', 'quantity')
            ->withsum('orders', 'price')
            ->paginate($limit);
        return $product;
    }

    public function commissionHistory($request, $limit)
    {
        $start_date     = null;
        $end_date       = null;

        if ($request->dt != null):
            $dates      = explode(" - ", $request->dt);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date   = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;

        $commissions = CommissionHistory::when($request->s != null, function ($query) use ($request) {
            $query->where('seller_id', $request->s);
        })->when($request->dt != null, function ($query) use ($start_date, $end_date) {
            $query->whereDate('created_at', '>=', $start_date)
                ->whereDate('created_at', '<=', $end_date);
        })->when(Sentinel::getUser()->user_type == 'seller', function ($query) use ($request) {
            $query->where('seller_id', Sentinel::getUser()->id);
        })->paginate($limit);

        return $commissions;
    }

    public function wishlist($request, $limit)
    {
        $wishlist = Wishlist::when($request->c != null, function ($query) use ($request) {
            $query->whereHas('product', function ($q) use ($request) {
                $q->where('products.category_id', $request->c);
            });
        })
            ->when($request->q != null, function ($query) use ($request) {
                $query->whereHas('product.productLanguages', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->q . '%');
                });
            })
            ->when(Sentinel::getUser()->user_type == 'seller', function ($query) use ($request) {
                $query->whereHas('product.user', function ($q) use ($request) {
                    $q->where('id', Sentinel::getUser()->id);

                });
            })
            ->select(
                DB::raw("(count(user_id)) as total_wish"),
                DB::raw("product_id")
            )
            ->orderBy('product_id')
            ->groupBy(DB::raw("product_id"))
            ->paginate($limit);

        return $wishlist;
    }

    public function searches($request, $limit)
    {
        // TODO: Implement searches() method.
        $wishlist = Search::when($request->q != null, function ($query) use ($request) {
            $query->where('query', 'like', '%' . $request->q . '%');
        })->orderBy('total_search', 'DESC')->paginate($limit);

        return $wishlist;
    }

    public function walletRechargeHistory($request, $limit)
    {
        // TODO: Implement walletRechargeHistory() method.

        $start_date = null;
        $end_date = null;
        if ($request->dt != null):
            $dates = explode(" - ", $request->dt);
            $start_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[0]);
            $end_date = Carbon::createFromFormat('m-d-Y g:ia', $dates[1]);
        endif;

        return Wallet::when($request->u != null, function ($query) use ($request) {
            $query->where('user_id', $request->u);
        })
            ->when($request->dt != null, function ($query) use ($request) {
                $query->where('user_id', $request->u);
            })
            ->when($request->dt != null, function ($query) use ($start_date, $end_date) {
                $query->whereDate('created_at', '>=', $start_date)
                    ->whereDate('created_at', '<=', $end_date);
            })
            ->where('source','wallet_recharge')
            ->latest()
            ->paginate($limit);
    }

}
