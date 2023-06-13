<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Tymon\JWTAuth\Facades\JWTAuth;

class BlogReviewResource extends JsonResource
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
            'comment'           => $this->comment,
            'parent_id'         => $this->parent_id,
            'replies'           => BlogReviewResource::collection($this->commentReplies),
            'is_liked'          => count($this->commentLikes) > 0 && $user && $this->commentLikes->where('user_id',$user->id)->first(),
            'user'              => [
                'id'        => $this->user->id,
                'name'      => $this->user->full_name,
                'image'     => $this->user->user_profile_image,
            ],
        ];
    }
}
