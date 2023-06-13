@extends('admin.partials.master')

@section('title')
    {{ __('My Profile') }}
@endsection
@section('profile')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ Sentinel::getUser()->first_name.'!' }}</h2>
            <p class="section-lead">
                {{ __('Update your information on this page.') }}
            </p>

            <div class="row mt-sm-4">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card profile-widget">
                        @include('admin.common.sidebar')
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Personal Information') }}</h4>
                            <div class="form-group">
                                <a href="javascript:void(0)" class="btn btn-outline-primary cache-btn"
                                    data-toggle="modal" data-target="#profile_info"><i class="bx bx-edit"></i> {{ __('Edit') }}</a>
                            </div>
                        </div>
                        <div class="card-body">
                            @if ($errors->any())
                                <div class="modal-data-validate">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            <div class="row">
                                <table class="table mt-3 profile-head">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">{{ __('Basics') }}</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">{{ __('Name') }}</td>
                                            <th scope="col" class="font-normal">{{ Sentinel::getUser()->first_name.' '.Sentinel::getUSer()->last_name }}</th>
                                        </tr>
                                        <tr>
                                            <td scope="row">{{ __('Email') }}</td>
                                            <th scope="col" class="font-normal">{{ Sentinel::getUser()->email }}</th>
                                        </tr>
                                        @if(Sentinel::getUser()->user_type != 'admin')
                                            <tr>
                                                <td scope="row">{{ __('Phone No') }}</td>
                                                <th scope="col" class="font-normal">{{ Sentinel::getUser()->phone }}</th>
                                            </tr>
                                        @endif
                                        <tr>
                                            <td scope="row">{{ __('User Type') }}</td>
                                            <th scope="col" class="font-normal text-capitalize">{{ Sentinel::getUser()->user_type }}</th>
                                        </tr>
                                        <tr>
                                            <td scope="row">{{ __('Last Password Change') }}</td>
                                            <th scope="col" class="font-normal">{{ Sentinel::getUser()->last_password_change == null ? __('Not Change Yet') : \Carbon\Carbon::parse(Sentinel::getUser()->last_password_change)->diffForHumans() }}</th>
                                        </tr>
                                        <tr>
                                            <td scope="row">{{ __('Last Login') }}</td>
                                            <th scope="col" class="font-normal">{{\Sentinel::getUser()->last_login != ""? date('M y, Y h:i a', strtotime(\Sentinel::getUser()->last_login)):''}}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.profile-modals')
