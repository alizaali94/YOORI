<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorLanguage extends Model
{
    use HasFactory;

    public function color()
    {
        return $this->belongsTo(Color::class);
    }
}
