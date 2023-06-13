<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
      'name','locale','flag','text_direction','status'
    ];

    protected $appends = ['flag_image'];

    public function languageConfig()
    {
        return $this->hasOne(LanguageConfig::class);
    }

    public function getFlagImageAttribute()
    {
        return get_media($this->flag);
    }
}
