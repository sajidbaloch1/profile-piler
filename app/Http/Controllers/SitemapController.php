<?php

namespace App\Http\Controllers;

use App\Core\SiteMapGenerator;

class SitemapController extends Controller
{
    public function index($platform = null)
    {
        $fileName = empty($platform) ? 'sitemap-keywords' : "sitemap-{$platform}";
        return response()->streamDownload(function () use ($platform) {
            echo (new SiteMapGenerator)->build($platform);
        }, "$fileName.xml");
    }

    public function curatedList()
    {
        return response()->streamDownload(function () {
            echo (new SiteMapGenerator)->buildCuratedList();
        }, 'curated-list.xml');
    }
}
