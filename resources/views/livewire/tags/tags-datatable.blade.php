<x-card>
    <x-slot name="title">
        <a href="{{ route('tags.create') }}" class="btn btn-flat btn-primary">{{ __('Add New') }}</a>
    </x-slot>

    <x-slot name="tools">
        <div class="input-group input-group-sm" style="width: 200px;">
            <input wire:model="search" type="text" name="table_search" class="form-control float-right"
                placeholder="Search Keywords">

            <div class="input-group-append" wire:loading>
                <i class="fas fa-search"></i>
            </div>
        </div>
    </x-slot>
    <table class="table">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>

        @foreach ($tags as $tag)
            <tr>
                <td>
                    {{ $tag->id }}
                </td>
                <td>
                    {{ $tag->name }}
                </td>
                <td>
                </td>
            </tr>
        @endforeach
    </table>
    <x-slot name="footer">
        {{ $tags->links() }}
    </x-slot>
</x-card>
