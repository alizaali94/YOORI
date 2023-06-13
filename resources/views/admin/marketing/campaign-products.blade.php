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
                        {{ __('You have total') . ' ' . $campaignByLang->campaign->campaignProducts->count() . ' ' . __('campaign product') }}
                    </p>
                </div>
                <div class="buttons add-button">
                    <a href="{{ route('campaign') }}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="{{ hasPermission('campaign_product_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
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
                                    @if(hasPermission('campaign_product_delete'))
                                    <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($campaignByLang->campaign->campaignProducts as $key => $product)
                                    <tr id="row_{{ $product->id }}" class="table-data-row">
                                        <td>{{ $key + 1  }}</td>
                                        <td>{{ $product->product->getTranslation('name', \App::getLocale())  }}</td>
                                        <td>{{ $product->discount  }}</td>
                                        <td>{{ $product->discount_type  }}</td>

                                        <td>
                                            @if(hasPermission('campaign_product_delete'))
                                            <a href="javaScript:void(0)"onclick="delete_row('delete/campaign_products/',{{ $product->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""data-original-title="{{ __('Delete') }}">
                                                <i class='bx bx-trash'></i>
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
                        </nav>
                    </div>
                </div>
            </div>
            @if(hasPermission('campaign_product_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card" >
                        <div class="card-header input-title">
                            <h4>{{ __('Add Campaign Product') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{ route('campaign.product.store') }}" enctype="multipart/form-data">
                                @csrf

                                <div class="form-group" >
                                    <label for="product_id">{{ __('Campaign') }}</label>
                                    <input value="{{ $campaignByLang->title }}" name="campaign"  type="text" readonly class="form-control" >
                                    <input value="{{ $campaignByLang->campaign_id }}" name="campaign_id" type="hidden" class="form-control" >
                                    <input type="hidden"
                                        value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                        name="r">
                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="product_id">{{ __('Product') }}</label>

                                    <select class="product-by-ajax form-control select2" id ="product_id" name="product_id" aria-hidden="true" ></select>

                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <table class="table col-12">
                                    <tr>
                                        <td width="30%" class="pl-0 pr-0">
                                            <label for="default_language">{{ __('Discount Type') }}</label>
                                            <select class="form-control selectric" name="discount_type" data-title="discount_type" id="discount_type" required>
                                                <option value="amount">{{ __('Amount') }}</option>
                                                <option value="percentage">{{ __('Percentage') }}</option>
                                            </select>
                                            @if ($errors->has('discount_type'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount_type') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                        <td width="70%" class="pl-0 pr-0">
                                            <label for="discount">{{ __('Discount') }}</label>
                                            <input type="number" step="any" name="discount" min="0" id="discount" value="{{ old('discount') }}" class="form-control" required>
                                            @if ($errors->has('discount'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                    </tr>
                                </table>

                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript">
        $(function() {
            $('.daterange-cus').daterangepicker({
                autoUpdateInput: false,
                timePicker: true,
                minDate: moment(),
                locale: {
                    cancelLabel: '{{ __('Clear') }}',
                    format: 'M-DD-YYYY hh:mm A'
                }
            });
            $('.daterange-cus').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
            });
            $('.daterange-cus').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

        });
    </script>
@endpush
@push('script')
    <script type="text/javascript">
        $(document).ready(function () {
            $('.product-by-ajax').select2({
                placeholder: "{{ __('Select Product') }}",
                minimumInputLength: 2,
                closeOnSelect: false,
                ajax: {
                    type: "GET",
                    dataType: 'json',
                    url: '{{ route('product.by.ajax') }}',
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
