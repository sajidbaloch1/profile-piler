<?php

namespace App\Jobs;

use App\Core\ScrapperQueueService;
use App\Models\ElasticSearchLog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessElasticSearchLog implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $params;
    private $response;
    private $searchedProfiles;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($params, $response)
    {
        $this->searchedProfiles = array_map(function ($profile) {
            return [
                'profileId' => $profile['_id'],
                'relativeurl' => $profile['_source']['relativeurl'],
                'platform' => $profile['_source']['platform'],
                'crawledat' => isset($profile['_source']['crawledat']) ? $profile['_source']['crawledat'] : null
            ];
        }, $response['hits']['hits']);

        $this->params = $params;
        unset($response['hits']['hits']);
        $this->response = $response;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!isset($this->response['took'])) {
            $this->fail(new \Exception(json_encode($this->response)));
            return;
        }

        $log = new ElasticSearchLog();
        $log->query = json_encode($this->params);
        $log->query_time_ms  = $this->response['took'];

        $log->timed_out  = $this->response['timed_out'];
        $log->failed_shareds_count = $this->response['_shards']['failed'];
        $log->skipped_shared_count = $this->response['_shards']['skipped'];
        $log->total_hits = $this->response['hits']['total']['value'];

        $log->save();

        $queues = $this->buildQueues();
        ScrapperQueueService::getInstance()->queue($queues);
    }

    private function buildQueues()
    {
        $recrawledAfter = strtotime('now') - (60 * 60 * 24 * 7);
        $profilesToUpdate = array_values(array_filter($this->searchedProfiles, function ($profile) use ($recrawledAfter) {
            $platformScrapperSupported = in_array(strtolower($profile['platform']), ScrapperQueueService::SUPPORTED_PLATFORMS);
            $profile['crawledat'] = empty($profile['crawledat']) ? date('Y-m-d', strtotime('-70 years')) : $profile['crawledat'];
            return strtotime($profile['crawledat']) < $recrawledAfter && $platformScrapperSupported;
        }));


        $queues = array_map(function ($profile) {
            return [
                "Status" => "PENDING",
                "Url" => "https://www.{$profile['platform']}.com/{$profile['relativeurl']}",
                "Handler" => "profile-piler",
                "Tag" => http_build_query([
                    'platform' => $profile['platform'],
                    'relativeUrl' => $profile['relativeurl']
                ]),
                // 'Type' => ScrapperQueueService::QUEUE_TYPE_UNIQUE
            ];
        }, $profilesToUpdate);
        return $queues;
    }
}
