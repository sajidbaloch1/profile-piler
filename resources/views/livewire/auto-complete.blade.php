<div>

    <div class="dropdown">
        <input wire:model="search" type="text" class="form-control" placeholder="Start Typing...">

        @if(!empty($search))
            <ul class="dropdown-menu" style="display: block;padding-left:5px">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
            </ul>
        @endif
    </div>
</div>
