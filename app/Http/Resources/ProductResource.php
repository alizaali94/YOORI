<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductResource extends JsonResource
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
        $created_at = Carbon::parse($this->created_at);
        $difference = $created_at->diffInDays();
        return [
            'id'                                    => $this->id,
            'slug'                                  => $this->slug,
            'title'                                 => $this->getTranslation('name',apiLanguage($request->lang)),
            'special_discount_type'                 => nullCheck($this->special_discount_type),
            'special_discount'                      => number_format($this->special_discount_check,3,'.',''),
            'discount_price'                        => number_format($this->discount_percentage,3,'.',''),
            'formatted_price'                       => $this->price,
            'formatted_discount'                    => $this->special_discount_check ? number_format($this->discount_percentage,3,'.','') : 0,
            'image'                                 => $this->image_190x230,
            'price'                                 => number_format($this->price,3,'.',''),
            'rating'                                => (double)$this->reviews_avg_rating,
            'reviews_count'                         => (int)$this->reviews_count,
            'current_stock'                         => (int)$this->current_stock,
            'reward'                                => round($this->reward),
            'is_new'                                => $difference < 7,
            'minimum_order_quantity'                => (int)$this->minimum_order_quantity,
            'is_favourite'                          => $user && count($this->wishlists) > 0 && $this->wishlists->where('user_id', $user->id)->first(),
        ];
    }
}
