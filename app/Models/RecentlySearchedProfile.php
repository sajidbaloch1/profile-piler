<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecentlySearchedProfile extends Model
{
    public static function addBulk(array $profiles)
    {
        $records = array_map(function (\App\Core\Mappers\ProfileMapper $profile): array {
            return [
                'profileId' => $profile->Id,
                'platform' => $profile->Platform
            ];
        }, $profiles);

        self::insertOrIgnore($records);
    }
}
