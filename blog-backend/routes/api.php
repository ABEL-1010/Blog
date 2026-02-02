<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

/*

| Public Routes

*/

// Public blog access
Route::get('/posts', [PostController::class, 'index']); // published only
Route::get('/posts/{id}', [PostController::class, 'show']);

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*

| Authenticated Routes

*/

Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // User posts
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/my-posts', [PostController::class, 'myPosts']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    // Categories (read-only for users)
    Route::get('/categories', [CategoryController::class, 'index']);
});

/*

| Admin Routes

*/

Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {

        // Admin post management
        Route::get('/posts', [PostController::class, 'adminIndex']);
        Route::patch('/posts/{id}/approve', [PostController::class, 'approve']);
        Route::patch('/posts/{id}/reject', [PostController::class, 'reject']);

        // Category management
        Route::apiResource('categories', CategoryController::class)
            ->except(['index', 'show']);
});
