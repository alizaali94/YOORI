@extends('admin.partials.master')

@section('title')
    {{ __('Commission History List') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('delivery_hero_commission_history')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Commission History List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total Commission History') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Commission History') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Delivery Man') }}</th>
                                        <th>{{ __('Commission Amount') }}</th>
                                        <th>{{ __('Created At') }}</th>
                                    </tr>
                                    @foreach($commissionHistory as $key => $commission)
                                        <tr id="row_{{ $commissionHistory->firstItem() + $key }}" class="table-data-row">
                                            <td>{{ $commissionHistory->firstItem() + $key }}</td>
                                            <td>
                                                <a href="{{ route('delivery.hero.edit', $commission->deliveryHero->id) }}"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Edit') }}">{{ $commission->deliveryHero->user->first_name.' '.$commission->deliveryHero->user->last_name }}</a>
                                            </td>
                                            <td>{{ get_price(priceFormatUpdate($commission->amount,settingHelper('default_currency'),"*"),user_curr()) }}</td>
                                            <td>{{ \Carbon\Carbon::parse($commission->created_at)->isoFormat('MMM Do YY, h:mm a') }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $commissionHistory->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
