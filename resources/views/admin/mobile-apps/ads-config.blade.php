@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('ads_config_settings_active')
    active
@endsection
@section('ads_config_settings')
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
                                <h4>{{ __('Ads Config Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('mobile.apps.settings.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <table class="table topbar-setting-switcher">
                                    <tr>
                                        <td class="no-padding-w30 coookie-marign">{{ __('Ads Enable') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="" value="setting-status-change/{{ 'ads_enable' }}" class="custom-switch-input status-change" {{ settingHelper('ads_enable') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                                <div class="form-group">
                                    <label for="admob_app_id" class="form-control-label">{{ __('Admob App ID') }}</label>
                                    <input type="text" name="admob_app_id" placeholder="{{ __('Admob App ID') }}" value="{{ old('admob_app_id') ? old('admob_app_id') : settingHelper('admob_app_id') }}" class="form-control" id="admob_app_id">
                                    @if ($errors->has('admob_app_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('admob_app_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="admob_banner_ads_id" class="form-control-label">{{ __('Admob Banner Ads ID') }}</label>
                                    <input type="text" name="admob_banner_ads_id" placeholder="{{ __('Admob Banner Ads ID') }}" value="{{ old('admob_banner_ads_id') ? old('admob_banner_ads_id') : settingHelper('admob_banner_ads_id') }}" class="form-control" id="admob_banner_ads_id">
                                    @if ($errors->has('admob_banner_ads_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('admob_banner_ads_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="admob_interstitial_ads_id" class="form-control-label">{{ __('Admob Interstitial Ads ID') }}</label>
                                    <input type="text" name="admob_interstitial_ads_id" placeholder="{{ __('Admob Interstitial Ads ID') }}" value="{{ old('admob_interstitial_ads_id') ? old('admob_interstitial_ads_id') : settingHelper('admob_interstitial_ads_id') }}" class="form-control" id="admob_interstitial_ads_id">
                                    @if ($errors->has('admob_interstitial_ads_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('admob_interstitial_ads_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="admob_native_ads_id" class="form-control-label">{{ __('Admob Native Ads ID') }}</label>
                                    <input type="text" name="admob_native_ads_id" placeholder="{{ __('Admob Native Ads ID') }}" value="{{ old('admob_native_ads_id') ? old('admob_native_ads_id') : settingHelper('admob_native_ads_id') }}" class="form-control" id="admob_native_ads_id">
                                    @if ($errors->has('admob_native_ads_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('admob_native_ads_id') }}</p>
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
