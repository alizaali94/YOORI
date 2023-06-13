@extends('admin.partials.master')
@section('title')
    {{ __('Campaign Product Request') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('campaign')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Campaign Product Request') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $products->total() . ' ' . __('request') }}
                    </p>
                </div>
                <div class="buttons add-button">
                    <a href="{{ route('campaign') }}" class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Campaign Product Request') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Campaign') }}</th>
                                    <th>{{ __('Seller Name') }}</th>
                                    <th>{{ __('Shop Name') }}</th>
                                    <th>{{ __('Product') }}</th>
                                    <th>{{ __('Discount') }}</th>
                                    <th>{{ __('Discount Type') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if(hasPermission('campaign_product_update'))
                                        <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($products as $key => $value)
                                    <tr id="row_{{ $value->id }}" class="table-data-row">
                                        <td>{{ $products->firstItem() + $key  }}</td>
                                        <td>
                                            <a href="{{ isAppMode() ? '#' : route('campaign.details',$value->campaign->slug) }}"
                                               target="{{isAppMode() ? '_parent' : '_blank'}}">{{ $value->campaign->getTranslation('title', \App::getLocale()) }}</a>
                                        </td>

                                        <td>
                                            <a target="_blank" href="{{ route('admin.seller.edit', $value->user_id) }}"
                                               data-toggle="tooltip" title=""
                                               data-original-title="{{ __('Edit') }}">
                                                {{ $value->user->full_name }}
                                            </a>
                                        </td>
                                        <td>
                                            <a target="{{isAppMode() ? '_parent' : '_blank'}}"
                                               href="{{ isAppMode() ? '#' : route('frontend.shop', $value->user->sellerProfile->slug) }}">{{ @$value->user->sellerProfile->shop_name }}
                                            </a>
                                        </td>
                                        <td>
                                            <a href="{{ route('product-details',$value->product->slug) }}" target="_blank">{{ $value->product->getTranslation('name', \App::getLocale()) }}</a>
                                        </td>
                                        <td> {{ $value->discount }} </td>
                                        <td> {{ $value->discount_type }} </td>
                                        <td>
                                            <div class="d-flex">
                                                <div class="mt-1 badge badge-pill {{ $value->status == 'pending' ? 'badge-warning' : ($value->status == 'accepted' ? 'badge-success' : 'badge-danger') }}">
                                                    {{ $value->status == 'pending' ? __('Pending') : ($value->status == 'accepted' ? __('Accepted') :__('Rejected')) }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            @if(hasPermission('campaign_product_update'))
                                                <a href="javascript:void(0)" data-toggle="dropdown"
                                                   class="btn btn-outline-secondary btn-circle" title=""
                                                   data-original-title="{{ __('Options') }}">
                                                    <i class='bx bx-dots-vertical-rounded'></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    @if($value->status == 'rejected')
                                                        <a href="{{ route('campaign.product.request.status',['id' => $value->id,'status' =>'pending', 'campaign_id' => $value->campaign_id]) }}"
                                                           class="dropdown-item has-icon">
                                                            <i class='bx bxs-hourglass-top'></i>{{ __('Pending') }}
                                                        </a>
                                                    @endif
                                                    @if($value->status == 'pending' || $value->status == 'rejected')
                                                        <a href="{{ route('campaign.product.request.status',['id' => $value->id,'status' =>'accepted', 'campaign_id' => $value->campaign_id]) }}"
                                                           class="dropdown-item has-icon">
                                                            <i class='bx bx-check'></i>{{ __('Approve') }}</a>
                                                    @endif
                                                    @if($value->status == 'pending' || $value->status == 'accepted')
                                                        <a href="{{ route('campaign.product.request.status',['id' => $value->id,'status' =>'rejected', 'campaign_id' => $value->campaign_id]) }}"
                                                           class="dropdown-item has-icon">
                                                            <i class='bx bx-x'></i>{{ __('Reject') }}
                                                        </a>
                                                    @endif
                                                </div>
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
                            {{ $products->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

