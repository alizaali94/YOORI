<!DOCTYPE html>
<html lang="{{ $active_language ? $active_language->locale : 'en' }}"
      dir="{{ $active_language ? $active_language->text_direction : 'ltr' }}">
@php
    if (isAppMode())
       {
          $version = 104;
          $version_code = "1.0.4";
       }
    else{
        $version = 150;
        $version_code = "1.5.0";
    }
@endphp
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="{{settingHelper('author_name')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta name="base_url" content="{{url('/')}}">
    <title>@yield('title',settingHelper('system_name'))</title>
    <!-- SEO -->
    <meta name='title' content="{!! $meta['meta_title'] !!}"/>
    <meta name="description" content="{!! $meta['meta_description'] !!}"/>
    <meta name='keywords' content="{{ $meta['meta_keywords'] }}"/>
    <meta property='article:published_time' content="{{ $meta['meta_published_time'] }}"/>
    <meta property='article:section' content="{{ $meta['meta_section'] }}"/>
    <!-- END SEO -->


    <!-- Open Graph -->
    <meta property="og:title" content="{!! $meta['meta_title'] !!}"/>
    <meta property="og:description" content="{!! $meta['meta_description'] !!}"/>
    <meta property="og:url" content="{{ $meta['meta_url'] }}"/>
    <meta property="og:type" content="{{ $meta['meta_section'] }}"/>
    <meta property="og:locale" content="{{ app()->getLocale() }}"/>
    <meta property="og:site_name" content="{{ settingHelper('system_name') }}"/>
    <meta property="og:image" content="{{ $meta['meta_image'] }}"/>
    <meta property="og:image:size" content="300"/>
    <!-- END Open Graph -->

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="{!! $meta['meta_title'] !!}"/>
    <meta name="twitter:site" content="{{ $meta['meta_url'] }}"/>
    <!-- END Twitter Card -->
    <!-- icons -->
    <link rel="icon" href="{{ $favicon['image_16x16'] }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ $favicon['image_144x144'] }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ $favicon['image_114x114'] }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ $favicon['image_72x72'] }}">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ $favicon['image_57x57'] }}">
    <!-- END icons -->

    <!-- Font -->
    <link href="{{fontURL()}}" rel="stylesheet">
    <!-- CSS -->

    <link rel="stylesheet" href="{{ mix('frontend/css/app.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/materialdesignicons.min.css') }}?version={{ $version }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/vue-toastr-2.min.css') }}?version={{$version}}">


    <link rel="stylesheet" href="{{ static_asset('frontend/css/vue-slick-carousel.css') }}?version={{$version}}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/vue-slick-carousel-theme.css') }}?version={{$version}}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/vue-select.css') }}?version={{$version}}">

    @if(isDemoServer())
        <link rel="stylesheet" href="{{ static_asset('frontend/css/color-switcher.css') }}?version={{$version}}">
    @endif

    @if($settings['text_direction'] == 'rtl')
        <link rel="stylesheet" href="{{ static_asset('frontend/css/rtl.css') }}?version={{$version}}">
    @endif
    <style>
        :root {
            --primary-color: {{ settingHelper('primary_color')}};
            --menu-active-color: {{ settingHelper('menu_active_color') }};
            --menu-bg-color: {{ settingHelper('menu_background_color') }};
            --menu-text-color: {{ settingHelper('menu_text_color') }};
            --primary-font: '{{primaryFont()}}', sans-serif;
            --profile-sidebar: {{ settingHelper('menu_background_color').'10' }};
            --sidebar-base-color: {{ settingHelper('primary_color').'20'}};
            --btn-bg-color: {{ settingHelper('button_background_color') }};
            --btn-txt-color: {{ settingHelper('button_text_color') }};
            --btn-bdr-color: {{ settingHelper('button_border_color') }};
        }

        @if(settingHelper('full_width_menu_background') !='1' && settingHelper('header_theme') == 'header_theme1')
               .header-menu.header_theme1 {
            background-color: transparent !important;
        }

        @endif
        @if(base64_decode(settingHelper('custom_css')))
            {{ base64_decode(settingHelper('custom_css')) }}
        @endif
            @if(settingHelper('is_tawk_messenger_activated') == 1)
        .fb_dialog_content iframe {
            margin-right: 90px !important;
        }
        @endif
    </style>

    @if(request()->route()->getName() == 'product-details')
        <!-- Google Schema for Product -->
        <script TYPE="application/ld+json">
            {!! $meta['itemprop'] !!}
        </script>
    @endif

    @if(settingHelper('custom_header_script'))

        {!! base64_decode(settingHelper('custom_header_script')) !!}

    @endif

    @laravelPWA
{{--    @preload--}}
    @if(settingHelper('is_google_analytics_activated') && settingHelper('tracking_code'))
        {!! base64_decode(settingHelper('tracking_code')) !!}
    @endif
</head>

<body class="sg-active">
<div id="app">
    @if(settingHelper('is_facebook_pixel_activated') && settingHelper('facebook_pixel_id'))
        {!! base64_decode(settingHelper('facebook_pixel_id')) !!}
    @endif
    <frontend_master :languages="{{ $languages }}" :pages="{{ json_encode($pages) }}" :currencies="{{ json_encode($currencies) }}"
                    :active_language="{{ json_encode($active_language) }}"
                    :active_currency="{{ json_encode($active_currency) }}"
                    :categories="{{ json_encode($categories) }}" :sliders="{{ json_encode($sliders) }}"
                    :shop_follower="{{ json_encode($shop_follower) }}" :services="{{ json_encode($services) }}"
                    :settings_data="{{ json_encode($settings) }}"
                    :banners="{{ json_encode($banners) }}"
                    :viewed_products="{{ json_encode($viewed_products) }}"
                    :compare_list="{{ json_encode($compare_list) }}" :wishlists="{{ $wishlists }}"
                    @if($user) :user="{{ $user }}" @endif  @if(count($carts) > 0) :carts="{{ json_encode($carts) }}"
                    @endif :add_ons="{{ json_encode($addons) }}"
                    :default_currency="{{ $default_currency }}" :home_components="{{ json_encode($home_components) }}"
                    :default_assets="{{ json_encode($default_assets) }}">
    </frontend_master>
</div>

<input type="hidden" id="token" value="{{ csrf_token() }}">
<input type="hidden" id="base_url" value="{{ url('/') }}">
<input type="hidden" id="app_path" value="{{ config('app.app_path', '/') }}">

<input type="hidden" id="api_key" value="{{ settingHelper('api_key') }}">
<input type="hidden" id="auth_domain" value="{{ settingHelper('auth_domain') }}">
<input type="hidden" id="project_id" value="{{ settingHelper('project_id') }}">
<input type="hidden" id="storage_bucket" value="{{ settingHelper('storage_bucket') }}">
<input type="hidden" id="messaging_sender_id" value="{{ settingHelper('messaging_sender_id') }}">
<input type="hidden" id="app_id" value="{{ settingHelper('app_id') }}">
<input type="hidden" id="measurement_id" value="{{ settingHelper('measurement_id') }}">

<script src="{{ mix('frontend/js/app.js') }}" async></script>
<script src="{{ static_asset('frontend/js/vue-toastr-2.js') }}?version={{$version}}"></script>

@if(settingHelper('is_pusher_notification_active') == 1 && Sentinel::check())
    <input type="hidden" value="{{ settingHelper('pusher_app_key') }}" id="f_pusher_app_key">
    <input type="hidden" value="{{ settingHelper('pusher_app_cluster') }}" id="f_pusher_app_cluster">
@endif

<script>
    let conversation_active = '{{ settingHelper('conversation') }}';
    let fb_object = {
        status: '{{ settingHelper('is_facebook_messenger_activated') }}',
        color: '{{ settingHelper('facebook_messenger_color') }}',
        id: '{{ settingHelper('facebook_page_id') }}',
    };
    let tawk_object = {
        status: '{{ settingHelper('is_tawk_messenger_activated') }}',
        widget_id: '{{ settingHelper('tawk_widget_id') }}',
        property_id: '{{ settingHelper('tawk_property_id') }}',
    };

    //facebook chat
    @if(settingHelper('is_tawk_messenger_activated') == 1)
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/{{ settingHelper('tawk_property_id') }}/{{ settingHelper('tawk_widget_id') }}';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
        window.Tawk_API = window.Tawk_API || {};
        Tawk_API.customStyle = {
            visibility : {
                desktop : {
                    position : '{{ $settings["text_direction"] ==  "rtl" ?  "bl" : "br"}}',
                    xOffset : '25px',
                    yOffset : '{{ $settings["text_direction"] ==  "rtl" ?  "৪0px" : "20px"}}'
                },
                mobile : {
                    position : '{{ $settings["text_direction"] ==  "rtl" ?  "bl" : "br"}}',
                    xOffset : '25px',
                    yOffset : '{{ $settings["text_direction"] ==  "rtl" ?  "70px" : "70px"}}'
                }
            }
        };       
    })();
    @endif
    // "vue-fb-customer-chat": "^0.2.1"
    //fb chat

    @if(settingHelper('is_facebook_messenger_activated') == 1)
        window.fbAsyncInit = function () {
        FB.init({
            appId: 'facebook-developer-app-id',

            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.3'
        });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    @endif


        //toastr setting
    window.toastr.options.progressBar       = true;
    window.toastr.options.positionClass     = "toast-bottom-right";
    window.toastr.options.closeButton       = true;

    window.captcha = '';
    window.myCallback = function (val) {
        window.captcha = val;
    };

    @if(Session::has('info'))
    toastr.info('{{Session::get('info')}}', 'Info !!')
    @elseif(Session::has('success'))
    toastr.success('{{Session::get('success')}}', 'Success !!' )
    @elseif(Session::has('warning'))
    toastr.warning('{{Session::get('warning')}}', 'Warning !!' )
    @elseif(Session::has('error'))
    toastr.error('{{Session::get('error')}}', 'Error !!' )
    @endif
</script>
<div class="fb-customerchat"
     attribution=setup_tool
     page_id="{{ (int)settingHelper('facebook_page_id') }}"
     theme_color="{{ settingHelper('facebook_messenger_color') }}">
</div>

@if(settingHelper('custom_footer_script'))
    {!! base64_decode(settingHelper('custom_footer_script')) !!}
@endif


@if(isDemoServer())
    <div class="sg-yoori-switcher {{ settingHelper('header_theme') == 'header_theme2' ? 'theme-color-switcher' : ''}}">
        <div class="sg-yoori-switcher-close"><i class="mdi mdi-cog"></i></div>
        <div class="color-switcher">
            <div class="color-switcher-title">
                <h4>Theme Options</h4>
            </div>
            <div class="color-switcher-inner">
                <div class="color-switch">
                    <div class="picker-title">
                        <h6 class="cs-title">Accent Color</h6>
                    </div>
                    <input type="color" value="#C9151B" id="colorPicker-accent">
                </div>
                <div class="color-switch {{ settingHelper('header_theme') == 'header_theme2' ? 'd-none' : '' }}">
                    <div class="picker-title">
                        <h6 class="cs-title">Menu BG Color</h6>
                    </div>
                    <input type="color" value="#000" id="colorPicker-bg">
                </div>
                <div class="color-switch {{ settingHelper('header_theme') == 'header_theme2' ? 'd-none' : '' }}">
                    <div class="picker-title">
                        <h6 class="cs-title">Menu Text Color</h6>
                    </div>
                    <input type="color" value="#fff" id="colorPicker-m-text">
                </div>
                <div class="color-switch">
                    <div class="picker-title">
                        <h6 class="cs-title">Direction</h6>
                    </div>
                    <div class="rtl-btn switcher_dir">
                        <a href="{{ route('set.text-direction','ltr') }}"
                           class="btn-ltr {{ @$active_language->text_direction == 'ltr' ? 'active' : '' }}">
                            <span></span>LTR</a>
                        <a href="{{ route('set.text-direction','rtl') }}"
                           class="btn-rtl {{ @$active_language->text_direction == 'rtl' ? 'active' : '' }}">RTL
                            <span></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sg-yoori-purchase-btn">
        <a href="https://1.envato.market/yoori" target="_blank" class="sg-yoori-purchase">
            <div class="sg-yoori-purchase-price"><span>$</span>
                69
            </div>
            <div class="em-logo">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve">
                <path d="M12.869.088c-.572-.281-3.474.04-5.566 2.047-3.296 3.291-3.217 7.627-3.217 7.627s-.109.446-.573-.201c-1.016-1.295-.484-4.274-.424-4.689.084-.585-.289-.602-.444-.409-3.672 5.098-.356 9.272 1.815 10.597 2.542 1.551 7.556 1.55 9.553-2.85C16.501 6.731 13.586.439 12.869.088z" fill="#ffffff"></path>
             </svg>
            </div>
        </a>
    </div>
@endif
</body>
</html>

