<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfflineMethod extends Model
{
    use HasFactory;

    protected $casts = [
        'thumbnail' => 'array',
        'bank_details' => 'array',
    ];


    public function languages()
    {
        return $this->hasMany(OfflineMethodLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $product_translation  = $this->hasMany(OfflineMethodLanguage::class)->where('lang', $lang)->first();

        if (blank($product_translation)):
            $product_translation = $this->hasMany(OfflineMethodLanguage::class)->where('lang', 'en')->first();
        endif;

        return $product_translation->$field;
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(OfflineMethodLanguage::class);
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('offline_method_id',$this->id)->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('offline_method_id',$this->id)->where('lang','en')->first();

        return $row;
    }

    public function getNameAttribute()
    {
        return @$this->translate->name;
    }

    public function getInstructionsAttribute()
    {
        return @$this->translate->instructions;
    }

    public function getImageAttribute()
    {
        return getFileLink('20x20',$this->thumbnail,'offline');
    }
}
