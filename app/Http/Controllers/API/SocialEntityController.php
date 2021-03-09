<?php

namespace App\Http\Controllers\API;

use App\Core\FeedApiClient;
use App\Http\Controllers\Controller;
use App\Models\SocialEntity\SocialEntity;
use Illuminate\Http\Request;

class SocialEntityController extends Controller
{
    public function getSocialEntity($platform, $identity, Request $request)
    {
        return (new FeedApiClient)->get("/social-entity/min/$platform/$identity", $request->all());
    }

    public function loadBulk(Request $request)
    {
        $profiles = $request->get('profiles');
        $socialEntities = [];
        foreach ($profiles as $profile) {
            $socialEntities[$profile['Id']] = SocialEntity::select(SocialEntity::SOCIAL_ENTITY_COLS)
                ->where($profile['Platform'], $profile['RelativeURL'])
                ->first();
        }
        return $socialEntities;
    }
}
