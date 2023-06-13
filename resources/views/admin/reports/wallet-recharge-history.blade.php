@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('wallet_recharge_history')
    active
@endsection
@section('title')
    {{ __('Wallet Transaction') }}
@endsection
@php
    $dt                 = isset($_GET['dt']) ? $_GET['dt'] : null;
    $u                  = isset($_GET['u']) ? $_GET['u'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('Wallet Transaction Report') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-body">
                            <form class="" id="sorting">
                                <div class="form-row">
                                    <div class="form-group col-sm-xs-12 col-md-5">
                                        <label for="u">{{ __('Filter by User') }}</label>
                                        <select class="all-user-by-ajax form-control select2" name="u" id ="u"  aria-hidden="true" >
                                            <option value="">{{ __('Filter By User') }}</option>
                                            @if(isset($u))
                                                <option selected value="{{ @$u }}"> {{ @$selected_user->first_name.' '. @$selected_user->last_name .' - '. @$selected_user->phone }} </option>
                                            @endif
                                        </select>
                                    </div>
                                    <div class="form-group col-sm-xs-12 col-md-5">
                                        <label for="time_period">{{ __('Filter by Date Range') }}</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="bx bx-calendar"></i>
                                                </div>
                                            </div>
                                            <input type="text" name="dt" id="dt"
                                                   value="{{ @$dt }}"
                                                   placeholder="{{ __('Filter by Date Range') }}"
                                                   class="form-control reportrange">
                                        </div>
                                        @if ($errors->has('dt'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('dt') }}</p>
                                            </div>
                                        @endif
                                    </div>

                                    <div class="form-group col-sm-xs-12 col-md-2 mt-2">
                                        <label for=""></label>
                                        <button type="submit" class="btn btn-outline-primary form-control">{{__('Filter')}}</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Wallet Transaction') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('User') }}</th>
                                        <th>{{ __('Phone No') }}</th>
                                        <th>{{ __('Date') }}</th>
                                        <th>{{ __('Source') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Payment Method') }}</th>
                                        <th>{{ __('Approval') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($walletRechargeHistory as $key => $value)
                                        <tr>
                                            <td> {{ $walletRechargeHistory->firstItem() + $key  }} </td>
                                            <td><a href="javascript:void(0)" class="modal-menu" data-title="{{__('Profile')}}"
                                                   data-url="{{ route('edit-info', ['page_name' => 'customer-profile', 'param1' => $value->user_id]) }}"
                                                   data-toggle="modal" data-target="#common-modal">{{ $value->user->full_name }}</a></td>
                                            <td>{{ isDemoServer() ? Str::of($value->user->phone)->mask('*', 0, strlen($value->user->phone)-3) : $value->user->phone }}</td>
                                            <td>{{ \Carbon\Carbon::parse($value->created_at)->isoFormat('MMM Do YY, h:mm a') }}</td>
                                            <td>{{ $value->source }}</td>
                                            <td>{{ get_price($value->amount,user_curr()) }}</td>
                                            <td>{{ $value->payment_method }}</td>
                                            <td>
                                                @if(isset($value->payment_details['paypal_email']))
                                                    <span>{{ __('Paypal Email'). ' : ' .$value->payment_details['paypal_email'] }}</span>
                                                @elseif(isset($value->payment_details['bank_name']) == 'cash')
                                                    <span>{{ $value->payment_details['bank_name']}}</span>
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
                                {{ $walletRechargeHistory->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('admin.common.common-modal')

@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker_customs.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
