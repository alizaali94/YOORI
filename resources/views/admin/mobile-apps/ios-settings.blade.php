@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('ios_settings_active')
    active
@endsection
@section('ios_settings')
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
                                <h4>{{ __('iOS Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('mobile.apps.settings.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="latest_ipa_version" class="form-control-label">{{ __('Latest iPA Version') }}</label>
                                    <input type="text" name="latest_ipa_version" placeholder="{{ __('Latest iPA Version') }}" value="{{ old('latest_ipa_version') ? old('latest_ipa_version') : settingHelper('latest_ipa_version') }}" class="form-control" id="latest_ipa_version">
                                    @if ($errors->has('latest_ipa_version'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('latest_ipa_version') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="latest_ipa_code" class="form-control-label">{{ __('Latest iPA Code') }}</label>
                                    <input type="text" name="latest_ipa_code" placeholder="{{ __('Latest iPA Code') }}" value="{{ old('latest_ipa_code') ? old('latest_ipa_code') : settingHelper('latest_ipa_code') }}" class="form-control" id="latest_ipa_code">
                                    @if ($errors->has('latest_ipa_code'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('latest_ipa_code') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="ipa_file_url" class="form-control-label">{{ __('iPA File URL') }}</label>
                                    <input type="url" name="ipa_file_url" placeholder="{{ __('iPA File URL') }}" value="{{ old('ipa_file_url') ? old('ipa_file_url') : settingHelper('ipa_file_url') }}" class="form-control" id="ipa_file_url">
                                    @if ($errors->has('ipa_file_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('ipa_file_url') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="whats_new_latest_ipa" class="form-control-label">{{ __("What's New On Latest iPA?") }}</label>
                                    <textarea name="whats_new_latest_ipa" id="whats_new_latest_ipa" placeholder="{{ __("What's New On Latest iPA?") }}" cols="30" rows="5" class="form-control">{{  settingHelper('whats_new_latest_ipa') }}</textarea>
                                </div>
                                <table class="table topbar-setting-switcher">
                                    <tr>
                                        <td class="no-padding-w30 coookie-marign">{{ __('Update Skippable') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="ios_skippable" value="1" class="custom-switch-input " {{ settingHelper('ios_skippable') == 1 ? 'checked' : ''}} />
                                                <input type="hidden" value="ios" name="mobile_app">
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
