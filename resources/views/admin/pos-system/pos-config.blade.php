@extends('admin.partials.master')
@section('pos_services_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('pos_services')
    active
@endsection
@section('title')
    {{ __('POS Configuration') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('POS') }}</h2>
            <div id="output-status"></div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('POS Configuration') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <div class="card-body col-md-10 middle">
                                <div class="section-title mt-0">{{ __('POS activate for seller') }}</div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_pos_activated_for_seller') == 1 ? 'checked' : ''}} value="pos-seller-status-change/{{ 'is_pos_activated_for_seller' }}"/>
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <div class="card-body col-md-10 middle">
                                <div class="section-title mt-0">{{ __('POS Invoice Configuration') }}</div>
                                <form method="post" action="{{ route('invoice.config') }}">
                                    @csrf
{{--                                    {{dd(App::getLocale())}}--}}
                                    <div class="col-12">
                                    <div class="row">
                                        <div class="form-group col-12">
                                            <label for="default_language">{{ __('Language') }}</label>
                                            <select class="form-control selectric pos_invoice_lang" name="site_lang"
                                                    data-title="pos_invoice_title"
                                                    data-address="pos_invoice_address"
                                                    data-condition="pos_invoice_terms_condition"
                                                    data-phone="pos_invoice_phone"
                                                    data-powered_by="pos_invoice_powered_by"
                                                    data-url="{{ route('pos.invoice.by.lang') }}"
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
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="pos_invoice_title">{{ __('Title') }}</label>
                                                <input id="pos_invoice_title" type="text" class="form-control" value="{{ old('pos_invoice_title') ? old('pos_invoice_title') : settingHelper('pos_invoice_title', App::getLocale()) }}" name="pos_invoice_title" placeholder="{{ __('title') }}" tabindex="1"
                                                        autofocus>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="pos_invoice_address">{{ __('Address') }}</label>
                                                <input id="pos_invoice_address" type="text" class="form-control" value="{{ old('pos_invoice_address') ? old('pos_invoice_address') : settingHelper('pos_invoice_address', App::getLocale()) }}"  name="pos_invoice_address" placeholder="{{ __('address') }}" tabindex="1"
                                                        autofocus>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="pos_invoice_phone">{{ __('Phone') }}</label>
                                                <input id="pos_invoice_phone" type="text" class="form-control" value="{{settingHelper('pos_invoice_phone')}}" name="pos_invoice_phone" placeholder="{{ __('phone') }}"  tabindex="1"
                                                        autofocus>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="pos_invoice_terms_condition">{{ __('Term and Conditions') }}</label>
                                                <input id="pos_invoice_terms_condition" type="text" class="form-control" name="pos_invoice_terms_condition" value="{{settingHelper('pos_invoice_terms_condition')}}" placeholder="{{ __('invoice Terms & conditions') }}" tabindex="1"
                                                        autofocus>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="pos_invoice_powered_by">{{ __('Powered By') }}</label>
                                                <input id="pos_invoice_powered_by" type="text" class="form-control" name="pos_invoice_powered_by" value="{{settingHelper('pos_invoice_powered_by')}}" placeholder="{{ __('Powered by') }}" value="{{old('pos_invoice_powered_by')}}" tabindex="1"
                                                        autofocus>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="form-group text-center">
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
        </div>
    </section>
@endsection
