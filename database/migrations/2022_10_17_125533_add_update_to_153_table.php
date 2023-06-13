<?php

use App\Models\Permission;
use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdateTo153Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('currency_id')->after('firebase_auth_id')->default('1')->nullable();
            $table->string('lang_code')->after('currency_id')->default('en')->nullable();
        });

        Schema::table('refunds', function (Blueprint $table) {
            $table->string('payment_type')->after('refund_amount')->nullable();
            $table->text('payment_details')->after('payment_type')->nullable();
            $table->double('exchange_rate')->after('payment_details')->default(1)->nullable();
        });
    }

    public function down()
    {
        Schema::table('153', function (Blueprint $table) {
            //
        });
    }
}
