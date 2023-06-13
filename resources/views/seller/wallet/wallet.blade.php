@extends('admin.partials.master')
@section('title')
    {{ __('Seller Wallet') }}
@endsection
@section('seller_wallet')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Wallet Transactions History') }}</h2>
                    <p class="section-lead">
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="card-header justify-content-between">
                            <div>
                                <h4>{{ __('History') }}</h4>
                            </div>
                            <div class="alert alert-light alert-dismissible show fade wallet-height">
                                <div class="alert-body">
                                    {{get_price(\Sentinel::getUser()->balance,user_curr())}}
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Date') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Type') }}</th>
                                        <th>{{ __('Source') }}</th>
                                        <th>{{ __('Payment Method') }}</th>
                                        <th>{{ __('Payment Details') }}</th>
                                    </tr>
                                    @foreach($wallets as $key => $value)
                                        <tr id="{{ $key}}">
                                            <td>{{ $wallets->firstItem() + $key }}</td>
                                            <td> {{ \Carbon\Carbon::parse($value->created_at)->toDayDateTimeString() }}</td>
                                            <td> {{ $value->amount }} </td>
                                            <td> {{ $value->type }}</td>
                                            <td> {{ $value->source }}</td>
                                            <td> {{ $value->payment_method }}</td>
                                            <td>
                                                @if(isset($value->payment_details['paypal_email']))
                                                    <span>{{ __('Paypal Email'). ' : ' .$value->payment_details['paypal_email'] }}</span>
                                                @elseif(isset($value->payment_details['bank_name']) == 'cash')
                                                    <span> {{ __('Cash') }}</span>
                                                @elseif(isset($value->payment_details['type']) == 'system_automated')
                                                    <span>{{__('System Automated') }}</span>
                                                @elseif(isset($value->payment_details) && $value->payment_details != [])
                                                    <span>{{ __('Bank Name'). ' : ' .@$value->payment_details['bank_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Owner Name'). ' : ' .@$value->payment_details['owner_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Phone No'). ' : ' .@$value->payment_details['bank_phone_no'] }}</span>
                                                    <br>
                                                    <span>{{ __('Branch Name'). ' : ' .@$value->payment_details['branch'] }}</span>
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
                                {{ $wallets->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
