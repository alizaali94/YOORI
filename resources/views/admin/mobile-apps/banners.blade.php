@extends('admin.partials.master')
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}" />
@endsection
@section('mobile_apps')
    active
@endsection
@section('banner_settings_active')
    active
@endsection
@section('title')
    {{ __('Banners') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row justify-content-center">
                @include('admin.mobile-apps.sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="about" role="tabpane1" aria-labelledby="about-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{__('Banners')}}
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <form method="post" action="{{route('admin.banners.update')}}" enctype="multipart/form-data">
                                        @csrf
                                        @method('put')
                                        <div class="form-group">
                                            <label for="logo">{{ __('Featured Category Banner') }} {{__('(240x100)')}}</label>
                                            <div class="form-group">
                                                <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="featured_category_banner" value="{{ settingHelper('featured_category_banner') ? settingHelper('featured_category_banner')['id'] : '' }}" class="image-selected">
                                                    <span class="form-control"><span class="counter">{{ @settingHelper('featured_category_banner')['id'] ? 1 : 0 }}</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    <div class="mt-4 gallery gallery-md d-flex">
                                                        <div class="selected-media mt-0 m-2" data-id="{{ settingHelper('featured_category_banner') ? settingHelper('featured_category_banner')['id'] : '' }}">
                                                            @if (@settingHelper('featured_category_banner')['images'] != [] && @is_file_exists(@settingHelper('featured_category_banner')['images']['image_72x72'], @settingHelper('featured_category_banner')['images']['storage']))
                                                                <img src="{{ @get_media(settingHelper('featured_category_banner')['images']['image_72x72'], @settingHelper('featured_category_banner')['images']['storage']) }}" alt=""
                                                                     class="img-thumbnail logo-profile">
                                                            @else
                                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt=""
                                                                     class="img-thumbnail logo-profile">
                                                            @endif
                                                                @if(@settingHelper('featured_category_banner')['id'] != null)
                                                                <div class="image-remove">
                                                                    <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-right btn-margin">
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
    @include('admin.common.selector-modal')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
