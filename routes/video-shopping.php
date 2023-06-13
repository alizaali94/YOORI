<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CommonController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\Addons\VideoShoppingController;
use App\Http\Controllers\Seller\Addons\VideoShoppingController as SellerVideoShoppingController;

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
    ], function () {

    Route::middleware(['adminCheck', 'loginCheck', 'XSS'])->prefix('admin')->group(function () {

        Route::get('video-shopping',[VideoShoppingController::class,'index'])->name('admin.video.shopping')->middleware('PermissionCheck:video_shopping_read');
        Route::get('video-shopping/config',[VideoShoppingController::class,'videoShoppingConfig'])->name('admin.video.shopping.config')->middleware('PermissionCheck:video_shopping_update');
        Route::post('video-shopping/store',[VideoShoppingController::class,'store'])->name('shopping.video.store')->middleware('PermissionCheck:video_shopping_create');
        Route::put('video-shopping-status-change', [VideoShoppingController::class, 'statusChange'])->name('admin.video.shopping.status.change')->middleware('PermissionCheck:video_shopping_update');
        Route::get('video-shopping/edit/{id}', [VideoShoppingController::class, 'edit'])->name('video.shopping.edit')->middleware('PermissionCheck:video_shopping_update');
        Route::put('video-shopping/update', [VideoShoppingController::class, 'update'])->name('video.shopping.update')->middleware('PermissionCheck:video_shopping_update');
        Route::delete('delete/video_shoppings/{id}', [CommonController::class, 'delete'])->name('video.shopping.delete')->middleware('PermissionCheck:video_shopping_delete');

    });

    Route::middleware(['sellerCheck', 'loginCheck', 'XSS'])->prefix('seller')->group(function () {

        Route::get('video-shopping',[SellerVideoShoppingController::class,'index'])->name('seller.video.shopping');
        Route::post('video-shopping/store',[SellerVideoShoppingController::class,'store'])->name('seller.shopping.video.store');
        Route::put('video-shopping-status-change', [SellerVideoShoppingController::class, 'statusChange'])->name('seller.video.shopping.status.change');
        Route::get('video-shopping/edit/{id}', [SellerVideoShoppingController::class, 'edit'])->name('seller.video.shopping.edit');
        Route::put('video-shopping/update', [SellerVideoShoppingController::class, 'update'])->name('seller.video.shopping.update');
        Route::delete('delete/video_shoppings/{id}', [CommonController::class, 'delete'])->name('seller.video.shopping.delete');

    });
});
