<?php

namespace App\Traits;

use App\Models\User;
use Cartalyst\Sentinel\Laravel\Facades\Reminder;

trait ResetPasswordTrait
{

    public function resetPassword($email, $resetCode)
    {
        $user = User::byEmail($email);
        $reminder = Reminder::exists($user, $resetCode);
        if (!$reminder) {
            return redirect()->route('login');
        }
    }

}
