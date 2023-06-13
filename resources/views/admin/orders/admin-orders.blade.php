@extends('admin.partials.master')
@section('title')
    {{ __('Admin Orders') }}
@endsection
@section('order_active')
    active
@endsection
@section('admins')
    active
@endsection
@php
    if(isset($_GET['ds'])){
        $ds          = $_GET['ds'];
    }
    if(isset($_GET['dt'])){
        $dt          = $_GET['dt'];
    }
    if(isset($_GET['s'])){
        $s          = $_GET['s'];
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
                    <h2 class="section-title">{{ __('Admin Orders') }}</h2>
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
                        <h4>{{ __('Admin Orders') }}</h4>
                        <div class="card-header-form">
                            <form class="form-inline" id="sorting">
                                <div class="form-group">
                                    <select class="form-control select2 sorting" name="ds">
                                        <option
                                            {{ @$ds == "" ? "selected" : "" }} value="">{{ __('Delivery Status') }}</option>
                                        <option
                                            {{ @$ds == "pending" ? "selected" : "" }} value="pending">{{ __('Pending') }}</option>
                                        <option
                                            {{ @$ds == "confirm" ? "selected" : "" }} value="confirm">{{ __('Confirmed') }}</option>
                                        <option
                                            {{ @$ds == "picked_up" ? "selected" : "" }} value="picked_up">{{ __('Picked Up') }}</option>
                                        <option
                                            {{ @$ds == "on_the_way" ? "selected" : "" }} value="on_the_way">{{ __('On The Way') }}</option>
                                        <option
                                            {{ @$ds == "Canceled" ? "selected" : "" }} value="canceled">{{__('Canceled')}}</option>
                                        <option
                                            {{ @$ds == "delivered" ? "selected" : "" }} value="delivered">{{__('Delivered')}}</option>
                                    </select>
                                </div>
                                <div class="form-group mr-2 ml-1">
                                    <input type="text" value="{{ @$dt }}" name="dt" id="reportrange"
                                           placeholder="{{ __('Enter Order Period') }}"
                                           class="form-control reportrange" autocomplete="off">
                                </div>
                                <div class="form-group mr-1">
                                    <select class="form-control selectric sorting" name="s">
                                        <option
                                            {{ @$s == "latest_on_top" ? "selected" : "" }} value="latest_on_top">{{ __('Latest On Top') }}</option>
                                        <option
                                            {{ @$s == "oldest_on_top" ? "selected" : "" }} value="oldest_on_top">{{ __('Oldest On Top') }}</option>
                                        <option
                                            {{ @$s == "price_high" ? "selected" : "" }} value="price_high">{{ __('Price') }}{{ __('(Low > High)') }}</option>
                                        <option
                                            {{ @$s == "price_low" ? "selected" : "" }} value="price_low">{{ __('Price') }}{{ __('(High > Low)') }}</option>
                                        <option
                                            {{ @$s == "total_product_high" ? "selected" : "" }} value="total_product_high">{{ __('Total Product') }}{{ __('(High > Low)') }}</option>
                                        <option
                                            {{ @$s == "total_product_low" ? "selected" : "" }} value="total_product_low">{{ __('Total Product') }}{{ __('(Low > High)') }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" value="{{ @$q }}"
                                               placeholder="{{ __('Search') }}">
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
                                    <th>{{ __('Customer') }}</th>
                                    <th>{{ __('Total Product') }}</th>
                                    <th>{{ __('Price') }}</th>
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
                                        <td>
                                            <div class="ml-1">
                                                {{ @$value->user->first_name }} {{ @$value->user->last_name }}<br/>
                                                {{ isDemoServer() && isset($value->user->phone) ? Str::of($value->user->phone)->mask('*', 0, strlen($value->user->phone)-3) : $value->user->phone }}
                                            </div>
                                        </td>
                                        <td> {{ $value->orderDetails->count() }} </td>
                                        <td> {{ get_price($value->total_amount,user_curr()) }} </td>
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
                                            @if ($value->payment_status == 'unpaid')
                                                <div class="badge badge-warning">{{__('Unpaid')}}</div>
                                            @elseif($value->payment_status == 'paid')
                                                <div class="badge badge-success">{{__('Paid')}}</div>
                                            @elseif($value->payment_status == 'refunded_to_wallet')
                                                <div class="badge badge-info">{{__('Refunded to wallet')}}</div>
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
                                                data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Invoice Download') }}">
                                                 <i class="bx bx-download"></i>
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
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker_customs.js') }}"></script>
@endpush
