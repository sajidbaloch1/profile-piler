<?php

namespace App\Modules\Profiles;

use App\Core\ElasticClient;
use App\Core\Mappers\SearchResponseMapper;
use App\Features\ElasticQueryBuilder;

class ProfileSearch
{
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

        $response = (new ElasticClient)->search($query);
        $response = (new SearchResponseMapper($response))->buildPayload();

        if ($response['pagging']['total'] === 0) {
            return null;
        }

        $profiles = array_filter($response['profiles'], function ($p) use ($relativeURL) {
            return strtolower($p->RelativeURL) === strtolower($relativeURL);
        });

        $profiles = array_values($profiles);
        if (count($profiles) === 0) {
            return null;
        }
        return $profiles[0];
    }
}
