<?php

namespace App\Http\Controllers;

use App\Core\ElasticClient;
use Illuminate\Http\Request;

class ProfileController extends Controller
{


    //
    public function index(Request $request)
    {

        $query = $this->buildQuery($request);
        try {
            $response = (new ElasticClient)->search($query);
            return (new \App\Core\Mappers\SearchResponseMapper($response))->buildPayload();
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function get($id)
    {
        try {
            $response = $response = (new ElasticClient)->get($id);;
            return ['success' => true, 'payload'=>(new \App\Core\Mappers\ProfileMapper($response))];
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function count(Request $request)
    {
        $query = $this->buildQuery($request, false);
        $response = (new ElasticClient)->count($query);
        if ($response['count']) {
            return ['success' => true, 'count' => $response['count']];
        }

        return ['success' => false];
    }

    private function platformValue($platformName)
    {
        switch ($platformName) {
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


    private function buildQuery(Request $request, $pagination = true)
    {

        $sortFieldName = 'followers';
        if (!empty($request->get('sort'))) {
            $sortFieldName = $request->get('sort');
        }

        $pageSize = env('PAGE_SIZE', 100);

        $query = [];
        if ($request->get('q')) {
            $query = [
                'query' => [
                    'bool' => [
                        'filter' => [
                            "bool" => [
                                "should" => [
                                    [
                                        'match_phrase' => [
                                            'description' => $request->get('q')
                                        ]
                                    ],
                                    [
                                        'match_phrase' => [
                                            'name' => $request->get('q')
                                        ]
                                    ],
                                    [
                                        'match_phrase' => [
                                            'location' => $request->get('q')
                                        ]
                                    ]
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
        if (!empty($request->get('location'))) {
            $filters[] = [
                "match_phrase" => [
                    "location" => [
                        "query" => $request->get('location')
                    ]
                ]
            ];
        }

        if (!empty($request->get('isVerified'))) {
            $filters[] = [
                "match_phrase" => [
                    "isverified" => [
                        "query" => $request->get('isVerified') == 'true'
                    ]
                ]
            ];
        }

        if (!empty($request->get('isFamilySafe'))) {
            $filters[] = [
                "match_phrase" => [
                    "isfamilysafe" => [
                        "query" => $request->get('isFamilySafe') == 'true'
                    ]
                ]
            ];
        }

        if (!empty($request->get('category'))) {
            $filters[] = [
                "match_phrase" => [
                    "category" => [
                        "query" => $request->get('category')
                    ]
                ]
            ];
        }


        if (!empty($request->get('profession'))) {
            $filters[] = [
                "match_phrase" => [
                    "role" => [
                        "query" => $request->get('profession')
                    ]
                ]
            ];
        }


        if (!empty($request->get('company'))) {
            $filters[] = [
                "match_phrase" => [
                    "company" => [
                        "query" => $request->get('company')
                    ]
                ]
            ];
        }

        if (count($filters) > 0) {
            $query['query']['bool']['must'] = $filters;
        }


        if ($request->get('platforms')) {
            $platforms = explode('-', $request->get('platforms'));
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

        if ($request->get('page_no')) {
            $pageNo = $request->get('page_no') > 4 ? 4 : $request->get('page_no');
            $query['from'] = $pageNo * $pageSize;
        }
        return $query;
    }
}
