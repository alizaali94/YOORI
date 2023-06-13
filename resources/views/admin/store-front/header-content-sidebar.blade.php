<div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <div class="card">
        <div class="card-body">
            @if(hasPermission('header_content_update'))
                <ul class="nav nav-pills flex-column" id="myTab4" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link @yield('header')" href="{{ route('header') }}">{{ __('Header Content') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @yield('topbar')" href="{{ route('topbar') }}">{{ __('Topbar') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @yield('menu')"  href="{{ route('menu') }}">{{ __('Menu') }}</a>
                    </li>
                </ul>
            @endif
        </div>
    </div>
</div>
