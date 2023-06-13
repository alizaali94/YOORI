<!-- Web Application Manifest -->
<link rel="manifest" href="{{ route('laravelpwa.manifest') }}">
<!-- Chrome for Android theme color -->
<meta name="theme-color" content="{{ $config['theme_color'] }}">

<!-- Add to homescreen for Chrome on Android -->
<meta name="mobile-web-app-capable" content="{{ $config['display'] == 'standalone' ? 'yes' : 'no' }}">
<meta name="application-name" content="{{ $config['short_name'] }}">
@php
    $icon = settingHelper('favicon');
@endphp
<link rel="icon" sizes="512x512" href="{{ $icon != [] && @is_file_exists($icon['image_512x512_url']) ? static_asset($icon['image_512x512_url']) : static_asset('images/ico/favicon-512x512.png') }}">

<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="{{ $config['display'] == 'standalone' ? 'yes' : 'no' }}">
<meta name="apple-mobile-web-app-status-bar-style" content="{{  $config['status_bar'] }}">
<meta name="apple-mobile-web-app-title" content="{{ $config['short_name'] }}">




<link rel="apple-touch-icon" href="{{ $icon != [] && @is_file_exists($icon['image_72x72_url']) ? static_asset($icon['image_72x72_url']) : static_asset('images/ico/favicon-72x72.png') }}>

<link href="{{ ($icon != [] && @is_file_exists($icon['splash_640x1136_url'])) ? static_asset($icon['splash_640x1136_url']) : static_asset('images/ico/splash-640x1136.png') }}"
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_750x1334_url'])) ? static_asset($icon['splash_750x1334_url']) : static_asset('images/ico/splash-750x1334.png')}}"
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1242x2208_url'])) ? static_asset($icon['splash_1242x2208_url']) : static_asset('images/ico/splash-1242x2208.png') }}"
      media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1125x2436_url'])) ? static_asset($icon['splash_1125x2436_url']) : static_asset('images/ico/splash-1125x2436.png') }}"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_828x1792_url'])) ? static_asset($icon['splash_828x1792_url']) : static_asset('images/ico/splash-828x1792.png') }}"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1242x2688_url'])) ? static_asset($icon['splash_1242x2688_url']) : static_asset('images/ico/splash-1242x2688.png') }}"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1536x2048_url'])) ? static_asset($icon['splash_1536x2048_url']) : static_asset('images/ico/splash-1536x2048.png') }}"
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1668x2224_url'])) ? static_asset($icon['splash_1668x2224_url']) : static_asset('images/ico/splash-1668x2224.png') }}"
      media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_1668x2388_url'])) ? static_asset($icon['splash_1668x2388_url']) : static_asset('images/ico/splash-1668x2388.png') }}"
      media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ ($icon != [] && @is_file_exists($icon['splash_2048x2732_url'])) ? static_asset($icon['splash_2048x2732_url']) : static_asset('images/ico/splash-2048x2732.png') }}"
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

<!-- Tile for Win8 -->
<meta name="msapplication-TileColor" content="{{ $config['background_color'] }}">
<meta name="msapplication-TileImage" content="{{ $icon != [] && @is_file_exists($icon['image_72x72_url']) ? static_asset($icon['image_72x72_url']) : static_asset('images/ico/favicon-72x72.png') }}}">

<script type="text/javascript">
    // Initialize the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('{{ url('serviceworker.js') }}').then(function (registration) {
        }, function (err) {
            console.log('Yoori-Ecommerce CMS PWA: ServiceWorker registration failed: ', err);
        });
    }
</script>
