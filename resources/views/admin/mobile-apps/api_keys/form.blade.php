
@extends('admin.partials.master')
@section('api_key')
    active
@endsection
@section('mobile_apps')
    active
@endsection
@section('title')
    {{ __('api_key') }}
@endsection
@php
    $title = isset($edit) ? __('Edit Api Key') : trans('Add Api Key')
@endphp
@section('title')
    {{ $title}}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ route('apis.settings')}}" class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-8 middle">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ isset($edit) ? trans('Edit Api Key') : __('Add Api Key')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            @php
                                $route = isset($edit) ? route('api-keys.update',$edit->id) : route('api-keys.store')
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
                                @isset($edit)
                                    @method('put')

                                    <input type="hidden" value="{{ $api_key_language->translation_null == 'not-found' ? '' : $api_key_language->id }}" name="translate_id">

                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                @endisset
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" name="title" id="title"
                                           value="{{ isset($api_key_language) ? $api_key_language->title : old('title') }}"
                                           placeholder="{{__('Title')}}" tabindex="1" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="api_key">{{__('api_key')}}</label>
                                    <div class="input-group">
                                        <input type="text" name="key" id="api_key" value="{{ isset($edit) ? $edit->key : (old('key') ? :  strtoupper(\Illuminate\Support\Str::random(16)) ) }}" class="form-control" placeholder="{{__('api_key')}}">
                                        @if ($errors->has('key'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('key') }}</p>
                                            </div>
                                        @endif
                                        <div class="input-group-append barcode">
                                            <div class="input-group-text">
                                                <i class="bx bx-refresh"></i>
                                            </div>
                                        </div>
                                    </div>
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
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush



