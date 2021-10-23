<?php

namespace App\Models\Quora;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = 'quora_db';
    public $timestamps = false;

    protected $fillable = [
        'UserName',
        'Name',
        'ProfilePic',
        'Title',
        'Description',
        'Credentials',
        'Work',
        'Location',
        'Answers',
        'Questions',
        'Shares',
        'Posts',
        'Followers',
        'Following',
        'CrawledAt',
        'SocialEntityId',
    ];
}
