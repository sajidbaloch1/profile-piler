<x-app-layout>
    <x-slot name="title">
        {{ __('Jobs') }}
    </x-slot>
    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item active">Jobs</li>
    </x-slot>
    <livewire:jobs.job-table />
</x-app-layout>
