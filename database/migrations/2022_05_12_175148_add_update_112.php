<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdate112 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('delivery_hero_accounts', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->after('id')->nullable()->comment('processed by user');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean('is_draft')->default(0)->after('created_by');
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
