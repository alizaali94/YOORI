<?php

namespace App\Services;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider{

    public function register(){
        //Role Management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\DashboardInterface',
            'App\Repositories\Admin\DashboardRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Role\RoleInterface',
            'App\Repositories\Role\RoleRepository'
        );

        $this->app->bind(
            'App\Repositories\Interfaces\Site\CartInterface',
            'App\Repositories\Site\CartRepository'
        );

        $this->app->bind(
            'App\Repositories\Interfaces\PermissionInterface',
            'App\Repositories\PermissionRepository'
        );

        $this->app->bind(
            'App\Repositories\Interfaces\UserInterface',
            'App\Repositories\UserRepository'
        );

        //admin common functions management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\CommonInterface',
            'App\Repositories\Admin\CommonRepository'
        );

        //admin common functions management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\SettingInterface',
            'App\Repositories\Admin\SettingRepository'
        );

        //Language management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\LanguageInterface',
            'App\Repositories\Admin\LanguageRepository'
        );

        //Staff management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\StaffInterface',
            'App\Repositories\Admin\StaffRepository'
        );

        //Seller management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\SellerInterface',
            'App\Repositories\Admin\SellerRepository'
        );
        //color
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\ColorInterface',
            'App\Repositories\Admin\Product\ColorRepository'
        );

        //Media management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\MediaInterface',
            'App\Repositories\Admin\MediaRepository'
        );

        //Product Brand Management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\BrandInterface',
            'App\Repositories\Admin\Product\BrandRepository'
        );

         //attribute
         $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\AttributeInterface',
            'App\Repositories\Admin\Product\AttributeRepository'
        );

         //category
         $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\CategoryInterface',
            'App\Repositories\Admin\Product\CategoryRepository'
        );

        //Product Brand Language Management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\BrandLanguageInterface',
            'App\Repositories\Admin\Product\BrandLanguageRepository'
        );

        //Product Category Language Management
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\CategoryLanguageInterface',
            'App\Repositories\Admin\Product\CategoryLanguageRepository'
        );

        //Product Attribute Languages
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\AttributeLanguageInterface',
            'App\Repositories\Admin\Product\AttributeLanguageRepository'
        );

        //Product Color Languages
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\ColorLanguageInterface',
            'App\Repositories\Admin\Product\ColorLanguageRepository'
        );
        //Vat Tax
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\VatTaxInterface',
            'App\Repositories\Admin\VatTaxRepository'
        );

        //Currency
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\CurrencyInterface',
            'App\Repositories\Admin\CurrencyRepository'
        );
        //Seller Payout
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\SellerPayoutInterface',
            'App\Repositories\Admin\SellerPayoutRepository'
        );
        //Seller Profile
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\SellerProfileInterface',
            'App\Repositories\Admin\SellerProfileRepository'
        );

        //Blog
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Blog\BlogInterface',
            'App\Repositories\Admin\Blog\BlogRepository'
        );

        //Blog Language
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Blog\BlogLanguageInterface',
            'App\Repositories\Admin\Blog\BlogLanguageRepository'
        );

        //Blog Category
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Blog\BlogCategoryInterface',
            'App\Repositories\Admin\Blog\BlogCategoryRepository'
        );
        //Blog Category
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Blog\BlogCategoryLanguageInterface',
            'App\Repositories\Admin\Blog\BlogCategoryLanguageRepository'
        );
        //Theme Options
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\StoreFront\ThemeOptionsInterface',
            'App\Repositories\Admin\StoreFront\ThemeOptionsRepository'
        );
        //Website SEO
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\StoreFront\WebsiteSeoInterface',
            'App\Repositories\Admin\StoreFront\WebsiteSeoRepository'
        );
        //Subscriber
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Marketing\SubscriberInterface',
            'App\Repositories\Admin\Marketing\SubscriberRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Marketing\CouponInterface',
            'App\Repositories\Admin\Marketing\CouponRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Marketing\CouponLangInterface',
            'App\Repositories\Admin\Marketing\CouponLangRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Marketing\CampaignInterface',
            'App\Repositories\Admin\Marketing\CampaignRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\ProductInterface',
            'App\Repositories\Admin\Product\ProductRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Product\ProductLanguageInterface',
            'App\Repositories\Admin\Product\ProductLanguageRepository'
        );
        //shipping
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\ShippingInterface',
            'App\Repositories\Admin\ShippingRepository'
        );
        //support
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Support\SupportInterface',
            'App\Repositories\Admin\Support\SupportRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Support\SupportDepartmentInterface',
            'App\Repositories\Admin\Support\SupportDepartmentRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Support\SupportDepartmentLanguageInterface',
            'App\Repositories\Admin\Support\SupportDepartmentLanguageRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\OrderInterface',
            'App\Repositories\Admin\OrderRepository'
        );

        //pickup hub
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Order\PickupHubInterface',
            'App\Repositories\Admin\Order\PickupHubRepository'
        );

        //Report
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\ReportsInterface',
            'App\Repositories\Admin\ReportsRepository'
        );

         //Mobile Apps
         $this->app->bind(
            'App\Repositories\Interfaces\Admin\MobileApps\AppIntroInterface',
            'App\Repositories\Admin\MobileApps\AppIntroRepository'
        );

        $this->app->bind(
            'App\Repositories\Interfaces\Admin\MobileApps\AppIntroLanguageInterface',
            'App\Repositories\Admin\MobileApps\AppIntroLanguageRepository'
        );

        $this->app->bind(
            'App\Repositories\Interfaces\Admin\AddonInterface',
            'App\Repositories\Admin\AddonRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\WholesaleProductInterface',
            'App\Repositories\Admin\WholesaleProductRepository'
        );

        //Reward
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\RewardSystemInterface',
            'App\Repositories\Admin\RewardSystemRepository'
        );
        //Refunds
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Refund\RefundInterface',
            'App\Repositories\Admin\Refund\RefundRepository'
        );
        //Refunds
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\DeliveryHero\DeliveryHeroInterface',
            'App\Repositories\Admin\DeliveryHero\DeliveryHeroRepository'
        );
        //pages
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Page\PageInterface',
            'App\Repositories\Admin\Page\PageRepository'
        );

        //sliders
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Slider\SliderInterface',
            'App\Repositories\Admin\Slider\SliderRepository'
        );
        //services
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Service\ServiceInterface',
            'App\Repositories\Admin\Service\ServiceRepository'
        );
        //wishlist
        $this->app->bind(
            'App\Repositories\Interfaces\Site\WishlistInterface',
            'App\Repositories\Site\WishlistRepository'
        );
        //account
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\AccountInterface',
            'App\Repositories\Admin\AccountRepository'
        );
        //address
        $this->app->bind(
            'App\Repositories\Interfaces\Site\AddressInterface',
            'App\Repositories\Site\AddressRepository'
        );

        //review
        $this->app->bind(
            'App\Repositories\Interfaces\Site\ReviewInterface',
            'App\Repositories\Site\ReviewRepository'
        );

        //offline payments
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface',
            'App\Repositories\Admin\Addon\OfflineMethodRepository'
        );

        //offline payments
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\WalletInterface',
            'App\Repositories\Admin\Addon\WalletRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Site\ContactUsInterface',
            'App\Repositories\Site\ContactUsRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\NotificationInterface',
            'App\Repositories\Admin\NotificationRepository'
        );
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\VideoShoppingInterface',
            'App\Repositories\Admin\Addon\VideoShoppingRepository'
        );
        //posSystem
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\PosSystemInterface',
            'App\Repositories\Admin\Addon\PosSystemRepository'
        );
        //banner
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Slider\BannerInterface',
            'App\Repositories\Admin\Slider\BannerRepository'
        );
        //api_key
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\ApiKeyInterface',
            'App\Repositories\Admin\ApiKeyRepository'
        );

        //seller_subscription
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\SellerSubscriptionInterface',
            'App\Repositories\Admin\Addon\SellerSubscriptionRepository'
        );

        //seller_package
        $this->app->bind(
            'App\Repositories\Interfaces\Admin\Addon\PackageInterface',
            'App\Repositories\Admin\Addon\PackageRepository'
        );
    }
}
