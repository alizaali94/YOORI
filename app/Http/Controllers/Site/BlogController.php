<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\SiteResource\BlogDetailsResource;
use App\Http\Resources\SiteResource\BlogPaginateResource;
use App\Models\BlogComment;
use App\Models\BlogCommentReply;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function __;
use function response;

class BlogController extends Controller
{
    protected $blog;

    public function __construct(BlogInterface $blog)
    {
        $this->blog = $blog;
    }

    public function blogs(Request $request): \Illuminate\Http\JsonResponse
    {

        try {
            $data = [
                'blogs' => new BlogPaginateResource($this->blog->blogs($request->all())),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function blogDetails($slug, BlogCategoryInterface $blogCategory): \Illuminate\Http\JsonResponse
    {
        try {
            DB::beginTransaction();
            $blog = $this->blog->blogDetails($slug);
            $blog->title = $blog->getTranslation('title',languageCheck());
            $blog->short_description = $blog->getTranslation('short_description',languageCheck());
            $blog->long_description = $blog->getTranslation('long_description',languageCheck());
            $data = [
                'blog_view' => $this->blog->blogView($blog),
                'comments' => $this->blog->comments($blog->id, 10),
                'categories' => $blogCategory->paginate(14),
                'blog' => $blog,
                'tags' => explode(',', $blog->tags),
                'recent_posts' => $this->blog->recentPosts($blog->id),
            ];
            DB::commit();
            return response()->json($data);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function storeComment(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request['user_id'] = authId();
            $data = [
                'storeComment' => $this->blog->storeComment($request->all()),
                'blog' => $this->blog->blogDetails($request->slug),
                'success' => __('Comment Submitted Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function storeCommentReply(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request['user_id'] = authId();
            $data = [
                'storeReply' => $this->blog->storeReply($request->all()),
                'blog' => $this->blog->blogDetails($request->slug),
                'success' => __('Replied Submitted Successfully'),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function loadBlogComments($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'comments' => $this->blog->comments($id, 10),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function loadBlogCategories(BlogCategoryInterface $blogCategory): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'categories' => $blogCategory->paginate(14),
            ];
            DB::commit();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function likeBlogComments(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id' => authId(),
                'commentable_id' => $request->id,
                'commentable_type' => BlogComment::class,
            ];
            $data = [
                'like' => $this->blog->storeLike($data),
                'comments' => $this->blog->comments($request->blog_id, 10 * $request->paginate),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function unlikeBlogComments(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id' => authId(),
                'commentable_id' => $request->id,
                'commentable_type' => BlogComment::class,
            ];
            $data = [
                'like' => $this->blog->unLike($data),
                'comments' => $this->blog->comments($request->blog_id, 10 * $request->paginate),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function likeBlogReply(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id' => authId(),
                'commentable_id' => $request->id,
                'commentable_type' => BlogCommentReply::class,
            ];
            $this->blog->storeLike($data);

            $data = [
                'comment' => $this->blog->comment($request->comment_id),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }

    public function unlikeBlogReply(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'user_id' => authId(),
                'commentable_id' => $request->id,
                'commentable_type' => BlogCommentReply::class,
            ];

            $this->blog->unLike($data);


            $data = [
                'comment' => $this->blog->comment($request->comment_id),
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }
}
