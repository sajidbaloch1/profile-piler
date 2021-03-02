<div class="box box-widget">
    <div class="box-header with-border">
        <div class="user-block">
            <img class="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image"
                onerror="if (this.src != '{{ asset('imgs/no-image.png') }}') this.src = '{{ asset('imgs/no-image.png') }}';">
            <span class="username"><a href="#">{{ $profile->Name }}</a></span>
            <span class="description">
                Followers {{ $profile->Followers }}
            </span>
        </div>
        <!-- /.user-block -->
        <div class="box-tools">
            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title=""
                data-original-title="Mark as read">
                <i class="fa fa-circle-o"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
        <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        {{ substr($profile->Description, 0, 250) }}
        @if (strlen($profile->Description) > 250)
            ...
        @endif
        <br>
        <br>
        <span class="pull-right text-muted">{{ $profile->Followers }} likes - 2 comments</span>
    </div>
</div>
