@extends('admin.partials.master')
@section('title')
    {{ __('Request Campaign Product') }}
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
                    <h2 class="section-title">{{ __('Request Campaign Product') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-xs-12 col-md-8 middle">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Add to Campaign') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">

                        <form method="POST" action="{{ route('seller.campaign.request') }}" enctype="multipart/form-data" id="campaign-create">
                            @csrf
                            @method('post')
                            <div class="form-group">
                                <label for="product_id">{{ __('Product') }}</label>
                                <select class="product-by-ajax form-control select2" name="product_id[]" multiple="multiple" id ="product_id"  aria-hidden="true"
                                        data-url="{{ route('seller.show-div-ajax', ['page_name' => 'campaign-product-div']) }}"></select>
                                @if ($errors->has('product_id'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('product_id') }}</p>
                                    </div>
                                @endif
                                <input type="hidden"
                                       value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                       name="r">
                                <input type="hidden" value="{{ $campaign->id }}" name="campaign_id">
                            </div>
                            <div id="div-content">

                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ __('Send Request') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Modal -->
    @include('admin.common.selector-modal')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection

@push('script')
    <script src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
@endpush

