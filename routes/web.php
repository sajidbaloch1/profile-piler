<?php

use \Curl\Curl;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return ['appVersion' => $router->app->version()];
});

// Get profile details
$router->get('/profile/{platform}/{relativeURL}', 'ProfileController@get');
$router->get('/profile/get-from-cache', 'ProfileController@getFromCache');
// search profiles
$router->get('/profiles', 'ProfileController@index');
// $router->get('/profiles', [
//     'middleware' => 'gzip',
//     // 'as' => 'data',
//     'uses'=>'ProfileController@index'
// ]);
// count profiles for a search
$router->get('/profiles/count', 'ProfileController@count');
// total profiles count by each platform
$router->get('/platform-stats', 'ProfileController@platformStats');
// categories list
$router->get('/categories', 'KeywordController@index');
// keyword list
$router->get('/keywords', 'KeywordController@keywords');
// auto-completion
$router->get('/auto-complete', 'LookupController@index');

// log front-end errors
$router->post('/log-error', function (Request $request) {
    $error = $request->all();
    $error['ip'] = $request->ip();
    return \App\ClientError::create($error);
});
