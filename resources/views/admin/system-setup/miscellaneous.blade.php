@extends('admin.partials.master')
@section('miscellaneous_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('miscellaneous')
    active
@endsection
@section('title')
    {{ __('Miscellaneous') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Miscellaneous') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('miscellaneous.update') }}" method="POST">
                                @csrf
                                @method('put')

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="pagination">{{ __('Pagination Size') }}</label>
                                        <input type="number" class="form-control" id="pagination" value="{{ old('pagination') ? old('pagination') : settingHelper('pagination') }}" name="pagination" placeholder="{{ __('Enter pagination size') }}">
                                        @if ($errors->has('pagination'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('pagination') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="api_paginate">{{ __('API Pagination Size') }}</label>
                                        <input type="number" class="form-control" id="api_paginate" value="{{ old('api_paginate') ? old('api_paginate') : settingHelper('api_paginate') }}" name="api_paginate" placeholder="{{ __('Enter api pagination size') }}">
                                        @if ($errors->has('api_paginate'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('api_paginate') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="index_form_paginate">{{ __('Index Form Pagination Size') }}</label>
                                        <input type="number" class="form-control" id="index_form_paginate" value="{{ old('index_form_paginate') ? old('index_form_paginate') : settingHelper('index_form_paginate') }}" name="index_form_paginate" placeholder="{{ __('Enter index form pagination size') }}">
                                        @if ($errors->has('index_form_paginate'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('index_form_paginate') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="media_paginate">{{ __('Media pagination Size') }}</label>
                                        <input type="number" class="form-control" id="media_paginate" value="{{ old('media_paginate') ? old('media_paginate') : settingHelper('media_paginate') }}" name="media_paginate" placeholder="{{ __('Enter Media pagination size') }}">
                                        @if ($errors->has('media_paginate'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('media_paginate') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="order_prefix">{{ __('Order/Invoice Prefix') }}</label>
                                        <input type="text" class="form-control" id="order_prefix" value="{{ old('order_prefix') ? old('order_prefix') : settingHelper('order_prefix') }}" name="order_prefix" placeholder="{{ __('Enter order/invoice Prefix') }}">
                                        @if ($errors->has('order_prefix'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('order_prefix') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

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
        </div>
    </section>
@endsection
