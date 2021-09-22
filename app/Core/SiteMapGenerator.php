<?php

namespace App\Core;

use App\Models\CuratedList;
use App\Models\Keyword;

class SiteMapGenerator
{
    private $urlset;
    private $frontendAppUrl;

    const TopProfileByPlatformSlug = "top-{platform-name}-{profile-type}-for-";
    const TopProfileSlug = "top-social-media-profiles-for-";
    const PLATFORM_LIST = ["instagram", "youtube", "twitter", "facebook", "flickr", "quora", "pinterest", "tiktok", "TravelMassive"];

    public function __construct()
    {
        $this->urlset = new \SimpleXMLElement('<urlset/>');
        $this->urlset->addAttribute('xml', "http://www.sitemaps.org/schemas/sitemap/0.9");
        $this->frontendAppUrl = env('FE_URL');
    }

    public function build($platform = null)
    {
        $keywords = Keyword::select('keyword')->get()->pluck('keyword');
        $this->addKeywords($keywords, $platform);
        return $this->urlset->asXML();
    }

    public function buildCuratedList()
    {
        $curaltedLigs = CuratedList::where('is_active', 1)->get();
        foreach ($curaltedLigs as $list) {
            $url = $this->urlset->addChild('url');
            $absUrl = "{$this->frontendAppUrl}/lists/{$list->seo_url}";
            $url->addChild('loc', htmlspecialchars($absUrl));
        }

        return $this->urlset->asXML();
    }

    private function addKeywords($keywords, $platform = null)
    {
        foreach ($keywords as $keyword) {
            $absUrl = $this->buildUrl($keyword, $platform);
            $url = $this->urlset->addChild('url');
            $url->addChild('loc', htmlspecialchars($absUrl));
        }
    }

    private function buildUrl($keyword, $platform = null): string
    {
        $topProfileByPlatformSlug = "top-{platform-name}-{profile-type}-for-";
        $topProfileSlug = "top-social-media-profiles-for-";

        $urlFriendlyKeyword = urlencode(str_replace(' ', '-', strtolower($keyword)));
        if ($platform === null) {
            return "{$this->frontendAppUrl}/{$topProfileSlug}{$urlFriendlyKeyword}";
        }
        $slug = str_replace("{platform-name}", $platform, $topProfileByPlatformSlug);
        $slug = str_replace("{profile-type}", $this->getProfileTypeByPlatform($platform), $slug);
        return "{$this->frontendAppUrl}/{$slug}{$urlFriendlyKeyword}";
    }

    private function getProfileTypeByPlatform($platformName)
    {
        switch ($platformName) {
            case "facebook":
                return "pages";
            case "youtube":
                return "channels";
            default:
                return "profiles";
        }
    }
}
