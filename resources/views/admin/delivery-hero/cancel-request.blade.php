@extends('admin.partials.master')

@section('title')
    {{ __('Cancel Request Lists') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('cancel_request')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Cancel order by Delivery Man') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total cancel order') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Cancel order') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Code') }}</th>
                                        <th>{{ __('Cancel By') }}</th>
                                        <th>{{ __('Cancel At') }}</th>
                                        <th>{{ __('Options') }}</th>
                                    </tr>
                                    @foreach($cancelRequests as $key => $order)
                                        <tr id="row_{{ $cancelRequests->firstItem() + $key }}" class="table-data-row">
                                            <td>{{ $cancelRequests->firstItem() + $key }}</td>
                                            <td>{{ $order->code }}</td>
                                            <td>
                                                @if(!blank($order->deliveryHero))
                                                {{ $order->deliveryHero->user->first_name.' '. $order->deliveryHero->user->last_name }}
                                                @endif
                                            </td>
                                            <td>{{ \Carbon\Carbon::parse($order->cancel_request_at)->isoFormat('MMM Do YY, h:mm a') }}</td>
                                            <td>
                                                @if(hasPermission('order_view'))
                                                    <a href="{{ route('order.view',$order->id) }}"
                                                       class="btn btn-outline-info btn-circle" data-url=""
                                                       data-toggle="tooltip" title="" data-original-title="{{ __('View') }}">
                                                        <i class="bx bx-show"></i>
                                                    </a>
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
                                {{ $cancelRequests->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
