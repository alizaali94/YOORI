<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoShopping extends Model
{
    use HasFactory;

    protected $casts = [
        'thumbnail' => 'array',
        'product_ids' => 'array',
    ];
    protected $appends = ['title','image_130x93'];

    public function videoShoppingLanguages()
    {
        return $this->hasMany(VideoShoppingLanguage::class);
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(VideoShoppingLanguage::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('video_shopping_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('video_shopping_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function scopeActive($query)
    {
        return $query->where('status',1);
    }

    public function scopeSellerCheck($query)
    {
        return $query->whereHas('user',function ($qu){
            $qu->where('status',1)->where('is_user_banned',0)->where(function ($q){
                $q->where('user_type','admin')->orWhere('user_type','staff');
            });
        })->when(settingHelper('seller_system') == 1, function ($q){
            $q->orWhereHas('user',function ($qu){
                $qu->where('status',1)->where('is_user_banned',0)->where('user_type','seller')->whereHas('sellerProfile',function ($q){
                    $q->where('verified_at','!=',null);
                });
            });
        });
    }

    public function getTranslation($field, $lang = 'en')
    {
        $video_shopping_translation  = $this->hasMany(VideoShoppingLanguage::class)->where('lang', $lang)->first();

        if (blank($video_shopping_translation)):
            $video_shopping_translation = $this->hasMany(VideoShoppingLanguage::class)->where('lang', 'en')->first();
        endif;

        return $video_shopping_translation->$field;
    }
    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }
    public function getImage130x93Attribute()
    {
        return is_file_exists(@$this->thumbnail['image_130x93'], @$this->thumbnail['storage']) ? get_media(@$this->thumbnail['image_130x93'], @$this->thumbnail['storage']) : static_asset('images/default/130x93_no_bg.png');
    }
}
