<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','rewards'];

    protected $appends = ['last_conversion','reward_sum'];

    public function user(){
       return $this->belongsTo(User::class);
    }

    public function getLastConversionAttribute()
    {
        return Carbon::parse($this->last_converted)->format('d M Y H:i:s');
    }

    public function rewardDetails()
    {
        return $this->hasMany(RewardDetails::class);
    }

    public function getRewardSumAttribute()
    {
        return $this->rewardDetails()->sum('reward');
    }
}
