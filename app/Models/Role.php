<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cartalyst\Sentinel\Roles\EloquentRole;

class Role extends EloquentRole
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'permissions'];

    public function withUsers() {
        return $this -> belongsToMany( static::$usersModel , 'role_users' , 'role_id' , 'user_id' ) -> withTimestamps() ;
    }

    public static function allRole(){
        return Static::all();
    }

    public function scopeWithoutSuperadmin($query)
    {
        return $query->where('id', '!=', 1);
    }

    
}

