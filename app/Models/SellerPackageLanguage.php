<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerPackageLanguage extends Model
{
    use HasFactory;

    protected $fillable = ['title','seller_package_id','en'];

    public function package(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(SellerPackage::class,'seller_package_id');
    }
}
