<?php

//otp settings
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\AddressController;
use App\Http\Controllers\Admin\Addons\PosSystemController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::middleware(['XSS', 'isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath', 'isInstalled']
        ], function () {

        Route::middleware(['AdminSellerCheck','loginCheck'])->prefix('admin/pos')->group(function () {
            Route::get('/', [PosSystemController::class, 'index'])->name('admin.pos.system')->middleware('posSellerCheck:pos_order');
            Route::get('/config', [PosSystemController::class, 'posConfig'])->name('admin.pos.config')->middleware('posSellerCheck:pos_config_update');
            Route::post('/get-product', [PosSystemController::class, 'getProduct'])->middleware('posSellerCheck:pos_order');
            Route::post('/confirm-order', [PosSystemController::class, 'confirmOrder'])->middleware('posSellerCheck:pos_order');
            Route::get('state/by-country/{id}', [AddressController::class, 'getStates'])->name('pos.state.by-country');
            Route::get('city/by-state/{id}', [AddressController::class, 'getCities'])->name('pos.city.by-state');
            Route::post('/draft-list', [PosSystemController::class, 'draftList'])->middleware('posSellerCheck:pos_order');
            Route::post('/recent-orders', [PosSystemController::class, 'recentOrders'])->middleware('posSellerCheck:pos_order');
            Route::post('/draft-to-cart', [PosSystemController::class, 'draftToCart'])->middleware('posSellerCheck:pos_order');
            Route::post('/update-draft', [PosSystemController::class, 'UpdateDraft'])->middleware('posSellerCheck:pos_order');
            Route::post('/delete-draft', [PosSystemController::class, 'deleteDraft'])->middleware('posSellerCheck:pos_order');
            Route::get('get-user-by-search', [PosSystemController::class, 'getUser']);
            Route::get('get-user-address/{id}', [PosSystemController::class, 'getUserAddress']);
            Route::get('get-draft-by-customer', [PosSystemController::class, 'getDraftByCustomer'])->middleware('posSellerCheck:pos_order');
            Route::get('print-invoice/{id}', [PosSystemController::class, 'posInvoice'])->middleware('posSellerCheck:pos_order');
            Route::get('pos-invoice-by-lang', [PosSystemController::class, 'posInvoiceByLang'])->name('pos.invoice.by.lang');
            Route::get('invoice-download/{trx}', [PosSystemController::class, 'invoiceDownload'])->middleware('posSellerCheck:pos_order');
            Route::post('invoice-config', [PosSystemController::class, 'invoiceConfig'])->name('invoice.config');
            Route::get('pos-invoice/{trx}', [PosSystemController::class, 'posInvoice']);
            Route::get('get-data', [PosSystemController::class, 'getData']);
            Route::post('store-address', [PosSystemController::class, 'saveAddress']);
            Route::post('update-address', [PosSystemController::class, 'updateAddress']);
            Route::get('delete-address', [PosSystemController::class, 'deleteAddress']);

        });
        Route::put('admin/pos-seller-status-change', [PosSystemController::class, 'update']);

        Route::middleware(['sellerCheck','loginCheck'])->prefix('seller/pos')->group(function () {
            Route::get('/', [PosSystemController::class, 'index'])->name('seller.pos.system');

        });
    });
});
Route::get('admin/pos/pos-invoice/{trx_id}', [PosSystemController::class, 'posInvoice']);
