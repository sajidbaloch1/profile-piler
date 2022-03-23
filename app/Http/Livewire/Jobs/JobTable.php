<?php

namespace App\Http\Livewire\Jobs;

use App\Http\Livewire\DataTable;
use App\Models\Job;

class JobTable extends DataTable
{
    protected $queryString = ['search'];

    public $search;

    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.jobs.job-table', [
            'jobs' => $this->loadRecords(),
        ]);
    }

    private function loadRecords()
    {
        if (!empty($this->search)) {
            return Job::where('queue', 'like', "%$this->search%")->paginate(10);
        }
        return Job::paginate(10);
    }

}
