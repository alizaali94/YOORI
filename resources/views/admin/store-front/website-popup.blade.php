@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('website-popup')
    active
@endsection
@section('title')
    {{ __('Website Popup') }}
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
                            <h4>{{ __('Website Popup') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
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
                            <form method="post" action="{{route('update')}}" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form">
                                    <div class="form-group">
                                        <label for="popup_title">{{ __('Title *') }}</label>
                                        <input type="text" class="form-control" name="popup_title" id="popup_title" placeholder="{{__('PopUp Title')}}" value="{{ old('popup_title') ? old('popup_title') : settingHelper('popup_title', $lang) }}">
                                        <input type="hidden" value="{{ $lang }}" name="site_lang">
                                    </div>
                                    <div class="form-group">
                                        <label for="popup_image">{{ __('PopUp Image') }}</label>
                                        <div class="form-group">
                                            <input type="file" id="popup_image" class="custom-file-input image_pick file-select" accept="image/*"  data-image-for="profile" name="popup_image" id="customFile"
                                                   value="{{ @$user->image_id }}"/>
                                        </div>
                                        <div>
                                            @if(@settingHelper('popup_image') !=[] && @is_file_exists(@settingHelper('popup_image')['image_72x72']))
                                                <img src="{{ static_asset(settingHelper('popup_image')['image_72x72'])}}" alt="" id="img_profile"class="img-thumbnail site-icon">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_profile" class="img-thumbnail site-icon ">
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group seo-image-positoin">
                                        <label for="popup_show_in">{{ __('Show In') }}</label>
                                        <select name="popup_show_in" id="popup_show_in" class="form-control selectric">
                                            <option value="home_page"{{ old('popup_show_in') == 'home_page' ? 'selected' : (old('popup_show_in') == '' && settingHelper('popup_show_in') == 'home_page' ? 'selected' : '') }}>Home Page</option>
                                            <option value="all_page" {{ old('popup_show_in') == 'all_page' ? 'selected' : (old('popup_show_in') == '' && settingHelper('popup_show_in') == 'all_page' ? 'selected' : '') }}>All Page</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="popup_description">{{ __('Popup Description') }}</label>
                                        <div class="form-group row mb-12">
                                            <div class="col-sm-12 col-md-12">
                                                <textarea id="popup_description" name="popup_description" class="form-control">{{ old('popup_description') ? old('popup_description') : settingHelper('popup_description', $lang) }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table topbar-setting-switcher">
                                        <tr>
                                            <td class="no-padding-w30 popup-status">{{ __('Status') }}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="" value="setting-status-change/{{ 'site_popup_status' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('site_popup_status') == 1 ? 'checked' : ''}}>
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
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
