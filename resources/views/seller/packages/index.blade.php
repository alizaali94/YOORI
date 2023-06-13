@extends('admin.partials.master')

@section('sellers_active')
    active
@endsection
@section('title')
    {{ __('packages') }}
@endsection
@section('packages')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('all_packages')}}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $packages->total() . ' ' . __('packages') }}
                    </p>
                </div>
                @if (hasPermission('service_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('seller_packages.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('add_package') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                @include('admin.seller_packages.table')
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
