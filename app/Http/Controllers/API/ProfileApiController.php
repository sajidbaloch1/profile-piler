<?php

namespace App\Http\Controllers\API;

use App\Core\ElasticClient;
use App\Features\PlatformStatsRequest;
use App\Features\Profile\ProfileSearcher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\ContactUs;
use App\Modules\Profiles\ProfileSearch;
use Illuminate\Support\Facades\Mail;

class ProfileApiController extends Controller
{
    public function index(Request $request)
    {
        try {
            $mappedResponse = (new ProfileSearcher($request->all()))->load();
            $cacheTime = 60 * 24 * 60;
            return response()->json($mappedResponse)
                ->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function get($platform, $relativeURL)
    {
        try {
            $profile = (new ProfileSearch)->get($platform, $relativeURL);
            if (empty($profile)) {
                throw new \Exception("Profile Not Found");
            }
            $cacheTime = 60 * 24 * 60;
            $mappedResponse = ['success' => true, 'payload' => $profile];
            return response()
                ->json($mappedResponse)
                ->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        } catch (\Exception $ex) {
            return ['success' => false, "errors" => [$ex->getMessage()]];
        }
    }

    public function count(Request $request)
    {
        $query = (new \App\Features\ElasticQueryBuilder)->build($request->all(), false);
        $response = (new ElasticClient)->count($query);
        if (isset($response['count'])) {
            $cacheTime = 60 * 24 * 60;
            $respose = ['success' => true, 'count' => $response['count']];
            return response($respose)->withHeaders(['Cache-Control' => "max-age=$cacheTime, public"]);
        }

        return ['success' => false];
    }

    public function platformStats()
    {
        $respose = (new PlatformStatsRequest)->get();
        return response($respose)->withHeaders(['Cache-Control' => "max-age=1000, public"]);
    }

    public function autoComplete(Request $request)
    {
        return (new \App\Core\AutoCompleteRequest)->get($request->all());
    }

    public function contactUs(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'subject' => 'required|max:255',
            'message' => 'required',
        ]);
        Mail::to('naveed@octraves.com')->send(new ContactUs($request->all()));
        return ['success' => true];
    }
}
