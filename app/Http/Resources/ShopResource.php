<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class ShopResource extends JsonResource
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
            'title'                 => $this->title,
            'shop_name'             => $this->shop_name,
            'rating_count'          => round($this->rating_count,2),
            'reviews_count'         => (int)$this->reviews_count,
            'logo'                  => $this->image_297x203,
            'banner'                => $this->image_899x480,
            'image_90x60'           => $this->image_90x60,
            'image_82x82'           => $this->image_82x82,
            'image_617x145'         => $this->image_617x145,
            'total_products'        => count($this->products),
            'join_date'             => Carbon::parse($this->created_at)->format('d M Y'),
            'is_followed'           => $user && count($this->followedUsers) > 0 && $this->followedUsers->where('user_id',$user->id)->first(),
        ];
    }
}
