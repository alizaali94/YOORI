@extends('admin.partials.master')
@section('header_content')
    active
@endsection
@section('topbar')
    active
@endsection
@section('title')
    {{ __('Topbar') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.header-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="card">
                            <div class="card-header">
                                {{ __('Topbar Section') }}
                            </div>
                            <div class="card-body col-md-10 middle">
                                <form action="{{route('update')}}" method="POST">
                                    @csrf
                                    @method('put')
                                    <div class="form">
                                        <div class="form-group">
                                            <label for="contact_phone">{{ __('Header Contact Phone') }}</label>
                                            <div class="custom-file">
                                                <input type="number" class="form-control" value="{{old('header_contact_phone') ? old('header_contact_phone') : settingHelper('header_contact_phone')}}" name="header_contact_phone" id="header_contact_phone" placeholder="{{__('Phone')}}"/>
                                            </div>
                                        </div>
                                        <table class="table topbar-setting-switcher">
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Language Switcher') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'language_switcher' }}" {{ settingHelper('language_switcher') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Currency Switcher') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" class="custom-switch-input status-change" value="setting-status-change/{{ 'currency_switcher' }}" {{ settingHelper('currency_switcher') == 1 ? 'checked' :
                                                    ''}}>
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Play Store') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" class="custom-switch-input status-change" value="setting-status-change/{{ 'topbar_play_store_link' }}" {{ settingHelper('topbar_play_store_link') == 1 ? 'checked' :
                                                    ''}}>
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('App Store') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" class="custom-switch-input status-change" value="setting-status-change/{{ 'topbar_app_store_link' }}" {{ settingHelper('topbar_app_store_link') == 1 ? 'checked' :
                                                    ''}}>
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="text-md-right">
                                        <button class="btn btn-outline-primary" id="save-btn">{{ __('Save') }}</button>
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
