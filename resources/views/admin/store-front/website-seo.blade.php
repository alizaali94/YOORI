@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('website-seo')
    active
@endsection
@section('title')
    {{ __('Website SEO') }}
@endsection
@section('main-content')
    @php
        $icon = settingHelper('og_image');
    @endphp
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Store Front') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.store-front.theme-options-sitebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Website SEO') }}</h4>
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
                            <form action="{{ route('update.website.seo')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                    <div class="form-group">
                                        <label for="meta_title">{{ __('Meta Title *') }}</label>
                                        <input type="text" name="meta_title" class="form-control" value="{{ old('meta_title') ? old('meta_title') : settingHelper('meta_title', $lang) }}" id="meta_title" placeholder="{{ __('Meta Title') }}">
                                        <input type="hidden" value="{{ $lang }}" name="site_lang">

                                    </div>
                                    <div class="form-group">
                                        <label for="meta_description">{{ __('Meta Description') }}</label>
                                        <textarea  id="meta_description" cols="30" rows="5"
                                            class="form-control" name="meta_description" placeholder="{{ __('Meta Description') }}">{{ old('meta_description') ? old('meta_description') : settingHelper('meta_description', $lang) }}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="keyword">{{ __('Keyword *') }}</label>
                                        <input type="text" class="form-control inputtags" name="meta_keywords" id="meta_keywords" placeholder="{{ __('Keyword') }}" data-role="tagsinput" value="{{ settingHelper('meta_keywords', $lang) }}">
                                    </div>
                                <div class="form-group">
                                    <label for="meta_description">{{ __('Author Name') }}</label>
                                    <input  id="author_name" class="form-control" name="author_name" placeholder="{{ __('Author Name') }}" value="{{ old('author_name') ? old('author_name') : settingHelper('author_name', $lang) }}">
                                </div>
                                    <div class="form-group">
                                        <label for="site-icon">{{__('Meta Image')}} {{ __('(Open Graph Image)') }}</label>
                                        <div class="form-group">
                                                <input type="file" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="profile" name="og_image" id="customFile"
                                                value="{{ @$user->image_id }}"/>
                                        </div>
                                        <div>
                                            @if(@$icon !='' && is_file_exists(@$icon['image_72x72']))
                                            <img src="{{ static_asset($icon['image_72x72'])}}" alt="" id="img_profile" class="img-thumbnail site-icon">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_profile" class="img-thumbnail site-icon ">
                                            @endif
                                        </div>
                                    </div>
                                    <div class="text-md-right">
                                        <button class="btn btn-outline-primary" id="save-btn">{{ __('Update') }}</button>
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
