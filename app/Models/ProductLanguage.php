<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductLanguage extends Model
{
    use HasFactory;

    protected $casts = [
        'pdf_specification' => 'array',
    ];

    protected $attributes = [
        'pdf_specification' => '[]',
    ];

    protected $fillable = ['product_id','name', 'short_description', 'description', 'tags','meta_title','meta_description'];

    protected $appends = ['specification'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function productVatTax()
    {
        return $this->hasMany(ProductVatTax::class, 'product_id', 'product_id');
    }

    public function productCampaign()
    {
        return $this->hasOne(CampaignProduct::class, 'product_id', 'product_id');
    }

    public function getSpecificationAttribute()
    {
        return get_media(@$this->pdf_specification['file'],@$this->pdf_specification['storage']);
    }
}
