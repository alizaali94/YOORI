@extends('admin.partials.master')
    @php
        $title = isset($edit) ? trans('Slider Edit') : __('Slider Add')
    @endphp
@section('title')
    {{ $title }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-10 middle">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ isset($edit) ? trans('Edit Slider') : __('Add New Slider')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            @php
                                $route = isset($edit) ? route('sliders.update',$edit->id) : route('sliders.store')
                            @endphp

                            <form method="POST" action="{{ $route }}">
                                @csrf
                                @isset($edit)
                                    @method('put')

                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                           name="r">

                                @endisset
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="order">{{ __('Order') }}</label>
                                            <input type="number" class="form-control" name="order" id="order"
                                                   value="{{ isset($edit) ? $edit->order : old('order') }}"
                                                   placeholder="{{__('Order')}}">
                                            @if ($errors->has('order'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('order') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="link">{{ __('Link') }}</label>
                                            <input type="text" class="form-control" name="link" id="link"
                                                   value="{{ isset($edit) ? $edit->link : old('link') }}"
                                                   placeholder="{{__('Link')}}">
                                            @if ($errors->has('link'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('link') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="logo">{{ __('Background Image') }} ({{ __('970*400') }})</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                             data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="bg_image" value="{{ isset($edit) ? $edit->bg_image_id : '' }}"
                                                   class="image-selected">
                                            <span class="form-control"><span
                                                    class="counter">{{ isset($edit) && $edit->bg_image_id ? 1 : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                     data-id="{{ isset($edit) ? $edit->bg_image_id : null }}">
                                                    @if (isset($edit) && $edit->bg_image_id && array_key_exists('image_72x72',$edit->bg_image) && is_file_exists($edit->bg_image['image_72x72'], $edit->bg_image['storage']))
                                                        <img
                                                            src="{{ get_media($edit->bg_image['image_72x72'], $edit->bg_image['storage']) }}"
                                                            alt=""
                                                            class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="category-banner" class="img-thumbnail logo-profile">
                                                    @endif
                                                    @isset($edit)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @if ($errors->has('bg_image'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('bg_image') }}</p>
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

@push('script')
    <script>
        (function ($){
            'use strict'

            $(document).ready(function (){
            })
        })(jQuery)
    </script>
@endpush
