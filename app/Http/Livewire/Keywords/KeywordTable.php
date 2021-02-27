<?php

namespace App\Http\Livewire\Keywords;

use App\Http\Livewire\DataTable;
use App\Models\Keyword;

class KeywordTable extends DataTable
{
    protected $queryString = ['search'];

    public $search;

    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.keywords.keyword-table', [
            'keywords' => $this->loadRecords(),
        ]);
    }

    private function loadRecords()
    {
        // sleep(4);
        if (!empty($this->search)) {
            return Keyword::where('keyword', 'like', "%$this->search%")->paginate(10);
        }
        return Keyword::paginate(10);
    }
}
