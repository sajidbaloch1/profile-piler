<?php

namespace App\Http\Controllers;

use App\Core\ElasticClient;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function index(Request $request)
    {
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
            'size' => 50,
            // 'from' => 50
        ];

        try {
            $response = (new ElasticClient)->search($query);
            return (new \App\Core\Mappers\SearchResponseMapper($response))->buildPayload();
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }
}
