<?php

namespace App\Repositories\Admin\Blog;

use App\Models\Blog;
use App\Models\BlogComment;
use App\Models\BlogCommentLike;
use App\Models\BlogCommentReply;
use App\Models\BlogLanguage;
use App\Models\BlogView;
use App\Repositories\Interfaces\Admin\Blog\BlogInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogLanguageInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use Illuminate\Support\Facades\DB;

class BlogRepository implements BlogInterface
{
    use SlugTrait;
    use ImageTrait;

    protected $blogLang;

    public function __construct(BlogLanguageInterface $blogLang)
    {
        $this->blogLang        = $blogLang;
    }

    public function get($id)
    {
        return Blog::find($id);
    }
    public function getByLang($id, $lang)
    {
        if($lang == null):
            $blogByLang = BlogLanguage::with('blog')->where('lang', 'en')->where('blog_id', $id)->first();
        else:
            $blogByLang = BlogLanguage::with('blog')->where('lang', $lang)->where('blog_id', $id)->first();
            if(blank($blogByLang)):
                $blogByLang = BlogLanguage::with('blog')->where('lang', 'en')->where('blog_id', $id)->first();
                $blogByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $blogByLang;
    }

    public function all()
    {
        return Blog::with('user','category')->latest();
    }

    public function paginate($request, $status, $limit)
    {
        return Blog::with('user','category','blogLanguages')
            ->when($status == 'trash' && $status != null, function ($query){
                $query->onlyTrashed();
            })
            ->when($status != 'trash' && $status != null, function ($query) use ($status){
                $query->where('status', $status);
            })
            ->when($request->c != null, function ($query) use ($request){
                $query->where('category_id', $request->c);
            })
            ->when($request->q != null, function ($query) use ($request){
                $query->whereHas('blogLanguages', function ($q) use ($request){
                    $q->where('title', 'like', '%'.$request->q.'%');
                    $q->orwhere('short_description', 'like', '%'.$request->q.'%');
                    $q->orwhere('long_description', 'like', '%'.$request->q.'%');
                    $q->orwhere('meta_title', 'like', '%'.$request->q.'%');
                    $q->orwhere('meta_description', 'like', '%'.$request->q.'%');
                    $q->orwhere('meta_keyword', 'like', '%'.$request->q.'%');
                } );
                $query->orwhereHas('user', function ($q) use ($request){
                    $q->where('first_name', 'like', '%'.$request->q.'%');
                    $q->orwhere('last_name', 'like', '%'.$request->q.'%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%".$request->q."%");
                    $q->orwhere('email', 'like', '%'.$request->q.'%');
                });
            })
            ->latest()
            ->paginate($limit);

    }

    public function store($request)
    {
//        dd($request->all());
        DB::beginTransaction();
        try {
            $blog = new Blog();
            $blog->category_id          = $request->category_id;
            $blog->user_id              = authId();
            $blog->slug                 =  $this->getSlug($request->title, $request->slug);

            if ($request->image != ''):
                $blog->image            = $this->getImageWithRecommendedSize($request->image,260,175);
                $blog->image_id         = $request->image;
            else:
                $blog->image            = [];
                $blog->image_id         = null;
            endif;

            if ($request->banner != ''):
                $blog->banner            = $this->getImageWithRecommendedSize($request->banner,900,300);
                $blog->banner_id         = $request->banner;
            else:
                $blog->banner            = [];
                $blog->banner_id         = null;
            endif;

            $blog->status = $request->status;
            $blog->save();

            $request['blog_id'] = $blog->id;
            if ($request->lang == ''):
                $request['lang']    = 'en';
            endif;
            $this->blogLang->store($request);

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
//        dd($request->all());
//        dd($request->all());


        DB::beginTransaction();
        try {
            $blog                       = $this->get($request->blog_id);
            $blog->category_id          = $request->category_id;
            $blog->slug                 =  $this->getSlug($request->title, $request->slug);

            if ($request->image != ''):
                $blog->image            = $this->getImageWithRecommendedSize($request->image,260,175);
                $blog->image_id         = $request->image;
            else:
                $blog->image            = [];
                $blog->image_id         = null;
            endif;

            if ($request->banner != ''):
                $blog->banner            = $this->getImageWithRecommendedSize($request->banner,900,300);
                $blog->banner_id         = $request->banner;
            else:
                $blog->banner            = [];
                $blog->banner_id         = null;
            endif;

            $blog->status = $request->status;
            $blog->save();

            if ($request->blog_lang_id == '') :
                $this->blogLang->store($request);
            else:
                $this->blogLang->update($request);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function restore($id){
        DB::beginTransaction();
        try {
            $blog = Blog::withTrashed()->find($id);
            $blog->status = 'published';
            $blog->save();

            Blog::withTrashed()->find($id)->restore();
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request)
    {
//        DB::beginTransaction();
//        try {
//            $category           = $this->get($request['id']);
//            $category->status   = $request['status'];
//            $category->save();
//
//            DB::commit();
//            return true;
//        } catch (\Exception $e) {
//            DB::rollback();
//            return false;
//        }
    }

    //for api
    public function homePageBlogs()
    {
        return Blog::with('currentLanguage')->where('status','published')->take(4)->latest()->select('id','image','image_id','slug')->get();
    }

    public function blogs($data)
    {
        $blogs = Blog::query();

        $sort = array_key_exists('sort',$data) ? $data['sort'] : 'newest';

        if (array_key_exists('slug',$data))
        {
            $blogs->whereHas('category',function ($query) use ($data){
                $query->where('slug',$data['slug']);
            });
        }

        if (array_key_exists('title', $data) && !empty($data['title'])) {
            $blogs->whereHas('blogLanguages', function ($query) use ($data) {
                $query->where('title', 'like', '%' . $data['title'] . '%');
            });
        }

        if ($sort == 'newest')
        {
            $blogs->latest();
        }
        if ($sort == 'oldest')
        {
            $blogs->oldest();
        }
        if ($sort == 'viewed')
        {
            $blogs->withCount('blogViews')->orderBy('blog_views_count','desc');
        }

        return $blogs->where('status','published')->paginate(12);
    }

    public function blogView($blog)
    {
        if (authUser())
        {
            return BlogView::create([
                'user_id' => authId(),
                'blog_id' => $blog->id,
            ]);
        }
        else{
            return [];
        }
    }

    public function blogDetails($slug)
    {
        return Blog::with('user:id,images,first_name,last_name','currentLanguage')->withCount('blogViews')->where('slug',$slug)->first();
    }

    public function blogById($id)
    {
        return Blog::with('user:id,images,first_name,last_name','currentLanguage')->withCount('blogViews')->find($id);
    }

    public function comments($id,$paginate): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return BlogComment::with('user:id,images,first_name,last_name','commentReplies.replies','commentLikes')
            ->where('blog_id',$id)->latest()->paginate($paginate);
    }

    public function storeComment($request)
    {
        return BlogComment::create($request);
    }

    public function storeReply($request)
    {
        if (empty($request['parent_id']))
        {
            $request['parent_id'] = null;
        }

        return BlogCommentReply::create($request);
    }

    public function storeLike($data)
    {
        return BlogCommentLike::create($data);
    }

    public function unLike($data)
    {
        return BlogCommentLike::where('commentable_type',$data['commentable_type'])->where('commentable_id',$data['commentable_id'])->where('user_id',$data['user_id'])->delete();
    }

    public function comment($comment_id)
    {
        return BlogComment::with('commentReplies.replies','commentLikes')->find($comment_id);
    }

    public function recentPosts($id)
    {
        return Blog::with('currentLanguage')->where('id','!=',$id)->where('status','published')->latest()->paginate(5);
    }

    //API
    public function allBlog($limit)
    {
        return Blog::with('currentLanguage')->where('status','published')->latest()->paginate($limit);
    }

    public function ajaxBlogFilter($term){

        return Blog::whereHas('blogLanguages', function ($q) use ($term) {
            $q->where('title', 'like', '%' . $term . '%');
        })->where('status','published')->select('id')
            ->limit(50)->get();
    }


}

