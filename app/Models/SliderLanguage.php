<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SliderLanguage extends Model
{
    use HasFactory;

    protected $fillable = ['slider_id','lang','title','sub_title','heading','btn_text'];
}
