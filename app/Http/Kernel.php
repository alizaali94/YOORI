<?php

namespace App\Http;

use App\Http\Middleware\CheckApiKeyMiddleware;
use App\Http\Middleware\HttpMiddleware;
use App\Http\Middleware\InstallCheckMiddleware;
use App\Http\Middleware\IsAdminMiddleware;
use App\Http\Middleware\IsCustomerMiddleware;
use App\Http\Middleware\IsSellerMiddleware;
use App\Http\Middleware\IsAdminSellerMiddleware;
use App\Http\Middleware\JwtMiddleware;
use App\Http\Middleware\LoginCheckMiddleware;
use App\Http\Middleware\LogoutCheckMiddleware;
use App\Http\Middleware\NotInstallCheckMiddleware;
use App\Http\Middleware\OnlineUserMiddleware;
use App\Http\Middleware\PermissionCheckerMiddleware;
use App\Http\Middleware\SellerPosPermission;
use App\Http\Middleware\XssMiddleware;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Fruitcake\Cors\HandleCors::class,
        \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        \App\Http\Middleware\XssMiddleware::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            OnlineUserMiddleware::class,
            HttpMiddleware::class,

        ],

        'api' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],


    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'XSS' => XssMiddleware::class,
        'loginCheck' => LoginCheckMiddleware::class,
        'logoutCheck' => LogoutCheckMiddleware::class,
        'adminCheck' => IsAdminMiddleware::class,
        'customerCheck' => IsCustomerMiddleware::class,
        'sellerCheck' => IsSellerMiddleware::class,
        'AdminSellerCheck' => IsAdminSellerMiddleware::class,
        'PermissionCheck' => PermissionCheckerMiddleware::class,
        'NotInstalledCheck' => NotInstallCheckMiddleware::class,
        'isInstalled' => InstallCheckMiddleware::class,
        'posSellerCheck' => SellerPosPermission::class,
        'CheckApiKey'=> CheckApiKeyMiddleware::class,
        'jwt.verify'=> JwtMiddleware::class,
        /**** OTHER MIDDLEWARE ****/
        'localize'                => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRoutes::class,
        'localizationRedirect'    => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRedirectFilter::class,
        'localeSessionRedirect'   => \Mcamara\LaravelLocalization\Middleware\LocaleSessionRedirect::class,
        'localeCookieRedirect'    => \Mcamara\LaravelLocalization\Middleware\LocaleCookieRedirect::class,
        'localeViewPath'          => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationViewPath::class
    ];
}
