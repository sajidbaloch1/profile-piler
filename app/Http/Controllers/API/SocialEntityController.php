<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SocialEntity\SocialEntity;
use App\Models\Youtube\Channel;
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

    public function update(Request $request)
    {
        $request->validate([
            'platform' => "required|in:youtube,facebook,instagram,twitter",
            "data" => 'required',
            "data.ChannelId" => "exclude_unless:platform,youtube|required"
        ]);
        switch ($request->platform) {
            case "youtube":
                Channel::where('ChannelId', $request->data['ChannelId'])
                    ->update(
                        array_merge(['CrawledAt' => gmdate('Y-m-d H:i:s')], $request->data)
                    );
                break;
        }

        return [
            'success' => true,
        ];
    }
}
