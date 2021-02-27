<?php

use App\Http\Controllers\CuratedListController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\TagsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])->group(function () {
    // resources
    Route::resource('keywords', KeywordController::class);
    Route::resource('curated-lists', CuratedListController::class);
    Route::get("curated-lists/{id}/profiles", [CuratedListController::class, 'updateProfile'])->name('curated-lists.profiles');
    Route::resource('tags', TagsController::class);

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/auth.php';
