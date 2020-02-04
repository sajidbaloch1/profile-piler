<?php

namespace App\Http\Controllers;

use App\Core\ElasticClient;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function index(Request $request)
    {
        $pageSize = env('PAGE_SIZE', 100);
        $query = [
            'query' => [
                'bool' => [
                    'filter' => [
                        'multi_match' => [
                            'type' => 'phrase',
                            'query' => '"' . $request->get('q') . '"',
                        ]
                    ]
                ]
            ], "sort" =>  [
                [
                    "followers" => 'desc'
                ]
            ],
            'size' => $pageSize,
            // 'scroll' => '100m'
        ];
        if ($request->get('page_no')) {
            $pageNo = $request->get('page_no') > 4 ? 4 : $request->get('page_no');
            $query['from'] = $pageNo * $pageSize;
        }

        try {
            $response = (new ElasticClient)->search($query);
            return (new \App\Core\Mappers\SearchResponseMapper($response))->buildPayload();
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }
}
