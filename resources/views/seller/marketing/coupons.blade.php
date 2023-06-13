@extends('admin.partials.master')
@section('title')
    {{ __('Coupons') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('coupon')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Coupon') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $coupons->total() . ' ' . __('coupon') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-7">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Coupons') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Code') }}</th>
                                    <th>{{ __('Banner') }}</th>
                                    <th>{{ __('Title') }}</th>
                                    <th>{{ __('Type') }}</th>
                                    <th>{{ __('Start Date') }}</th>
                                    <th>{{ __('End Date') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    <th>{{ __('Options') }}</th>
                                </tr>
                                @foreach ($coupons as $key => $coupon)
                                    <tr id="row_{{ $coupon->id }}" class="table-data-row">
                                        <input type="hidden" value="{{$coupon->id}}" id="id">
                                        <td>{{ $coupons->firstItem() + $key  }}</td>
                                        <td> {{ $coupon->code }} </td>
                                        <td>
                                            @if ($coupon->banner != [] && is_file_exists($coupon->banner['image_40x40'], $coupon->banner['storage']))
                                                <img src="{{ get_media($coupon->banner['image_40x40'], $coupon->banner['storage']) }}"
                                                     alt="{{ @$coupon->title }}"
                                                     class="mr-3 rounded">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                     alt="{{ @$title }}"
                                                     class="mr-3 rounded">
                                            @endif
                                        </td>
                                        <td> {{ $coupon->getTranslation('title',App::getLocale()) }} </td>
                                        <td> {{ $coupon->type == 'product_base' ? __('Product Base') : __('Invoice Base') }} </td>
                                        <td>{{ $coupon->start_date != '' ? date('M d, Y h:i a', strtotime($coupon->start_date)) : '' }}</td>
                                        <td> {{ $coupon->start_date != '' ? date('M d, Y h:i a', strtotime($coupon->end_date)) : '' }} </td>
                                        <td><label class="custom-switch mt-2">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="coupon-status-change/{{$coupon->id}}"
                                                       {{ $coupon->status == 1 ? 'checked' : '' }} class="status-change custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <a href="{{ route('seller.coupon.edit',$coupon->id) }}"
                                               class="btn btn-outline-secondary btn-circle" data-url=""
                                               data-toggle="tooltip" title=""
                                               data-original-title="{{ __('Edit') }}">
                                                <i class="bx bx-edit"></i>
                                            </a>
                                            <a href="javascript:void(0)"
                                               onclick="delete_row('delete/coupons/',{{ $coupon->id }})"
                                               class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                               title="" data-original-title="{{ __('Delete') }}">
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
                            {{ $coupons->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-sm-xs-12 col-md-5">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Add Coupon') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{ route('seller.coupon.store') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }} *</label>
                                    <input type="text" name="title" id="title" value="{{ old('title') }}" class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="couponType">{{ __('Coupon Type') }} *</label>
                                    <div class="custom-file">
                                        <select class="form-control selectric" name="type" id="couponType" required>
                                            <option
                                                {{ old('type') ? (old('type') == "product_base" ? "selected" : "selected") : "" }} value="product_base">{{ __('Product Base') }}</option>
                                            <option
                                                {{ old('type') ? (old('type') == "invoice_base" ? "selected" : "selected") : "" }} value="invoice_base">{{ __('Invoice Base') }}</option>
                                        </select>
                                    </div>
                                    @if ($errors->has('type'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('type') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="logo">{{ __('Banner') }} {{__('(128x128)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="banner" value="" class="image-selected">
                                            <span class="form-control"><span class="counter">0</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                     alt="brand-logo" class="img-thumbnail logo-profile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="form-group {{ old('type') ? (old('type') == "product_base" ? "" : "d-none") : "" }}"
                                    id="div_product_base">
                                    <label for="product_id">{{ __('Product') }}</label>

                                    <select class="product-by-ajax form-control select2" id="product_id"
                                            multiple="multiple" name="product_id[]" aria-hidden="true"></select>
                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="code">{{ __('Code') }}</label>
                                    <input type="text" name="code" id="code" value="{{ old('code') }}"
                                           class="form-control" required>
                                    @if ($errors->has('code'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('code') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="date">{{ __('Coupon Period') }}</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="bx bx-calendar"></i>
                                            </div>
                                        </div>
                                        <input type="text" name="date" id="date" class="form-control daterange-cus"
                                               required>
                                    </div>
                                    @if ($errors->has('date'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('date') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <table class="table col-12">
                                    <tr>
                                        <td width="30%" class="pl-0 pr-0">
                                            <label for="default_language">{{ __('Discount Type') }}</label>
                                            <select class="form-control selectric" name="discount_type"
                                                    data-title="discount_type" id="discount_type" required>
                                                <option value="flat">{{ __('Flat') }}</option>
                                                <option value="percent">{{ __('Percent') }}</option>
                                            </select>
                                            @if ($errors->has('discount_type'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount_type') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                        <td width="70%" class="pl-0 pr-0">
                                            <label for="discount">{{ __('Discount') }}</label>
                                            <input type="number" step="any" name="discount" id="discount"
                                                   value="{{ old('discount') }}" class="form-control" required>
                                            @if ($errors->has('discount'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                    </tr>
                                </table>
                                <div
                                    class="{{ old('type') ? (old('type') == "invoice_base" ? "" : "d-none") : "d-none" }}"
                                    id="div_invoice_base">
                                    <div class="form-group">
                                        <label for="minimum_shopping">{{ __('Minimum Shopping') }}</label>
                                        <input type="text" name="minimum_shopping" id="minimum_shopping"
                                               value="{{ old('minimum_shopping') }}" class="form-control">
                                        @if ($errors->has('minimum_shopping'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('minimum_shopping') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="maximum_discount">{{ __('Maximum Discount') }}</label>
                                        <input type="text" name="maximum_discount" id="maximum_discount"
                                               value="{{ old('maximum_discount') }}" class="form-control">
                                        @if ($errors->has('maximum_discount'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('maximum_discount') }}</p>
                                            </div>
                                        @endif
                                    </div>
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
        </div>
    </section>

    @include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
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
    <script type="text/javascript" src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
@endpush
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
