<?php

namespace App\Jobs;

use App\Core\ElasticClient;
use App\Models\Youtube\Channel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessProfileScrapperData implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    // TODO: reset to 3
    public $tries = 1;
    public $backoff = 10 * 60; // wait 10 mins before retrying failed job

    private $data;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = $this->removeEmptyValues($this->data['data']);
        $esDocId = null;

        switch ($this->data['platform']) {
            case "youtube":
                $esDocId = $this->handleYoutube($data);
                break;
            default:
                throw new \Exception("Handler not implemented for the platform: {$this->data['platform']}", 1);
        }

        (new ElasticClient)->update($esDocId, $this->buildEsData($data));
    }

    private function buildEsData($data)
    {
        $esData = $this->databaseColumnToElasticSearchMapper($data);
        return $this->toSmallCaseKeys(array_merge($esData, ['crawledat' => gmdate('Y-m-d\TH:i:s')]));
    }

    private function toSmallCaseKeys($data)
    {
        $newData = [];
        foreach ($data as $key => $value) {
            $newData[strtolower($key)] = $value;
        }
        return $newData;
    }
    private function handleYoutube($data)
    {
        $channel = Channel::where('ChannelId', $data['ChannelId'])->first();

        if (empty($channel))
            throw new \Exception("Channel not found with ChannelId {$data['ChannelId']}", 1);

        $channel->update(
            array_merge(
                [
                    'CrawledAt' => gmdate('Y-m-d H:i:s')
                ],
                $data
            )
        );
        return "yt{$channel->id}";
    }

    private function removeEmptyValues($data)
    {
        $newData = [];
        foreach ($data as $key => $value) {
            if (!empty($value)) {
                $newData[$key] = $value;
            }
        }
        return $newData;
    }

    private function databaseColumnToElasticSearchMapper($data)
    {
        $map = [
            'Title' => 'Name',
            'ChannelId' => 'RelativeURL',
            'Thumbnail' => 'ProfilePic',
            'SubscriberCount' => 'Followers'
        ];
        foreach ($map as $dbKey => $esKey) {
            if (isset($data[$dbKey])) {
                $data[$esKey] = $data[$dbKey];
                unset($data[$dbKey]);
            }
        }
        return $data;
    }
}
