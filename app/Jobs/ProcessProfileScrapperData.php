<?php

namespace App\Jobs;

use App\Core\ElasticClient;
use App\Models\Quora\User as QuoraUser;
use App\Models\Flickr\User as FlickrUser;
use App\Models\Pinterest\User as PinterestUser;
use App\Models\TravelMassive\User as TravelMassiveUser;
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

        switch (strtolower($this->data['platform'])) {
            case "youtube":
            case "yt":
                $esDocId = $this->handleYoutube($data);
                break;
            case "quora":
                $esDocId = $this->handleQuora($data);
                break;
            case "flickr":
                $esDocId = $this->handleFlickr($data);
                break;
            case "pinterest":
                $esDocId = $this->handlePinterest($data);
                break;
            case 'travelmassive':
                $esDocId = $this->handleTravelMassive($data);
                break;
            default:
                throw new \Exception("Handler not implemented for the platform: {$this->data['platform']}", 1);
        }

        (new ElasticClient)->update($esDocId, $this->buildEsData($data, $this->data['platform']));
    }

    private function buildEsData($data, $platform)
    {
        $fieldsToRemove = [];
        $esData = $this->databaseColumnToElasticSearchMapper($data);
        switch (strtolower($platform)) {
            case "flickr":
                $fieldsToRemove = ['RealName', 'ProfileDescriptionExpanded', 'ProfileDescription', 'FirstName', 'LastName', 'NsID'];
                break;
            case 'pinterest':
                $fieldsToRemove = ['LastName', 'FirstName', 'Website', 'Country'];
                break;
            case 'travelmassive':
                $fieldsToRemove = ['JoinedAt', 'LinkedInURL', 'TwitterURL', 'InstagramURL', 'FacebookURL', 'WebsiteURL', 'YoutubeURL', 'VimeoURL', 'SnapchatURL'];
                break;
        }
        // remove any fields that should not go to ES
        if (count($fieldsToRemove) > 0)
            foreach ($fieldsToRemove as $fieldName)
                if (isset($esData[$fieldName])) unset($esData[$fieldName]);
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

    private function handleQuora($data)
    {
        $user = QuoraUser::where('UserName', $data['UserName'])->first();
        if (empty($user))
            throw new \Exception("User not found with Username {$data['UserName']}", 1);
        $user->update(
            array_merge(
                [
                    'CrawledAt' => gmdate('Y-m-d H:i:s')
                ],
                $data
            )
        );
        return "qu{$user->id}";
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

    private function handleFlickr($data)
    {
        $user = FlickrUser::where('NsID', $data['NsID'])->first();
        if (empty($user))
            throw new \Exception("User not found with NsID {$data['NsID']}", 1);
        $updateData = array_merge(
            $data,
            [
                'CrawledAt' => gmdate('Y-m-d H:i:s')
            ]
        );
        $user->update($updateData);
        return "flkr{$user->Id}";
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
            'SubscriberCount' => 'Followers',
            'Username' => 'RelativeURL',
            'Credentials' => 'Education',
            'Work' => 'Role',
            'Answers' => 'AnswersCount',
            'Questions' => 'QuestionsCount',
            'Posts' => 'PostCounts',
            'UserName' => 'RelativeURL',
            'Image' => 'ProfilePic',
            'Name' => 'RealName',
            'ProfileDescriptionExpanded' => 'Description',
            'NsID' => 'RelativeURL',
            'Country' => 'Location',
            'PinterestID' => 'UserId',
            'FullName' => 'Name',
            'PinCount' => 'PostCount',
            'ProfileViewedCount' => 'ProfileViews',
            'Approved' => 'IsVerified',
            'Picture' => 'ProfilePic',
            'FollowerCount' => 'Followers',
            'About' => 'Description',
        ];
        foreach ($map as $dbKey => $esKey) {
            if (isset($data[$dbKey])) {
                $data[$esKey] = $data[$dbKey];
                unset($data[$dbKey]);
            }
        }

        return $data;
    }


    private function handlePinterest($data)
    {
        $user = PinterestUser::where('UserName', $data['UserName'])->first();
        if (empty($user))
            throw new \Exception("User not found with UserName {$data['UserName']}", 1);
        $updateData = array_merge(
            $data,
            [
                'CrawledAt' => gmdate('Y-m-d H:i:s')
            ]
        );
        $user->update($updateData);
        return "pt{$user->id}";
    }

    private function handleTravelMassive($data)
    {
        $user = TravelMassiveUser::where('Username', $data['Username'])->first();
        if (empty($user))
            throw new \Exception("User not found with Username {$data['Username']}", 1);

        $docId = "tt{$user->id}";

        if ($data['Private']) {
            $user->delete($docId);
            (new ElasticClient)->delete($docId);
        }

        return $docId;

        $updateData = array_merge(
            $data,
            [
                'CrawledAt' => gmdate('Y-m-d H:i:s')
            ]
        );
        $user->update($updateData);
        return "tt{$user->id}";
    }
}
