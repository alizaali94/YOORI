<!DOCTYPE html>
<html lang="en">
    @include('admin.partials.header-assets')

    <body class="{{ request()->route()->getName() == 'admin.pos.system' ||  request()->route()->getName() == 'seller.pos.system' ? 'sidebar-mini' : '' }}">
        <div id="app">
            <div class="main-wrapper">
                @include('admin.partials.header')
                @if(Sentinel::getUser()->user_type == 'seller')
                    @include('seller.partials.sidebar')
                @else
                    @include('admin.partials.sidebar')
                @endif
                <div class="main-content">
                <!-- Main Content -->
                @yield('main-content')
                <!-- Main Content End -->
                </div>
                @include('admin.partials.footer')
            </div>
        </div>
        @include('admin.partials.footer-assets')
        @include('admin.partials.message')
        <input type="hidden" value="{{ settingHelper('live_api_currency') }}" id="is_currency_api_enabled">
        <input type="hidden" value="{{route('home')}}" id="url">
        <input type="hidden" value="{{route('index')}}" id="assets">
        <input name="get-me" type="hidden" id="get_user_type" value="{{ Sentinel::getUser()->user_type == 'seller' ? 'seller' : 'admin'}}" />
        @yield('modal')
    </body>
</html>
