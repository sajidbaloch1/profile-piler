<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    //

    public static function loadByCategory()
    {
        /**
         * First Load all distinct categories
         */
        $categories = Keyword::groupBy('category')->select('category')->get()->pluck('category');

        $groupedResults = [];
        foreach ($categories as $c) {
            $cName = $c;
            if (is_null($c)) {
                $cName = 'General';
                continue;
            }
            $groupedResults[] = [
                'category' => $cName,
                'keywords' => Keyword::where('category', $c)->select('keyword', 'resultsCount')->where('resultsCount', '>', 0)->orderBy('resultsCount', 'desc')->get()
            ];
        }

        return $groupedResults;
    }

    public static function getKeywords($startWith = null)
    {
        $query = Keyword::where('category', null)
            ->select('keyword', 'resultsCount')
            ->where('resultsCount', '>', 0)
            ->orderBy('resultsCount', 'desc');
        // ->get();
        if (!empty($startWith)) {
            $query = $query->where('keyword', 'like', $startWith . '%');
        } else {
            $query = $query->limit(200);
        }
        return $query->get();
    }
}
