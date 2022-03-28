<?php

namespace App\Http\Livewire\FailedJobs;

use App\Models\FailedJob;
use Illuminate\Auth\Events\Failed;
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
        return view('livewire.failed-jobs.failedjob-table',[
            'failedJobs' => $this->loadRecords()
        ]);
    }

    private function loadRecords(){
      if(!empty($this->search)){
          return FailedJob::where('uuid','like',"%$this->search%")->paginate(10);
      }
      return FailedJob::paginate(10);
    }
}
