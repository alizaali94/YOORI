@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}" />
@endsection
@section('gdpr')
    active
@endsection
@section('title')
    {{ __('GDPR') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Store Front') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.store-front.theme-options-sitebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('GDPR') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)
                                            <option value="{{ $language->locale }}" {{($lang !="" ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </form>
                            <form method="post" action="{{route('update')}}">
                                @csrf @method('put')
                                <div class="form">
                                    <div class="form-group">
                                        <label for="">{{ __('Cookies Agreement Text') }}</label>
                                        <div class="">
                                            <textarea class="summernote-simple" name="cookies_agreement">{{ old('cookies_agreement') ? old('cookies_agreement') : settingHelper('cookies_agreement', $lang) }}</textarea>
                                            <input type="hidden" value="{{ $lang }}" name="site_lang" />
                                        </div>
                                    </div>
                                    <table class="table topbar-setting-switcher">
                                        <tr>
                                            <td class="no-padding-w30 coookie-marign">{{ __('Cookies Agreement') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="" value="setting-status-change/{{ 'cookies_status' }}" class="custom-switch-input status-change" {{ settingHelper('cookies_status') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="section-title mb-4">{{ __('agreements') }}</div>
                                    <div class="form-group">
                                        <label for="name">{{ __('Seller Registration') }}</label>
                                        <select class="form-control selectric" name="seller_agreement">
                                            <option value="">{{ __('Select Page') }}</option>
                                            @foreach($pages as $page)
                                                <option value="{{ $page->link }}" {{ settingHelper('seller_agreement') == $page->link ? 'selected' : '' }}>{{ $page->getTranslation('title',app()->getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">{{ __('Customer Registration') }}</label>
                                        <select class="form-control selectric" name="customer_agreement">
                                            <option value="">{{ __('Select Page') }}</option>
                                            @foreach($pages as $page)
                                                <option value="{{ $page->link }}" {{ settingHelper('customer_agreement') == $page->link ? 'selected' : '' }}>{{ $page->getTranslation('title',app()->getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">{{ __('Privacy') }}</label>
                                        <select class="form-control selectric" name="privacy_agreement">
                                            <option value="">{{ __('Select Page') }}</option>
                                            @foreach($pages as $page)
                                                <option value="{{ $page->link }}" {{ settingHelper('privacy_agreement') == $page->link ? 'selected' : '' }}>{{ $page->getTranslation('title',app()->getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="text-md-right">
                                        <button class="btn btn-outline-primary" id="save-btn">
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
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush
