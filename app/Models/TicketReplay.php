<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketReplay extends Model
{
    use HasFactory;
    protected $casts = [
        'file' => 'array',
    ];

    protected $attributes = [
        'file' => '[]',
    ];

}
