<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCommentReply extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','blog_comment_id','parent_id','comment','images','level'];

    protected $appends = ['reply_date'];

    public function replies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogCommentReply::class, 'parent_id')->with('replies','user:id,images,first_name,last_name','commentLikes')
            ->where('level','!=',0)->where('parent_id','!=',null)->latest();
    }

    public function commentReplies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BlogCommentReply::class, 'parent_id')->with('replies','user:id,images,first_name,last_name','commentLikes')
            ->where('level','!=',0)->where('parent_id','!=',null)->latest();
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function commentLikes(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(BlogCommentLike::class,'commentable');
    }

    public function getReplyDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }
}
