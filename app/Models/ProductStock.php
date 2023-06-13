<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStock extends Model
{
    use HasFactory;

    protected $casts = [
      'image' => 'array'
    ];
    protected $attributes = [
      'image' => '[]'
    ];
    protected $fillable = [
        'product_id','name','sku','price','current_stock','image',
    ];

    protected $appends = [
        'stock_image',
        'discount_percentage',
        'image_190x230'
    ];

    public function wholeSalePrice(){
        return $this->hasMany(WholesalePrice::class);
    }

    public function product(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function getDiscountPercentageAttribute()
    {
        $percentage = 0;
        $special_discount = @$this->product->special_discount;
        $now = Carbon::now()->format('Y-m-d H:i:s');

        if ($special_discount > 0 && @$this->product->special_discount_start <= $now && @$this->product->special_discount_end >= $now)
        {
            $type = $this->product->special_discount_type;

            if ($type == 'flat')
            {
                $percentage = $this->price - $special_discount;
            }
            else{
                $percentage = $this->price - ($this->price*($special_discount/100));
            }
        }
        return $percentage;
    }

    public function getStockImageAttribute()
    {
        return getFileLink('160x160',$this->image);
    }
    public function getImage190x230Attribute()
    {
        return @is_file_exists($this->image['image_190x230'] , $this->image['storage']) ? @get_media($this->image['image_190x230'],$this->image['storage']) : static_asset('images/default/190x230_no_bg.png');
    }

}
