<style>
    .json-content-td {
        cursor: pointer;
    }

    .json-content-td:hover {
        background-color: gainsboro;
    }

</style>
<x-app-layout>
    <x-slot name="title">
        {{ __('Elastic Search Logs') }}
    </x-slot>

    <x-card>
        <x-slot name="title">

        </x-slot>

        <x-slot name="tools">
            <div class="input-group input-group-sm" style="width: 200px;">
                <input type="text" name="table_search" class="form-control float-right" placeholder="Search Keywords">
            </div>
        </x-slot>

        <table class="table">
            <tr>
                <th>Created At</th>
                <th>Query Time(ms)</th>
                <th>Query</th>
            </tr>
            @foreach ($records as $record)
                <tr>
                    <td>{{ $record->created_at }}</td>
                    <td>{{ $record->query_time }}</td>
                    @php
                        $modalId = uniqid('m-');
                        $textid = uniqid('t-');
                    @endphp
                    <td class="json-content-td" data-target="#{{ $modalId }}" data-toggle="modal">
                        {{ $record->query }}
                        <div class="modal" id="{{ $modalId }}" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <button onclick="copyText(event,'{{ $textid }}')"
                                            class="btn btn-secondary btn-xs">copy</button>
                                        <textarea style="width: 100%;height:400px;border:none;"  name="textarea" id="{{ $textid }}">{{ json_encode(json_decode($record->query), JSON_PRETTY_PRINT) }}</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </table>
        <x-slot name="footer">
            {{ $records->links() }}
        </x-slot>
    </x-card>

</x-app-layout>

<script>
    function copyText(event, id) {
        console.log(event);
        event.stopPropagation();
        /* Get the text field */
        var copyText = document.getElementById(id);

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }
</script>
