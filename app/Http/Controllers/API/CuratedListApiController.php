<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CuratedListCollection;
use App\Http\Resources\CuratedListResource;
use App\Models\CuratedList;
use Illuminate\Http\Request;

class CuratedListApiController extends Controller
{
    public function index(Request $request)
    {
        $list = CuratedList::with('profiles', 'tags')
            ->where('is_active', true)
            ->paginate(2);
        return new CuratedListCollection($list);
    }

    public function show($seo_url)
    {
        $list = CuratedList::with('profiles', 'tags')
            ->where("seo_url", $seo_url)
            ->where('is_active', true)
            ->first();

        if (!$list) {
            return [
                'success' => false,
                'error' => "List not found in our records"
            ];
        }
        return new CuratedListResource($list);
    }
}
