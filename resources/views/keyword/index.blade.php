<x-app-layout>
    <x-slot name="title">
        {{ __('Keywords') }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item active">Keywords</li>
    </x-slot>

    <livewire:keywords.keyword-table />

</x-app-layout>
