<div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <div class="card">
        <div class="card-body">

            <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                <li class="nav-item">
                    <a class="nav-link @yield('about')" href="{{ route('about') }}">{{ __('About') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('contact')" href="{{ route('contact') }}">{{ __('Contact') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('copyright')" href="{{ route('copyright') }}">{{ __('Copyright') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('link')"  href="{{ route('link') }}">{{ __('Footer Menu') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('social_link')"  href="{{ route('social.link') }}">{{ __('Social Link') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('pages_link')"  href="{{ route('page.link') }}">{{ __('Useful Link') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @yield('payment_method_banner')"  href="{{ route('payment.method.banner') }}">{{ __('Payment Methods Banner') }}</a>
                </li>
            </ul>

        </div>
    </div>
</div>
