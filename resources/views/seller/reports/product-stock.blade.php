@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('product_stock')
    active
@endsection
@section('title')
    {{ __('Product Stock Report') }}
@endsection
@php
    if(isset($_GET['c'])){
        $c          = $_GET['c'];
    }
    if(isset($_GET['time_period'])){
        $time_period          = $_GET['time_period'];
    }
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('Admin Product Sale Report') }}
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
                                        <input type="text" name="time_period" id="time_period"
                                               value="{{ @$time_period }}"
                                               placeholder="{{ __('Filter by Date Range') }}"
                                               class="form-control reportrange">
                                    </div>
                                    @if ($errors->has('time_period'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('time_period') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group col-sm-xs-12 col-md-5">
                                    <label for="category">{{ __('Filter by Category') }}</label>
                                    <select class="form-control selectric sorting" name="c" id="category">
                                        <option value="">{{ __('Filter by Category') }}</option>
                                        @foreach($categories as $category)
                                        <option {{ @$c == "$category->id" ? "selected" : "" }} value="{{$category->id}}">{{$category->getTranslation('title',\App::getLocale())}}</option>
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
                            <h4>{{ __('Stock Product') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Product Name') }}</th>
                                        <th>{{ __('Stock') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($all_filter_products as $key => $product)
                                        <tr>
                                            <td>{{ $key+1 }}</td>
                                            <td>{{$product->getTranslation('name',\App::getLocale())}}</td>
                                            <td>
                                                @foreach($product->stock as $stock)
                                                    <span>{{ $stock->sku != '' ? $stock->sku.': '.$stock->current_stock : $stock->current_stock }}</span>
                                                    <br>
                                                @endforeach
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $all_filter_products->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
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
@endpush

