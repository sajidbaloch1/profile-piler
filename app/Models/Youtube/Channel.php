<?php

namespace App\Models\Youtube;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $connection = 'youtube_db';
}
