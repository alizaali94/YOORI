<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class XssMiddleware
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
        $userInput = $request->all();
        array_walk_recursive($userInput, function (&$userInput) {
            $userInput = preg_replace('#<script(.*?)>(.*?)</script>#is', '', $userInput);
            $userInput = preg_replace('#&lt;script(.*?)gt;(.*?)&lt;/script&gt;#is', '', $userInput);
        });
        $request->merge($userInput);
        return $next($request);
    }
}
