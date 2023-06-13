<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class SellerResource extends JsonResource
{
    public function toArray($request)
    {
        $user = null;

        if ($request->token)
        {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            } catch (\Exception $e) {
            }
        }

        return [

            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'logo'                  => $this->image_197x152,
            'banner'                => $this->image_297x203,
            'rating'                => round($this->rating_count,2),
            'total_reviews'         => (int)$this->reviews_count,
            'shop_name'             => $this->shop_name,
            'join_date'             => Carbon::parse($this->created_at)->format('d M Y'),
            'total_products'        => count($this->products),
            'is_followed'           => $user && count($this->followedUsers) > 0 && $this->followedUsers->where('user_id',$user->id)->first(),
        ];
    }
}
