<?php

namespace App\Http\Controllers;

use App\Core\SiteMapGenerator;
use App\Models\Keyword;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index()
    {
        Header('Content-type: text/xml');
        print((new SiteMapGenerator)->build());
        exit;
    }
}
