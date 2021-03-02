<?php

namespace App\Features\CuratedList;

use App\Models\CuratedListProfile;

class UpdateCuratedListProfile
{
    private $profilesCol;
    private $listId;

    public function __construct($listId, $profiles)
    {
        $this->profilesCol = collect($profiles);
        $this->listId = $listId;
    }

    public function execute()
    {
        CuratedListProfile::where('curated_list_id', $this->listId)->delete();
        $listId = $this->listId;

        foreach ($this->profilesCol as $np) {
            $newProfile = new CuratedListProfile();
            $newProfile->curated_list_id =  $listId;
            $newProfile->profile_id =  $np['Id'];
            $newProfile->profile_json =  json_encode($np);
            $newProfile->save();
        }
    }
}
