<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CuratedList;
use App\Models\CuratedListProfile;
use Illuminate\Http\Request;

class CuratedListApiController extends Controller
{
    public function index($seo_url)
    {
        $list = CuratedList::with('profiles')
            ->where("seo_url", $seo_url)
            ->where('is_active', true)
            ->first();

        if (!$list) {
            return [
                'success' => false,
                'error' => "List not found in our records"
            ];
        }

        $profiles = $list->profiles->map(function ($p) {
            return json_decode($p->profile_json);
        });

        $list = [
            'title' => $list->title,
            'description' => $list->description,
            'subTitle' => $list->sub_heading,
            'profiles' => $profiles
        ];

        return [
            'success' => true,
            'list' => $list
        ];
    }

}
