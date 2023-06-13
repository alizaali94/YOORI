<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','title','rating','comment','images','product_id'];

    protected $appends = ['review_date','image_link'];

    protected $casts = ['images' => 'array'];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function product(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function replies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ReviewReply::class);
    }

    public function reviewLikes(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(ReviewLike::class,'reviewable');
    }

    public function getReviewDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }

    public function getImageLinkAttribute()
    {
        return @get_media($this->images['original_image'],$this->images['storage']);
    }
}
