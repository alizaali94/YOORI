<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $casts = [
        'product_id' => 'array',
        'banner' => 'array',
    ];
    protected $appends = [
        'image_145x110',
        'title'
    ];

    public function languages()
    {
        return $this->hasMany(CouponLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $product_translation  = $this->hasMany(CouponLanguage::class)->where('lang', $lang)->first();

        if (blank($product_translation)):
            $product_translation = $this->hasMany(CouponLanguage::class)->where('lang', 'en')->first();
        endif;

        return $product_translation->$field;
    }
    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CouponLanguage::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('coupon_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('coupon_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function getImage145x110Attribute()
    {
        return @is_file_exists($this->banner['image_145x110'] , $this->banner['storage']) ? @get_media($this->banner['image_145x110'],$this->banner['storage']) : static_asset('images/default/default-image-105x75.png');
    }
    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
