<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Addons\RefundController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Site\Addons\RefundController as SiteRefundController;
use App\Http\Controllers\Seller\Addons\RefundController as SellerRefundController;

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
        ], function () {
        Route::middleware(['adminCheck', 'loginCheck', 'XSS'])->prefix('admin')->group(function () {

            //Refunds Settings
            Route::group(['prefix' => 'refunds'], function () {
                Route::get('/', [RefundController::class, 'refund'])->name('refunds')->middleware('PermissionCheck:refund_read');
                Route::get('request',[RefundController::class,'refundRequest'])->name('refund.request')->middleware('PermissionCheck:refund_read');
                Route::put('approved-refund/{id}',[RefundController::class,'approvedRefund'])->name('approved.refund')->middleware('PermissionCheck:refund_approve');
                Route::put('reject-refund',[RefundController::class,'rejectRefund'])->name('reject.refund')->middleware('PermissionCheck:refund_reject');
                Route::get('approved/{status?}', [RefundController::class, 'allApprovedRefund'])->name('all.approved.refund')->middleware('PermissionCheck:refund_read');
                Route::get('processed/{status?}', [RefundController::class, 'allProcessedRefund'])->name('all.processed.refund')->middleware('PermissionCheck:refund_read');
                Route::get('rejected', [RefundController::class, 'allRejectedRefund'])->name('all.rejected.refund')->middleware('PermissionCheck:refund_read');
                Route::get('settings', [RefundController::class, 'refundSetting'])->name('refund.setting')->middleware('PermissionCheck:refund_setting_read');
                Route::put('setting-update', [RefundController::class, 'refundSettingUpdate'])->name('refund.setting.update')->middleware('PermissionCheck:refund_setting_update');
                Route::put('pay-refund/{id}', [RefundController::class, 'payNow'])->name('pay.refund')->middleware('PermissionCheck:refund_approve');
            });

        });
        Route::middleware(['sellerCheck', 'loginCheck', 'XSS'])->prefix('seller')->group(function () {

            //Refunds Settings
            Route::group(['prefix' => 'refunds'], function () {
                Route::get('/', [SellerRefundController::class, 'refund'])->name('seller.refunds');
                Route::put('approved-refund/{id}',[SellerRefundController::class,'approvedRefund'])->name('seller.approved.refund');
                Route::get('processed/{status?}', [SellerRefundController::class, 'allProcessedRefund'])->name('seller.all.processed.refund');
                Route::put('reject-refund',[SellerRefundController::class,'rejectRefund'])->name('seller.reject.refund');
                Route::get('approved/{status?}', [SellerRefundController::class, 'allApprovedRefund'])->name('seller.all.approved.refund');
                Route::get('rejected', [SellerRefundController::class, 'allRejectedRefund'])->name('seller.all.rejected.refund');
            });

        });
    });
    Route::middleware(['loginCheck'])->group(function () {
        Route::post('refund-request', [SiteRefundController::class, 'store'])->name('user.refund.request');
    });
});
