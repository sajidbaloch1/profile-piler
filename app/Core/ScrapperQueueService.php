<?php

namespace App\Core;

use GuzzleHttp\Client as HttpClient;
use GuzzleHttp\RequestOptions;
use stdClass;

class ScrapperQueueService
{
    private static $instance;
    const QUEUE_TYPE_UNIQUE = 'UNIQUE';
    const QUEUE_TYPE_NORMAL = 'NORMAL';
    const AUTH_TOKEN_FILE_NAME = 'scrapper-auth-token';
    const SUPPORTED_PLATFORMS = ['yt', 'youtube', 'quora'];
    private $authToken;
    private $apiClient;

    private function __construct()
    {
        $this->apiClient = new HttpClient([
            'base_uri' => env('SCRAPPER_SERVER_API_URL') . "/" . "api/"
        ]);

        $this->authToken = $this->verifySession();
    }

    public static function getInstance()
    {
        if (empty(self::$instance)) self::$instance = new ScrapperQueueService();
        return self::$instance;
    }

    public function queue($queues)
    {
        $response = $this->sendRequest('queue/add', ['queue' => $queues]);
        if (!$response->success) {
            throw new \Exception($response->message);
        }
        return true;
    }

    private function getAuthToken(): string
    {
        if (file_exists(self::AUTH_TOKEN_FILE_NAME)) return file_get_contents(self::AUTH_TOKEN_FILE_NAME);
        return '';
    }

    private function setAuthToken(string $token)
    {
        return file_put_contents(self::AUTH_TOKEN_FILE_NAME, $token);
    }

    private function sendRequest($uri, $params): stdClass
    {
        $response = $this->apiClient->post($uri, [
            'headers' => [
                'x-token' => "Bearer {$this->authToken}"
            ],
            RequestOptions::JSON => $params
        ]);
        return json_decode($response->getBody());
    }

    private function login(): string
    {
        $response = $this->sendRequest('auth', ['Email' => env('SCRAPPER_SERVER_API_USER'), 'Password' => env('SCRAPPER_SERVER_API_PWD')]);
        if (!$response->success) return false;
        $this->setAuthToken($response->data->token);
        return $response->data->token;
    }

    private function verifySession(): string
    {
        $token = $this->getAuthToken();
        if (empty($token)) $token = $this->login();
        else {
            $response = $this->sendRequest('auth/verifyToken/', ['token' => $token]);
            if (!$response->success) $token = $this->login();
        }

        if (empty($token)) throw new \Exception("Invalid Socket Server API User");

        return $token;
    }
}
