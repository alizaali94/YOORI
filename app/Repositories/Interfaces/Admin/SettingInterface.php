<?php

namespace App\Repositories\Interfaces\Admin;

interface SettingInterface {

    public function timezones();

    public function update($request);

    public function statusChange($request);

    public function updateHomePageContents($request);

    public function updateMobileHomePageContents($content);

    public function updateServer($request);
}
