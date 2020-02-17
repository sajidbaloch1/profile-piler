<?php

namespace App\Core;

class SocialFeedLoader
{
    private $_httpClient;

    public function __construct($useProxy = false)
    {
        $this->_httpClient = new HttpClient($useProxy);
    }

    public function getFeed($params, $platform)
    {
        $response = [];
        switch ($platform) {
            case 'yt':
            case 'YT':
            case 'youtube':
                $response = $this->getYoutueFeed($params);
                break;
            case 'tt':
            case 'TT':
            case 'tiktok':
                $response = (new \App\Core\FeedLoaders\TikTokFeedLoader)->get($params);
                break;
            case 'twitter':
            case 'Twitter':
                $response = (new \App\Core\FeedLoaders\TwitterFeedLoader)->get($params);
                break;
            case 'flickr':
            case 'Flickr':
                $response = $this->getFlickr($params);
                break;
            case 'Pinterest':
            case 'pinterest':
                $response = $this->getPinterest($params);
                break;
        }

        return $response;
    }

    private function getYoutueFeed($params)
    {
        $response = $this->_httpClient->get('https://www.youtube.com/channel/' . $params['relativeURL']);
        if (!$response['success']) {
            return [];
        }

        $result = [];
        preg_match_all('#/watch\?v=\w{11}#si', $response['body'], $result);
        if (!isset($result[0]) || !is_array($result[0])) {
            return [];
        }

        $uniqueURLS = array_unique($result[0]);
        $urls = array_map(function ($rURL) {
            return ['url' => 'https://www.youtube.com' . $rURL];
        }, $uniqueURLS);
        return array_slice($urls, 0, 20);
    }


    private function getPinterest($params)
    {
        $data = [
            'options' => [
                'isPrefetch' => false,
                'add_vase' => true,
                'field_set_key' => 'unauth_react',
                'page_size' => 25,
                'username' => $params['relativeURL']
            ],
            // 'context' => ''
        ];
        $url = 'https://www.pinterest.com/resource/UnauthProfilePinFeedResource/get/';
        $headers = [
            'authority' => 'authority',
            'pragma' => 'no-cache',
            'cache-control' => 'no-cache',
            'accept' => 'application/json, text/javascript, */*, q=0.01',
            'x-pinterest-appstate' => 'active',
            'x-app-version' => '4002c1e',
            'x-requested-with' => 'XMLHttpRequest',
            'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            'sec-fetch-site' => 'same-origin',
            'sec-fetch-mode' => 'cors',
            'referer' => 'https://www.pinterest.com/',
            // 'accept-encoding' => 'gzip, deflate, br',
            'accept-language' => 'en-US,en;q=0.9,ur;q=0.8'
        ];

        $requestData =
            [
                'source_url' => '/' . $params['relativeURL'] . '/',
                'data' => json_encode($data)
            ];

        $response = $this->_httpClient->get($url, $requestData, $headers);
        if (!$response['success']) {
            return [];
        }


        if (
            !isset($response['body']->resource_response)
            || !isset($response['body']->resource_response->status) ||
            $response['body']->resource_response->status !== 'success'
        ) {
            return [];
        }
        $pins = array_map(function ($item) {
            if (!isset($item->id)) {
                return null;
            }
            return (array) ['url' => 'https://www.pinterest.com/pin/' . $item->id];
        }, $response['body']->resource_response->data);

        return array_filter($pins, function ($p) {
            return !is_null($p);
        });
    }

    private function getFlickr($params)
    {
        $response = $this->_httpClient->get('https://www.flickr.com/photos/' . $params['relativeURL']);
        $body = $response['body'];
        $regex = "/photo-list-photo-view.*background-image: url.*\.jpg/";
        $matches = [];
        preg_match_all($regex, $body, $matches);
        if (!is_array($matches)) {
            return [];
        }
        $str = implode('   ', $matches[0]);
        preg_match_all('/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/', $str, $matches);
        if (!is_array($matches)) {
            return [];
        }
        return array_map(function ($url) {
            return ['image' => $url];
        }, $matches[0]);
    }
}
