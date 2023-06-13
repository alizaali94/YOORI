@extends('admin.partials.master')

@section('title')
    {{ __('Refund Setting') }}
@endsection
@section('refund_active')
    active
@endsection
@section('refund_setting')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Refund Setting') }}</h2>
                </div>
            </div>
            <div class="col-md-9 col-sm middle">
                <div class="card" id="settings-card">
                    <div class="card-header">
                        <h4>{{ __('Set Refund Time') }}</h4>
                    </div>

                    <div class="col-md-10 middle card-body">
                        @if(hasPermission('refund_setting_update'))
                            <form action="{{ route('refund.setting.update') }}" method="post"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                @endif

                                <div class="form-group">
                                    <p class="text-info">
                                        {{ __('N.B: Make sure you have active wallet system. Otherwise refunded amount will not show on customer account.') }}
                                    </p>
                                    <label class="custom-switch mt-2 {{ hasPermission('refund_setting_update') ? '' : 'cursor-not-allowed' }}">
                                        <input type="checkbox" name="refund_with_shipping_cost" value="1"
                                               {{ hasPermission('refund_setting_update') ? '' : 'disabled' }}
                                               class="custom-switch-input" {{ settingHelper('refund_with_shipping_cost') == 1 ? 'checked' : ''}} />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">{{ __('Refund with shipping cost') }}</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="refund_request_time"
                                           class="form-control-label">{{ __('Set Time for sending Refund Request') }}
                                        <small>{{ __('(Day)') }}</small></label>
                                    <input type="number" name="refund_request_time"
                                           placeholder="{{ __('Enter Refund Request Time') }}"
                                           value="{{ settingHelper('refund_request_time') }}" class="form-control"
                                           id="refund_request_time">
                                    @if ($errors->has('refund_request_time'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('refund_request_time') }}</p>
                                        </div>
                                    @endif
                                </div>
                                @php
                                    $refund_sticker = settingHelper('refund_sticker');
                                @endphp
                                <div class="form-group">
                                    <label for="refund_policy_agreement">{{ __('Refund Policy') }}</label>
                                    <select class="form-control selectric" name="refund_policy_agreement">
                                        <option value="">{{ __('Select Page') }}</option>
                                        @foreach($pages as $page)
                                            <option value="{{ $page->link }}" {{ settingHelper('refund_policy_agreement') == $page->link ? 'selected' : '' }}>{{ $page->getTranslation('title',app()->getLocale()) }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="refund-sticker">{{ __('Refund Sticker') }}</label>
                                    <div class="form-group">
                                        <input type="file" id="refund-sticker"
                                               class="custom-file-input image_pick file-select" accept="image/*"
                                               data-image-for="profile" name="refund_sticker" id="customFile"/>
                                        @if ($errors->has('refund_sticker'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('refund_sticker') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div>
                                        @if(@$refund_sticker !=[] && is_file_exists($refund_sticker['image_72x72'] , $refund_sticker['storage']))
                                            <img src="{{ static_asset($refund_sticker['image_72x72']), $refund_sticker['storage']}}"
                                                 alt="" id="img_profile" class="img-thumbnail site-icon">
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                 alt="refund-sticker" id="img_profile" class="img-thumbnail site-icon ">
                                        @endif
                                    </div>
                                </div>
                                @if(hasPermission('refund_setting_update'))
                                    <div class="text-right btn-margin">
                                        <button class="btn btn-outline-primary"
                                                id="save-btn">{{ __('Update') }}</button>
                                    </div>
                                @endif
                                @if(hasPermission('refund_setting_update'))
                            </form>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-sm middle">
                <div class="card" id="settings-card">
                    <div class="card-header">
                        <h4>{{ __('Refund Protection') }}</h4>
                    </div>
                    <div class="col-md-10 middle card-body">
                        <form class="" id="lang">
                            <div class="form-group">
                                <label for="lang">{{ __('Language') }}</label>
                                <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                       name="r">
                                <select class="form-control selectric lang" name="lang">
                                    <option value="">{{ __('Select Language') }}</option>
                                    @foreach($languages as $language)
                                        <option value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('lang'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('lang') }}</p>
                                    </div>
                                @endif
                            </div>
                        </form>
                        @if(hasPermission('refund_setting_update'))
                            <form action="{{ route('refund.setting.update') }}" method="post"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                @endif
                                <div class="form-group">
                                    <label for="refund_protection_title"
                                           class="form-control-label">{{ __('Refund Protection Title') }}</label>
                                    <input type="text" name="refund_protection_title"
                                           placeholder="{{ __('Enter title') }}"
                                           value="{{ settingHelper('refund_protection_title', $lang) }}"
                                           class="form-control" id="refund_protection_title">
                                    <input type="hidden" value="{{ $lang }}" name="site_lang">
                                    @if ($errors->has('refund_protection_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('refund_protection_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="refund_protection_sub_title"
                                           class="form-control-label">{{ __('Refund Protection Sub-title') }}</label>
                                    <input type="text" name="refund_protection_sub_title"
                                           placeholder="{{ __('Enter sub-title') }}"
                                           value="{{ settingHelper('refund_protection_sub_title', $lang) }}"
                                           class="form-control" id="refund_protection_sub_title">
                                    @if ($errors->has('refund_protection_sub_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('refund_protection_sub_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                @if(hasPermission('refund_setting_update'))
                                    <div class="text-right btn-margin">
                                        <button class="btn btn-outline-primary"
                                                id="save-btn">{{ __('Update') }}</button>
                                    </div>
                                @endif
                            </form>
                            @if(hasPermission('refund_setting_update'))
                                </form>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('admin.common.selector-modal')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush

