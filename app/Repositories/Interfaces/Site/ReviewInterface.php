<?php

namespace App\Repositories\Interfaces\Site;

interface ReviewInterface{

    public function get($product_id,$paginate);

    public function paginateReviews($paginate);

    public function storeReview($request);

    public function storeLike($request);

    public function storeReply($request);

    public function unLike($data);

    public function reviewPercentage($product_id);

    public function productReviews($product_id,$paginate);

    public function statusChange($request);

}
