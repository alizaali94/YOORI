<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $appends = ['name'];

    public function colorLanguages()
    {
        return $this->hasMany(ColorLanguage::class);
    }
    public function getTranslation($field, $lang = 'en')
    {
        $color_translation  = $this->hasMany(ColorLanguage::class)->where('lang', $lang)->first();

        if (blank($color_translation)):
            $color_translation = $this->hasMany(ColorLanguage::class)->where('lang', 'en')->first();
        endif;

        return $color_translation->$field;
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ColorLanguage::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();

        $row = $this->currentLanguage->where('color_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('color_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function getNameAttribute()
    {
        return @$this->translate->name;
    }
}
