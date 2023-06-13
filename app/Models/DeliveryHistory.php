<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'event',
        'user_id',
        'delivery_hero_id',
        'order_id',
        'remarks'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function deliveryHero()
    {
        return $this->belongsTo(DeliveryHero::class);
    }
}
