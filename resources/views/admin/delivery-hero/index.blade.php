@extends('admin.partials.master')

@section('title')
    {{ __('Delivery Mans Lists') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('delivery_hero')
    active
@endsection
@php
    if(isset($_GET['q'])){
        $q          = $_GET['q'];
    }
    if(isset($_GET['ph'])){
        $ph          = $_GET['ph'];
    }
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Delivery Mans Lists') }}</h2>
                    <p class="section-lead">

                    </p>
                </div>
                @if(hasPermission('delivery_hero_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('delivery.hero.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add New Delivery Man') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Delivery Mans') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="form-group">
                                        <select class="form-control select2 sorting" name="ph">
                                            <option {{ @$ph == "" ? "selected" : "" }} value="">{{ __('Pickup Hub') }}</option>
                                            @foreach($pickupHubs as $key => $hub)
                                            <option {{ @$ph == $hub->id ? "selected" : "" }} value="{{ $hub->id }}">{{ $hub->getTranslation('name') }}</option>
                                            @endforeach
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
                                        <th>{{ __('Name') }}</th>
                                        <th>{{ __('Phone') }}</th>
                                        <th>{{ __('Last Login') }}</th>
                                        <th>{{ __('Pickup Hub') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Balance') }}</th>
                                        <th>{{ __('Total Collection') }}</th>
                                        <th>{{ __('Total Commission') }}</th>
                                        @if(hasPermission('delivery_hero_update') || hasPermission('delivery_hero_delete') || hasPermission('delivery_hero_ban') || hasPermission('delivery_hero_email_activation') ||hasPermission('Delivery_hero_account_deposit'))
                                        <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>
                                    @foreach($deliveryHeroes as $key => $value)
                                    <tr>
                                        <td>{{ $deliveryHeroes->firstItem() + $key }}</td>
                                        <td width="300">
                                            <div class="d-flex">
                                                <figure class="avatar mr-2">
                                                    @if ($value->images != [] && @is_file_exists($value->images['image_40x40']))
                                                        <img src="{{ static_asset($value->images['image_40x40']) }}"
                                                             alt="{{ $value->first_name }}">
                                                    @else
                                                        <img src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                            alt="{{ $value->first_name }}">
                                                    @endif
                                                </figure>
                                                <div class="ml-1">
                                                    <a href="{{ route('delivery.hero.edit', $value->id) }}"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}">{{ $value->first_name . ' ' . $value->last_name }}</a>
                                                    <br/>
                                                    <i class='bx bx-check-circle
                                                            {{ \Cartalyst\Sentinel\Laravel\Facades\Activation::completed($value) == true ? "text-success" : "text-warning" }} '>
                                                    </i>
                                                    {{ isDemoServer() ? emailAddressMask($value->email) : $value->email }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ isDemoServer() ? Str::of($value->phone)->mask('*', 0, strlen($value->phone)-3) : $value->phone }}</td>
                                        <td>{{ $value->last_login != '' ? date('M d, Y h:i a', strtotime($value->last_login)) : '' }}</td>
                                        <td>
                                            @if(isset($value->deliveryHero->pickupHub))
                                            {{ $value->deliveryHero->pickupHub->getTranslation('name') }}
                                            @endif
                                        </td>
                                        <td>
                                            @if($value->is_user_banned == 1)
                                                <div class="d-flex">
                                                    <div
                                                        class="ml-1 badge badge-pill badge-danger">{{ __('Banned') }}</div>
                                                </div>
                                            @else
                                                <label class="custom-switch mt-2 {{ hasPermission('delivery_hero_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="customer-status-change/{{$value->id}}"
                                                           {{ $value->status == 1 ? 'checked' : '' }}  {{ hasPermission('delivery_hero_update') ? '' : 'disabled'}} class="{{ hasPermission('delivery_hero_update') ? 'status-change' : '' }} custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            @endif
                                        </td>
                                        <td>{{ get_price(priceFormatUpdate($value->balance,settingHelper('default_currency'),"*"),user_curr()) }}</td>
                                        <td>{{ $value->deliveryHero ? get_price(priceFormatUpdate($value->deliveryHero->total_collection,settingHelper('default_currency'),"*"),user_curr()) : 0}}</td>
                                        <td>{{ $value->deliveryHero ? get_price(priceFormatUpdate($value->deliveryHero->total_commission,settingHelper('default_currency'),"*"),user_curr()) : 0}}</td>
                                        <td>
                                            @if(hasPermission('delivery_hero_update'))
                                            <a href="{{ route('delivery.hero.edit', $value->id) }}"
                                               class="btn btn-outline-secondary btn-circle"
                                               data-toggle="tooltip" title=""
                                               data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                            </a>
                                            @endif
                                            @if(hasPermission('Delivery_hero_account_deposit') || hasPermission('delivery_hero_ban') || hasPermission('delivery_hero_email_activation'))
                                            <a href="javascript:void(0)" data-toggle="dropdown"
                                               class="btn btn-outline-secondary btn-circle" title=""
                                               data-original-title="{{ __('Options') }}">
                                                <i class='bx bx-dots-vertical-rounded'></i>
                                            </a>
                                                @endif
                                             <div class="dropdown-menu">
                                                 @if(hasPermission('delivery_hero_ban'))
                                                     @if($value->is_user_banned == 0)
                                                         <a href="{{ route('user.ban', $value->id) }}"
                                                            class="dropdown-item has-icon"><i
                                                                 class='bx bx-lock'></i>{{ __('Ban This Delivery Man') }}</a>

                                                     @else
                                                         <a href="{{ route('user.ban', $value->id) }}"
                                                            class="dropdown-item has-icon"><i
                                                                 class='bx bx-lock-open'></i>{{ __('Unban This Delivery Man') }}
                                                         </a>
                                                     @endif
                                                 @endif
                                                 @if(hasPermission('Delivery_hero_account_deposit'))
                                                    <a href="javascript:void(0)"
                                                       data-title="{{__('Account Deposit')}}"
                                                       data-url="{{ route('edit-info', ['page_name' => 'collection-form-delivery-hero', 'param1' => $value->id]) }}"
                                                       data-toggle="modal" data-target="#common-modal"
                                                       class="dropdown-item has-icon modal-menu"><i
                                                           class='bx bx-collection' ></i>{{ __('Account Deposit') }}
                                                    </a>
                                                @endif
                                                     @if(hasPermission('delivery_hero_email_activation'))
                                                     @if(\Cartalyst\Sentinel\Laravel\Facades\Activation::completed($value) == true)
                                                         <a href="{{ route('delivery.hero.email.verify', $value->id) }}"
                                                            class="dropdown-item has-icon"><i
                                                                 class='bx bx-x-circle'></i>{{ __('Unverify Account') }}
                                                         </a>
                                                     @else
                                                         <a href="{{ route('delivery.hero.email.verify', $value->id) }}"
                                                            class="dropdown-item has-icon"><i
                                                                 class='bx bx-check-circle'></i>{{ __('Verify Account') }}
                                                         </a>
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
                                {{ $deliveryHeroes->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('admin.common.common-modal')
@endsection
@include('admin.common.delete-ajax')

