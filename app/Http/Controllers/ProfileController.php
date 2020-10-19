<?php

namespace App\Http\Controllers;

use App\Core\ElasticClient;
use App\Features\ElasticQueryBuilder;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function index(Request $request)
    {

        $query = (new \App\Features\ElasticQueryBuilder)->build($request->all());

        try {
            $response = (new ElasticClient)->search($query);
            $mappedResponse = (new \App\Core\Mappers\SearchResponseMapper($response))->buildPayload();
            \App\RecentlySearchedProfile::addBulk($mappedResponse['profiles']);
            $cacheTime = 60 * 24 * 60;
            // header("Cache-Control: max-age=" . $cacheTime);
            return response()->json($mappedResponse)->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
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

            // if ($profiles[0]->RelativeURL !== $relativeURL) {
            //     throw new \Exception("Profile Not Found");
            // }

            $cacheTime = 60 * 24 * 60;
            $mappedResponse = ['success' => true, 'payload' => $profiles[0]];
            // header("Cache-Control: max-age=" . $cacheTime);

            return response()->json($mappedResponse)->withHeaders(['Cache-Control' => "max-age=" . $cacheTime]);
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
            return response($respose)->withHeaders(['Cache-Control' => $cacheTime]);
        }

        return ['success' => false];
    }

    public function platformStats()
    {
        $respose = (new \App\Features\PlatformStatsRequest)->get();
        return response($respose)->withHeaders(['Cache-Control' => 10000]);
    }

    public function autoComplete(Request $request)
    {
        return (new \App\Core\AutoCompleteRequest)->get($request->all());
    }
}
