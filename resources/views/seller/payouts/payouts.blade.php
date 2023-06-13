@extends('admin.partials.master')
@section('title')
    {{ __('Seller Payout') }}
@endsection
@section('payouts')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Payouts') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="" class="btn btn-icon icon-left btn-outline-primary" data-toggle="modal"
                       data-target="#exampleModal">
                        <i class="bx bx-plus"></i> {{ __('Payout Request') }}
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="card-header justify-content-between">
                            <div>
                                <h4>{{ __('Payouts') }}</h4>
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
                                        <th>{{ __('Message') }}</th>
                                        <th>{{ __('Account Details') }}</th>
                                        <th>{{ __('Status') }}</th>

                                        <th>{{ __('Option') }}</th>

                                    </tr>
                                    @foreach($payouts as $key => $value)
                                        <tr id="{{ $key }}">
                                            <td>{{ $payouts->firstItem() + $key }}</td>
                                            <td> {{ \Carbon\Carbon::parse($value->created_at)->toDayDateTimeString() }}</td>
                                            <td> {{ get_price($value->amount,user_curr()) }} </td>
                                            <td> {{ $value->message }}</td>
                                            <td>
                                                @if(isset($value->payment_to['paypal_email']))
                                                    <span>{{ __('Paypal Email'). ' : ' .$value->payment_to['paypal_email'] }}</span>
                                                @elseif(isset($value->payment_to['bank_name']) == 'cash')
                                                    <span>{{ $value->payment_to['bank_name']}}</span>
                                                @else
                                                    <span>{{ __('Bank Name'). ' : ' .$value->payment_to['bank_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Owner Name'). ' : ' .$value->payment_to['owner_name'] }}</span>
                                                    <br>
                                                    <span>{{ __('Phone No'). ' : ' .$value->payment_to['bank_phone_no'] }}</span>
                                                    <br>
                                                    <span>{{ __('Branch Name'). ' : ' .$value->payment_to['branch'] }}</span>
                                                @endif
                                            </td>
                                            <td style="color:{{ $value->status == 'pending' ? '#FFCB31' : ($value->status == 'accepted' ? '#008000' : ($value->status == 'processed' ? '#A9A9A9' : '#ff0000')) }}"> {{$value->status == 'pending' ? __('Pending') : ($value->status == 'accepted' ? __('Accepted') : ($value->status == 'rejected' ? __('Rejected') :  ($value->status == 'processed' ? __('Processed') :__('Canceled'))))}} </td>
                                            <td>
                                                <a href="{{ route('seller.payout.reject',$value->id) }}"
                                                   class="btn btn-outline-danger btn-circle {{ $value->status != 'pending' ? 'disabled' : '' }}"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Reject') }}"><i class='bx bx-x'></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $payouts->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{ __('Send Payout Request') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form action="{{ route('send.payout.request') }}" method="POST">
                    <div class="modal-body">

                        @csrf
                        <div class="form-group">
                            <label for="amount" class="form-control-label">{{ __('Amount') }}</label>
                            <input type="number" step="1" name="amount" class="form-control" id="amount">
                            @if ($errors->has('amount'))
                                <div class="invalid-feedback">
                                    <p>{{ $errors->first('amount') }}</p>
                                </div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-control-label">{{ __('Message') }}</label>
                            <textarea name="message" class="form-control" id="message"> </textarea>
                            @if ($errors->has('message'))
                                <div class="invalid-feedback">
                                    <p>{{ $errors->first('message') }}</p>
                                </div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="">{{__('Select Account Type')}}</label>
                            <select name="account_type_id" class="form-control selectric">
                                <option value="">{{__('Select Account Type')}}</option>
                                <option value="cash">{{__('Cash')}}</option>
                                @foreach($payment_types as $key=> $type)
                                    <option value="{{$type->id}}">{{$type->account_type}}</option>
                                @endforeach
                            </select>
                            @if($errors->has('account_type_id'))
                                <div class="invalid-feedback">
                                    <p>{{ $errors->first('account_type_id') }}</p>
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection @include('admin.common.delete-ajax')
