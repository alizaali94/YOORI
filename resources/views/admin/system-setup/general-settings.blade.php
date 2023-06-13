@extends('admin.partials.master')
@section('title')
    {{ __('General Settings') }}
@endsection
@section('general_setting_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('general')
    active
@endsection
@php
    $icon = settingHelper('favicon');
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9 col-sm">
                    <div class="card settings-card" id="settings-card">
                        <div class="card-header">
                            <h4>{{ __('General Settings') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('admin.general.setting.update') }}" method="post"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label for="default_language">{{ __('Language') }}</label>
                                            <select class="form-control selectric site-lang" name="site_lang"
                                                    data-title="system_name"
                                                    data-url="{{ route('system-name-by-lang') }}"
                                                    id="site_lang">
                                                <option value="">{{ __('Select Language') }}</option>
                                                @foreach ($available_languages as $language)
                                                    <option
                                                        value="{{ $language->locale }}"{{ App::getLocale() == $language->locale ? 'selected' : '' }}>{{ $language->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('default_language'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('default_language') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="form-group">
                                            <label for="system_name"
                                                   class="form-control-label">{{ __('System Name') }}</label>
                                            <input type="text" name="system_name"
                                                   placeholder="{{ __('Enter site name') }}"
                                                   value="{{ old('system_name') ? old('system_name') : settingHelper('system_name', App::getLocale()) }}"
                                                   class="form-control" id="system_name"/>
                                            @if ($errors->has('system_name'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('system_name') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="contact_email">{{ __('contact_email') }} *</label>
                                            <input type="email" id="contact_email" name="contact_email"
                                                   value="{{ old('contact_email') ? old('contact_email') : (!isDemoServer() ? settingHelper('contact_email') : '') }}"
                                                   class="form-control" required>
                                            @if ($errors->has('contact_email'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('contact_email') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="contact_phone">{{ __('contact_phone') }} *</label>
                                            <input type="text" id="contact_phone" name="contact_phone"
                                                   value="{{ old('contact_phone') ? old('contact_phone') : (!isDemoServer() ? settingHelper('contact_phone') : '') }}"
                                                   class="form-control" required>
                                            @if ($errors->has('contact_phone'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('contact_phone') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="purchase_code">{{ __('Purchase Code') }} *</label>
                                            <input type="text" id="purchase_code" name="purchase_code"
                                                   value="{{ old('purchase_code') ? old('purchase_code') : (!isDemoServer() ? settingHelper('purchase_code') : '') }}"
                                                   class="form-control" required>
                                            @if ($errors->has('purchase_code'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('purchase_code') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        @php
                                            $timezone = '';
                                            $default_timezone = \App\Utility\AppSettingUtility::settings()->where('title','default_time_zone')->first();
                                            if ($default_timezone && $default_timezone->timezone)
                                            {
                                                $timezone = $default_timezone->timezone;
                                            }
                                        @endphp
                                        <div class="form-group">
                                            <label for="default_time_zone"
                                                   class="form-control-label">{{ __('Time Zone') }}</label>
                                            <select class="timezone-by-ajax form-control select2" name="default_time_zone" id="default_time_zone" required>
                                                <option value="">{{ __('Select Time Zone') }}</option>

                                                @if($timezone)
                                                <option value="{{ $timezone->timezone }}"
                                                            selected>{{ $timezone->gmt_offset > 0 ? "(UTC +$timezone->gmt_offset)".' '.$timezone->timezone : $timezone->gmt_offset }}</option>
                                                @endif

                                            </select>
                                            @if ($errors->has('default_time_zone'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('default_time_zone') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="default_language">{{ __('Default Language') }}</label>
                                            <select class="form-control selectric" name="default_language"
                                                    id="default_language">
                                                <option value="">{{ __('Select Language') }}</option>
                                                @php
                                                    $default_language = settingHelper('default_language');
                                                @endphp
                                                @foreach ($available_languages as $language)
                                                    <option value="{{ $language->locale }}"
                                                        {{ $default_language == $language->locale ? 'selected' : '' }}>{{ $language->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('default_language'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('default_language') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="default_currency"
                                                   class="form-control-label">{{ __('System Default Currency') }}</label>
                                            <select class="form-control select2" name="default_currency"
                                                    id="default_currency">
                                                <option value="">{{ __('Select Currency') }}</option>
                                                @php
                                                    $default_currency = settingHelper('default_currency');
                                                @endphp
                                                @foreach($currencies as $key => $value)
                                                    <option
                                                        value="{{ $value->id }}" {{ $default_currency == $value->id ? 'selected' : ''}}>{{ $value->name }}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('default_currency'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('default_currency') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="default_country"
                                                   class="form-control-label">{{ __('Country') }}</label>
                                            <select class="form-control select2" name="default_country"
                                                    id="default_country">
                                                <option value="">{{ __('Select Country') }}</option>
                                                @php
                                                    $default_country = settingHelper('default_country');
                                                @endphp
                                                @foreach($countries as $key => $value)
                                                    <option
                                                        value="{{ $value->id }}" {{ $default_country == $value->id ? 'selected' : ''}}>{{ $value->name }}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('default_country'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('default_country') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="site-icon">{{ __('Site Icon') }} (512x512)</label>
                                            <div class="form-group">
                                                <input type="file" id="site-icon"
                                                       class="custom-file-input image_pick file-select" accept="image/*"
                                                       data-image-for="profile" name="favicon" id="customFile"/>
                                                @if ($errors->has('favicon'))
                                                    <div class="invalid-feedback">
                                                        {{ $errors->first('favicon') }}
                                                    </div>
                                                @endif
                                            </div>
                                            <div>
                                                @if(@$icon !=[] && @is_file_exists(@$icon['image_72x72_url']))
                                                    <img src="{{ static_asset($icon['image_72x72_url'])}}" alt=""
                                                         id="img_profile" class="img-thumbnail site-icon">
                                                @else
                                                    <img
                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                        alt="site-icon" id="img_profile"
                                                        class="img-thumbnail site-icon ">
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-right btn-margin mb-3">
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                            {{ __('Update') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush