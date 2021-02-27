<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Keyword;

class KeywordApiController extends Controller
{
    public function index(Request $request)
    {
        $content = ['payload' => Keyword::loadByCategory($request->get('source'))];
        return response($content)->withHeaders([
            'Cache-Control' => 'max-age=' . (24 * 60 * 60)
        ]);
    }

    public function keywords(Request $request)
    {
        $content = ['payload' => Keyword::getKeywords($request->get('startWith'))];
        return response($content)->withHeaders([
            'Cache-Control' => 'max-age=' . (24 * 60 * 60)
        ]);
    }
}
