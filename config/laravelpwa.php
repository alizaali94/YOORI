<?php

return [
    'name' => 'Yoori',
    'manifest' => [
        'name' => env('APP_NAME', 'Yoori PWA'),
        'short_name' => 'Yoori',
        'scope' => '/',
        'start_url' => '/',
        'background_color' => '#ffffff',
        'theme_color' => '#000000',
        'display' => 'standalone',
        'orientation'=> 'portrait',
        'status_bar'=> 'black',
        'icons' => [
            '72x72' => [
                'path' => '/images/ico/favicon-72x72.png',
                'purpose' => 'any'
            ],
            '96x96' => [
                'path' => '/images/ico/favicon-96x96.png',
                'purpose' => 'any'
            ],
            '128x128' => [
                'path' => '/images/ico/favicon-128x128.png',
                'purpose' => 'any'
            ],
            '144x144' => [
                'path' => '/images/ico/favicon-144x144.png',
                'purpose' => 'any'
            ],
            '152x152' => [
                'path' => '/images/ico/favicon-152x152.png',
                'purpose' => 'any'
            ],
            '192x192' => [
                'path' => '/images/ico/favicon-192x192.png',
                'purpose' => 'any'
            ],
            '384x384' => [
                'path' => '/images/ico/favicon-384x384.png',
                'purpose' => 'any'
            ],
            '512x512' => [
                'path' => '/images/ico/favicon-512x512.png',
                'purpose' => 'any'
            ],
        ],
        'splash' => [
            '640x1136' => '/images/ico/splash-640x1136.png',
            '750x1334' => '/images/ico/splash-750x1334.png',
            '828x1792' => '/images/ico/splash-828x1792.png',
            '1125x2436' => '/images/ico/splash-1125x2436.png',
            '1242x2208' => '/images/ico/splash-1242x2208.png',
            '1242x2688' => '/images/ico/splash-1242x2688.png',
            '1536x2048' => '/images/ico/splash-1536x2048.png',
            '1668x2224' => '/images/ico/splash-1668x2224.png',
            '1668x2388' => '/images/ico/splash-1668x2388.png',
            '2048x2732' => '/images/ico/splash-2048x2732.png',
        ],
        'custom' => []
    ]
];
