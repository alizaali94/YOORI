<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryHero extends Model
{
    use HasFactory;

    protected $casts = [
        'driving_licence_image'     => 'array',
    ];

    protected $attributes = [
        'driving_licence_image'     => '[]',
    ];
    public function pickupHub(){
        return $this->belongsTo(PickupHub::class,'pickup_hub_id','id');
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function country(){
        return $this->belongsTo(Country::class);
    }
    public function state(){
        return $this->belongsTo(State::class);
    }
    public function city(){
        return $this->belongsTo(City::class);
    }
    public function orders(){
        return $this->hasMany(Order::class);
    }
    public function heroAccount(){
        return $this->hasMany(DeliveryHeroAccount::class);
    }
}
