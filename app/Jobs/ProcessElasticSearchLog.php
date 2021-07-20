<?php

namespace App\Jobs;

use App\Models\ElasticSearchLog;
use App\Models\RecentlySearchedProfile;
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
                'platform' => $profile['_source']['platform']
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


        RecentlySearchedProfile::insertOrIgnore($this->searchedProfiles);
    }
}
