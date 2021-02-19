<?php

namespace App\Core;

use GuzzleHttp\Client as HttpClient;

class FeedApiClient
{
    private $_client;

    public function __construct()
    {
        $this->_client = new HttpClient([
            'base_uri' => env('FEED_API_URL')
        ]);
    }

    public function get($url, $data = null)
    {
        $queryString = '';
        if (!is_null($data)) {
            $queryString = http_build_query($data);
        }
        $response = $this->_client->get("$url?$queryString");
        return $response->getBody();
    }
}
