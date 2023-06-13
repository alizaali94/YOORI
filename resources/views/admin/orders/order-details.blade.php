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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-header-form float-right form-inline">
                            @if(!$order->pickupHub)
                                <form action="{{ route('order.assign.delivery.hero') }}" method="POST" class=""
                                      id="sorting"
                                      data-for="assign-hero">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $order->id }}">
                                    <div class="form-group">
                                        <select
                                                class="form-control selectric sorting {{ $order->delivery_status == 'delivered' || $order->delivery_status == 'canceled' ? 'cursor-not-allowed' : '' }}"
                                                {{ $order->delivery_status == 'delivered' || $order->delivery_status == 'canceled' ? 'disabled' : '' }} data-empty="{{ __('Please select Delivery Man') }}"
                                                name="delivery_hero">
                                            <option value="">{{ __('Assign Delivery Man') }}</option>
                                            @foreach($delivery_heroes as $key => $delivery_hero)
                                                <option
                                                        {{ $delivery_hero->deliveryHero->id == $order->delivery_hero_id ? "selected" : "" }} value="{{ $delivery_hero->deliveryHero->id }}">{{ $delivery_hero->first_name. ' '.$delivery_hero->last_name  }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </form>
                            @endif
                            @if($order->payment_type != 'offline_method')
                                <form action="{{ route('order.payment.status.change') }}" method="POST"
                                      id="onChangeFormSubmit2">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $order->id }}">
                                    <div class="form-group">
                                        <select
                                                class="form-control selectric {{ $order->delivery_status == "canceled" || $order->delivery_status == "delivered"  ? 'cursor-not-allowed' : '' }}"
                                                id="payment_status"
                                                data-title="{{__('Account Deposit')}}"
                                                data-toggle="modal" data-target="#common-modal"
                                                class="dropdown-item has-icon modal-menu"
                                                {{ $order->delivery_status == "canceled" || $order->delivery_status == "delivered"? 'disabled' : '' }} name="payment_status">
                                            @if($order->payment_status != "refunded_to_wallet" && $order->delivery_status != 'delivered ')
                                                <option
                                                        {{ $order->payment_status == "unpaid" ? "selected" : "" }} value="unpaid">{{ __('Unpaid') }}</option>
                                            @endif
                                            @if($order->payment_status == "refunded_to_wallet" || $order->payment_type == 'cash_on_delivery' || $order->pickupHub || $order->payment_status == "paid")
                                                <option
                                                        {{ $order->payment_status == "paid" ? "selected" : "" }} value="paid">{{ __('Paid') }}</option>
                                            @endif
                                            @if($order->payment_status == "refunded_to_wallet")
                                                <option
                                                        {{ $order->payment_status == "refunded_to_wallet" ? "selected" : "" }} value="refunded_to_wallet">{{ __('Refunded to wallet') }}</option>
                                            @endif
                                        </select>
                                    </div>
                                </form>
                            @else
                                <div>
                                    <p class="mb-0 mr-3"><strong>{{__('Offline Payment')}}</strong></p>
                                    <p class="mb-0 mr-3"><strong> {{ __('status') }}
                                            : {{ __($order->payment_status) }} </strong></p>
                                </div>
                            @endif
                            <form action="{{ route('order.delivery.status.change') }}" method="POST" class=""
                                  id="onChangeFormSubmit">
                                @csrf
                                <input type="hidden" name="id" value="{{ $order->id }}">
                                <div class="form-group">
                                    <select class="form-control selectric onChangeFormSubmit {{ $order->delivery_status == "delivered" ? 'cursor-not-allowed' : '' }}"
                                            name="delivery_status" {{ $order->delivery_status == "delivered" ? 'disabled' : '' }}>
                                        <option
                                                {{ $order->delivery_status == "pending" ? "selected" : "" }} value="pending">{{ __('Pending') }}</option>
                                        <option
                                                {{ $order->delivery_status == "confirm" ? "selected" : "" }} value="confirm">{{ __('Confirmed') }}</option>
                                        <option
                                                {{ $order->delivery_status == "picked_up" ? "selected" : "" }} value="picked_up">{{ __('Picked Up') }}</option>
                                        <option
                                                {{ $order->delivery_status == "on_the_way" ? "selected" : "" }} value="on_the_way">{{ __('On The Way') }}</option>
                                        @if($order->delivery_status != 'delivered')
                                            <option
                                                    {{ $order->delivery_status == "canceled" ? "selected" : "" }} value="canceled">{{__('Canceled')}}</option>
                                        @endif
                                        @if($order->payment_status == 'paid' || $order->delivery_status == "delivered")
                                            <option
                                                    {{ $order->delivery_status == "delivered" ? "selected" : "" }} value="delivered">{{__('Delivered')}}</option>
                                        @endif
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="invoice-print">
                    <div class="row">
                        <div class="col-lg-12 pt-2">
                            <div class="invoice-title">
                                @php
                                    $logo = settingHelper('admin_dark_logo')
                                @endphp
                                <img
                                        src="{{($logo != [] && is_file_exists($logo['image_100x38'])) ? static_asset($logo['image_100x38']) : static_asset('images/default/dark-logo.png') }}"
                                        alt="logo" width="100">
                                <h2>{{ __('Invoice') }}</h2>
                                <div class="invoice-number">{{__('Order')}} #{{ $order->code }}</div>
                            </div>
                            <hr>
                            @if(!$order->pickupHub)
                                <div class="row">
                                    <div class="col-md-6 col-12 col-sm-6">
                                        <address>
                                            <strong>{{__('Billed To')}}:</strong><br>
                                            {{ arrayCheck('name',$order->billing_address) ? @$order->billing_address['name'] : '' }}<br>
                                            {{ arrayCheck('email',$order->billing_address) ? @$order->billing_address['email'] : '' }}<br>
                                            {{ arrayCheck('phone_no',$order->billing_address) ? @$order->billing_address['phone_no'] : '' }}<br>
                                            {{ @$order->billing_address['address'] }} {{ @$order->billing_address['address'] ? ',' : ''}}
                                            <br>
                                            {{ @$order->billing_address['city'] }} {{ @$order->billing_address['city'] ? ',' : '' }}
                                            {{ @$order->billing_address['country'] }}
                                        </address>
                                    </div>
                                    <div class="col-md-6 col-12 col-sm-6 text-md-right">
                                        <address>
                                            <strong>{{__('Shipped To')}}:</strong><br>
                                            {{ arrayCheck('name',$order->shipping_address) ? @$order->shipping_address['name'] : '' }}<br>
                                            {{ arrayCheck('email',$order->shipping_address) ? @$order->shipping_address['email'] : '' }}<br>
                                            {{ arrayCheck('phone_no',$order->shipping_address) ? @$order->shipping_address['phone_no'] : '' }}<br>
                                            {{ @$order->shipping_address['address'] }} {{ @$order->shipping_address['address'] ? ',' : ''}}
                                            <br>
                                            {{ @$order->shipping_address['city'] }} {{ @$order->shipping_address['city'] ? ',' : ''}}
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
                                        <th class="text-center" width="15%">{{__('Sub Total')}}</th>
                                        @if(($order->tax_method && $order->tax_method['vat_tax_type'] == 'product_base') || (!$order->tax_method || !$order->tax_method['vat_tax_type']))
{{--                                            {{dd(1)}}--}}
                                            <th class="text-center" width="15%">{{__('Tax')}}</th>
                                        @endif
                                        @if($order->shipping_method == 'product_base' || !$order->shipping_method)
{{--                                            {{dd(2)}}--}}
                                            <th class="text-center" width="15%">{{__('Shipping Cost')}}</th>
                                        @endif
                                        @foreach ($order->orderDetails as $key => $orderDetail)
                                            @php
                                                $coupon_discount = $orderDetail->coupon_discount['discount'];
                                            @endphp
                                            @if($order->is_coupon_system_active == 1 && $coupon_discount > 0)
                                                <th class="text-center" width="15%">{{__('Coupon Discount')}}</th>
                                            @endif
                                        @endforeach
                                        <th class="text-center" width="15%">{{__('Discount')}}</th>
                                        <th class="text-right" width="25%">{{__('Totals')}}</th>
                                    </tr>
                                    @foreach ($order->orderDetails as $key => $orderDetail)
                                        @php
                                            $product = $orderDetail->product;
                                            $coupon_discount = $orderDetail->coupon_discount['discount'];
                                            $tax = $orderDetail->tax * $orderDetail->quantity;
                                            $shipping_cost = $orderDetail->shipping_cost['total_cost'];
                                            $discount = $orderDetail->discount * $orderDetail->quantity;
                                            $sub_total = (($orderDetail->price * $orderDetail->quantity) + $tax + $shipping_cost) - $discount;
                                        @endphp
                                        <tr>
                                            <td>{{ $key+1 }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    @if($product)
                                                        <div class="text-left">
                                                            @if ($product->thumbnail != [] && is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage']))
                                                                <img
                                                                        src="{{ get_media($product->thumbnail['image_40x40'], $product->thumbnail['storage']) }}"
                                                                        alt="{{ $product->name }}"
                                                                        class="mr-3 rounded">
                                                            @else
                                                                <img
                                                                        src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                        alt="{{ $product->name }}"
                                                                        class="mr-3 rounded">
                                                            @endif
                                                        </div>
                                                        <div class="ml-1">
                                                            @if(isAppMode())
                                                                {{ $product->getTranslation('name', \App::getLocale()) }}
                                                                @if($orderDetail->variation != null)
                                                                    ({{ $orderDetail->variation }})
                                                                @endif
                                                            @else
                                                                <a href="{{ route('product-details',$product->slug) }}" target="_blank">
                                                                    {{ $product->getTranslation('name', \App::getLocale()) }}
                                                                    @if($orderDetail->variation != null)
                                                                        ({{ $orderDetail->variation }})
                                                                    @endif
                                                                </a>
                                                            @endif
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
                                                    @endif
                                                </div>
                                            </td>
                                            <td class="text-center">{{ get_price($orderDetail->price,user_curr()) }}</td>
                                            <td class="text-center">
                                                {{ $orderDetail->quantity }}
                                            </td>
                                            <td class="text-center txt_nowrap">
                                                {{ get_price($orderDetail->price,user_curr()) }}
                                                X {{ $orderDetail->quantity }}
                                                = {{ get_price($orderDetail->price * $orderDetail->quantity,user_curr()) }}
                                            </td>
                                            @if(($order->tax_method && $order->tax_method['vat_tax_type'] == 'product_base') || (!$order->tax_method || !$order->tax_method['vat_tax_type']))
                                                @if($orderDetail->tax > 0)
                                                <td class="text-center txt_nowrap">
                                                    {{ get_price($orderDetail->tax,user_curr()) }} X {{ $orderDetail->quantity }}
                                                    = {{ get_price($tax,user_curr()) }}
                                                </td>
                                                @else
                                                    <td class="text-center txt_nowrap">
                                                       {{ get_price($tax,user_curr()) }}
                                                    </td>
                                                @endif
                                            @endif
                                            @if($order->shipping_method == 'product_base' || !$order->shipping_method)
                                                @if($orderDetail->shipping_cost['depend_on_quantity'] == 1)
                                                    <td class="text-center txt_nowrap">
                                                        {{ get_price($orderDetail->shipping_cost['per_cost'],user_curr()) }}
                                                        X {{ $orderDetail->quantity }}
                                                        = {{ get_price($shipping_cost,user_curr()) }}
                                                    </td>
                                                @else
                                                    <td class="text-center txt_nowrap">
                                                        {{ get_price($shipping_cost,user_curr()) }}
                                                    </td>
                                                @endif
                                            @endif
                                            @if($order->is_coupon_system_active == 1 && $coupon_discount > 0)
                                                <td class="text-center txt_nowrap">
                                                    {{ get_price($coupon_discount,user_curr()) }}
                                                </td>
                                            @endif
                                            @if($discount > 0)
                                                <td class="text-center txt_nowrap">
                                                    {{ get_price($orderDetail->discount,user_curr()) }}
                                                    X {{ $orderDetail->quantity }}
                                                    = {{ get_price($discount,user_curr()) }}
                                                </td>
                                            @else
                                                <td class="text-center txt_nowrap">
                                                    {{ get_price($discount,user_curr()) }}
                                                </td>
                                            @endif
                                            <td class="text-right txt_nowrap">{{ get_price($sub_total,user_curr()) }}</td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
                            <div class="row mt-4">
                                <div class="col-lg-8">
                                </div>
                                @php
                                    $total_payable = 0;
                                @endphp
                                <div class="col-lg-4 text-right">
                                    <table class="table-borderless text-right">
                                        <tr>
                                            <td class="invoice-detail-name"> {{ __('Sub Total') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->sub_total,user_curr()) }}</td>
                                            @php
                                                $total_payable += $order->sub_total;
                                            @endphp
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name">(-) {{ __('Discount') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->discount,user_curr()) }}</td>
                                            @php
                                                $total_payable -= $order->discount;
                                            @endphp
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name">(-) {{ __('Coupon Discount') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->coupon_discount,user_curr()) }}</td>
                                            @php
                                                $total_payable -= $order->coupon_discount;
                                            @endphp
                                        </tr>
                                        @if(($order->tax_method && $order->tax_method['vat_tax_type'] == 'product_base') || ($order->tax_method && $order->tax_method['vat_tax_type'] == 'order_base' && $order->tax_method['tax_type'] == 'before_tax') || (!$order->tax_method || !$order->tax_method['vat_tax_type']))
                                            <tr>
                                                <td class="invoice-detail-name">(+) {{ __('Tax') }}:</td>
                                                <td class="invoice-detail-value">{{ get_price($order->total_tax,user_curr()) }}</td>
                                                @php
                                                    $total_payable += $order->total_tax;
                                                @endphp
                                            </tr>
                                        @endif
                                        <tr>
                                            <td class="invoice-detail-name">(+) {{ __('Shipping Cost') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($order->shipping_cost,user_curr()) }}</td>
                                            @php
                                                $total_payable += $order->shipping_cost;
                                            @endphp
                                        </tr>
                                        @if($order->tax_method && $order->tax_method['vat_tax_type'] == 'order_base' && $order->tax_method['tax_type'] == 'after_tax')
                                            <tr>
                                                <td class="invoice-detail-name"></td>
                                                <td>-------------</td>
                                            </tr>
                                            <tr>
                                                <td class="invoice-detail-name">{{ __('Total Amount') }}:</td>
                                                <td class="invoice-detail-value">{{ get_price($total_payable,user_curr()) }}</td>
                                            </tr>
                                            <tr>
                                                <td class="invoice-detail-name">(+) {{ __('Tax') }}:</td>
                                                <td class="invoice-detail-value">{{ get_price($order->total_tax,user_curr()) }}</td>
                                                @php
                                                    $total_payable += $order->total_tax;
                                                @endphp
                                            </tr>
                                        @endif
                                        <tr>
                                            <td class="invoice-detail-name"></td>
                                            <td>-------------</td>
                                        </tr>
                                        <tr>
                                            <td class="invoice-detail-name"> {{ __('Net Payable') }}:</td>
                                            <td class="invoice-detail-value">{{ get_price($total_payable,user_curr()) }}</td>
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
                    <a target="_blank" href="{{ route('order.invoice.download',$order->id) }}"
                       class="btn btn-warning btn-icon icon-left"><i class="bx bx-download"></i> {{__('PDF')}}</a>
                    <a href="#" onclick="window.print();return false;" class="btn btn-primary btn-icon icon-left"><i
                                class="bx bx-printer"></i> {{__('Print')}}</a>
                </div>
                @if(count($order->deliveryHistories) > 0 || count($order->paymentHistories) > 0)
                    <div class="row">
                        @if(count($order->deliveryHistories) > 0)
                            <div class="col-md-6 col-6 col-sm-6">
                                <h2 class="section-title">{{ __('Order Histories') }}</h2>
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
                        @endif
                        @if(count($order->paymentHistories) > 0)
                            <div class="col-md-6 col-6 col-sm-6">
                                <h2 class="section-title">{{ __('Payment Histories') }}</h2>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="activities">
                                            @foreach($order->paymentHistories as $key => $history)
                                                <div class="activity">
                                                    <div class="activity-icon text-white

                                                @if($history->event == 'order_payment_unpaid_event')
                                                bg-danger shadow-danger
@elseif($history->event == 'order_payment_paid_event')
                                                bg-success shadow-success
@elseif($history->event == 'order_payment_refunded_to_wallet_event')
                                                bg-warning shadow-warning
@else
                                                bg-primary shadow-primary
@endif">
                                                        @if($history->event == 'order_payment_unpaid_event')
                                                            <i class="bx bx-x"></i>
                                                        @elseif($history->event == 'order_payment_paid_event')
                                                            <i class="bx bx-check"></i>
                                                        @elseif($history->event == 'order_payment_refunded_to_wallet_event')
                                                            <i class="bx bx-wallet-alt"></i>
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
                                                        <p>{{ __($history->remarks) }}</p>
                                                        <p>
                                                            {{ __('By').': '.@$history->user->first_name.' '.@$history->user->last_name }}
                                                        </p>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                @endif
            </div>
        </div>
    </section>

@endsection
@section('modal')
    <div class="modal fade" id="payment_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-0 b-0">
                <div class="panel panel-color panel-primary">
                    <div class="modal-header">
                        <h5 class="modal-title" id="common-modal-title">{{ __('Payment Status Update') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
                </div>
                <form action="{{ route('order.payment.status.change') }}" method="post">
                    @csrf
                    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">

                        <input type="hidden" name="id" value="{{ $order->id }}">
                        <input type="hidden" name="payment_status" value="paid">
                        <div class="form-group align-items-center">
                            <label for="order_no" class="form-control-label">{{ __('Order No') }}</label>
                            <input type="text" id="order_no" value="{{ $order->code }}" name="order_no"
                                   class="form-control" readonly="" disabled="">
                        </div>
                        <div class="form-group align-items-center">
                            <label for="total_payable" class="form-control-label"></label>
                            <input type="text" id="total_payable" value="{{ get_price($order->total_payable,user_curr()) }}"
                                   class="form-control" readonly="" disabled="">
                        </div>
                        <div class="form-group">
                            <label for="payment_type">{{ __('Paid by') }}</label>
                            <select class="form-control selectric" name="payment_type" id="payment_type">
                                <option value="cash">{{ __('Cash') }}</option>
                                <option value="wallet">{{ __('Wallet') }}</option>
                            </select>
                        </div>
                        <div class="form-group" id="modal_payment_type">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" name="paid_to_delivery_man" class="custom-control-input"
                                       tabindex="3" id="paid-to-delivery-man">
                                <label class="custom-control-label"
                                       for="paid-to-delivery-man">{{ __('Paid to delivery man') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer modal-padding-bottom">
                        <button type="submit" class="btn btn-outline-primary">{{ __('Submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
