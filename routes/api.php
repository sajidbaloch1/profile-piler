<?php

use App\Http\Controllers\API\SocialEntityController;
use App\Http\Controllers\API\SocialFeedController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\LookupController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
$router->get('/profile/{platform}/{relativeURL}', [ProfileController::class, 'get']);
$router->get('/profile/get-from-cache', [ProfileController::class, 'getFromCache']);
// search profiles
$router->get('/profiles', [ProfileController::class, 'index']);
// $router->get('/profiles', [
//     'middleware' => 'gzip',
//     // 'as' => 'data',
//     'uses'=>'ProfileController@index'
// ]);
// count profiles for a search
$router->get('/profiles/count', [ProfileController::class, 'count']);
// total profiles count by each platform
$router->get('/platform-stats', [ProfileController::class, 'platformStats']);
// categories list
$router->get('/categories', [KeywordController::class, 'index']);
// keyword list
$router->get('/keywords', [KeywordController::class, 'keywords']);
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
