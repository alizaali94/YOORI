@extends('admin.partials.master')
@section('title')
    {{ __('Import Products') }}
@endsection
@section('product_active')
    active
@endsection
@section('product_import')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Import Products') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Import Products') }}</h4>
                        </div>
                        <div class="card-body col-sm-xs-12">
                            <form method="POST" action="{{ route('seller.product.import.post') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="file">{{ __('Import File') }} <small>({{ __('.csv/.xlsx/.xls File') }})</small></label>
                                    <div class="form-group">
                                        <input type="file" class="custom-file-input image_pick file-select"
                                               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" name="file" id="customFile"/>
                                    </div>
                                    @if($errors && $errors->any())
                                        @foreach($errors->all() as $error)
                                            <div class="nk-block-des text-danger">
                                                <p>{{ $error }}</p>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Product Import Procedures') }}</h4>
                        </div>
                        <div class="card-body">
                            <p>{{ __('Please check this before importing your file') }}:</p>
                            <ol>
                                <li>{{ __('Uploaded File type must be') }}: .xlsx {{ __('or') }} .xls {{ __('or') }} .csv</li>
                                <li>{{ __('The file must contain') }}: name, category_id, price, unit, current_stock, minimum_order_quantity</li>
                                <li>price {{__('and')}} purchase_cost {{__('must be numeric')}}</li>
                                <li>{{ __('Optional columns those can be added') }}: brand_id, slug, barcode, sku, tags, video_provider, video_url, is_approved, is_catalog, external_link, is_refundable, cash_on_delivery, short_description, description</li>
                                <a href="{{route('seller.product.import.sample','product')}}" target="_blank">
                                    <span class="nk-menu-icon"><i class="bx bx-download"></i></span>
                                    <span class="nk-menu-text">{{__('Parcel Import Sample Download')}}</span>
                                </a>
                            </ol>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Category & Brand List with ID') }}</h4>
                        </div>
                        <div class="card-body d-flex middle">
                            <a href="{{ route('seller.list.download','category') }}" target="_blank" class="btn btn-outline-info p-4 mt-4 mr-1 sample-download"><i class="bx bx-download"></i> {{ __('Categories') }}</a>
                            <a href="{{ route('seller.list.download','brand') }}" target="_blank" class="btn btn-outline-info p-4 mt-4 ml-1 sample-download"><i class="bx bx-download"></i> {{ __('Brands') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
