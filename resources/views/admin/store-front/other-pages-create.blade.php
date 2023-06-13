@extends('admin.partials.master')

@section('store_front_active')
    active
@endsection
@section('other_page')
    active
@endsection
@section('title')
    {{ __('Other Pages') }}
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Add Page') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Page Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form action="{{ route('page.store') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="title">{{ __('Title') }} *</label>
                                        <input type="text" name="title" id="title"
                                               value="{{ old('title') }}"
                                               class="form-control" placeholder="{{ __('Enter Page Title') }}" required>
                                        @if ($errors->has('title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="alert-body">
                                    <div class="alert alert-light alert-has-icon p-0 mb-0">
                                        <div class="alert-icon pl-2"><i class="bx bx-bulb"></i></div>
                                        <small id="passwordHelpBlock" class="form-text">
                                            {{__('If you want to use others web link like (https://www.google.com/maps,https:/, www.facebook.com/profile) then insert link, otherwise insert just slug ("blogs,products,brands")')}}
                                        </small>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="title">{{ __('Link/Slug') }} </label>
                                        <div class="input-group">
                                            <input type="text" name="link" id="link" class="form-control"
                                                   placeholder="{{__('Link/Slug')}}">
                                            <input type="hidden" value="custom_page" name="type"/>
                                            @if ($errors->has('link'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('link') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="content">{{ __('Content') }}</label>
                                        <textarea type="text" name="content" id="content"
                                                  class="form-control summernote"
                                                  placeholder="{{ __('Enter content') }}"> {{ old('content') }}</textarea>
                                        @if ($errors->has('content'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('content') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="meta_title">{{ __('Meta Title') }}</label>
                                        <input type="text" name="meta_title" id="meta_title"
                                               value="{{ old('meta_title') }}"
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
                                               value="{{ old('meta_description') }}"
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
                                        <input type="text" name="keywords" id="keywords" value="{{ old('keywords') }}"
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
                                                           value="{{ old('meta_image') != '' ? old('meta_image') : '' }}"
                                                           class="image-selected">
                                                    <span class="form-control"><span
                                                            class="counter">{{ old('meta_image') != '' ? substr_count(old('meta_image'), ',') + 1  : '' }}</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    @if(old('meta_image') != null)
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                             data-id="{{ old('meta_image') }}">
                                                            @php
                                                                $media = \App\Models\Media::find(old('meta_image'));
                                                            @endphp
                                                            @if(is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                <img
                                                                    src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                                    alt="img-thumbnail"
                                                                    class="img-thumbnail logo-profile">
                                                            @else
                                                                <img
                                                                    src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                    alt="img-thumbnail"
                                                                    class="img-thumbnail logo-profile">
                                                            @endif
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i
                                                                        class="bx bx-x"></i></a>
                                                            </div>
                                                        </div>
                                                    @else
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                alt="brand-logo" class="img-thumbnail logo-profile">
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

