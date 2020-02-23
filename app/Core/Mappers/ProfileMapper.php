<?php

namespace App\Core\Mappers;

class ProfileMapper
{

    public $Username;
    public $ProfilePic;
    public $Platform;
    public $Description;
    public $Followers;
    public $Id;
    public $RelativeURL;
    public $Location;
    public $Name;
    public $TweetCount;
    public $ViewsCount;
    public $Profession;
    public $EventsCount;
    public $Company;
    public $PlatformID;

    /**
     * Tiktok internal paramter
     *
     * @var string
     */
    public $SecUid;

    function __construct($profile)
    {
        $orginalDoc = $profile['_source'];
        $this->Username = isset($orginalDoc['username']) ? $orginalDoc['username'] : null;
        $this->RelativeURL = $orginalDoc['relativeurl'];
        $this->Platform = $orginalDoc['platform'];
        $this->Description = trim($orginalDoc['description']);
        $this->ProfilePic = $orginalDoc['profilepic'];
        $this->Followers = $orginalDoc['followers'];
        $this->Id = $profile['_id'];
        $this->Name = $orginalDoc['name'];
        $this->PlatformID = isset($orginalDoc['userid']) ? (string) $orginalDoc['userid'] : null;
        $this->SecUid = isset($orginalDoc['secuid']) ? (string) $orginalDoc['secuid'] : null;
        $this->IsVerified = isset($orginalDoc['isverified']) ? $orginalDoc['isverified'] : null;
        $this->Location = isset($orginalDoc['location']) ? $orginalDoc['location'] : null;
        $this->IsFamilySafe = isset($orginalDoc['isfamilysafe']) ? $orginalDoc['isfamilysafe'] : null;
        $this->TweetCount = isset($orginalDoc['statusescount']) ? $orginalDoc['statusescount'] : null;
        $this->ViewsCount = isset($orginalDoc['totalsview']) ? $orginalDoc['totalsview'] : null;
        $this->VideoCount = isset($orginalDoc['videocount']) ? $orginalDoc['videocount'] : null;
        $this->LikesCount = isset($orginalDoc['likescount']) ? $orginalDoc['likescount'] : null;
        $this->EventsCount = isset($orginalDoc['eventscount']) ? $orginalDoc['eventscount'] : null;
        $this->Profession = isset($orginalDoc['role']) ? $orginalDoc['role'] : null;
        $this->Company = isset($orginalDoc['company']) ? $orginalDoc['company'] : null;
        $this->PostCount = isset($orginalDoc['postcount']) ? $orginalDoc['postcount'] : null;
        $this->Category = isset($orginalDoc['category']) ? $orginalDoc['category'] : null;


        $this->City = isset($orginalDoc['city']) ? $orginalDoc['city'] : null;
        $this->PhotosCount = isset($orginalDoc['photoscount']) ? $orginalDoc['photoscount'] : null;
        $this->PhotoViewsCount = isset($orginalDoc['photoviewscount']) ? $orginalDoc['photoviewscount'] : null;
        $this->GeoTags = isset($orginalDoc['tags']) ? $orginalDoc['tags'] : null;
        $this->FavoritesCount = isset($orginalDoc['favorites']) ? $orginalDoc['favorites'] : null;


        $this->QuestionsCount = isset($orginalDoc['questionscount']) ? $orginalDoc['questionscount'] : null;
        $this->AnswersCount = isset($orginalDoc['answerscount']) ? $orginalDoc['answerscount'] : null;
        $this->Education = isset($orginalDoc['education']) ? $orginalDoc['education'] : null;

        $this->CheckinsCount = isset($orginalDoc['checkinscount']) ? $orginalDoc['checkinscount'] : null;
        $this->Rating = isset($orginalDoc['rating']) ? $orginalDoc['rating'] : null;
    }
}
