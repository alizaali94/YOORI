<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportDepartment extends Model
{
    use HasFactory;

    public function supportDepartmentLanguages(){
        return $this->hasMany(SupportDepartmentLanguages::class);
    }

    public function getTranslation($field, $lang = 'en')
    {
        $department_translation  = $this->hasMany(SupportDepartmentLanguages::class)->where('lang', $lang)->first();

        if (blank($department_translation)):
            $department_translation = $this->hasMany(SupportDepartmentLanguages::class)->where('lang', 'en')->first();
        endif;
        return $department_translation->$field;
    }
}
