@extends('admin.partials.master')
@section('title')
    {{ __('All Wallet Request') }}
@endsection
@section('wallet_recharge_request')
    active
@endsection
@section('wallet_recharge_request')
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
                    <h2 class="section-title">{{ __('Wallet Request List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $wallet_recharge_requests->total() . ' ' . __('Requests') }}
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header justify-content-between">
                            <h4>{{ __('All Recharge Request') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="form-group">
                                        <select class="form-control selectric sorting" name="s">
                                            <option value="" selected>{{ __('Filter By Status') }}</option>
                                            <option value="pending" {{ $s == 'pending' ? 'selected' : '' }} >{{ __('Pending Request') }}</option>
                                            <option value="approved" {{ $s == 'approved' ? 'selected' : '' }} >{{ __('Approved Request') }}</option>
                                            <option value="rejected" {{ $s == 'rejected' ? 'selected' : '' }} >{{ __('Rejected Request') }}</option>
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
                                        <th>{{ __('Payment Method') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('TNX ID') }}</th>
                                        <th>{{ __('Image') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        @if(hasPermission('recharge_request_status_update'))
                                        <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>

                                    @foreach ($wallet_recharge_requests as $key => $request)
                                        @php
                                        $user = $request->user;
                                        @endphp
                                        <tr id="row_{{$request->id}}">
                                            <td>{{ $wallet_recharge_requests->firstItem() + $key }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    <figure class="avatar mr-2">
                                                        @if ($request->user->images != [] && is_file_exists($request->user->images['image_40x40'],$request->user->images['storage']))
                                                            <img src="{{ get_media($request->user->images['image_40x40'],$request->user->images['storage']) }}"
                                                                 alt="{{ $request->user->first_name }}">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                                alt="{{ $request->user->first_name }}">
                                                        @endif
                                                        @if(\Illuminate\Support\Facades\Cache::has('user-is-online-' . $request->user->id))
                                                            <i class="avatar-presence online"></i>
                                                        @else
                                                            <i class="avatar-presence offline"></i>
                                                        @endif
                                                    </figure>
                                                    <div class="ml-1">
                                                        <a href="javascript:void(0)" class="modal-menu" data-title="{{__('Profile')}}"
                                                           data-url="{{ route('edit-info', ['page_name' => 'customer-profile', 'param1' => $user->id]) }}"
                                                           data-toggle="modal" data-target="#common-modal">
                                                            {{ $user->full_name }}
                                                        </a>
                                                            <br/>
                                                        @if(\Cartalyst\Sentinel\Laravel\Facades\Activation::completed($user) == true)
                                                            <i class='bx bx-check-circle text-success'></i> <a
                                                                    href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                                                        @else
                                                            <i class='bx bx-x-circle text-warning'></i> <a
                                                                    href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                                                        @endif
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $request->payment_method ? strtoupper(str_replace('_',' ',$request->payment_method)) : '' }}</td>
                                            <td>{{ get_price($request->amount,user_curr()) }}</td>
                                            <td>{{ $request->transaction_id }}</td>
                                            <td>
                                                @if ($request->image != [] && @is_file_exists($request->image['image_40x40'], $request->image['storage']))
                                                    <a href="{{ get_media($request->image['original_image'], $request->image['storage']) }}" target="_blank">
                                                        <img src="{{ get_media($request->image['image_40x40'], $request->image['storage']) }}"
                                                             alt="{{ $request->transaction_id }}"
                                                             class="mr-3 rounded">
                                                    </a>
                                                @else
                                                    {{ __('Not Available') }}
                                                @endif
                                            </td>

                                            <td class=" {{$request->status == 'pending' ? 'text-warning' : ($request->status == 'approved' ? 'text-success' : 'text-danger')}}">
                                                {{ ucfirst($request->status)}}
                                            </td>
                                            @if(hasPermission('recharge_request_status_update'))
                                            <td>
                                                @if($request->status == 'pending' || $request->status == 'rejected')
                                                <a href="javascript:void(0)"
                                                   onclick="process_payment('{{ route('admin.approved.wallet.recharge',$request->id) }}')"
                                                   class="btn btn-outline-primary btn-circle"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Approve') }}">
                                                    <i class="bx bx-check"></i>
                                                </a>
                                                @endif
                                                @if($request->status == 'pending' || $request->status == 'approved')
                                                <a href="javascript:void(0)"
                                                   onclick="process_payment('{{ route('admin.reject.wallet.recharge',$request->id) }}')"
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
                                {{ $wallet_recharge_requests->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.common-modal')
@include('admin.common.process-refund-ajax')

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
