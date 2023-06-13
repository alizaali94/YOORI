<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = ['order','image','bg_image','image_id','bg_image_id','for_mobile','link','action_type'];

    protected $appends = ['slider_bg_image'];

    protected $casts = ['image' => 'array','bg_image' => 'array'];


    public function bgImage(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Media::class,'bg_image_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class,'link');
    }
    public function brand()
    {
        return $this->belongsTo(Brand::class,'link');
    }
    public function blog()
    {
        return $this->belongsTo(Blog::class,'link');
    }

    public function getSliderBgImageAttribute()
    {
        return isDemoServer() ? getFileLink('1940x800',$this->bg_image) : getFileLink('970x400',$this->bg_image);
    }
}
