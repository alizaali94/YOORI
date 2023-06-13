<?php

namespace App\Repositories\Interfaces\Admin\Product;

interface AttributeInterface
{
    public function all();

    public function get($id);

    public function store($request);

    public function paginate($limit);

    public function update($request);

    public function AttributeValuesStore($request);

    public function AttributeValuesEdit($id);

    public function AttributeValuesUpdate($request);

    public function getAttributeValues($id,$limit);

    public function allAttributeValues();

    public function allAttributeValuesPaginate($limit);

    public function shopAttribute($category);

    public function attributeByIds($ids);

    public function attributes($ids,$variant_ids);

    public function attributeValueByIds($ids);

    public function attributeValue($id);

    public function findStock($id,$product_id);

}
