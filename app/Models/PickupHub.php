<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PickupHub extends Model
{
    use HasFactory;

    protected $appends = ['address','name'];

    public function incharge(){
        return $this->belongsTo(User::class,'user_id', 'id');
    }

    public function users(){
        return $this->hasMany(User::class,'user_id', 'id');
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function pickupHubLanuages(){
        return $this->hasMany(PickupHubLanguage::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $pickup_translation  = $this->hasMany(PickupHubLanguage::class)->where('lang', $lang)->first();

        if (blank($pickup_translation)):
            $pickup_translation = $this->hasMany(PickupHubLanguage::class)->where('lang', 'en')->first();
        endif;
        return $pickup_translation->$field;
    }

    public function getTranslateAttribute()
    {
        $slider = $this->pickupHubLanuages()->where('pickup_hub_id',$this->id)->where('lang',app()->getLocale())->first();
        if (!$slider)
            $slider = $this->pickupHubLanuages()->where('pickup_hub_id',$this->id)->where('lang','en')->first();

        return $slider;
    }

    public function getAddressAttribute()
    {
        return $this->translate->address;
    }

    public function getNameAttribute()
    {
        return $this->translate->name;
    }
}
