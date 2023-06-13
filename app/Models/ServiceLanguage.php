<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceLanguage extends Model
{
    use HasFactory;

    protected $fillable = ['service_id','lang','title','sub_title'];
}
