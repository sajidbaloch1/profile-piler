<?php

namespace App\Models\SocialEntity;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialEntity extends Model
{
    public const SOCIAL_ENTITY_COLS = ['DailyMotion', 'Facebook', 'Flickr', 'Instagram', 'LinkedIn', 'Medium', 'Pinterest', 'Quora', 'Reddit', 'Tiktok', 'TravelMassive', 'Tumblr', 'Twitter', 'Vimeo', 'Youtube', 'Website'];

    use HasFactory;
    /**
     * The database connection that should be used by the model.
     *
     * @var string
     */
    protected $connection = 'socialentities';

    public static function searchByPlatform($platform, $relativeURL)
    {
        return SocialEntity::select(self::SOCIAL_ENTITY_COLS)
            ->where(self::platformColName($platform), $relativeURL)
            ->first();
    }

    private static function platformColName($platformName)
    {
        switch (strtolower($platformName)) {
            case 'yt':
                return 'Youtube';
            case 'ig':
                return 'Instagram';
            case 'tt':
                return 'Tiktok';
            default:
                return $platformName;
        }
    }
}
