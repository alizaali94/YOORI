@extends('admin.partials.master')
@section('cache_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('cache')
    active
@endsection
@section('title')
    {{ __('Cache') }}
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
                            <h4>{{ __('Cache Update') }}</h4>
                            @if(settingHelper('is_cache_enabled') == 'enable')
                                <form action="">
                                    <div class="form-group">
                                        <a href="{{ route('admin.clear.cache') }}" class="btn btn-outline-primary cache-btn">{{ __('Clear Cache') }}</a>
                                    </div>
                                </form>
                            @endif
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('cache.update') }}" method="POST">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="site-title" class="form-control-label">{{ __('Cache Status') }}</label>
                                    <div class="custom-file">
                                        <select class="form-control selectric" name="is_cache_enabled" id="cache_status">
                                            <option value="enable"
                                                {{ old('is_cache_enabled') == 'enable' ? 'selected' : ((old('is_cache_enabled') == '' && settingHelper('is_cache_enabled') == 'enable') ? 'selected' : '') }}>
                                                {{ __('Enable') }}</option>
                                            <option value="disable"
                                                {{ old('is_cache_enabled') == 'disable' ? 'selected' : ((old('is_cache_enabled') == '' && settingHelper('is_cache_enabled') == 'disable') || (old('is_cache_enabled') == '' && settingHelper('is_cache_enabled') == '' ) ? 'selected' : '') }}>
                                                {{ __('Disable') }}</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="driver"
                                    class="{{ old('is_cache_enabled') == 'enable' ? '' : (old('is_cache_enabled') == '' && settingHelper('is_cache_enabled') == 'enable' ? '' : 'd-none') }}">
                                    <div class="form-group">
                                        <label for="site-title"
                                            class="form-control-label">{{ __('Cache Driver') }}</label>
                                        <div class="custom-file">
                                            <select class="form-control selectric" name="default_cache" id="default_cache">
                                                <option
                                                    {{ old('default_cache') == 'file' ? 'selected' : (old('default_cache') == '' && settingHelper('default_cache') == 'file' ? 'selected' : '') }}
                                                    value="file">{{ __('File') }}</option>
                                                <option
                                                    {{ old('default_cache') == 'redis' ? 'selected' : (old('default_cache') == '' && settingHelper('default_cache') == 'redis' ? 'selected' : '') }}
                                                    value="redis">{{ __('Redis') }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="redis-cache"
                                        class="{{ old('default_cache') == 'redis' ? '' : (old('default_cache') == '' && settingHelper('default_cache') == 'redis' ? '' : 'd-none') }}">
                                        <div class="form-group">
                                            <label for="site-title"
                                                class="form-control-label">{{ __('Redis Host') }}</label>
                                            <input type="text" name="redis_host" value="{{ old('redis_host') != '' ? old('redis_host') : settingHelper('redis_host') }}"
                                                placeholder="{{ __('Enter redis host') }}" class="form-control"
                                                id="site-title">
                                            @if ($errors->has('redis_host'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('redis_host') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="site-title"
                                                class="form-control-label">{{ __('Redis Password') }}</label>
                                            <input type="text" name="redis_password" value="{{ old('redis_password') != '' ? old('redis_password') : settingHelper('redis_password') }}"
                                                placeholder="{{ __('Enter redis password') }}" class="form-control"
                                                id="site-title">
                                            @if($errors->has('redis_password'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('redis_password') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="site-title"
                                                class="form-control-label">{{ __('Redis Port') }}</label>
                                            <input type="text" name="redis_port" value="{{ old('redis_port') != '' ? old('redis_port') : settingHelper('redis_port') }}"
                                                placeholder="{{ __('Enter redis port') }}" class="form-control"
                                                id="site-title">
                                            @if ($errors->has('redis_port'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('redis_port') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Update') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
