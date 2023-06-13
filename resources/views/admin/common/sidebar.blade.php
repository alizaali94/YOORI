<div class="profile-widget-header">
    @if(Sentinel::getUser()->images != [] &&  @is_file_exists(Sentinel::getUser()->images['image_128x128'],Sentinel::getUser()->images['storage']))
        <img alt="{{Sentinel::getUser()->first_name}}" src="{{get_media(Sentinel::getUser()->images['image_128x128'],Sentinel::getUser()->images['storage'])}}" class="rounded-circle profile-widget-picture">
    @else
        <img alt="{{Sentinel::getUser()->first_name}}" src="{{static_asset('images/default/user.jpg')}}" class="rounded-circle profile-widget-picture">
    @endif
    <div class="profile-widget-items">
        <div class="profile-widget-item">
            <div class="profile-widget-item-value">{{Sentinel::getUser()->first_name.' '.Sentinel::getUser()->last_name}}</div>
            <div class="profile-widget-item-label">{{ Sentinel::getUser()->email }}</div>
        </div>
    </div>
</div>
<div class="card-footer text-left">
    <ul class="nav nav-pills flex-column">
        <li class="nav-item">
            <a class="nav-link @yield('profile')" href="{{ Sentinel::getUser()->user_type == 'seller' ? route('seller.profile') : route('admin.profile') }}"><i class="bx bx-user"></i> {{ __('Profile') }}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link @yield('login-activity')" href="{{ Sentinel::getUser()->user_type == 'seller' ? route('seller.login.activity') : route('admin.login.activity') }}"><i class='bx bx-file'></i> {{ __('Login Activities') }}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link @yield('password-change')" href="{{ Sentinel::getUser()->user_type == 'seller' ? route('seller.password.change') : route('admin.password.change') }}"><i class='bx bxs-key'></i> {{ __('Change Password') }}</a>
        </li>
        <li class="nav-item">
            <a href="javascript:void(0);" onclick="logout_user_devices('/logout-other-devices', '')" class="nav-link" id="setting-tab"><i class='bx bx-log-out'></i> {{ __('Logout From Other Devices') }}</a>
        </li>
    </ul>
</div>

@include('admin.common.logout-script')
