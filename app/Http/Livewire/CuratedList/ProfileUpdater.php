<?php

namespace App\Http\Livewire\CuratedList;

use App\Features\Profile\ProfileSearcher;
use Livewire\Component;

class ProfileUpdater extends Component
{
    public $keyword;
    private $profiles;
    private $selectedProfiles;
    protected $queryString = ['keyword'];

    public function mount()
    {
        $this->keyword = '';
        $this->profiles = collect([]);
        $this->selectedProfiles = collect([]);
    }

    public function render()
    {
        return view(
            'livewire.curated-list.profile-updater',
            [
                'profiles' => $this->profiles,
                'selectedProfiles' => [],
            ]
        );
    }

    public function searchProfiles()
    {
        $params = [
            "q" => $this->keyword
        ];

        $searchRs = (new ProfileSearcher($params))->load();

        $this->profiles = collect($searchRs['profiles']);
    }

    public function removeProfile($idx)
    {
        if (isset($this->profiles[$idx])) {
            $this->selectedProfiles[] = $this->profiles->pop();
        }
    }
}
