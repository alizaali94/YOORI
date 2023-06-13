@extends('admin.partials.master')

@section('title')
    {{ __('Update Your Shop') }}
@endsection
@section('shop_active')
    active
@endsection
@section('shop_setup')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="card-body p-0  mb-4 bg-white">
            <div class="form-inline">
                <div class="alert-body w-100 p-4">
                    <div class="alert alert-light alert-has-icon p-0 mb-0">
                        <div class="alert-icon pl-2"><i class="bx bx-bulb"></i></div>
                        <small id="passwordHelpBlock" class="form-text">
                            {{__('If you want to use others web link like (https://www.google.com/maps,https:/, www.facebook.com/profile) then insert link, otherwise insert just slug ("/all-blogs")')}}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-body">
            <form action="{{ route('seller.shop.update') }}" method="post" enctype="multipart/form-data"
                  id="home_page_contents">
                @csrf
                @method('put')
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                        <div class="home-content" id="dragger-brop-menu">
                            @php
                                $content_count = 0;
                            @endphp
                            @if(Sentinel::getUser()->sellerProfile->shop_page_contents != [])
                                @foreach(Sentinel::getUser()->sellerProfile->shop_page_contents as $contents)
                                    @php
                                        $type = array_key_first($contents);
                                        $content_count++;
                                        $update = true;
                                    @endphp
                                    @include('seller.setup.store-page-contents', compact('type', 'contents','update','content_count'))
                                @endforeach
                            @endif
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                        <div class="card">
                            <div class="card-header">
                                <h4>{{__("Add Sections")}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="sg-builder-content text-center builder-content">
                                    <div class="card builder add-store-content" data-type="banner" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-image-rollover"></i>
                                        </div>
                                        <p class="title">{{__('Banner')}}</p>
                                    </div>
                                    <div class="card builder add-store-content" data-type="best_selling_products" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-star-o"></i>
                                        </div>
                                        <p class="title">{{ __("Best Selling") }}</p>
                                    </div>
                                    <div class="card builder add-store-content" data-type="best_rated_products" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-rating"></i>
                                        </div>
                                        <p class="title">{{ __("Best Rated") }}</p>
                                    </div>

                                    <div class="card builder add-store-content" data-type="offer_ending_soon" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-countdown"></i>
                                        </div>
                                        <p class="title">{{ __("Offer Ending") }}</p>
                                    </div>

                                    <div class="card builder add-store-content" data-type="new_arrival" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-products"></i>
                                        </div>
                                        <p class="title">{{ __("New Arrival") }}</p>
                                    </div>

                                    <div class="card builder add-store-content" data-type="featured_products" data-area="home-content">
                                        <div class="card-overlay">
                                            <a href="#"><i class="eicon-plus"></i></a>
                                        </div>
                                        <div class="icon">
                                            <i class="eicon-cart"></i>
                                        </div>
                                        <p class="title">{{ __("Featured Products") }}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-button">
                        <button type="submit" name="status" class="btn btn-outline-primary"
                                tabindex="4">
                            {{ __('Update') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <input type="hidden" value="{{ $content_count }}" id="content_number">
    @include('admin.common.selector-modal')
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/eicon/css/elementor-icons.css') }}">
@endsection
@push('page-script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script src="{{ static_asset('admin/js/sortable.js') }}"></script>
    <script src="{{ static_asset('admin/js/jquery-sortable.js') }}"></script>
    <script src="{{ static_asset('admin/js/ajax-sortable-menu.js') }}"></script>
@endpush
