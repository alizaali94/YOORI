@php
    $logo       = settingHelper('admin_light_logo');
@endphp

<div class="main-sidebar">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="{{ route('dashboard') }}">{{ settingHelper('system_short_name') != '' ? settingHelper('system_short_name',app()->getLocale()) :  "Yoori" }}</a>
        </div>
        <div class="sidebar-brand">
            <a href="{{ route('dashboard') }}">
                <img
                        src="{{($logo != [] && is_file_exists($logo['image_100x38'])) ? static_asset($logo['image_100x38']) : static_asset('images/default/logo.png') }}"
                        alt="Logo"></a>
        </div>
        <ul class="sidebar-menu">
            <li class="@yield('dashboard')"><a class="nav-link" href="{{ route('dashboard') }}"><i
                            class="bx bxs-dashboard"></i>
                    <span>{{ __('Dashboard') }}</span></a>
            </li>
            @if(hasPermission('order_read') || hasPermission('pickup_hub_read'))
                <li class="nav-item dropdown @yield('order_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-trending-up"></i>
                        <span>{{ __('Orders') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('order_read'))
                            <li class="@yield('orders')"><a class="nav-link"
                                                            href="{{ route('orders') }}">{{ __('All Orders') }}</a></li>
                            @if(settingHelper('seller_system') == 1)
                                <li class="@yield('admins')"><a class="nav-link"
                                                                href="{{ route('admin.orders') }}">{{ __('Admin Orders') }}</a>
                                </li>
                                <li class="@yield('seller-orders')"><a class="nav-link"
                                                                       href="{{ route('admin.seller.orders')}}">{{ __('Seller Orders') }}</a>
                                </li>
                            @endif
                            <li class="@yield('pickup-hub-order')"><a class="nav-link"
                                                                      href="{{ route('pickup.hub.orders') }}">{{ __('Pickup Hub Orders') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('pickup_hub_read'))
                            <li class="@yield('pickup-hubs')"><a class="nav-link"
                                                                 href="{{route('pickup.hub.index')}}">{{ __('Pickup Hub') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(addon_is_activated('pos_system') && (hasPermission('pos_order') || hasPermission('pos_config_update')))
                <li class="nav-item dropdown @yield('pos_services_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-printer {{ isDemoServer() ? 'beep' : ''}}"></i>
                        <span>{{ __('pos_system') }}</span>
                        @if(isDemoServer())
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('pos_order'))
                            <li><a class="nav-link" href="{{ route('admin.pos.system') }}">{{ __('POS') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('pos_config_update'))
                            <li class="@yield('pos_services')"><a class="nav-link"
                                                                  href="{{ route('admin.pos.config') }}">{{ __('POS Configuration') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif


            @if(hasPermission('product_read') || hasPermission('color_read') || hasPermission('attribute_set_read') || hasPermission('brand_read') || hasPermission('category_read') || hasPermission('attribute_value_read'))
                <li class="nav-item dropdown @yield('product_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-cart"></i>
                        <span>{{ __('Products') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('product_create'))
                            <li class="@yield('product-create')"><a class="nav-link"
                                                                    href="{{ route('product.create') }}">{{ __('Add New Product') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('product_read'))
                            <li class="@yield('product')"><a class="nav-link"
                                                             href="{{ route('products') }}">{{ __('All Product') }}</a>
                            </li>
                            @if(settingHelper('seller_system') == 1)
                                <li class="@yield('admin-product')"><a class="nav-link"
                                                                       href="{{ route('admin.products') }}">{{ __('Admin Products') }}</a>
                                </li>
                                <li class="@yield('seller-product')"><a class="nav-link"
                                                                        href="{{ route('admin.seller.products') }}">{{ __('Seller Products') }}</a>
                                </li>
                            @endif
                            <li class="@yield('digital-product')"><a class="nav-link"
                                                                     href="{{ route('digital.products') }}">{{ __('Digital Products') }}</a>
                            </li>
                            <li class="@yield('catalog-product')"><a class="nav-link"
                                                                     href="{{ route('catalog.products') }}">{{ __('Catalog Products') }}</a>
                            </li>
                            <li class="@yield('classified-product')"><a class="nav-link"
                                                                        href="{{ route('classified.products') }}">{{ __('Classified Products') }}</a>
                            </li>
                            <li class="@yield('product_review')"><a class="nav-link"
                                                                    href="{{ route('admin.product.reviews') }}">{{ __('Product Reviews') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('color_read'))
                            <li class="@yield('color_active')"><a class="nav-link"
                                                                  href="{{ route('colors') }}">{{ __('Colors') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('attribute_set_read'))
                            <li class="@yield('attribute_active')"><a class="nav-link"
                                                                      href="{{ route('attributes') }}">{{ __('Attribute Sets') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('attribute_value_read'))
                            <li class="@yield('attribute_value_active')"><a class="nav-link"
                                                                            href="{{ route('all.attributes.values') }}">{{ __('Attribute Values') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('brand_read'))
                            <li class="@yield('brands')"><a class="nav-link"
                                                            href="{{ route('brands') }}">{{ __('Brands') }}</a></li>
                        @endif
                        @if(hasPermission('category_read'))
                            <li class="@yield('category_active')"><a class="nav-link"
                                                                     href="{{ route('categories') }}">{{ __('Categories') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('product_create'))
                            <li class="@yield('product_import')"><a class="nav-link"
                                                                    href="{{ route('admin.product.import') }}">{{ __('Import Products') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif

            @if(hasPermission('wholesale_product_read') && addon_is_activated('wholesale'))
                <li class="nav-item dropdown @yield('wholesale')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-credit-card-alt {{ isDemoServer() ? 'beep' : ''}}"></i>
                        <span>{{ __('Wholesale Product') }}</span>
                        @if(isDemoServer())
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('wholesale_product_create'))
                            <li class="@yield('wholesale_product_create')">
                                <a class="nav-link"
                                   href="{{ route('wholesale.product.create') }}">{{ __('Add New Product') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('wholesale_product_read'))
                            <li class="@yield('wholesale_products')">
                                <a class="nav-link"
                                   href="{{ route('wholesale.products') }}">{{ __('All Products') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('wholesale_product_setting'))
                            <li class="@yield('wholesale_setting')">
                                <a class="nav-link"
                                   href="{{ route('wholesale.setting') }}">{{ __('Wholesale Setting') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif

            @if(hasPermission('customer_read') || hasPermission('user_reward_read'))
                <li class="nav-item dropdown @yield('customers')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bxs-user-detail"></i>
                        <span>{{ __('Customers') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('customer_read'))
                            <li class="@yield('customer_list')">
                                <a class="nav-link"
                                   href="{{ route('customers') }}">{{ __('All Customer') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('customer_create'))
                            <li class="@yield('customer_import')">
                                <a class="nav-link"
                                   href="{{ route('admin.customer.import') }}">{{ __('Import Customers') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(settingHelper('wallet_system') == 1)
                @if(hasPermission('recharge_request_read'))
                    <li class="@yield('wallet_recharge_request')">
                        <a class="nav-link" href="{{ route('admin.wallet.recharge.request') }}"><i
                                    class="bx bxs-wallet"></i>
                            <span>{{ __('Wallet Requests') }}</span>
                        </a>
                    </li>
                @endif
            @endif

            @if(settingHelper('seller_system') == 1)
                @if(hasPermission('seller_read') || hasPermission('payout_read') || hasPermission('seller_commission_read') || hasPermission('seller_payout_read'))
                    <li class="nav-item dropdown @yield('sellers_active')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class='bx bx-store-alt'></i>
                            <span>{{ __('Sellers') }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('seller_read'))
                                <li class="@yield('sellers')"><a class="nav-link"
                                                                 href="{{ route('sellers') }}">{{ __('All Seller') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('seller_payout_read'))
                                <li class="@yield('payouts_active')"><a class="nav-link"
                                                                        href="{{ route('admin.seller.payouts') }}">{{ __('Payouts') }}</a>
                                </li>
                                <li class="@yield('payout_requests_active')"><a class="nav-link"
                                                                                href="{{ route('admin.seller.payout.request') }}">{{ __('Payout Requests') }}</a>
                            @endif
                            @if(hasPermission('seller_commission_read'))
                                <li class="@yield('seller_settings_active')"><a class="nav-link"
                                                                                href="{{ route('admin.seller.settings') }}">{{ __('Seller Settings') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('seller_create'))
                                <li class="@yield('seller_import')"><a class="nav-link"
                                                                       href="{{ route('admin.seller.import') }}">{{ __('Import Sellers') }}</a>
                                </li>
                            @endif
                            @if(addon_is_activated('seller_subscription'))
                                <li class="@yield('packages')"><a class="nav-link"
                                                                       href="{{ route('seller_packages.index') }}">{{ __('Packages') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
            @if(hasPermission('delivery_hero_read') || hasPermission('delivery_hero_create') || hasPermission('delivery_hero_commission_history') || hasPermission('delivery_hero_deposit_history') || hasPermission('delivery_hero_collection_history') || hasPermission('delivery_hero_cancel_request') || hasPermission('delivery_hero_configuration_read'))
                <li class="nav-item dropdown @yield('delivery_hero_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class='bx bx-cycling'></i>
                        <span>{{ __('Delivery Mans') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('delivery_hero_create'))
                            <li class="@yield('add_delivery_hero')"><a class="nav-link"
                                                                       href="{{ route('delivery.hero.create') }}">{{ __('Add New Delivery Man') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_read'))
                            <li class="@yield('delivery_hero')"><a class="nav-link"
                                                                   href="{{ route('delivery.hero') }}">{{ __('Delivery Man') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_commission_history'))
                            <li class="@yield('delivery_hero_commission_history')"><a class="nav-link"
                                                                                      href="{{ route('delivery_hero.commission.history') }}">{{ __('Commission History') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_deposit_history'))
                            <li class="@yield('deposit_history')"><a class="nav-link"
                                                                     href="{{ route('delivery_hero.deposit.history') }}">{{ __('Deposit History') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_collection_history'))
                            <li class="@yield('collection_history')"><a class="nav-link"
                                                                        href="{{ route('collection.history') }}">{{ __('Collection History') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_cancel_request'))
                            <li class="@yield('cancel_request')"><a class="nav-link"
                                                                    href="{{ route('cancel.request') }}">{{ __('Cancel Orders') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('delivery_hero_configuration_read'))
                            <li class="@yield('configuration')"><a class="nav-link"
                                                                   href="{{ route('configuration') }}">{{ __('Configuration') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(hasPermission('media_read'))
                <li class="@yield('media')">
                    <a class="nav-link" href="{{ route('media.library') }}"><i
                                class="bx bx-file"></i><span>{{ __('Media Library') }}</span>
                    </a>
                </li>
            @endif

            @if(hasPermission('admin_product_sale_read') || hasPermission('seller_product_sale_read') || hasPermission('product_stock_read') || hasPermission('product_wishlist_read') || hasPermission('user_searches_read') || hasPermission('commission_history_read') || hasPermission('wallet_recharge_history_read'))
                <li class="nav-item dropdown @yield('report')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bxs-report"></i>
                        <span>{{ __('Reports') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('admin_product_sale_read'))
                            <li class="@yield('admin_report_active')"><a class="nav-link"
                                                                         href="{{ route('admin.product.sale') }}">{{ __('Admin Product Sale') }}</a>
                            </li>
                        @endif
                        @if(settingHelper('seller_system') == 1)
                            @if(hasPermission('seller_product_sale_read'))
                                <li class="@yield('seller_report_active')"><a class="nav-link"
                                                                              href="{{ route('admin.seller.product.sale') }}">{{ __('Seller Product Sale') }}</a>
                                </li>
                            @endif
                        @endif
                        @if(settingHelper('seller_system') == 1)
                            @if(hasPermission('commission_history_read'))
                                <li class="@yield('commission_history')"><a class="nav-link"
                                                                            href="{{ route('commission.history') }}">{{ __('Commission History') }}</a>
                                </li>
                            @endif
                        @endif
                        @if(hasPermission('wallet_recharge_history_read'))
                            <li class="@yield('wallet_recharge_history')"><a class="nav-link"
                                                                             href="{{ route('wallet.recharge.history') }}">{{ __('Wallet Recharge History') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('product_stock_read'))
                            <li class="@yield('product_stock')"><a class="nav-link"
                                                                   href="{{ route('stock.product.report') }}">{{ __('Products Stock') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('product_wishlist_read'))
                            <li class="@yield('product_wishlist')"><a class="nav-link"
                                                                      href="{{ route('product.wishlist') }}">{{ __('Product Wishlist') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('user_searches_read'))
                            <li class="@yield('user_searches')"><a class="nav-link"
                                                                   href="{{ route('user.searches') }}">{{ __('User Searches') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(addon_is_activated('refund'))
                @if(hasPermission('refund_read') || hasPermission('refund_setting_read') && addon_is_activated('refund'))
                    <li class="nav-item dropdown @yield('refund_active')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-credit-card-alt {{ isDemoServer() ? 'beep' : ''}}"></i>
                            <span>{{ __('Refund') }}</span>
                            @if(isDemoServer())
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('refund_read'))
                                <li class="@yield('refunds')"><a class="nav-link"
                                                                 href="{{ route('refunds') }}">{{ __('All Request') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('refund_read'))
                                <li class="@yield('approved_refunds')"><a class="nav-link"
                                                                          href="{{ route('all.approved.refund') }}">{{ __('Approved Refunds') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('refund_read'))
                                <li class="@yield('processed_refunds')"><a class="nav-link"
                                                                           href="{{ route('all.processed.refund') }}">{{ __('Processed Refunds') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('refund_read'))
                                <li class="@yield('rejected_refunds')"><a class="nav-link"
                                                                          href="{{ route('all.rejected.refund') }}">{{ __('Rejected Refund') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('refund_setting_read'))
                                <li class="@yield('refund_setting')"><a class="nav-link"
                                                                        href="{{ route('refund.setting') }}">{{ __('Refund Setting') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif

            @if(hasPermission('campaign_read') ||  hasPermission('bulk_sms_read') || hasPermission('subscriber_read') || hasPermission('coupon_read') || hasPermission('campaign_request_read') || hasPermission('otp_setting_read') || hasPermission('sms_template_read'))
                <li class="nav-item dropdown @yield('marketing_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-paper-plane"></i>
                        <span>{{ __('Marketing') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('campaign_read'))
                            <li class="@yield('campaign')"><a class="nav-link"
                                                              href="{{ route('campaign') }}">{{ __('Campaigns') }}</a>
                            </li>
                        @endif
                        @if(settingHelper('seller_system') == 1)
                            @if(hasPermission('campaign_product_read'))
                                <li class="@yield('campaign_request')"><a class="nav-link"
                                                                          href="{{ route('campaign.requests') }}">{{ __('Campaign Requests') }}</a>
                                </li>
                            @endif
                        @endif
                        @if(addon_is_activated('otp_system') == 1)
                            @if(hasPermission('bulk_sms_read'))
                                <li class="@yield('bulk_sms')"><a class="nav-link"
                                                                  href="{{ route('bulk.sms') }}">{{ __('Bulk SMS') }}</a>
                                </li>
                            @endif
                        @endif
                        @if(hasPermission('subscriber_read'))
                            <li class="@yield('subscriber')"><a class="nav-link"
                                                                href="{{ route('subscribers') }}">{{ __('Subscriber') }}</a>
                            </li>
                        @endif
                        @if(settingHelper('coupon_system') == 1)
                            @if(hasPermission('coupon_read'))
                                <li class="@yield('coupon')"><a class="nav-link"
                                                                href="{{ route('coupons') }}">{{ __('Coupons') }}</a>
                                </li>
                            @endif
                        @endif
                    </ul>
                </li>
            @endif
            @if(hasPermission('blog_read') || hasPermission('blog_category_read'))
                <li class="nav-item dropdown @yield('blogs_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bxs-news"></i>
                        <span>{{ __('Blog') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('blog_read'))
                            <li class="@yield('blog_post')"><a class="nav-link"
                                                               href="{{ route('blogs') }}">{{ __('All Post') }}</a></li>
                        @endif
                        @if(hasPermission('blog_category_read'))
                            <li class="@yield('blog_category')"><a class="nav-link"
                                                                   href="{{ route('blogs.categories') }}">{{ __('Post Category') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(settingHelper('seller_system') == 1)
                @if(hasPermission('support_read') || hasPermission('support_department_read'))
                    <li class="nav-item dropdown @yield('support_active')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-support"></i>
                            <span>{{ __('Support') }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('support_read'))
                                <li class="@yield('tickets')"><a class="nav-link"
                                                                 href="{{route('support')}}">{{ __('All Tickets') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('support_department_read'))
                                <li class="@yield('support_department_active')"><a class="nav-link"
                                                                                   href="{{route('support.department')}}">{{ __('Departments') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('support_department_read'))
                                <li class="@yield('Contact_us')"><a class="nav-link"
                                                                    href="{{route('contact.us')}}">{{ __('Contact Messages') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
            @if(addon_is_activated('affiliate_system'))
                <li class="nav-item dropdown">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-repeat {{ isDemoServer() ? 'beep' : ''}}"></i>
                        <span>{{ __('Affiliate') }}</span>
                        @if(isDemoServer())
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="nav-link" href="#">{{ __('Affiliate Setting') }}</a></li>
                        <li><a class="nav-link" href="#">{{ __('Affiliate Form') }}</a></li>
                        <li><a class="nav-link" href="#">{{ __('Affiliate Users') }}</a></li>
                        <li><a class="nav-link" href="#">{{ __('Referral Users') }}</a></li>
                        <li><a class="nav-link" href="#">{{ __('Withdraw Requests') }}</a></li>
                    </ul>
                </li>
            @endif
            @if(addon_is_activated('offline_payment'))
                @if (hasPermission('offline_payment_read') || hasPermission('wallet_recharge_read'))
                    <li class="nav-item dropdown @yield('offline_payment')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-credit-card-front {{ isDemoServer() ? 'beep' : ''}}"></i>
                            <span>{{ __('Offline Payment') }}</span>
                            @if(isDemoServer())
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if (hasPermission('offline_payment_read'))
                                <li class="@yield('offline_payment_methods')"><a class="nav-link"
                                                                                 href="{{ route('offline.payment.methods') }}">{{ __('Payment Methods') }}</a>
                                </li>
                            @endif
                            @if (hasPermission('wallet_recharge_read'))
                                <li class="@yield('offline_wallet_recharge')"><a class="nav-link"
                                                                                 href="{{ route('offline.wallet.recharge.history') }}">{{ __('Wallet Recharge') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
            @if(addon_is_activated('reward'))
                @if(hasPermission('reward_configuration_read') || hasPermission('reward_setting_read') || hasPermission('user_reward_read'))
                    <li class="nav-item dropdown @yield('reward_system')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-collection {{ isDemoServer() ? 'beep' : ''}}"></i>
                            <span>{{__('Reward System')}}</span>
                            @if(isDemoServer())
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('user_reward_read'))
                                <li class="@yield('user_rewards')"><a class="nav-link"
                                                                      href="{{route('user.rewards')}}">{{ __('User Rewards') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('reward_configuration_read'))
                                <li class="@yield('reward_config')"><a class="nav-link"
                                                                       href="{{route('reward.config')}}">{{ __('Reward Configuration') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('reward_setting_read'))
                                <li class="@yield('reward_active')"><a class="nav-link"
                                                                       href="{{route('set.reward')}}">{{ __('Set Reward') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
            @if(addon_is_activated('otp_system'))
                @if(hasPermission('otp_setting_read') || hasPermission('sms_template_read'))
                    <li class="nav-item dropdown @yield('otp_setting_menu')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-comment {{ isDemoServer() ? 'beep' : ''}}"></i>
                            <span>{{ __('OTP System') }}</span>
                            @if(isDemoServer())
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('otp_setting_read'))
                                <li class="@yield('otp_setting')"><a class="nav-link"
                                                                     href="{{ route('otp-settings') }}">{{ __('OTP Setting') }}</a>
                                </li>
                            @endif
                            @if(hasPermission('sms_template_read'))
                                <li class="@yield('sms_templates')"><a class="nav-link"
                                                                       href="{{ route('sms-templates') }}">{{ __('SMS Templates') }}</a>
                                </li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif

            @if(hasPermission('chat_messenger_read'))
                <li class="@yield('chat-messenger')"><a class="nav-link" href="{{ route('chat.messenger') }}"><i
                                class="bx bx-chat"></i>
                        <span>{{ __('Chat Messenger') }}</span>
                    </a>
                </li>
            @endif

            @if(addon_is_activated('video_shopping'))
                @if(hasPermission('video_shopping_read'))
                    <li class="nav-item dropdown @yield('video_shopping_menu')">
                        <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                            <i class="bx bx-video {{ isDemoServer() ? 'beep' : ''}}"></i>
                            <span>{{__('Video Shopping') }}</span>
                            @if(isDemoServer())
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if(hasPermission('video_shopping_read'))
                                <li class="@yield('video_shopping')"><a class="nav-link"
                                                                        href="{{ route('admin.video.shopping') }}">{{ __('Video Shopping') }}</a>
                                </li>
                            @endif
                            @if(settingHelper('seller_system') == 1)
                                @if(hasPermission('video_shopping_update'))
                                    <li class="@yield('video_shopping_config')"><a class="nav-link"
                                                                                   href="{{ route('admin.video.shopping.config') }}">{{ __('Video Shopping Config') }}</a>
                                    </li>
                                @endif
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
            @if(hasPermission('payment_gateway_read'))
                <li class="@yield('payment-gateway')"><a class="nav-link" href="{{ route('payment.gateway') }}"><i
                                class="bx bx-dollar" aria-hidden="true"></i>
                        <span>{{ __('Payment Gateway') }}</span></a>
                </li>
            @endif
            @if(hasPermission('shipping_configuration_read') || hasPermission('country_read') || hasPermission('state_read') || hasPermission('city_read'))
                <li class="nav-item dropdown @yield('shipping_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bxs-truck"></i><span>{{ __('Shipping') }}</span></a>
                    <ul class="dropdown-menu @yield('shipping')">
                        @if(hasPermission('shipping_configuration_read'))
                            <li class="@yield('shipping-configuration')"><a class="nav-link"
                                                                            href="{{ route('shipping-configuration') }}"> {{ __('Shipping Configuration') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('country_read'))
                            <li class="@yield('available-countries')"><a class="nav-link"
                                                                         href="{{ route('countries') }}"> {{ __('Available Countries') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('state_read'))
                            <li class="@yield('available-states')"><a class="nav-link"
                                                                      href="{{ route('states') }}"> {{ __('Available States') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('city_read'))
                            <li class="@yield('available-cities')"><a class="nav-link"
                                                                      href="{{ route('cities') }}"> {{ __('Available Cities') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if((hasPermission('theme_option_update') || hasPermission('header_content_update') || hasPermission('footer_content_update') || hasPermission('home_page_update') || hasPermission('website_seo_update') ||
                hasPermission('website_popup_update') || hasPermission('custom_css_update') || hasPermission('custom_js_update') || hasPermission('gdpr_update') || hasPermission('slider_read') ||
                hasPermission('service_read') || hasPermission('all_page_read') || hasPermission('login_singup_read')) && config('app.mobile_mode') == 'off')
                <li class="nav-item dropdown @yield('store_front_active') @yield('header_content') @yield('footer_content') @yield('slider_active') @yield('service_active')  @yield('banners')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bx-cog"></i><span>{{ __('Store Front') }}</span></a>
                    <ul class="dropdown-menu @yield('store-front')">
                        @if(hasPermission('theme_option_update'))
                            <li class="@yield('theme-options')"><a class="nav-link"
                                                                   href="{{ route('get.theme.options') }}"> {{ __('Theme Options') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('header_content_update'))
                            <li class="@yield('header_content')"><a class="nav-link"
                                                                    href="{{ route('header') }}">{{ __('Header Content') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('footer_content_update'))
                            <li class="@yield('footer_content')"><a class="nav-link"
                                                                    href="{{ route('about') }}">{{ __('Footer Content') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('home_page_update'))
                            <li class="@yield('home_page')"><a class="nav-link"
                                                               href="{{route('admin.home.page')}}">{{ __('Home Page Builder') }}</a>
                            </li>
                        @endif

                        <li class="@yield('other_page')"><a class="nav-link"
                                                            href="{{route('other.pages')}}">{{ __('All Pages') }}</a>
                        </li>

                        @if(hasPermission('website_seo_update'))
                            <li class="@yield('website-seo')"><a class="nav-link"
                                                                 href="{{ route('website.seo') }}">{{ __('Website SEO') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('website_popup_update'))
                            <li class="@yield('website-popup')"><a class="nav-link"
                                                                   href="{{ route('website.popup') }}">{{ __('Website Popup') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('custom_css_update'))
                            <li class="@yield('custom-css')"><a class="nav-link"
                                                                href="{{ route('custom.css') }}">{{ __('Custom CSS') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('custom_js_update'))
                            <li class="@yield('custom-js')"><a class="nav-link"
                                                               href="{{ route('custom.js') }}">{{ __('Custom JS') }}</a>
                            </li>
                        @endif

                        @if(hasPermission('gdpr_update'))
                            <li class="@yield('gdpr')"><a class="nav-link"
                                                          href="{{ route('gdpr') }}">{{ __('GDPR') }}</a></li>
                        @endif
                        @if(hasPermission('facebook_service_update'))
                            <li class="@yield('facebook_services')">
                                <a class="nav-link"
                                   href="{{ route('settings.facebook.services') }}">{{ __('Facebook Pixel') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('google_service_update'))
                            <li class="@yield('google_services')">
                                <a class="nav-link"
                                   href="{{ route('settings.google.services') }}">{{ __('Google Services') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('slider_read'))
                            <li class="@yield('slider_active')">
                                <a class="nav-link" href="{{ route('sliders.index') }}"><span>{{ __('Slider') }}</span>
                                </a>
                            </li>
                        @endif
                        @if(hasPermission('service_read'))
                            <li class="@yield('service_active')">
                                <a class="nav-link"
                                   href="{{ route('services.index') }}"><span>{{ __('Benefits') }}</span>
                                </a>
                            </li>
                        @endif
                        <li class="@yield('banners')">
                            <a class="nav-link"
                               href="{{ route('admin.banners') }}"><span>{{ __('Banners') }}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            @endif

            @if(hasPermission('general_setting_update') || hasPermission('preference_setting_update') || hasPermission('email_setting_update') || hasPermission('currency_setting_update') || hasPermission('vat_tax_setting_update') || hasPermission('storage_setting_update') || hasPermission('cache_update') || hasPermission('miscellaneous_setting_update') || hasPermission('admin_panel_setting_update') || hasPermission('third_party_update'))
                <li class="nav-item dropdown @yield('setup')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bx-slider-alt"></i><span>{{__('System Setup')}}</span></a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('general_setting_update'))
                            <li class="@yield('general_setting_active')"><a class="nav-link"
                                                                            href="{{ route('general.setting') }}">{{ __('General Settings') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('preference_setting_update'))
                            <li class="@yield('preference_active')"><a class="nav-link"
                                                                       href="{{ route('preference') }}">{{ __('Preference') }}</a>
                            </li>
                        @endif
                        {{--@if(hasPermission('social_login_setting_update'))
                            <li class="@yield('social_login_active')"><a class="nav-link"
                                                                         href="{{ route('social.login.setting') }}">{{ __('Social Login Settings') }}</a>
                            </li>
                        @endif--}}
                        @if(hasPermission('email_setting_update'))
                            <li class="@yield('email_setting_active')"><a class="nav-link"
                                                                          href="{{ route('email.setting') }}">{{ __('Email Setting') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('language_read'))
                            <li class="@yield('languages')"><a class="nav-link"
                                                               href="{{ route('language') }}">{{ __('Languages') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('currency_setting_update'))
                            <li class="@yield('currency_active')"><a class="nav-link"
                                                                     href="{{ route('currency') }}">{{ __('Currency') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('vat_tax_setting_update'))
                            <li class="@yield('vat_tax_active')"><a class="nav-link"
                                                                    href="{{ route('vat.tax') }}">{{ __('VAT & Tax') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('storage_setting_update'))
                            <li class="@yield('storage_setting_active')"><a class="nav-link"
                                                                            href="{{ route('storage.setting') }}">{{ __('Storage') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('cache_update'))
                            <li class="@yield('cache_active')"><a class="nav-link"
                                                                  href="{{ route('cache') }}">{{ __('Cache') }}</a></li>
                        @endif
                        @if(hasPermission('google_service_update'))
                            <li class="@yield('google_recaptcha_active')"><a
                                        href="{{ route('settings.google.recaptcha') }}"
                                        class="nav-link">{{ __('Google reCaptcha') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('admin_panel_setting_update'))
                            <li class="@yield('white_level')"><a class="nav-link"
                                                                 href="{{ route('admin.panel.setting') }}">{{ __('Admin Panel Setting') }}</a>
                            </li>
                        @endif


                        @if(hasPermission('pusher_notification_update'))
                            <li class="@yield('pusher_notification')">
                                <a class="nav-link"
                                   href="{{ route('settings.pusher.notification') }}">{{ __('Pusher Notification') }}</a>
                            </li>
                        @endif
                        @if(true)
                            <li class="@yield('firebase_update')"><a
                                        href="{{ route('settings.firebase') }}"
                                        class="nav-link">{{ __('Firebase') }}</a>
                            </li>
                        @endif

                        @if(hasPermission('miscellaneous_setting_update'))
                            <li class="@yield('miscellaneous_active')"><a class="nav-link"
                                                                          href="{{ route('miscellaneous') }}">{{ __('Misc') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(hasPermission('staff_read') || hasPermission('role_read'))
                <li class="nav-item dropdown @yield('staff_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bx-group"></i>
                        <span>{{ __('Staffs') }}</span></a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('staff_read'))
                            <li class="@yield('staffs')"><a class="nav-link"
                                                            href="{{ route('staffs') }}"> {{ __('Manage Staffs') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('role_read'))
                            <li class="@yield('roles')"><a class="nav-link"
                                                           href="{{ route('roles') }}"> {{ __('Roles') }}</a></li>
                        @endif
                    </ul>
                </li>
            @endif

            @if(hasPermission('android_setting_update') || hasPermission('ios_setting_update') || hasPermission('app_config_update') || hasPermission('ads_config_update')
                || hasPermission('mobile_app_intro_read') || hasPermission('api_setting_update') || hasPermission('api_key_read_all') || hasPermission('api_key_read') || hasPermission('api_key_update') || hasPermission('api_key_delete'))
                <li class="nav-item dropdown @yield('mobile_apps')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bxl-flutter"></i>
                        @if(config('app.mobile_mode') == 'off')
                            <span>{{ __('Mobile App') }}</span>
                        @else
                            <span>{{ __('app_setting') }}</span>
                        @endif
                    </a>
                    <ul class="dropdown-menu">
                        @if(hasPermission('api_setting_update'))
                            <li class="@yield('apis_settings_active')"><a class="nav-link"
                                                                          href="{{ route('apis.settings') }}">{{ __('APIs Setting') }}</a>
                            </li>
                        @endif

                        @if(hasPermission('android_setting_update'))
                            <li class="@yield('android_settings_active')"><a class="nav-link"
                                                                             href="{{ route('android.settings') }}">{{ __('Android Setting') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('ios_setting_update'))
                            <li class="@yield('ios_settings_active')"><a class="nav-link"
                                                                         href="{{ route('ios.settings') }}">{{ __('iOS Setting') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('mobile_app_intro_read'))
                            <li class="@yield('app_intro_settings_active')"><a class="nav-link"
                                                                               href="{{ route('app.intro.settings') }}">{{ __('App Intro') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('download_link_update'))
                            <li class="@yield('download_link_settings_active')"><a class="nav-link"
                                                                                   href="{{ route('download.link.settings') }}">{{ __('Download Link') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('android_setting_update'))
                            <li class="@yield('mobile_slider_active')"><a class="nav-link"
                                                                          href="{{ route('mobile.slider.settings') }}">{{ __('Slider') }}</a>
                            </li>
                        @endif
                        @if(hasPermission('android_setting_update'))
                            <li class="@yield('home_page_setting_active')"><a class="nav-link"
                                                                              href="{{ route('mobile.home.page') }}">{{ __('home_screen_builder') }}</a>
                            </li>
                        @endif
                    </ul>
                </li>
            @endif
            @if(hasPermission('addon_read'))
            @if(settingHelper('current_version') != '1.0.0')
                <li class="nav-item dropdown @yield('addon_utility')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown"><i
                                class="bx bx-extension"
                                aria-hidden="true"></i><span>{{ __('Addons') }}</span></a>
                    <ul class="dropdown-menu">
                        <li class="@yield('installed_addon')"><a class="nav-link"
                                                                 href="{{ route('admin.installed.addon') }}">{{ __('Installed Addons') }}</a>
                        </li>
                        <li class="@yield('available_addon')"><a class="nav-link"
                                                                        href="{{ route('admin.available.addons') }}">{{ __('Available Addons') }}</a>
                        </li>
                    </ul>
                </li>
            @endif
            @endif
            <li class="@yield('server-info')">
                <a class="nav-link" href="{{ route('admin.server.info') }}">
                    <i class="bx bx-server"></i>
                    <span>{{ __('Server Info') }}</span>
                </a>
            </li>
            <!--            <li class="@yield('updater')">
                <a class="nav-link" href="{{ route('admin.system.update.form') }}">
                    <i class="bx bx-wrench"></i>
                    <span>{{ __('System Update') }}</span>
                </a>
            </li>-->
{{--            <li class="">--}}
{{--                <a class="nav-link" href="{{ route('backup') }}">--}}
{{--                    <i class="bx bx-cloud-upload"></i>--}}
{{--                    <span>{{ __('Backup') }}</span>--}}
{{--                </a>--}}
{{--            </li>--}}
        </ul>
    </aside>
</div>
