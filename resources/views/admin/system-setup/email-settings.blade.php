@extends('admin.partials.master')
@section('title')
    {{ __('Email Settings') }}
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('email_setting_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('email.setting')
    active
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
                            <h4>{{ __('Email Settings') }}</h4>
                            <form action="">
                                <div class="form-group">
                                    <a href="" class="btn btn-outline-primary cache-btn" data-toggle="modal"
                                       data-target="#exampleModal">
                                        {{ __('Test Mail') }}
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('admin.email.setting.update') }}" method="post"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="mail_driver" class="form-control-label">{{ __('Mail Driver') }}</label>
                                    <div class="custom-file">
                                        @php
                                            $mail_driver = settingHelper('mail_driver');
                                        @endphp
                                        <select class="form-control selectric" name="mail_driver" id="mail_driver">
                                            <option
                                                {{ old('mail_driver') =='smtp' ? 'selected' : (((old('mail_driver') =='' && $mail_driver =='smtp')  || $mail_driver == '') ? 'selected' : '' ) }} value="smtp">
                                                SMTP ({{ __('Recommended') }})
                                            </option>
                                            <option
                                                {{ old('mail_driver') =='sendgrid' ? 'selected' : ((old('mail_driver') =='' && $mail_driver =='sendgrid') ? 'selected' : '' ) }} value="sendgrid">
                                                SendGrid
                                            </option>
                                            <option
                                                {{ old('mail_driver') =='mailgun' ? 'selected' : ((old('mail_driver') =='' && $mail_driver =='mailgun') ? 'selected' : '' ) }} value="mailgun">
                                                MailGun
                                            </option>
                                            <option
                                                {{ old('mail_driver') =='sendmail' ? 'selected' : ((old('mail_driver') =='' && $mail_driver =='sendmail') ? 'selected' : '' ) }} value="sendmail">
                                                Sendmail
                                            </option>
                                        </select>
                                    </div>
                                    @if ($errors->has('mail_driver'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('mail_driver') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div id="smtpDiv"
                                     class="{{ old('mail_driver') =='smtp' ? '' : (((old('mail_driver') =='' && $mail_driver =='smtp')  || ($mail_driver == '' && old('mail_driver') =='')) ? '' : 'd-none' ) }}">
                                    <div class="form-group">
                                        <label for="smtp_mail_host"
                                               class="form-control-label">{{ __('Mail Host') }}</label>
                                        <input type="text" name="smtp_mail_host"
                                               placeholder="{{ __('Enter mail host') }}"
                                               value="{{ old('smtp_mail_host') ? old('smtp_mail_host') : settingHelper('smtp_mail_host') }}"
                                               class="form-control" id="smtp_mail_host">
                                        @if ($errors->has('smtp_mail_host'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_host') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_mail_port"
                                               class="form-control-label">{{ __('Mail Port') }}</label>
                                        <input type="number" name="smtp_mail_port"
                                               placeholder="{{ __('Enter mail port') }}"
                                               value="{{ old('smtp_mail_port') ? old('smtp_mail_port') : settingHelper('smtp_mail_port') }}"
                                               class="form-control" id="smtp_mail_port">
                                        @if ($errors->has('smtp_mail_port'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_port') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_mail_address"
                                               class="form-control-label">{{ __('mail_from_address') }}</label>
                                        <input type="email" name="smtp_mail_address"
                                               placeholder="{{ __('Enter mail address') }}"
                                               value="{{ old('smtp_mail_address') ? old('smtp_mail_address') : (isDemoServer() ? emailAddressMask(settingHelper('smtp_mail_address')) : settingHelper('smtp_mail_address'))}}"
                                               class="form-control" id="smtp_mail_address">
                                        @if ($errors->has('smtp_mail_address'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_address') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_name" class="form-control-label">{{ __('Name') }}</label>
                                        <input type="text" name="smtp_name" placeholder="{{ __('Enter name') }}"
                                               value="{{ old('smtp_name') ? old('smtp_name') : settingHelper('smtp_name') }}"
                                               class="form-control" id="smtp_name">
                                        @if ($errors->has('smtp_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_mail_username"
                                               class="form-control-label">{{ __('Mail Username') }}</label>
                                        <input type="text" name="smtp_mail_username"
                                               placeholder="{{ __('Enter mail username') }}"
                                               value="{{ old('smtp_mail_username') ? old('smtp_mail_username') : (isDemoServer() ? Str::of(settingHelper('smtp_mail_username'))->mask('*', 0, strlen(settingHelper('smtp_mail_username'))-3) : settingHelper('smtp_mail_username')) }}"
                                               class="form-control" id="smtp_mail_username">
                                        @if ($errors->has('smtp_mail_username'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_username') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_mail_password"
                                               class="form-control-label">{{ __('Mail Password') }}</label>
                                        <input type="password" name="smtp_mail_password"
                                               placeholder="{{ __('Enter mail password') }}"
                                               value="{{ old('smtp_mail_password') ? old('smtp_mail_password') : (isDemoServer() ? "********" : settingHelper('smtp_mail_password')) }}"
                                               class="form-control" id="smtp_mail_password">
                                        @if ($errors->has('smtp_mail_password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="smtp_mail_encryption_type"
                                               class="form-control-label">{{ __('Mail Encryption Type') }}</label>
                                        <div class="custom-file">
                                            <select class="form-control selectric" name="smtp_mail_encryption_type"
                                                    id="smtp_mail_encryption_type">
                                                <option value="">{{ __('Select Encryption Type') }}</option>
                                                <option {{ settingHelper('smtp_mail_encryption_type') == 'ssl' ? "selected" : "" }} value="ssl">SSL</option>
                                                <option {{ settingHelper('smtp_mail_encryption_type') == 'tls' ? "selected" : "" }} value="tls">TLS</option>
                                            </select>
                                        </div>
                                        @if ($errors->has('smtp_mail_encryption_type'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('smtp_mail_encryption_type') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div id="sendgridDiv"
                                     class="{{ old('mail_driver') == 'sendgrid' ? '' : ((old('mail_driver') =='' && $mail_driver =='sendgrid') ? '' : 'd-none' ) }}">
                                    <div class="form-group">
                                        <label for="sendgrid_mail_host"
                                               class="form-control-label">{{ __('Mail Host') }}</label>
                                        <input type="text" name="sendgrid_mail_host"
                                               placeholder="{{ __('Enter mail host') }}"
                                               value="{{ old('sendgrid_mail_host') ? old('sendgrid_mail_host') : settingHelper('sendgrid_mail_host') }}"
                                               class="form-control" id="sendgrid_mail_host">
                                        @if ($errors->has('sendgrid_mail_host'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_host') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_mail_port"
                                               class="form-control-label">{{ __('Mail Port') }}</label>
                                        <input type="number" name="sendgrid_mail_port"
                                               placeholder="{{ __('Enter mail port') }}"
                                               value="{{ old('sendgrid_mail_port') ? old('sendgrid_mail_port') : settingHelper('sendgrid_mail_port') }}"
                                               class="form-control" id="sendgrid_mail_port">
                                        @if ($errors->has('sendgrid_mail_port'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_port') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_mail_address"
                                               class="form-control-label">{{ __('Mail Address') }}</label>
                                        <input type="email" name="sendgrid_mail_address"
                                               placeholder="{{ __('Enter mail address') }}"
                                               value="{{ old('sendgrid_mail_address') ? old('sendgrid_mail_address') : (isDemoServer() ? emailAddressMask(settingHelper('sendgrid_mail_address')) : settingHelper('sendgrid_mail_address')) }}"
                                               class="form-control" id="sendgrid_mail_address">
                                        @if ($errors->has('sendgrid_mail_address'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_address') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_name" class="form-control-label">{{ __('Name') }}</label>
                                        <input type="text" name="sendgrid_name" placeholder="{{ __('Enter name') }}"
                                               value="{{ old('sendgrid_name') ? old('sendgrid_name') : settingHelper('sendgrid_name') }}"
                                               class="form-control" id="sendgrid_name">
                                        @if ($errors->has('sendgrid_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_mail_username"
                                               class="form-control-label">{{ __('Mail Username') }}</label>
                                        <input type="text" name="sendgrid_mail_username"
                                               placeholder="{{ __('Enter mail username') }}"
                                               value="{{ old('sendgrid_mail_username') ? old('sendgrid_mail_username') : settingHelper('sendgrid_mail_username') }}"
                                               class="form-control" id="sendgrid_mail_username">
                                        @if ($errors->has('sendgrid_mail_username'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_username') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_mail_password"
                                               class="form-control-label">{{ __('Mail Password') }}<small class="text-warning text-muted">({{ __('Sendgrid API Key') }})</small></label>
                                        <input type="password" name="sendgrid_mail_password"
                                               placeholder="{{ __('Enter mail password') }}"
                                               value="{{ old('sendgrid_mail_password') ? old('sendgrid_mail_password') : (isDemoServer() ? "*****************" : settingHelper('sendgrid_mail_password')) }}"
                                               class="form-control" id="sendgrid_mail_password">
                                        @if ($errors->has('sendgrid_mail_password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="sendgrid_mail_encryption_type"
                                               class="form-control-label">{{ __('Mail Encryption Type') }}</label>
                                        <div class="custom-file">
                                            <select class="form-control selectric" name="sendgrid_mail_encryption_type"
                                                    id="sendgrid_mail_encryption_type">
                                                <option value="">{{ __('Select Encryption Type') }}</option>
                                                <option {{ settingHelper('sendgrid_mail_encryption_type') == 'ssl' ? "selected" : "" }} value="ssl">SSL</option>
                                                <option {{ settingHelper('sendgrid_mail_encryption_type') == 'tls' ? "selected" : "" }} value="tls">TLS</option>
                                            </select>
                                        </div>
                                        @if ($errors->has('sendgrid_mail_encryption_type'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendgrid_mail_encryption_type') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div id="sendMailDiv"
                                     class="{{ old('mail_driver') =='sendmail' ? '' : (old('mail_driver') =='' && $mail_driver =='sendmail' ? '' : 'd-none' ) }}">
                                    <div class="form-group">
                                        <label for="sendmail_path" class="form-control-label">{{ __('Path') }}</label>
                                        <input type="text" name="sendmail_path"
                                               placeholder="{{ __('Enter sendmail path') }}"
                                               value="{{ old('sendmail_path') ? old('sendmail_path') : settingHelper('sendmail_path') }}"
                                               class="form-control" id="sendmail_path">
                                        @if ($errors->has('sendmail_path'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('sendmail_path') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div id="mailgunDiv"
                                     class="{{ old('mail_driver') =='mailgun' ? '' : (old('mail_driver') =='' && $mail_driver =='mailgun' ? '' : 'd-none' ) }}">
                                    <div class="form-group">
                                        <label for="mailgun_mail_host"
                                               class="form-control-label">{{ __('Mail Host') }}</label>
                                        <input type="text" name="mailgun_mail_host"
                                               placeholder="{{ __('Enter mail host') }}"
                                               value="{{ old('mailgun_mail_host') ? old('mailgun_mail_host') : settingHelper('mailgun_mail_host') }}"
                                               class="form-control" id="mailgun_mail_host">
                                        @if ($errors->has('mailgun_mail_host'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_host') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_mail_port"
                                               class="form-control-label">{{ __('Mail Port') }}</label>
                                        <input type="number" name="mailgun_mail_port"
                                               placeholder="{{ __('Enter mail port') }}"
                                               value="{{ old('mailgun_mail_port') ? old('mailgun_mail_port') : settingHelper('mailgun_mail_port') }}"
                                               class="form-control" id="mailgun_mail_port">
                                        @if ($errors->has('mailgun_mail_port'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_port') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_mail_address"
                                               class="form-control-label">{{ __('Mail Address') }}</label>
                                        <input type="email" name="mailgun_mail_address"
                                               placeholder="{{ __('Enter mail address') }}"
                                               value="{{ old('mailgun_mail_address') ? old('mailgun_mail_address') : (isDemoServer() ? emailAddressMask(settingHelper('mailgun_mail_address')) : settingHelper('mailgun_mail_address')) }}"
                                               class="form-control" id="mailgun_mail_address">
                                        @if ($errors->has('mailgun_mail_address'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_address') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_name" class="form-control-label">{{ __('Name') }}</label>
                                        <input type="text" name="mailgun_name" placeholder="{{ __('Enter name') }}"
                                               value="{{ old('mailgun_name') ? old('mailgun_name') : settingHelper('mailgun_name') }}"
                                               class="form-control" id="mailgun_name">
                                        @if ($errors->has('mailgun_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_mail_username"
                                               class="form-control-label">{{ __('Mail Username') }}</label>
                                        <input type="text" name="mailgun_mail_username"
                                               placeholder="{{ __('Enter mail username') }}"
                                               value="{{ old('mailgun_mail_username') ? old('mailgun_mail_username') : (isDemoServer() ? emailAddressMask(settingHelper('mailgun_mail_username')) : settingHelper('mailgun_mail_username')) }}"
                                               class="form-control" id="mailgun_mail_username">
                                        @if ($errors->has('mailgun_mail_username'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_username') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_mail_password"
                                               class="form-control-label">{{ __('Mail Password') }}</label>
                                        <input type="password" name="mailgun_mail_password"
                                               placeholder="{{ __('Enter mail password') }}"
                                               value="{{ old('mailgun_mail_password') ? old('mailgun_mail_password') : (isDemoServer() ? "*****************" : settingHelper('mailgun_mail_password')) }}"
                                               class="form-control" id="mailgun_mail_password">
                                        @if ($errors->has('mailgun_mail_password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="mailgun_mail_encryption_type"
                                               class="form-control-label">{{ __('Mail Encryption Type') }}</label>
                                        <div class="custom-file">
                                            <select class="form-control selectric" name="mailgun_mail_encryption_type"
                                                    id="mailgun_mail_encryption_type">
                                                <option value="">{{ __('Select Encryption Type') }}</option>
                                                <option {{ settingHelper('mailgun_mail_encryption_type') == 'ssl' ? "selected" : "" }} value="ssl">SSL</option>
                                                <option {{ settingHelper('mailgun_mail_encryption_type') == 'tls' ? "selected" : "" }} value="tls">TLS</option>
                                            </select>
                                        </div>
                                        @if ($errors->has('mailgun_mail_encryption_type'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('mailgun_mail_encryption_type') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="mail_signature"
                                           class="form-control-label">{{ __('Mail Signature') }}</label>
                                    <div>
                                        <textarea class="summernote" id="mail_signature"
                                                  name="mail_signature">{{ old('mail_signature') ? old('mail_signature') : settingHelper('mail_signature') }}</textarea>
                                    </div>
                                    @if ($errors->has('mail_signature'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('mail_signature') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4"> {{__('update')}}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{ __('Send Test Mail') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form action="{{ route('send.test.email') }}" method="POST">
                    <div class="modal-body">

                        @csrf
                        <div class="form-group">
                            <label for="send_to" class="form-control-label">{{ __('Send To') }}</label>
                            <input type="email" name="send_to" class="form-control" id="send_to">
                            @if ($errors->has('send_to'))
                                <div class="invalid-feedback">
                                    <p>{{ $errors->first('send_to') }}</p>
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection

@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush



