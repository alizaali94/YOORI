<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerProfile extends Model
{
    use HasFactory;

    protected $table = 'sellers';

    protected $appends = [];

    protected $fillable = [
        'shop_name', 'user_id', 'slug', 'phone_no', 'address', 'license_no', 'logo', 'shop_banner', 'tax_paper',
        'shop_page_contents', 'meta_title', 'meta_description', 'verified_at'
    ];

    protected $casts = [
        'logo' => 'array',
        'banner' => 'array',
        'shop_banner' => 'array',
        'tax_paper' => 'array',
        'shop_page_contents' => 'array',
        'mobile_shop_page_contents' => 'array',
    ];

    protected $attributes = [
        'logo' => '[]',
        'banner' => '[]',
        'shop_banner' => '[]',
        'tax_paper' => '[]',
        'shop_page_contents' => '[]',
        'mobile_shop_page_contents' => '[]',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getImage197x152Attribute()
    {
        return getFileLink('197x152', $this->logo);
    }

    public function getImage105x75Attribute()
    {
        return @is_file_exists(@$this->logo['image_105x75'], @$this->logo['storage']) ? get_media(@$this->logo['image_105x75'], @$this->logo['storage']) : static_asset('images/default/105x75_no_bg.png');
    }

    public function getImage899x480Attribute()
    {
        return @is_file_exists(@$this->shop_banner['image_899x480'], @$this->shop_banner['storage']) ? get_media(@$this->shop_banner['image_899x480'], @$this->shop_banner['storage']) : static_asset('images/default/default-image-899x480.png');
    }

    public function getImage90x60Attribute()
    {
        return getFileLink('72x72', $this->logo);
    }

    public function getImage82x82Attribute()
    {
        return getFileLink('82x82', $this->logo);
    }

    public function getImage120x80Attribute()
    {
        return getFileLink('120x80', $this->logo);
    }

    public function getImage297x203Attribute()
    {
        return getFileLink('297x203', $this->banner);
    }

    public function getImage617x145Attribute()
    {
        return getFileLink('617x145', $this->banner);
    }

    public function getImage1920x412Attribute()
    {
        return getFileLink('1920x412', $this->banner);
    }

    public function products(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Product::class, 'user_id', 'user_id');
    }

    public function sellerProducts(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Product::class, 'user_id', 'user_id')->with('productLanguages')->ProductPublished()->take(3);
    }

    public function getStartDateAttribute(): string
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function followedUsers()
    {
        return $this->hasMany(SellerProfileUser::class, 'seller_profile_id', 'id');
    }

    public function scopeAvailable($query)
    {
        return $query->where('verified_at', '!=', null)->whereHas('user', function ($q) {
            $q->where('status', 1)->where('is_user_banned', 0);
        });
    }
}
