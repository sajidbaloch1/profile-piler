<x-app-layout>
    <x-slot name="title">
        {{ __('Failed Jobs') }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item active">Failed Jobs</li>
    </x-slot>

    <livewire:failed-jobs.failedjob-table />

</x-app-layout>
