<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $casts = [
        'logo' => 'array',
        'banner' => 'array'
    ];
    protected $attributes = [
        'logo' => '[]',
        'banner' => '[]'
    ];

    protected $fillable = ['parent_id'];


    public function categories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function childCategories()
    {
        return $this->hasMany(Category::class, 'parent_id')->with('childCategories');
    }

    public function categoryLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CategoryLanguage::class);
    }


    public function latestProduct(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Product::class)->where('status','published')->latest();
    }

    public function products(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function attributes()
    {
        return $this->belongsToMany(Attribute::class)->withTimestamps();
    }

    public function getTranslation($field, $lang = 'en')
    {
        $cat_translation = $this->categoryLanguage()->where('lang', $lang)->first();

        if (blank($cat_translation)):
            $cat_translation = $this->categoryLanguage()->where('lang', 'en')->first();
        endif;

        return $cat_translation->$field;
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }

    public function getImageAttribute()
    {
        return getFileLink('140x190',$this->logo);
    }

    public function getPopularImageAttribute()
    {
        return @is_file_exists($this->logo['image_130x95'], @$this->logo['storage']) ? get_media(@$this->logo['image_130x95'], @$this->logo['storage']) : static_asset('images/default/130x95_no_bg.png');
    }

    public function getAllPopularImageAttribute()
    {
        return getFileLink('190x230',$this->logo);
    }

    public function getTopImageAttribute()
    {
        return @is_file_exists($this->logo['image_80x60'], @$this->logo['storage']) ? get_media(@$this->logo['image_80x60'], @$this->logo['storage']) : static_asset('images/default/80x60_no_bg.png');
    }
    public function getPopularBannerAttribute()
    {
        return @is_file_exists($this->banner['image_835x200'], @$this->banner['storage']) ? get_media(@$this->banner['image_835x200'], @$this->banner['storage']) : static_asset('images/default/130x95_no_bg.png');
    }

    public function scopeLanguage($query,$lang)
    {
        if(!$lang)
        {
            $lang = 'en';
        }

        return $query->whereHas('categoryLanguage',function($q) use($lang){
            $q->where('lang',$lang);
        });
    }

}
