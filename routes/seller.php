<?php

/*
  |--------------------------------------------------------------------------
  | Admin Routes
  |--------------------------------------------------------------------------
 */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\CommonController;
use App\Http\Controllers\Seller\MediaController;
use App\Http\Controllers\Seller\OrderController;
use App\Http\Controllers\Seller\CouponController;
use App\Http\Controllers\Seller\PayoutController;
use App\Http\Controllers\Seller\ReportController;
use App\Http\Controllers\Seller\WalletController;
use App\Http\Controllers\Seller\AccountController;
use App\Http\Controllers\Seller\ProductController;
use App\Http\Controllers\Seller\SupportController;
use App\Http\Controllers\Seller\CampaignController;
use App\Http\Controllers\Seller\DashboardController;
use \App\Http\Controllers\Seller\ShopSetupController;
use App\Http\Controllers\Seller\Addons\RefundController;
use App\Http\Controllers\Seller\Addons\PackageController;
use App\Http\Controllers\Admin\Product\CategoryController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
        ], function () {
        Route::middleware(['sellerCheck', 'loginCheck'])->prefix('seller')->group(function () {
            Route::get('edit-info/{page_name}/{param1?}/{param2?}/{param3?}', [CommonController::class, 'editInfo'])->name('seller.edit-info')->where('param1', '(.*)');

            Route::get('categories-by-ajax', [CategoryController::class, 'ajaxCategoryFilter']);

            //profile & settings routes
            Route::get('profile', [StaffController::class, 'profile'])->name('seller.profile');
            Route::put('profile-update', [StaffController::class, 'profileUpdate'])->name('seller.profile.update');
            Route::get('login-activity', [StaffController::class, 'loginActivity'])->name('seller.login.activity');
            Route::get('password-change', [StaffController::class, 'passwordChange'])->name('seller.password.change');
            Route::put('password-update', [StaffController::class, 'passwordUpdate'])->name('seller.password.update');

            //seller dashboard
            Route::get('dashboard', [DashboardController::class, 'index'])->name('seller.dashboard');
            Route::get('order-statistics/{type}', [DashboardController::class, 'orderStatistics'])->name('seller.dashboard.order-statistics');
            Route::get('order-state/{type}', [DashboardController::class, 'orderState'])->name('seller.dashboard.order-state');
            Route::get('sales-by-category/{type}', [DashboardController::class, 'salesByCategory'])->name('seller.dashboard.sales-by-category');
            Route::get('total-sales-state/{type}', [DashboardController::class, 'salesState'])->name('seller.dashboard.total-sales-state');
            Route::get('top-products/{type}', [DashboardController::class, 'topProducts'])->name('seller.dashboard.top-product');

            //products
            Route::get('products/{status?}', [ProductController::class, 'index'])->name('seller.products');
            Route::get('create-product', [ProductController::class, 'create'])->name('seller.product.create');
            Route::post('create-product', [ProductController::class, 'store'])->name('seller.product.store');
            Route::get('edit-product/{id}', [ProductController::class, 'edit'])->name('seller.product.edit');
            Route::post('update-product', [ProductController::class, 'update'])->name('seller.product.update');
            Route::post('products/get-variants', [ProductController::class, 'variants'])->name('seller.get-variants');
            Route::post('products/get-variants-edit', [ProductController::class, 'variantsEdit'])->name('seller.get-variants-edit');
            Route::post('products/get-attribute-values', [ProductController::class, 'getAttributeValues'])->name('seller.get-attribute-values');
            Route::put('product-status-change', [ProductController::class, 'statusChange'])->name('seller.product.status.change');
            Route::get('product-clone/{id}', [ProductController::class, 'cloneProduct'])->name('seller.product.clone');
            Route::post('clone-product', [ProductController::class, 'StoreCloneProduct'])->name('seller.product.clone.post');
            Route::delete('delete/products/{id}', [CommonController::class, 'delete']);

            Route::get('product-restore/{id}', [ProductController::class, 'restore'])->name('seller.product.restore');

            //digital products
            Route::get('digital-product/{status?}', [ProductController::class, 'digitalProducts'])->name('seller.digital.products');
            Route::get('create-digital-product', [ProductController::class, 'createDigitalProduct'])->name('seller.digital.product.create');
            //catalog products
            Route::get('catalog-product/{status?}', [ProductController::class, 'catalogProducts'])->name('seller.catalog.products');
            Route::get('create-catalog-product', [ProductController::class, 'createCatalogProduct'])->name('seller.catalog.product.create');

            Route::get('product-status/change/{status}/{id}', [ProductController::class, 'productStatusChange'])->name('seller.product.status.change.update');

            //classified product
            Route::get('classified-product/{status?}', [ProductController::class, 'classifiedProducts'])->name('seller.classified.products');
            Route::get('classified-product/{status?}', [ProductController::class, 'classifiedProducts'])->name('seller.classified.products');
            Route::get('create-classified-product', [ProductController::class, 'createClassifiedProduct'])->name('seller.classified.product.create');

            Route::get('support/{status?}', [SupportController::class, 'index'])->name('seller.support');
            Route::get('create-support', [SupportController::class, 'create'])->name('seller.create.support');
            Route::post('support-store', [SupportController::class, 'store'])->name('seller.support.store');
            Route::get('ticket-replay/{id}', [SupportController::class, 'ticketReplay'])->name('seller.ticket.replay');
            Route::get('contact-us', [SupportController::class, 'sellerContactUs'])->name('seller.contact.us');
            Route::put('seller-contact-us-replay/{id}', [SupportController::class, 'sellerContactReply'])->name('seller.contact.us.replay');
            Route::post('ticket-replay-store', [SupportController::class, 'ticketReplayStore'])->name('seller.ticket.replay.store');
            Route::get('user-by-ajax', [UserController::class, 'getUserByAjax'])->name('seller.user.by.ajax');
            Route::delete('delete/contact_us/{id}', [CommonController::class, 'delete'])->name('seller.contact.us.delete');

            Route::group(['prefix' => 'orders'], function () {
                Route::get('/', [OrderController::class, 'index'])->name('seller.orders');
                Route::get('invoice/download/{id}', [OrderController::class, 'invoiceDownload'])->name('seller.order.invoice.download');
                Route::get('view/{id}', [OrderController::class, 'view'])->name('seller.order.view');
            });

            Route::group(['prefix' => 'setup'], function () {
                Route::get('shop', [ShopSetupController::class, 'shop'])->name('seller.shop.setup');
                Route::get('shop-details', [ShopSetupController::class, 'shopDetails'])->name('seller.shop.details');
                Route::put('shop-details-update', [ShopSetupController::class, 'shopDetailsUpdate'])->name('seller.shop.details.update');
                Route::put('update-shop-content', [ShopSetupController::class, 'updateShopContent'])->name('seller.shop.update');
                Route::get('mobile-shop-page-builder', [ShopSetupController::class, 'mobileShopDetails'])->name('seller.mobile.home.page');
                Route::put('mobile-shop-page-update', [ShopSetupController::class, 'mobileShopPageUpdate'])->name('seller.mobile.shop.update');
            });
            Route::get('add-shop-content', [ShopSetupController::class, 'getContent'])->name('seller.get.shop.content');

            Route::group(['prefix' => 'payouts'], function () {
                Route::get('/', [PayoutController::class, 'payouts'])->name('seller.payouts');
                Route::post('send-request', [PayoutController::class, 'sendPayoutRequest'])->name('send.payout.request');
                Route::get('payout-request/{id}', [PayoutController::class, 'sendPayoutReject'])->name('seller.payout.reject');
            });

            Route::get('payment', [AccountController::class, 'index'])->name('seller.payment');
            Route::get('update-payment-account', [AccountController::class, 'updatePaymentAccount'])->name('seller.update.payment.account');
            Route::put('default-status-change', [AccountController::class, 'defaultStatusChange'])->name('default.status.change');
            Route::put('active-method-status-change', [AccountController::class, 'activeMethod'])->name('active.method.status.change');

            //media
            Route::get('media-library', [MediaController::class, 'index'])->name('seller.media.library');
            Route::get('add-media', [MediaController::class, 'create'])->name('seller.add.media');
            Route::get('item-details', [MediaController::class, 'details'])->name('seller.item.details');
            Route::delete('delete/media/{id}', [MediaController::class, 'delete']);

            Route::get('campaign', [CampaignController::class, 'index'])->name('seller.campaign');
            Route::get('add-to-campaign/{id}', [CampaignController::class, 'addToCampaign'])->name('seller.add.to.campaign');
            Route::delete('delete/campaign_products/{id}', [CommonController::class, 'delete'])->name('seller.campaigns.product.delete');
            Route::get('product/by/ajax', [CampaignController::class, 'productByAjax'])->name('seller.product.by.ajax');
            Route::post('show-div-ajax/{page_name}/{param1?}/{param2?}/{param3?}', [CampaignController::class, 'showDivAjax'])->name('seller.show-div-ajax');
            Route::post('seller-campaign-request-store', [CampaignController::class, 'storeRequest'])->name('seller.campaign.request');
            Route::get('campaign/products/{id}', [CampaignController::class, 'campaignProducts'])->name('seller.campaign.products');

            Route::get('coupons', [CouponController::class, 'index'])->name('seller.coupons');
            Route::post('coupon-store', [CouponController::class, 'store'])->name('seller.coupon.store');
            Route::put('coupon-status-change', [CouponController::class, 'statusChane'])->name('seller.coupon.status.change');
            Route::put('coupon-update', [CouponController::class, 'update'])->name('seller.coupon.update');
            Route::delete('delete/coupons/{id}', [CommonController::class, 'delete'])->name('seller.coupon.delete');
            Route::get('coupon-edit/{id}', [CouponController::class, 'edit'])->name('seller.coupon.edit');

            //wallet
            Route::get('wallet', [WalletController::class, 'index'])->name('seller.wallet');

            //Report
            Route::get('product-stock', [ReportController::class, 'productStock'])->name('seller.stock.product.report');
            Route::get('product-wishlist', [ReportController::class, 'productWishlist'])->name('seller.product.wishlist');
            Route::get('product-sale', [ReportController::class, 'productSale'])->name('seller.product.sale');
            Route::get('commission-history', [ReportController::class, 'commissionHistory'])->name('seller.commission.history');

            //product importing
            Route::get('import-products',[ProductController::class, 'productImport'])->name('seller.product.import');
            Route::get('import-sample/{type}',[CommonController::class, 'importSample'])->name('seller.product.import.sample');
            Route::post('import-products',[CommonController::class, 'productImportPost'])->name('seller.product.import.post');
            Route::get('download/{type}',[CommonController::class, 'download'])->name('seller.list.download');

        });
    });
});
