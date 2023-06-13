@extends('admin.partials.master')
@section('title')
    {{ __('Orders') }}
@endsection
@section('order_active')
    active
@endsection
@section('orders')
    active
@endsection
@php
     $ds             = isset($_GET['ds']) ? $_GET['ds'] : null;
     $dt             = isset($_GET['dt']) ? $_GET['dt'] : null;
     $s              = isset($_GET['s']) ? $_GET['s'] : null;
     $q              = isset($_GET['q']) ? $_GET['q'] : null;
     $sl             = isset($_GET['sl']) ? $_GET['sl'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Orders') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $orders->total() . ' ' . __('orders') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Orders') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    @if(settingHelper('seller_system') == 1)
                                        <div class="form-group">
                                            <select class="seller-by-ajax form-control select2" name="sl" id ="seller_id"  aria-hidden="true" >
                                                @if(isset($sl))
                                                    <option selected value="{{ $selected_seller->id }}"> {{ $selected_seller->shop_name }} </option>
                                                @endif
                                            </select>
                                        </div>
                                    @endif
                                    <div class="form-group">
                                        <select class="form-control select2 sorting" name="ds">
                                            <option {{ @$ds == "" ? "selected" : "" }} value="">{{ __('Delivery Status') }}</option>
                                            <option {{ @$ds == "pending" ? "selected" : "" }} value="pending">{{ __('Pending') }}</option>
                                            <option {{ @$ds == "confirm" ? "selected" : "" }} value="confirm">{{ __('Confirmed') }}</option>
                                            <option {{ @$ds == "picked_up" ? "selected" : "" }} value="picked_up">{{ __('Picked Up') }}</option>
                                            <option {{ @$ds == "on_the_way" ? "selected" : "" }} value="on_the_way">{{ __('On The Way') }}</option>
                                            <option {{ @$ds == "Canceled" ? "selected" : "" }} value="canceled">{{__('Canceled')}}</option>
                                            <option {{ @$ds == "delivered" ? "selected" : "" }} value="delivered">{{__('Delivered')}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group mr-2 ml-1">
                                    <input type="text" value="{{ @$dt }}" name="dt" id="reportrange"
                                           placeholder="{{ __('Enter Order Period') }}"
                                           class="form-control reportrange" autocomplete="off" >
                                    </div>
                                    <div class="form-group mr-1">
                                        <select class="form-control selectric sorting" name="s">
                                            <option {{ @$s == "latest_on_top" ? "selected" : "" }} value="latest_on_top">{{ __('Latest On Top') }}</option>
                                            <option {{ @$s == "oldest_on_top" ? "selected" : "" }} value="oldest_on_top">{{ __('Oldest On Top') }}</option>
                                            <option {{ @$s == "price_high" ? "selected" : "" }} value="price_high">{{ __('Price') }}{{ __('(Low > High)') }}</option>
                                            <option {{ @$s == "price_low" ? "selected" : "" }} value="price_low">{{ __('Price') }}{{ __('(High > Low)') }}</option>
                                            <option {{ @$s == "total_product_high" ? "selected" : "" }} value="total_product_high">{{ __('Total Product') }}{{ __('(High > Low)') }}</option>
                                            <option {{ @$s == "total_product_low" ? "selected" : "" }} value="total_product_low">{{ __('Total Product') }}{{ __('(Low > High)') }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="q" value="{{ @$q }}" placeholder="{{ __('Search') }}">
                                            <div class="input-group-btn">
                                                <button class="btn btn-outline-primary"><i class='bx bx-search'></i>
                                                </button>
                                            </div>
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
                                    <th>{{ __('Order Code') }}</th>
                                    @if(settingHelper('seller_system') == 1)
                                        <th>{{ __('Seller') }}</th>
                                    @endif
                                    <th>{{ __('Customer') }}</th>
                                    <th>{{ __('Total Product') }}</th>
                                    <th>{{ __('Total Price') }}</th>
                                    <th>{{ __('Delivery Status') }}</th>
                                    <th>{{ __('Payment Status') }}</th>
                                    @if(addon_is_activated('refund'))
                                        <th>{{ __('Refunds') }}</th>
                                    @endif
                                    @if(hasPermission('order_view') || hasPermission('order_invoice') || hasPermission('order_delete'))
                                    <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($orders as $key => $value)
                                    <tr id="row_{{ $value->id }}" class="table-data-row">
                                        <td> {{ $orders->firstItem() + $key  }} </td>
                                        <td> {{ $value->code }} </td>
                                        @if(settingHelper('seller_system') == 1)
                                            <td>
                                                @if($value->seller_id != 1)
                                                    @if(isset($value->orderDetails[0]->product->sellerProfile))
                                                        <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $value->orderDetails[0]->product->sellerProfile->slug) }}"> {{ $value->orderDetails[0]->product->sellerProfile->shop_name }}</a>
                                                    @endif
                                                @else
                                                    <div class="badge badge-warning">{{__('Admin Orders')}}</div>
                                                @endif
                                            </td>
                                        @endif
                                        <td>
                                            <div class="ml-1">
                                                <a href="javascript:void(0)" class="modal-menu" data-title="{{__('Profile')}}"
                                                   data-url="{{ route('edit-info', ['page_name' => 'customer-profile', 'param1' => $value->user_id]) }}"
                                                   data-toggle="modal" data-target="#common-modal">{{ $value->user->full_name }}</a>
                                                <br/>
                                                {{ isDemoServer() && isset($value->user->phone) ? Str::of($value->user->phone)->mask('*', 0, strlen($value->user->phone)-3) : $value->user->phone }}
                                            </div>
                                        </td>
                                        <td> {{ $value->order_details_count }} </td>
                                        <td> {{ get_price($value->total_payable,user_curr()) }} </td>
                                        <td>
                                            @if ($value->delivery_status == 'confirm')
                                                <div class="badge badge-confirm">{{__('Confirm')}}</div>
                                            @elseif ($value->delivery_status == 'pending')
                                                <div class="badge badge-warning">{{__('Pending')}}</div>
                                            @elseif($value->delivery_status == 'canceled')
                                                <div class="badge badge-danger">{{__('Canceled')}}</div>
                                            @elseif($value->delivery_status == 'delivered')
                                                <div class="badge badge-success">{{__('Delivered')}}</div>
                                            @elseif($value->delivery_status == 'picked_up')
                                                <div class="badge badge-info">{{__('Picked Up')}}</div>
                                            @elseif($value->delivery_status == 'on_the_way')
                                                <div class="badge badge-secondary">{{__('On The Way')}}</div>
                                            @endif
                                        </td>
                                        <td>
                                            @if ($value->payment_status == 'unpaid' && ($value->offline_method_id != '' || $value->offline_method_id != null))
                                                <div class="badge badge-warning">{{__('Offline Unpaid')}}</div>
                                            @elseif ($value->payment_status == 'paid' && ($value->offline_method_id != '' || $value->offline_method_id != null))
                                                <div class="badge badge-success">{{__('Offline paid')}}</div>
                                            @elseif ($value->payment_status == 'unpaid')
                                                <div class="badge badge-warning">{{__('Unpaid')}}</div>
                                             @elseif($value->payment_status == 'paid')
                                                <div class="badge badge-success">{{__('Paid')}}</div>
                                             @elseif($value->payment_status == 'refunded_to_wallet')
                                                <div class="badge badge-info">{{__('Refunded to wallet')}}</div>
                                            @endif
                                            @if($value->offline_method_file != null)
                                                 <a target="_blank" href="{{ get_media($value->offline_method_file['image'],$value->offline_method_file['storage']) }}" data-toggle="tooltip" title="" data-original-title="{{ __('Attachment') }}">
                                                     <i class="bx bx-link-alt"></i>
                                                 </a>
                                            @endif
                                        </td>
                                        @if(addon_is_activated('refund'))
                                            <td>{{ count($value->totalRefunded) .' '.__('refunded') }}</td>
                                        @endif
                                        <td>

                                            @if(hasPermission('order_view'))
                                            <a href="{{ route('order.view',$value->id) }}"
                                                class="btn btn-outline-info btn-circle" data-url=""
                                                data-toggle="tooltip" title="" data-original-title="{{ __('View') }}">
                                                 <i class="bx bx-show"></i>
                                             </a>
                                            @endif
                                            @if(hasPermission('order_invoice'))
                                            <a href="{{ route('order.invoice.download',$value->id) }}"
                                                class="btn btn-outline-primary btn-circle" data-url=""
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Invoice Download') }}">
                                                 <i class="bx bx-download"></i>
                                             </a>
                                            @endif
                                               @if(hasPermission('order_approve_offline_payment') && ($value->offline_method_id != '' || $value->offline_method_id != null) && $value->payment_type == 'offline_method' && $value->payment_status != 'paid')
                                                   <a href="javascript:void(0)" onclick="approve_payment('{{route('order.approve.offline.payment')}}', {{ $value->id }})"
                                                      class="btn btn-outline-success btn-circle"
                                                      data-toggle="tooltip" title="" data-original-title="{{ __('Approve Payment') }}">
                                                       <i class="bx bx-check"></i>
                                                   </a>
                                               @endif
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav class="d-inline-block">
                            {{ $orders->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@include('admin.common.delete-ajax')
@include('admin.common.change-status-ajax')
@include('admin.common.common-modal')

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker_customs.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
