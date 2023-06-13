<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompareProduct extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','product_id'];

    public function product(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function cart()
    {
        return $this->hasOne(Cart::class,'product_id','product_id');
    }
}
