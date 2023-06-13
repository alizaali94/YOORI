<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThemeOptions extends Model
{
    use HasFactory;
    protected $fillable = [];

    protected $casts = [
    	"options" => "array"
    ];
}
