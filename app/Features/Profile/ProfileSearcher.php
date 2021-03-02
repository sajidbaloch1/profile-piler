<?php

namespace App\Features\Profile;

use App\Core\ElasticClient;
use App\Core\Mappers\SearchResponseMapper;
use App\Features\ElasticQueryBuilder;

class ProfileSearcher
{
    private $params;

    public function __construct($params)
    {
        $this->params = $params;
    }

    public function load()
    {
        $query = (new ElasticQueryBuilder)->build($this->params);
        $response = (new ElasticClient)->search($query);
        return (new SearchResponseMapper($response))->buildPayload();
    }
}
