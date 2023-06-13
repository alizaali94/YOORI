@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('download_link_settings_active')
    active
@endsection
@section('download_link_settings')
    active
@endsection
@php
    $icon = settingHelper('favicon');
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Mobile Apps') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.mobile-apps.sidebar')
                <div class="col-md-9 col-sm">
                    <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>{{ __('Download Link Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('mobile.apps.settings.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="play_store_link" class="form-control-label">{{ __('Play Store Link') }}</label>
                                    <input type="text" name="play_store_link" value="{{ old('play_store_link') ? old('play_store_link') : settingHelper('play_store_link') }}" class="form-control" id="play_store_link">
                                    @if ($errors->has('play_store_link'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('play_store_link') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="apple_store_link" class="form-control-label">{{ __('Apple Store Link') }}</label>
                                    <input type="text" name="apple_store_link" value="{{ old('apple_store_link') ? old('apple_store_link') : settingHelper('apple_store_link') }}" class="form-control" id="apple_store_link">
                                    @if ($errors->has('apple_store_link'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('apple_store_link') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">{{ __('Update') }}</button>
                                </div>
                            </form>
                            </div>
                        </div>
                     </div>
                </div>
           </div>
    </section>
@endsection
