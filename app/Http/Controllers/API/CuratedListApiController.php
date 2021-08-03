<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CuratedListCollection;
use App\Http\Resources\CuratedListResource;
use App\Models\CuratedList;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class CuratedListApiController extends Controller
{
    public function index(Request $request)
    {
        $listQuery = CuratedList::with('profiles', 'tags')
            ->where('is_active', true);
        if ($request->filled('tag')) {
            $listQuery = $listQuery->whereHas('tags', function (Builder $query) use ($request) {
                $query->where('name', $request->get('tag'));
            });
        }
        $lists = $listQuery->paginate();
        return new CuratedListCollection($lists);
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
