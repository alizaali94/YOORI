<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdates123 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('contact_us', function (Blueprint $table) {
            $table->unsignedBigInteger('seller_id')->nullable()->after('id');
        });

        $permission = ['video_shopping_read', 'video_shopping_create', 'video_shopping_update', 'video_shopping_delete'];

        $superAdmin = User::find(1);
        $old_permissions = $superAdmin->permissions;
        $superAdmin->permissions = array_merge($old_permissions, $permission);
        $superAdmin->save();

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
