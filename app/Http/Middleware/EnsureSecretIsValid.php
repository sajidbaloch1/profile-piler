<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureSecretIsValid
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
        if ($request->header('secret') !== env('APP_SECRET')) {
            return response(['success' => false, 'msg' => 'Unauthorised'], 401);
        }

        return $next($request);
    }
}
