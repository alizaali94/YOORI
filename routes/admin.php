<?php

/*
  |--------------------------------------------------------------------------
  | Admin Routes
  |--------------------------------------------------------------------------
 */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiKeyController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\AddonController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\CommonController;
use App\Http\Controllers\Admin\SellerController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\WalletController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\ShippingController;
use App\Http\Controllers\Admin\Blog\BlogController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\Setup\CacheController;
use App\Http\Controllers\Admin\Setup\VatTaxController;
use App\Http\Controllers\Admin\Product\BrandController;
use App\Http\Controllers\Admin\Product\ColorController;
use App\Http\Controllers\Admin\Report\ReportController;
use App\Http\Controllers\Admin\SellerPayoutsController;
use App\Http\Controllers\Admin\Setup\CurrencyController;
use App\Http\Controllers\Admin\Order\PickupHubController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Admin\Support\SupportController;
use App\Http\Controllers\Admin\Marketing\CouponController;
use App\Http\Controllers\Admin\Product\CategoryController;
use App\Http\Controllers\Admin\Setup\PreferenceController;
use App\Http\Controllers\Admin\Setup\ThirdPartyController;
use App\Http\Controllers\Admin\Blog\BlogCategoryController;
use App\Http\Controllers\Admin\Marketing\BulkSMSController;
use App\Http\Controllers\Admin\Product\AttributeController;
use App\Http\Controllers\Admin\Setup\SocialLoginController;
use App\Http\Controllers\Admin\Marketing\CampaignController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\MobileApps\AppIntroController;
use App\Http\Controllers\Admin\Setup\EmailSettingsController;
use App\Http\Controllers\Admin\Setup\MiscellaneousController;
use App\Http\Controllers\Admin\Marketing\SubscriberController;
use App\Http\Controllers\Admin\MobileApps\MobileAppsController;
use App\Http\Controllers\Admin\Setup\GeneralSettingsController;
use App\Http\Controllers\Admin\Setup\StorageSettingsController;
use App\Http\Controllers\Admin\StoreFront\StoreFrontController;
use App\Http\Controllers\Admin\Payment\PaymentGatewayController;
use App\Http\Controllers\Admin\Setup\AdminPanelSettingController;
use App\Http\Controllers\Admin\Support\SupportDepartmentController;

Route::get('change-currency/{id}', [GeneralSettingsController::class, 'currencyChange'])->name('admin.change.currency');
Route::get('change-lang/{id}', [GeneralSettingsController::class, 'langChange'])->name('admin.change.lang');

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
        ], function () {

        Route::middleware(['adminCheck','loginCheck'])->group(function () {

            //role
            Route::prefix('admin')->group(function () {
                //dashboard

                Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
                Route::get('order-statistics/{type}', [DashboardController::class, 'orderStatistics'])->name('admin.dashboard.order-statistics');
                Route::get('order-state/{type}', [DashboardController::class, 'orderState'])->name('admin.dashboard.order-state');
                Route::get('sales-by-category/{type}', [DashboardController::class, 'salesByCategory'])->name('admin.dashboard.sales-by-category');
                Route::get('total-sales-state/{type}', [DashboardController::class, 'salesState'])->name('admin.dashboard.total-sales-state');
                Route::get('top-products/{type}', [DashboardController::class, 'topProducts'])->name('admin.dashboard.top-products');

                //user
                Route::get('roles', [RoleController::class, 'index'])->name('roles')->middleware('PermissionCheck:role_read');
                Route::get('create-role', [RoleController::class, 'createRole'])->name('role.create')->middleware('PermissionCheck:role_create');
                Route::post('role-store', [RoleController::class, 'store'])->name('role.store')->middleware('PermissionCheck:role_create');
                Route::get('edit-role/{id}', [RoleController::class, 'edit'])->name('role.edit')->middleware('PermissionCheck:role_update');
                Route::put('update-role', [RoleController::class, 'update'])->name('role.update')->middleware('PermissionCheck:role_update');

                Route::delete('delete/roles/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:role_delete');
                Route::get('edit-info/{page_name}/{param1?}/{param2?}/{param3?}', [CommonController::class, 'editInfo'])->name('edit-info')->where('param1', '(.*)');

                //common route
                Route::get('change-role', [StaffController::class, 'changeRole'])->name('change.role');

                //products
                Route::get('products/{status?}', [ProductController::class, 'index'])->name('products')->middleware('PermissionCheck:product_read');
                Route::get('create-product', [ProductController::class, 'create'])->name('product.create')->middleware('PermissionCheck:product_create');
                Route::post('create-product', [ProductController::class, 'store'])->name('admin.product.store')->middleware('PermissionCheck:product_create');
                Route::get('edit-product/{id}', [ProductController::class, 'edit'])->name('admin.product.edit')->middleware('PermissionCheck:product_update');
                Route::post('update-product', [ProductController::class, 'update'])->name('admin.product.update')->middleware('PermissionCheck:product_update');
                Route::put('product-status-change', [ProductController::class, 'statusChange'])->name('admin.product.status.change')->middleware('PermissionCheck:product_update|wholesale_product_update');
                Route::post('products/get-variants', [ProductController::class, 'variants'])->name('get-variants');
                Route::post('products/get-variants-edit', [ProductController::class, 'variantsEdit'])->name('get-variants-edit');
                Route::post('products/get-attribute-values', [ProductController::class, 'getAttributeValues'])->name('get-attribute-values');
                Route::delete('delete/products/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:product_delete|wholesale_product_delete');
                Route::get('product-restore/{id}', [ProductController::class, 'restore'])->name('product.restore')->middleware('PermissionCheck:product_restore|wholesale_product_restore');

                Route::get('admin-products/{status?}', [ProductController::class, 'adminProducts'])->name('admin.products')->middleware('PermissionCheck:product_read');
                Route::get('seller-products/{status?}', [ProductController::class, 'sellerProducts'])->name('admin.seller.products')->middleware('PermissionCheck:product_read');

                //digital product
                Route::get('digital-product/{status?}', [ProductController::class, 'digitalProducts'])->name('digital.products')->middleware('PermissionCheck:product_read');
                Route::get('create-digital-product', [ProductController::class, 'createDigitalProduct'])->name('digital.product.create')->middleware('PermissionCheck:product_create');
                Route::get('catalog-product/{status?}', [ProductController::class, 'catalogProducts'])->name('catalog.products')->middleware('PermissionCheck:product_read');
                Route::get('create-catalog-product', [ProductController::class, 'createCatalogProduct'])->name('catalog.product.create')->middleware('PermissionCheck:product_create');
                Route::get('product-status/change/{status}/{id}', [ProductController::class, 'productStatusChange'])->name('product.status.change')->middleware('PermissionCheck:product_update');

                //classified product
                Route::get('classified-product/{status?}', [ProductController::class, 'classifiedProducts'])->name('classified.products')->middleware('PermissionCheck:product_read');
                Route::get('create-classified-product', [ProductController::class, 'createClassifiedProduct'])->name('classified.product.create')->middleware('PermissionCheck:product_create');
                Route::get('product-reviews', [ProductController::class, 'reviews'])->name('admin.product.reviews')->middleware('PermissionCheck:product_create');
                Route::put('review-status-change', [ProductController::class, 'reviewStatusChange'])->name('admin.review.status.change');

                Route::get('product-clone/{id}', [ProductController::class, 'cloneProduct'])->name('product.clone')->middleware('PermissionCheck:product_clone');
                Route::post('clone-product', [ProductController::class, 'StoreCloneProduct'])->name('admin.product.clone')->middleware('PermissionCheck:product_clone');

                //colors
                Route::get('colors', [ColorController::class, 'index'])->name('colors')->middleware('PermissionCheck:color_read');
                Route::post('color-store', [ColorController::class, 'store'])->name('color.store')->middleware('PermissionCheck:color_create');
                Route::get('edit-color/{id}', [ColorController::class, 'edit'])->name('color.edit')->middleware('PermissionCheck:color_update');
                Route::put('color-update', [ColorController::class, 'update'])->name('color.update')->middleware('PermissionCheck:color_update');
                Route::delete('delete/colors/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:color_delete');

                //attribute
                Route::get('attributes', [AttributeController::class, 'index'])->name('attributes')->middleware('PermissionCheck:attribute_set_read');
                Route::get('attributes-values', [AttributeController::class, 'allValues'])->name('all.attributes.values')->middleware('PermissionCheck:attribute_value_read');
                Route::post('attribute-store', [AttributeController::class, 'store'])->name('attribute.store')->middleware('PermissionCheck:attribute_set_create');
                Route::get('edit-attribute/{id}', [AttributeController::class, 'edit'])->name('attribute.edit')->middleware('PermissionCheck:attribute_set_update');
                Route::post('update-attribute', [AttributeController::class, 'update'])->name('attribute.update')->middleware('PermissionCheck:attribute_set_update');
                Route::delete('delete/attributes/{id}', [CommonController::class, 'delete'])->name('attribute.delete')->middleware('PermissionCheck:attribute_set_delete');
                Route::get('attribute-values/{id}', [AttributeController::class, 'attributeValues'])->name('attribute.values')->middleware('PermissionCheck:attribute_value_update');
                Route::post('attribute-values-store', [AttributeController::class, 'attributeValuesStore'])->name('attribute.values.store')->middleware('PermissionCheck:attribute_value_create');
                Route::get('attribute-values-edit/{id}', [AttributeController::class, 'attributeValuesEdit'])->name('attribute.values.edit')->middleware('PermissionCheck:attribute_value_update');
                Route::post('attribute-values-update', [AttributeController::class, 'attributeValuesUpdate'])->name('attribute.values.update')->middleware('PermissionCheck:attribute_value_update');
                Route::delete('delete/attribute_values/{id}', [CommonController::class, 'delete'])->name('attribute_values.delete')->middleware('PermissionCheck:attribute_value_delete');

                //brand
                Route::get('brands', [BrandController::class, 'index'])->name('brands')->middleware('PermissionCheck:brand_read');
                Route::post('store-brand', [BrandController::class, 'store'])->name('brands.store')->middleware('PermissionCheck:brand_create');
                Route::get('edit-brand/{id}', [BrandController:: class, 'edit'])->name('brand.edit')->middleware('PermissionCheck:brand_update');
                Route::put('update-brand', [BrandController::class, 'update'])->name('admin.update.brand')->middleware('PermissionCheck:brand_update');
                Route::put('brand-status-change', [BrandController::class, 'statusChange'])->name('admin.brand.status.change')->middleware('PermissionCheck:brand_update');
                Route::delete('delete/brands/{id}', [CommonController::class, 'delete'])->name('brand.delete')->middleware('PermissionCheck:brand_delete');

                //category
                Route::get('categories', [CategoryController::class, 'index'])->name('categories')->middleware('PermissionCheck:category_read');
                Route::post('store-categories', [CategoryController::class, 'store'])->name('store.categories')->middleware('PermissionCheck:category_create');
                Route::get('edit-categories/{id}', [CategoryController::class, 'edit'])->name('edit.categories')->middleware('PermissionCheck:category_update');
                Route::put('update-categories', [CategoryController::class, 'update'])->name('update.categories')->middleware('PermissionCheck:category_update');
                Route::put('category-status-change', [CategoryController::class, 'statusChange'])->name('admin.category.status.change')->middleware('PermissionCheck:category_update');
                Route::delete('delete/categories/{id}', [CommonController::class, 'delete'])->name('category.delete')->middleware('PermissionCheck:category_delete');

                Route::get('categories-by-ajax', [CategoryController::class, 'ajaxCategoryFilter'])->name('categories.by.ajax');
                Route::get('blogs-by-ajax', [BlogController::class, 'ajaxBlogsFilter'])->name('blogs.by.ajax');


                //customers
                Route::get('customers', [UserController::class, 'index'])->name('customers')->middleware('PermissionCheck:customer_read');
                Route::get('create-customer', [UserController::class, 'create'])->name('customer.create')->middleware('PermissionCheck:customer_create');
                Route::post('customer-store', [UserController::class, 'store'])->name('customer.store')->middleware('PermissionCheck:customer_create');
                Route::get('edit-customer/{id}', [UserController::class, 'edit'])->name('customer.edit')->middleware('PermissionCheck:customer_update');
                Route::get('user-ban/{id}', [UserController::class, 'ban'])->name('user.ban')->middleware('PermissionCheck:seller_ban|customer_ban|staff_ban');
                Route::put('update-customer', [UserController::class, 'update'])->name('customer.update')->middleware('PermissionCheck:customer_update');
                Route::put('customer-status-change', [CommonController::class, 'statusChange'])->name('admin.customer.status.change')->middleware('PermissionCheck:customer_update');
                Route::delete('delete/customer/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:customer_delete');
                Route::get('user-by-ajax', [UserController::class, 'getUserByAjax'])->name('user.by.ajax');
                Route::get('all-user-by-ajax', [UserController::class, 'getAllTypeByAjax'])->name('all.user.by.ajax');
                Route::get('customer/email-verify/{id}', [UserController::class, 'emailVerify'])->name('customer.email.verify')->middleware('PermissionCheck:customer_update');

                //staff
                Route::get('staffs', [StaffController::class, 'index'])->name('staffs')->middleware('PermissionCheck:staff_read');
                Route::get('create-staff', [StaffController::class, 'create'])->name('staffs.create')->middleware('PermissionCheck:staff_create');
                Route::post('staff-store', [StaffController::class, 'store'])->name('staffs.store')->middleware('PermissionCheck:staff_create');
                Route::get('edit-staff/{id}', [StaffController::class, 'edit'])->name('staffs.edit')->middleware('PermissionCheck:staff_update');
                Route::put('update-staff', [StaffController::class, 'update'])->name('staffs.update')->middleware('PermissionCheck:staff_update');
                Route::put('staff-status-change', [CommonController::class, 'statusChange'])->name('admin.staff.status.change')->middleware('PermissionCheck:staff_update');
                Route::delete('delete/staff/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:staff_delete');
                Route::get('staff/email-verify/{id}', [UserController::class, 'emailVerify'])->name('staff.email.verify')->middleware('PermissionCheck:staff_update');

                Route::post('collect-balance', [StaffController::class, 'balanceCollectFromStaff'])->name('collect.form.staff');

                //sellers
                Route::get('sellers', [SellerController::class, 'index'])->name('sellers')->middleware('PermissionCheck:seller_read');
                Route::get('create-seller', [SellerController::class, 'create'])->name('admin.seller.create')->middleware('PermissionCheck:seller_create');
                Route::post('seller-store', [SellerController::class, 'store'])->name('admin.seller.store')->middleware('PermissionCheck:seller_create');
                Route::get('edit-seller/{id}', [SellerController::class, 'edit'])->name('admin.seller.edit')->middleware('PermissionCheck:seller_update');
                Route::put('update-seller', [SellerController::class, 'update'])->name('admin.seller.update')->middleware('PermissionCheck:seller_update');
                Route::put('seller-status-change', [CommonController::class, 'statusChange'])->name('admin.seller.status.change')->middleware('PermissionCheck:seller_update');
                Route::get('seller-verify/{id}/{user_id}', [SellerController::class, 'verify'])->name('admin.seller.verify')->middleware('PermissionCheck:seller_verify');
                Route::delete('delete/seller/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:seller_delete');
                Route::get('seller/email-verify/{user_id}', [UserController::class, 'emailVerify'])->name('admin.seller.email.verify')->middleware('PermissionCheck:seller_update');


                //seller payouts
                Route::get('seller-payouts/{status?}', [SellerPayoutsController::class, 'index'])->name('admin.seller.payouts')->middleware('PermissionCheck:seller_payout_read');
                Route::get('seller-payouts-request', [SellerPayoutsController::class, 'payoutRequest'])->name('admin.seller.payout.request')->middleware('PermissionCheck:seller_payout_read');
                //Route::get('seller-payouts-processed', [SellerPayoutsController::class, 'payoutProcessed'])->name('admin.seller.payout.processed')->middleware('PermissionCheck:payout_read');
                Route::get('seller-settings', [SellerPayoutsController::class, 'sellerSetting'])->name('admin.seller.settings')->middleware('PermissionCheck:seller_commission_read');
                Route::get('seller-payouts-accept/{id}', [SellerPayoutsController::class, 'payoutRequestAccept'])->name('payout.accept')->middleware('PermissionCheck:seller_payout_accept');
                Route::get('seller-payouts-reject/{id}', [SellerPayoutsController::class, 'payoutRequestReject'])->name('payout.reject')->middleware('PermissionCheck:seller_payout_reject');
                Route::post('seller-payouts-processed', [SellerPayoutsController::class, 'payoutRequestProcessed'])->name('payout.processed')->middleware('PermissionCheck:seller_payout_accept');
                Route::put('seller-commission', [SellerPayoutsController::class, 'sellerCommission'])->name('admin.seller.commission')->middleware('PermissionCheck:seller_commission_update');
                Route::get('seller-by-ajax', [SellerController::class, 'sellerByAjax'])->name('admin.seller.by.ajax');
                //language
                Route::get('languages', [LanguageController::class, 'index'])->name('language')->middleware('PermissionCheck:language_read');
                Route::get('language-create', [LanguageController::class, 'create'])->name('admin.language.create')->middleware('PermissionCheck:language_create');
                Route::post('language-store', [LanguageController::class, 'store'])->name('admin.languages.store')->middleware('PermissionCheck:language_create');
                Route::delete('language-delete/{id}', [LanguageController::class, 'delete'])->name('admin.languages.delete')->middleware('PermissionCheck:language_delete');
                Route::post('set-default-language', [LanguageController::class, 'setDefaultLanguage'])->name('admin.set.default.language')->middleware('PermissionCheck:language_read');
                Route::put('update-language', [LanguageController::class, 'update'])->name('admin.update.language')->middleware('PermissionCheck:language_update');
                Route::get('edit-language/{id}', [LanguageController::class, 'editLanguage'])->name('admin.edit.language')->middleware('PermissionCheck:language_update');
                //translation routes
                Route::get('language/{language}/translations', [LanguageController::class, 'translationIndex'])->name('admin.languages.translations.index');
                Route::put('language-status-change', [LanguageController::class, 'statusChange'])->name('admin.language.status.change')->middleware('PermissionCheck:language_update');
                Route::put('language-direction-change', [LanguageController::class, 'directionChange'])->name('admin.language.direction.change')->middleware('PermissionCheck:language_update');
                Route::post('languages/{language}', [LanguageController::class, 'updateTrans'])->name('admin.language.key.update')->middleware('PermissionCheck:language_update');

                //System setup
                Route::get('general-setting', [GeneralSettingsController::class, 'index'])->name('general.setting')->middleware('PermissionCheck:general_setting_update');
                Route::get('about-desc-by-lang', [StoreFrontController::class, 'aboutDesc'])->name('about-description-by-lang');
                Route::get('system-name-by-lang', [GeneralSettingsController::class, 'systemName'])->name('system-name-by-lang');

                //preference
                Route::get('preference', [PreferenceController::class, 'index'])->name('preference')->middleware('PermissionCheck:preference_setting_update');
                Route::put('setting-status-change', [PreferenceController::class, 'update'])->name('admin.preference.setting.update');

                //Social Login Setting
                Route::get('social-login-setting', [SocialLoginController::class, 'index'])->name('social.login.setting')->middleware('PermissionCheck:social_login_setting_update');
                Route::put('update-social-login', [SocialLoginController::class, 'socialLoginUpdate'])->name('social.login.update')->middleware('PermissionCheck:social_login_setting_update');
                Route::put('admin-social-login-status-change', [SocialLoginController::class, 'update'])->name('admin.social-login.status.change')->middleware('PermissionCheck:social_login_setting_update');

                //email setting
                Route::get('email-setting', [EmailSettingsController::class, 'index'])->name('email.setting')->middleware('PermissionCheck:email_setting_update');
                Route::put('email-setting-update', [EmailSettingsController::class, 'update'])->name('admin.email.setting.update');
                Route::post('send.test.email', [EmailSettingsController::class, 'sendTestMail'])->name('send.test.email');

                //currency
                Route::get('currency', [CurrencyController::class, 'index'])->name('currency')->middleware('PermissionCheck:currency_setting_update');
                Route::post('currency-store', [CurrencyController::class, 'store'])->name('admin.setting.currency.store');
                Route::put('currency-update', [CurrencyController::class, 'update'])->name('admin.setting.currency.update');
                Route::put('currency-status-change', [CurrencyController::class, 'statusChange'])->name('admin.setting.currency.status.change');
                Route::delete('delete/currencies/{id}', [CommonController::class, 'delete']);
                Route::put('set-currency-format', [CurrencyController::class, 'setCurrencyFormat'])->name('admin.currency.format.set');

                //vat-tax
                Route::get('vat-tax', [VatTaxController::class, 'index'])->name('vat.tax')->middleware('PermissionCheck:vat_tax_setting_update');
                Route::post('vat-tax-store', [VatTaxController::class, 'store'])->name('vat.tax.store');
                Route::put('vat-tax-update', [VatTaxController::class, 'update'])->name('vat.tax.update');
                Route::delete('delete/vat_taxes/{id}', [CommonController::class, 'delete']);
                Route::put('vat-tax-status-change', [VatTaxController::class, 'statusChange'])->name('vat.tax.status.change');
                Route::put('vat-tax-configuration', [VatTaxController::class, 'configuration'])->name('admin.update.vat-tax-configuration');


                //storage setting
                Route::get('storage-setting', [StorageSettingsController::class, 'index'])->name('storage.setting')->middleware('PermissionCheck:storage_setting_update');
                Route::put('storage-update', [StorageSettingsController::class, 'update'])->name('storage.update');

                //cache
                Route::get('cache-clear', [CacheController::class, 'clear'])->name('admin.clear.cache');
                Route::get('cache', [CacheController::class, 'index'])->name('cache')->middleware('PermissionCheck:cache_update');
                Route::put('cache-update', [CacheController::class, 'update'])->name('cache.update');
                //miscellaneous
                Route::get('miscellaneous', [MiscellaneousController::class, 'index'])->name('miscellaneous')->middleware('PermissionCheck:miscellaneous_setting_update');
                Route::put('miscellaneous-update', [MiscellaneousController::class, 'update'])->name('miscellaneous.update');


                //white Level
                Route::get('admin-panel/setting', [AdminPanelSettingController::class, 'index'])->name('admin.panel.setting')->middleware('PermissionCheck:admin_panel_setting_update');
                Route::put('admin-panel/setting-update', [AdminPanelSettingController::class, 'update'])->name('admin.panel.setting.update');

                //Third Parti Settings
                Route::put('third-party-update', [ThirdPartyController::class, 'thirdParty'])->name('third.party.setting.update');
                Route::put('third-party-status-change', [ThirdPartyController::class, 'update'])->name('third.party.status.change');

                Route::get("settings/facebook-services", [ThirdPartyController::class, 'facebookService'])->name('settings.facebook.services')->middleware('PermissionCheck:facebook_service_update');
                Route::get("settings/google-services", [ThirdPartyController::class, 'googleService'])->name('settings.google.services')->middleware('PermissionCheck:google_service_update');
                Route::get("settings/google-recaptcha", [ThirdPartyController::class, 'googleRecaptcha'])->name('settings.google.recaptcha')->middleware('PermissionCheck:google_service_update');
                Route::get("settings/pusher-notification", [ThirdPartyController::class, 'pusherNotification'])->name('settings.pusher.notification')->middleware('PermissionCheck:pusher_notification_update');
                Route::get("settings/firebase", [ThirdPartyController::class, 'firebase'])->name('settings.firebase')->middleware('PermissionCheck:google_service_update');
                Route::get("settings/firebase-update", [ThirdPartyController::class, 'firebaseUpdate'])->name('settings.firebase.update')->middleware('PermissionCheck:pusher_notification_update');

                //media routes
                Route::get('media-library', [MediaController::class, 'index'])->name('media.library')->middleware('PermissionCheck:media_read');
                Route::get('add-media', [MediaController::class, 'create'])->name('admin.add.media')->middleware('PermissionCheck:media_create');
                Route::get('item-details', [MediaController::class, 'details'])->name('admin.item.details')->middleware('PermissionCheck:media_read');
                Route::delete('delete/media/{id}', [MediaController::class, 'delete'])->middleware('PermissionCheck:media_delete');
                //settings
                Route::put('setting-update', [GeneralSettingsController::class, 'update'])->name('admin.general.setting.update');

                Route::put('optimization-setting-update', [GeneralSettingsController::class, 'optimizationUpdate'])->name('admin.optimization.setting.update');

                Route::get('/edit-info/{page_name}/{param1?}/{param2?}/{param3?}', [CommonController::class, 'editInfo'])->name('edit-info')->where('param1', '(.*)');

                //blog
                Route::get('blogs/{status?}', [BlogController::class, 'index'])->name('blogs')->middleware('PermissionCheck:blog_read');
                Route::get('create-blog', [BlogController::class, 'create'])->name('blog.create')->middleware('PermissionCheck:blog_create');
                Route::post('blog.store', [BlogController::class, 'store'])->name('blog.store')->middleware('PermissionCheck:blog_create');
                Route::get('blog-edit/{id}', [BlogController::class, 'edit'])->name('blog.edit')->middleware('PermissionCheck:blog_update');
                Route::get('blog-store/{id}', [BlogController::class, 'restore'])->name('blog.restore')->middleware('PermissionCheck:blog_restore');
                Route::put('blog-update', [BlogController::class, 'update'])->name('blog.update')->middleware('PermissionCheck:blog_update');
                Route::delete('delete/blogs/{id}', [CommonController::class, 'delete'])->name('blog.delete')->middleware('PermissionCheck:blog_delete');

                //blog category
                Route::get('blog/categories', [BlogCategoryController::class, 'index'])->name('blogs.categories')->middleware('PermissionCheck:blog_category_read');
                Route::post('blog/categories/store', [BlogCategoryController::class, 'store'])->name('store.blog.categories')->middleware('PermissionCheck:blog_category_create');
                Route::put('blog-category-status-change', [BlogCategoryController::class, 'statusChane'])->name('blog.category.status.change')->middleware('PermissionCheck:blog_category_update');
                Route::get('blog-category/edit/{id}', [BlogCategoryController::class, 'edit'])->name('edit.blog.category')->middleware('PermissionCheck:blog_category_update');
                Route::put('blog-category/update', [BlogCategoryController::class, 'update'])->name('admin.update.blog.category')->middleware('PermissionCheck:blog_category_update');
                Route::delete('delete/blog_categories/{id}', [CommonController::class, 'delete'])->name('blog.category.delete')->middleware('PermissionCheck:blog_category_delete');

                //Store Front
                //Theme Options
                Route::get('get-theme-options', [StoreFrontController::class, 'themOptions'])->name('get.theme.options')->middleware('PermissionCheck:theme_option_update');
                Route::get('home-page', [StoreFrontController::class, 'homePage'])->name('admin.home.page')->middleware('PermissionCheck:home_page_update');
                Route::get('add-home-content', [StoreFrontController::class, 'getContent'])->name('get.home.content')->middleware('PermissionCheck:home_page_update');
                Route::put('update-home-content', [StoreFrontController::class, 'updateHomeContent'])->name('admin.home.page.update')->middleware('PermissionCheck:home_page_update');
                Route::put('update', [StoreFrontController::class, 'update'])->name('update')->middleware('PermissionCheck:theme_option_update');
                Route::get('website-seo', [StoreFrontController::class, 'websiteSeo'])->name('website.seo')->middleware('PermissionCheck:website_seo_update');
                Route::put('update-website-seo', [StoreFrontController::class, 'update'])->name('update.website.seo')->middleware('PermissionCheck:website_seo_update');
                Route::get('custom-css', [StoreFrontController::class, 'cssSetting'])->name('custom.css')->middleware('PermissionCheck:custom_css_update');
                Route::put('custom-css-update', [StoreFrontController::class, 'cssUpdate'])->name('custom.css.update')->middleware('PermissionCheck:custom_css_update');
                Route::get('custom-js', [StoreFrontController::class, 'jsSetting'])->name('custom.js')->middleware('PermissionCheck:custom_js_update');
                Route::put('custom-js-update', [StoreFrontController::class, 'jsUpdate'])->name('custom.js.update')->middleware('PermissionCheck:custom_js_update');
                Route::get('gdpr', [StoreFrontController::class, 'gdprSetting'])->name('gdpr')->middleware('PermissionCheck:gdpr_update');
                Route::put('gdpr-status-update', [StoreFrontController::class, 'gdprStatus'])->name('gdpr.status.update')->middleware('PermissionCheck:gdpr_update');
                Route::get('website-popup', [StoreFrontController::class, 'popupSetting'])->name('website.popup')->middleware('PermissionCheck:website_popup_update');

                //Header Content
                Route::get('header', [StoreFrontController::class, 'header'])->name('header')->middleware('PermissionCheck:header_content_update');
                Route::get('topbar', [StoreFrontController::class, 'topbarSetting'])->name('topbar')->middleware('PermissionCheck:header_content_update');
                Route::get('banner', [StoreFrontController::class, 'bannerSetting'])->name('banner')->middleware('PermissionCheck:header_content_update');
                Route::get('menu', [StoreFrontController::class, 'menuSetting'])->name('menu')->middleware('PermissionCheck:header_content_update');
                Route::post('header-menu-update', [StoreFrontController::class, 'headerMenuUpdate'])->name('header.menu.update')->middleware('PermissionCheck:header_content_update');
                Route::post('payment-methode-banner', [StoreFrontController::class, 'deletePaymentBanner'])->name('payment-method-banner')->middleware('PermissionCheck:header_content_update');


                Route::get('banners', [StoreFrontController::class, 'banners'])->name('admin.banners');
                Route::put('banners-update', [StoreFrontController::class, 'bannersUpdate'])->name('admin.banners.update');

                //Footer Content
                Route::get('footer-content', [StoreFrontController::class, 'footerSetting'])->name('footer.content')->middleware('PermissionCheck:footer_content_update');
                Route::get('about', [StoreFrontController::class, 'about'])->name('about')->middleware('PermissionCheck:footer_content_update');
                Route::get('contact', [StoreFrontController::class, 'contact'])->name('contact')->middleware('PermissionCheck:footer_content_update');
                Route::get('copyright', [StoreFrontController::class, 'copyright'])->name('copyright')->middleware('PermissionCheck:footer_content_update');
                Route::get('link', [StoreFrontController::class, 'link'])->name('link')->middleware('PermissionCheck:footer_content_update');
                Route::get('social-link', [StoreFrontController::class, 'socialLink'])->name('social.link')->middleware('PermissionCheck:footer_content_update');
                Route::get('page-link', [StoreFrontController::class, 'pageLink'])->name('page.link')->middleware('PermissionCheck:footer_content_update');
                Route::get('payment-method-banner', [StoreFrontController::class, 'paymentMethodBanner'])->name('payment.method.banner')->middleware('PermissionCheck:footer_content_update');
                Route::post('footer-menu-update', [StoreFrontController::class, 'footerMenuUpdate'])->name('footer.menu.update')->middleware('PermissionCheck:footer_content_update');
                Route::post('footer-page-update', [StoreFrontController::class, 'footerPageUpdate'])->name('footer.page.update')->middleware('PermissionCheck:footer_content_update');

                //pages
                Route::get('other-pages', [StoreFrontController::class, 'otherPages'])->name('other.pages')->middleware('PermissionCheck:page_read');
                Route::get('page-add', [StoreFrontController::class, 'addPage'])->name('page.add')->middleware('PermissionCheck:page_create');
                Route::post('page-store', [StoreFrontController::class, 'storePage'])->name('page.store')->middleware('PermissionCheck:page_create');
                Route::get('page-edit/{id}', [StoreFrontController::class, 'editPage'])->name('page.edit')->middleware('PermissionCheck:page_update');
                Route::put('page-update', [StoreFrontController::class, 'updatePage'])->name('page.update')->middleware('PermissionCheck:page_update');
                Route::put('page-status-change', [StoreFrontController::class, 'statusChange'])->name('page.status.change')->middleware('PermissionCheck:page_update');

                /// /Payment-Gateway
                Route::get('payment-gateway', [PaymentGatewayController::class, 'index'])->name('payment.gateway')->middleware('PermissionCheck:payment_gateway_read');
                Route::put('update-payment-gateway', [PaymentGatewayController::class, 'paymentUpdate'])->name('payment.gateway.update')->middleware('PermissionCheck:payment_gateway_update');
                Route::get('test-payment', [PaymentGatewayController::class, 'testPayment'])->name('test.payment')->middleware('PermissionCheck:payment_gateway_update');
                Route::post('stripe-payment', [PaymentGatewayController::class, 'stripePayment'])->name('stripe.payment')->middleware('PermissionCheck:payment_gateway_update');
                Route::put('admin-payment-status-change', [PaymentGatewayController::class, 'update'])->name('admin.payment.status.change')->middleware('PermissionCheck:payment_gateway_update');

                //profile & settings routes
                Route::get('profile', [StaffController::class, 'profile'])->name('admin.profile');
                Route::put('profile-update', [StaffController::class, 'profileUpdate'])->name('admin.profile.update');
                Route::get('login-activity', [StaffController::class, 'loginActivity'])->name('admin.login.activity');
                Route::get('password-change', [StaffController::class, 'passwordChange'])->name('admin.password.change');
                Route::put('password-update', [StaffController::class, 'passwordUpdate'])->name('password.update');
                Route::delete('delete/pages/{id}', [CommonController::class, 'delete'])->middleware('PermissionCheck:page_delete');

                // marketing
                Route::get('subscribers', [SubscriberController::class, 'index'])->name('subscribers')->middleware('PermissionCheck:subscriber_read');
                Route::delete('delete/subscribers/{id}', [CommonController::class, 'delete'])->name('subscriber.delete')->middleware('PermissionCheck:subscriber_delete');
                Route::get('bulk-SMS', [BulkSMSController::class, 'bulkSMS'])->name('bulk.sms')->middleware('PermissionCheck:bulk_sms_read');
                Route::post('send-bulk-SMS', [BulkSMSController::class, 'sendBulkSMS'])->name('send.bulk.sms')->middleware('PermissionCheck:send_bulk_sms');

                Route::get('campaign', [CampaignController::class, 'index'])->name('campaign')->middleware('PermissionCheck:campaign_read');
                Route::get('campaign/create', [CampaignController::class, 'create'])->name('campaign.create')->middleware('PermissionCheck:campaign_create');
                Route::get('campaign/products/{id}', [CampaignController::class, 'campaignProducts'])->name('campaign.products')->middleware('PermissionCheck:campaign_product_read');
                Route::post('campaign/store', [CampaignController::class, 'store'])->name('campaign.store')->middleware('PermissionCheck:campaign_create');
                Route::post('campaign/product/store', [CampaignController::class, 'campaignProductStore'])->name('campaign.product.store')->middleware('PermissionCheck:campaign_product_create');
                Route::get('product/by/ajax', [CampaignController::class, 'productByAjax'])->name('product.by.ajax');
                Route::post('show-div-ajax/{page_name}/{param1?}/{param2?}/{param3?}', [CampaignController::class, 'showDivAjax'])->name('show-div-ajax');

                Route::delete('delete/campaign_products/{id}', [CommonController::class, 'delete'])->name('campaigns.product.delete')->middleware('PermissionCheck:campaign_product_delete');
                Route::delete('delete/campaigns/{id}', [CommonController::class, 'delete'])->name('campaigns.delete')->middleware('PermissionCheck:campaign_delete');
                Route::get('campaign/edit/{id}', [CampaignController::class, 'edit'])->name('campaign.edit')->middleware('PermissionCheck:campaign_update');
                Route::post('campaign/update', [CampaignController::class, 'update'])->name('campaign.update')->middleware('PermissionCheck:campaign_update');
                Route::put('campaign-status-change', [CampaignController::class, 'statusChange'])->name('campaign.status.change')->middleware('PermissionCheck:campaign_update');
                Route::put('campaign-featured-change', [CampaignController::class, 'featuredChange'])->name('campaign.featured.change')->middleware('PermissionCheck:campaign_update');
                Route::put('campaign-flash-sale-change', [CampaignController::class, 'flashSaleChange'])->name('campaign.flash.sale.change')->middleware('PermissionCheck:campaign_update');
                Route::get('campaign-product/requests/{id}', [CampaignController::class, 'campaignProductRequest'])->name('campaign.product.requests')->middleware('PermissionCheck:campaign_product_update');
                Route::get('campaign-product/requests-status', [CampaignController::class, 'campaignProductRequestStatus'])->name('campaign.product.request.status')->middleware('PermissionCheck:campaign_product_update');
                Route::get('campaign/requests', [CampaignController::class, 'campaignRequests'])->name('campaign.requests')->middleware('PermissionCheck:campaign_product_read');


                Route::get('coupons', [CouponController::class, 'index'])->name('coupons')->middleware('PermissionCheck:coupon_read');
                Route::post('coupon-store', [CouponController::class, 'store'])->name('coupon.store')->middleware('PermissionCheck:coupon_create');
                Route::put('coupon-status-change', [CouponController::class, 'statusChane'])->name('coupon.status.change')->middleware('PermissionCheck:coupon_update');
                Route::put('coupon-update', [CouponController::class, 'update'])->name('coupon.update')->middleware('PermissionCheck:coupon_update');
                Route::delete('delete/coupons/{id}', [CommonController::class, 'delete'])->name('coupon.delete')->middleware('PermissionCheck:coupon_delete');
                Route::get('coupon-edit/{id}', [CouponController::class, 'edit'])->name('coupon.edit')->middleware('PermissionCheck:coupon_update');

                //shipping
                Route::get('shipping-configuration', [ShippingController::class, 'configuration'])->name('shipping-configuration')->middleware('PermissionCheck:shipping_configuration_read');
                Route::post('shipping-configuration', [ShippingController::class, 'configurationSave'])->name('admin.store.shipping.commission-type')->middleware('PermissionCheck:shipping_configuration_update');

                Route::get('countries', [ShippingController::class, 'countries'])->name('countries')->middleware('PermissionCheck:country_read');
                Route::put('country-status-change', [ShippingController::class, 'countryStatusChange'])->name('country.status.change')->middleware('PermissionCheck:country_update');

                //state
                Route::get('states', [ShippingController::class, 'states'])->name('states')->middleware('PermissionCheck:state_read');
                Route::post('state-store', [ShippingController::class, 'stateStore'])->name('state.store')->middleware('PermissionCheck:state_create');
                Route::put('state-status-change', [ShippingController::class, 'stateStatusChange'])->name('state.status.change')->middleware('PermissionCheck:state_update');
                Route::put('state-update', [ShippingController::class, 'stateUpdate'])->name('state.update')->middleware('PermissionCheck:state_update');
                Route::get('state-edit/{id}', [ShippingController::class, 'stateEdit'])->name('state.edit')->middleware('PermissionCheck:state_update');
                Route::post('state-import', [ShippingController::class, 'stateImport'])->name('state.import')->middleware('PermissionCheck:state_import_create');
                Route::delete('delete/states/{id}', [CommonController::class, 'delete'])->name('admin.state.delete')->middleware('PermissionCheck:state_delete');
                Route::post('get-states-by-country', [ShippingController::class, 'getStateByCountryAjax']);
                Route::post('get-cities-by-state', [ShippingController::class, 'getCityByStateAjax']);
                Route::get('state-by-ajax', [ShippingController::class, 'getStateByAjax'])->name('state.by.ajax');

                //city
                Route::get('cities', [ShippingController::class, 'cities'])->name('cities')->middleware('PermissionCheck:city_read');
                Route::post('city-store', [ShippingController::class, 'cityStore'])->name('city.store')->middleware('PermissionCheck:city_create');
                Route::put('city-status-change', [ShippingController::class, 'cityStatusChange'])->name('city.status.change')->middleware('PermissionCheck:city_update');
                Route::put('city-update', [ShippingController::class, 'cityUpdate'])->name('city.update')->middleware('PermissionCheck:city_update');
                Route::get('city-edit/{id}', [ShippingController::class, 'cityEdit'])->name('city.edit')->middleware('PermissionCheck:city_update');
                Route::delete('delete/cities/{id}', [CommonController::class, 'delete'])->name('city.delete')->middleware('PermissionCheck:city_delete');

                //support
                Route::get('support/{status?}', [SupportController::class, 'index'])->name('support')->middleware('PermissionCheck:support_read');
                Route::get('create-support', [SupportController::class, 'create'])->name('create.support')->middleware('PermissionCheck:support_create');
                Route::post('support-store', [SupportController::class, 'store'])->name('support.store')->middleware('PermissionCheck:support_create');
                Route::get('ticket-replay/{id}', [SupportController::class, 'ticketReplay'])->name('ticket.replay');
                Route::post('ticket-replay-store', [SupportController::class, 'ticketReplayStore'])->name('ticket.replay.store');
                Route::get('ticket-replay-edit/{id}', [SupportController::class, 'ticketReplayEdit'])->name('ticket.replay.edit')->middleware('PermissionCheck:support_update');
                Route::put('ticket-replay-update', [SupportController::class, 'ticketReplayUpdate'])->name('ticket.replay.update')->middleware('PermissionCheck:support_update');
                Route::delete('delete/ticket_replays/{id}', [CommonController::class, 'delete'])->name('support.ticket.delete')->middleware('PermissionCheck:support_delete');
                Route::get('contact-us', [SupportController::class, 'contactUs'])->name('contact.us');
                Route::delete('delete/contact_us/{id}', [CommonController::class, 'delete'])->name('contact.us.delete');
                Route::put('contact-us-replay/{id}', [SupportController::class, 'contactUsReplay'])->name('contact.us.replay');


                //support department
                Route::get('support-department', [SupportDepartmentController::class, 'index'])->name('support.department')->middleware('PermissionCheck:support_department_read');
                Route::post('support-department-store', [SupportDepartmentController::class, 'store'])->name('support.department.store')->middleware('PermissionCheck:support_department_create');
                Route::put('support-department-status-change', [SupportDepartmentController::class, 'statusChane'])->name('support-department.status.change')->middleware('PermissionCheck:support_department_update');
                Route::get('support-department/edit/{id}', [SupportDepartmentController::class, 'edit'])->name('support.department.edit')->middleware('PermissionCheck:support_department_update');
                Route::put('support-department/update', [SupportDepartmentController::class, 'update'])->name('support.department.update')->middleware('PermissionCheck:support_department_update');
                Route::delete('delete/support_departments/{id}', [CommonController::class, 'delete'])->name('support.department.delete')->middleware('PermissionCheck:support_department_delete');

                //Report Route
                Route::group(['prefix' => 'report'], function () {
                    Route::get('product-sale', [ReportController::class, 'adminProducts'])->name('admin.product.sale')->middleware('PermissionCheck:admin_product_sale_read');
                    Route::get('seller-product-sale', [ReportController::class, 'sellerProducts'])->name('admin.seller.product.sale')->middleware('PermissionCheck:seller_product_sale_read');
                    Route::get('stock-product', [ReportController::class, 'stockProduct'])->name('stock.product.report')->middleware('PermissionCheck:product_stock_read');
                    Route::get('product-wishlist', [ReportController::class, 'productWishlists'])->name('product.wishlist')->middleware('PermissionCheck:product_wishlist_read');
                    Route::get('user-searches', [ReportController::class, 'userSearches'])->name('user.searches')->middleware('PermissionCheck:user_searches_read');
                    Route::get('commission-history', [ReportController::class, 'commissionHistory'])->name('commission.history')->middleware('PermissionCheck:commission_history_read');
                    Route::get('wallet-recharge-history', [ReportController::class, 'walletRecharge'])->name('wallet.recharge.history')->middleware('PermissionCheck:wallet_recharge_history_read');
                });

                //Wallet Route
                Route::group(['prefix' => 'wallet'], function () {
                    Route::get('recharge-requests', [WalletController::class, 'walletRechargeRequests'])->name('admin.wallet.recharge.request')->middleware('PermissionCheck:recharge_request_read');
                    Route::put('recharge-request-approve/{id}', [WalletController::class, 'walletApproveRequest'])->name('admin.approved.wallet.recharge')->middleware('PermissionCheck:recharge_request_status_update');
                    Route::put('recharge-requests-reject/{id}', [WalletController::class, 'walletRejectRequest'])->name('admin.reject.wallet.recharge')->middleware('PermissionCheck:recharge_request_status_update');
                });


                //Addon Route
                Route::group(['prefix' => 'addons'], function () {
                    Route::get('installed', [AddonController::class, 'installAddons'])->name('admin.installed.addon');
                    Route::get('available', [AddonController::class, 'availableAddons'])->name('admin.available.addons');
                    Route::post('new-install', [AddonController::class, 'installNewAddon'])->name('install.new.addon');
                });
                Route::put('addon-status-change', [AddonController::class, 'statusChange'])->name('addon.status.change');

                //order
                Route::group(['prefix' => 'orders'], function () {
                    Route::get('/', [OrderController::class, 'index'])->name('orders')->middleware('PermissionCheck:order_read');
                    Route::get('seller', [OrderController::class, 'sellerOrders'])->name('admin.seller.orders')->middleware('PermissionCheck:order_read');
                    Route::get('admin', [OrderController::class, 'adminOrder'])->name('admin.orders')->middleware('PermissionCheck:order_read');
                    Route::get('pickup-hub', [OrderController::class, 'pickupHubOrder'])->name('pickup.hub.orders')->middleware('PermissionCheck:order_read');
                    Route::get('invoice/download/{id}', [OrderController::class, 'invoiceDownload'])->name('order.invoice.download')->middleware('PermissionCheck:order_invoice');
                    Route::get('view/{id}', [OrderController::class, 'view'])->name('order.view')->middleware('PermissionCheck:order_view');
                    Route::post('assign/delivery-hero', [OrderController::class, 'assignDeliveryHero'])->name('order.assign.delivery.hero')->middleware('PermissionCheck:order_update');
                    Route::post('delivery/status-change', [OrderController::class, 'deliveryStatusChange'])->name('order.delivery.status.change')->middleware('PermissionCheck:order_update');
                    Route::post('payment/status-change', [OrderController::class, 'paymentStatusChange'])->name('order.payment.status.change')->middleware('PermissionCheck:order_update');
                    Route::post('approve-offline-payment', [OrderController::class, 'approveOfflinePayment'])->name('order.approve.offline.payment')->middleware('PermissionCheck:order_approve_offline_payment');
                });
                Route::delete('delete/orders/{id}', [CommonController::class, 'delete'])->name('orders.delete')->middleware('PermissionCheck:order_delete');

                //pickup hub
                Route::get('pickup-hubs', [PickupHubController::class, 'index'])->name('pickup.hub.index')->middleware('PermissionCheck:pickup_hub_read');
                Route::post('pickup-hub-store', [PickupHubController::class, 'store'])->name('pickup.hub.store')->middleware('PermissionCheck:pickup_hub_create');
                Route::put('pickup-hub-status-change', [PickupHubController::class, 'statusChane'])->name('pickup.hub.status.change')->middleware('PermissionCheck:pickup_hub_update');
                Route::get('pickup-hub-edit/{id}', [PickupHubController::class, 'edit'])->name('pickup.hub.edit')->middleware('PermissionCheck:pickup_hub_update');
                Route::put('pickup-hub-update', [PickupHubController::class, 'update'])->name('pickup.hub.update')->middleware('PermissionCheck:pickup_hub_update');
                Route::delete('delete/pickup_hubs/{id}', [CommonController::class, 'delete'])->name('support.pickup-hub.delete')->middleware('PermissionCheck:pickup_hub_delete');

                //Mobile Apps
                Route::get('api-setting', [MobileAppsController::class, 'apiSetting'])->name('apis.settings');
                Route::resource('api-keys', \App\Http\Controllers\ApiKeyController::class)->except('destroy');
                Route::delete('delete/api_keys/{service}', [CommonController::class, 'delete'])->name('services.destroy')->middleware('PermissionCheck:service_delete');
                Route::get('android-setting', [MobileAppsController::class, 'androidSetting'])->name('android.settings')->middleware('PermissionCheck:android_setting_update');
                Route::get('download-link-setting', [MobileAppsController::class, 'downloadLink'])->name('download.link.settings')->middleware('PermissionCheck:download_link_update');
                Route::get('ios-setting', [MobileAppsController::class, 'iosSetting'])->name('ios.settings')->middleware('PermissionCheck:ios_setting_update');
                Route::get('app-config-setting', [MobileAppsController::class, 'appConfigSetting'])->name('app.config.settings')->middleware('PermissionCheck:app_config_update');
                Route::get('ads-config-setting', [MobileAppsController::class, 'adsConfigSetting'])->name('ads.config.settings')->middleware('PermissionCheck:ads_config_update');
                Route::put('api-setting-update', [MobileAppsController::class, 'apiUpdate'])->name('mobile.apps.settings.update');
                Route::get('mobile-slider-setting', [MobileAppsController::class, 'sliderSettings'])->name('mobile.slider.settings');
                Route::get('mobile-banner-settings',[MobileAppsController::class, 'mobileBanner'])->name('mobile.banner.settings');
                Route::get('create-mobile-slider', [MobileAppsController::class, 'createSlider'])->name('create.mobile.slider');
                Route::get('edit-mobile-slider/{id}', [MobileAppsController::class, 'editSlider'])->name('edit.mobile.slider');
                Route::put('mobile-slider-update', [MobileAppsController::class, 'apiUpdate'])->name('mobile.slider.update');
                Route::get('mobile-home-screen', [MobileAppsController::class, 'homePageBuilder'])->name('mobile.home.page');
                Route::post('mobile-home-page-update', [MobileAppsController::class, 'updateMobileHomeContent'])->name('mobile.home.page.update');

                //App Intro  Settings
                Route::get('app-intro-setting', [AppIntroController::class, 'index'])->name('app.intro.settings')->middleware('PermissionCheck:mobile_app_intro_read');
                Route::post('app-intro-setting-store', [AppIntroController::class, 'store'])->name('app.intro.store')->middleware('PermissionCheck:mobile_app_intro_create');
                Route::get('app-intro-edit/{id}', [AppIntroController::class, 'edit'])->name('app.intro.edit')->middleware('PermissionCheck:mobile_app_intro_update');
                Route::put('app-intro-update', [AppIntroController::class, 'update'])->name('app.intro.update')->middleware('PermissionCheck:mobile_app_intro_update');
                Route::put('app-intro-status-change', [AppIntroController::class, 'statusChange'])->name('app.intro.status.change')->middleware('PermissionCheck:mobile_app_intro_update');
                Route::delete('delete/app_intros/{id}', [CommonController::class, 'delete'])->name('app.intro.delete')->middleware('PermissionCheck:mobile_app_intro_delete');

                //Slider Routes...
                Route::get('sliders', [SliderController::class, 'index'])->name('sliders.index')->middleware('PermissionCheck:slider_read');
                Route::get('sliders/create', [SliderController::class, 'create'])->name('sliders.create')->middleware('PermissionCheck:slider_create');
                Route::post('sliders', [SliderController::class, 'store'])->name('sliders.store')->middleware('PermissionCheck:slider_create');
                Route::get('sliders/{slider}/edit', [SliderController::class, 'edit'])->name('sliders.edit')->middleware('PermissionCheck:slider_update');
                Route::put('sliders/{slider}', [SliderController::class, 'update'])->name('sliders.update')->middleware('PermissionCheck:slider_update');
                Route::put('slider-status-change', [SliderController::class, 'statusChange'])->name('slider.status.change')->middleware('PermissionCheck:slider_update');
                Route::delete('delete/sliders/{slider}', [CommonController::class, 'delete'])->name('sliders.destroy')->middleware('PermissionCheck:slider_delete');

                //Banner Routes...
                Route::get('slider-banners/create', [\App\Http\Controllers\Admin\BannerController::class, 'create'])->name('banners.create');
                Route::post('slider-banners', [\App\Http\Controllers\Admin\BannerController::class, 'store'])->name('banners.store')->middleware('PermissionCheck:slider_create');
                Route::get('slider-banners/{slider}/edit', [\App\Http\Controllers\Admin\BannerController::class, 'edit'])->name('banners.edit')->middleware('PermissionCheck:slider_update');
                Route::put('slider-banners/{slider}', [\App\Http\Controllers\Admin\BannerController::class, 'update'])->name('banners.update')->middleware('PermissionCheck:slider_update');
                Route::put('banner-status-change', [\App\Http\Controllers\Admin\BannerController::class, 'statusChange'])->name('banner.status.change')->middleware('PermissionCheck:slider_update');
                Route::delete('delete/banners/{slider}', [CommonController::class, 'delete'])->name('banners.destroy')->middleware('PermissionCheck:slider_delete');
                //Service Routes....
                Route::get('services', [ServiceController::class, 'index'])->name('services.index')->middleware('PermissionCheck:service_read');
                Route::get('service/create', [ServiceController::class, 'create'])->name('services.create');
                Route::post('services', [ServiceController::class, 'store'])->name('services.store')->middleware('PermissionCheck:service_create');
                Route::get('services/{service}/edit', [ServiceController::class, 'edit'])->name('services.edit')->middleware('PermissionCheck:service_update');
                Route::put('services/{service}', [ServiceController::class, 'update'])->name('services.update')->middleware('PermissionCheck:service_update');
                Route::delete('delete/services/{service}', [CommonController::class, 'delete'])->middleware('PermissionCheck:service_delete');

                Route::get('server-info',[GeneralSettingsController::class, 'serverInfo'])->name('admin.server.info');
                Route::get('update-system',[GeneralSettingsController::class, 'updateServerForm'])->name('admin.system.update.form');
                Route::post('download-update-files',[GeneralSettingsController::class, 'downloadUpdate'])->name('admin.download.update');
                Route::post('update-system',[GeneralSettingsController::class, 'updateSystem'])->name('admin.system.update');
                Route::get('time-zone-by-ajax', [GeneralSettingsController::class, 'getTomeZoneByAjax'])->name('time.zone.by.ajax');

                //product importing
                Route::get('import-products',[ProductController::class, 'productImport'])->name('admin.product.import')->middleware('PermissionCheck:product_create');
                Route::get('import-sample/{type}',[CommonController::class, 'importSample'])->name('admin.import.sample')->middleware('PermissionCheck:product_create');
                Route::get('download/{type}',[CommonController::class, 'download'])->name('admin.list.download');
                Route::post('import-products',[CommonController::class, 'productImportPost'])->name('admin.product.import.post')->middleware('PermissionCheck:product_create');
                //customer import
                Route::get('import-customers',[UserController::class, 'customerImport'])->name('admin.customer.import')->middleware('PermissionCheck:customer_create');
                Route::post('import-customers',[UserController::class, 'importCustomer'])->name('admin.customer.import.post')->middleware('PermissionCheck:customer_create');
                //seller import
                Route::get('import-sellers',[SellerController::class, 'sellerImport'])->name('admin.seller.import')->middleware('PermissionCheck:seller_create');
                Route::post('import-sellers',[SellerController::class, 'importSeller'])->name('admin.seller.import.post')->middleware('PermissionCheck:seller_create');
                Route::get('import-cities',[ShippingController::class, 'importCity'])->name('import.city');
            });
        });
    });
});
