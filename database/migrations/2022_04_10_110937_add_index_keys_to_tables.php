<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexKeysToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->index(['email', 'phone']);
        });

        Schema::table('brands', function (Blueprint $table) {
            $table->index(['slug', 'status']);
        });

        Schema::table('brand_languages', function (Blueprint $table) {
            $table->index(['brand_id', 'lang', 'title']);
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->index(['parent_id', 'slug', 'status']);
        });

        Schema::table('category_languages', function (Blueprint $table) {
            $table->index(['category_id', 'lang', 'title']);
        });

        Schema::table('attribute_languages', function (Blueprint $table) {
            $table->index(['attribute_id', 'lang']);
        });

        Schema::table('color_languages', function (Blueprint $table) {
            $table->index(['color_id', 'name', 'lang']);
        });

        Schema::table('blog_categories', function (Blueprint $table) {
            $table->index(['slug', 'status']);
        });

        Schema::table('blogs', function (Blueprint $table) {
            $table->index(['user_id', 'status']);
        });

        Schema::table('blog_languages', function (Blueprint $table) {
            $table->index(['blog_id', 'lang']);
        });

        Schema::table('blog_category_languages', function (Blueprint $table) {
            $table->index(['blog_category_id', 'lang']);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->index(['category_id', 'user_id', 'slug']);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->index(['price', 'special_discount', 'special_discount_type']);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->index(['special_discount_start', 'special_discount_end']);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->index(['current_stock', 'minimum_order_quantity', 'status']);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->index(['is_approved']);
        });

        Schema::table('product_languages', function (Blueprint $table) {
            $table->index(['product_id']);
        });
        Schema::table('product_languages', function (Blueprint $table) {
            $table->index(['lang']);
        });

        Schema::table('campaigns', function (Blueprint $table) {
            $table->index(['slug', 'start_date', 'end_date', 'status']);
        });

        Schema::table('campaign_languages', function (Blueprint $table) {
            $table->index(['campaign_id', 'lang', 'title']);
        });

        Schema::table('pages', function (Blueprint $table) {
            $table->index(['status']);
        });

        Schema::table('page_languages', function (Blueprint $table) {
            $table->index(['page_id','lang','title']);
        });

        Schema::table('sliders', function (Blueprint $table) {
            $table->index(['order','btn_link','status']);
        });

        Schema::table('slider_languages', function (Blueprint $table) {
            $table->index(['slider_id','lang','title']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->index(['position']);
        });

        Schema::table('service_languages', function (Blueprint $table) {
            $table->index(['service_id','lang','title']);
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tables', function (Blueprint $table) {
            //
        });
    }
}
