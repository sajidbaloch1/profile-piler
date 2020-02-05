<?php

namespace App\Core;

use Aws\Credentials\CredentialProvider;
use Aws\Credentials\Credentials;
use Aws\ElasticsearchService\ElasticsearchPhpHandler;
use Elasticsearch\ClientBuilder;

class ElasticClient
{

    /**
     * Elastic Search client
     *
     * @var Elasticsearch\Client
     */
    private $client;

    public function __construct()
    {
        $provider = CredentialProvider::fromCredentials(
            new Credentials(env('AWS_ID'), env('AWS_KEY'))
        );
        $handler = new ElasticsearchPhpHandler(env('AWS_ELASTIC_REGION'), $provider);
        $builder = ClientBuilder::create();
        $builder->setHosts([env('AWS_ELASTIC_HOSTS')]);
        $builder->setHandler($handler);
        $this->client = $builder->build();
    }

    public function search($query, $index = 'influencers')
    {
        $params = [
            // 'scroll' => '100m',
            'index' => $index,
            'body'  => $query,
        ];

        try {
            return $this->client->search($params);
        } catch (\Exception $ex) {
            throw $this->buildClientException();
        }
    }

    public function count($query = null, $index = 'influencers')
    {
        $params = ['index' => $index, 'body'  => $query];
        if (!is_null($query)) {
            $params['body'] = $query;
        }

        try {
            return $this->client->count($params);
        } catch (\Exception $ex) {
            throw $this->buildClientException();
        }
    }


    private function buildClientException()
    {
        $last = $this->client->transport->getLastConnection()->getLastRequestInfo();
        if (isset($last['response']['body'])) {
            return new \Exception($last['response']['body']);
        } else if (isset($last['response']['transfer_stats']['error'])) {
            return new \Exception($last['response']['transfer_stats']['error']);
        }
        return new \Exception("ElasticSearch: Unknown Connection error");
    }
}
