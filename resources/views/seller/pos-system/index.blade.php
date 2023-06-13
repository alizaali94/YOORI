@extends('admin.partials.master')

@section('title')
    {{__('Dashboard')}}
@endsection
@section('dashboard')
    active
@endsection
@push('style')
    <style>
        .modal-backdrop.fade.show{
            display : none !important;
        }
    </style>
@endpush
@section('main-content')
    <div id="app">
        <pos_system :categories="{{ json_encode($categories) }}" :brands="{{ json_encode($brands) }}" :products="{{ json_encode($products) }}" :users="{{ json_encode($users) }}"
                    :offline_methods="{{ json_encode($offline_methods) }}" :vat_tax="{{ $vat_tax }}" :countries="{{ $countries }}" :walking_customer="{{ $walkingCustomer }}"
        :lang="{{ json_encode($lang) }}" :loading_image="{{ json_encode($loading_image) }}"
        ></pos_system>
    </div>

    <input type="hidden" name="url" id="url" value="{{ url('/') }}">
    <input type="hidden" name="vat_type" id="vat_type" value="{{ $vat_type }}">
@endsection
@push('script')
    <script src="{{static_asset('admin/js/app.js')}}"></script>
@endpush
