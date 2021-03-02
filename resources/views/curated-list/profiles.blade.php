<x-app-layout>
    <x-slot name="title">
        {{ $list->title }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item"><a href="{{ route('curated-lists.index') }}">
                {{ __('Curated Lists') }}</a>
        </li>
        <li class="breadcrumb-item"><a href="{{ route('curated-lists.index') }}">
                {{ __('Add Profiles') }}</a>
        </li>
    </x-slot>

    <div class="row" id="curated-list-profile">
        <div class="col" style="border-right: 2px solid gainsboro;margin-right: 10px;">
            <h1>Search For Profiles</h1>
            <div class="form-group">
                <label for="tag-name">Keyword</label>
                <input v-model="filters.q" name="name" type="text" class="form-control" id="tag-name"
                    placeholder="keyword">
            </div>
            <div class="flex">
                <button :disabled="loading" v-on:click="searchProfiles"
                    class="btn btn-flat btn-primary mr-2">Search</button>
                <button v-if="searchedProfiles.length>0" v-on:click="clearSearch()"
                    class="btn btn-flat btn-secondary ml-2">Clear</button>
                <i v-if="loading" class="fas fa-2x fa-sync-alt fa-spin"></i>
            </div>
            <br><br>
            <div class="profile-list-container">
                <profile-item v-for="profile in searchedProfiles" :key="profile.Id"
                    v-on:remove-profile="removeProfile($event,searchedProfiles)"
                    v-on:select-profile="selectProfile($event)" :profile="profile" mode="search"></profile-item>

            </div>
        </div>
        <div class="col">
            <h1>
                Selected Profiles (@{{ selectedProfiles . length }})
            </h1>
            <div class="flex mb-2">
                <button class="btn btn-primary btn-flat" v-on:click="updateProfile()">Update</button>
                <i v-if="updating" class="fas fa-2x fa-sync-alt fa-spin"></i>

            </div>
            <div class="profile-list-container">
                <profile-item v-for="profile in selectedProfiles" :key="profile.Id"
                    v-on:remove-profile="removeProfile($event,selectedProfiles)"
                    v-on:select-profile="selectProfile($event)" :profile="profile"></profile-item>
            </div>
        </div>

    </div>

    <div style="display: none" id="profile-component-tpl">
        <div class="box box-widget">
            <div class="box-header with-border">
                <div class="user-block">
                    <img class="img-circle" v-bind:src="profile.ProfilePic" alt="User Image"
                        onerror="if (this.src != '{{ asset('imgs/no-image.png') }}') this.src = '{{ asset('imgs/no-image.png') }}';">
                    <span class="username"><a href="#">@{{ profile . Name }}</a></span>
                    <span class="description">
                        Followers @{{ profile . Followers }}
                    </span>
                </div>
                <!-- /.user-block -->
                <div class="box-tools">
                    <button v-if="mode=='search'" v-on:click="$emit('select-profile', profile)" type="button"
                        class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i>
                    </button>
                    <button v-on:click="$emit('remove-profile', profile)" type="button" class="btn btn-box-tool"
                        data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
                <!-- /.box-tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <span>
                    @{{ profile . Description . length > 250 ? profile . Description . substr(0, 255) : profile . Description }}
                </span>
                <span v-if="profile.Description.length > 250">
                    ...
                </span>
                <br>
                <br>
                <span class="pull-right text-muted">@{{ profile . Followers }} likes - 2 comments</span>
            </div>

        </div>
    </div>


    <x-slot name="scripts">
        <script src="{{ asset('js/vue.js') }}"></script>
        <script src="{{ asset('js/curated-list-profile.js') }}"></script>
    </x-slot>

</x-app-layout>
