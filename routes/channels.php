<?php

use Illuminate\Support\Facades\Broadcast;
use Cartalyst\Sentinel\Native\Facades\Sentinel;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
$user = Sentinel::getUser();
Broadcast::channel('notification-send.*', function ($user) {
    return $user;
});
