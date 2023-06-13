<?php

namespace App\Http\Middleware;

use App\Models\Order;
use App\Models\Wallet;
use Closure;
use Illuminate\Http\Request;
use Sentinel;

class LoginCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (request()->route()->parameter('trx_id'))
        {
            $order = Order::where('trx_id',request()->route()->parameter('trx_id'))->first();
            Sentinel::login(@$order->user);
        }
        if (request()->route()->parameter('transaction_id'))
        {
            $wallet = Wallet::where('transaction_id',request()->route()->parameter('code'))->first();
            Sentinel::login(@$wallet->user);
        }
        if (Sentinel::check()) :
            return $next($request);
        else:
            return redirect()->route('login');
        endif;
    }
}
