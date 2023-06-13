@extends('admin.partials.master')

@section('title')
    {{ __('Deposit History Lists') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('deposit_history')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Deposit History List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total Deposit History') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Deposit History') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Delivery Man') }}</th>
                                        <th>{{ __('Deposit Amount') }}</th>
                                        <th>{{ __('Collected at') }}</th>
                                    </tr>
                                    @foreach($depositHistory as $key => $collection)
                                        <tr id="row_{{ $depositHistory->firstItem() + $key }}" class="table-data-row">
                                            <td>{{ $depositHistory->firstItem() + $key }}</td>
                                            <td>
                                                <a href="{{ route('delivery.hero.edit', $collection->deliveryHero->id) }}"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Edit') }}">{{ $collection->deliveryHero->user->first_name.' '.$collection->deliveryHero->user->last_name }}</a>
                                            </td>
                                            <td>{{ get_price(priceFormatUpdate($collection->amount,settingHelper('default_currency'),"*"),user_curr()) }}</td>
                                            <td>{{ \Carbon\Carbon::parse($collection->created_at)->isoFormat('MMM Do YY, h:mm a') }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $depositHistory->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
