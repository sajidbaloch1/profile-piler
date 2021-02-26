<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CuratedListController extends Controller
{
    public function index()
    {
        return view('curated-list.index');
    }
}
