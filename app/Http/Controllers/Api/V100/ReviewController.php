<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Review;
use App\Models\ReviewLike;
use App\Repositories\Interfaces\Admin\Blog\BlogInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Site\ReviewInterface;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReviewController extends Controller
{
    use ApiReturnFormatTrait;

    public $review;

    public function __construct(ReviewInterface $review)
    {
        $this->review     = $review;
    }

    public function review(Request $request,ReviewInterface $review): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required',
            'title'      => 'required',
            'comment'    => 'required',
            'rating'     => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }
        DB::beginTransaction();
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $request['user_id'] = $user->id;

            $review->storeReview($request->all());

            DB::commit();
            return $this->responseWithSuccess(__('Review Added Successfully'), [], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function reply(Request $request,ReviewInterface $review): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'review_id'     => 'required',
            'reply'         => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            $request['user_id'] = $user->id;
            $review->storeReply($request->all());

            return $this->responseWithSuccess(__('Reply Added Successfully'), [], 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function reviewLike(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $data = [
                'user_id'           => $user->id,
                'reviewable_id'     => $request->review_id,
                'reviewable_type'   => Review::class,
            ];

            $record = ReviewLike::where('reviewable_type',$data['reviewable_type'])->where('reviewable_id',$data['reviewable_id'])->where('user_id',$data['user_id'])->get();
            if($record->count()):
                $this->review->unLike($data);
                return $this->responseWithSuccess(__('Review Unliked Successfully'), [], 200);
            else:
                $this->review->storeLike($data);
                return $this->responseWithSuccess(__('Review Liked Successfully'), [], 200);
            endif;
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function unlikeReview(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $data = [
                'user_id'           => $user->id,
                'reviewable_id'     => $request->review_id,
                'reviewable_type'   => Review::class,
            ];

            $this->review->unLike($data);

            return $this->responseWithSuccess(__('Review Unliked Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
