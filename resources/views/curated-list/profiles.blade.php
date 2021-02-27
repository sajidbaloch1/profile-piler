<x-app-layout>
    <x-slot name="title">
        {{ $list->title }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item"><a href="{{ route('curated-lists.index') }}">
                {{ __('Curated Lists') }}</a>
        </li>
    </x-slot>

    <x-card>
        <x-slot name="title">
        </x-slot>

        <x-validation-error></x-validation-error>

        <x-profile-item></x-profile-item>
        <x-profile-item></x-profile-item>
        <x-profile-item></x-profile-item>
        <x-profile-item></x-profile-item>
        <x-slot name="footer">
            <button onclick="document.getElementById('create-tag-form').submit()" type="submit"
                class="btn btn-flat btn-primary">Update</button>
            <a href="{{ route('tags.index') }}" class="btn btn-flat btn-secondary">Cancel</a>

        </x-slot>
    </x-card>
</x-app-layout>
