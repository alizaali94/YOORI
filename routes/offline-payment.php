<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CommonController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\Addons\OfflineMethodController;
use App\Http\Controllers\Admin\Addons\OfflineRechargeController;
Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
        ], function () {
        Route::middleware(['adminCheck','loginCheck'])->prefix('admin')->group(function () {

            //Refunds Settings
            Route::get('/offline-methods', [OfflineMethodController::class, 'index'])->name('offline.payment.methods')->middleware('PermissionCheck:offline_payment_read');
            Route::get('/create-offline-methods', [OfflineMethodController::class, 'create'])->name('offline.payment.method.create')->middleware('PermissionCheck:offline_payment_create');
            Route::post('/store-offline-methods', [OfflineMethodController::class, 'store'])->name('offline.payment.method.store')->middleware('PermissionCheck:offline_payment_create');
            Route::put('/update-offline-methods', [OfflineMethodController::class, 'update'])->name('offline.payment.method.update')->middleware('PermissionCheck:offline_payment_update');
            Route::get('offline-method-edit/{id}', [OfflineMethodController::class, 'edit'])->name('offline.payment.method.edit')->middleware('PermissionCheck:offline_payment_update');
            Route::delete('delete/offline_methods/{id}', [CommonController::class, 'delete'])->name('offline.payment.method.delete')->middleware('PermissionCheck:offline_payment_delete');
            Route::put('offline-method-status-change', [OfflineMethodController::class, 'statusChane'])->name('offline.payment.status.change')->middleware('PermissionCheck:offline_payment_update');


            //recharge history
            Route::get('recharge-history',[OfflineRechargeController::class, 'index'])->name('offline.wallet.recharge.history')->middleware('PermissionCheck:wallet_recharge_read');
        });
    });
});

