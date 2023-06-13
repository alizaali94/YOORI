<div class="col-md-3 col-sm">
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item"><a href="{{ route('apis.settings') }}"
                                            class="nav-link @yield('apis_settings')">{{ __('APIs Setting') }}</a></li>
                @if(hasPermission('mobile_app_intro_read'))
                    <li class="nav-item"><a href="{{ route('app.intro.settings') }}"
                                            class="nav-link @yield('app_intro_settings')">{{ __('App Intro') }}</a></li>
                @endif
                @if(hasPermission('android_setting_update'))
                    <li class="nav-item"><a href="{{ route('android.settings') }}"
                                            class="nav-link @yield('android_settings')">{{ __('Android Setting') }}</a>
                    </li>
                @endif
                @if(hasPermission('ios_setting_update'))
                    <li class="nav-item"><a href="{{ route('ios.settings') }}"
                                            class="nav-link @yield('ios_settings')">{{ __('iOS Setting') }}</a></li>
                @endif
                @if(hasPermission('download_link_update'))
                    <li class="nav-item"><a href="{{ route('download.link.settings') }}"
                                            class="nav-link @yield('download_link_settings')">{{ __('Download Link') }}</a>
                    </li>
                @endif
                @if(hasPermission('slider_read'))
                    <li class="nav-item"><a href="{{ route('mobile.slider.settings') }}"
                                            class="nav-link @yield('mobile_slider_settings')">{{ __('Slider') }}</a>
                    </li>
                @endif
                <li class="nav-item"><a href="{{ route('mobile.banner.settings') }}"
                                        class="nav-link @yield('banner_settings_active')">{{ __('Banner') }}</a>
                </li>
            </ul>
        </div>
    </div>
</div>
