<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    'recaptcha' => [
        'site_key' => '6LcVeqMeAAAAAIpvG2nbIm0SIqy7twMv4luWg1l6',
        'secret' => '6LcVeqMeAAAAAFp2l6TmaqMg8ZU87VglYsKOIek2',
    ],
    'facebook' => [
        'client_id'     => env('FACEBOOK_CLIENT_ID'),  //Facebook API
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),  //Facebook Secret
        'redirect'      => env('FACEBOOK_CALLBACK_URL'),
    ],
    'google' => [
        'client_id'     => env('GOOGLE_CLIENT_ID'), //Google API
        'client_secret' => env('GOOGLE_CLIENT_SECRET'), //Google Secret
        'redirect'      => env('GOOGLE_CALLBACK_URL'),
    ],
    'twitter' => [
        'client_id'     => env('TWITTER_CLIENT_ID'), //Twitter API,
        'client_secret' => env('TWITTER_CLIENT_SECRET'), //Twitter Secret,
        'redirect'      => env('TWITTER_CALLBACK_URL'),
    ],
    'razorpay' => [
        'RAZORPAY_KEY' => "",
        'RAZORPAY_SECRET' => ""
    ],
    'paytm-wallet' => [
        'env' => 'local', // values : (local | production)
        'merchant_id' => env('YOUR_MERCHANT_ID'),
        'merchant_key' => env('YOUR_MERCHANT_KEY'),
        'merchant_website' => env('YOUR_WEBSITE'),
        'channel' => env('YOUR_CHANNEL'),
        'industry_type' => env('YOUR_INDUSTRY_TYPE'),
    ],


];
