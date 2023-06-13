<?php

namespace App\Repositories\Interfaces\Admin\Blog;

interface BlogInterface
{
    public function get($id);

    public function getByLang($id, $lang);

    public function all();

    public function paginate($request, $status , $limit);

    public function store($request);

    public function update($request);

    public function statusChange($request);

    public function restore($id);

    public function homePageBlogs();

    public function blogs($data);

    public function blogDetails($slug);

    public function blogById($id);

    public function comments($id,$paginate);

    public function blogView($blog);

    public function storeComment($request);

    public function storeReply($request);

    public function storeLike($data);

    public function unLike($data);

    public function comment($comment_id);

    public function recentPosts($id);

    //API
    public function allBlog($limit);

    public function ajaxBlogFilter($term);

}
