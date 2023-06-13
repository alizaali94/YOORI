<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;

    protected $appends = ['title','image_1920x412','image_406x235','image_374x374','short_description','campaign_start_date','campaign_end_date',];
    protected $casts = [
        'banner' => 'array',
        'thumbnail' => 'array'
    ];

    protected $attributes = [
        'banner' => '[]',
        'thumbnail' => '[]'
    ];


    protected $fillable = ['title','image','image_1920x412'];

    public function campaignProducts()
    {
        return $this->hasMany(CampaignProduct::class);
    }

    public function currentLanguage(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CampaignLanguage::class)->where('lang',languageCheck());
    }

    public function getTranslateAttribute()
    {
        $lang = languageCheck();
        $row = $this->currentLanguage->where('lang',$lang)->first();
        if (!$row)
            $row = $this->currentLanguage->where('lang','en')->first();

        return $row;
    }

    public function getTranslation($field, $lang = 'en')
    {
        $campaign_translation = $this->hasMany(CampaignLanguage::class)->where('lang', $lang)->first();

        if (blank($campaign_translation)):
            $campaign_translation = $this->hasMany(CampaignLanguage::class)->where('lang', 'en')->first();
        endif;

        return $campaign_translation->$field;
    }

    public function campaignLanguages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CampaignLanguage::class);
    }

    public function getTitleAttribute()
    {
        return @$this->translate->title;
    }
    public function getShortDescriptionAttribute()
    {
        return @$this->translate->description;
    }

    public function getImage374x374Attribute()
    {
        return @is_file_exists($this->thumbnail['image_374x374'] , $this->thumbnail['storage']) ? @get_media($this->thumbnail['image_374x374'],$this->thumbnail['storage']) : static_asset('images/default/374x374.png');
    }
    public function getImage406x235Attribute()
    {
        return @is_file_exists($this->thumbnail['image_406x235'] , $this->thumbnail['storage']) ? @get_media($this->thumbnail['image_406x235'],$this->thumbnail['storage']) : static_asset('images/default/default-image-400x235.png');
    }
    public function getImage1920x412Attribute()
    {
        return getFileLink('1920x412', @$this->banner);
    }
    public function getCampaignStartDateAttribute(): string
    {
        return $this->start_date ? Carbon::parse($this->start_date)->format('d M Y') : '';
    }
    public function getCampaignEndDateAttribute(): string
    {
        return $this->end_date && $this->end_date >= now() ? Carbon::parse($this->end_date)->format('d M Y') : '';
    }


}
