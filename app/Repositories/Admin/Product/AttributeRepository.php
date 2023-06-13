<?php

namespace App\Repositories\Admin\Product;

use App\Models\Attribute;
use App\Models\AttributeLanguage;
use App\Models\AttributeValues;
use App\Models\ProductStock;
use App\Repositories\Interfaces\Admin\Product\AttributeLanguageInterface;
use Illuminate\Support\Facades\DB;
use App\Repositories\Interfaces\Admin\Product\AttributeInterface;

class AttributeRepository implements AttributeInterface
{
    protected $attributeLanguage;

    public function __construct(AttributeLanguageInterface $attributeLanguage)
    {
        $this->attributeLanguage = $attributeLanguage;
    }

    public function get($id)
    {
        return Attribute::find($id);
    }

    public function all()
    {
        return Attribute::leftJoin('attribute_languages', 'attribute_languages.attribute_id', '=', 'attributes.id')
            ->select('attributes.*', 'attribute_languages.id as attribute_lang_id', 'attribute_languages.title', 'attribute_languages.lang');

    }
    public function getByLang($id, $lang)
    {
        if($lang == null):
            $attributeByLang = AttributeLanguage::with('attribute')->where('lang', 'en')->where('attribute_id', $id)->first();
        else:
            $attributeByLang = AttributeLanguage::with('attribute')->where('lang', $lang)->where('attribute_id', $id)->first();
            if (blank($attributeByLang)):
                $attributeByLang = AttributeLanguage::with('attribute')->where('lang', 'en')->where('attribute_id', $id)->first();
                $attributeByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $attributeByLang;
    }
    public function paginate($limit)
    {
        return $this->all()->latest()->where('lang', 'en')->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $attribute              = new Attribute();
            $attribute->save();

            $attribute->categories()->sync($request->category);

            $request['attribute_id'] = $attribute->id;
            if ($request->lang == ''):
                $request['lang']    = 'en';
            endif;
            $this->attributeLanguage->store($request);

            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $attribute = $this->get($request->attribute_id);
            $attribute->categories()->sync($request->category);

            $attribute->save();
            if ($request->attribute_lang_id == '') :
                $this->attributeLanguage->store($request);
            else:
                $this->attributeLanguage->update($request);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function AttributeValuesStore($request)
    {
        DB::beginTransaction();
        try {
            $attributeValue = new AttributeValues();
            $attributeValue->attribute_id = $request->id;
            $attributeValue->value = $request->value;
            $attributeValue->save();
            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function allAttributeValues(){
        DB::beginTransaction();
        try {
            $values = AttributeValues::latest();
            return $values;

            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }
    public function allAttributeValuesPaginate($limit){
        DB::beginTransaction();
        try {
            return $this->allAttributeValues()->paginate($limit);

            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function getAttributeValues($id, $limit)
    {
        $data = Attribute::find($id)->attributeValue()->paginate($limit);
        return $data;
    }

    public function AttributeValuesEdit($id)
    {

        return AttributeValues::find($id);
    }

    public function AttributeValuesUpdate($request)
    {
        DB::beginTransaction();
        try {
            $attributeValue = AttributeValues::find($request->id);
            $attributeValue->value = $request->value;
            $attributeValue->save();
            DB::commit();
            return $attributeValue;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function shopAttribute($category)
    {
        return Attribute::with('attributeValue','currentLanguage')->when(!empty($category),function ($query) use($category){
            $query->whereHas('categories',function ($q) use($category){
                $q->where('slug',$category);
            });
        })->get();
    }

    public function attributeValue($id)
    {
        return AttributeValues::where('attribute_id',$id)->paginate(8);
    }

    public function attributeByIds($ids)
    {
        return Attribute::with('currentLanguage')->whereIn('id',$ids)->get()->makeHidden(['currentLanguage','created_at','updated_at']);
    }

    public function attributeValueByIds($ids)
    {
        return AttributeValues::whereIn('id',$ids)->get()->makeHidden(['created_at','updated_at']);
    }

    public function findStock($id,$product_id)
    {
        return ProductStock::where('variant_ids',$id)->where('product_id',$product_id)->first();
    }

    public function attributes($ids,$variant_ids)
    {
        return Attribute::with('currentLanguage')->with(['attributeValue' => function($query) use($variant_ids){
            $query->whereIn('id',$variant_ids);
        }])->whereIn('id',$ids)->get()->makeHidden(['currentLanguage','created_at','updated_at']);
    }
}
