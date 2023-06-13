<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoShoppingLanguage extends Model
{
    use HasFactory;

    public function videoShopping()
    {
        return $this->belongsTo(VideoShopping::class);
    }
}
