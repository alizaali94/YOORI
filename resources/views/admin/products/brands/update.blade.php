@extends('admin.partials.master')
@php
    @endphp
@section('title')
    {{ __('Brand Edit') }}
@endsection
@section('product_active')
    active
@endsection
@section('brands')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Brand') }}</h2>
                </div>
                @if(hasPermission('brand_read'))
                    <div class="buttons add-button">
                        <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-7 middle">
                    <div class="card">
                        <div class="card-body card-body-paddding">
                            <div class="card-header input-title pl-0">
                                <h4>{{ __('Brand') }}</h4>
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

                            <form action="{{ route('admin.update.brand') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')

                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="hidden"value="{{ $brand_language->translation_null == 'not-found' ? '' : $brand_language->id }}"
                                           name="brand_lang_id">
                                    <input type="hidden" value="{{ $brand_language->brand->id }}" name="brand_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $brand_language->title }}"
                                           class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug"
                                           value="{{ old('slug') ? old('slug') : $brand_language->brand->slug }}"
                                           class="form-control">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="logo">{{ __('Brand Logo') }} {{__('(130x93)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="logo" value="{{ old('banner') !='' ? old('banner') : $brand_language->brand->logo_id }}" class="image-selected">
                                            <span class="form-control"><span class="counter"> {{ old('logo') != '' ? substr_count(old('logo'), ',') + 1  : ($brand_language->brand->logo_id ? 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        @if(old('banner') != null)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                 data-id="{{ old('logo') }}">
                                                @php
                                                    $media = \App\Models\Media::find(old('logo'));
                                                @endphp
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                    <img
                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                        alt="brand-logo"
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
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <div class="selected-media mt-0 m-2" data-id="{{ $brand_language->brand->logo_id }}">
                                                    @if ($brand_language->brand->logo != [] && is_file_exists(@$brand_language->brand->logo['image_72x72'], $brand_language->brand->logo['storage']))
                                                        <img src="{{ get_media($brand_language->brand->logo['image_72x72'], $brand_language->brand->logo['storage']) }}" alt="{{ $brand_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ $brand_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @endif
                                                    @if($brand_language->brand->logo_id != null)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('Banner') }} ({{ __('835x200') }})</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="banner" value="{{ old('banner') !='' ? old('banner') : $brand_language->brand->banner_id }}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : ($brand_language->brand->banner_id ? 1 : 0) }}
                                                    </span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        @if(old('banner') != null)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                 data-id="{{ old('banner') }}">
                                                @php
                                                    $media = \App\Models\Media::find(old('banner'));
                                                @endphp
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
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
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <div class="selected-media mt-0 m-2" data-id="{{ $brand_language->brand->banner_id }}">
                                                    @if ($brand_language->brand->banner != [] && is_file_exists(@$brand_language->brand->banner['image_72x72'], $brand_language->brand->banner['storage']))
                                                        <img src="{{ get_media($brand_language->brand->banner['image_72x72'], $brand_language->brand->banner['storage']) }}" alt="{{ $brand_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ $brand_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @endif
                                                    @if($brand_language->brand->banner_id != null)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title') }}</label>
                                    <input type="text" name="meta_title" id="meta_title"
                                           value="{{ old('meta_title') ? old('meta_title') : $brand_language->meta_title }}"
                                           class="form-control">
                                    @if ($errors->has('meta_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="meta_description">{{ __('Meta Description') }}</label>
                                    <textarea class="form-control" name="meta_description"
                                              id="meta_description">{{ $brand_language->meta_description }}</textarea>
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


