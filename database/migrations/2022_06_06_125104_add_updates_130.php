<?php

use App\Models\Currency;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdates130 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reviews', function (Blueprint $table) {
            $table->boolean('status')->default(0)->after('product_id')->index();
        });
        Schema::table('sellers', function (Blueprint $table) {
            $table->text('mobile_shop_page_contents')->nullable()->after('shop_page_contents');
        });
        Schema::table('pages', function (Blueprint $table) {
            $table->string('email')->nullable()->after('content');
            $table->string('optional_email')->nullable()->after('email');
            $table->string('phone')->nullable()->after('optional_email');
            $table->string('optional_phone')->nullable()->after('phone');
        });

        if (Schema::hasColumns('sliders',['btn_link','image_align','text_align','image','image_id']))
        {
            Schema::table('sliders', function (Blueprint $table) {
                $table->dropColumn(['btn_link','image_align','text_align','image','image_id']);
            });
        }
        Schema::dropIfExists('slider_languages');
//
        Schema::table('categories', function (Blueprint $table) {
            $table->tinyInteger('is_featured')->default(0)->after('commission')->index();
            $table->integer('ordering')->default(0)->after('position')->index();
        });
        Schema::create('attribute_category', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('attribute_id');
            $table->timestamps();
        });

        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->integer('order')->default(1);
            $table->string('link')->default('/');
            $table->string('status')->default(true);
            $table->unsignedBigInteger('image_id')->nullable();
            $table->text('image')->nullable();
            $table->timestamps();
        });

        Schema::table('sliders', function (Blueprint $table) {
            $table->string('link')->default('/')->after('for_mobile');
        });

        Setting::insert(['title' => 'default_country', 'value'  => '19', 'lang' => 'en']);
        Setting::insert(['title' => 'refund_protection_title', 'value'  => 'Yoori eCommerce Refund Protection', 'lang' => 'en']);
        Setting::insert(['title' => 'refund_protection_sub_title', 'value'  => '30 Days cash back Guarantee', 'lang' => 'en']);
        Setting::insert(['title' => 'refund_policy_agreement', 'value'  => 'refund-policy', 'lang' => 'en']);

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
