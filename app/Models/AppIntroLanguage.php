<?php

namespace App\Models;

use App\Models\AppIntro;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AppIntroLanguage extends Model
{
    use HasFactory;

    public function appIntro()
    {
        return $this->belongsTo(AppIntro::class);
    }
}
