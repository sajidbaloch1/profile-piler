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
                $response = $this->getTiktokFeed($params);
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

    private function getTiktokFeed($params)
    {
        $headers = [
            "set-cookie" =>
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
        ];

        $requestParameters = [
            'secUid' => 'MS4wLjABAAAA6ZYh69jdlOR_qs2U1D2R9s2KW7uoMJ4X60oCY_YfZZUcBpVLbn2y7DWa92jZI8tw',
            'id' => '6592113607433093125',
            'type' => '1',
            'count' => '30',
            'minCursor' => '0',
            'maxCursor' => '0',
            'shareUid' => ' ',
            'lang' => ' ',
            '_signature' => '3J4a7gAgEBYwomHcvj3WftyeG.AAILg',
        ];

        $response = $this->_httpClient->get('https://www.tiktok.com/share/item/list', $requestParameters, $headers);
        if (!$response['success']) {
            return [];
        }

        $resposneObj = $response['body'];
        if ($resposneObj === FALSE || !isset($resposneObj->body) || !isset($resposneObj->body->itemListData)) {
            return [];
        }

        return array_map(function ($item) {
            return [
                'url' => 'https://www.tiktok.com/@' . $item->authorInfos->uniqueId . '/video/' . $item->itemInfos->id,
                'image' => $item->itemInfos->coversDynamic[0],
                'time' => $item->itemInfos->createTime,
                'text' => $item->itemInfos->text
            ];
        }, $resposneObj->body->itemListData);
    }
}
