@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('apis_settings_active')
    active
@endsection
@section('apis_settings')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Mobile Apps') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.mobile-apps.sidebar')

                <div class="col-md-9 col-sm">
                    @if(hasPermission('api_setting_update'))
                        <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>{{ __('APIs Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                                <form action="{{route('mobile.apps.settings.update')}}" method="post"
                                      enctype="multipart/form-data">
                                    @csrf
                                    @method('put')
                                    <div class="form-group">
                                        <label for="api_server_url"
                                               class="form-control-label">{{ __('API Server URL') }}</label>
                                        <input type="text" name="api_server_url" value="{{ url('/api') }}"
                                               class="form-control" id="api_server_url" disabled>
                                        @if ($errors->has('api_server_url'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('api_server_url') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </form>
                            </div>
                        </div>
                    @endif
                    @include('admin.mobile-apps.api_keys.index')
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script>
        $(document).ready(function () {
            $(document).on('click', '.hide_key', function () {
                let id = $(this).data('id');
                $('.masked_text_' + id).addClass('d-none');
                $('.normal_text_' + id).removeClass('d-none');
                $('.clipboard_' + id).removeClass('d-none');
                $(this).addClass('d-none');
                $('.btn_show_' + id).removeClass('d-none')
            });
            $(document).on('click', '.show_key', function () {
                let id = $(this).data('id');
                $('.masked_text_' + id).removeClass('d-none');
                $('.normal_text_' + id).addClass('d-none');
                $('.clipboard_' + id).addClass('d-none');
                $(this).addClass('d-none');
                $('.btn_hide_' + id).removeClass('d-none');
            });
        })
    </script>
@endpush