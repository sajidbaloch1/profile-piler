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
    <table class="table" style="table-layout: fixed">
        <tr>
            <th>UuId</th>
            <th>Connection</th>
            <th>Queue</th>
            <th>Payload</th>
            <th>Exception</th>
        </tr>

        @foreach ($failedJobs as $failed)
            <tr>
                <td>
                    {{ $failed->uuid }}
                </td>
                <td>
                    {{ $failed->connection }}
                </td>
                <td>
                    {{ $failed->queue }}
                </td>
                <td>
                    {{ $failed->payload }}
                </td>
                <td>
                    {{ $failed->exception }}
                </td>
            </tr>
        @endforeach
    </table>

    <x-slot name="footer">
        {{ $failedJobs->links() }}
    </x-slot>

</x-card>
