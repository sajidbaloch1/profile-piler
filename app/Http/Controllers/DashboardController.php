<?php

namespace App\Http\Controllers;

use App\Models\ElasticSearchLog;
use App\Models\FailedJob;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $faildJobsCount = FailedJob::where('failed_at', '>', date('Y-m-d', strtotime('-7 days')))->count();
        $jobsCount = Job::count();
        return view('dashboard', [
            "faild_jobs_count" => $faildJobsCount,
            "jobs_count" => $jobsCount
        ]);
    }

    public function getElasticSearchLogs()
    {
        $elasticSearch = ElasticSearchLog::select('query_time_ms', 'created_at')
            ->where('created_at', '>=', date('Y-m-d', strtotime('-7 days')))
            ->get()->map(function ($e) {
                return [
                    "created_at" => date('Y-m-d', strtotime($e->created_at)),
                    "query_ms" => $e->query_time_ms
                ];
            })->collect()->sortBy('created_at')->groupBy('created_at');
        $fAvgQueryMs = [];
        foreach ($elasticSearch as $k => $e) {
            $avgQueryMs = $e->map(function ($v) {
                return $v['query_ms']++;
            });
            $fAvgQueryMs[] = [
                "label" => date('M d', strtotime($k)),
                "value" => number_format($avgQueryMs->collect()->avg(), 2)
            ];
        };
        return $fAvgQueryMs;
    }
}
