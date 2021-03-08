<x-app-layout>
    <x-slot name="styles">
        <link rel="stylesheet" href="{{ asset('adminlte/plugins/select2/css/select2.min.css') }}">
        <link rel="stylesheet"
            href="{{ asset('adminlte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
    </x-slot>

    <x-slot name="title">
        {{ __('Edit List') }}
    </x-slot>

    <x-slot name="breadcrumbs">
        <li class="breadcrumb-item"><a href="{{ route('curated-lists.index') }}">{{ $list->name }}</a></li>
    </x-slot>

    <x-card>
        <x-slot name="title">
        </x-slot>

        <x-validation-error></x-validation-error>

        <form id="edit-tag-form" action="{{ route('curated-lists.update', $list->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="title">{{ __('Title') }}</label>
                <input name="title" type="text" class="form-control" id="title" placeholder="Name"
                    value="{{ $list->title }}">
            </div>

            <div class="form-group">
                <label for="seo_url">{{ __('SEO URL') }}</label>
                <input name="seo_url" type="text" class="form-control" id="seo_url" placeholder="SEO URL"
                    value="{{ $list->seo_url }}">
            </div>

            <div class="form-group">
                <label for="sub_heading">{{ __('Sub Heading') }}</label>
                <input name="sub_heading" type="text" class="form-control" id="sub_heading" placeholder="Sub Heading"
                    value="{{ $list->sub_heading }}">
            </div>

            <div class="form-group">
                <label for="description">{{ __('Description') }}</label>
                <textarea class="form-control" id="description" name="description" cols="30"
                    rows="10">{{ $list->description }}</textarea>

            </div>

            <div class="form-group">
                <label for="tags">{{ __('Tags') }}</label>
                <select id="tags" name="tags[]" class="select2" multiple="multiple" data-placeholder="Select a State"
                    style="width: 100%;">
                    @foreach ($list->tags as $tag)
                        <option selected value="{{ $tag->id }}">{{ $tag->name }}</option>
                    @endforeach
                    @foreach ($tags as $tag)
                        <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="is_active">{{ __('Is Active') }}</label>
                <input {{ $list->is_active ? 'checked' : '' }} type="checkbox" id="is_active" name="is_active">
            </div>
        </form>

        <x-slot name="footer">
            <button onclick="document.getElementById('edit-tag-form').submit()" type="submit"
                class="btn btn-flat btn-primary">Update</button>
            <a href="{{ route('tags.index') }}" class="btn btn-flat btn-secondary">Cancel</a>

        </x-slot>
    </x-card>

    <x-slot name="scripts">
        <script src="{{ asset('adminlte/plugins/select2/js/select2.full.min.js') }}"></script>
        <script>
            $(function() {
                $('.select2').select2({
                    tags: true
                })
            });

            $('#title').on('keyup', function() {
                $('#seo_url').val(toSeoUrl($('#title').val()));
            });

            function toSeoUrl(url) {
                return url.toString() // Convert to string
                    .normalize('NFD') // Change diacritics
                    .replace(/[\u0300-\u036f]/g, '') // Remove illegal characters
                    .replace(/\s+/g, '-') // Change whitespace to dashes
                    .toLowerCase() // Change to lowercase
                    .replace(/&/g, '-and-') // Replace ampersand
                    .replace(/[^a-z0-9\-]/g, '') // Remove anything that is not a letter, number or dash
                    .replace(/-+/g, '-') // Remove duplicate dashes
                    .replace(/^-*/, '') // Remove starting dashes
                    .replace(/-*$/, ''); // Remove trailing dashes
            }

        </script>
    </x-slot>
</x-app-layout>
