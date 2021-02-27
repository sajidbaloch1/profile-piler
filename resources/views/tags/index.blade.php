<x-app-layout>
    <x-slot name="title">
        {{ __('Tags') }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
    </x-slot>

    <livewire:tags.tags-datatable></livewire:tags.tags-datatable>

</x-app-layout>
