<?php

namespace App\Core\FeedLoaders;

class TwitterFeedLoader extends BaseFeedLoader
{

    public function get($params)
    {
        $headers  = ['authorization' => 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA'];
        $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
        $response = $this->httpClient->get($url, ['screen_name' => $params['relativeURL']], $headers);
        if (!$response['success'] || !is_array($response['body'])) {
            return [];
        }
        $tweets = $response['body'];


        return array_map(function ($twit) use ($params) {
            return [
                'id' => $twit->id_str,
                'url' =>  'https://twitter.com/' . $params['relativeURL'] . '/status/' . $twit->id_str
            ];
        }, $tweets);
    }
}
