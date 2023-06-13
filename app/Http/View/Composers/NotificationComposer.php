<?php

namespace App\Http\View\Composers;

use App\Models\Notification;
use Illuminate\View\View;
use Sentinel;

class NotificationComposer{
    public function __construct()
    {

    }

    public function compose(View $view)
    {
        $notifications      = Notification::latest()->where('user_id',Sentinel::getUser()->id)->take(12)->get();
        $notificationCount  = Notification::where('user_id',Sentinel::getUser()->id)->where('status','unseen')->count();

        $view->with('notifications', $notifications);
        $view->with('notificationCount', $notificationCount);
    }
}
