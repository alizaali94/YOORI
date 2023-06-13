@extends('admin.partials.master')
@section('title')
    {{ __('Campaign products') }}
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
                    <h2 class="section-title">{{ __('Campaign Products') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $products->count() . ' ' . __('campaign product') }}
                    </p>
                </div>
                <div class="buttons add-button">
                    <a href="{{ route('campaign') }}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-8 middle">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Campaign Products') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Product') }}</th>
                                    <th>{{ __('Discount') }}</th>
                                    <th>{{ __('Discount Type') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    <th>{{ __('Options') }}</th>
                                </tr>
                                @foreach ($products as $key => $product)
                                    <tr id="row_{{ $product->id }}" class="table-data-row">
                                        <td>{{ $key + 1  }}</td>
                                        <td>{{ $product->product->getTranslation('name', \App::getLocale())  }}</td>
                                        <td>{{ get_price($product->discount,user_curr())  }}</td>
                                        <td>{{ $product->discount_type  }}</td>
                                        <td>
                                            <div class="d-flex">
                                                <div class="mt-1 badge badge-pill {{ $product->status == 'pending' ? 'badge-warning' : ($product->status == 'accepted' ? 'badge-success' : 'badge-danger') }}">
                                                    {{ $product->status == 'pending' ? __('Pending') : ($product->status == 'accepted' ? __('Accepted') :__('Rejected')) }}
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <a href="javascript:void(0)"onclick="delete_row('delete/campaign_products/',{{ $product->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""data-original-title="{{ __('Delete') }}">
                                                <i class='bx bx-trash'></i>
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
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

@push('script')
    <script type="text/javascript" src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
@endpush
