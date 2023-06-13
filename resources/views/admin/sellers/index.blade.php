@extends('admin.partials.master')

@section('title')
    {{ __('Seller Lists') }}
@endsection
@section('sellers_active')
    active
@endsection
@section('sellers')
    active
@endsection
@php
    if(isset($_GET['a'])){
        $a          = $_GET['a'];
    }
    if(isset($_GET['q'])){
        $q          = $_GET['q'];
    }
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Seller Lists') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $users->total() . ' ' . __('sellers') }}
                    </p>
                </div>
                @if(hasPermission('seller_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('admin.seller.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add Seller') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Sellers') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="form-group">
                                        <select class="form-control selectric sorting" name="a">
                                            <option
                                                    {{ @$a == "" ? "selected" : "" }} value="">{{ __('Filter by') }}</option>
                                            <option
                                                    {{ @$a == "verified" ? "selected" : "" }} value="verified">{{ __('Verified Shop') }}</option>
                                            <option
                                                    {{ @$a == "unverified" ? "selected" : "" }} value="unverified">{{ __('Unverified Shop') }}</option>
                                        </select>
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" value="{{ @$q }}"
                                               placeholder="{{ __('Search') }}">
                                        <div class="input-group-btn">
                                            <button class="btn btn-outline-primary"><i class="bx bx-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Shop Name') }}</th>
                                        <th>{{ __('Author') }}</th>
                                        <th>{{__('Info')}}</th>
                                        <th>{{ __('Shop Publish') }}</th>
                                        <th>{{ __('Options') }}</th>
                                    </tr>
                                    @foreach ($users as $key => $user)

                                        <tr id="row_{{$user->id}}">
                                            <td>{{ $users->firstItem() + $key }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    <figure class="avatar mr-2">
                                                        @if (@$user->sellerProfile->logo != [] && @is_file_exists($user->sellerProfile->logo['image_72x72'],$user->sellerProfile->logo['storage']))
                                                            <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $user->sellerProfile->slug) }}">
                                                                <img src="{{ get_media($user->sellerProfile->logo['image_72x72'],$user->sellerProfile->logo['storage']) }}"
                                                                                                                                                    alt="{{ $user->sellerProfile->shop_name }}">
                                                            </a>
                                                        @else
                                                            <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $user->sellerProfile->slug) }}">
                                                            <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                    alt="{{ @$user->sellerProfile->shop_name }}">
                                                            </a>
                                                        @endif
                                                    </figure>
                                                    <div class="ml-1">
                                                        @if($user->sellerProfile->verified_at && $user->status == 1 && $user->is_user_banned == 0)
                                                            <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $user->sellerProfile->slug) }}"> {{ !blank(@$user->sellerProfile->shop_name) ? $user->sellerProfile->shop_name : '' }}</a>
                                                        @endif
                                                        @if(@$user->sellerProfile->verified_at != null)
                                                            <i class="text-success ">{{ __('(Verified)') }}</i></br>
                                                        @else
                                                            <i class="text-warning "> {{ __('(Unverified)') }}</i></br>
                                                        @endif
                                                        {{ isDemoServer() && !blank(@$user->sellerProfile->phone_no) ? Str::of($user->sellerProfile->phone_no)->mask('*', 0, strlen($user->sellerProfile->phone_no)-3) : $user->sellerProfile->phone_no }}
                                                        <br/>
                                                        {{__('Total Products').': '.$user->products->count()}}
                                                    </div>
                                                </div>
                                            </td>
                                            <td width="300">
                                                <div class="d-flex">
                                                    <figure class="avatar mr-2">
                                                        @if ($user->images != [] && array_key_exists('image_40x40',$user->images))
                                                            <img src="{{ get_media($user->images['image_40x40'],$user->images['storage']) }}"
                                                                 alt="{{ $user->first_name }}">
                                                        @else
                                                            <img
                                                                    src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                                    alt="{{ $user->first_name }}">
                                                        @endif
                                                        @if(\Illuminate\Support\Facades\Cache::has('user-is-online-' . $user->id))
                                                            <i class="avatar-presence online"></i>
                                                        @else
                                                            <i class="avatar-presence offline"></i>
                                                        @endif
                                                    </figure>
                                                    <div class="ml-1">
                                                        <a href="{{ route('admin.seller.edit', $user->id) }}"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Edit') }}">
                                                            {{ $user->first_name . ' ' . $user->last_name }}
                                                        </a>
                                                        <br/>
                                                        <i class='bx bx-check-circle
                                                            {{ \Cartalyst\Sentinel\Laravel\Facades\Activation::completed($user) == true ? "text-success" : "text-warning" }} '>
                                                        </i>
                                                        {{ isDemoServer() ? emailAddressMask($user->email) : $user->email }}
                                                        {{ isDemoServer() ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : $user->phone }}
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                {{__('Current Balance')}}: {{ $user->balance }}</br>
                                                {{__('Last Login')}}
                                                : {{ $user->last_login != '' ? date('M d, Y h:i a', strtotime($user->last_login)) : '' }}
                                            </td>
                                            <td>
                                                @if($user->is_user_banned == 1)
                                                    <div class="d-flex">
                                                        <div
                                                                class="ml-1 badge badge-pill badge-danger">{{ __('Banned') }}</div>
                                                    </div>
                                                @else
                                                    <label class="custom-switch mt-2 {{ hasPermission('seller_update') ? '' : 'cursor-not-allowed' }}">
                                                        <input type="checkbox" name="custom-switch-checkbox"
                                                               value="customer-status-change/{{$user->id}}"
                                                               {{ $user->status == 1 ? 'checked' : '' }}  {{ hasPermission('seller_update') ? '' : 'disabled'}} class="{{ hasPermission('seller_update') ? 'status-change' : '' }} custom-switch-input">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                @endif
                                            </td>
                                            <td>
                                                @if (hasPermission('seller_update'))
                                                    <a href="{{ route('admin.seller.edit', $user->id) }}"
                                                       class="btn btn-outline-secondary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i
                                                                class="bx bx-edit"></i>
                                                    </a>
                                                @endif
                                                <a href="javascript:void(0)" data-toggle="dropdown"
                                                   class="btn btn-outline-secondary btn-circle" title=""
                                                   data-original-title="{{ __('Options') }}">
                                                    <i class='bx bx-dots-vertical-rounded'></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    @if($user->sellerProfile->verified_at && $user->status == 1 && $user->is_user_banned == 0)
                                                        @if(isAppMode())
                                                            <a href="#">{{ @$user->sellerProfile->shop_name }}
                                                            </a>
                                                        @else
                                                            <a target="_blank"
                                                               href="{{ route('frontend.shop', $user->sellerProfile->slug) }}">{{ @$user->sellerProfile->shop_name }}
                                                            </a>
                                                        @endif
                                                    @endif
                                                    <a href="{{ route('login.by.user', $user->id) }}"
                                                       class="dropdown-item has-icon"><i
                                                                class="bx bx-log-in"></i> {{ __('Login as Seller') }}
                                                    </a>
                                                    @if(hasPermission('seller_ban'))
                                                        @if($user->is_user_banned == 0)
                                                            <a href="{{ route('user.ban', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                        class='bx bx-lock'></i>{{ __('Ban This Seller') }}
                                                            </a>
                                                        @else
                                                            <a href="{{ route('user.ban', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                        class='bx bx-lock-open'></i>{{ __('Unban This Seller') }}
                                                            </a>
                                                        @endif
                                                    @endif
                                                    @if(hasPermission('seller_verify'))
                                                        @if(@$user->sellerProfile->verified_at == null)
                                                            <a href="{{ route('admin.seller.verify', ['id' => @$user->sellerProfile->id != null ? $user->sellerProfile->id : 0 ,'user_id' => $user->id] )  }}"
                                                               class="dropdown-item has-icon"><i
                                                                        class='bx bx-check-shield'></i>{{ __('Verify This Shop') }}
                                                            </a>
                                                        @else
                                                            <a href="{{ route('admin.seller.verify', ['id' => $user->sellerProfile->id != null ? $user->sellerProfile->id : 0 ,'user_id' => $user->id] ) }}"
                                                               class="dropdown-item has-icon"><i
                                                                        class='bx bx-shield-x'></i>{{ __('Unverify This Shop') }}
                                                            </a>
                                                        @endif
                                                        @if(hasPermission('seller_update'))
                                                            @if(\Cartalyst\Sentinel\Laravel\Facades\Activation::completed($user) == true)
                                                                <a href="{{ route('admin.seller.email.verify', $user->id) }}"
                                                                   class="dropdown-item has-icon"><i
                                                                            class='bx bx-x-circle'></i>{{ __('Unverify Account') }}
                                                                </a>
                                                            @else
                                                                <a href="{{ route('admin.seller.email.verify', $user->id) }}"
                                                                   class="dropdown-item has-icon"><i
                                                                            class='bx bx-check-circle'></i>{{ __('Verify Account') }}
                                                                </a>
                                                            @endif
                                                        @endif
                                                    @endif
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $users->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
@include('admin.common.common-modal')
