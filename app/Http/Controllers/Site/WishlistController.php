<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\WishlistInterface;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    protected $wishlist;

    public function __construct(WishlistInterface $wishlist)
    {
        $this->wishlist = $wishlist;
    }

    public function wishlists(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'wishlists' => $this->wishlist->userWishlist(8)
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function addToWishlist($id, ProductInterface $product): \Illuminate\Http\JsonResponse
    {
        try {
            $create = $this->wishlist->addToWishlist($id);

            $data = [
                'wishlist' => $create,
                'product' => $product->all()->with('userWishlist')->selectRaw('id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail')
                    ->where('id', $create->product_id)->first()->makeHidden(['thumbnail']),
                'wishlists' => $this->wishlist->getHeaderWishlist(),
                'success' => __('Added Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function wishlistProductRemove(WishlistInterface $wishlist, $id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'wishlist' => $wishlist->wishlistProductRemove($id),
                'totalWishlist' => $wishlist->getHeaderWishlist(),
                'success' => __('Removed Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {

            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }
}
