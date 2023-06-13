<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\AttributeValues;

class Attribute extends Model
{
    use HasFactory;

    protected $appends = ['title'];

    public function attributeValue(){
        return $this->hasMany(AttributeValues::class);
    }

    public function attributeLanguage()
    {
        return $this->hasMany(AttributeLanguage::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class)->withTimestamps();
    }

    public function getTranslation($field, $lang = 'en')
    {
        $attribute_translation  = $this->hasMany(AttributeLanguage::class)->where('lang', $lang)->first();

        if (blank($attribute_translation)):
            $attribute_translation = $this->hasMany(AttributeLanguage::class)->where('lang', 'en')->first();
        endif;

        return $attribute_translation->$field;
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(AttributeLanguage::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('attribute_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('attribute_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }
}
