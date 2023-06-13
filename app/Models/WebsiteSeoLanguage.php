<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebsiteSeoLanguage extends Model
{
    use HasFactory;
    public function websiteSeo()
    {
        return $this->belongsTo(WebsiteSeo::class);
    }
}
