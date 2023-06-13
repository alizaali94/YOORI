@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('android_settings_active')
    active
@endsection
@section('android_settings')
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
                    <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>{{ __('Android Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('mobile.apps.settings.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="latest_apk_version" class="form-control-label">{{ __('Latest APK Version') }}</label>
                                    <input type="text" name="latest_apk_version" placeholder="{{__('Latest APK Version')}}" value="{{ old('latest_apk_version') ? old('latest_apk_version') : settingHelper('latest_apk_version') }}" class="form-control" id="latest_apk_version">
                                    @if ($errors->has('latest_apk_version'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('latest_apk_version') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="latest_apk_code" class="form-control-label">{{ __('Latest APK Code') }}</label>
                                    <input type="text" name="latest_apk_code" placeholder="{{ __('Latest APK Code') }}" value="{{ old('latest_apk_code') ? old('latest_apk_code') : settingHelper('latest_apk_code') }}" class="form-control" id="latest_apk_code">
                                    @if ($errors->has('latest_apk_code'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('latest_apk_code') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="apk_file_url" class="form-control-label">{{ __('APK File URL') }}</label>
                                    <input type="url" name="apk_file_url" placeholder="{{ __('APK File URL') }}" value="{{ old('apk_file_url') ? old('apk_file_url') : settingHelper('apk_file_url') }}" class="form-control" id="apk_file_url">
                                    @if ($errors->has('apk_file_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('apk_file_url') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="whats_new_latest_apk" class="form-control-label">{{ __("What's New On Latest APK?") }}</label>
                                    <textarea name="whats_new_latest_apk" placeholder="{{ __("What's New On Latest APK?") }}" id="whats_new_latest_apk" cols="30" rows="6" class="form-control cross-origin-input ">{{  settingHelper('whats_new_latest_apk') }}</textarea>
                                </div>
                                <table class="table topbar-setting-switcher">
                                    <tr>
                                        <td class="no-padding-w30 coookie-marign">{{ __('Update Skippable') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="android_skippable" value="1" class="custom-switch-input" {{ settingHelper('android_skippable') == 1 ? 'checked' : ''}} />
                                                <input type="hidden" value="android" name="mobile_app">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
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
