
@extends('admin.partials.master')

    @php
        $title = isset($edit) ? trans('Benefit Edit') : __('Benefit Add')
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
                    <a href="{{ route('services.index')}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-8 middle">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ isset($edit) ? trans('Edit Benefit') : __('Add New Benefit')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            @php
                                $route = isset($edit) ? route('services.update',$edit->id) : route('services.store')
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

                                    <input type="hidden" value="{{ $service_language->translation_null == 'not-found' ? '' : $service_language->id }}" name="translate_id">

                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                @endisset
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" name="title" id="title"
                                           value="{{ isset($service_language) ? $service_language->title : old('title') }}"
                                           placeholder="{{__('Title')}}" tabindex="1" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>


                                <div class="form-group">
                                    <label for="sub_title">{{__('Sub Title')}}</label>
                                    <input type="text" class="form-control" name="sub_title" id="sub_title"
                                           value="{{ isset($service_language) ? $service_language->sub_title : old('sub_title') }}"
                                           placeholder="{{__('Sub Title')}}" tabindex="1" required>
                                    @if ($errors->has('sub_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('sub_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="image">{{ __('Image') }} ({{ __('40x40') }})</label>
                                    <div class="form-group">
                                        <input type="file" id="image" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="image" name="image" id="customFile" value="{{ @$user->image_id }}" />
                                    </div>
                                    <div>
                                        @if(@$edit->image['images'] !='' && is_file_exists(@$edit->image['images']['image_72x72'],$edit->image['images']['storage']))
                                            <img src="{{ get_media(@$edit->image['images']['image_72x72'],$edit->image['images']['storage'])}}" alt="" id="img_image" class="img-thumbnail site-icon" />
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_image" class="img-thumbnail site-icon" />
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group seo-image-positoin">
                                    <label for="">{{ __('Position') }}</label>
                                    <select class="form-control select2" name="position">
                                        @for($i = 1;$i<=4;$i++)
                                            <option
                                                value="{{ $i }}" {{ isset($edit) && $edit->position == $i ? 'selected' : ''}}>{{ $i }}</option>
                                        @endfor
                                    </select>
                                    @if ($errors->has('position'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('position') }}</p>
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
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush



