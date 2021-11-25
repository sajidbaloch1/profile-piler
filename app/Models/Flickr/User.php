<?php

namespace App\Models\Flickr;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = 'flickr_db';
    public $timestamps = false;
    protected $primaryKey = 'Id';
    protected $guarded = [];
}
