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
                    <h2 class="section-title">{{ __('Update Coupon') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-8 middle">
                    <div class="card" >
                        <div class="card-header input-title">
                            <h4>{{ __('Update Coupon') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)
                                            <option
                                                value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>
                            <form method="POST" action="{{ route('seller.coupon.update') }}" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="hidden" value="{{ $coupon_language->translation_null == 'not-found' ? '' : $coupon_language->id }}"
                                           name="coupon_lang_id">
                                    <input type="hidden" value="{{ $coupon_language->coupon->id }}" name="coupon_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $coupon_language->title }}"
                                           class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="couponType">{{ __('Coupon Type') }} *</label>
                                    <div class="custom-file">
                                        <select class="form-control selectric" disabled id ="couponType" required>
                                            <option {{ $coupon_language->coupon->type == 'product_base' ? "selected" : "" }} value="product_base">{{ __('Product Base') }}</option>
                                            <option {{ $coupon_language->coupon->type == 'invoice_base' ? "selected" : "" }} value="invoice_base">{{ __('Invoice Base') }}</option>
                                        </select>
                                    </div>
                                    @if ($errors->has('type'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('type') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="banner">{{ __('Coupon Banner') }} {{__('(128x128)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="banner" value="{{ $coupon_language->coupon->banner_id }}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ $coupon_language->coupon->banner_id ? 1 : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <div class="selected-media mt-0 m-2" data-id="{{ $coupon_language->coupon->banner_id }}">
                                                    @if ($coupon_language->coupon->banner != [] && is_file_exists(@$coupon_language->coupon->banner['image_72x72'], $coupon_language->coupon->banner['storage']))
                                                        <img src="{{ get_media($coupon_language->coupon->banner['image_72x72'], $coupon_language->coupon->banner['storage']) }}" alt="{{ $coupon_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ $coupon_language->title }}"
                                                             class="img-thumbnail logo-profile">
                                                    @endif
                                                    @if($coupon_language->coupon->banner_id != null)
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="code">{{ __('Code') }}</label>
                                    <input type="text" name="code" id="code" value="{{ old('code') ? old('code') : $coupon_language->coupon->code }}" class="form-control" required>
                                    <input type="hidden" name="id" value="{{ $coupon_language->coupon->id }}" required>
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="hidden" name="type" value="{{ $coupon_language->coupon->type }}" required>
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
                                        <input type="text" value="{{ old('date') ? old('date') : $date }}" name="date" id="date" class="form-control daterange-cus">
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
                                            <select class="form-control selectric" name="discount_type" data-title="discount_type" id="discount_type">
                                                <option {{ $coupon_language->coupon->discount_type == 'flat' ? "selected" : "" }} value="flat">{{ __('Flat') }}</option>
                                                <option {{ $coupon_language->coupon->discount_type == 'percent' ? "selected" : "" }} value="percent">{{ __('Percent') }}</option>
                                            </select>
                                            @if ($errors->has('discount_type'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount_type') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                        <td width="70%" class="pl-0 pr-0">
                                            <label for="discount">{{ __('Discount') }}</label>
                                            <input type="number" step="any" name="discount" id="discount" value="{{ old('discount') ? old('discount') : $coupon_language->coupon->discount }}"  class="form-control" required>
                                            @if ($errors->has('discount'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('discount') }}</p>
                                                </div>
                                            @endif
                                        </td>
                                    </tr>
                                </table>
                                @if($coupon_language->coupon->type != "invoice_base")
                                    <div class="form-group" id="div_product_base">
                                        <label for="product_id">{{ __('Product') }}</label>
                                        <select class="product-by-ajax form-control select2" id ="product_id" multiple="multiple" name="product_id[]" aria-hidden="true" >
                                            @foreach(@$products as $key => $product)
                                                <option {{ old('product_id') ? (in_array($product->id, old('product_id')) ? "selected" : "" ) : (in_array($product->id, $coupon_language->coupon->product_id) ? "selected" : "")}} value=" {{ $product->id }}">{{ $product->getTranslation('name', \App::getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                        @if ($errors->has('product_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('product_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                @endif
                                @if($coupon_language->coupon->type != "product_base")
                                    <div class="" id="div_invoice_base">
                                        <div class="form-group">
                                            <label for="minimum_shopping">{{ __('Minimum Shopping') }}</label>
                                            <input type="number" name="minimum_shopping" id="minimum_shopping" value="{{ old('minimum_shopping') ? old('minimum_shopping') : $coupon_language->coupon->minimum_shopping }}" class="form-control">
                                            @if ($errors->has('minimum_shopping'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('minimum_shopping') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="maximum_discount">{{ __('Maximum Discount') }}</label>
                                            <input type="number" step="any" name="maximum_discount" id="maximum_discount" value="{{ old('maximum_discount') ? old('maximum_discount') : $coupon_language->coupon->maximum_discount }}" class="form-control">
                                            @if ($errors->has('maximum_discount'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('maximum_discount') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endif
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Update') }}
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

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
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
    <script type="text/javascript" src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
@endpush
