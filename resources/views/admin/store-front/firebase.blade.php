@extends('admin.partials.master')
@section('setup')
    active
@endsection
@section('firebase_update')
    active
@endsection
@section('title')
    {{ __('Firebase Configure') }}
@endsection
@section('main-content')
    @php
        $icon = settingHelper('og_image');
    @endphp
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Store Front') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Firebase') }} <small>({{ __('required_for_social') }})</small></h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="admin-social-login-status-change/{{ 'is_google_login_activated' }}"
                                                   class="custom-switch-input status-change" {{ settingHelper('is_google_login_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Google') }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="admin-social-login-status-change/{{ 'is_facebook_login_activated' }}"
                                                   class="custom-switch-input status-change" {{ settingHelper('is_facebook_login_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Facebook') }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="admin-social-login-status-change/{{ 'is_twitter_login_activated' }}"
                                                   class="custom-switch-input status-change" {{ settingHelper('is_twitter_login_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Twitter') }}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('update.website.seo')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="api_key">{{ __('api_key') }} *</label>
                                    <input type="text" class="form-control" name="api_key"
                                           id="api_key" placeholder="{{ __('api_key') }}"
                                           value="{{ settingHelper('api_key') }}" required>
                                </div>
                                <div class="form-group">
                                    <label for="auth_domain">{{ __('auth_domain') }}</label>
                                    <input id="auth_domain" class="form-control" name="auth_domain"
                                           placeholder="{{ __('auth_domain') }}" required
                                           value="{{ old('auth_domain') ? old('auth_domain') : settingHelper('auth_domain') }}">
                                </div>
                                <div class="form-group">
                                    <label for="meta_description">{{ __('project_id') }}</label>
                                    <input id="project_id" class="form-control" name="project_id"
                                           placeholder="{{ __('project_id') }}" required
                                           value="{{ old('project_id') ? old('project_id') : settingHelper('project_id') }}">
                                </div>
                                <div class="form-group">
                                    <label for="storage_bucket">{{ __('storage_bucket') }}</label>
                                    <input id="storage_bucket" class="form-control" name="storage_bucket"
                                           placeholder="{{ __('storage_bucket') }}" required
                                           value="{{ old('storage_bucket') ? old('storage_bucket') : settingHelper('storage_bucket') }}">
                                </div>
                                <div class="form-group">
                                    <label for="messaging_sender_id">{{ __('messaging_sender_id') }}</label>
                                    <input id="messaging_sender_id" class="form-control" name="messaging_sender_id"
                                           placeholder="{{ __('messaging_sender_id') }}" required
                                           value="{{ old('messaging_sender_id') ? old('messaging_sender_id') : settingHelper('messaging_sender_id') }}">
                                </div>
                                <div class="form-group">
                                    <label for="app_id">{{ __('app_id') }}</label>
                                    <input id="app_id" class="form-control" name="app_id"
                                           placeholder="{{ __('app_id') }}" required
                                           value="{{ old('app_id') ? old('app_id') : settingHelper('app_id') }}">
                                </div>
                                <div class="form-group">
                                    <label for="measurement_id">{{ __('measurement_id') }}</label>
                                    <input id="measurement_id" class="form-control" name="measurement_id"
                                           placeholder="{{ __('measurement_id') }}" required
                                           value="{{ old('measurement_id') ? old('measurement_id') : settingHelper('measurement_id') }}">
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary" id="save-btn">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush
