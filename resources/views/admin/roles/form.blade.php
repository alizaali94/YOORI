@extends('admin.partials.master')

@php
    $route = isset($role) ? route('role.update') : route('role.store');
    $title = isset($role) ? __('Edit') : __('Add');
    $button_name = isset($role) ? __('Update') : __('Add');
@endphp
@section('title')
    {{ $title }} {{ __('role') }}
@endsection
@section('staff_active')
    active
@endsection
@section('roles')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }} {{ __('role') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <form action="{{ $route }}" enctype="multipart/form-data" method="POST">
                @csrf
                @isset($role)
                    @method('PUT')
                @endisset
                @csrf
                <div class="col-12">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="card-body card-body-paddding">
                                    <div class="form-group">
                                        <label class="form-label" for="name"> {{ __('Name') }} *</label>
                                        @isset($role)
                                            <input type="hidden" name="id" value="{{ $role->id }}">
                                        @endisset
                                        <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                        <input type="text" id="name" name="name"
                                               value="{{ old('name') ? old('name') : @$role->name }}" required
                                               class="form-control">
                                        @if ($errors->has('name'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('name') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="slug"> {{ __('Slug') }}</label>
                                        <input type="text" id="slug" name="slug"
                                               value="{{ old('slug') ? old('slug') : @$role->slug }}"
                                               class="form-control">
                                        @if ($errors->has('slug'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('slug') }}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body card-body-paddding">
                                    <div class="table table-striped table-md col-md-12">
                                        <table class="table table-striped role-create-table role-permission"
                                               id="permissions-table">
                                            <thead>
                                            <tr>
                                                <th scope="col">{{ __('Module') }}/{{ __('Sub-module') }}</th>
                                                <th scope="col">{{ __('Permissions') }}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach ($permissions as $permission)
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
                                                                            <input type="checkbox"
                                                                                   class="custom-control-input read common-key"
                                                                                   name="permissions[]"
                                                                                   value="{{$keyword}}" {{ isset($role) && in_array($keyword, $role->permissions) ? 'checked' : '' }} id="{{$keyword}}">
                                                                            <label class="custom-control-label"
                                                                                   for="{{$keyword}}">{{__($key)}}</label>
                                                                        @endif
                                                                    @endif
                                                                </div>
                                                            @endforeach
                                                        </td>
                                                    </tr>
                                                @elseif(($permission->attribute == 'wholesale_product' && addon_is_activated('wholesale')) || ($permission->attribute == 'refund' && addon_is_activated('refund'))
                                                    || ($permission->attribute == 'reward_configuration' && addon_is_activated('reward')) || ($permission->attribute == 'otp_system' && addon_is_activated('otp_system'))
                                                    || ($permission->attribute == 'offline_payment' && addon_is_activated('offline_payment')) || ($permission->attribute == 'chat_messenger' && addon_is_activated('chat_messenger'))
                                                    || ($permission->attribute == 'mobile_apps' || $permission->attribute == 'mobile_app_intro') || ($permission->attribute == 'Video Shopping' && addon_is_activated('video_shopping'))
                                                    || ($permission->attribute == 'seller' && settingHelper('seller_system') == 1) || ($permission->attribute == 'coupon' && settingHelper('coupon_system') == 1))
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
                                                                            <input type="checkbox"
                                                                                   class="custom-control-input read common-key"
                                                                                   name="permissions[]"
                                                                                   value="{{$keyword}}" id="{{$keyword}}">
                                                                            <label class="custom-control-label"
                                                                                   for="{{$keyword}}">{{__($key)}}</label>
                                                                        @endif
                                                                    @endif
                                                                </div>
                                                            @endforeach
                                                        </td>
                                                    </tr>
                                                @endif
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="card-footer text-right">
                                        <button class="btn btn-outline-primary">{{ $button_name }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection
@include(' admin.common.delete-ajax')
@section('style')
    <link rel="stylesheet" href="{{ static_asset('backend/css/selectric.css') }}">
    <link rel="stylesheet" href="{{ static_asset('backend/css/components.css') }}">
@endsection
@push('script')
    <script src="{{ static_asset('backend/js/tooltip.js') }}"></script>
    <script src="{{ static_asset('backend/js/jquery.selectric.min.js') }}"></script>
@endpush
