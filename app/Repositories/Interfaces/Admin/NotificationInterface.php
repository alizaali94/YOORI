<?php

namespace App\Repositories\Interfaces\Admin;

interface NotificationInterface
{
    public function get($id);

    public function all();

    public function statusChange($id);

    public function markAllSeen();

    public function seen($id);

    public function remove($id);
}
