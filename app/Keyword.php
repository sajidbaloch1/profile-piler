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
                'keywords' => Keyword::where('category', $c)->select('keyword', 'resultsCount')->get()
            ];
        }

        return $groupedResults;
    }
}
