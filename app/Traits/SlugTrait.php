<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait SlugTrait{
    public function getSlug($name, $slug = null)
    {
        if ($slug != null && $slug != '') :
            return str_replace(' ', '-', strtolower($slug));
        else :
            return preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', strtolower($name))).'-'.strtolower(Str::random(5));
        endif;
    }
}
