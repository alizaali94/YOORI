<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $appends = ['title'];

    public function categoryLanguages()
    {
        return $this->hasMany(BlogCategoryLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $category_translation  = $this->hasMany(BlogCategoryLanguage::class)->where('lang', $lang)->first();

        if (blank($category_translation)):
            $category_translation = $this->hasMany(BlogCategoryLanguage::class)->where('lang', 'en')->first();
        endif;

        return $category_translation->$field;
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogCategoryLanguage::class)->where('lang','en');
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = '';
        if($this->isTranslationsLoaded())
        {
            $row = $this->currentLanguage()->where('blog_category_id',$this->id)->where('lang',$lang)->first();
            if (!$row)
                $row = $this->currentLanguage()->where('blog_category_id',$this->id)->where('lang','en')->first();
        }

        return $row;
    }

    public function isTranslationsLoaded(): bool
    {
        return array_key_exists('currentLanguage', $this->relations);
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }
}
