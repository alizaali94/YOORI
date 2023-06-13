@extends('admin.partials.master')
@section('otp_setting_menu')
    active
@endsection
@section('sms_templates')
    active
@endsection
@section('title')
    {{ __('SMS Templates') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('SMS Templates') }}</h2>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                                @foreach($sms_templates as $template)
                                    <li class="nav-item">
                                        <a class="nav-link {{ old('tab_key') ?  (old('tab_key') == $template->tab_key ? 'active':"") : ( $loop->first ? 'active': "" )}}"
                                           id="{{ $template->tab_key }}-tab" data-toggle="tab" href="#{{ $template->tab_key }}" role="tab"
                                           aria-controls="contact"
                                           aria-selected="false">{{ __($template->title) }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        @foreach($sms_templates as $template)
                            <div class="tab-pane fade {{ old('tab_key') ?  (old('tab_key') == $template->tab_key ? 'show active': "" ) : ( $loop->first ? 'show active': "" )}}"
                             id="{{ $template->tab_key }}" role="tabpane1"
                             aria-labelledby="fast-sms-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __($template->title) }}</h4>
                                </div>
                                <div class="col-md-10 middle card-body card-body-paddding">
{{--                                    @if($template->tab_key != 'signup' && $template->tab_key != 'login')--}}
                                        <div class="form-group">
                                            <label class="custom-switch mt-2 {{ hasPermission('sms_template_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox"
                                                       name="custom-switch-checkbox"
                                                       value="sms-template-status-change/{{ $template->id }}"
                                                       {{ hasPermission('sms_template_update') ? '' : 'disabled' }}
                                                       class="{{ hasPermission('sms_template_update') ? 'status-change' : '' }} custom-switch-input " {{ $template->status == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>
{{--                                    @endif--}}
                                    @if(hasPermission('sms_template_update'))
                                     <form action="{{ route('update-sms-templates') }}" method="post"
                                        enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label for="sms_body">{{ __('SMS Body') }} *</label>
                                            <textarea name="sms_body" class="form-control">{{ $template->sms_body }}</textarea>
                                            <input type="hidden" name="id" value="{{ $template->id }}" class="form-control">

                                            <input type="hidden" name="tab_key" value="{{ $template->tab_key }}" class="form-control">

                                            <div class="invalid-feedback text-info">
                                                {{ __('N.B: Do Not edit/remove the merge fields like "{_____}"') }}
                                            </div>
                                            @if ($errors->has('sms_body'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('sms_body') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="template_id">{{ __('Fast2SMS Template ID') }}</label>
                                            <input type="text" name="template_id"
                                                   value="{{ $template->template_id }}"
                                                   placeholder="263"
                                                   class="form-control">
                                            <div class="invalid-feedback text-info">
                                                {{ __('N.B: Your approved Template ID for this SMS. Required only for Fast2SMS') }}
                                            </div>
                                            @if ($errors->has('template_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('template_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('sms_template_update'))
                                        <div class="form-group text-right">
                                            <button class="btn btn-icon icon-left btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('sms_template_update'))
                                     </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
