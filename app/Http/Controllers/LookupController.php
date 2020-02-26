<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class LookupController extends Controller
{
    //
    public function index(Request $request)
    {
        $fileName = $request->get('fileName');
        $absPath = resource_path() . '/lookup-files/' . $fileName;
        $q = strtolower($request->get('q'));
        $content = json_decode(file_get_contents($absPath));

        $filtered = Arr::where($content->items, function ($item) use ($q) {
            $first = Arr::first(explode(' ', $item->text), function ($value) use ($q) {
                $start = substr($value, 0, strlen($q));
                return  strtolower($start) === $q;
            });
            return !empty($first);
        });

        $finalResults = Arr::pluck($filtered, 'text');
        return array_splice($finalResults, 0, 20);
    }
}
