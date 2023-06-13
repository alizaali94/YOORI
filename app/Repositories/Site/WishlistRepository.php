<?php

namespace App\Repositories\Site;

use App\Models\Wishlist;
use App\Repositories\Interfaces\Site\WishlistInterface;

class WishlistRepository implements WishlistInterface
{

    //for APi
    public function userWishlist($take)
    {
        return Wishlist::with(['product' => function($q){
            $q->select('id','price','special_discount','special_discount_type','special_discount_start','special_discount_end','thumbnail','slug','current_stock','minimum_order_quantity','status','has_variant');

        }])->whereHas('product',function ($query)
        {
            $query->where('is_deleted',0)->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut();
        })->where('user_id', authId())->latest()->paginate($take);
    }

    public function getHeaderWishlist(): int
    {
        return Wishlist::where('user_id', authId())->count();
    }

    public function addToWishlist($id)
    {
        return Wishlist::create([
            'product_id' => $id,
            'user_id' => authId(),
        ]);
    }

    public function find($id)
    {
        return Wishlist::with('product:id,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,status')->find($id);
    }

    public function wishlistProductRemove($id)
    {
        $result = '';

        $wishlist = Wishlist::where('product_id',$id)->where('user_id',authId())->first();
        if ($wishlist)
        {
            $result = $wishlist;
            $wishlist->delete();
        }

        return $result;
    }

    public function addOrRemove($product_id,$user_id)
    {
        $wishlist = Wishlist::where('user_id',$user_id)->where('product_id',$product_id)->first();

        if ($wishlist)
        {
            $wishlist->delete();
        }
        else{
            $wishlist = Wishlist::create([
                'product_id' => $product_id,
                'user_id' => $user_id,
            ]);
        }
        return $wishlist;
    }
}
