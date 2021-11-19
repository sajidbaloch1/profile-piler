<?php

namespace App\Features;

class ElasticQueryBuilder
{
    public function build(array $request, $pagination = true)
    {
        $sortFieldName = 'followers';
        if (!empty($request['sort'])) {
            $sortFieldName = $request['sort'];
        }

        $pageSize = env('PAGE_SIZE', 30);
        if (!empty($request['pageSize'])) {
            $pageSize = $request['pageSize'];
        }

        $query = [];
        if (!empty($request['q'])) {
            $query = [
                'query' => [
                    'bool' => [
                        'filter' => [
                            "bool" => [
                                "should" => [
                                    [
                                        'match_phrase' => [
                                            'description' => $request['q']
                                        ]
                                    ],
                                    [
                                        'match_phrase' => [
                                            'name' => $request['q']
                                        ]
                                    ],
                                    // [
                                    //     'match_phrase' => [
                                    //         'location' => $request['q']
                                    //     ]
                                    // ],
                                    // [
                                    //     'match_phrase' => [
                                    //         'profession' => $request['q']
                                    //     ]
                                    // ],
                                    // [
                                    //     'match_phrase' => [
                                    //         'education' => $request['q']
                                    //     ]
                                    // ],
                                    // [
                                    //     'match_phrase' => [
                                    //         'category' => $request['q']
                                    //     ]
                                    // ],
                                    // [
                                    //     'match_phrase' => [
                                    //         'company' => $request['q']
                                    //     ]
                                    // ]
                                ],
                                'minimum_should_match' => 1
                            ]
                        ]
                    ]
                ]
            ];
        }

        if ($pagination) {
            $query['sort'] =
                [
                    $sortFieldName => 'desc'
                ];
            $query['size'] = $pageSize;
        }

        $filters = [];
        if (!empty($request['location'])) {
            $filters[] = [
                "match_phrase" => [
                    "location" => [
                        "query" => $request['location']
                    ]
                ]
            ];
        }

        if (!empty($request['education'])) {
            $filters[] = [
                "match_phrase" => [
                    "education" => [
                        "query" => $request['education']
                    ]
                ]
            ];
        }

        if (!empty($request['isVerified'])) {
            $filters[] = [
                "match_phrase" => [
                    "isverified" => [
                        "query" => $request['isVerified'] == 'true'
                    ]
                ]
            ];
        }

        if (!empty($request['isFamilySafe'])) {
            $filters[] = [
                "match_phrase" => [
                    "isfamilysafe" => [
                        "query" => $request['isFamilySafe'] == 'true'
                    ]
                ]
            ];
        }

        if (!empty($request['category'])) {
            $filters[] = [
                "match_phrase" => [
                    "category" => [
                        "query" => $request['category']
                    ]
                ]
            ];
        }


        if (!empty($request['profession'])) {
            $filters[] = [
                "match_phrase" => [
                    "role" => [
                        "query" => $request['profession']
                    ]
                ]
            ];
        }


        if (!empty($request['company'])) {
            $filters[] = [
                "match_phrase" => [
                    "company" => [
                        "query" => $request['company']
                    ]
                ]
            ];
        }

        if (count($filters) > 0) {
            $query['query']['bool']['must'] = $filters;
        }


        if (!empty($request['platforms'])) {
            $platforms = explode('-', $request['platforms']);
            $shoulds = [];
            foreach ($platforms as $p) {
                $p = $this->platformValue($p);
                if (empty($p)) {
                    continue;
                }

                $shoulds[] = [
                    'match_phrase' => [
                        'platform' => $p
                    ]
                ];
            }

            if (count($shoulds) > 0) {
                $query['query']['bool']['must'][] = [
                    'bool' => [
                        'should' => $shoulds,
                        'minimum_should_match' => 1
                    ]
                ];
            }
        }

        if (!empty($request['page_no'])) {
            $pageNo = $request['page_no'] > 4 ? 4 : $request['page_no'];
            $query['from'] = $pageNo * $pageSize;
        }
        return $query;
    }

    public function platformValue($platformName)
    {
        switch (strtolower($platformName)) {
            case 'youtube':
                return 'yt';
            case 'instagram':
                return 'ig';
            case 'tiktok':
                return 'tt';
            default:
                return $platformName;
        }
    }

}
