@extends('admin.partials.master')
@section('setup')
    active
@endsection
@section('social_login_active')
    active
@endsection
@section('title')
    {{ __('Social Login Settings') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Social Login Settings') }}</h2>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link {{ old('social_login') == '' || old('social_login') == 'google' ? 'active' : ''}}" id="google-tab" data-toggle="tab" href="#google" role="tab" aria-controls="contact"aria-selected="false">{{ __('Google') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('social_login') == 'facebook' ? 'active' : '' }}" id="facebook-tab" data-toggle="tab"  href="#facebook" role="tab" aria-controls="contact"aria-selected="false">{{ __('Facebook') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('social_login') == 'twitter' ? 'active' : '' }} " id="twitter-tab" data-toggle="tab" href="#twitter" role="tab" aria-controls="contact"aria-selected="false">{{ __('Twitter') }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade {{ old('social_login') == '' || old('social_login') == 'google' ? 'show active' : ''}}" id="google" role="tabpane1" aria-labelledby="google-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Google Login Credential') }}</h4>
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox"
                                                           value="admin-social-login-status-change/{{ 'is_google_login_activated' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_google_login_activated') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="{{ route('social.login.update') }}" method="post"  enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                        <div class="form-group">
                                            <label for="google_client_id">{{ __('Client ID ') }}</label>
                                            <input type="hidden" name="social_login"  value="google">
                                            <input type="text" class="form-control" name="google_client_id" id="google_client_id" value="{{ old('google_client_id') ? old('google_client_id') : (isDemoServer() ? Str::of(settingHelper('google_client_id'))->mask('*', 3, 25) : settingHelper('google_client_id')) }}" placeholder="{{ __('Google Client Id') }}">
                                            @if ($errors->has('google_client_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('google_client_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="google_client_secret">{{ __('Client Secret') }}</label>
                                            <input type="text" class="form-control" name="google_client_secret" id="google_client_secret" value="{{ old('google_client_secret') ? old('google_client_secret') : (isDemoServer() ? Str::of(settingHelper('google_client_secret'))->mask('*', 3, 25) : settingHelper('google_client_secret')) }}" placeholder="{{ __('Google Client Secret') }}">
                                            @if ($errors->has('google_client_secret'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('google_client_secret') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="google_callback_url">{{ __('Google Callback URl') }}</label>
                                            <input type="text" class="form-control" disabled id="google_callback_url" value="{{ url('login/google/callback') }}" placeholder="{{ __('Google Callback URL') }}">
                                            @if ($errors->has('google_callback_url'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('google_callback_url') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('social_login') == 'facebook' ? 'show active' : '' }}"
                             id="facebook" role="tab" aria-labelledby="facebook-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{ __('Facebook Login Credential') }}</h4>
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox"
                                                           value="admin-social-login-status-change/{{ 'is_facebook_login_activated' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_facebook_login_activated') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="{{ route('social.login.update') }}" method="post" enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                        <div class="form-group">
                                            <label for="stripe_key">{{ __('App ID') }}</label>
                                            <input type="hidden" name="social_login"  value="facebook">
                                            <input type="text" class="form-control" name="facebook_client_id" id="facebook_client_id" value="{{ old('facebook_client_id') ? old('facebook_client_id') : (isDemoServer() ? Str::of(settingHelper('facebook_client_id'))->mask('*', 3, 25) : settingHelper('facebook_client_id')) }}"  placeholder="{{ __('Facebook Client Id') }}">
                                            @if ($errors->has('facebook_client_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('facebook_client_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="facebook_client_secret">{{ __('App Secret') }}</label>
                                            <input type="text" class="form-control" id="facebook_client_secret" name="facebook_client_secret" value="{{ old('facebook_client_secret') ? old('facebook_client_secret') : (isDemoServer() ? Str::of(settingHelper('facebook_client_secret'))->mask('*', 3, 25) : settingHelper('facebook_client_secret')) }} " placeholder="{{ __('Facebook Client Secret') }}">
                                            @if ($errors->has('facebook_client_secret'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('facebook_client_secret') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="facebook_callback_url">{{ __('Facebook Callback URL') }}</label>
                                            <input type="text" class="form-control" id="facebook_callback_url" disabled value="{{ url('login/facebook/callback') }}" placeholder="{{ __('Facebook Callback URL') }}">
                                            @if ($errors->has('facebook_callback_url'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('facebook_callback_url') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('social_login')  == 'twitter' ? 'show active' : ''}}" id="twitter" role="tabpane5" aria-labelledby="twitter-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Twitter Login Credential') }}</h4>
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox"
                                                           value="admin-social-login-status-change/{{ 'is_twitter_login_activated' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_twitter_login_activated') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="{{ route('social.login.update') }}" method="post" enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                        <div class="form-group">
                                            <label for="twitter_client_id">{{ __('Client ID') }}</label>
                                            <input type="hidden" name="social_login"  value="twitter">
                                            <input type="text" class="form-control" id="twitter_client_id" name="twitter_client_id" value="{{ old('twitter_client_id') ? old('twitter_client_id') : (isDemoServer() ? Str::of(settingHelper('twitter_client_id'))->mask('*', 3, 25) : settingHelper('twitter_client_id')) }}" placeholder="{{ __('Twitter Client Id') }}">
                                            @if ($errors->has('twitter_client_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('twitter_client_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="twitter_client_secret">{{ __('Client Secret') }}</label>
                                            <input type="text" class="form-control" id="twitter_client_secret" name="twitter_client_secret" value="{{ old('twitter_client_secret') ? old('twitter_client_secret') : (isDemoServer() ? Str::of(settingHelper('twitter_client_secret'))->mask('*', 3, 25) : settingHelper('twitter_client_secret')) }}" placeholder="{{ __('Twitter Client Secret') }}">
                                            @if ($errors->has('twitter_client_secret'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('twitter_client_secret') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="twitter_callback_url">{{ __('Twitter Callback URL') }}</label>
                                            <input type="text" class="form-control" id="twitter_callback_url" disabled value="{{ url('login/twitter/callback') }}" placeholder="{{ __('Twitter Callback URL') }}">
                                            @if ($errors->has('twitter_callback_url'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('twitter_callback_url') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

