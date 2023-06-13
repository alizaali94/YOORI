@foreach($permissions as $permission)
    @if($permission->attribute != 'wholesale_product' && $permission->attribute != 'refund' && $permission->attribute != 'reward_configuration' && $permission->attribute != 'otp_system'
                                                        && $permission->attribute != 'offline_payment' && $permission->attribute != 'chat_messenger' && $permission->attribute != 'mobile_apps' && $permission->attribute != 'mobile_app_intro'
                                                        && $permission->attribute != 'seller' && $permission->attribute != 'coupon' && $permission->attribute != 'Video Shopping')
        <tr>
            <td>
                                                                <span
                                                                    class="text-capitalize">{{ __($permission->attribute) }}</span>
            </td>
            <td>
                @foreach ($permission->keywords as $key => $keyword)
                    <div class="custom-control custom-checkbox">
                        @if ($keyword != '')
                            @if(old('permissions'))
                                <input type="checkbox"
                                class="custom-control-input read common-key"
                                id="{{ $keyword }}" name="permissions[]"
                                value="{{ $keyword }}"
                                {{ in_array($keyword, old('permissions')) ? 'checked' : '' }}>
                                <label class="custom-control-label" style=""
                                       for="{{ $keyword }}">{{ __($key) }}</label>
                            @else
                                <input type="checkbox" class="custom-control-input read common-key" name="permissions[]"
                                       value="{{$keyword}}"
                                       id="{{$keyword}}" {{in_array($keyword, $role_permissions) ? 'checked':''}}>
                                <label class="custom-control-label" for="{{$keyword}}">{{__($key)}}</label>
                            @endif
                        @endif
                    </div>
                @endforeach
            </td>
        </tr>
    @elseif(($permission->attribute == 'wholesale_product' && addon_is_activated('wholesale')) || ($permission->attribute == 'refund' && addon_is_activated('refund'))
        || ($permission->attribute == 'reward_configuration' && addon_is_activated('reward')) || ($permission->attribute == 'otp_system' && addon_is_activated('otp_system'))
        || ($permission->attribute == 'offline_payment' && addon_is_activated('offline_payment')) || ($permission->attribute == 'chat_messenger' && addon_is_activated('chat_messenger'))
        || ($permission->attribute == 'mobile_apps' || $permission->attribute == 'mobile_app_intro') || ($permission->attribute == 'coupon' && settingHelper('coupon_system') == 1)
        || ($permission->attribute == 'seller' && settingHelper('seller_system') == 1) || ($permission->attribute == 'coupon' && settingHelper('coupon_system') == 1)
        || ($permission->attribute == 'Video Shopping' && addon_is_activated('video_shopping')))
        <tr>
            <td>
                <span class="text-capitalize">{{ __($permission->attribute) }}</span>
            </td>
            <td>
                @foreach ($permission->keywords as $key => $keyword)
                    <div class="custom-control custom-checkbox">
                        @if ($keyword != '')
                            @if(old('permissions'))
                                <input type="checkbox"
                                       class="custom-control-input read common-key"
                                       id="{{ $keyword }}" name="permissions[]"
                                       value="{{ $keyword }}"
                                    {{ in_array($keyword, old('permissions')) ? 'checked' : '' }}>
                                <label class="custom-control-label" style=""
                                       for="{{ $keyword }}">{{ __($key) }}</label>
                            @else
                                <input type="checkbox" class="custom-control-input read common-key" name="permissions[]"
                                       value="{{$keyword}}"
                                       id="{{$keyword}}" {{in_array($keyword, $role_permissions) ? 'checked':''}}>
                                <label class="custom-control-label" for="{{$keyword}}">{{__($key)}}</label>
                            @endif
                        @endif
                    </div>
                @endforeach
            </td>
        </tr>
    @endif
@endforeach
