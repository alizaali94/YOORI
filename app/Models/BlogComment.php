<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','blog_id','name','email','comment','images'];

    protected $appends = ['comment_date'];

    public function blog(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Blog::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function commentReplies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogCommentReply::class,'blog_comment_id')->with('user:id,images,first_name,last_name','commentLikes')
            ->where('level',0)->where('parent_id',null)->latest();
    }

    public function commentLikes(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(BlogCommentLike::class,'commentable');
    }

    public function getCommentDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }
}
