<?php

namespace App\Http\Livewire\CuratedList;

use App\Http\Livewire\DataTable;
use App\Models\CuratedList;

class CuratedListTable extends DataTable
{
    protected $queryString = ['search', 'tag'];

    public $search;
    public $tag;

    public function mount()
    {
        $this->search = '';
        $this->tag = '';
    }

    public function render()
    {
        return view('livewire.curated-list.curated-list-table', [
            'curatedLists' => $this->loadRecords(),
        ]);
    }

    private function loadRecords()
    {
        $query = CuratedList::orderBy("id");
        if (!empty($this->search)) {
            $query = $query->where('title', 'like', "%$this->search%");
        }

        if (!empty($this->tag)) {
            $tag = $this->tag;
            $query = $query->whereHas('tags', function ($subQuery) use ($tag) {
                $subQuery->where("tag_id", $tag);
            });
        }

        return $query->paginate(10);
    }

    public function toogleActive($curatedListId)
    {
        $listItem = CuratedList::find($curatedListId);
        $listItem->is_active = !$listItem->is_active;
        $listItem->save();
    }

    public function udpateTagFilter($tagId)
    {
        $this->tag = $tagId;
    }

    public function getHasActiveFiltersProperty()
    {
        return !empty($this->tag) || !empty($this->search);
    }

    public function clearFilters()
    {
        $this->search = '';
        $this->tag = '';
    }
}
