<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Permission;


class AddUpdate133 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('api_keys', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('key');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        $user = \App\Models\User::find(1);

        $permissions = $user->permissions;

        if (!in_array('api_key_create',$permissions))
        {
            $permissions[] = "api_key_create";
            $permissions[] = "api_key_update";
            $permissions[] = "api_key_delete";
            $permissions[] = "api_key_read";
            $permissions[] = "api_key_read_all";

            $user->permissions = $permissions;
            $user->save();
        }

        $permission = Permission::where('attribute','api_key')->first();

        if (!$permission)
        {
            $value = [
                'create'    => 'api_key_create',
                'read'      => 'api_key_read',
                'update'    => 'api_key_update',
                'delete'    => 'api_key_delete',
                'read_all'  => 'api_key_read_all',
            ];

            Permission::create([
                'attribute' => "api_key",
                'keywords' => $value,
            ]);

        }

        Schema::create('api_key_languages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_key_id');
            $table->string('lang')->default('en');
            $table->string('title');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
