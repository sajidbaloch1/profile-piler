<x-app-layout>
    <x-slot name="title">
        {{ __('Create Tag') }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item"><a href="{{ route('tags.index') }}">{{ __('Tags') }}</a></li>
    </x-slot>

    <x-card>
        <x-slot name="title">
        </x-slot>

        <x-validation-error></x-validation-error>

        <form id="create-tag-form" action="{{ route('tags.store') }}" method="Post">
            @csrf
            <div class="form-group">
                <label for="tag-name">Name</label>
                <input name="name" type="text" class="form-control" id="tag-name" placeholder="Name"
                    value="{{ old('name') }}">
            </div>
        </form>

        <x-slot name="footer">
            <button onclick="document.getElementById('create-tag-form').submit()" type="submit"
                class="btn btn-flat btn-primary">Create</button>
            <a href="{{ route('tags.index') }}" class="btn btn-flat btn-secondary">Cancel</a>

        </x-slot>
    </x-card>
</x-app-layout>
