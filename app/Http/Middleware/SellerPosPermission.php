<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Sentinel;

class SellerPosPermission
{
    public function handle(Request $request, Closure $next,$permissions)
    {
        if (Sentinel::check()):
            if(Sentinel::getUser()->user_type == 'admin' || Sentinel::getUser()->user_type == 'staff'):
                foreach (explode('|', $permissions) as $permission):
                    if (in_array( $permission , Sentinel::getUser()->permissions)):
                        return $next($request);
                    endif;
                endforeach;
                return abort(403);
            elseif(Sentinel::getUser()->user_type == 'seller'):
                return $next($request);
            else:
                return redirect()->back();
            endif;
        else:
            return redirect()->back();
        endif;

    }
}
