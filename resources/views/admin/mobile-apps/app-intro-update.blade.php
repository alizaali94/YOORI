@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('app_intro_settings_active')
    active
@endsection
@section('app_intro_settings')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Update App Intro') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-body card-body-paddding">
                            <div class="card-header input-title">
                                <h4>{{ __('App Intro') }}</h4>
                            </div>
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)
                                            <option
                                                value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>
                            <form action="{{ route('app.intro.update') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="hidden"value="{{ $appIntroLanguage->translation_null == 'not-found' ? '' : $appIntroLanguage->id }}"
                                           name="app_intro_lang_id">
                                    <input type="hidden" value="{{ $appIntroLanguage->appIntro->id }}" name="app_intro_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $appIntroLanguage->title }}"
                                           class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="order">{{ __('Order By') }}</label>
                                    <input type="text" name="order" id="order"
                                           value="{{ old('order') ? old('order') : $appIntroLanguage->order }}"
                                           class="form-control">
                                    @if ($errors->has('order'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('order') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="image">{{ __('Image') }}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="image" value="{{ $appIntroLanguage->appIntro->image_id }}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ $appIntroLanguage->appIntro->image_id ? 1 : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <div class="selected-media mt-0 m-2" data-id="{{ $appIntroLanguage->appIntro->image_id }}">
                                                    @if ($appIntroLanguage->appIntro->image != [] && @is_file_exists(@$appIntroLanguage->appIntro->image['image_72x72'], $appIntroLanguage->appIntro->image['storage']))
                                                        <img src="{{ get_media($appIntroLanguage->appIntro->image['image_72x72'], $appIntroLanguage->appIntro->image['storage']) }}" alt="{{ $appIntroLanguage->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ $appIntroLanguage->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @endif
                                                    @if($appIntroLanguage->appIntro->image_id != null)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="description">{{ __('Description') }}</label>
                                    <textarea class="form-control" name="description"
                                              id="description">{{ $appIntroLanguage->description }}</textarea>
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
    </section>
    <!-- Modal -->
@include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush

