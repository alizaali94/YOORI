<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponLanguage extends Model
{
    use HasFactory;

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }
}
