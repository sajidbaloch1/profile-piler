<?php

namespace App\Models\Pinterest;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = 'pinterest_db';
    public $timestamps = false;
    protected $guarded = ['id', 'SocialEntityId'];
}
