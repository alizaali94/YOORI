@extends('admin.partials.master')
@section('title')
    {{ __('Import Customers') }}
@endsection
@section('customers')
    active
@endsection
@section('customer_import')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Import Customers') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Import Customers') }}</h4>
                        </div>
                        <div class="card-body col-sm-xs-12">
                            <form method="POST" action="{{ route('admin.customer.import.post') }}" enctype="multipart/form-data">
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
                            <h4>{{ __('Customer Import Procedures') }}</h4>
                        </div>
                        <div class="card-body">
                            <p>{{ __('Please check this before importing your file') }}:</p>
                            <ol>
                                <li>{{ __('Uploaded File type must be') }}: .xlsx {{ __('or') }} .xls {{ __('or') }} .csv</li>
                                <li>{{ __('The file must contain') }}: first_name, last_name</li>
                                <li>If OTP System activated than phone {{ __('or') }} email {{ __('must be provided') }}. Otherwise email is required</li>
                                <li>If password is provided then it must be within 6-32 characters long</li>
                                <li>{{ __('Gender must be within') }}: male, female, others</li>
                                <a href="{{route('admin.import.sample','customer')}}" target="_blank">
                                    <span class="nk-menu-icon"><i class="bx bx-download"></i></span>
                                    <span class="nk-menu-text">{{__('Customer Import Sample Download')}}</span>
                                </a>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
