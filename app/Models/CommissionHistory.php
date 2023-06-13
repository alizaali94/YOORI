<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommissionHistory extends Model
{
    use HasFactory;

    public function sellerProfile(){
        return $this->belongsTo(SellerProfile::class,'seller_id');
    }
    public function order(){
        return $this->belongsTo(Order::class);
    }
    public function orderDetails(){
        return $this->belongsTo(OrderDetail::class);
    }
}
