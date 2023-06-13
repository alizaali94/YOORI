@extends('admin.partials.master')
@section('title')
    {{ __('Seller Payout Request') }}
@endsection
@section('sellers_active')
    active
@endsection
@section('payout_requests_active')
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
                                        <th>{{ __('Account Details') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        @if (hasPermission('seller_payout_reject') || hasPermission('seller_payout_accept'))
                                            <th>{{ __('Option') }}</th>
                                        @endif
                                    </tr>
                                    @foreach($payouts as $key => $value)
                                        <tr id="{{ $key }}">
                                            <td> {{ $value->id }} </td>
                                            <td>
                                                <a target="{{ isAppMode() ? '_parent' : '_blank'}}" href="{{ isAppMode() ? '#' : route('frontend.shop', $value->user->sellerProfile->slug) }}">  {{ @$value->user->sellerProfile->shop_name }}</a>
                                            </td>
                                            <td> {{ $value->amount }} </td>
                                            <td> {{ $value->message }}</td>
                                            <td>
                                                @if(isset($value->payment_to['paypal_email']))
                                                    <span>{{ __('Paypal Email'). ' : ' .$value->payment_to['paypal_email'] }}</span>
                                                @elseif(isset($value->payment_to['bank_name']) == 'cash')
                                                    <span>{{ $value->payment_to['bank_name']}}</span>
                                                @else
                                                    <span>{{ __('Bank Name'). ' : ' .@$value->payment_to['bank_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Owner Name'). ' : ' .@$value->payment_to['owner_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Phone No'). ' : ' .@$value->payment_to['bank_phone_no'] }}</span>
                                                    <br>
                                                    <span>{{ __('Branch Name'). ' : ' .@$value->payment_to['branch'] }}</span>
                                                @endif
                                            </td>
                                            <td style="color:{{ $value->status == 'pending' ? '#FFCB31' : ($value->status == 'accepted' ? '#008000' : ($value->status == 'processed' ? '#A9A9A9' : '#ff0000')) }}"> {{ $value->status == 'pending' ? __('Pending') : ($value->status == 'accepted' ? __('Accepted') : ($value->status == 'processed' ? __('Processed') :__('Rejected'))) }} </td>
                                            <td>
                                                @if($value->status == 'accepted')
                                                    @if(hasPermission('seller_payout_accept'))
                                                        <a href=""
                                                           class="btn btn-outline-info btn-circle" data-toggle="modal"
                                                           title="" data-target="#exampleModal"
                                                           data-original-title="{{ __('Processed Now') }}"><i
                                                                class='bx bx-money'></i>
                                                        </a>
                                                        <a href="{{ route('payout.reject',$value->id) }}"
                                                           class="btn btn-outline-danger btn-circle disabled"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Reject') }}"><i
                                                                class='bx bx-x'></i>
                                                        </a>
                                                    @endif
                                                @else
                                                    @if(hasPermission('seller_payout_accept'))
                                                        <a href="{{ route('payout.accept',$value->id) }}"
                                                           class="btn btn-outline-primary btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Accept') }}"><i
                                                                class='bx bx-check'></i>
                                                        </a>
                                                    @endif
                                                    @if(hasPermission('seller_payout_reject'))
                                                        <a href="{{ route('payout.reject',$value->id) }}"
                                                           class="btn btn-outline-danger btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Reject') }}"><i
                                                                class='bx bx-x'></i>
                                                        </a>
                                                    @endif
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
                                {{ $payouts->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{ __('Processed Payout Request') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>

                <form action="{{ route('payout.processed') }}" method="POST">
                    @csrf
                    <div class="modal-body" style="overflow-y: unset">
                        <div class="form-group">
                            <label for="">{{__('Select Account Type')}}</label>
                            <select name="type" class="form-control selectric">
                                <option value="">{{__('Select Account Type')}}</option>
                                <option value="cash">{{__('Cash')}}</option>
                                @foreach($payment_types as $key=> $type)
                                    <option value="{{$type}}">{{$type == 'is_paypal_activated' ? 'Paypal' : ($type == 'is_stripe_activated' ? 'Stripe' :  ($type == 'is_sslcommerz_activated' ? 'SSL COMMERZE' : ($type == 'is_paytm_activated' ? 'paytm' : ($type == 'is_2checkout_activated' ? '2checkout' : ($type == 'is_paystack_activated' ? 'paystack' : ($type == 'is_razorpay_activated' ? 'razorpay' : ''))))))}}</option>
                                @endforeach
                            </select>
                            @if ($errors->has('type'))
                                <div class="invalid-feedback">
                                    <p>{{ $errors->first('type') }}</p>
                                </div>
                            @endif
                            <input type="hidden" name="payout_id" value="{{@$value->id}}"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@include('admin.common.delete-ajax')
