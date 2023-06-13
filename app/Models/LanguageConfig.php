<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageConfig extends Model
{
    use HasFactory;

    protected $fillable = [
        'language_id','name','script','native','regional'
    ];

    public static function  __set_state($id=null){

    }
}
