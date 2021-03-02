<?php

namespace App\Http\Controllers\API;

use App\Core\ElasticClient;
use App\Features\ElasticQueryBuilder;
use App\Features\PlatformStatsRequest;
use App\Features\Profile\ProfileSearcher;
use App\Models\RecentlySearchedProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileApiController extends Controller
{
    //
    public function index(Request $request)
    {
        try {
            $mappedResponse = (new ProfileSearcher($request->all()))->load();
            RecentlySearchedProfile::addBulk($mappedResponse['profiles']);
            $cacheTime = 60 * 24 * 60;
            return response()->json($mappedResponse)
                ->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function get($platform, $relativeURL)
    {
        $query = [
            'query' => [
                'bool' => [
                    "must" => [
                        [
                            "match_phrase" => [
                                "relativeurl" => $relativeURL
                            ]
                        ], [
                            "match" => [
                                "platform" => (new ElasticQueryBuilder)->platformValue($platform)
                            ]
                        ]
                    ]
                ]

            ]
        ];

        try {
            $response = (new ElasticClient)->search($query);
            $response = (new \App\Core\Mappers\SearchResponseMapper($response))->buildPayload();

            if ($response['pagging']['total'] === 0) {
                throw new \Exception("Profile Not Found");
            }

            $profiles = array_filter($response['profiles'], function ($p) use ($relativeURL) {
                return strtolower($p->RelativeURL) === strtolower($relativeURL);
            });

            $profiles = array_values($profiles);
            if (count($profiles) === 0) {
                throw new \Exception("Profile Not Found");
            }

            $endPoint = "/social-entity/min/$platform/$relativeURL";
            // $socialEntityRs = (new FeedApiClient())->get($endPoint);

            $cacheTime = 60 * 24 * 60;
            $mappedResponse = ['success' => true, 'payload' => $profiles[0]];
            return response()->json($mappedResponse)->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function count(Request $request)
    {
        $query = (new \App\Features\ElasticQueryBuilder)->build($request->all(), false);
        $response = (new ElasticClient)->count($query);
        if (isset($response['count'])) {
            $cacheTime = 60 * 24 * 60;
            $respose = ['success' => true, 'count' => $response['count']];
            return response($respose)->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        }

        return ['success' => false];
    }

    public function platformStats()
    {
        $respose = (new PlatformStatsRequest)->get();
        return response($respose)->withHeaders(['Cache-Control' => "max-age=1000, public"]);
    }

    public function autoComplete(Request $request)
    {
        return (new \App\Core\AutoCompleteRequest)->get($request->all());
    }
}
