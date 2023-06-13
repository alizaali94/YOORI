@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('app_config_settings_active')
    active
@endsection
@section('app_config_settings')
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
                                <h4>{{ __('App Config Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('mobile.apps.settings.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <table class="table topbar-setting-switcher">
                                    <tr>
                                        <td class="no-padding-w30 coookie-marign">{{ __('Mandatory Login') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="mandatory_login" value="1" class="custom-switch-input" {{ settingHelper('mandatory_login') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                                <table class="table topbar-setting-switcher">
                                    <tr>
                                        <td class="no-padding-w30 coookie-marign">{{ __('Intro Skippable') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="intro_skippable" value="1" class="custom-switch-input" {{ settingHelper('intro_skippable') == 1 ? 'checked' : ''}} />
                                                <input type="hidden" value="intro" name="mobile_app">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                                <div class="form-group">
                                    <label for="privacy_policy_url" class="form-control-label">{{ __('Privacy policy URL') }}</label>
                                    <input type="text" name="privacy_policy_url" value="{{ old('privacy_policy_url') ? old('privacy_policy_url') : settingHelper('privacy_policy_url') }}" class="form-control" id="privacy_policy_url">
                                    @if ($errors->has('privacy_policy_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('privacy_policy_url') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="terms_condition_url" class="form-control-label">{{ __('Terms and Condition URL') }}</label>
                                    <input type="text" name="terms_condition_url" value="{{ old('terms_condition_url') ? old('terms_condition_url') : settingHelper('terms_condition_url') }}" class="form-control" id="terms_condition_url">
                                    @if ($errors->has('terms_condition_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('terms_condition_url') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="support_url" class="form-control-label">{{ __('Support URL') }}</label>
                                    <input type="text" name="support_url" value="{{ old('support_url') ? old('support_url') : settingHelper('support_url') }}" class="form-control" id="support_url">
                                    @if ($errors->has('support_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('support_url') }}</p>
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
