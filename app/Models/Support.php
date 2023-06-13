<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'file' => 'array',
    ];

    protected $attributes = [
        'file' => '[]',
    ];


    public function supportDepartment(){

       return $this->belongsTo(SupportDepartment::class);

    }

}
