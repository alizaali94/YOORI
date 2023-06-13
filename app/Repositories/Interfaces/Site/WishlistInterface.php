<?php

namespace App\Repositories\Interfaces\Site;

interface WishlistInterface{

    public function userWishlist($take);

    public function getHeaderWishlist();

    public function addToWishlist($id);

    public function wishlistProductRemove($id);

    public function addOrRemove($product_id,$user_id);
}
