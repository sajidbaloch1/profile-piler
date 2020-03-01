<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KeywordController extends Controller
{
    //
    public function index(Request $request)
    {
        $content = ['payload' => \App\Keyword::loadByCategory($request->get('source'))];
        return response($content)->withHeaders([
            'Cache-Control' => 'max-age=' . (24 * 60 * 60)
        ]);
    }

    public function keywords(Request $request)
    {
        $content = ['payload' => \App\Keyword::getKeywords($request->get('startWith'))];
        return response($content)->withHeaders([
            'Cache-Control' => 'max-age=' . (24 * 60 * 60)
        ]);
    }
}
