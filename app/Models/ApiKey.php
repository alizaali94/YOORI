<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApiKey extends Model
{
    use HasFactory;

    protected $fillable = ['key','user_id'];

    public function apiKeyLanguages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ApiKeyLanguage::class,'api_key_id');
    }

    public function getTranslation($field, $lang = 'en')
    {
        $api_translation  = $this->apiKeyLanguages()->where('lang', $lang)->first();

        if (blank($api_translation)):
            $api_translation = $this->apiKeyLanguages()->where('lang', 'en')->first();
        endif;

        return $api_translation->$field;
    }
}
