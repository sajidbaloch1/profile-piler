<?php

namespace App\Models\Youtube;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $connection = 'youtube_db';
    protected $fillable = [
        'Username',
        'Title',
        'Thumbnail',
        'Banner',
        'Keywords',
        'IsFamilySafe',
        'FacebookProfileId',
        'Description',
        'VideoCount',
        'SubscriberCount',
        'IsVerified',
        'TotalsView',
        'JoinedAt',
        'Location',
        'DiscovedAt',
        'CrawledAt',
        'HttpErrorCode',
        'SocialEntityProcessedCode',
        'SocialEntityId',
        'Recrawl'
    ];
}
