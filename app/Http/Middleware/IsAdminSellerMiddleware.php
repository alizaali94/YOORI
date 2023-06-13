<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Sentinel;

class IsAdminSellerMiddleware
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
            if (Sentinel::getUser()->user_type == 'admin' || Sentinel::getUser()->user_type == 'seller' || Sentinel::getUser()->user_type == 'staff'):
                return $next($request);
            else:
                return redirect()->route('home');
            endif;
        else:
            return  redirect()->route('login');
        endif;
    }
}
