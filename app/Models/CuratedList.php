<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CuratedList extends BaseModel
{
    use HasFactory;

    /**
     * The roles that belong to the user.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function listTags()
    {
        return $this->hasMany(CuratedListTag::class);
    }

    public function profiles()
    {
        return $this->hasMany(CuratedListProfile::class);
    }
}
