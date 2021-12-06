<?php

namespace App\Models\TravelMassive;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = 'travelmassive_db';
    public $timestamps = false;

    protected $guarded = ['id', 'SocialEntityId'];
}
