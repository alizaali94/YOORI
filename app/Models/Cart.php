<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['seller_id','user_id','guest_id','product_id','variant',
                            'quantity','price','discount','tax','shipping_cost','shipping_type',
                            'coupon_applied','coupon_discount','product_referral_code'
                          ];

    protected $appends = ['image_40x40','image_72x72','current_stock','min_quantity'];

    public function product(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function seller(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(SellerProfile::class,'seller_id','user_id');
    }

    public function getImage40x40Attribute()
    {
        $product = $this->product;
        $variant = $product->stock->where('name',$this->variant)->first();

        if ($variant && is_array($variant->image) && array_key_exists('image_40x40',$variant->image) && is_file_exists($variant->image['image_40x40'], $variant->image['storage']))
        {
            $image = get_media(@$variant->image['image_40x40'], @$variant->image['storage']);
        }
        elseif($product && is_array($product->thumbnail) && array_key_exists('image_40x40',$product->thumbnail) && is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage'])){
            $image = get_media(@$product->thumbnail['image_40x40'], @$product->thumbnail['storage']);
        }
        else{
            $image = static_asset('images/default/default-image-40x40.png');
        }

        return $image;
    }

    public function getImage72x72Attribute()
    {
        $product = $this->product;
        $variant = $product->stock->where('name',$this->variant)->first();

        if ($variant && is_array($variant->image) && array_key_exists('image_72x72',$variant->image) && is_file_exists($variant->image['image_72x72'], $variant->image['storage']))
        {
            $image = get_media(@$variant->image['image_72x72'], @$variant->image['storage']);
        }
        elseif($product && is_array($product->thumbnail) && array_key_exists('image_72x72',$product->thumbnail) &&  is_file_exists($product->thumbnail['image_72x72'], $product->thumbnail['storage'])){
            $image = get_media(@$product->thumbnail['image_72x72'], @$product->thumbnail['storage']);
        }
        else{
            $image = static_asset('images/default/default-image-72x72.png');
        }

        return $image;
    }

    public function getCurrentStockAttribute()
    {
        $product = $this->product;
        $variant = $product->stock->where('name',$this->variant)->first();
        return $variant ? $variant->current_stock : 0;
    }

    public function getMinQuantityAttribute()
    {
        return $this->product->minimum_order_quantity;
    }
}
