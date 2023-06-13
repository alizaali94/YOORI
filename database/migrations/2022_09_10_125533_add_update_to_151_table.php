<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdateTo151Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $primary_color  = Setting::where('title', 'primary_color')->first();
        $menu_bg_color  = Setting::where('title', 'menu_background_color')->first();
        $menu_txt_color = Setting::where('title', 'menu_text_color')->first();
        $menu_active    = Setting::where('title', 'menu_active_color')->first();
        $btn_bg_color   = Setting::where('title', 'button_background_color')->first();
        $btn_txt_color  = Setting::where('title', 'button_text_color')->first();
        $btn_bdr_color  = Setting::where('title', 'button_border_color')->first();

        if ($primary_color) {
            $primary_color->update([
                'value' => '#ea2424'
            ]);
        } else {
            Setting::create([
                'title' => 'primary_color',
                'value' => '#ea2424',
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
        if ($menu_txt_color) {
            $menu_txt_color->update([
                'value' => '#444444'
            ]);
        } else {
            Setting::create([
                'title' => 'menu_text_color',
                'value' => '#444444',
            ]);
        }
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
                'value' => '#333333'
            ]);
        } else {
            Setting::create([
                'title' => 'button_background_color',
                'value' => '#333333',
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
                'value' => '#333333'
            ]);
        } else {
            Setting::create([
                'title' => 'button_border_color',
                'value' => '#333333',
            ]);
        }
    }

    public function down()
    {
        Schema::table('143', function (Blueprint $table) {
            //
        });
    }
}
