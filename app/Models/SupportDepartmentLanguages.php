<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportDepartmentLanguages extends Model
{
    use HasFactory;
    public function supportDepartment(){
        return $this->belongsTo(SupportDepartment::class);
    }
}
