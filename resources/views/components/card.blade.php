<div class="card">
    <div class="card-header">
        <h3 class="card-title">
            {{ $title }}
        </h3>
        <div class="card-tools">
            {{ $tools }}
        </div>
    </div>
    <div class="card-body">
        {{ $slot }}
    </div>
    <div class="card-footer">
        {{ $footer }}
    </div>
    <x-loader></x-loader>
</div>
