<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','amount','source','type','payment_method','payment_details','status'];

    protected $appends = ['recharge_date'];

    protected $casts = [
        'payment_details'   => 'array',
        'image'   => 'array',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getRechargeDateAttribute(): string
    {
        return Carbon::parse($this->created_at)->format('d M Y H:i:s');
    }
}
