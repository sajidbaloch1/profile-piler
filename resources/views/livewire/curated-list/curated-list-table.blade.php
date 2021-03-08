<x-card>
    <x-slot name="title">
        <a class="btn btn-flat btn-primary" href="{{ route('curated-lists.create') }}"> {{ __('Add new') }} </a>
        @if ($this->hasActiveFilters)
            <button class="btn btn-flat btn-xs btn-secondary" wire:click="clearFilters()">Clear Filters</button>
        @endif
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
            <th>Title</th>
            <th>Sub Heading</th>
            <th>Is Active</th>
            <th>Tags</th>
            <th></th>
        </tr>

        @foreach ($curatedLists as $list)
            <tr>
                <td>
                    {{ $list->id }}
                </td>
                <td>
                    {{ $list->title }}
                </td>
                <td>
                    {{ $list->sub_heading }}
                </td>
                <td>
                    <input wire:click="toogleActive({{ $list->id }})" type="checkbox"
                        {{ $list->is_active ? 'checked' : '' }}>
                </td>
                <td>
                    @foreach ($list->tags as $tag)
                        <button wire:click="udpateTagFilter({{ $tag->id }})"
                            class="btn btn-flat btn-xs btn-primary">{{ $tag->name }}</button>
                    @endforeach
                </td>
                <td>
                    <a title="Manage Profiles" class="btn btn-flat btn-xs bg-indigo"
                        href="{{ route('curated-lists.profiles', ['id' => $list->id]) }}">
                        <i class="fa fa-users"></i></a>

                    <a class="btn btn-flat btn-xs btn-primary bg-indigo"
                        href="{{ route('curated-lists.edit', ['curated_list' => $list->id]) }}">
                        <i class="fa fa-pencil-alt"></i></a>
                    <a title="Preview" href="{{ env('FE_URL') }}/lists/{{ $list->seo_url }}?preview=true" target="_blank"
                        class="btn btn-flat btn-xs btn-secondary"><i class="fa fa-eye"></i></a>
                </td>
            </tr>
        @endforeach
    </table>
    <x-slot name="footer">
        {{ $curatedLists->links() }}
    </x-slot>
</x-card>
