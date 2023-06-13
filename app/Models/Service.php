<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['position'];

    protected $casts = [
        'image'            => 'array',
    ];

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ServiceLanguage::class)->where('lang',languageCheck());
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('lang','en')->first();

        return $row;
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }

    public function getSubTitleAttribute()
    {
        return @$this->translate->sub_title;
    }

    public function serviceLanguages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ServiceLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $product_translation  = $this->serviceLanguages()->where('lang', $lang)->first();

        if (blank($product_translation)):
            $product_translation = $this->serviceLanguages()->where('lang', 'en')->first();
        endif;

        return $product_translation->$field;
    }

    public function getServiceImageAttribute()
    {
        return getFileLink('40x40',@$this->image['images']);
    }
}
