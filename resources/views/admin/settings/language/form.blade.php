@extends('admin.partials.master')

@php
    $route = isset($language) ? route('admin.update.language') : route('admin.languages.store');
    $title = isset($language) ? __('Edit Language') : __('translation::translation.add_language');
    $button_name = isset($language) ? __('Update') : __('Add');
@endphp


@section('title')
    {{ $title }}
@endsection
@section('languages')
   active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">
                        {{ $title }}
                    </h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6 middle">
                <div class="card">
                    <form action="{{ $route }}" enctype="multipart/form-data" method="POST">
                        @csrf
                        @isset($language)
                            @method('PUT')
                        @endisset
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label> {{ __('Language Name') }}</label>
                                        <input type="hidden" name="id" value="{{ $language->id }}">
                                        <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                        <input type="text" name="name" placeholder="{{ __('Enter language name') }}" value="{{ $language->name }}"
                                               class="form-control" required>
                                        @if($errors->has('name'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('name') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Locale') }}</label>
                                        <select name="locale" class="form-control select2" disabled="disabled">
                                            <option value="">{{ __('Select Locale') }}</option>
                                            <option value="{{$language->locale}}" selected>{{ $language->locale }}</option>
                                        </select>
                                        @if ($errors->has('locale'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('locale') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Flag') }}</label>
                                        <select name="flag" class="flags form-control">
                                            @foreach ($flags as $flag)
                                                <option data-image="{{ static_asset($flag->image) }}"
                                                        value='{{ ' ' . $flag->image }}' {{ $flag->image == $language->flag ? 'selected' : '' }}>
                                                    {{ ' ' . $flag->title }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @if ($errors->has('flag'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('flag') }}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-outline-primary"> {{ $button_name }}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection


@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/selectric.css') }}">
@endsection

@push('script')
    <script src="{{ static_asset('admin/js/jquery.selectric.min.js') }}"></script>
@endpush
