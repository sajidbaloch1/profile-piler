<?php

namespace App\Core\Mappers;

class SearchResponseMapper
{

    private $response;

    public function __construct($response)
    {
        $this->response = $response;
    }

    public function buildPayload()
    {
        return [
            'profiles' => $this->buildProfiles(),
            'pagging' => [
                'total' => $this->response['hits']['total']['value'],
                'pageSize' => (int) env('PAGE_SIZE', 30)
            ]
        ];
    }

    private function buildProfiles()
    {
        return array_map(function ($profile) {
            return (new \App\Core\Mappers\ProfileMapper($profile));
        }, $this->response['hits']['hits']);
    }
}
