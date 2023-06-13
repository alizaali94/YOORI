<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $casts = [
        'billing_address' => 'array',
        'shipping_address' => 'array',
        'offline_method_file' => 'array',
        'payment_details' => 'array',
        'tax_method' => 'array',
    ];
    protected $appends = ['delivered_days'];

    protected $attributes = [
        'shipping_address' => '[]',
        'billing_address' => '[]',
        'payment_details' => '[]',
    ];

    protected $fillable = ['seller_id', 'user_id', 'billing_address', 'shipping_address','payment_type','sub_total','discount', 'coupon_discount','total_tax','total_amount','delivery_status',
        'shipping_cost','billing_address','total_payable','status','code','is_draft','trx_id','payment_status','date','pickup_hub_id','is_refundable','created_by','payment_details','offline_method_id','offline_method_file','trx_id',
        'shipping_method','is_coupon_system_active','tax_method'];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function seller(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function orderDetails(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function deliveryHero(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(DeliveryHero::class);
    }

    public function getOrderDateAttribute(): string
    {
        return Carbon::parse($this->updated_at)->format('d M Y');
    }

    public function deliveryHistories()
    {
        return $this->hasMany(DeliveryHistory::class)->latest();
    }
    public function paymentHistories()
    {
        return $this->hasMany(PaymentHistory::class)->latest();
    }

    public function pickupHub()
    {
        return $this->belongsTo(PickupHub::class);
    }

    public function refunds()
    {
        return $this->hasMany(Refund::class);
    }

    public function processedRefunds()
    {
        return $this->hasMany(Refund::class)->where('status', 'processed');
    }

    public function totalRefunded()
    {
        return $this->hasMany(Refund::class)->where('status','processed');
    }

    public function deliveredAt()
    {
        return $this->hasOne(DeliveryHistory::class)->where('event','order_delivered_event')->latest();
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getDeliveredDaysAttribute()
    {
        $delivered = $this->deliveredAt;

        if ($delivered):
            return Carbon::parse($delivered->created_at)->diffInDays();
        else:
            return null;
        endif;
    }
}
