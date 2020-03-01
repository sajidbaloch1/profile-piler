<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientError extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
    protected $fillable = ['stackTrace', 'message', 'location', 'browserInfo', 'ip'];
}
