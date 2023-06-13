@extends('admin.partials.master')
@section('title')
    {{ __('Order Invoice') }}
@endsection
@section('order_active')
    active
@endsection
@section('orders')
    active
@endsection
@section('main-content')

    <section class="section">
        <div class="section-body">
            <div class="invoice">
                <div class="invoice-print">
                    <div class="row">
                        <div class="col-lg-12 pt-2">
                            <div class="invoice-title">
                                @php
                                    $logo = settingHelper('admin_dark_logo')
                                @endphp
                                <img
                                    src="{{($logo != [] && is_file_exists($logo['image_100x38'])) ? static_asset($logo['image_100x38']) : static_asset('images/default/logo.png') }}"
                                    alt="logo" width="100"
                                    class="shadow-light hidden">
                                <h2>{{ __('Invoice') }}</h2>
                                <div class="invoice-number">{{__('Order')}} #{{ $order->code }}</div>
                            </div>
                            <hr>
                            @if(!$order->pickupHub)
                                <div class="row">
                                    <div class="col-md-6 col-12 col-sm-6">
                                        <address>
                                            <strong>{{__('Billed To')}}:</strong><br>
                                            {{ @$order->user->first_name }} {{ $order->user->last_name }}<br>
                                            {{ @$order->billing_address['address'] .',' }}<br>
                                            {{ @$order->billing_address['city'] .','}} {{ @$order->billing_address['country'] }}
                                        </address>
                                    </div>
                                    <div class="col-md-6 col-12 col-sm-6 text-md-right">
                                        <address>
                                            <strong>{{__('Shipped To')}}:</strong><br>
                                            {{ @$order->user->first_name }} {{ @$order->user->last_name }}<br>
                                            {{ @$order->shipping_address['address'] }},<br>
                                            {{ @$order->shipping_address['city'] }},
                                            {{ @$order->shipping_address['country'] }}
                                        </address>
                                    </div>
                                </div>
                            @endif

                            <div class="row">

                                <div class="col-md-6 col-12 col-sm-6">
                                    @if($order->pickupHub)
                                        <address>
                                            <strong>{{__('Pickup Hub ')}}:</strong><br>
                                            {{ __('Name') }} : {{ @$order->pickupHub->name }}<br>
                                            {{ __('Manager') }} : {{ @$order->pickupHub->incharge->full_name .',' }}<br>
                                            {{ __('Address') }} : {{ @$order->pickupHub->address }}<br>
                                        </address>
                                    @endif
                                </div>

                                <div class="col-md-6 col-12 col-sm-6 text-md-right">
                                    <address>
                                        <strong>{{__('Order Date')}}:</strong><br>
                                        {{ \Carbon\Carbon::parse($order->date)->format('d F, Y h:i:s A') }}<br><br>
                                    </address>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-12">
                            <div class="section-title">{{__('Order Summary')}}</div>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-md">
                                    <tr>
                                        <th width="5%">#</th>
                                        <th width="40%">{{__('Product')}}</th>
                                        <th class="text-center" width="15%">{{__('Unit Price')}}</th>
                                        <th class="text-center" width="15%">{{__('Quantity')}}</th>
                                        <th class="text-center" width="15%">{{__('Tax')}}</th>
                                        <th class="text-right" width="25%">{{__('Totals')}}</th>
                                    </tr>
                                    @foreach ($order->orderDetails as $key => $orderDetail)
                                        <tr>
                                            <td></td>
                                            {{ $key+1 }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    @if(!blank($orderDetail->product))
                                                        <div class="text-left">
                                                            @if ($orderDetail->product->thumbnail != [] && is_file_exists($orderDetail->product->thumbnail['image_40x40'], $orderDetail->product->thumbnail['storage']))
                                                                <img
                                                                    src="{{ get_media($orderDetail->product->thumbnail['image_40x40'], $orderDetail->product->thumbnail['storage']) }}"
                                                                    alt="{{ $orderDetail->product->name }}"
                                                                    class="mr-3 rounded">
                                                            @else
                                                                <img
                                                                    src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                    alt="{{ $orderDetail->product->name }}"
                                                                    class="mr-3 rounded">
                                                            @endif
                                                        </div>
                                                        <div class="ml-1">
                                                            {{ $orderDetail->product->getTranslation('name', \App::getLocale()) }} @if($orderDetail->variation != null)
                                                                ({{ $orderDetail->variation }}) @endif
                                                        </div>
                                                    @else
                                                        <div class="text-left">
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                alt="N/A"
                                                                class="mr-3 rounded">
                                                        </div>
                                                        <div class="ml-1">
                                                            N/A
                                                        </div>
                                                    @endif;
                                                </div>
                                            </td>
                                            <td class="text-center">{{ $orderDetail->price }}</td>
                                            <td class="text-center">
                                                {{ $orderDetail->quantity }}
                                            </td>
                                            <td class="text-center">
                                                {{ $orderDetail->tax }}
                                            </td>
                                            <td class="text-right">{{ $orderDetail->price * $orderDetail->quantity }}</td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
                            <div class="row mt-4">
                                <div class="col-lg-8">
                                </div>
                                <div class="col-lg-4 text-right">
                                    <table class="table-borderless" class="text-right">
                                        <tr>
                                            <td class="invoice-detail-name"> {{ __('Sub Total') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->sub_total,user_curr()) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name">(-) {{ __('Discount') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->discount,user_curr()) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name">(-) {{ __('Coupon Discount') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->coupon_discount,user_curr()) }}</td>
                                        </tr>

                                        <tr>
                                            <td class="invoice-detail-name">(+) {{ __('Tax') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->total_tax,user_curr()) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name"></td>
                                            <td>-------------</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name"></td>
                                            <td class="invoice-detail-value">{{ get_price($order->total_amount,user_curr()) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name">(+) {{ __('Shipping Cost') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->shipping_cost,user_curr()) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name"></td>
                                            <td>-------------</td>
                                        </tr>

                                        <tr>
                                            <td class="invoice-detail-name"> {{ __('Net Payable') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->total_payable,user_curr()) }}</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="text-md-right">
                    <div class="float-lg-left mb-lg-0 mb-3">
                    </div>
                    <a target="_blank" href="{{ route('seller.order.invoice.download',$order->id) }}"
                       class="btn btn-warning btn-icon icon-left"><i class="bx bx-download"></i> {{__('PDF')}}</a>
                    <a href="#" onclick="window.print();return false;" class="btn btn-primary btn-icon icon-left"><i
                            class="bx bx-printer"></i> {{__('Print')}}</a>
                </div>
                <h2 class="section-title">{{ __('Delivery Histories') }}</h2>
                <div class="row">
                    <div class="col-12">
                        <div class="activities">
                            @foreach($order->deliveryHistories as $key => $history)
                                <div class="activity">
                                    <div class="activity-icon text-white

                                        @if($history->event == 'order_canceled_event')
                                            bg-danger shadow-danger
                                        @elseif($history->event == 'order_delivered_event')
                                            bg-success shadow-success
                                        @elseif($history->event == 'order_on_the_way_event')
                                            bg-warning shadow-warning
                                        @else
                                            bg-primary shadow-primary
                                        @endif">

                                        @if($history->event == 'delivery_hero_assigned' || $history->event == 'delivery_hero_changed')
                                            <i class="bx bx-purchase-tag"></i>
                                        @elseif($history->event == 'order_canceled_event')
                                            <i class="bx bx-x"></i>
                                        @elseif($history->event == 'order_on_the_way_event')
                                            <i class="bx bxs-truck"></i>
                                        @elseif($history->event == 'order_canceled_event')
                                            <i class="bx bx-x"></i>
                                        @elseif($history->event == 'order_delivered_event')
                                            <i class="bx bx-check"></i>
                                        @else
                                            <i class="bx bx-check"></i>
                                        @endif
                                    </div>
                                    <div class="activity-detail">
                                        <div class="mb-2">
                                            <span class="text-job text-primary">
                                                {{ \Carbon\Carbon::parse($history->created_at)->diffForHumans() }}
                                            </span>
                                        </div>
                                        <p>{{ __($history->event) }}</p>
                                        @if(($history->event == 'delivery_hero_assigned' || $history->event == 'order_delivered_event' || $history->event == 'delivered_man_changed') && $history->deliveryHero)
                                            <p>
                                                {{ __('Delivery Man').': '.$history->deliveryHero->user->first_name.' '.$history->deliveryHero->last_name }}
                                            </p>
                                            <p>
                                                {{ __('By').': '.@$history->user->first_name.' '.@$history->user->last_name }}
                                            </p>
                                        @else
                                            <p>
                                                {{ __('By').': '.@$history->user->first_name.' '.@$history->user->last_name }}
                                            </p>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection

