<?php

//otp settings
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CommonController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\DeliveryHero\DeliveryHeroController;

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath', 'isInstalled']
        ], function () {
        Route::middleware(['adminCheck','loginCheck'])->prefix('admin')->group(function () {
            //Refunds Settings
            Route::group(['prefix' => 'delivery-hero'], function () {
                Route::get('/', [DeliveryHeroController::class, 'index'])->name('delivery.hero')->middleware('PermissionCheck:delivery_hero_read');
                Route::post('add', [DeliveryHeroController::class, 'store'])->name('delivery.hero.add')->middleware('PermissionCheck:delivery_hero_create');
                Route::get('edit/{id}', [DeliveryHeroController::class, 'edit'])->name('delivery.hero.edit')->middleware('PermissionCheck:delivery_hero_update');
                Route::put('update', [DeliveryHeroController::class, 'update'])->name('delivery.hero.update')->middleware('PermissionCheck:delivery_hero_update');
                Route::get('delivery-hero-create', [DeliveryHeroController::class, 'create'])->name('delivery.hero.create')->middleware('PermissionCheck:delivery_hero_create');
                Route::get('deposit-history', [DeliveryHeroController::class, 'depositHistory'])->name('delivery_hero.deposit.history')->middleware('PermissionCheck:delivery_hero_deposit_history');
                Route::get('commission-history', [DeliveryHeroController::class, 'commissionHistory'])->name('delivery_hero.commission.history')->middleware('PermissionCheck:delivery_hero_commission_history');
                Route::get('collection-history', [DeliveryHeroController::class, 'collectionHistory'])->name('collection.history')->middleware('PermissionCheck:delivery_hero_collection_history');
                Route::get('cancel-request', [DeliveryHeroController::class, 'cancelRequest'])->name('cancel.request')->middleware('PermissionCheck:delivery_hero_cancel_request');
                Route::get('configuration', [DeliveryHeroController::class, 'configuration'])->name('configuration')->middleware('PermissionCheck:delivery_hero_configuration_read');
                Route::post('config/update', [DeliveryHeroController::class, 'deliveryHeroConfigUpdate'])->name('delivery.hero.config.update')->middleware('PermissionCheck:delivery_hero_configuration_update');
                Route::get('email-verify/{user_id}', [UserController::class, 'emailVerify'])->name('delivery.hero.email.verify')->middleware('PermissionCheck:delivery_hero_email_activation');

                Route::post('form/collect', [DeliveryHeroController::class, 'collectFormDeliveryHero'])->name('collect.form.delivery.hero')->middleware("PermissionCheck:Delivery_hero_account_deposit");
                Route::post('paid', [DeliveryHeroController::class, 'salaryToDeliveryHero'])->name('paid.to.delivery.hero');
            });
            Route::delete('delete/delivery_hero/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:delivery_hero_delete');


        });
    });
});
