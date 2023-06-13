<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $appends = ['date','time'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getDateAttribute(): string
    {
        return $this->created_at ? Carbon::parse($this->created_at)->toFormattedDateString() : '';
    }
    public function getTimeAttribute(): string
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format('h:i:s A') : '';
    }
}
