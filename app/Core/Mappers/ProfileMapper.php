<?php

namespace App\Core\Mappers;

class ProfileMapper
{

    public $Username;
    public $ProfilePic;
    public $Platform;
    public $Description;
    public $ShortDescription;
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

    private function getValue($key, $record)
    {
        return isset($record[$key]) ? $record[$key] : null;
    }

    function __construct($profile)
    {
        $orginalDoc = $profile['_source'];
        $this->Username = $this->getValue('username', $orginalDoc);
        $this->RelativeURL = $this->getValue('relativeurl', $orginalDoc);
        $this->Platform = $this->getValue('platform', $orginalDoc);
        $this->Description = $this->getValue('description', $orginalDoc);

        $this->ProfilePic = $this->getValue('profilepic', $orginalDoc);
        $this->Followers = $this->getValue('followers', $orginalDoc);
        $this->Id = $profile['_id'];
        $this->Name = $this->getValue('name', $orginalDoc);
        $this->PlatformID = $this->getValue('userid', $orginalDoc);
        $this->SecUid = $this->getValue('secuid', $orginalDoc);
        $this->IsVerified = $this->getValue('isverified', $orginalDoc);
        $this->Location = $this->getValue('location', $orginalDoc);
        $this->IsFamilySafe = $this->getValue('isfamilysafe', $orginalDoc);
        $this->TweetCount = $this->getValue('statusescount', $orginalDoc);
        $this->ViewsCount = $this->getValue('totalsview', $orginalDoc);
        $this->VideoCount = $this->getValue('videocount', $orginalDoc);
        $this->LikesCount = $this->getValue('likescount', $orginalDoc);
        $this->EventsCount = $this->getValue('eventscount', $orginalDoc);
        $this->Profession = $this->getValue('role', $orginalDoc);
        $this->Company = $this->getValue('company', $orginalDoc);
        $this->PostCount = $this->getValue('postcount', $orginalDoc);
        $this->Category = $this->getValue('category', $orginalDoc);
        $this->UpdatedAt = $this->getValue('crawledat', $orginalDoc);

        $this->City = $this->getValue('city', $orginalDoc);
        $this->PhotosCount = $this->getValue('photoscount', $orginalDoc);
        $this->PhotoViewsCount = $this->getValue('photoviewscount', $orginalDoc);
        $this->GeoTags = $this->getValue('tags', $orginalDoc);
        $this->FavoritesCount = $this->getValue('favorites', $orginalDoc);


        $this->QuestionsCount = $this->getValue('questionscount', $orginalDoc);
        $this->AnswersCount = $this->getValue('answerscount', $orginalDoc);
        $this->Education = $this->getValue('education', $orginalDoc);

        $this->CheckinsCount = $this->getValue('checkinscount', $orginalDoc);
        $this->Rating = $this->getValue('rating', $orginalDoc);
    }
}
