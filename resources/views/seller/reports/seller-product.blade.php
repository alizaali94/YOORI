@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('seller_report_active')
    active
@endsection
@section('title')
    {{ __('Seller Product Sale') }}
@endsection
@php
    $c                = isset($_GET['c']) ? $_GET['c'] : null;
    $dt               = isset($_GET['dt']) ? $_GET['dt'] : null;
    $sl               = isset($_GET['sl']) ? $_GET['sl'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('Seller Product Sale Report') }}
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
                                    <div class="form-group col-sm-xs-12 col-md-4 mr-4">
                                        <label for="category">{{ __('Categories') }}</label>
                                        <select class="form-control selectric sorting" name="c" id="category">
                                            <option value="">{{ __('Filter By Category') }}</option>
                                            @foreach($categories as $category)
                                                <option
                                                    {{ @$c == "$category->id" ? "selected" : "" }} value="{{$category->id}}">{{$category->getTranslation('title',\App::getLocale())}}</option>
                                            @endforeach
                                        </select>
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
                            <h4>{{ __('Seller') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Product Name') }}</th>
                                        <th>{{ __('Shop Name') }}</th>
                                        <th>{{ __('Variant/Stock') }}</th>
                                        <th>{{ __('Category') }}</th>
                                        <th>{{ __('Total Sale') }}</th>
                                        <th>{{ __('Order Amount') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($products as $key => $product)
                                        <tr>
                                            <td>{{ $products->firstItem() + $key }}</td>
                                            <td width="300">
                                                <div class="d-flex">
                                                    <div class="text-left">
                                                        @if ($product->thumbnail != [] && is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage']))
                                                            <img
                                                                src="{{ get_media($product->thumbnail['image_40x40'], $product->thumbnail['storage']) }}"
                                                                alt="{{ $product->name }}"
                                                                class="mr-3 rounded">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                alt="{{ $product->name }}"
                                                                class="mr-3 rounded">
                                                        @endif
                                                    </div>

                                                    <div
                                                        class="ml-1">{{$product->getTranslation('name',\App::getLocale())}}</div>
                                                </div>
                                            </td>
                                            <td>
                                                @if($product->sellerProfile != null)
                                                    {{$product->sellerProfile->shop_name}}
                                                @endif
                                            </td>

                                            <td>
                                                @foreach($product->stock as $stock)
                                                    <span>{{ $stock->sku != '' ? $stock->sku.': '.$stock->current_stock : $stock->current_stock }}</span>
                                                    <br>
                                                @endforeach
                                            </td>
                                            <td>{{ $product->category->getTranslation('title',\App::getLocale()) }}</td>
                                            <td>{{ $product->orders_sum_quantity }}</td>
                                            <td>{{ get_price($product->orders_sum_price,user_curr()) }}</td>
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
        </div>
    </section>
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker_customs.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
