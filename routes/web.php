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
$router->get('/profile/feed/{platform}', 'ProfileController@feed');
$router->get('/profile/{platform}/{relativeURL}', 'ProfileController@get');
$router->get('/profiles', 'ProfileController@index');
$router->get('/profiles/count', 'ProfileController@count');
$router->get('/platform-stats', 'ProfileController@platformStats');

$router->get('/categories', 'KeywordController@index');
$router->get('/keywords', 'KeywordController@keywords');
$router->get('/auto-complete', 'LookupController@index');


$router->post('/log-error', function (Request $request) {
    $error = $request->all();
    $error['ip'] = $request->ip();
    return \App\ClientError::create($error);
});
