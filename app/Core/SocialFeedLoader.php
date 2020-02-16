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
