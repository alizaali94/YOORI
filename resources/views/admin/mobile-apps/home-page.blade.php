@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('home_page_setting_active')
    active
@endsection
@section('home_page_setting')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('home_screen') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                <div class="col-md-12 col-sm">
                    <div class="section-body">
                        <form action="{{ route('mobile.home.page.update') }}" method="POST" enctype="multipart/form-data"
                              id="home_page_contents">
                            @csrf
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                                    <div class="home-content" id="dragger-brop-menu">
                                        @php
                                            $content_count = 0;
                                        @endphp
                                        @if(settingHelper('mobile_home_page_contents'))
                                            @foreach(settingHelper('mobile_home_page_contents') as $contents)
                                                @php
                                                    $type = array_key_first($contents);
                                                    $content_count++;
                                                    $update = true;
                                                @endphp
                                                @include('admin.store-front.home-page-contents', compact('type', 'contents','update','content_count'))
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
                                                <div class="card builder add-home-content" data-type="banner" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-image-rollover"></i>
                                                    </div>
                                                    <p class="title">{{__('Banner')}}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="campaign" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-call-to-action"></i>
                                                    </div>
                                                    <p class="title">{{ __('Campaigns') }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="popular_category" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-time-line"></i>
                                                    </div>
                                                    <p class="title">{{ __('Popular Categories') }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="top_category" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-time-line"></i>
                                                    </div>
                                                    <p class="title">{{ __('Top Categories') }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="todays_deal" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-clock-o"></i>
                                                    </div>
                                                    <p class="title">{{ __("Today's Deal") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="flash_deal" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-flash"></i>
                                                    </div>
                                                    <p class="title">{{ __("Flash Deal") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="category_section" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-thumbnails-right"></i>
                                                    </div>
                                                    <p class="title">{{ __("Product Category") }}</p>
                                                </div>
                                                @if(addon_is_activated('video_shopping'))
                                                    <div class="card builder add-home-content" data-type="video_shopping" data-area="home-content">
                                                        <div class="card-overlay">
                                                            <a href="#"><i class="eicon-plus"></i></a>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="eicon-play"></i>
                                                        </div>
                                                        <p class="title">{{ __("Video Shopping") }}</p>
                                                    </div>
                                                @endif
                                                <div class="card builder add-home-content" data-type="best_selling_products" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-star-o"></i>
                                                    </div>
                                                    <p class="title">{{ __("Best Selling") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="offer_ending_soon" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-countdown"></i>
                                                    </div>
                                                    <p class="title">{{ __("Offer Ending") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="latest_product" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-products"></i>
                                                    </div>
                                                    <p class="title">{{ __("Latest Products") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="latest_news" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-single-post"></i>
                                                    </div>
                                                    <p class="title">{{ __("Latest News") }}</p>
                                                </div>

                                                <div class="card builder add-home-content" data-type="popular_brands" data-area="home-content">
                                                    <div class="card-overlay">
                                                        <a href="#"><i class="eicon-plus"></i></a>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="eicon-favorite"></i>
                                                    </div>
                                                    <p class="title">{{ __("Popular Brands") }}</p>
                                                </div>
                                                @if(settingHelper('seller_system') == 1)
                                                    <div class="card builder add-home-content" data-type="top_sellers" data-area="home-content">
                                                        <div class="card-overlay">
                                                            <a href="#"><i class="eicon-plus"></i></a>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="eicon-cart"></i>
                                                        </div>
                                                        <p class="title">{{ __("Top Shops") }}</p>
                                                    </div>

                                                    <div class="card builder add-home-content" data-type="featured_sellers" data-area="home-content">
                                                        <div class="card-overlay">
                                                            <a href="#"><i class="eicon-plus"></i></a>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="eicon-cart"></i>
                                                        </div>
                                                        <p class="title">{{ __("Featured Shops") }}</p>
                                                    </div>

                                                    <div class="card builder add-home-content" data-type="best_sellers" data-area="home-content">
                                                        <div class="card-overlay">
                                                            <a href="#"><i class="eicon-plus"></i></a>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="eicon-cart"></i>
                                                        </div>
                                                        <p class="title">{{ __("Best Shops") }}</p>
                                                    </div>

                                                    <div class="card builder add-home-content" data-type="express_sellers" data-area="home-content">
                                                        <div class="card-overlay">
                                                            <a href="#"><i class="eicon-plus"></i></a>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="eicon-cart"></i>
                                                        </div>
                                                        <p class="title">{{ __("Express Shops") }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h4>{{__("Preferences")}}</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="form-group row mt-2">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="mobile_subscription_section" {{ settingHelper('mobile_subscription_section') == 1 ? 'checked' :  '' }}
                                                    class="custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Subscription Section') }}</span>
                                                </label>
                                            </div>
                                            <div class="form-group row mt-2">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="mobile_service_info_section" {{ settingHelper('mobile_service_info_section') == 1 ? 'checked' :  '' }}
                                                    class="custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Benefit Section Under Slider') }}</span>
                                                </label>
                                            </div>
                                            <div class="form-group row mt-2">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="mobile_recent_viewed_products" {{ settingHelper('mobile_recent_viewed_products') == 1 ? 'checked' :  '' }}
                                                    class="custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Recent Viewed Products') }}</span>
                                                </label>
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
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <input type="hidden" name="mobile_home" value="1" class="mobile_home"> 
    </section>
    <input type="hidden" value="{{ $content_count }}" id="content_number">
    @include('admin.common.selector-modal')
@endsection

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/eicon/css/elementor-icons.css') }}">
@endsection
@push('page-script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-div-load.js') }}"></script>
    <script src="{{ static_asset('admin/js/sortable.js') }}"></script>
    <script src="{{ static_asset('admin/js/jquery-sortable.js') }}"></script>
    <script src="{{ static_asset('admin/js/ajax-sortable-menu.js') }}"></script>
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush
