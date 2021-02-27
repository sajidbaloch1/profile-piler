<?php

namespace App\Http\Livewire\Tags;

use App\Http\Livewire\DataTable;
use App\Models\Tag;

class TagsDatatable extends DataTable
{
    public $search;
    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.tags.tags-datatable', ['tags' => $this->getData()]);
    }

    private function getData()
    {
        if (!empty($this->search)) {
            return Tag::where('name', 'like', "%$this->search%")->paginate(10);
        }
        return Tag::paginate(10);
    }
}
