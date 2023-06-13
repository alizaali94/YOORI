@extends('admin.partials.master')
@section('title')
    {{ __('Offline Payment Methods') }}
@endsection
@section('offline_payment')
    active
@endsection
@section('offline_wallet_recharge')
    active
@endsection
@php
    $s                  = isset($_GET['s']) ? $_GET['s'] : null;
    $q                  = isset($_GET['q']) ? $_GET['q'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Offline Wallet Recharge') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $recharge_history->total() . ' ' . __('items') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                    <div class="card-header justify-content-between">
                        <h4>{{ __('Recharge History') }}</h4>
                        <div class="card-header-form">
                            <form class="form-inline" id="sorting">
                                <div class="form-group">
                                    <select class="form-control selectric sorting" name="s">
                                        <option value="" selected>{{ __('Filter By Status') }}</option>
                                        <option
                                            value="pending" {{ $s == 'pending' ? 'selected' : '' }} >{{ __('Pending Request') }}</option>
                                        <option
                                            value="approved" {{ $s == 'approved' ? 'selected' : '' }} >{{ __('Approved Request') }}</option>
                                        <option
                                            value="rejected" {{ $s == 'rejected' ? 'selected' : '' }} >{{ __('Rejected Request') }}</option>
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
                                    <th>{{ __('User') }}</th>
                                    <th>{{ __('Date') }}</th>
                                    <th>{{ __('Payment Method') }}</th>
                                    <th>{{ __('Amount') }}</th>
                                    <th>{{ __('TNX ID') }}</th>
                                    <th>{{ __('Image') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if (hasPermission('wallet_recharge_update'))
                                        <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($recharge_history as $key => $history)
                                    <tr id="row_{{ $history->id }}" class="table-data-row">
                                        <td>{{ $recharge_history->firstItem() + $key  }}</td>
                                        <td>
                                            <div class="d-flex">
                                                <figure class="avatar mr-2">
                                                    @if ($history->user->images != [] && is_file_exists($history->user->images['image_40x40'],$history->user->images['storage']))
                                                        <img
                                                            src="{{ get_media($history->user->images['image_40x40'],$history->user->images['storage']) }}"
                                                            alt="{{ $history->user->first_name }}">
                                                    @else
                                                        <img
                                                            src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                            alt="{{ $history->user->first_name }}">
                                                    @endif
                                                    @if(\Illuminate\Support\Facades\Cache::has('user-is-online-' . $history->user->id))
                                                        <i class="avatar-presence online"></i>
                                                    @else
                                                        <i class="avatar-presence offline"></i>
                                                    @endif
                                                </figure>
                                                <div class="ml-1">
                                                    {{ $history->user->full_name }}<br/>
                                                    @if(\Cartalyst\Sentinel\Laravel\Facades\Activation::completed($history->user) == true)
                                                        <i class='bx bx-check-circle text-success'></i> {{ $history->user->email }}
                                                    @else
                                                        <i class='bx bx-x-circle text-warning'></i> {{ $history->user->email }}
                                                    @endif
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {{ date('M d, Y h:i a', strtotime($history->created_at)) }}
                                        </td>
                                        <td>
                                            {{ $history->payment_method }}
                                        </td>
                                        <td>
                                            {{ get_price($history->amount,user_curr()) }}
                                        </td>
                                        <td>
                                            {{ $history->transaction_id }}
                                        </td>
                                        <td>
                                            @if ($history->image != [] && is_file_exists($history->image['original_image'], $history->image['storage']))
                                                <a href="{{ get_media($history->image['original_image'], $history->image['storage']) }}"
                                                   target="_blank">
                                                    <img
                                                        src="{{ get_media($history->image['original_image'], $history->image['storage']) }}"
                                                        alt="{{ $history->transaction_id }}"
                                                        class="mr-3 rounded">
                                                </a>
                                            @else
                                                {{ __('Not Available') }}
                                            @endif
                                        </td>
                                        <td>
                                            {{ __($history->status) }}
                                        </td>
                                        @if (hasPermission('wallet_recharge_update'))
                                            <td>
                                                @if($history->status == 'pending' || $history->status == 'rejected')
                                                    <a href="javascript:void(0)"
                                                       onclick="process_payment('{{ route('admin.approved.wallet.recharge',$history->id) }}')"
                                                       class="btn btn-outline-primary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Approve') }}">
                                                        <i class="bx bx-check"></i>
                                                    </a>
                                                @endif
                                                @if($history->status == 'pending' || $history->status == 'approved')
                                                    <a href="javascript:void(0)"
                                                       onclick="process_payment('{{ route('admin.reject.wallet.recharge',$history->id) }}')"
                                                       class="btn btn-outline-danger btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Reject') }}">
                                                        <i class="bx bx-x"></i>
                                                    </a>
                                                @endif
                                            </td>
                                        @endif
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav class="d-inline-block">
                            {{ $recharge_history->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.process-refund-ajax')
@include('admin.common.delete-ajax')

