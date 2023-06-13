<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryHeroAccount extends Model
{
    use HasFactory;

    public function deliveryHero(){
        return $this->belongsTo(DeliveryHero::class);
    }
    public function order(){
        return $this->belongsTo(order::class);
    }
}
