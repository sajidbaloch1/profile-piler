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
}
