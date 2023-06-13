<?php

namespace App\Models;

use App\Models\AppIntroLanguage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AppIntro extends Model
{
    use HasFactory;

    protected $fillable = [

    ];

    protected $casts = [
      'image' => 'array',
    ];

    public function appIntroLanguage()
    {
        return $this->hasMany(AppIntroLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $app_intro_translation  = $this->hasMany(AppIntroLanguage::class)->where('lang', $lang)->first();

        if (blank($app_intro_translation)):
            $app_intro_translation = $this->hasMany(AppIntroLanguage::class)->where('lang', 'en')->first();
        endif;

        return $app_intro_translation->$field;
    }
}
