<?php

namespace App\Repositories\Admin\Product;

use App\Http\Resources\SiteResource\ProductResource;
use App\Models\Product;
use App\Utility\CategoryUtility;
use App\Models\Category;
use App\Models\CategoryLanguage;
use App\Repositories\Interfaces\Admin\Product\CategoryInterface;
use App\Repositories\Interfaces\Admin\Product\CategoryLanguageInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use Illuminate\Support\Facades\DB;

class CategoryRepository implements CategoryInterface
{
    use SlugTrait;
    use ImageTrait;

    protected $catLang;

    public function __construct(CategoryLanguageInterface $catLang)
    {
        $this->catLang        = $catLang;
    }

    public function get($id)
    {
        return Category::find($id);
    }

    public function getByLang($id, $lang)
    {
        if($lang == null):
            $catByLang = CategoryLanguage::with('category')->where('lang', 'en')->where('category_id', $id)->first();
        else:
            $catByLang = CategoryLanguage::with('category')->where('lang', $lang)->where('category_id', $id)->first();
            if(blank($catByLang)):
                $catByLang = CategoryLanguage::with('category')->where('lang', 'en')->where('category_id', $id)->first();
                $catByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $catByLang;
    }

    public function allCategory()
    {
        return Category::with('childCategories')->get();
    }
    public function all()
    {
        return Category::leftJoin('category_languages', 'category_languages.category_id', '=', 'categories.id')
            ->select('categories.*', 'category_languages.id as category_lang_id', 'category_languages.title', 'category_languages.lang',
                'category_languages.meta_title', 'category_languages.meta_description');
    }
    public function ajaxCategoryFilter($term){
        return Category::with('childCategories','categoryLanguage')
            ->whereHas('categoryLanguage', function ($query) use ($term) {
                $query->where('title', 'like', '%'.$term.'%');
            })
            ->where('status',1)
            ->where(function ($query){
                $query->whereNull('position');
                $query->orwhere('position',1);
                $query->orwhere('position',2);
            })->limit(50)->get();
    }

    public function getCategories($id)
    {
        return $this->allCategory()->where('parent_id', null)
                ->whereNotIn('id', CategoryUtility::childs($id))->where('id', '!=' , $id);
    }

    public function paginate($limit, $request)
    {
        return $this->all()->with('childCategories')->latest()->where('lang', 'en')
            ->when($request->q != null, function($query) use ($request){
                $query->whereHas('categoryLanguage', function ($q) use ($request){
                    $q->where('title', 'like', '%'.$request->q.'%');
                });
//                $query->orWhereHas('childCategories', function ($q) use ($request){
//                    $q->whereHas('categoryLanguage', function ($qu) use ($request){
//                        $qu->orwhere('title', 'like', '%'.$request->q.'%');
//                    });
//                });
    })
            ->paginate($limit);
    }

    public function store($request)
    {
        DB::BeginTransaction();
        try {
            $category                   = new Category();

            if ($request->category != "") {
                $category->parent_id        = $request->category;

                $parent_cat = $this->get($request->category);
                $category->position = $parent_cat->position + 1 ;

                if ($category->position > 3):
                    return $position_up = 'position_up';
                endif;
            }
            if ($request->logo != ''):
                $category->logo        = $this->getImageArrayRecommendedSize($request->logo,[140,130,80],[190,95,60]);
                $category->logo_id     = $request->logo;
            else:
                $category->logo        = [];
                $category->logo_id     = null;
            endif;
            if ($request->banner != ''):
                $category->banner        = $this->getImageWithRecommendedSize($request->banner,835,200,true);
                $category->banner_id     = $request->banner;
            else:
                $category->banner        = [];
                $category->banner_id     = null;
            endif;

            $category->icon              = $request->icon ?? null;
            $category->slug              = $this->getSlug($request->title, $request->slug);
            $category->ordering          = $request->ordering ?? 0;
            $category->commission        = $request->commission == null ? 0 : $request->commission;
//            $category->is_digital        = $request->is_digital;
            $category->save();

            $request['category_id'] = $category->id;
            if (!isset($request->lang)) :
                $request['lang']    = 'en';
            endif;
            $this->catLang->store($request);

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::BeginTransaction();
        try {


            $category               = $this->get($request->category_id);
            $category->parent_id    = $request->category;

            $previous_position = $category->position;

            if ($request->category != "") :
                $category->parent_id = $request->category;

                $parent_cat          = $this->get($request->category);
                $category->position  = $parent_cat->position + 1 ;
                if ($category->position > 3):
                    return $position_up = 'position_up';
                endif;
            else:
                $category->parent_id    = null;
                $category->position     = null;
            endif;

            if($previous_position < $category->postion) :
                CategoryUtility::position($category->id, true);
            elseif ($previous_position > $category->postion ):
                CategoryUtility::position($category->id, false);
            endif;

            $category->slug          = $this->getSlug($request->title, $request->slug);
            $category->commission    = $request->commission == null ? 0 : $request->commission;
//            $category->is_digital        = $request->is_digital;

            if ($request->logo != ''):
                $category->logo        = $this->getImageArrayRecommendedSize($request->logo,[140,130,80],[190,95,60]);
                $category->logo_id     = $request->logo;
            else:
                $category->logo        = [];
                $category->logo_id     = null;
            endif;
            if ($request->banner != ''):
                $category->banner        = $this->getImageWithRecommendedSize($request->banner,835,200,true);
                $category->banner_id     = $request->banner;
            else:
                $category->banner        = [];
                $category->banner_id     = null;
            endif;

            $category->icon              = $request->icon ?? null;
            $category->ordering          = $request->ordering ?? 0;
            $category->save();

            if ($request->cat_lang_id == '') :
                $this->catLang->store($request);
            else:
                $this->catLang->update($request);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function statusChange($request)
    {
        DB::beginTransaction();
        try {
            $category           = $this->get($request['id']);
            $category->status   = $request['status'];
            $category->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    //for api
    public function homePageCategory()
    {
        return Category::with('childCategories')->where('parent_id',null)->where('status',1)->orderBy('ordering')->latest()->take(9)->get();
    }

    public function shopCategory($user_id=null): array
    {
        $all_categories = [];
        $categories = Category::with('childCategories:id,parent_id')->where('status',1)->where('parent_id',null)->selectRaw('id,slug,status,parent_id')->paginate(12);

        foreach ($categories as $category) {
            $category_ids = \App\Utility\CategoryUtility::getMyAllChildIds($category->id);
            $category_ids[] = $category->id;

            $total_products = Product::whereIn('category_id',$category_ids)->when($user_id,function ($query) use($user_id){
                if(authUser()->user_type == 'staff' || authUser()->user_type == 'admin')
                {
                    $query->where('user_id',1);
                }
                else{
                    $query->where('user_id',$user_id);
                }
            })->ProductPublished()->UserCheck()->IsWholesale()->IsStockOut()->count();

            if ($total_products > 0)
            {
                $all_categories[] = [
                    'id' => $category->id,
                    'title' => $category->getTranslation('title',languageCheck()),
                    'total_products' => $total_products,
                    'slug' => $category->slug,
                ];
            }
        }

        return $all_categories;
    }

    public function categoryPage()
    {
        return Category::where('status',1)->select('id','parent_id','logo','slug','banner')->where('parent_id',null)->latest()->get();
    }

    public function categoryProducts($id)
    {
        $category = Category::find($id);
        if ($category)
        {

            $category_ids = \App\Utility\CategoryUtility::getMyAllChildIds($id);
            $category_ids[] = (int)$id;

            $products =  Product::withCount('reviews')->withAvg('reviews','rating')->whereIn('category_id',$category_ids)
                ->selectRaw('id,brand_id,category_id,status,price,special_discount,special_discount_type,special_discount_start,special_discount_end,rating,slug,thumbnail,minimum_order_quantity,has_variant,reward,current_stock')
                ->ProductPublished()->orderBy('total_sale', 'desc')->latest()->take(8)->get();
            $category->products = ProductResource::collection($products);
            $category['title'] = $category->getTranslation('title',languageCheck());

        }

        return $category;
    }

    public function categoryByIds($top_category,$take= null)
    {
        if ($take)
        {
            $categories = Category::whereIn('id',$top_category)->select('id','logo','slug','icon','parent_id')->where('status',1)->get();
        }
        else{
            $categories = Category::whereIn('id',$top_category)->select('id','logo','slug','icon','parent_id')->where('status',1)->get();
        }

        return $categories;
    }

    public function category($slug)
    {
        return Category::with('categories')->where('slug',$slug)->first();
    }

    public function mobileCategory($limit)
    {
        return Category::with('childCategories:id,parent_id,slug')->where('status',1)
            ->select('id','parent_id','icon','logo','slug','banner')->where('parent_id',null)->latest()->paginate($limit);
    }

    //api end
    public function categories($limit)
    {
        return Category::where('status',1)
            ->select('id','parent_id','icon','logo','slug','banner')->latest()->paginate($limit);
    }
}
