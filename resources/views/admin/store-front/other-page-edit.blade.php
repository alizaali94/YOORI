@extends('admin.partials.master')

@section('store_front_active')
    active
@endsection
@section('other_page')
    active
@endsection
@section('title')
    {{ __('Other Pages Edit') }}
@endsection
@php
    $slug = substr($pageLang->page->link,26)
@endphp

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Page') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Page Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
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
                            <form action="{{ route('page.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="title">{{ __('Title') }} *</label>
                                        <input type="text" name="title" id="title"
                                               value="{{ old('title') ? old('title') : $pageLang->title }}"
                                               class="form-control" placeholder="{{ __('Enter Page Title') }}" required>

                                        <input type="hidden"
                                               value="{{ $pageLang->translation_null == 'not-found' ? '' : $pageLang->id }}"
                                               name="page_lang_id">
                                        <input type="hidden" value="{{ $pageLang->page->id }}" name="page_id">
                                        <input type="hidden" value="{{ $lang }}" name="lang">
                                        <input type="hidden"
                                               value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                               name="r">

                                        @if ($errors->has('title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    @if($pageLang->page->type == 'custom_page')
                                        <div class="form-group col-md-12">
                                            <label for="title">{{ __('Link/Slug') }} </label>
                                            <div class="input-group">
                                                <input type="text" name="link" id="link"
                                                       value="{{ old('link') ? old('link') : $pageLang->page->link }}"
                                                       class="form-control"
                                                       placeholder="{{__('Link/Slug')}}">
                                                <input type="hidden" value="{{$pageLang->page->type}}" name="type"/>
                                                <small id="passwordHelpBlock" class="form-text text-muted">
                                                    {{__('If you want to use others web link like (https://www.google.com/maps,https:/, www.facebook.com/profile) then insert link, otherwise insert just slug')}}
                                                </small>
                                                @if ($errors->has('link'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('link') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    @else
                                        <div class="form-group col-md-12">
                                            <label for="link">{{ __('Link') }} *</label>
                                            <div class="justify-between">
                                                <input type="url" name="link" id="link"
                                                       value="{{ old('link') ? old('link') : $pageLang->page->link }}"
                                                       class="form-control"
                                                       {{$pageLang->page->id <= 7 ? 'disabled' : ''}} placeholder="{{ __('Enter link') }}"
                                                       required>
                                            </div>
                                            @if ($errors->has('link'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('link') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    @endif
                                </div>
                                @if($pageLang->page->id != 7)
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="content">{{ __('Content') }}</label>
                                        <textarea type="text" name="content" id="content"
                                                  class="form-control summernote"
                                                  placeholder="{{ __('Enter content') }}"> {{ old('content') ? old('content') : $pageLang->content }} </textarea>
                                        @if ($errors->has('content'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('content') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                @endif
                                @if($pageLang->page->id == 7)
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="email">{{ __('Email') }}</label>
                                        <input type="text" name="email" id="email"
                                               value="{{ old('email') ? old('email') : $pageLang->page->email }}"
                                               class="form-control" placeholder="{{ __('Enter Email') }}">
                                        @if ($errors->has('email'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('email') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="optional_email">{{ __('Optional Email') }}</label>
                                            <input type="text" name="optional_email" id="optional_email"
                                                   value="{{ old('optional_email') ? old('optional_email') : $pageLang->page->optional_email }}"
                                                   class="form-control" placeholder="{{ __('Enter Optional Email') }}">
                                            @if ($errors->has('optional_email'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('optional_email') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="phone">{{ __('Phone') }}</label>
                                            <input type="text" name="phone" id="phone"
                                                   value="{{ old('phone') ? old('phone') : $pageLang->page->phone }}"
                                                   class="form-control" placeholder="{{ __('Enter Phone') }}">
                                            @if ($errors->has('phone'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('phone') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="optional_phone">{{ __('Optional Phone') }}</label>
                                            <input type="text" name="optional_phone" id="optional_phone"
                                                   value="{{ old('optional_phone') ? old('optional_phone') : $pageLang->page->optional_phone }}"
                                                   class="form-control" placeholder="{{ __('Enter Optional Phone') }}">
                                            @if ($errors->has('optional_phone'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('optional_phone') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="address">{{ __('Address') }}</label>
                                            <input type="text" name="address" id="address"
                                                   value="{{ old('address') ? old('address') : $pageLang->address }}"
                                                   class="form-control" placeholder="{{ __('Enter Address') }}">
                                            @if ($errors->has('address'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('address') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endif
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="meta_title">{{ __('Meta Title') }}</label>
                                        <input type="text" name="meta_title" id="meta_title"
                                               value="{{ old('meta_title') ? old('meta_title') : $pageLang->meta_title }}"
                                               class="form-control" placeholder="{{ __('Enter meta title') }}">
                                        @if ($errors->has('meta_title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="meta_description">{{ __('Meta Description') }}</label>
                                        <input type="text" name="meta_description" id="meta_description"
                                               value="{{ old('meta_description') ? old('meta_description') : $pageLang->meta_description }}"
                                               class="form-control" placeholder="{{ __('Enter meta description') }}">
                                        @if ($errors->has('meta_description'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_description') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="keywords">{{ __('Meta Keyword') }}</label>
                                        <input type="text" name="keywords" id="keywords"
                                               value="{{ old('keywords') ? old('keywords') : $pageLang->keywords }}"
                                               class="form-control inputtags"
                                               placeholder="{{ __('Enter meta keyword') }}">
                                        @if ($errors->has('keywords'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('keywords') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <div class="form-group">
                                            <label for="logo">{{ __('Meta Image') .' ('.__('Open Graph').')' }}</label>
                                            <div class="form-group">
                                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                     data-selection="single"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="meta_image"
                                                           value="{{ old('meta_image') != '' ? old('meta_image') : $pageLang->page->meta_image_id }}"
                                                           class="image-selected">
                                                    <span class="form-control"><span
                                                            class="counter">{{ old('meta_image') != '' ? substr_count(old('meta_image'), ',') + 1  : ($pageLang->page->meta_image_id != '' ? substr_count($pageLang->page->meta_image_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    <div class="mt-4 gallery gallery-md d-flex">
                                                        <div class="selected-media mt-0 m-2"
                                                             data-id="{{ $pageLang->page->meta_image_id }}">
                                                            @if ($pageLang->page->meta_image != [] && is_file_exists(@$pageLang->page->meta_image['image_72x72'], $pageLang->page->meta_image['storage']))
                                                                <img
                                                                    src="{{ get_media($pageLang->page->meta_image['image_72x72'], $pageLang->page->meta_image['storage']) }}"
                                                                    alt="{{ $pageLang->title }}"
                                                                    class="img-thumbnail logo-profile">
                                                            @else
                                                                <img
                                                                    src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                    alt="{{ $pageLang->title }}"
                                                                    class="img-thumbnail logo-profile">
                                                            @endif
                                                            @if($pageLang->meta_image_id != null)
                                                                <div class="image-remove">
                                                                    <a href="javascript:void(0)" class="remove"><i
                                                                            class="bx bx-x"></i></a>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @if($pageLang->page->id == 7)
                                    <h2 class="section-title">{{ __('google_map') }}</h2>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="api_key">{{ __('api_key') }}</label>
                                            <input type="text" name="map_api_key" id="api_key"
                                                   value="{{ old('map_api_key') ? old('map_api_key') : settingHelper('map_api_key') }}"
                                                   class="form-control"
                                                   placeholder="{{ __('map_api_key') }}">
                                            @if ($errors->has('map_api_key'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('map_api_key') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="zoom_level">{{ __('zoom_level') }}</label>
                                            <input type="number" name="zoom_level" id="zoom_level"
                                                   value="{{ old('zoom_level') ? old('zoom_level') : settingHelper('zoom_level') }}"
                                                   class="form-control"
                                                   placeholder="{{ __('zoom_level') }}">
                                            @if ($errors->has('zoom_level'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('zoom_level') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label for="latitude"
                                                   class="form-control-label">{{ __('latitude') }}</label>
                                            <input type="text" name="latitude" placeholder="{{ __('enter_latitude') }}"
                                                   value="{{ old('latitude') ? old('latitude') : settingHelper('latitude') }}"
                                                   class="form-control" id="latitude"/>
                                            @if ($errors->has('latitude'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('latitude') }}
                                                </div>
                                            @endif
                                        </div>

                                        <div class="form-group col-lg-6">
                                            <label for="longitude"
                                                   class="form-control-label">{{ __('longitude') }}</label>
                                            <input type="text" name="longitude"
                                                   placeholder="{{ __('enter_longitude') }}"
                                                   value="{{ old('longitude') ? old('longitude') : settingHelper('longitude') }}"
                                                   class="form-control" id="longitude"/>
                                            @if ($errors->has('longitude'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('longitude') }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endif
                                <div class="form-row">
                                    <div class="form-group col-md-12 text-right">
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                            {{ __('Save') }}
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
    @include('admin.common.selector-modal')
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
