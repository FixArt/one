<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PaintingController;
use App\Http\Controllers\PaintingQueryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SuggestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('categories', [CategoryController::class, 'index']);
Route::post('categories', [CategoryController::class, 'store']);
Route::get('categories/{id}', [CategoryController::class, 'show']);
Route::get('categories/{id}/paintings', [CategoryController::class, 'paintings']);
Route::put('categories/{id}', [CategoryController::class, 'update']);
Route::delete('categories/{id}', [CategoryController::class, 'destroy']);
Route::get('paintings', [PaintingController::class, 'index']);
Route::post('paintings', [PaintingController::class, 'store']);
Route::get('paintings/query', [PaintingQueryController::class, 'query']);
Route::get('paintings/query/authors', [PaintingQueryController::class, 'authors']);
Route::get('paintings/query/sizes', [PaintingQueryController::class, 'sizes']);
Route::get('paintings/{id}', [PaintingController::class, 'show']);
Route::get('paintings/{id}/orders', [PaintingController::class, 'orders']);
Route::put('paintings/{id}', [PaintingController::class, 'update']);
Route::delete('paintings/{id}', [PaintingController::class, 'destroy']);
Route::get('orders', [OrderController::class, 'index']);
Route::post('orders', [OrderController::class, 'store']);
Route::get('orders/{id}', [OrderController::class, 'show']);
Route::put('orders/{id}', [OrderController::class, 'update']);
Route::delete('orders/{id}', [OrderController::class, 'destroy']);
Route::get('suggestions', [SuggestionController::class, 'index']);
Route::post('suggestions', [SuggestionController::class, 'store']);
Route::get('suggestions/{id}', [SuggestionController::class, 'show']);
Route::put('suggestions/{id}', [SuggestionController::class, 'update']);
Route::delete('suggestions/{id}', [SuggestionController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
