@extends('admin.partials.master')

@section('sellers_active')
    active
@endsection
@section('title')
    {{ __('packages') }}
@endsection
@section('packages')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row justify-content-center">
                <div class="col-sm-xs-8 col-md-8">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ isset($edit) ? __('edit_package') : trans('add_package') }}</h4>
                        </div>
                        <div class="invalid-feedback text-info pl-4">
                            {{ __('exclude_express_seller') }}
                        </div>
                        <div class="card-body">
                            @php
                                $route = isset($edit) ? route('seller_packages.update',$edit->id) : route('seller_packages.store')
                            @endphp
                            @isset($edit)
                                <form id="lang">
                                    <div class="form-group">
                                        <label for="">{{ __('Language') }}</label>
                                        <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                        <select class="form-control selectric lang" name="lang">
                                            <option value="">{{ __('Select Language') }}</option>
                                            @foreach($languages as $language)
                                                <option
                                                        value="{{ $language->locale }}" {{( $lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </form>
                            @endisset
                            <form method="POST" action="{{ $route }}" enctype="multipart/form-data">
                                @csrf
                                @if(isset($edit))
                                    @method('put')
                                    <input type="hidden" name="lang_id" value="{{ $package_language->id }}">
                                    <input type="hidden" value="{{ $package_language->translation_null == 'not-found' ? '' : $package_language->id }}" name="translate_id">

                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                @else
                                    <input type="hidden" value="{{ settingHelper('default_language') }}" name="lang">
                                @endif
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" name="title" id="title"
                                           value="{{ isset($package_language) ? $package_language->title : old('title') }}"
                                           placeholder="{{__('Title')}}" tabindex="1">
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="price">{{__('Price')}}</label>
                                    <input type="number" step="any" class="form-control" name="price" id="price"
                                           value="{{ old('price') ? : (isset($edit) ? $edit->price : '') }}"
                                           placeholder="{{__('price')}}" tabindex="1">
                                    @if ($errors->has('price'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('price') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="product_upload_limit">{{__('product_upload_limit')}}</label>
                                    <input type="number" class="form-control" name="product_upload_limit"
                                           id="product_upload_limit"
                                           value="{{ old('product_upload_limit') ? : (isset($edit) ? $edit->product_upload_limit : '') }}"
                                           placeholder="{{__('product_upload_limit')}}" tabindex="1">
                                    @if ($errors->has('product_upload_limit'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_upload_limit') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="duration">{{__('duration')}}</label>
                                    <input type="number" class="form-control" name="duration" id="duration"
                                           value="{{ old('duration') ? : (isset($edit) ? $edit->duration : '') }}"
                                           placeholder="{{__('duration')}}" tabindex="1">
                                    @if ($errors->has('duration'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('duration') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="status">{{ __('Status') }}</label>
                                    <select class="form-control selectric" name="status" id="status">
                                        <option value="1" {{ isset($edit) && $edit->status == 0 ? '' : 'selected' }}>{{ __('active') }}</option>
                                        <option value="0" {{ isset($edit) && $edit->status == 0 ? 'selected' : '' }}>{{ __('inactive') }}</option>
                                    </select>
                                    @if ($errors->has('status'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('status') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('Image') }} ({{ __('150*150') }})</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                             data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="image"
                                                   value="{{ old('image') ? : (isset($edit) ? $edit->image_id : '') }}"
                                                   class="image-selected">
                                            <span class="form-control"><span
                                                        class="counter">{{ old('image') ? : (isset($edit) && $edit->image ? 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                     data-id="{{ isset($edit) ? $edit->image_id : null }}">
                                                    @if (isset($edit) && $edit->image && array_key_exists('image_72x72',$edit->image) && is_file_exists($edit->image['image_72x72'], $edit->image['storage']))
                                                        <img
                                                                src="{{ get_media($edit->image['image_72x72'], $edit->image['storage']) }}"
                                                                alt=""
                                                                class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="category-banner" class="img-thumbnail logo-profile">
                                                    @endif
                                                    @isset($edit)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i
                                                                        class="bx bx-x"></i></a>
                                                        </div>
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @if ($errors->has('image'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('image') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
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