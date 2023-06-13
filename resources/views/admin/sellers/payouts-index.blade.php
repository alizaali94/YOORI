@extends('admin.partials.master')
@section('title')
    {{ __('Seller Payout') }}
@endsection
@section('sellers_active')
    active
@endsection
@section('payouts_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Seller Payouts') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $payouts->total() . ' ' . __('payouts') }}
                    </p>
                </div>
            </div>
            @php
                $total         = App\Models\SellerPayout::count();
                $processed         = App\Models\SellerPayout::where('status','processed')->count();
                $accepted      = App\Models\SellerPayout::where('status','accepted')->count();
                $pending       = App\Models\SellerPayout::where('status','pending')->count();
                $rejected          = App\Models\SellerPayout::where('status','rejected')->count();
                $canceled          = App\Models\SellerPayout::where('status','canceled')->count();

            @endphp
            <div class="row">
                <div class="col-12">
                    <div class="card mb-0">
                        <div class="card-body">
                            <form id="my_form" method="get" action="">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === null  ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts')}}">{{__('All')}} <span
                                                class="badge badge-primary">{{$total}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'processed' ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts','processed')}}">{{__('Processed')}}
                                            <span class="badge badge-primary">{{$processed}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'accepted' ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts','accepted')}}">{{__('Accepted')}} <span
                                                class="badge badge-primary">{{$accepted}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'pending' ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts','pending')}}">{{__('Pending')}} <span
                                                class="badge badge-primary">{{$pending}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  {{ $status === 'rejected' ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts','rejected')}}">{{__('Rejected')}} <span
                                                class="badge badge-primary">{{$rejected}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'canceled' ? 'active' : '' }}"
                                           href="{{route('admin.seller.payouts','canceled')}}">{{__('Canceled')}} <span
                                                class="badge badge-primary">{{$canceled}}</span></a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Seller Payouts') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Seller') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Message') }}</th>
                                        <th>{{ __('Payment By') }}</th>
                                        <th>{{ __('Payment To') }}</th>
                                        <th>{{ __('Payment From') }}</th>
                                        <th>{{ __('Status') }}</th>
                                    </tr>
                                    @foreach($payouts as $key => $value)
                                        @if($value->status != 'canceled')
                                            <tr id="{{ $key }}">
                                                <td> {{ $value->id }} </td>
                                                <td>
                                                    <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $value->user->sellerProfile->slug) }}">  {{ @$value->user->sellerProfile->shop_name }}</a>
                                                </td>
                                                <td> {{ @$value->amount }} </td>
                                                <td> {{ @$value->message }}</td>
                                                <td> {{ @$value->payment_by == '' ? '...' : $value->payment_by }}</td>
                                                <td>
                                                    @if(isset($value->payment_to) != '')
                                                        @if(isset($value->payment_to['paypal_email']))
                                                            <span>{{ __('Paypal Email'). ' : ' .$value->payment_to['paypal_email'] }}</span>
                                                        @elseif(isset($value->payment_to['bank_name']) == 'cash')
                                                            <span>{{ $value->payment_to['bank_name']}}</span>
                                                        @elseif(isset($value->payment_to))
                                                            <span>{{ __('Bank Name'). ' : ' .@$value->payment_to['bank_name'] }}</span>
                                                            <br>
                                                            <span>{{ __('Owner Name'). ' : ' .@$value->payment_to['owner_name'] }}</span>
                                                            <br>
                                                            <span>{{ __('Phone No'). ' : ' .@$value->payment_to['bank_phone_no'] }}</span>
                                                            <br>
                                                            <span>{{ __('Branch Name'). ' : ' .@$value->payment_to['branch'] }}</span>
                                                        @endif
                                                    @else
                                                        {{'...'}}
                                                    @endif

                                                </td>
                                                <td>
                                                    @if(isset($value->payment_from) != '')
                                                        @if(isset($value->payment_from['paypal_email']))
                                                            <span>{{ __('Paypal Email'). ' : ' .$value->payment_from['paypal_email'] }}</span>
                                                        @elseif(isset($value->payment_from['bank_name']) == 'cash')
                                                            <span>{{ $value->payment_from['bank_name']}}</span>
                                                        @elseif(isset($value->payment_from))
                                                            <span>{{ __('Bank Name'). ' : ' .@$value->payment_from['bank_name'] }}</span>
                                                            <br>
                                                            <span>{{ __('Owner Name'). ' : ' .@$value->payment_from['owner_name'] }}</span>
                                                            <br>
                                                            <span>{{ __('Phone No'). ' : ' .@$value->payment_from['bank_phone_no'] }}</span>
                                                            <br>
                                                            <span>{{ __('Branch Name'). ' : ' .@$value->payment_from['branch'] }}</span>
                                                        @endif
                                                    @else
                                                        {{'...'}}
                                                    @endif
                                                </td>

                                                <td style="color:{{ $value->status == 'pending' ? '#FFCB31' : ($value->status == 'accepted' ? '#008000' : ($value->status == 'processed' ? '#A9A9A9' : '#ff0000')) }}"> {{ $value->status == 'pending' ? __('Pending') : ($value->status == 'accepted' ? __('Accepted') : ($value->status == 'processed' ? __('Processed') :__('Rejected'))) }} </td>
                                            </tr>
                                        @endif
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $payouts->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection @include('admin.common.delete-ajax')
