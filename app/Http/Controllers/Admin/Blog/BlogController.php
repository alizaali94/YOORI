<?php

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\BlogRequest;
use App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface;
use App\Repositories\Interfaces\Admin\Blog\BlogInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class BlogController extends Controller
{

    protected $blogs;
    protected $languages;
    protected $categories;

    public function __construct(BlogCategoryInterface $categories, LanguageInterface $languages, BlogInterface $blogs)
    {
        $this->categories       = $categories;
        $this->languages        = $languages;
        $this->blogs            = $blogs;
    }
    public function index(Request $request, $status = null){
        try {
            $categories     = $this->categories->all()->where('status', 1)->get();
            $posts = $this->blogs->paginate($request, $status ,get_pagination('pagination'));
            return view('admin.blogs.index',compact('posts','status', 'categories'));
        } catch (\Exception $e){
            Toastr::error(__( $e->getMessage()));
            return back();
        }
    }
    public function create(Request $request){
        $categories     = $this->categories->all()->where('status', 1)->get();
        $r = $request->server('HTTP_REFERER');
        return view('admin.blogs.add-blog',compact('categories','r'));
    }
    public function store(BlogRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->blogs->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('blogs');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function edit(Request $request, $id){
        $languages  = $this->languages->all()->orderBy('id', 'asc')->get();
        $lang       = $request->lang != '' ? $request->lang : \App::getLocale();

        $categories     = $this->categories->all()->where('status', 1)->get();
        $post     = $this->blogs->getByLang($id, $lang);
//        $post     = $this->blogs->get($id);
        $r = $request->server('HTTP_REFERER');
        return view('admin.blogs.add-blog',compact('categories','post','r','languages','lang'));
    }
    public function update(BlogRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->blogs->update($request)):
            Toastr::success(__('Updated Successfully'));

            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function restore($id){
        if ($this->blogs->restore($id)):
            Toastr::success(__('Updated Successfully'));
            return redirect()->route('blogs');
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function ajaxBlogsFilter(Request $request)
    {
        $term           = trim($request->q);
        if (empty($term)) {
            return \Response::json([]);
        }

        $blogs = $this->blogs->ajaxBlogFilter($term);
        $formatted_blogs   = [];
        foreach($blogs as $blog){
            $formatted_blogs[] = ['id' => $blog->id, 'text' => $blog->getTranslation('title', \App::getLocale())];
        }
        return \Response::json($formatted_blogs);
    }
}
