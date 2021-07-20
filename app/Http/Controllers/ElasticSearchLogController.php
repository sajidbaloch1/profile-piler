<?php

namespace App\Http\Controllers;

use App\Models\ElasticSearchLog;
use Illuminate\Http\Request;

class ElasticSearchLogController extends Controller
{
    public function index(Request $request)
    {
        $records = ElasticSearchLog::latest()->paginate(20);
        return view('search-logs.index', ['records' => $records]);
    }
}
