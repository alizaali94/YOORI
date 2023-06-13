@extends('admin.partials.master')
@section('pusher_notification_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('pusher_notification')
    active
@endsection
@section('title')
    {{ __('Pusher Notification') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Pusher Notification') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <div class="section-title mt-0">{{ __('Pusher Notification') }}</div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox"
                                                       name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_pusher_notification_active' }}"
                                                       class="custom-switch-input status-change" {{ settingHelper('is_pusher_notification_active') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('third.party.setting.update') }}" method="post" enctype="multipart/form-data">
                                @method('put')
                                @csrf
                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Pusher App ID') }}</label>
                                    <input type="text" class="form-control" name="pusher_app_id" id="pusher_app_id" required value="{{ old('pusher_app_id') ? old('pusher_app_id') : (isDemoServer() ? Str::of(settingHelper('pusher_app_id'))->mask('*', 3, 25) : settingHelper('pusher_app_id')) }}"  placeholder="{{ __('Pusher App ID') }}">
                                    @if ($errors->has('pusher_app_id'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('pusher_app_id') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Pusher App Key') }}</label>
                                    <input type="text" class="form-control" name="pusher_app_key" id="pusher_app_key" required value="{{ old('pusher_app_key') ? old('pusher_app_key') : (isDemoServer() ? Str::of(settingHelper('pusher_app_key'))->mask('*', 3, 25) : settingHelper('pusher_app_key')) }}"  placeholder="{{ __('Pusher App Key') }}">
                                    @if ($errors->has('pusher_app_key'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('pusher_app_key') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Pusher App Secret') }}</label>
                                    <input type="text" class="form-control" name="pusher_app_secret" id="pusher_app_secret" required value="{{ old('pusher_app_secret') ? old('pusher_app_secret') : (isDemoServer() ? Str::of(settingHelper('pusher_app_secret'))->mask('*', 3, 25) : settingHelper('pusher_app_secret')) }}"  placeholder="{{ __('Pusher App Secret') }}">
                                    @if ($errors->has('pusher_app_secret'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('pusher_app_secret') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Pusher App Cluster') }}</label>
                                    <input type="text" class="form-control" name="pusher_app_cluster" id="pusher_app_cluster" required value="{{ old('pusher_app_cluster') ? old('pusher_app_cluster') : settingHelper('pusher_app_cluster') }}"  placeholder="{{ __('Pusher App Cluster') }}">
                                    @if ($errors->has('pusher_app_cluster'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('pusher_app_cluster') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
