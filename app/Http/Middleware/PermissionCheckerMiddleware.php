<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Sentinel;

class PermissionCheckerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $permissions)
    {
        if (Sentinel::check()):
                foreach (explode('|', $permissions) as $permission):
                    if (Sentinel::getUser()->user_type == 'seller'):
                        if (settingHelper($permission)):
                            return $next($request);
                        endif;
                    else:
                        if (in_array( $permission , Sentinel::getUser()->permissions)):
                            return $next($request);
                        endif;
                    endif;
                endforeach;
            return abort(403);
        else:
            return redirect()->back();
        endif;
    }
}
