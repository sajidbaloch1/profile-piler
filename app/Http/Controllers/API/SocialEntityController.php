<?php

namespace App\Http\Controllers\API;

use App\Core\FeedApiClient;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SocialEntityController extends Controller
{
    public function getSocialEntity($platform, $identity, Request $request)
    {
        return (new FeedApiClient)->get("/social-entity/min/$platform/$identity", $request->all());
    }
}
