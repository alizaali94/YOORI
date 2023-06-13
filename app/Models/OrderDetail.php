<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'product_id', 'variation', 'price', 'tax', 'discount','coupon_discount','shipping_cost', 'quantity','is_refundable'];

    protected $casts = [
        'shipping_cost' => 'array',
        'coupon_discount' => 'array',
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function refund()
    {
        return $this->hasOne(Refund::class);
    }

    public function stocks()
    {
        return $this->hasMany(ProductStock::class,'name','variation');
    }
}
