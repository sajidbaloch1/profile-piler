<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KeywordController extends Controller
{
    //

    public function index(Request $request)
    {
        // return [];
        return ['payload' => \App\Keyword::loadByCategory()];
    }
}
