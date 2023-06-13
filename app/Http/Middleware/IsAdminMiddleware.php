<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Sentinel;

class IsAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Sentinel::check()):
            if (Sentinel::getUser()->user_type == 'admin' || Sentinel::getUser()->user_type == 'staff'):
                return $next($request);
            elseif(Sentinel::getUser()->user_type == 'seller'):
                return redirect()->route('home');
            else:
                return redirect()->route('home');
            endif;
        else:
            return  redirect()->route('admin.login.form');
        endif;
    }
}
