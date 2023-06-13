<?php

use App\Http\Controllers\Api\DeliveryHero\V100\AuthController;
use App\Http\Controllers\Api\DeliveryHero\V100\EarningController;
use App\Http\Controllers\Api\DeliveryHero\V100\HomeController;
use App\Http\Controllers\Api\DeliveryHero\V100\OrderController;
use App\Http\Controllers\Api\DeliveryHero\V100\UserController;
use Illuminate\Support\Facades\Route;


Route::prefix('delivery-hero')->middleware(['CheckApiKey'])->group(function() {
    Route::prefix('v100')->group(function() {
        Route::post('login', [AuthController::class, 'login']);

        Route::middleware(['jwt.verify'])->group(function (){
            Route::prefix('user')->group(function (){
                Route::post('logout', [AuthController::class,'logout']);

                Route::get('profile', [UserController::class,'profile']);
                Route::post('update-profile', [UserController::class,'updateProfile']);
                Route::post('change-password', [UserController::class,'changePassword']);
            });

            Route::get('home-screen', [HomeController::class,'homePageData']);
            Route::get('order-details', [OrderController::class,'orderDetails']);
            Route::get('my-earnings', [EarningController::class,'myEarnings']);

            Route::get('orders/{slug}', [OrderController::class,'orders']);
            Route::post('order-delivery-status-update', [OrderController::class,'deliveryStatusUpdate']);
            Route::post('order-payment-status-update', [OrderController::class,'paymentStatusUpdate']);
        });

    });
});

