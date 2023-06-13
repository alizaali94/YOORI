@extends('admin.partials.master')
@section('otp_setting_menu')
    active
@endsection
@section('otp_setting')
    active
@endsection
@section('title')
    {{ __('Otp Setting') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('SMS Providers') }}</h2>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link {{  old('sms_method') == '' ? 'active' : '' }}" id="setting-tab" data-toggle="tab" href="#setting" role="tab"
                                       aria-controls="home"
                                       aria-selected="true">{{ __('Setting') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{  (old('sms_method') == 'twilio') ? 'active' : '' }}" id="twilio-tab" data-toggle="tab" href="#twilio" role="tab"
                                       aria-controls="home"
                                       aria-selected="true">{{ __('Twilio') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('sms_method') == 'fast_2' ? 'active' : '' }}"
                                       id="fast-sms-tab" data-toggle="tab" href="#fast-2sms" role="tab"
                                       aria-controls="contact"
                                       aria-selected="false">{{ __('Fast 2SMS') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('sms_method') == 'spagreen_sms' ? 'active' : '' }}"
                                       id="spagreen-sms-tab" data-toggle="tab" href="#spagreen-sms" role="tab"
                                       aria-controls="contact"
                                       aria-selected="false">{{ __('SpaGreen') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('sms_method') == 'mimo_sms' ? 'active' : '' }}" id="mimo-tab" data-toggle="tab" href="#mimo" role="tab"
                                       aria-controls="contact"
                                       aria-selected="false">{{ __('MIMO') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('sms_method') == 'nexmo_sms' ? 'active' : '' }}" id="nexmo-tab" data-toggle="tab" href="#nexmo" role="tab"
                                       aria-controls="profile"
                                       aria-selected="false">{{ __('Nexmo') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('sms_method') == 'ssl_wireless' ? 'active' : '' }}" id="ssl-wireless-tab" data-toggle="tab" href="#ssl-wireless"
                                       role="tab" aria-controls="contact"
                                       aria-selected="false">{{ __('SSL Wireless') }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">

                        <div class="tab-pane fade {{ old('sms_method') == '' ? 'show active' : '' }}" id="setting" role="tabpanel"
                             aria-labelledby="setting-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{__('Setting')}}</h4>
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    @if (hasPermission('otp_setting_update'))
                                    <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="fast_2_route">{{ __('Active SMS Provider') }}</label>
                                            <select name="active_sms_provider" class="form-control selectric" id="active_sms_provider">
                                                <option value="">{{ __('Select Provider') }}</option>
                                                @if(settingHelper('is_twilio_sms_activated') == 1)
                                                    <option value="twilio" {{ settingHelper('active_sms_provider') == 'twilio' ? 'selected' : ''}}>{{ __('Twilio') }}</option>
                                                @endif
                                                @if(settingHelper('is_fast_2_activated') == 1)
                                                    <option value="fast_2" {{ settingHelper('active_sms_provider') == 'fast_2' ? 'selected' : ''}}>{{ __('Fast 2SMS') }}</option>
                                                @endif
                                                @if(settingHelper('is_spagreen_sms_activated') == 1)
                                                    <option value="spagreen" {{ settingHelper('active_sms_provider') == 'spagreen' ? 'selected' : ''}}>{{ __('SpaGreen') }}</option>
                                                @endif
                                                @if(settingHelper('is_mimo_sms_activated') == 1)
                                                    <option value="mimo" {{ settingHelper('active_sms_provider') == 'mimo' ? 'selected' : ''}}>{{ __('Mimo') }}</option>
                                                @endif
                                                @if(settingHelper('is_nexmo_sms_activated') == 1)
                                                    <option value="nexmo" {{ settingHelper('active_sms_provider') == 'nexmo' ? 'selected' : ''}}>{{ __('Nexmo') }}</option>
                                                @endif
                                                @if(settingHelper('is_ssl_wireless_sms_activated') == 1)
                                                    <option value="ssl_wireless" {{ settingHelper('active_sms_provider') == 'ssl_wireless' ? 'selected' : ''}}>{{ __('SSL Wireless') }}</option>
                                                @endif
                                            </select>
                                            @if ($errors->has('active_sms_provider'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('active_sms_provider') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="phone_default_country">{{ __('Default Country') }}</label>
                                            <select name="phone_default_country" class="form-control selectric" id="phone_default_country">
                                                @foreach(get_yrsetting('locale') as $locale)
                                                    <option value="{{ strtoupper($locale) }}" {{ old('phone_default_country') == strtoupper($locale) ? 'selected' : (settingHelper('phone_default_country') == strtoupper($locale) ? 'selected' : '') }}>{{ strtoupper($locale) }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                     </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('sms_method') == 'fast_2' ? 'show active' : '' }}"
                             id="fast-2sms" role="tabpane1"
                             aria-labelledby="fast-sms-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{ __('Fast 2SMS Credential') }}</h4>
                                </div>
                                <div class="form-group">
                                    @if(settingHelper('is_fast_2_activated') == 1)
                                        <a href="{{route('test.number','fast2')}}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                    @endif
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2 {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input type="checkbox" name="custom-switch-checkbox" value="sms-status-change/{{ 'is_fast_2_activated' }}"
                                                    {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                   class="{{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input " {{ settingHelper('is_fast_2_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_fast_2_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure Fast2SMS credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                    @if(hasPermission('otp_setting_update'))
                                     <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="fast_2_auth_key">{{ __('Auth Key') }} *</label>
                                            <input type="hidden" name="sms_method" value="fast_2">
                                            <input type="text" name="fast_2_auth_key" id="fast_2_auth_key"
                                                   value="{{ old('fast_2_auth_key') ? old('fast_2_auth_key') : settingHelper('fast_2_auth_key') }}"
                                                   placeholder="AVcDEljksadj"
                                                   class="form-control">
                                            @if ($errors->has('fast_2_auth_key'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('fast_2_auth_key') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="fast_2_entity_id">{{ __('Entity ID') }} *</label>
                                            <input type="text" name="fast_2_entity_id" id="fast_2_entity_id"
                                                   value="{{ old('fast_2_entity_id') ? old('fast_2_entity_id') : settingHelper('fast_2_entity_id') }}"
                                                   placeholder="A912078"
                                                   class="form-control">
                                            @if ($errors->has('fast_2_entity_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('fast_2_entity_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="fast_2_route">{{ __('Route') }}</label>
                                                <select name="fast_2_route" class="form-control selectric"
                                                        id="fast_2_route">
                                                    <option
                                                        value="dlt_manual" {{ old('fast_2_route') == 'dlt_manual' ? 'selected' : (settingHelper('fast_2_route') == 'dlt_manual' ? 'selected' : '') }}>{{ __('DLT Menual') }}</option>
                                                    <option
                                                        value="promotional_use" {{ old('fast_2_route') == 'promotional_use' ? 'selected' : (settingHelper('fast_2_route') == 'promotional_use' ? 'selected' : '') }}>{{ __('Promotional Use') }}</option>
                                                    <option
                                                        value="transactional_use" {{ old('fast_2_route') == 'transactional_use' ? 'selected' : (settingHelper('fast_2_route') == 'transactional_use' ? 'selected' : '') }}>{{ __('Transactional Use') }}</option>
                                                </select>
                                                @if ($errors->has('fast_2_route'))
                                                    <div class="invalid-feedback">
                                                        {{ $errors->first('fast_2_route') }}
                                                    </div>
                                                @endif
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="fast_2_language">{{ __('Language') }} *</label>
                                                <select name="fast_2_language" class="form-control selectric"
                                                        id="fast_2_language">
                                                    <option
                                                        value="english" {{ old('fast_2_language') == 'english' ? 'selected' : (settingHelper('fast_2_language') == 'english' ? 'selected' : '') }}>{{ __('English') }}</option>
                                                    <option
                                                        value="unicode" {{ old('fast_2_language') == 'unicode' ? 'selected' : (settingHelper('fast_2_language') == 'unicode' ? 'selected' : '') }}>{{ __('Unicode') }}</option>
                                                </select>
                                                @if ($errors->has('fast_2_language'))
                                                    <div class="invalid-feedback">
                                                        {{ $errors->first('fast_2_language') }}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="fast_2_sender_id">{{ __('Sender ID') }}</label>
                                            <input type="text" name="fast_2_sender_id" id="fast_2_sender_id"
                                                   value="{{ old('fast_2_sender_id') ? old('fast_2_sender_id') : settingHelper('fast_2_sender_id') }}"
                                                   placeholder="C1054035"
                                                   class="form-control">
                                            @if ($errors->has('fast_2_sender_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('fast_2_sender_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                      </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('sms_method') == 'spagreen_sms' ? 'show active' : '' }}"
                             id="spagreen-sms" role="tabpane6"
                             aria-labelledby="spagreen-sms-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{ __('SpaGreen Credential') }}</h4>
                                </div>
                                <div class="form-group">
                                    @if(settingHelper('is_spagreen_sms_activated') == 1)
                                        <a href="{{route('test.number','spagreen')}}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                    @endif
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2 {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="sms-status-change/{{ 'is_spagreen_sms_activated' }}"
                                                   {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                   class=" {{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input " {{ settingHelper('is_spagreen_sms_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_spagreen_sms_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure SpaGreen SMS credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                    @if(hasPermission('otp_setting_update'))
                                     <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                         <div class="form-group">
                                             <label for="spagreen_sms_api_key">{{ __('SpaGreen Api Key') }} *</label>
                                             <input type="text" name="spagreen_sms_api_key" id="spagreen_sms_api_key"
                                                    value="{{ old('spagreen_sms_api_key') ? old('spagreen_sms_api_key') : settingHelper('spagreen_sms_api_key') }}" placeholder="Wbla87d"
                                                    class="form-control">
                                             <input type="hidden" name="sms_method" value="spagreen_sms">
                                             @if ($errors->has('spagreen_sms_api_key'))
                                                 <div class="invalid-feedback">
                                                     {{ $errors->first('spagreen_sms_api_key') }}
                                                 </div>
                                             @endif
                                         </div>
                                        <div class="form-group">
                                            <label for="spagreen_secret_key">{{ __('SpaGreen Secret') }} *</label>
                                            <input type="text" name="spagreen_secret_key" id="spagreen_secret_key"
                                                   value="{{ old('spagreen_secret_key') ? old('spagreen_secret_key') : settingHelper('spagreen_secret_key') }}" placeholder="A15di6"
                                                   class="form-control">
                                            @if ($errors->has('spagreen_secret_key'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('spagreen_secret_key') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                    </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('sms_method') == 'mimo_sms' ? 'show active' : '' }}" id="mimo" role="tabpane5"
                             aria-labelledby="mimo-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{ __('MIMO Credential') }}</h4>
                                </div>
                                <div class="form-group">
                                    @if(settingHelper('is_mimo_sms_activated') == 1)
                                        <a href="{{route('test.number','mimo')}}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                    @endif
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2 {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="sms-status-change/{{ 'is_mimo_sms_activated' }}"
                                                   {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                   class=" {{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input" {{ settingHelper('is_mimo_sms_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_mimo_sms_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure Mimo SMS credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                    @if(hasPermission('otp_setting_update'))
                                    <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="mimo_username">{{ __('MIMO Username') }} *</label>
                                            <input type="hidden" name="sms_method" value="mimo_sms">
                                            <input type="text" name="mimo_username" id="mimo_username" value="{{ old('mimo_username') ? old('mimo_username') : settingHelper('mimo_username') }}" placeholder="manik1010"
                                                   class="form-control">
                                            @if ($errors->has('mimo_username'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('mimo_username') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="mimo_sms_password">{{ __('MIMO Password') }} *</label>
                                            <input type="password" name="mimo_sms_password" id="mimo_sms_password" value="{{ old('mimo_sms_password') ? old('mimo_sms_password') : settingHelper('mimo_sms_password') }}" placeholder="********"
                                                   class="form-control">
                                            @if ($errors->has('mimo_sms_password'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('mimo_sms_password') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="mimo_sms_sender_id">{{ __('MIMO Sender ID') }} *</label>
                                            <input type="text" name="mimo_sms_sender_id" id="mimo_sms_sender_id" value="{{ old('mimo_sms_sender_id') ? old('mimo_sms_sender_id') : settingHelper('mimo_sms_sender_id') }}" placeholder="B8h30"
                                                   class="form-control">
                                            @if ($errors->has('mimo_sms_sender_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('mimo_sms_sender_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                     </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('sms_method') == 'nexmo_sms' ? 'show active' : '' }}" id="nexmo" role="tabpane2"
                             aria-labelledby="nexmo-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{__('Nexmo Credential')}}</h4>
                                </div>
                                <div class="form-group">
                                    @if(!blank(settingHelper('is_nexmo_sms_activated')) && settingHelper('is_nexmo_sms_activated') == 1)
                                        <a href="{{ route('test.number','nexmo') }}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                    @endif
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2 {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="sms-status-change/{{ 'is_nexmo_sms_activated' }}"
                                                   {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                   class="{{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input " {{ settingHelper('is_nexmo_sms_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_nexmo_sms_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure Nexmo SMS credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                    @if(hasPermission('otp_setting_update'))
                                     <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="nexmo_sms_key">{{ __('Nexmo Key') }} *</label>
                                            <input type="hidden" name="sms_method" value="nexmo_sms">
                                            <input type="text" name="nexmo_sms_key" id="nexmo_sms_key" value="{{ old('nexmo_sms_key') ? old('nexmo_sms_key') : settingHelper('nexmo_sms_key') }}" placeholder="T9lkgfjds"
                                                   class="form-control">
                                            @if ($errors->has('nexmo_sms_key'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('nexmo_sms_key') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="nexmo_sms_secret_key">{{ __('Nexmo Secret') }} *</label>
                                            <input type="password" name="nexmo_sms_secret_key" id="nexmo_sms_secret_key" value="{{ old('nexmo_sms_secret_key') ? old('nexmo_sms_secret_key') : settingHelper('nexmo_sms_secret_key') }}" placeholder="Fb9532d"
                                                   class="form-control">
                                            <input type="hidden" name="type" value="nexmo"/>
                                            @if ($errors->has('nexmo_sms_secret_key'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('nexmo_sms_secret_key') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                    </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('sms_method') == 'twilio' ? 'show active' : '' }}" id="twilio" role="tabpanel"
                             aria-labelledby="twilio-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{__('Twilio Credential')}}</h4>
                                </div>
                                    @if(settingHelper('is_twilio_sms_activated') == 1)
                                        <a href="{{route('test.number','twilio')}}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                    @endif
                                <div class="col-md-10 middle card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="custom-switch {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input  type="checkbox" value="sms-status-change/{{ 'is_twilio_sms_activated' }}" name="custom-switch-checkbox"
                                                    {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                    class="{{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input" {{ settingHelper('is_twilio_sms_activated') == 1 ? 'checked' : ''}}>
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_twilio_sms_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure Twilio credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                            enctype="multipart/form-data">
                                            @method('put')
                                            @csrf
                                        @endif
                                        <div class="form-group">
                                            <label for="twilio_sms_sid">{{ __('Twilio SID') }} *</label>
                                            <input type="hidden" name="sms_method" value="twilio">
                                            <input type="text" name="twilio_sms_sid" id="twilio_sms_sid" value="{{ old('twilio_sms_sid') ? old('twilio_sms_sid') : settingHelper('twilio_sms_sid') }}" placeholder="Ylsdfoie"
                                                   class="form-control">
                                            @if ($errors->has('twilio_sms_sid'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('twilio_sms_sid') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="twilio_sms_auth_token">{{ __('Twilio Auth Token') }} *</label>
                                            <input type="text" name="twilio_sms_auth_token" id="twilio_sms_auth_token" value="{{ old('twilio_sms_auth_token') ? old('twilio_sms_auth_token') : settingHelper('twilio_sms_auth_token') }}" placeholder="OlOlsdfj"
                                                   class="form-control">
                                            @if ($errors->has('twilio_sms_auth_token'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('twilio_sms_auth_token') }}
                                                </div>
                                            @endif
                                        </div>
{{--                                        <div class="form-group">--}}
{{--                                            <label for="twilio_sms_verify_sid">{{ __('Twilio Verify SID') }} *</label>--}}
{{--                                            <input type="text" name="twilio_sms_verify_sid"--}}
{{--                                                   id="twilio_sms_verify_sid" value="{{ old('twilio_sms_verify_sid') ? old('twilio_sms_verify_sid') : settingHelper('twilio_sms_verify_sid') }}" placeholder="Hlskdjrewt"--}}
{{--                                                   class="form-control">--}}
{{--                                            @if ($errors->has('twilio_sms_verify_sid'))--}}
{{--                                                <div class="invalid-feedback">--}}
{{--                                                    {{ $errors->first('twilio_sms_verify_sid') }}--}}
{{--                                                </div>--}}
{{--                                            @endif--}}
{{--                                        </div>--}}
                                        <div class="form-group">
                                            <label for="valid_twilio_sms_number">{{ __('Valid Twilio Number') }} *</label>
                                            <input type="text" name="valid_twilio_sms_number" id="valid_twilio_sms_number" value="{{ old('valid_twilio_sms_number') ? old('valid_twilio_sms_number') : settingHelper('valid_twilio_sms_number') }}" placeholder="A30531014"
                                                   class="form-control">
                                            @if ($errors->has('valid_twilio_sms_number'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('valid_twilio_sms_number') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_setting_update'))
                                        </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ (old('sms_method') == 'ssl_wireless') ? 'show active' : '' }}"
                             id="ssl-wireless" role="tabpane3"
                             aria-labelledby="ssl-wireless-tab">
                            <div class="card">
                                <div class="card-header extra-padding">
                                    <h4>{{__('SSL Wireless Credential')}}</h4>
                                </div>
                                <div class="form-group">
                                    <div class="form-group">
                                        @if(settingHelper('is_ssl_wireless_sms_activated') == 1)
                                            <a href="{{route('test.number','ssl')}}" class="btn btn-outline-primary currency-add-btn cache-btn " type="button">{{__('Test Number')}}</a>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding tab-padding">
                                    <div class="form-group">
                                        <label class="custom-switch mt-2 {{ hasPermission('otp_setting_update') ? '' : 'cursor-not-allowed' }}">
                                            <input type="checkbox"
                                                   name="custom-switch-checkbox"
                                                   value="sms-status-change/{{ 'is_ssl_wireless_sms_activated' }}"
                                                   {{ hasPermission('otp_setting_update') ? '' : 'disabled' }}
                                                   class="{{ hasPermission('otp_setting_update') ? 'status-change' : '' }} custom-switch-input " {{ settingHelper('is_ssl_wireless_sms_activated') == 1 ? 'checked' : ''}} />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="custom-switch-description">{{ __('Activate') }}</span>
                                        </label>
                                        @foreach(get_yrsetting('is_ssl_wireless_sms_activated') as $title)
                                            @if(!settingHelper( $title))
                                                <label class="col-md-9 col-from-label activator-notice">
                                                    <div class="invalid-feedback text-danger">
                                                        {{ __("N.B: You can active this service when you will configure SSL Wireless credentials .") }}
                                                    </div>
                                                </label>
                                                @break
                                            @endif
                                        @endforeach
                                    </div>
                                    @if(hasPermission('otp_setting_update'))
                                     <form action="{{ route('admin.setting.otp.update') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="ssl_sms_api_token">{{ __('SSL SMS API Token') }} *</label>
                                            <input type="hidden" name="sms_method" value="ssl_wireless">
                                            <input type="text" name="ssl_sms_api_token" id="ssl_sms_api_token" value="{{ old('ssl_sms_api_token') ? old('ssl_sms_api_token') : settingHelper('ssl_sms_api_token') }}" placeholder="CDfawefCAFEAWf"
                                                   class="form-control">
                                            @if ($errors->has('ssl_sms_api_token'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('ssl_sms_api_token') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="ssl_sms_sid">{{ __('SSL SMS SID') }} *</label>
                                            <input type="text" name="ssl_sms_sid" id="ssl_sms_sid" value="{{ old('ssl_sms_sid') ? old('ssl_sms_sid') : settingHelper('ssl_sms_sid') }}" placeholder="Djkd120"
                                                   class="form-control">
                                            @if ($errors->has('ssl_sms_sid'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('ssl_sms_sid') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="ssm_sms_url">{{ __('SSL SMS URL') }} *</label>
                                            <input type="text" name="ssm_sms_url" id="ssm_sms_url" value="{{ old('ssm_sms_url') ? old('ssm_sms_url') : settingHelper('ssm_sms_url') }}" placeholder="Jeiwrujfs"
                                                   class="form-control">
                                            @if ($errors->has('ssm_sms_url'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('ssm_sms_url') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('otp_setting_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('otp_Setting_update'))
                                     </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.common-modal')

