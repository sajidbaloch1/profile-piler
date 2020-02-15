<?php

namespace App\Core\FeedLoaders;

class TikTokFeedLoader extends BaseFeedLoader
{

    public function get($params)
    {
        $userId = $this->getUserId($params);
        if (!is_null($userId)) {
            $params['userId'] = $userId;
        }

        return $this->getFeed($params);
    }

    private function getUserId($params)
    {
        $url = 'https://www.tiktok.com/@' . $params['relativeURL'];
        $response = $this->httpClient->get($url);
        // $response = file_get_contents('tiktok.html');
        $userIdIdx = strpos($response['body'], '"userId":"');
        $userIDStr = substr($response['body'], $userIdIdx, 21 + 10);
        $regex = "/\d+/";
        $matches = [];
        preg_match($regex, $userIDStr, $matches);
        // echo json_encode([$userIdIdx, $userIDStr, $matches[0]]);
        // exit;
        if (!empty($matches) && count($matches) > 0) {
            return $matches[0];
        }
        return null;
    }

    private function getFeed($params)
    {
        $headers = [
            'referer' => 'https://www.tiktok.com/',
            "set-cookie" =>
            "bm_sv=E522A85996E7199DDBA92AF694512055~8uhoBYFYLd40tEn2C8cUPtIe4lIefq+aUK+8YTIysUvcSEVC1EBVmjZELccYQuwtDcwdAp87T9//cVcHETMv1ntqp/057y9DQeF5yFiFDg+Tw3ZMVoted0/YU5OAoG4JF1Taco1fPZzlw2CO8HsuiZ9gz2rQ15h+RXqlxi4M5O0=; Domain=.tiktok.com; Path=/; Max-Age=5504; HttpOnly"
        ];

        $requestParameters = [
            'secUid' => $params['secUid'],
            'id' => $params['userId'],
            'type' => '1',
            'count' => '30',
            'minCursor' => '0',
            'maxCursor' => '0',
            'shareUid' => '',
            'lang' => '',
            // '_signature' => '3J4a7gAgEBYwomHcvj3WftyeG.AAILg',
        ];

        $response = $this->httpClient->get('https://www.tiktok.com/share/item/list', $requestParameters, $headers);
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
                'image' => $this->extractTiktokImg($item),
                'time' => $item->itemInfos->createTime,
                'text' => $item->itemInfos->text
            ];
        }, $resposneObj->body->itemListData);
    }

    private function extractTiktokImg($item)
    {
        $url = '';
        if (!empty($item->itemInfos->coversDynamic[0])) {
            $url = $item->itemInfos->coversDynamic[0];
        } else if (!empty($item->itemInfos->covers[0])) {
            $url = $item->itemInfos->covers[0];
        } else if (!empty($item->itemInfos->coversOrigin[0])) {
            $url = $item->itemInfos->coversOrigin[0];
        }
        return $url;
    }
}
