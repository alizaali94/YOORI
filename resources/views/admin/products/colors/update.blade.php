@extends('admin.partials.master')
@section('title')
     {{ __('Update') }}
@endsection
@section('color_active')
    active
@endsection
@section('product_active')
    active
@endsection
@section('main-content')
<section class="section">
    <div class="section-body">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{ __('Update Color') }}</h2>
            </div>
            <div class="buttons add-button">
                <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-outline-primary"><i class='bx bx-arrow-back'></i>{{ __('Back') }}</a>
            </div>
        </div>
        <div class="row">
            <div class="col-6 middle">
                <div class="card">
                    <div class="card-header input-title" id="Add">
                        <h4>{{ __('Update Color') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <form class="" id="lang">
                            <div class="form-group">
                                <label for="name">{{ __('Language') }}</label>
                                <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                <select class="form-control selectric lang" name="lang">
                                    <option value="">{{ __('Select Language') }}</option>
                                    @foreach($languages as $language)
                                        <option value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('lang'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('lang') }}</p>
                                    </div>
                                @endif
                            </div>
                        </form>
                        <form method="post" action="{{ route('color.update') }}">
                            @csrf
                            @isset($color_language)
                                @method('PUT')
                            @endisset
                            <div class="form-group">
                                <label for="name">{{ __('Name') }}</label>
                                <input type="hidden" value="{{ $color_language->translation_null == 'not-found' ? '' : $color_language->id }}" name="color_lang_id">
                                <input type="hidden" value="{{ $color_language->color->id }}" name="color_id">
                                <input type="hidden" value="{{ $lang }}" name="lang">
                                <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                <input value="{{ $color_language->name }}" type="text" class="form-control" name="name" id="name" placeholder="{{ __('Name') }}" tabindex="1" required autofocus>
                                @if ($errors->has('name'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('name') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="code">{{ __('Color Code') }}</label>
                                <div class="input-group colorpickerinput">
                                    <input type="text" class="form-control" name="code" value="{{ $color_language->color->code }}" id="code" placeholder="{{ __('Code') }}" required>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class='bx bxs-color-fill' ></i>
                                        </div>
                                    </div>
                                </div>
                                @if ($errors->has('code'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('code') }}</p>
                                    </div>
                                @endif
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
@endsection
