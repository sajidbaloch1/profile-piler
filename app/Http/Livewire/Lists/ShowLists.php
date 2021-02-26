<?php

namespace App\Http\Livewire\Lists;

use App\Models\Keyword;
use Livewire\Component;
use Livewire\WithPagination;

class ShowLists extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';
    protected $queryString = ['search'];

    public $search;

    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.lists.show-lists', [
            'keywords' => $this->loadRecords(),
        ]);
    }

    private function loadRecords()
    {
        if (!empty($this->search)) {
            return Keyword::where('keyword', 'like', "%$this->search%")->paginate(10);
        }
        return Keyword::paginate(10);
    }
}
