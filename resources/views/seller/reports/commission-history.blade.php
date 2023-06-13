@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('commission_history')
    active
@endsection
@section('title')
    {{ __('Commission History') }}
@endsection
@php
    $dt                 = isset($_GET['dt']) ? $_GET['dt'] : null;
    $s                  = isset($_GET['s']) ? $_GET['s'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('Commission History Report') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-body">
                            <form class="" id="sorting">
                                <div class="form-row">
                                    <div class="form-group col-sm-xs-12 col-md-8">
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
                            <h4>{{ __('Commission History') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Order Code') }}</th>
                                        <th>{{ __('Seller') }}</th>
                                        <th>{{ __('	Admin Commission') }}</th>
                                        <th>{{ __('	Seller Earning') }}</th>
                                        <th>{{ __('Created At') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($commissions as $key => $commission)
                                        <tr>
                                            <td>{{ $commissions->firstItem() + $key }}</td>
                                            <td>{{ $commission->order->code }}</td>
                                            <td>
                                                @if(isset($commission->sellerProfile))
                                                    {{ $commission->sellerProfile->shop_name }}
                                                @endif
                                            </td>
                                            <td>{{ $commission->admin_commission }}</td>
                                            <td>{{ get_price($commission->seller_earning,user_curr()) }}</td>
                                            <td>{{ \Carbon\Carbon::parse($commission->created_at)->isoFormat('MMM Do YY, h:mm a') }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $commissions->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker_customs.js') }}"></script>

<script type="text/javascript">
    $(document).ready(function () {
        $('.seller-by-ajax').select2({
            placeholder: "{{ __('Select Seller') }}",
            minimumInputLength: 2,
            ajax: {
                type: "GET",
                dataType: 'json',
                url: '{{ route('admin.seller.by.ajax') }}',
                data: function (params) {
                    return {
                        q: params.term // search term
                    };
                },
                delay: 250,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            }
        });
    });
</script>
@endpush
