<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CuratedListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $profiles = $this->profiles->map(function ($p) {
            return json_decode($p->profile_json);
        });

        return [
            'title' => $this->title,
            'description' => $this->description,
            'subTitle' => $this->sub_heading,
            'profiles' => $profiles,
            'slug' => $this->seo_url,
            'tags' => $this->tags->map(function ($tag) {
                return $tag->name;
            })
        ];
    }
}
