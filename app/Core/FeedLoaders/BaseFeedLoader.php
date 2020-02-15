<?php

namespace App\Core\FeedLoaders;

use App\Core\HttpClient;

class BaseFeedLoader
{
    public $httpClient;

    public function __construct()
    {
        $this->httpClient = new HttpClient();
    }
}
