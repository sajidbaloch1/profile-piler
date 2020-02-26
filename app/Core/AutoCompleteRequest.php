<?php

namespace App\Core;

class AutoCompleteRequest
{
    public function __construct()
    {
    }

    public function get($request)
    {
        $query = $this->getQuery($request);
        return $response = (new ElasticClient)->search($query);
    }

    private function getQuery($request)
    {
        return [
            'size' => 0,
            'aggs' => [
                'locations' => [
                    "filter" =>  ["term" =>  ["platform" => "yt"]],
                    'aggs' => [
                        'avg_price' => [
                            'terms' => [
                                'field' => 'location.keyword',
                                'size' => 8000
                            ]

                        ]
                    ]
                ]
            ]
        ];
        return [
            'query' => [
                'bool' => [
                    'must' => [
                        [
                            'match_phrase' =>
                            [
                                'platform' => [
                                    'query' => $request['platform']
                                ]
                            ]


                        ]
                    ],
                    'filter' => [
                        'bool' => [
                            'should' => [
                                [
                                    'match' => [
                                        $request['field'] => $request['q']
                                    ]
                                ]
                            ],
                            "minimum_should_match" => 1
                        ]
                    ]
                ]
            ],
            'size' => 5,
            '_source' => [$request['field']]
        ];
    }
}
