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
            <th>Queue</th>
            <th>Payload</th>
            <th>Attempts</th>
            <th>ReservedAt</th>
            <th>AvailableAt</th>
        </tr>

        @foreach ($jobs as $job)
            <tr>
                <td>
                    {{ $job->queue }}
                </td>
                <td>
                    {{ $job->payload }}
                </td>
                <td>
                    {{ $job->attempts }}
                </td>
                <td>
                    {{ $job->reserved_at }}
                </td>
                <td>
                    {{ $job->available_at }}
                </td>
            </tr>
        @endforeach
    </table>

    <x-slot name="footer">
        {{ $jobs->links() }}
    </x-slot>

</x-card>
