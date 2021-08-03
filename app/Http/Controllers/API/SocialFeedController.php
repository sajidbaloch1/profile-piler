<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\FeedApiClient;

class SocialFeedController extends Controller
{
    public function feed($platform, Request $request)
    {
        return (new FeedApiClient)->get("/social-feed/$platform", $request->all());
    }
}
