<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="title" content="{{ settingHelper('meta_title') }}" />
    <meta name="description" content="{{ settingHelper('meta_description') }}" />
    <meta name="keyword" content="{{ settingHelper('keyword') }}" />
    <meta name="article" content="{{ settingHelper('article') }}" />
    <meta name="language" content="{{ settingHelper('default_language') }}" />
    <title>@yield('title') | {{ settingHelper('admin_panel_title') != '' ?  settingHelper('admin_panel_title') : __('Yoori') }}</title>
@php
    $logo = settingHelper('og_image');
@endphp

    @if($logo != [] && $logo['original_image'] != '')
        <meta property="og:image" content="{{ static_asset($logo['original_image']) }}" />
    @else
        <meta property="og:image" content="{{static_asset('default-image/default-730x400.png') }}" alt="{!! settingHelper('meta_title') !!}" />
    @endif
    <!-- General CSS Files -->
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap.min.css') }}">

    <!-- Icon -->
    <link rel="stylesheet" href="{{ static_asset('admin/boxicons/css/boxicons.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/materialdesignicons.min.css') }}">

    <!-- Library -->
    <link rel="stylesheet" href="{{ static_asset('admin/css/selectric.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/toastr.min.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/select2.min.css') }}">

    @yield('page-style')

    <!-- Template CSS -->
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap-tagsinput.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/components.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/style.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap-colorpicker.min.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/yoori.css') }}">
    <link rel="stylesheet" href="{{ static_asset('fonts/inter/css.css') }}">
    <!-- Custom CSS -->
    @if (request()->is('admin/pos'))
        <link rel="stylesheet" href="{{static_asset('frontend/css/vue-toastr-2.min.css')}}">
    @endif
    <link rel="stylesheet" href="{{ static_asset('admin/css/custom.css') }}">
    @if ($locale_language->text_direction == 'rtl')
        <link rel="stylesheet" href="{{ static_asset('admin/css/rtl.css') }}">
    @endif

    <!-- Favicon -->
    @php
        $icon = settingHelper('favicon');
    @endphp
    <link rel="apple-touch-icon" sizes="57x57"
        href="{{ ($icon != [] && @is_file_exists($icon['image_57x57_url'])) ? static_asset($icon['image_57x57_url']) : static_asset('images/ico/favicon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60"
        href="{{ ($icon != [] && @is_file_exists($icon['image_60x60_url'])) ? static_asset($icon['image_60x60_url']) : static_asset('images/ico/favicon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72"
        href="{{ ($icon != [] && @is_file_exists($icon['image_72x72_url'])) ? static_asset($icon['image_72x72_url']) : static_asset('images/ico/favicon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76"
        href="{{ ($icon != [] && @is_file_exists($icon['image_76x76_url'])) ? static_asset($icon['image_76x76_url']) : static_asset('images/ico/favicon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114"
        href="{{ ($icon != [] && @is_file_exists($icon['image_114x114_url'])) ? static_asset($icon['image_114x114_url']) : static_asset('images/ico/favicon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120"
        href="{{ ($icon != [] && @is_file_exists($icon['image_120x120_url'])) ? static_asset($icon['image_120x120_url']) : static_asset('images/ico/favicon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144"
        href="{{ ($icon != [] && @is_file_exists($icon['image_144x144_url'])) ? static_asset($icon['image_144x144_url']) : static_asset('images/ico/favicon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152"
        href="{{ ($icon != [] && @is_file_exists($icon['image_152x152_url'])) ? static_asset($icon['image_152x152_url']) : static_asset('images/ico/favicon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180"
        href="{{ ($icon != [] && @is_file_exists($icon['image_180x180_url'])) ? static_asset($icon['image_180x180_url']) : static_asset('images/ico/favicon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"
        href="{{ ($icon != [] && @is_file_exists($icon['image_192x192_url'])) ? static_asset($icon['image_192x192_url']) : static_asset('images/favicon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32"
        href="{{ ($icon != [] && @is_file_exists($icon['image_32x32_url'])) ? static_asset($icon['image_32x32_url']) : static_asset('images/ico/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96"
        href="{{ ($icon != [] && @is_file_exists($icon['image_96x96_url'])) ? static_asset($icon['image_96x96_url']) : static_asset('images/ico/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
        href="{{ ($icon != [] && @is_file_exists($icon['image_16x16_url'])) ? static_asset($icon['image_16x16_url']) : static_asset('images/ico/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ static_asset('images/ico/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage"
        content="{{ ($icon != [] && @is_file_exists($icon['image_144x144_url'])) ? static_asset($icon['image_144x144_url']) : static_asset('images/ico/favicon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <meta name="get-me" content="{{ Sentinel::getUser()->user_type == 'seller' ? 'seller' : 'admin'}}" />
    <!-- End Favicon -->
    @yield('style')
    @stack('style')
</head>
