<?php

use App\Http\Controllers\CuratedListController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ElasticSearchLogController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\FailedJobController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\SitemapController;
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

// sitemaps
Route::get('sitemap/curated-list', [SitemapController::class, 'curatedList']);
Route::get('sitemap', [SitemapController::class, 'index']);
Route::get('sitemap/{platform}', [SitemapController::class, 'index']);

Route::middleware(['auth'])->group(function () {
    Route::resource('keywords', KeywordController::class);
    Route::resource('curated-lists', CuratedListController::class);
    Route::resource('tags', TagsController::class);
    Route::resource('jobs', JobController::class);
    Route::resource('failed-jobs', FailedJobController::class);

    Route::get("curated-lists/{id}/profiles", [CuratedListController::class, 'updateProfile'])->name('curated-lists.profiles');
    Route::post("curated-lists/{id}/profiles", [CuratedListController::class, 'storeProfile'])->name('curated-lists.store-profiles');
    Route::get("curated-lists/{id}/get-profiles", [CuratedListController::class, 'profiles']);

    Route::get('search-logs', [ElasticSearchLogController::class, 'index'])->name('search-logs.index');
    Route::get("dashboard", [DashboardController::class, 'index'])->name('dashboard');
    Route::get("dashboard/get-elastic-search-logs", [DashboardController::class, 'getElasticSearchLogs'])->name('dashboard.get-elastic-search-logs');
});

require __DIR__ . '/auth.php';
