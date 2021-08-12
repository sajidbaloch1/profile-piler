<?php

namespace App\Http\Controllers\API;

use App\Core\ElasticClient;
use App\Core\FeedApiClient;
use App\Core\Mappers\SearchResponseMapper;
use App\Features\ElasticQueryBuilder;
use App\Http\Controllers\Controller;
use App\Models\SocialEntity\SocialEntity;
use App\Modules\Profiles\ProfileSearch;
use Illuminate\Http\Request;

class SocialEntityController extends Controller
{
    public function getSocialEntity($platform, $identity, Request $request)
    {
        $socialEntity = SocialEntity::searchByPlatform($platform, $identity);
        if (empty($socialEntity)) return null;
        $socailEntityPlatform = $socialEntity->attributesToArray();
        if (!empty($socialEntity) && $request->stats) {
            $stats = [];
            foreach (SocialEntity::SOCIAL_ENTITY_COLS as $platform) {
                if (empty($socialEntity->{$platform})) continue;
                $relativeurl = $socialEntity->{$platform};
                $profile = (new ProfileSearch)->get($platform, $relativeurl);
                $stats[$platform] = $profile;
            }
            $socailEntityPlatform['Stats'] = $stats;
        }

        $cacheTime = 60 * 24 * 60;
        return response()
            ->json($socailEntityPlatform)
            ->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
    }

    public function loadBulk(Request $request)
    {
        $profiles = $request->get('profiles');
        $socialEntities = [];
        foreach ($profiles as $profile) {
            $socialEntities[$profile['Id']] = SocialEntity::searchByPlatform($profile['Platform'], $profile['RelativeURL']);
        }
        return $socialEntities;
    }
}
