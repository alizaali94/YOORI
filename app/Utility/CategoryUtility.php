<?php

namespace App\Utility;

use App\Models\Category;

class CategoryUtility
{
    public static function childs($id)
    {
        $childs = CategoryUtility::shiblings($id);

        return !empty($childs) ? array_column($childs, 'id') : [];
    }

    public static function shiblings($id, $return_type = array())
    {
        $childs = CategoryUtility::getMyChilds($id);
        if (!empty($childs)) :
            foreach ($childs as $child) :
                $return_type[] = $child;
                $return_type = CategoryUtility::shiblings($child['id'], $return_type);
            endforeach;
        endif;

        return $return_type;
    }

    public static function getMyChilds($id, $array = false)
    {
        $childs = Category::where('parent_id', $id)->get();
        $childs = $array && !empty($childs) ? $childs->toArray() : [];

        return $childs;
    }

    public static function getMyChildIds($id)
    {
        $childs = CategoryUtility::getMyChilds($id,true);

        return !empty($childs) ? array_column($childs, 'id') : [];
    }

    public static function position($id, $up = true)
    {
        if (!empty(CategoryUtility::getMyChildIds($id))) :
            foreach (CategoryUtility::getMyChildIds($id) as $value) :
                $category = Category::find($value);
                $category->position = $up ? $category->position + 1 : $category->position - 1;
                $category->save();

                return CategoryUtility::position($value, $up);
            endforeach;
        endif;
    }

    public static function getMyAllChildIds($id)
    {
        $childs = CategoryUtility::getMyChilds($id,true);

        $data = !empty($childs) ? array_column($childs, 'id') : [];
        $new_data[] = $data;

        foreach ($data as $child):
            $children = CategoryUtility::getMyChildIds($child);
            if($children != []):
                $new_data[] = CategoryUtility::getMyChildIds($child);
            endif;
        endforeach;


        return array_merge(...$new_data);
    }
}
