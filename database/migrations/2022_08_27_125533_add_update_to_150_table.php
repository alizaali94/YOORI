<?php

use App\Models\Permission;
use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdateTo150Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::table('products', function (Blueprint $table) {
             $table->longText('description_images')->after('images')->nullable();
         });

        $user = \App\Models\User::find(1);

        $permissions = $user->permissions;

        if (!in_array(['firebase_read'], $permissions) && !in_array(['firebase_update'], $permissions)) {
            $permissions[] = "firebase_read";
            $permissions[] = "firebase_update";
            $user->permissions = $permissions;
            $user->save();
        }

        $permission = Permission::where('attribute', 'firebase_read')->first();

        if (!$permission) {
            $value = [
                'read' => 'firebase_read',
            ];

            Permission::create([
                'attribute' => "firebase",
                'keywords' => $value,
            ]);

        }
        $permission = Permission::where('attribute', 'firebase_update')->first();

        if (!$permission) {
            $value = [
                'update' => 'firebase_update',
            ];

            Permission::create([
                'attribute' => "firebase",
                'keywords' => $value,
            ]);

        }
        Schema::create('payment_method', function (Blueprint $table) {
            $table->id();
            $table->string('trx_id');
            $table->string('code')->nullable();
            $table->text('api_token')->nullable();
            $table->tinyInteger('guest_id')->default(0);
            $table->double('amount')->default(0);
            $table->string('type')->nullable();
            $table->timestamps();
        });

        $menu_active = Setting::where('title', 'menu_active_color')->first();
        $btn_bg_color = Setting::where('title', 'button_background_color')->first();
        $btn_txt_color = Setting::where('title', 'button_text_color')->first();
        $btn_bdr_color = Setting::where('title', 'button_border_color')->first();
        $primary_color = Setting::where('title', 'primary_color')->first();
        $menu_bg_color = Setting::where('title', 'menu_background_color')->first();

        if ($menu_active) {
            $menu_active->update([
                'value' => '#000000'
            ]);
        } else {
            Setting::create([
                'title' => 'menu_active_color',
                'value' => '#000000',
            ]);
        }
        if ($btn_bg_color) {
            $btn_bg_color->update([
                'value' => '#ea2424'
            ]);
        } else {
            Setting::create([
                'title' => 'button_background_color',
                'value' => '#ea2424',
            ]);
        }
        if ($btn_txt_color) {
            $btn_txt_color->update([
                'value' => '#ffffff'
            ]);
        } else {
            Setting::create([
                'title' => 'button_text_color',
                'value' => '#ffffff',
            ]);
        }
        if ($btn_bdr_color) {
            $btn_bdr_color->update([
                'value' => '#ea2424'
            ]);
        } else {
            Setting::create([
                'title' => 'button_text_color',
                'value' => '#ea2424',
            ]);
        }
        if ($primary_color) {
            $primary_color->update([
                'value' => '#ea2424'
            ]);
        } else {
            Setting::create([
                'title' => 'primary_color',
                'value' => '#000000',
            ]);
        }
        if ($menu_bg_color) {
            $menu_bg_color->update([
                'value' => '#fcb800'
            ]);
        } else {
            Setting::create([
                'title' => 'menu_background_color',
                'value' => '#fcb800',
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('143', function (Blueprint $table) {
            //
        });
    }
}
