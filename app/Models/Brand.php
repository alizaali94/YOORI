<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'meta_title',
    ];

    protected $casts = [
      'logo' => 'array',
      'banner' => 'array',
    ];

    protected $appends = ['title','image_130x93','image_835x200','head_title','head_description'];

    public function brandLanguages()
    {
        return $this->hasMany(BrandLanguage::class);
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BrandLanguage::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('brand_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('brand_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function scopeActive($query)
    {
        return $query->where('status',1);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $brand_translation  = $this->hasMany(BrandLanguage::class)->where('lang', $lang)->first();

        if (blank($brand_translation)):
            $brand_translation = $this->hasMany(BrandLanguage::class)->where('lang', 'en')->first();
        endif;

        return $brand_translation->$field;
    }

    public function products(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }
    public function getHeadTitleAttribute()
    {
        return @$this->translate->meta_title;
    }
    public function getHeadDescriptionAttribute()
    {
        return @$this->translate->meta_description;
    }

    public function getImage130x93Attribute()
    {
        return is_file_exists(@$this->logo['image_130x93'], @$this->logo['storage']) ? get_media(@$this->logo['image_130x93'], @$this->logo['storage']) : static_asset('images/default/130x93_no_bg.png');
    }
    public function getImage835x200Attribute()
    {
        return is_file_exists(@$this->banner['image_835x200'], @$this->banner['storage']) ? get_media(@$this->banner['image_835x200'], @$this->banner['storage']) : static_asset('images/default/default-image-835x200.png');
    }
}
