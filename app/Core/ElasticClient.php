<?php

namespace App\Core;

use Aws\Credentials\CredentialProvider;
use Aws\Credentials\Credentials;
use App\Core\ElasticsearchPhpHandler;
use App\Jobs\ProcessElasticSearchLog;
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
            new Credentials(env('AWS_ACCESS_KEY_ID'), env('AWS_SECRET_ACCESS_KEY'))
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
            throw $this->buildClientException($ex);
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
            throw $this->buildClientException($ex);
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
            throw $this->buildClientException($ex);
        }
    }

    private function executeQuery($methodName, $params)
    {
        $cacheKey = md5(serialize($params));
        $cachedValue = Cache::get($cacheKey);

        if (empty($cachedValue)) {
            $response = $this->client->$methodName($params);
            ProcessElasticSearchLog::dispatch($params, $response);
            Cache::put($cacheKey, json_encode($response), (60 * 60 * 24 * 7));
        } else {
            $response = json_decode($cachedValue, true);
        }

        return $response;
    }

    private function buildClientException($ex)
    {
        $last = $this->client->transport->getLastConnection()->getLastRequestInfo();
        if (isset($last['response']['body'])) {
            return new \Exception("Exception:" . $ex . ", LastBody:" . $last['response']['body']);
        } else if (isset($last['response']['transfer_stats']['error'])) {
            return new \Exception("Exception:" . $ex . ",ElasticError: " . $last['response']['transfer_stats']['error']);
        }
        return new \Exception("Exception:" . $ex . "ElasticSearch: Unknown Connection error");
    }
}
