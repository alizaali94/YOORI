<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Sentinel;
use Illuminate\Support\Facades\Cache;

class OnlineUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Sentinel::check()) {
            $expiresAt = Carbon::now()->addMinutes(5); // keep online for 1 min
            Cache::put('user-is-online-' . Sentinel::getUser()->id, true, $expiresAt);
        }
        return $next($request);
    }
}
