<div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                @if(hasPermission('theme_option_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('theme-options')"
                           href="{{ route('get.theme.options') }}">{{ __('Theme Options') }}</a>
                    </li>
                @endif
                @if(hasPermission('website_seo_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('website-seo')"
                           href="{{ route('website.seo') }}">{{ __('Website SEO') }}</a>
                    </li>
                @endif
                @if(hasPermission('website_popup_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('website-popup')"
                           href="{{ route('website.popup') }}">{{ __('Website Popup') }}</a>
                    </li>
                @endif
                @if(hasPermission('custom_css_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('custom-css')"
                           href="{{ route('custom.css') }}">{{ __('Custom CSS') }}</a>
                    </li>
                @endif
                @if(hasPermission('custom_js_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('custom-js')"
                           href="{{ route('custom.js') }}">{{ __('Custom JS') }}</a>
                    </li>
                @endif
                @if(hasPermission('gdpr_update'))
                    <li class="nav-item">
                        <a class="nav-link @yield('gdpr')" href="{{ route('gdpr') }}">{{ __('GDPR') }}</a>
                    </li>
                @endif
                @if(hasPermission('facebook_service_update'))
                    <li class="nav-item"><a href="{{ route('settings.facebook.services') }}"
                                            class="nav-link @yield('facebook_services')">{{ __('Facebook Pixel') }}</a>
                    </li>
                @endif
                @if(hasPermission('google_service_update'))
                    <li class="nav-item"><a href="{{ route('settings.google.services') }}"
                                            class="nav-link @yield('google_services')">{{ __('Google Service') }}</a>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</div>
