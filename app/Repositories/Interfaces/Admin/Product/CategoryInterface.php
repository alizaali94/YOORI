<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface CategoryInterface
{
    public function get($id);

    public function getByLang($id, $request);

    public function store($request);

    public function all();

    public function allCategory();
    public function ajaxCategoryFilter($term);

    public function paginate($limit,$request);

    public function update($request);

    public function getCategories($id);

    public function statusChange($request);

    public function homePageCategory();

    public function shopCategory($user_id=null);

    public function categoryPage();

    public function mobileCategory($limit);

    public function categoryByIds($top_category,$take = null);

    public function category($slug);

    //API for apps
    public function categories($limit);

}
