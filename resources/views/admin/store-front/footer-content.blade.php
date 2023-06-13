@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('payment_method_banner')
    active
@endsection
@section('title')
    {{ __('Footer-Content') }}
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
                                {{ __('About Widget') }}
                            </div>
                            <div class="card-body col-md-10 middle">
                                <form>
                                    <div class="form-group">
                                        <div class="row gutters-sm imagecheck-margin">
                                            <div class="col-6 col-sm-4">
                                                <label class="imagecheck mb-4">
                                                    <input name="header_theme" type="checkbox" id="header_theme" value="header_theme1" class="imagecheck-input" @if(old('header_theme') ? old('header_theme') : settingHelper('header_theme') == 'header_theme1') checked @endif/>
                                                    <div class="imagecheck-figure theme">
                                                        <img src="{{ static_asset('images/default/header_1.png') }}" class="imagecheck-image imagecheck-height" />
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <label class="imagecheck mb-4">
                                                    <input name="footer_theme" type="checkbox" id="footer_theme" value="footer_theme2" class="imagecheck-input"  checked />
                                                    <div class="imagecheck-figure theme">
                                                        <img src="{{ static_asset('images/default/footer_2.png') }}" class="imagecheck-image imagecheck-height">
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <label class="imagecheck mb-4">
                                                    <input name="footer_theme" type="checkbox" id="footer_theme" value="footer_theme3" class="imagecheck-input"  />
                                                    <div class="imagecheck-figure theme">
                                                        <img src="{{ static_asset('images/default/footer_3.png') }}" class="imagecheck-image imagecheck-height">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">{{ __('Footer Logo') }}</label>
                                        <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" >
                                        <label class="custom-file-label" for="customFile" >{{ __('Choose file') }}</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('About description') }}</label>
                                        <div class="form-group row mb-12">
                                            <div class="col-sm-12 col-md-12">
                                            <textarea class="summernote"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">{{ __('Play Store Link') }}</label>
                                        <input type="text" class="form-control" id="" placeholder="https://">
                                    </div>
                                    <div class="text-md-right">
                                    <button class="btn btn-outline-primary" id="save-btn">Save</button>
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

