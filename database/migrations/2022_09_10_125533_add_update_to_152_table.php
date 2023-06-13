<?php

use App\Models\Permission;
use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdateTo152Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $user = \App\Models\User::find(1);

        $permissions = $user->permissions;

        if (!in_array(['addon_read'],$permissions) && !in_array(['addon_update'],$permissions))
        {
            $permissions[] = "addon_read";
            $permissions[] = "addon_update";
            $user->permissions = $permissions;
            $user->save();
        }

        $permission = Permission::where('attribute','addon_read')->first();

        if (!$permission)
        {
            $value = [
                'read'      => 'addon_read',
                'update'    => 'addon_update',
            ];

            Permission::create([
                'attribute' => "addon",
                'keywords' => $value,
            ]);

        }
    }

    public function down()
    {
        Schema::table('152', function (Blueprint $table) {
            //
        });
    }
}
