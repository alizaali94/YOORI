<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\BlogResource;
use App\Http\Resources\BlogCategoryResource;
use App\Http\Resources\BlogReviewResource;
use App\Models\BlogComment;
use App\Models\BlogCommentReply;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class BlogController extends Controller
{
    use ApiReturnFormatTrait;

    public $blog;
    public $category;
    public $user;

    public function __construct(BlogInterface $blog,CategoryInterface $category, UserInterface $user)
    {
        $this->blog     = $blog;
        $this->category = $category;
        $this->user     = $user;
    }

    public function allBlog()
    {
        try {
            $data = BlogResource::collection($this->blog->allBlog(get_pagination('api_paginate')));
            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
    public function postById($id)
    {
        try {
            $blogDetails = $this->blog->get($id);
            $data =[
                'id'                => $blogDetails->id,
                'category_id'       => $blogDetails->category_id,
                'category_title'    => $this->category->get($blogDetails->category_id)->title,
                'user_id'           => $blogDetails->user_id,
                'user_name'         => $this->user->get($blogDetails->user_id)->fullname,
                'image'             => [
                    'image_40x40'       => getFileLink('40x40', $blogDetails->image),
                    'image_72x72'       => getFileLink('72x72', $blogDetails->image),
                    'image_190x230'     => getFileLink('190x230', $blogDetails->image),
                    'image_110x122'     => getFileLink('110x122', $blogDetails->image),
                    'image_320x320'     => getFileLink('320x320', $blogDetails->image),
                    'image_260x175'     => getFileLink('260x175', $blogDetails->image),
                ],
                'banner'            => [
                    'image_40x40'       => getFileLink('40x40', $blogDetails->image),
                    'image_72x72'       => getFileLink('72x72', $blogDetails->image),
                    'image_190x230'     => getFileLink('190x230', $blogDetails->image),
                    'image_110x122'     => getFileLink('110x122', $blogDetails->image),
                    'image_320x320'     => getFileLink('320x320', $blogDetails->image),
                    'image_900x300'     => getFileLink('900x300', $blogDetails->image),
                ],
                'status'            => $blogDetails->status,
                'title'             => $blogDetails->title,
                'short_description' => $blogDetails->short_description,
                'description'       => $blogDetails->description,
                'tags'              => $blogDetails->tags,
                'published_date'    => $blogDetails->published_date,
            ];

            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function details($id, BlogCategoryInterface $blogCategory): \Illuminate\Http\JsonResponse
    {
        try {
            DB::beginTransaction();
            $blog = $this->blog->blogById($id);

            $this->blog->blogView($blog);

            $comments = $this->blog->comments($blog->id, 10);

            $categories = $blogCategory->all()->with('currentLanguage')->where('status',1)->get();

            $data = [
                'comments' => BlogReviewResource::collection($comments),
                'categories' => BlogCategoryResource::collection($categories),
                'blog' => [
                    'id'                => $blog->id,
                    'banner'            => $blog->banner_img,
                    'date'              => $blog->published_date,
                    'total_viewed'      => $blog->total_views_count,
                    'total_comments'    => count($comments),
                    'title'             => $blog->title,
                    'tags'              => explode(',', $blog->tags),
                    'description'       => html_entity_decode($blog->description),
                    'user'              => [
                        'id'        => $blog->user->id,
                        'name'      => $blog->user->full_name,
                        'image'     => $blog->user->user_profile_image,
                    ],
                ],
                'recent_posts' => BlogResource::collection($this->blog->recentPosts($blog->id)),
            ];
            DB::commit();
            return $this->responseWithSuccess(__('Data Successfully Found'), $data, 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function storeComment(Request $request): \Illuminate\Http\JsonResponse
    {
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

        $validator = Validator::make($request->all(), [
            'comment'     => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }

        try {
            $request['user_id'] = $user->id;

            $this->blog->storeComment($request->all());

            return $this->responseWithSuccess(__('Comment Submitted Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function storeCommentReply(Request $request): \Illuminate\Http\JsonResponse
    {
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

        $validator = Validator::make($request->all(), [
            'comment'     => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
        }

        try {
            $request['user_id'] = $user->id;

            $this->blog->storeReply($request->all());

            return $this->responseWithSuccess(__('Comment Submitted Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function likeBlogComments(Request $request): \Illuminate\Http\JsonResponse
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
                'user_id' => $user->id,
                'commentable_id' => $request->post_id,
                'commentable_type' => BlogComment::class,
            ];

            $this->blog->storeLike($data);

            return $this->responseWithSuccess(__('Comment Liked Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function unlikeBlogComments(Request $request): \Illuminate\Http\JsonResponse
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
                'user_id' => $user->id,
                'commentable_id' => $request->post_id,
                'commentable_type' => BlogComment::class,
            ];
            $this->blog->unLike($data);

            return $this->responseWithSuccess(__('Comment Unliked Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function likeBlogReply(Request $request): \Illuminate\Http\JsonResponse
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
                'user_id' => $user->id,
                'commentable_id' => $request->comment_id,
                'commentable_type' => BlogCommentReply::class,
            ];
            $this->blog->storeLike($data);

            return $this->responseWithSuccess(__('Reply Liked Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function unlikeBlogReply(Request $request): \Illuminate\Http\JsonResponse
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
                'user_id' => $user->id,
                'commentable_id' => $request->comment_id,
                'commentable_type' => BlogCommentReply::class,
            ];

            $this->blog->unLike($data);

            return $this->responseWithSuccess(__('Reply Unliked Successfully'), [], 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function getDetails(Request $request, $id)
    {
        try {
            $blog = $this->blog->get($id);
            $data = [
                'details' => $blog->getTranslation('long_description',apiLanguage($request->lang))
            ];
            return view('api.post-details',$data);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }
}
