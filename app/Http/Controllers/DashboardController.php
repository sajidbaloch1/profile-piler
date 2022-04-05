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
        $elasticSearch = ElasticSearchLog::select(DB::raw('AVG(query_time_ms) as value , created_at as label'))
            ->where('created_at', '>=', date('Y-m-d', strtotime('-7 days')))
            ->groupBy(DB::raw('CAST(created_at AS DATE)'))
            ->get()
            ->map(function ($e) {
                return [
                    "label" => date('M d', strtotime($e->label)),
                    "value" => $e->value
                ];
            });
        return $elasticSearch;
    }
}
