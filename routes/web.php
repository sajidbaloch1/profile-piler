<?php

use \Curl\Curl;

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

$router->get('/profile/{platform}/{relativeURL}', 'ProfileController@get');
$router->get('/profiles', 'ProfileController@index');
$router->get('/profiles/count', 'ProfileController@count');

$router->get('/profile/feed/{platform}/{relativeURL}', 'ProfileController@feed');
