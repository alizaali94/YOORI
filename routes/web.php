<?php

use App\Http\Controllers\Admin\Addons\RewardSystemController;
use App\Http\Controllers\Admin\CommonController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\RegisterController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\WalletController;
use App\Http\Controllers\Seller\CouponController;
use App\Http\Controllers\Site\AddressController;
use App\Http\Controllers\Site\BlogController;
use App\Http\Controllers\Site\CartController;
use App\Http\Controllers\Site\CompareController;
use App\Http\Controllers\Site\FrontendController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\OrderController;
use App\Http\Controllers\Site\PaymentController;
use App\Http\Controllers\Site\ProductController;
use App\Http\Controllers\Site\SocialController;
use App\Http\Controllers\Site\UserController;
use App\Http\Controllers\Site\WishlistController;
use App\Http\Controllers\SitemapController;

use Illuminate\Support\Facades\Route;

/*Route::get('cache-clear', [CacheController::class, 'clear'])->name('admin.clear.cache');
Route::get('optimize-clear', [CacheController::class, 'optimize'])->name('admin.clear.optimize');*/

Route::get('cache-clear', [HomeController::class, 'cacheClear'])->name('cache.clear');
Route::get('get-database', [HomeController::class, 'getDb'])->name('get.database');

Route::post('password-check', [HomeController::class, 'passwordVerify'])->name('password.check');
Route::middleware(['XSS', 'isInstalled'])->group(function () {
    Route::get('settings-data', [HomeController::class, 'defaultAssets']);
    Route::get('viewed-products', [HomeController::class, 'viewedProducts']);
    Route::get('/assets', [HomeController::class, 'index'])->name('index');
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/activate', [HomeController::class, 'activate'])->name('activate');
    Route::get('/forget', [HomeController::class, 'forget'])->name('forget');
    Route::get('/success', [HomeController::class, 'success'])->name('success');
    Route::get('/reset', [HomeController::class, 'reset'])->name('reset');

    Route::post('social-login', [SocialController::class, 'login'])->where('provider', 'facebook|twitter|google');
//    Route::get('login/{provider}/callback', [SocialController::class,'callback'])->where('provider','facebook|twitter|google');

    Route::middleware('logoutCheck')->group(function () {
        //admin register
        Route::get('register', [HomeController::class, 'index'])->name('register');
        Route::post('register', [RegisterController::class, 'postRegister'])->name('register.post');
        Route::post('seller-register', [RegisterController::class, 'sellerRegister'])->name('seller.register.post');

        Route::post('reset-password', [UserController::class, 'resetPassword'])->name('reset.password');
        Route::get('reset/{email}/{activationCode}', [HomeController::class, 'index']);
        Route::post('create-new-password', [UserController::class, 'createNewPassword'])->name('create.new.password');
        Route::post('register/by-phone', [RegisterController::class, 'registerByPhone'])->name('register.by.phone');

        Route::get('seller/login', [LoginController::class, 'sellerLogin'])->name('seller.login.form');
        Route::get('admin/login', [LoginController::class, 'adminLogin'])->name('admin.login.form');

        //admin login
        Route::get('login', [HomeController::class, 'index'])->name('login');
        Route::post('login', [LoginController::class, 'postLogin'])->name('login.post');
        Route::post('login-admin-seller', [LoginController::class, 'adminSellerlogin'])->name('admin.seller.login');
        Route::post('get-otp', [LoginController::class, 'getOtp'])->name('login.otp');
        Route::post('submit-otp', [LoginController::class, 'postLogin'])->name('login.otp.submit');
        //admin logout
    });

    Route::get('activation/{email}/{activationCode}', [LoginController::class, 'activation']);

    Route::middleware(['loginCheck'])->group(function () {

        Route::get('logout', [LoginController::class, 'logout'])->name('logout');
        //media modals
        Route::get('get-media', [MediaController::class, 'getMedia']);
        Route::get('load-new-uploaded-media', [MediaController::class, 'getNewFiles'])->name('admin.get.new.media');
        Route::get('load-more-uploaded-media', [MediaController::class, 'getMoreMedia'])->name('admin.get.more.media');
        Route::get('get-selected-media', [MediaController::class, 'getSelectedMedia'])->name('admin.get.selected.media');
        Route::post('add-media', [MediaController::class, 'store'])->name('admin.store.media');

        Route::get('logout-other-devices', [StaffController::class, 'logoutOtherDevices'])->name('logout.other.devices');

        //for user api
        Route::group(['prefix' => 'user'], function () {
            Route::post('change-password', [UserController::class, 'changePassword'])->name('user.change.password');
            Route::post('apply_coupon', [CartController::class, 'applyCoupon'])->name('apply.coupon');
            Route::get('coupons', [UserController::class, 'coupons'])->name('user.coupons');
            Route::post('coupon-delete', [CartController::class, 'deleteCoupon']);
            Route::get('wishlists', [WishlistController::class, 'wishlists'])->name('user.wishlist');
            Route::post('update-profile', [UserController::class, 'updateProfile'])->name('user.update.profile');
            Route::get('get-all-address', [AddressController::class, 'allAddress'])->name('user.addresses.axios');
            Route::get('add-to-wishlist/{id}', [WishlistController::class, 'addToWishlist'])->name('product.addToWishlist');
            Route::get('remove-wishlist-product/{id}', [WishlistController::class, 'wishlistProductRemove'])->name('wishlist.remove');
            Route::post('user-to-seller', [RegisterController::class, 'postRegister'])->name('register.post.seller');
            Route::get('wallet-data', [UserController::class, 'walletData'])->name('wallet.data');
            Route::get('wallet-history', [UserController::class, 'walletHistory'])->name('wallet.history');

            Route::get('follow-shop', [UserController::class, 'followShop'])->name('follow.shop');
            Route::get('followed-sellers', [UserController::class, 'userFollowedShop'])->name('user.followed.shop');
            Route::get('remove-followed', [UserController::class, 'removeFollow'])->name('remove.follow');


            //order-routes
            Route::get('profile-orders', [OrderController::class, 'profileOrder'])->name('user.profile');
            Route::get('order-list', [OrderController::class, 'orderList'])->name('user.order.list');
            Route::get('digital-product-order-list', [OrderController::class, 'digitalProductOrders'])->name('user.digital.product.orders');
            Route::get('remove-order/{id}', [OrderController::class, 'removeOrder'])->name('remove.order');
            Route::get('cancel-order/{id}', [OrderController::class, 'cancelOrder'])->name('cancel.order');
            Route::post('product-review-store', [ProductController::class, 'storeReview'])->name('review.store');
            Route::post('convert-reward', [RewardSystemController::class, 'convertReward'])->name('convert.reward');
            Route::get('reward-history', [RewardSystemController::class, 'rewardHistory'])->name('convert.reward.history');
//            Route::get('coupon-lists', [UserController::class, 'couponList'])->name('convert.reward.history');
        });

        //notification
        Route::group(['prefix' => 'notification'], function () {
            Route::get('/all', [NotificationController::class, 'index'])->name('notification.all');
            Route::get('/status-change/{id}', [NotificationController::class, 'statusChange'])->name('notification.status.change');
            Route::get('/mark-seen', [NotificationController::class, 'markAllSeen'])->name('mark.notification.seen');
            Route::get('/seen/{id}', [NotificationController::class, 'seen'])->name('notification.seen');
            Route::get('/remove/{id}', [NotificationController::class, 'remove'])->name('notification.remove');
        });
        Route::delete('delete/notifications/{id}', [CommonController::class, 'delete'])->name('notifications.delete');

        //front-end
        Route::get('user-notification/all', [NotificationController::class, 'userNotification'])->name('user.notification.all');
        Route::get('user-notification/seen-all', [NotificationController::class, 'userNotificationSeenAll'])->name('user.notification.seen.all');
    });
    Route::middleware(['adminCheck', 'loginCheck'])->prefix('admin')->group(function () {
        Route::get('login-by-user/{id}', [LoginController::class, 'loginByUser'])->name('login.by.user');
    });

    Route::match(['get', 'post'], 'user/get-invoices/{trx_id}', [OrderController::class, 'sellerWiseInvoices'])->name('get.invoices');
    Route::get('user/payment-order', [OrderController::class, 'userLastOrder'])->name('payment.order');
    Route::post('user/confirm-order', [OrderController::class, 'confirmOrder'])->name('confirm.order');
    Route::get('user/address', [AddressController::class, 'addresses'])->name('user.addresses');
    Route::post('user/country-search', [AddressController::class, 'searchCountry']);
    Route::get('add-to-cart', [CartController::class, 'addToCart'])->name('add-to-cart');
    Route::get('update-cart', [CartController::class, 'updateCart'])->name('update-cart');
    Route::get('remove-from-cart/{id}', [CartController::class, 'removeFromCart'])->name('remove-from-cart');
    Route::get('shipping', [OrderController::class, 'shipping'])->name('shipping');
    Route::get('user/invoice/download/{id}', [OrderController::class, 'invoiceDownload'])->name('user.order.invoice.download');

    //for frontend api
    Route::middleware('loginCheck')->group(function () {
        Route::get('/dashboard', [HomeController::class, 'index'])->where('path', '*');
    });
    Route::match(['get','post'],'user/recharge-wallet', [UserController::class, 'walletRecharge'])->name('recharge.wallet');

    Route::get('user/mail-order/{trx_id}', [OrderController::class, 'userSendMail']);
    Route::get('user/mail-order-seller/{trx_id}', [OrderController::class, 'sendMailSeller']);
    Route::get('user/checkout', [CartController::class, 'createCheckout'])->name('user.checkout');
    Route::post('user/remove_coupon', [CartController::class, 'removeCoupon'])->name('remove.coupon');
    Route::match(['get', 'post'], 'user/complete-order', [OrderController::class, 'completeOrder'])->name('complete.order');
    Route::post("user/find/shipping_cost", [CartController::class, 'shippingCostFind'])->name('find.shippingCost');
    Route::match(['get', 'post'], 'user/invoice/{code}', [OrderController::class, 'getInvoice'])->name('get.invoice.any');

    //vue js redirect by laravel route
    Route::get('/{anypath}', [HomeController::class, 'index'])->where('path', '*')->name('home.page');
    Route::get('user/{anypath}', [HomeController::class, 'index'])->where('path', '*')->middleware('loginCheck');
    Route::get('/blog/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('blog-details');
    Route::get('/campaign/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('campaign.details');
    Route::get('/category/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('category-by-slug');
    Route::get('/best-selling/products', [HomeController::class, 'index'])->where('path', '*')->name('best.selling.products.list');
    Route::get('/offer/products', [HomeController::class, 'index'])->where('path', '*')->name('offer.products.list');
    Route::get('/brand/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('brand-by-slug');
    Route::get('/seller-products/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('seller-by-slug');
    Route::get('/gadget-products/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('category-by-slug.gadget');
    Route::get('/category-blogs/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('category.blogs');
    Route::get('/product/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('product-details');
    Route::get('/get-invoice/{code}', [HomeController::class, 'index'])->where('path', '*')->name('get.invoice');
    Route::get('/product-by-search/{searchKey}', [HomeController::class, 'index'])->where('path', '*')->name('product.by.search');
    Route::match(['get', 'post'], 'invoice/{trx_id}', [HomeController::class, 'index'])->where('path', '*')->name('invoice.by.trx');
    Route::get('/payment/{anypath}', [HomeController::class, 'index'])->where('path', '*');
    Route::get('/register/seller', [HomeController::class, 'index'])->name('seller.register');
    Route::get('user/migrate/{type}', [HomeController::class, 'index'])->where('path', '*')->middleware('loginCheck');
    Route::get('page/{anypath}', [HomeController::class, 'index'])->where('path', '*');
    Route::get('shop/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('frontend.shop');
    Route::get('video-shopping/{slug}', [HomeController::class, 'index'])->where('path', '*')->name('video.details');
    Route::get('user/user-to-seller', [HomeController::class, 'index'])->where('path', '*');
    Route::match(['get','post'],'my-wallet', [HomeController::class, 'index'])->where('path', '*');
    Route::match(['get','post'],'payment', [HomeController::class, 'index'])->where('path', '*');


    //api data collection
    Route::get('home/page', [FrontendController::class, 'home'])->name('home.page.data');
    Route::get('sidebar/categories', [HomeController::class, 'sidebarCategories']);
    Route::get('home/contact-page', [FrontendController::class, 'contactPage'])->name('home.contact');
    Route::get('home/others-page/{slug}', [FrontendController::class, 'page'])->name('page');
    Route::get('home/campaign-lists', [FrontendController::class, 'campaigns'])->name('campaign.list');
    Route::get('home/campaign-products', [ProductController::class, 'campaignProducts'])->name('front.campaign.products');
    Route::get('home/campaign-brands', [ProductController::class, 'campaignBrands'])->name('campaign.brands');
    Route::get('home/categories', [FrontendController::class, 'categories'])->name('front.categories');
    Route::get('home/daily-deals', [FrontendController::class, 'dailyDeals'])->name('daily.deals');
    Route::get('checkout-page', [FrontendController::class, 'checkout'])->name('checkout.page');
    Route::get('home/product-details/{slug}', [ProductController::class, 'productDetails'])->name('product.details');
    Route::get('home/product-reviews/{id}', [ProductController::class, 'reviews'])->name('product.reviews');
    Route::post('home/product-reply-store', [ProductController::class, 'storeReply'])->name('reply.store');
    Route::post('product/like-review', [ProductController::class, 'reviewLike'])->name('product.like.review');
    Route::post('product/unlike-review', [ProductController::class, 'unlikeReview'])->name('product.unlike.review');
    Route::get('home/compare-list', [CompareController::class, 'compareList'])->name('product.compareList');
    Route::post('find/products-variants', [ProductController::class, 'findVariants'])->name('product.find.variants');
    Route::get('home/remove-compare_product/{id}', [CompareController::class, 'removeCompareProduct'])->name('product.remove.compareList');
    Route::get('home/add-to-compare/{id}', [CompareController::class, 'addToCompare'])->name('product.addToCompare');

    Route::get('/home/blogs', [BlogController::class, 'blogs'])->name('front.blogs');
    Route::get('/home/blog-details/{slug}', [BlogController::class, 'blogDetails'])->name('blog.details');
    Route::post('/store/blog-comment', [BlogController::class, 'storeComment'])->name('blog.comment');
    Route::post('store/blog-comment-reply', [BlogController::class, 'storeCommentReply'])->name('blog.comment.reply');
    Route::get('load/blog-comments/{id}', [BlogController::class, 'loadBlogComments'])->name('blog.comments');
    Route::get('load/blog-categories', [BlogController::class, 'loadBlogCategories'])->name('blog.categories');
    Route::post('blog/like-comments', [BlogController::class, 'likeBlogComments'])->name('blog.like.comments');
    Route::post('blog/unlike-comments', [BlogController::class, 'unlikeBlogComments'])->name('blog.unlike.comments');
    Route::post('blog/like-reply', [BlogController::class, 'likeBlogReply'])->name('blog.like.reply');
    Route::post('blog/unlike-reply', [BlogController::class, 'unlikeBlogReply'])->name('blog.unlike.reply');
    Route::post('track-order', [FrontendController::class, 'trackOrder'])->name('track.order');
    Route::get('home/brands', [FrontendController::class, 'brands'])->name('brands.all');
    Route::get('home/sellers', [FrontendController::class, 'sellers'])->name('front.sellers');
    Route::get('home/offer-products', [ProductController::class, 'productByOffer'])->name('offer.products');
    Route::get('home/best-selling-products', [ProductController::class, 'productByBestSelling'])->name('best.selling.products');
    Route::get('home/flash-sale-products', [ProductController::class, 'productByFlashSale'])->name('flash.sale.products');
    Route::get('home/gadget-products/{slug}', [ProductController::class, 'productByGadget'])->name('gadget.products');
    Route::get('change/locale/{locale}', [FrontendController::class, 'changeLocale'])->name('change.locale');
    Route::get('change/currency/{currency}', [FrontendController::class, 'changeCurrency'])->name('change.currency');
    Route::post('send-message', [FrontendController::class, 'contactUs'])->name('store.contact.us');
    Route::post('reply-message', [FrontendController::class, 'reply'])->name('reply.contact.us');
    Route::get('user/wishlists', [FrontendController::class, 'wishlist'])->name('wishlist');
    Route::get('home/user/order-list', [ProductController::class, 'productOrderList'])->name('product.order.list')->middleware('customerCheck');
    Route::post('store/user-address', [AddressController::class, 'saveAddress'])->name('user.store.address');
    Route::post('default/user-address/{type}/{id}', [AddressController::class, 'updateDefault'])->name('user.default.address');
    Route::get('delete/user-address/{id}', [AddressController::class, 'deleteAddress'])->name('user.delete.address');
    Route::get('state/by-country/{id}', [AddressController::class, 'getStates'])->name('state.by-country');
    Route::get('city/by-state/{id}', [AddressController::class, 'getCities'])->name('city.by-state');
    Route::post('home/product-by-search/{searchKey}', [ProductController::class, 'productBySearch'])->name('product.by.search.post');
    Route::post('home/subscribers', [FrontendController::class, 'subscribers'])->name('front.subscribers');
    Route::post('home/product-view', [ProductController::class, 'productView'])->name('product.view');

    //cart
    Route::get('cart/list', [CartController::class, 'index'])->name('user.cart.list');
    Route::post('user/addToCart', [CartController::class, 'addToCart'])->name('user.add.cart');
    Route::get('cart/delete/{id}', [CartController::class, 'removeFromCart'])->name('delete.cart');
    Route::post('cart/update', [CartController::class, 'updateCart'])->name('update.cart');

    Route::get('home/load-attributes', [ProductController::class, 'loadAttributes']);
    Route::get('home/filtered_products', [ProductController::class, 'filterProducts']);
    Route::get('home/filter_data', [ProductController::class, 'filterData'])->name('filter.data');
    Route::get('home/load-categories', [ProductController::class, 'loadCategories'])->name('load.category');
    Route::get('home/load-brands', [ProductController::class, 'loadBrands'])->name('load.brands');
    Route::get('/home/load-colors', [ProductController::class, 'loadColors'])->name('load.colors');
    Route::get('/home/check-auth', [LoginController::class, 'checkAuth'])->name('check.auth');
    Route::get('language/keywords', [FrontendController::class, 'langKeywords'])->name('language.keywords');
    Route::get('/shop-page-data/{slug}', [\App\Http\Controllers\Admin\SellerController::class, 'shop'])->name('shop.details');
    Route::get('/settings/data', [HomeController::class, 'settingsData'])->name('settings.data');
    Route::get('/seller/coupons/{id}', [CouponController::class, 'coupons'])->name('front.seller.coupons');
    Route::match(['post', 'get'], 'get/ssl-response', [PaymentController::class, 'sslResponse'])->name('ssl.response');
    Route::get('get/country-list', [AddressController::class, 'countries'])->name('get.country');
    Route::get('set/text-direction/{dir}', [HomeController::class, 'textDirection'])->name('set.text-direction');
    Route::post('search/product', [ProductController::class, 'searchProduct'])->name('search.product');
    Route::get('summernote/clean', [HomeController::class, 'summernoteClean'])->name('summernote.clean');
    Route::get('get/video-shops', [FrontendController::class, 'videoShopping']);
    Route::get('get/video-shops-details/{slug}', [FrontendController::class, 'videoShoppingDetails']);
    Route::get("user/payment/paytmRedirect", [PaymentController::class, 'paytmPayment']);
    Route::get('jazz/redirect', [PaymentController::class, 'jazzCashPayment'])->name('jazz.redirect');
    Route::get('stripe/redirect', [PaymentController::class, 'stripeRedirect']);

    Route::get('mollie/payment', [PaymentController::class, 'mollieRedirect'])->name('mollie.payment');
    Route::get('mollie/recharge-payment', [PaymentController::class, 'rechargeWithMollie'])->name('mollie.recharge.payment');
    Route::get('mollie/success', [PaymentController::class, 'mollieSuccess'])->name('mollie.success');
    Route::post('paytm/success', [PaymentController::class, 'payTmSuccess'])->name('payTm.success');
    Route::get('mollie/recharge-success', [PaymentController::class, 'mollieRechargeSuccess'])->name('mollie.recharge.success');
    Route::post('fw-verify', [PaymentController::class, 'verifyFW']);
    Route::get('mercadopago/redirect', [PaymentController::class, 'mercadoPago']);
    Route::get('telr/redirect', [PaymentController::class, 'telrRedirect']);
    Route::get('amarpay/redirect', [PaymentController::class, 'aamarpayRedirect']);
    Route::get('bkash/redirect', [PaymentController::class, 'bkashRedirect']);
    Route::get('bkash/execute', [PaymentController::class, 'bkashExecute']);
    Route::get('bkash/execute', [PaymentController::class, 'bkashExecute']);
    Route::get('nagad/redirect', [PaymentController::class, 'nagadRedirect']);
    Route::get('nagad/callback', [PaymentController::class, 'nagadVerify']);
    Route::get('skrill/redirect', [PaymentController::class, 'skrillRedirect']);
    Route::get('iyzico/redirect', [PaymentController::class, 'iyzicoRedirect']);
    Route::get('kkiapay/callback', [PaymentController::class, 'retrieveIyzico'])->name('iyzico.callback');


    Route::get('mercadopago/redirect/wallet', [WalletController::class, 'mercadoPago']);
    Route::get('bkash/redirect/wallet', [WalletController::class, 'bkashRedirect']);
    Route::get('bkash/execute/wallet', [WalletController::class, 'bkashExecute']);
    Route::get('nagad/redirect/wallet', [WalletController::class, 'nagadRedirect']);
    Route::get('nagad/callback/wallet', [WalletController::class, 'nagadVerify']);
    Route::get('amarpay/redirect/wallet', [WalletController::class, 'aamarpayRedirect']);
    Route::get('skrill/redirect/wallet', [WalletController::class, 'skrillRedirect']);
    Route::get('iyzico/redirect/wallet', [WalletController::class, 'iyzicoRedirect']);
    Route::get('iyzico/callback/wallet', [WalletController::class, 'retrieveIyzico'])->name('iyzico.callback.wallet');
    Route::get('telr/redirect/wallet', [WalletController::class, 'telrRedirect']);
    Route::post('delete-file', [HomeController::class, 'deleteFile'])->name('delete.file')->middleware('loginCheck');


//    Route::get('user/complete-recharge', [WalletController::class, 'walletStore']);
    Route::match(['get', 'post'], 'user/complete-recharge', [WalletController::class, 'walletStore'])->name('wallet.complete.recharge');
    Route::get('file-download/{product_file}', [HomeController::class, 'fileDownload'])->name('file.download')->middleware('signed');
    Route::get('change-exchange-rate/{code}', [HomeController::class, 'changeCurrencyRate'])->name('change.currency.rate');
//
    //Report Route
    Route::group(['prefix' => 'sitemap'], function () {
        Route::get('products.xml', [SitemapController::class, 'products'])->name('products.sitemap');
        Route::get('blogs.xml', [SitemapController::class, 'blogs'])->name('blogs.sitemap');
        Route::get('categories.xml', [SitemapController::class, 'categories'])->name('categories.sitemap');
        Route::get('brands.xml', [SitemapController::class, 'brands'])->name('brands.sitemap');
        Route::get('shops.xml', [SitemapController::class, 'shops'])->name('shops.sitemap');
        Route::get('pages.xml', [SitemapController::class, 'pages'])->name('pages.sitemap');
    });

    Route::get('migrate', function () {
        \Illuminate\Support\Facades\Artisan::call('migrate');
    });


});


