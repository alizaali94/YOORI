<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Sentinel;

class IsCustomerMiddleware
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

        if (Sentinel::check() && (Sentinel::getUser()->user_type == 'customer')) :
            return $next($request);
        else:
            return response()->json(['error' => 'unathenticated'],401);
        endif;
    }
}
