<?php

namespace App\Features;

use Illuminate\Support\Facades\Cache;

class PlatformStatsRequest
{
    public function get()
    {
        $value = Cache::get('platform-stats');
        if (!empty($value)) {
            return json_decode($value);
        }
        $value = $this->getStats();
        /**
         * set in the cache for one day i.e 24 hours
         */
        Cache::put('platform-stats', json_encode($value), (60 * 60 * 24));
        return $value;
    }

    private function getStats()
    {
        $platformNames = [
            'Instagram', 'Youtube', 'Twitter', 'Facebook', 'Flickr', 'Quora', 'Pinterest', 'Tiktok', 'TravelMassive',
        ];

        $platforms = [];
        foreach ($platformNames as $platform) {
            $query = (new \App\Features\ElasticQueryBuilder)->build(['platforms' => $platform], false);
            $response = (new \App\Core\ElasticClient)->count($query);
            if (isset($response['count'])) {
                $platforms[] = [
                    'name' => $platform,
                    'count' => $response['count']
                ];
            }
        }
        return $platforms;
    }
}
