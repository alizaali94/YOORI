<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PickupHubLanguage extends Model
{
    use HasFactory;
    public function pickupHub(){
        return $this->belongsTo(PickupHub::class);
    }
}
