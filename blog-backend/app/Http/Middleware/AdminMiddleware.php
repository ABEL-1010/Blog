<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Not authenticated
        if (!auth()->check()) {
            return response()->json([
                'message' => 'Unauthenticated'
            ], 401);
        }

        // Not admin
        if (
            !auth()->user()->role ||
            auth()->user()->role->name !== 'admin'
        ) {
            return response()->json([
                'message' => 'Forbidden: Admin access only'
            ], 403);
        }

        return $next($request);
    }
}

