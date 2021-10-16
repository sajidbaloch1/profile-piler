<?php

use App\Http\Controllers\API\CuratedListApiController;
use App\Http\Controllers\API\KeywordApiController;
use App\Http\Controllers\API\ProfileApiController;
use App\Http\Controllers\API\SocialEntityController;
use App\Http\Controllers\API\SocialFeedController;
use App\Http\Controllers\LookupController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$router->get('/', function () use ($router) {
    return ['appVersion' => $router->app->version()];
});


$router->get('/profile/{platform}/{relativeURL}', [ProfileApiController::class, 'get']);
$router->get('/profile/get-from-cache', [ProfileApiController::class, 'getFromCache']);

$router->get('/profiles', [ProfileApiController::class, 'index']);
$router->get('/profiles/count', [ProfileApiController::class, 'count']);
$router->get('/platform-stats', [ProfileApiController::class, 'platformStats']);

$router->get('/categories', [KeywordApiController::class, 'index']);

$router->get('/keywords', [KeywordApiController::class, 'keywords']);

$router->get('/auto-complete', [LookupController::class, 'index']);

// log front-end errors
$router->post('/log-error', function (Request $request) {
    $error = $request->all();
    $error['ip'] = $request->ip();
    return \App\Models\ClientError::create($error);
});

$router->get('/social-entity/min/{platform}/{identity}', [SocialEntityController::class, 'getSocialEntity']);
$router->post('/social-entity/load-bulk', [SocialEntityController::class, 'loadBulk']);
$router->post('/social-entity/update', [SocialEntityController::class, 'update'])->middleware('secret');
$router->get('/social-feed/{platform}', [SocialFeedController::class, 'feed']);

$router->get('/curated-lists', [CuratedListApiController::class, 'index']);
$router->get('/curated-list/{seo_url}', [CuratedListApiController::class, 'show']);
$router->post('/contact-us', [ProfileApiController::class, 'contactUs']);
