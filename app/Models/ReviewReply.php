<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewReply extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','review_id','reply','images','parent_id','level'];

    protected $appends = ['reply_date'];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function review(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Review::class);
    }

   /* public function reviewReply(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ReviewReply::class, 'parent_id')->withCount('reviewLikes');
    }*/

    public function reviewLikes(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(ReviewLike::class,'reviewable');
    }

    public function getReplyDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }
}
