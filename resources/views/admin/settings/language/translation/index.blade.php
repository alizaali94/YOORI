@extends('admin.partials.master')

@section('title')
    {{ __('Translations')}}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Translations') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Translations') }}</h4>
                            <div class="card-header-form">
                                <form
                                    action="{{ route('admin.languages.translations.index', ['language' => $language]) }}"
                                    class="form-inline">
                                    @include('translation::forms.select', ['name' => 'language', 'items' => $languages, 'submit' => true, 'selected' => $language])
                                    <div class="sm:hidden lg:flex items-center">
                                        @include('translation::forms.select', ['name' => 'group', 'items' => $groups, 'submit' => true, 'selected' => Request::get('group'), 'optional' => true])
                                    </div>
                                    @include('translation::forms.search', ['name' => 'filter', 'value' => Request::get('filter')])
                                </form>
                            </div>
                        </div>
                        <form action="{{ route('admin.languages.translations.index', ['language' => $language]) }}"
                              method="get">
                            <div class="panel">
                                <div class="panel-body">
                                    @if(count($translations))
                                        <table class="teble table-striped">
                                            <thead>
                                            <tr>
                                                <th class="w-1/5 uppercase">{{ __('translation::translation.group_single') }}</th>
                                                <th class="w-1/5 uppercase">{{ __('translation::translation.key') }}</th>
                                                <th class="uppercase">{{ config('app.locale') }}</th>
                                                <th class="uppercase">{{ $language }}</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            @foreach($translations as $type => $items)
                                                @foreach($items as $group => $translations)
                                                    @foreach($translations as $key => $value)
                                                        @if(!is_array($value[config('app.locale')]))
                                                            <tr>
                                                                <td>{{ $group }}</td>
                                                                <td>{{ $key }}</td>
                                                                <td>{{ $value[config('app.locale')] }}</td>
                                                                <td>
                                                                    <translation-input
                                                                        initial-translation="{{ $value[$language] }}"
                                                                        language="{{ $language }}"
                                                                        group="{{ $group }}"
                                                                        translation-key="{{ $key }}"
                                                                        route="{{ config('translation.ui_url') }}">
                                                                    </translation-input>
                                                                </td>
                                                            </tr>
                                                        @endif
                                                    @endforeach
                                                @endforeach
                                            @endforeach
                                            </tbody>
                                        </table>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/language.css') }}">
@endsection

@push('script')
    <script src="{{ static_asset('/vendor/translation/js/app.js') }}"></script>

    <script type="text/javascript">
        function delete_row(route, row_id) {

            var table_row = '#row_' + row_id;
            var url = "{{url('')}}" + 'admin/' + route + row_id;

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {
                    id: row_id,
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
            })
                .done(function (response) {

                });
        }

    </script>
@endpush
