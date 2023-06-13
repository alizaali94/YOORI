@extends('admin.partials.master')
@section('footer_content')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('copyright')
    active
@endsection
@section('title')
    {{ __('Copyright') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.footer-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="about" role="tabpane1"aria-labelledby="about-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{__(' Copyright Widget')}}
                                </div>
                                <div class="card-body col-8 middle">
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
                                    <form method="post" action="{{route('update')}}">
                                        @csrf
                                        @method('put')
                                        <div class="form-group">
                                            <label for="copyright">{{__('Copyright Text')}}</label>
                                            <div class="form-group row mb-12">
                                                <div class="col-sm-12 col-md-12">
                                                    <textarea id="copyright" name="copyright" class="form-control">{{old('copyright') ? old('copyright') : settingHelper('copyright',$lang)}}</textarea>
                                                    <input type="hidden" value="{{ $lang }}" name="site_lang">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary" id="save-btn">{{__('Update')}}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

