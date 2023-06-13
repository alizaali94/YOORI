<div class="col-md-3 col-sm">
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-pills flex-column">
                @if(hasPermission('general_setting_update'))
                <li class="nav-item"><a href="{{ route('general.setting') }}" class="nav-link @yield('general')">{{ __('General') }}</a></li>
                @endif
                @if(hasPermission('preference_setting_update'))
                <li class="nav-item"><a href="{{ route('preference') }}" class="nav-link @yield('preference')">{{ __('Preference') }}</a></li>
                @endif
                @if(hasPermission('email_setting_update'))
                <li class="nav-item"><a href="{{ route('email.setting') }}" class="nav-link @yield('email.setting')">{{ __('Email Setting') }}</a></li>
                @endif
                @if(hasPermission('currency_setting_update'))
                <li class="nav-item"><a href="{{ route('currency') }}" class="nav-link @yield('currency')">{{ __('Currency') }}</a></li>
                @endif
                @if(hasPermission('vat_tax_setting_update'))
                <li class="nav-item"><a href="{{ route('vat.tax') }}" class="nav-link @yield('vat.tax')">{{ __('VAT & Tax') }}</a></li>
                @endif
                @if(hasPermission('storage_setting_update'))
                <li class="nav-item"><a href="{{ route('storage.setting') }}" class="nav-link @yield('storage.setting')">{{ __('Storage') }}</a></li>
                @endif
                @if(hasPermission('cache_update'))
                <li class="nav-item"><a href="{{ route('cache') }}" class="nav-link @yield('cache')">{{ __('Cache') }}</a></li>
                @endif
                @if(hasPermission('admin_panel_setting_update'))
                    <li class="nav-item"><a href="{{ route('admin.panel.setting') }}" class="nav-link @yield('white_level')">{{ __('Admin Panel Setting') }}</a></li>
                @endif
                @if(hasPermission('google_service_update'))
                    <li class="nav-item"><a href="{{ route('settings.google.recaptcha') }}" class="nav-link @yield('google_recaptcha_active')">{{ __('Google reCaptcha') }}</a></li>
                @endif
                @if(hasPermission('pusher_notification_update'))
                    <li class="nav-item"><a href="{{ route('settings.pusher.notification') }}" class="nav-link @yield('pusher_notification_active')">{{ __('Pusher Notification') }}</a></li>
                @endif

                @if(hasPermission('miscellaneous_setting_update'))
                    <li class="nav-item"><a href="{{ route('miscellaneous') }}" class="nav-link @yield('miscellaneous')">{{ __('Miscellaneous') }}</a></li>
                @endif
                @if(true && !isAppMode())
                    <li class="nav-item"><a href="{{ route('settings.firebase') }}" class="nav-link @yield('firebase_update')">{{ __('Firebase') }}</a></li>
                @endif
            </ul>
        </div>
    </div>
</div>
