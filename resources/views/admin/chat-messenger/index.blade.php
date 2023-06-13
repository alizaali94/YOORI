@extends('admin.partials.master')
@section('chat-messenger')
    active
@endsection
@section('chat-messenger')
    active
@endsection
@section('title')
    {{ __('Chat Messenger') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Payment Methods') }}</h2>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                        <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link {{ old('chat_messenger') == '' || old('chat_messenger') == 'facebook' ? 'active' : ''}}" id="facebook-tab" data-toggle="tab" href="#facebook" role="tab" aria-controls="contact"aria-selected="false">{{ __('Facebook Messenger') }}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ old('chat_messenger') == 'tawk' ? 'active' : '' }}" id="tawk-tab" data-toggle="tab"  href="#tawk" role="tab" aria-controls="contact"aria-selected="false">{{ __('Tawk Messenger') }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade {{ old('chat_messenger') == '' || old('chat_messenger') == 'facebook' ? 'show active' : ''}}" id="facebook" role="tabpane1" aria-labelledby="facebook-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Facebook Messenger') }}</h4>
                                </div>
                                <div class="card-body col-md-10 middle">
                                    @if(hasPermission('chat_messenger_update'))
                                    <form action="{{ route('chat.messenger.update') }}" method="post"  enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label class="custom-switch mt-2 {{ hasPermission('chat_messenger_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox"
                                                       name="is_facebook_messenger_activated"
                                                       {{ hasPermission('chat_messenger_update') ? '' : 'disabled' }}
                                                       class="custom-switch-input " {{ settingHelper('is_facebook_messenger_activated') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="facebook_page_id">{{ __('Facebook Page ID ') }}</label>
                                            <input type="hidden" name="chat_messenger"  value="facebook">
                                            <input type="text" class="form-control" name="facebook_page_id" id="facebook_page_id" value="{{ old('facebook_page_id') ? old('facebook_page_id') : settingHelper('facebook_page_id') }}" placeholder="{{ __('Facebook Page ID') }}">
                                            @if ($errors->has('facebook_page_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('facebook_page_id') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="facebook_messenger_color">{{ __('Chat Widget Color') }}*</label>
                                            <div class="input-group colorpickerinput">
                                                <input type="text" class="form-control" name="facebook_messenger_color" value="{{ old('facebook_messenger_color') ? old('facebook_messenger_color') : settingHelper('facebook_messenger_color') }}" id="facebook_messenger_color" placeholder="{{ __('Chat Widget Color') }}">
                                                <div class="input-group-append">
                                                    <div class="input-group-text">
                                                        <i class='bx bxs-color-fill' ></i>
                                                    </div>
                                                </div>
                                            </div>
                                            @if ($errors->has('facebook_messenger_color'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('facebook_messenger_color') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        @if(hasPermission('chat_messenger_update'))
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('chat_messenger_update'))
                                     </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade {{ old('chat_messenger') == 'tawk' ? 'show active' : ''}}" id="tawk" role="tabpane2" aria-labelledby="tawk-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Tawk Messenger Setting') }}</h4>
                                </div>
                                <div class="card-body col-md-10 middle">
                                    @if(hasPermission('chat_messenger_update'))
                                    <form action="{{ route('chat.messenger.update') }}" method="post"  enctype="multipart/form-data">
                                        @method('put')
                                        @csrf
                                    @endif
                                        <div class="form-group">
                                            <label class="custom-switch mt-2 {{ hasPermission('chat_messenger_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox"
                                                       name="is_tawk_messenger_activated"
                                                       {{ hasPermission('chat_messenger_update') ? '' : 'disabled' }}
                                                       class="custom-switch-input " {{ settingHelper('is_tawk_messenger_activated') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="tawk_property_id">{{ __('Tawk Property ID ') }}</label>
                                            <input type="hidden" name="chat_messenger"  value="tawk">
                                            <input type="text" class="form-control" name="tawk_property_id" id="tawk_property_id" value="{{ old('tawk_property_id') ? old('tawk_property_id') : settingHelper('tawk_property_id') }}" placeholder="{{ __('Tawk Property ID') }}">
                                            @if ($errors->has('tawk_property_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('tawk_property_id') }}
                                                </div>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="tawk_widget_id">{{ __('Widget ID') }}</label>
                                            <input type="text" class="form-control" name="tawk_widget_id" id="tawk_widget_id" value="{{ old('tawk_widget_id') ? old('tawk_widget_id') : settingHelper('tawk_widget_id') }}" placeholder="{{ __('Widget ID') }}">
                                            @if ($errors->has('tawk_widget_id'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('tawk_widget_id') }}
                                                </div>
                                            @endif
                                        </div>

                                        @if(hasPermission('chat_messenger_update'))
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                        </div>
                                        @endif
                                    @if(hasPermission('chat_messenger_update'))
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

