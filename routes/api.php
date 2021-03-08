<?php

use App\Http\Controllers\API\CuratedListApiController;
use App\Http\Controllers\API\KeywordApiController;
use App\Http\Controllers\API\ProfileApiController;
use App\Http\Controllers\API\SocialEntityController;
use App\Http\Controllers\API\SocialFeedController;
use App\Http\Controllers\CuratedListController;
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

// Get profile details
$router->get('/profile/{platform}/{relativeURL}', [ProfileApiController::class, 'get']);
$router->get('/profile/get-from-cache', [ProfileApiController::class, 'getFromCache']);
// search profiles
$router->get('/profiles', [ProfileApiController::class, 'index']);
// $router->get('/profiles', [
//     'middleware' => 'gzip',
//     // 'as' => 'data',
//     'uses'=>'ProfileApiController@index'
// ]);
// count profiles for a search
$router->get('/profiles/count', [ProfileApiController::class, 'count']);
// total profiles count by each platform
$router->get('/platform-stats', [ProfileApiController::class, 'platformStats']);
// categories list
$router->get('/categories', [KeywordApiController::class, 'index']);
// keyword list
$router->get('/keywords', [KeywordApiController::class, 'keywords']);
// auto-completion
$router->get('/auto-complete', [LookupController::class, 'index']);

// log front-end errors
$router->post('/log-error', function (Request $request) {
    $error = $request->all();
    $error['ip'] = $request->ip();
    return \App\Models\ClientError::create($error);
});

$router->get('/social-entity/min/{platform}/{identity}', [SocialEntityController::class, 'getSocialEntity']);
$router->get('/social-feed/{platform}', [SocialFeedController::class, 'feed']);
$router->get('/curated-list/{seo_url}', [CuratedListApiController::class, 'index']);
