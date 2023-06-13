@extends('admin.partials.master')
@section('title')
    {{ __('Bulk SMS') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('bulk_sms')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Bulk SMS') }}</h2>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-xs-12 col-md-8 middle">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Send SMS') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        @if(hasPermission('send_bulk_sms'))
                        <form method="POST" action="{{ route('send.bulk.sms') }}" enctype="multipart/form-data">
                            @csrf
                        @endif
                            <div class="form-group" id="div_product_base">
                                <label for="user_id">{{ __('User') }}</label>
                                <select class="user-by-ajax form-control select2" multiple="multiple" name="user_id[]" id ="user_id"  aria-hidden="true" ></select>
                                @if ($errors->has('user_id'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('user_id') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="code">{{ __('Message') }}</label>
                                <textarea type="text" name="message" id="message" value="{{ old('message') }}" class="form-control"
                                          required></textarea>
                                @if ($errors->has('message'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('message') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="code">{{ __('Fast2SMS Template ID') }}</label>
                                <input type="text" name="template" id="template" value="{{ old('template') }}" placeholder="263" class="form-control"
                                       required>
                                <div class="invalid-feedback text-info">
                                    {{ __('N.B: Your approved Template ID for this SMS. Required only for Fast2SMS') }}
                                </div>
                                @if ($errors->has('template'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('template') }}</p>
                                    </div>
                                @endif
                            </div>
                            @if(hasPermission('send_bulk_sms'))
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ __('Send') }}
                                </button>
                            </div>
                            @endif
                        @if(hasPermission('send_bulk_sms'))
                          </form>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
