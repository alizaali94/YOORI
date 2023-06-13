<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReviewResource extends JsonResource
{
    public function toArray($request)
    {
        $user = null;
        if ($request->token)
        {
            try {
                if (!$user = JWTAuth::parseToken()->authenticate()) {
                    return $this->responseWithError(__('unauthorized_user'), '', 404);
                }
            } catch (\Exception $e) {
            }
        }

        return [
            'id'                => $this->id,
            'rating'            => round($this->rating,2),
            'comment'           => $this->comment,
            'title'             => $this->title,
            'date'              => $this->review_date,
            'total_likes'       => count($this->reviewLikes),
            'total_replies'     => count($this->replies),
            'image'             => $this->image_link != '' ? $this->image_link : '',
            'is_liked'          => count($this->reviewLikes) > 0 && $user && $this->reviewLikes->where('user_id',$user->id)->first(),
            'user'         => [
                'id'        => $this->user->id,
                'name'      => $this->user->full_name,
                'image'     => $this->user->user_profile_image,
            ],
            'replies'           => ReplyResource::collection($this->replies),
        ];
    }
}
