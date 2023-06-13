@extends('admin.partials.master')
@section('title')
    {{ __('Country') }}
@endsection
@section('shipping_active')
    active
@endsection
@section('available-countries')
    active
@endsection
@php
    $q              = null;
    if(isset($_GET['q'])){
        $q          = $_GET['q'];
    }
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Country') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $countries->total() . ' ' . __('Country') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Country') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">

                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" value="{{ $q != null ? $q : "" }}" placeholder="{{ __('Search') }}">
                                        <div class="input-group-btn">
                                            <button class="btn btn-outline-primary"><i class="bx bx-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Name') }}</th>
                                        <th>{{ __('Code') }}</th>
                                        <th>{{ __('Total State') }}</th>
                                        <th>{{ __('Total City') }}</th>
                                        <th>{{ __('Status') }}</th>
                                    </tr>
                                    @foreach($countries as $key => $value)
                                        <tr id="{{ $key }}">
                                            <td> {{ $countries->firstItem() + $key  }} </td>
                                            <td> {{ $value->name }} </td>
                                            <td> {{ $value->iso3 }} </td>
                                            <td> {{ $value->states->count() }} </td>
                                            <td> {{ $value->cities->count() }} </td>
                                            <td> <label class="custom-switch mt-2 {{ hasPermission('country_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" name="custom-switch-checkbox" value="country-status-change/{{$value->id}}"
                                                            {{ hasPermission('country_update') ? '' : 'disabled' }}
                                                           {{ $value->status == 1 ? 'checked' : '' }} class="{{ hasPermission('country_update') ? 'status-change' : '' }} custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>

                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $countries->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection @include('admin.common.delete-ajax')
