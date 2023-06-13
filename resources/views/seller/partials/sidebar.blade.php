<div class="main-sidebar">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="{{ route('seller.dashboard') }}">{{ settingHelper('system_short_name') ? settingHelper('system_short_name',app()->getLocale()) : 'Yoori' }}</a>
        </div>
        <div class="sidebar-brand">
            <a href="{{ route('seller.dashboard') }}">
                @php
                    $logo = settingHelper('light_logo');
                @endphp
                <img src="{{($logo != [] && is_file_exists($logo['original_image'])) ? static_asset($logo['original_image']) : static_asset('images/default/logo.png') }}"
                     alt="Logo"></a>
        </div>
        <ul class="sidebar-menu">
            <li class="@yield('dashboard')"><a class="nav-link" href="{{ route('seller.dashboard') }}"><i
                            class="bx bxs-dashboard"></i>
                    <span>{{ __('Dashboard') }}</span></a>
            </li>
            <li class="@yield('orders')"><a class="nav-link" href="{{ route('seller.orders') }}"><i
                            class="bx bx-trending-up"></i>
                    <span>{{ __('Orders') }}</span></a>
            </li>
            @if(addon_is_activated('pos_system') && settingHelper('is_pos_activated_for_seller'))
                <li class="nav-item dropdown @yield('pos_services_active')">
                    <a href="{{ route('seller.pos.system') }}">
                        <i class="bx bx-printer {{ \Config::get('app.demo_mode') == 'yes' ? 'beep' : ''}}"></i>
                        <span>{{ __('POS Manager') }}</span>
                        @if(\Config::get('app.demo_mode') == 'yes')
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                </li>
            @endif
            <li class="nav-item dropdown @yield('product_active')">
                <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                    <i class="bx bx-cart"></i>
                    <span>{{ __('Products') }}</span>
                </a>
                <ul class="dropdown-menu">
                    <li class="@yield('product-create')"><a class="nav-link"
                                                            href="{{ route('seller.product.create') }}">{{ __('Add New Product') }}</a>
                    </li>
                    <li class="@yield('product')"><a class="nav-link"
                                                     href="{{ route('seller.products') }}">{{ __('All Products') }}</a>
                    </li>
                    <li class="@yield('digital-product')"><a class="nav-link"
                                                             href="{{ route('seller.digital.products') }}">{{ __('Digital Products') }}</a>
                    </li>
                    <li class="@yield('catalog-product')"><a class="nav-link"
                                                             href="{{ route('seller.catalog.products') }}">{{ __('Catalog Products') }}</a>
                    </li>
                    <li class="@yield('classified-product')"><a class="nav-link"
                                                                href="{{ route('seller.classified.products') }}">{{ __('Classified Products') }}</a>
                    </li>
                    <li class="@yield('product_import')"><a class="nav-link"
                                                            href="{{ route('seller.product.import') }}">{{ __('Import Products') }}</a>
                    </li>
                </ul>
            </li>
            @if(settingHelper('seller_can_create_wholesale') && addon_is_activated('wholesale'))
                <li class="@yield('wholesale_product_active')">
                    <a class="nav-link" href="{{ route('seller.wholesale.products') }}"><i
                                class="bx bx-building-house {{ \Config::get('app.demo_mode') == 'yes' ? 'beep' : ''}}"></i>
                        <span>{{ __('Wholesale Product') }}</span>
                        @if(\Config::get('app.demo_mode') == 'yes')
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                </li>
            @endif
            <li class="@yield('media')">
                <a class="nav-link" href="{{ route('seller.media.library') }}"><i
                            class="bx bx-file"></i><span>{{ __('Media Library') }}</span>
                </a>
            </li>
            @if(addon_is_activated('seller_subscription'))
                <li class="nav-item dropdown @yield('seller_subscription')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bxs-report"></i>
                        <span>{{ __('packages') }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="@yield('seller_package')"><a class="nav-link"
                                                                href="{{ route('seller.packages') }}">{{ __('packages') }}</a>
                        </li>
                        <li class="@yield('subscribed_packages')"><a class="nav-link"
                                                                     href="{{ route('seller.stock.product.report') }}">{{ __('subscribed_packages') }}</a>
                        </li>
                    </ul>
                </li>
            @endif
            <li class="nav-item dropdown @yield('report')">
                <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                    <i class="bx bxs-report"></i>
                    <span>{{ __('Reports') }}</span>
                </a>
                <ul class="dropdown-menu">
                    <li class="@yield('seller_report_active')"><a class="nav-link"
                                                                  href="{{ route('seller.product.sale') }}">{{ __('Product Sale') }}</a>
                    </li>
                    <li class="@yield('product_stock')"><a class="nav-link"
                                                           href="{{ route('seller.stock.product.report') }}">{{ __('Products Stock') }}</a>
                    </li>
                    <li class="@yield('product_wishlist')"><a class="nav-link"
                                                              href="{{ route('seller.product.wishlist') }}">{{ __('Product Wishlist') }}</a>
                    </li>
                    <li class="@yield('commission_history')"><a class="nav-link"
                                                                href="{{ route('seller.commission.history') }}">{{ __('Commission History') }}</a>
                    </li>
                </ul>
            </li>
            @if(addon_is_activated('refund'))
                <li class="nav-item dropdown @yield('refund_active')">
                    <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                        <i class="bx bx-credit-card-alt {{ \Config::get('app.demo_mode') == 'yes' ? 'beep' : ''}}"></i>
                        <span>{{ __('Refund') }}</span>
                        @if(\Config::get('app.demo_mode') == 'yes')
                            <p class="badge badge-addon">{{ __('Addon') }}</p>
                        @endif
                    </a>
                    <ul class="dropdown-menu">
                        <li class="@yield('refunds')"><a class="nav-link"
                                                         href="{{ route('seller.refunds') }}">{{ __('All Request') }}</a>
                        </li>
                        <li class="@yield('approved_refunds')"><a class="nav-link"
                                                                  href="{{ route('seller.all.approved.refund') }}">{{ __('Approved Refunds') }}</a>
                        </li>
                        <li class="@yield('processed_refunds')"><a class="nav-link"
                                                                   href="{{ route('seller.all.processed.refund') }}">{{ __('Processed Refunds') }}</a>
                        </li>
                        <li class="@yield('rejected_refunds')"><a class="nav-link"
                                                                  href="{{ route('seller.all.rejected.refund') }}">{{ __('Rejected Refund') }}</a>
                        </li>
                    </ul>
                </li>
            @endif

            <li class="nav-item dropdown @yield('marketing_active')">
                <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                    <i class="bx bx-paper-plane"></i>
                    <span>{{ __('Marketing') }}</span>
                </a>
                <ul class="dropdown-menu">
                    <li class="@yield('campaign')"><a class="nav-link"
                                                      href="{{ route('seller.campaign') }}">{{ __('Campaigns') }}</a>
                    </li>
                    @if(settingHelper('coupon_system'))
                        <li class="@yield('coupon')"><a class="nav-link"
                                                        href="{{ route('seller.coupons') }}">{{ __('Coupons') }}</a>
                        </li>
                    @endif
                </ul>
            </li>

            @if(settingHelper('seller_video_shopping') == 1)
                @if(addon_is_activated('video_shopping'))
                    <li class="@yield('video_shopping')"><a class="nav-link"
                                                            href="{{ route('seller.video.shopping') }}"><i
                                    class="bx bx-video {{ \Config::get('app.demo_mode') == 'yes' ? 'beep' : ''}}"></i>
                            <span>{{ __('Video Shopping') }}</span>
                            @if(\Config::get('app.demo_mode') == 'yes')
                                <p class="badge badge-addon">{{ __('Addon') }}</p>
                            @endif
                        </a>
                    </li>
                @endif
            @endif

            <li class="nav-item dropdown @yield('tickets_active')">
                <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                    <i class="bx bx-support"></i>
                    <span>{{ __('Support') }}</span>
                </a>
                <ul class="dropdown-menu">
                    <li class="@yield('tickets')"><a class="nav-link" href="{{ route('seller.support') }}">
                            <span>{{ __('Support') }}</span></a></li>
                    <li class="@yield('contact_us')"><a class="nav-link"
                                                        href="{{ route('seller.contact.us') }}">{{ __('Contact Messages') }}</a>
                    </li>
                </ul>
            </li>

            <li class="@yield('payment_gateway')"><a class="nav-link" href="{{ route('seller.payment') }}"><i
                            class="bx bx-dollar" aria-hidden="true"></i> <span>{{ __('Payment Accounts') }}</span></a>
            </li>
            <li class="@yield('seller_wallet')"><a class="nav-link" href="{{ route('seller.wallet') }}"><i
                            class="bx bx-wallet" aria-hidden="true"></i> <span>{{ __('My Wallet') }}</span></a></li>
            <li class="@yield('payouts')"><a class="nav-link" href="{{ route('seller.payouts') }}"><i
                            class="bx bx-dollar" aria-hidden="true"></i> <span>{{ __('Payouts') }}</span></a></li>

            <li class="nav-item dropdown @yield('shop_active')">
                <a href="javaScript:void(0)" class="nav-link has-dropdown" data-toggle="dropdown">
                    <i class="bx bx-slider-alt"></i>
                    <span>{{ __('Shop Setting') }}</span>
                </a>
                <ul class="dropdown-menu">
                    <li class="@yield('shop_setup')"><a class="nav-link"
                                                        href="{{ route('seller.shop.setup') }}">{{ __('Shop Page') }}</a>
                    </li>
                    <li class="@yield('shop_details')"><a class="nav-link"
                                                          href="{{ route('seller.shop.details') }}">{{ __('Shop Details') }}</a>
                    </li>
                </ul>
            </li>
            <li class="@yield('mobile_app_contents')"><a class="nav-link" href="{{ route('seller.mobile.home.page') }}"><i
                            class="bx bx-mobile" aria-hidden="true"></i>
                    <span>{{ __('Mobile App Shop Page') }}</span></a></li>
        </ul>
    </aside>
</div>
