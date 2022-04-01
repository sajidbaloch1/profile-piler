<?php

namespace App\Http\Livewire\FailedJobs;

use App\Models\FailedJob;
use Livewire\Component;

class FailedjobTable extends Component
{
    protected $queryString = ['search'];

    public $search;

    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.failed-jobs.failedjob-table', [
            'failedJobs' => $this->loadRecords(),
        ]);
    }

    private function loadRecords()
    {
        $query = FailedJob::query();
        if (!empty($this->search)) {
            return $query = $query->where('uuid', 'like', "%$this->search%")->paginate(10);
        }
        return FailedJob::paginate(10);
    }
}
