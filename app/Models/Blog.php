<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $casts = [
        'image' => 'array',
        'banner' => 'array',
    ];

    protected $appends = ['title','description','thumbnail','banner_img','description','tags','published_date','recent_post_image'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(BlogCategory::class);
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogLanguage::class)->where('lang',languageCheck());
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->blogLanguages->where('lang',$lang)->first();
        if (!$row)
            $row = $this->blogLanguages->where('lang','en')->first();

        return $row;
    }

    public function blogLanguages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogLanguage::class);
    }

    public function blogViews(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogView::class);
    }

    public function blogComments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogComment::class);
    }

    public function getTranslation($field)
    {
        $lang = languageCheck();
        $category_translation  = $this->hasMany(BlogLanguage::class)->where('lang', $lang)->first();

        if (blank($category_translation)):
            $category_translation = $this->hasMany(BlogLanguage::class)->where('lang', 'en')->first();
        endif;

        return $category_translation->$field;
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }

    public function getShortDescriptionAttribute()
    {
        return @$this->translate->short_description;
    }
    public function getDescriptionAttribute()
    {
        return @$this->translate->long_description;
    }
    public function getTagsAttribute()
    {
        return @$this->translate->tags;
    }

    public function getThumbnailAttribute()
    {
        return @is_file_exists($this->image['image_260x175'] , $this->image['storage']) ? @get_media($this->image['image_260x175'],$this->image['storage']) : static_asset('images/default/260x175.png');
    }

    public function getRecentPostImageAttribute()
    {
        return @is_file_exists($this->image['image_72x72'] , $this->image['storage']) ? @get_media($this->image['image_72x72'],$this->image['storage']) : static_asset('images/default/default-image-72x72.png');
    }

    public function getBannerImgAttribute()
    {
        return @is_file_exists($this->banner['image_900x300'] , $this->banner['storage']) ? @get_media($this->banner['image_900x300'],$this->banner['storage']) : static_asset('images/default/default-image-835x200.png');
    }

    public function getPublishedDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }
}
