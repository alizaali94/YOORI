<?php


use App\Http\Controllers\Admin\WalletController;
use App\Http\Controllers\Api\V100\APIController;
use App\Http\Controllers\Api\V100\AuthController;
use App\Http\Controllers\Api\V100\BlogController;
use App\Http\Controllers\Api\V100\BrandController;
use App\Http\Controllers\Api\V100\CartController;
use App\Http\Controllers\Api\V100\CategoryController;
use App\Http\Controllers\Api\V100\HomeController;
use App\Http\Controllers\Api\V100\NotificationController;
use App\Http\Controllers\Api\V100\OrderController;
use App\Http\Controllers\Api\V100\ProductController;
use App\Http\Controllers\Api\V100\ReviewController;
use App\Http\Controllers\Api\V100\RewardSystemController;
use App\Http\Controllers\Api\V100\ShippingController;
use App\Http\Controllers\Api\V100\ShopController;
use App\Http\Controllers\Api\V100\UserController;
use App\Http\Controllers\Api\V100\VideoShoppingController;
use App\Http\Controllers\Api\V100\WishlistController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v100')->group(function() {
    Route::middleware(['CheckApiKey'])->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
        Route::post('register-by-phone', [AuthController::class, 'registerByPhone']);
        Route::post('verify-registration-otp', [AuthController::class, 'verifyRegistrationOTP']);
        Route::post('get-login-otp', [AuthController::class, 'getOtp']);
        Route::post('verify-login-otp', [AuthController::class, 'verifyLoginOtp']);
        Route::post('social-login', [AuthController::class, 'socialLogin']);
        Route::post('get-verification-link', [AuthController::class, 'forgotPassword']);
        Route::post('verify-otp', [AuthController::class, 'verifyOtp']);
        Route::post('create-password', [AuthController::class, 'createNewPassword']);

        Route::prefix('user')->middleware(['jwt.verify'])->group(function (){
            //product review
            Route::post('submit-review', [ReviewController::class,'review']);
            Route::post('submit-reply', [ReviewController::class,'reply']);
            Route::post('like-unlike-review', [ReviewController::class,'reviewLike']);
            Route::get('unlike-review', [ReviewController::class,'unlikeReview']);
            Route::post('delete-coupon', [ShopController::class, 'deleteCoupon']);

            //blog review
            Route::post('blog/submit-review', [BlogController::class,'storeComment']);
            Route::post('blog/submit-reply', [BlogController::class,'storeCommentReply']);
            Route::get('blog/like-review', [BlogController::class,'likeBlogComments']);
            Route::get('blog/unlike-review', [BlogController::class,'unlikeBlogComments']);
            Route::get('blog/like-reply', [BlogController::class,'likeBlogReply']);
            Route::get('blog/unlike-reply', [BlogController::class,'unlikeBlogReply']);

            //notification
            Route::get('notifications', [NotificationController::class,'index']);
            Route::get('delete-notification/{id}', [NotificationController::class,'destroy']);
            Route::get('delete-all-notifications', [NotificationController::class,'destroyAll']);

            //shipping address
            Route::resource('shipping-addresses',ShippingController::class)->only('store','edit','destroy');
            Route::post('shipping-addresses/{id}',[ShippingController::class,'update']);

            //wishlist
            Route::get('favourite-products', [WishlistController::class,'index']);
            Route::get('favourite/{product_id}', [WishlistController::class,'addOrRemove']);

            Route::post('logout', [AuthController::class,'logout']);
            Route::get('profile', [UserController::class,'profile']);
            Route::post('update-profile', [UserController::class,'updateProfile']);
            Route::post('change-password', [UserController::class,'changePassword']);
            Route::get('delete-account', [UserController::class,'destroy']);

            Route::get('followed-shop', [ShopController::class, 'followedShop']);
            Route::get('followed-shop/{seller_id}', [ShopController::class, 'followUnfollowShop']);
            Route::get('shop-details/{seller_id}', [ShopController::class, 'shopDetails']);

            Route::get('my-wallet', [UserController::class, 'myWallet']);
            Route::get('my-reward', [RewardSystemController::class, 'myReward']);
            Route::post('convert-reward', [RewardSystemController::class, 'convertReward']);
            Route::get('digital-product-order-list', [RewardSystemController::class, 'digitalProductOrders']);
            Route::get('recharge',[UserController::class,'apiRecharge']);
        });

        Route::get('configs',[APIController::class,'config']);
        Route::get('home-screen',[HomeController::class,'homePageData']);
        Route::get('user/shipping-addresses',[ShippingController::class,'index']);

        Route::controller(ProductController::class)->group(function (){
            Route::get('get-products','latestProduct');
            Route::get('viewed-products','viewedProduct');
            Route::get('product-details/{id}','details');
            Route::get('get-top-products','topProduct');
            Route::get('get-best-rated-products','bestRatedProduct');
            Route::get('get-best-selling-products','bestSellingProduct');
            Route::get('get-offer-ending-products','offerEndingProduct');
            Route::get('get-today-deals-products','todayDeal');
            Route::get('get-flash-deals-products','flashDeal');
            Route::get('products-by-brand/{id}','brandProducts');
            Route::get('products-by-category/{id}','categoryProducts');
            Route::get('products-by-shop/{user_id}','shopProducts');
            Route::get('products-by-campaign/{id}','campaignProducts');
            Route::post('find-variant','findVariant');
            Route::get('product-description/{id}','getDescription')->name('api.product.details');
        });
        Route::controller(\App\Http\Controllers\Api\V100\CampaignController::class)->group(function (){
            Route::get('get-campaigns','campaigns');
//            Route::get('product-by-campaign/{id}','campaignProducts');
            Route::get('campaign-details/{id}','campaignDetails');
            Route::get('campaign-products','campaignProducts');
            Route::get('campaign-data','campaignData');
        });

        Route::prefix('category')->group(function () {
            Route::get('all', [CategoryController::class, 'allCategory']);
            Route::get('feature-category', [CategoryController::class, 'featureCategory']);
        });

        //brand
        Route::get('all-brand', [BrandController::class, 'allBrand']);

        //post
        Route::get('all-post', [BlogController::class, 'allBlog']);
        Route::get('post-all-details/{id}', [BlogController::class, 'details']);
        Route::get('post-details/{id}',[BlogController::class, 'getDetails'])->name('api.post.details');


        //Shop
        Route::get('all-shop', [ShopController::class, 'allShop']);
        Route::get('shop/{id}', [ShopController::class, 'shop']);
        Route::get('best-shop', [ShopController::class, 'bestShop']);
        Route::get('top-shop', [ShopController::class, 'topShop']);

        Route::get('search',[ProductController::class,'search']);

        Route::get('get-countries',[ShippingController::class,'countries']);
        Route::get('get-states/{country_id}',[ShippingController::class,'getStates']);
        Route::get('get-cities/{state_id}',[ShippingController::class,'getCities']);


        //shipping address
        Route::get('carts',[CartController::class,'index']);
        Route::post('cart-store',[CartController::class,'store']);
        Route::post('cart-update/{id}',[CartController::class,'update']);
        Route::delete('cart-delete/{id}',[CartController::class,'destroy']);
        Route::get('coupons',[CartController::class,'couponList']);
        Route::post('apply-coupon',[CartController::class,'applyCoupon']);
        Route::get('applied-coupons',[CartController::class,'appliedCoupons']);
        Route::post("find/shipping-cost", [CartController::class, 'findShippingCost']);

        //order
        Route::controller(OrderController::class)->group(function (){
            Route::get('orders','index')->name('api.user.orders')->middleware('jwt.verify');
            Route::get('track-order','trackOrder');
            Route::post('confirm-order','confirmOrder');
        });
    });
    Route::match(['get','post'],'payment', [OrderController::class, 'payment'])->name('order.payment');
    Route::get('invoice-download/{id}', [OrderController::class, 'downloadInvoice']);
    Route::get('page/{id}', [APIController::class, 'page']);
    Route::get('order-by-trx', [OrderController::class, 'OrderByTrx']);


    Route::get('video-shopping',[VideoShoppingController::class,'allVideos']);
    Route::get('video-shops-details/{slug}',[VideoShoppingController::class,'videoShoppingDetails']);


});
Route::match(['post','get'],'complete-order', [OrderController::class, 'completeOrder'])->name('api.complete.order');
Route::match(['get', 'post'], 'complete-recharge', [WalletController::class, 'walletStore'])->name('api.wallet.complete.recharge');

Route::get('payment-success', [OrderController::class, 'paymentSuccess'])->name('api.payment.success');
Route::get('import-db', [APIController::class, 'importDb']);

