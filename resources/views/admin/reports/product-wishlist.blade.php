@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('product_wishlist')
    active
@endsection
@section('title')
    {{ __('Product Wishlist') }}
@endsection
@php
    $c                  = isset($_GET['c']) ? $_GET['c'] : null;
    $q                  = isset($_GET['q']) ? $_GET['q'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('Product Wishlist Report') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-body">
                            <form class="" id="sorting">
                                <div class="form-row">
                                    <div class="form-group col-sm-xs-12 col-md-5">
                                        <label for="category">{{ __('Filter by Category') }}</label>
                                        <select class="form-control selectric sorting" name="c" id="category">
                                            <option value="">{{ __('Filter by Category') }}</option>
                                            @foreach($categories as $category)
                                                <option
                                                    {{ @$c == "$category->id" ? "selected" : "" }} value="{{$category->id}}">{{$category->getTranslation('title',\App::getLocale())}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group col-sm-xs-12 col-md-5">
                                        <label for="category">{{ __('Filter by Product') }}</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="q" value="{{ @$q }}" placeholder="{{ __('Search') }}">
                                        </div>
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
                            <h4>{{ __('Product Wishlist') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Product Name') }}</th>
                                        <th>{{ __('Category') }}</th>
                                        <th>{{ __('Total Wish') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($wishlist as $key => $value)
                                        @php
                                        $product = $value->product;
                                        @endphp
                                        <tr>
                                            <td>{{ $wishlist->firstItem() + $key }}</td>
                                            <td width="300">
                                                <div class="d-flex">
                                                    <div class="text-left">
                                                        @if ($product->thumbnail != [] && @is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage']))
                                                            <img
                                                                src="{{ get_media($product->thumbnail['image_40x40'], $product->thumbnail['storage']) }}"
                                                                alt="{{ $product->getTranslation('name',\App::getLocale()) }}"
                                                                class="mr-3 rounded">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                alt="{{ $product->getTranslation('name',\App::getLocale()) }}"
                                                                class="mr-3 rounded">
                                                        @endif
                                                    </div>

                                                    <div class="ml-1">
                                                        @if(isAppMode())
                                                            <a href="#">{{ $product->getTranslation('name', \App::getLocale()) }}</a>
                                                        @else
                                                            <a href="{{ route('product-details',$product->slug) }}" target="_blank">{{ $product->getTranslation('name', \App::getLocale()) }}</a>
                                                        @endif
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $value->product->category->getTranslation('title',\App::getLocale())}}</td>
                                            <td>{{ $value->total_wish }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $wishlist->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('script')
    <script type="text/javascript">
        $(function () {
            $('.daterange-cus').daterangepicker({
                autoUpdateInput: false,
                timePicker: true,
                minDate: moment(),
                locale: {
                    cancelLabel: '{{ __('Clear') }}',
                    format: 'M-DD-YYYY hh:mm A'
                }
            });
            $('.daterange-cus').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
            });
            $('.daterange-cus').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });

        });
    </script>
@endpush

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('page-script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
@endpush
@push('script')
    <script type="text/javascript">
        $(function () {
            $('.daterange-cus').daterangepicker({
                autoUpdateInput: false,
                timePicker: true,
                minDate: moment(),
                locale: {
                    cancelLabel: '{{ __('Clear') }}',
                    format: 'M-DD-YYYY hh:mm A'
                }
            });
            $('.daterange-cus').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
            });
            $('.daterange-cus').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });

        });
    </script>
@endpush
