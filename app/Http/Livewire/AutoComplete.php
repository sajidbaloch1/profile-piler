<?php

namespace App\Http\Livewire;

use Livewire\Component;

class AutoComplete extends Component
{
    public $search;

    public function mount()
    {
        $this->search = '';
    }

    public function render()
    {
        return view('livewire.auto-complete');
    }
}
