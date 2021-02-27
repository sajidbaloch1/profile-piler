<x-card>
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
            <th>keyword</th>
            <th>source</th>
            <th>category</th>
            <th>resultsCount</th>
            <th>scannedAt</th>
        </tr>

        @foreach ($keywords as $keyword)
            <tr>
                <td>
                    {{ $keyword->keyword }}
                </td>
                <td>
                    {{ $keyword->source }}
                </td>
                <td>
                    {{ $keyword->category }}
                </td>
                <td>
                    {{ $keyword->resultsCount }}
                </td>
                <td>
                    {{ $keyword->scannedAt }}
                </td>
            </tr>
        @endforeach
    </table>

    <x-slot name="footer">
        {{ $keywords->links() }}
    </x-slot>

</x-card>
