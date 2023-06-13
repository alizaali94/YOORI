<?php

use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\Addons\WholeSaleProductController;
use App\Http\Controllers\Seller\Addons\WholeSaleProductController as SellerWholesaleProduct;

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
    ], function () {
    Route::middleware(['adminCheck', 'loginCheck', 'XSS'])->prefix('admin')->group(function () {

        //Refunds Settings
        Route::group(['prefix' => 'wholesale'], function () {

            Route::get('/setting',[WholeSaleProductController::class,'setting'])->name('wholesale.setting')->middleware('PermissionCheck:wholesale_product_setting');
            Route::get('products/{status?}',[WholeSaleProductController::class,'wholesaleProducts'])->name('wholesale.products')->middleware('PermissionCheck:wholesale_product_read');
            Route::get('product/create',[WholeSaleProductController::class,'create'])->name('wholesale.product.create')->middleware('PermissionCheck:wholesale_product_create');
            Route::post('product/create',[WholeSaleProductController::class,'store'])->name('wholesale.product.create.post')->middleware('PermissionCheck:wholesale_product_create');
            Route::get('edit-product/{id}',[WholeSaleProductController::class, 'edit'])->name('wholesale.product.edit')->middleware('PermissionCheck:wholesale_product_update');
            Route::post('update-product',[WholeSaleProductController::class, 'update'])->name('wholesale.product.update')->middleware('PermissionCheck:wholesale_product_update');
            Route::get('product-clone/{id}',[WholeSaleProductController::class, 'cloneWholesaleProduct'])->name('wholesale.product.clone')->middleware('PermissionCheck:wholesale_product_clone');
            Route::post('clone-product',[WholeSaleProductController::class, 'storeCloneWholesaleProduct'])->name('wholesale.product.clone.store')->middleware('PermissionCheck:wholesale_product_clone');
        });
    });
    Route::middleware(['sellerCheck', 'loginCheck', 'XSS'])->prefix('seller')->group(function () {

        //Refunds Settings
        Route::group(['prefix' => 'wholesale'], function () {

            Route::get('products/{status?}',[SellerWholesaleProduct::class,'wholesaleProducts'])->name('seller.wholesale.products')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::get('product/create',[SellerWholesaleProduct::class,'create'])->name('seller.wholesale.product.create')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::post('product/create',[SellerWholesaleProduct::class,'store'])->name('seller.wholesale.product.create.post')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::get('edit-product/{id}',[SellerWholesaleProduct::class, 'edit'])->name('seller.wholesale.product.edit')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::post('update-product',[SellerWholesaleProduct::class, 'update'])->name('seller.wholesale.product.update')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::get('product-clone/{id}',[SellerWholesaleProduct::class, 'cloneWholesaleProduct'])->name('seller.wholesale.product.clone')->middleware('PermissionCheck:seller_can_create_wholesale');
            Route::post('clone-product',[SellerWholesaleProduct::class, 'storeCloneWholesaleProduct'])->name('seller.wholesale.product.clone.store')->middleware('PermissionCheck:seller_can_create_wholesale');
        });
    });
});
