<?php

namespace App\Core;

use Aws\Credentials\CredentialProvider;
use Aws\Credentials\Credentials;
use App\Core\ElasticsearchPhpHandler;
use Elasticsearch\ClientBuilder;
use Illuminate\Support\Facades\Cache;

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

    public function get($id, $index = 'influencers')
    {
        $params = [
            'index' => $index,
            'id'    => $id
        ];

        try {
            return $this->executeQuery('get', $params);
        } catch (\Exception $ex) {
            throw $this->buildClientException();
        }
    }

    public function search($query, $index = 'influencers')
    {
        $params = [
            'index' => $index,
            'body'  => $query,
        ];

        try {
            return $this->executeQuery('search', $params);
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
            return $this->executeQuery('count', $params);
        } catch (\Exception $ex) {
            throw $this->buildClientException();
        }
    }

    private function executeQuery($methodName, $params)
    {
        $cacheKey = md5(serialize($params));
        $cachedValue = Cache::get($cacheKey);
        if (!empty($cachedValue)) {
            return json_decode($cachedValue, true);
        }
        $response = $this->client->$methodName($params);
        file_put_contents("$cacheKey.txt", serialize($params));
        Cache::put($cacheKey, json_encode($response), (60 * 60 * 24 * 7));
        return $response;
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
