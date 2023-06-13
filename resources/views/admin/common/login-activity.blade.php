@extends('admin.partials.master')

@section('title')
    {{ __('My Profile') }}
@endsection
@section('login-activity')
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
                            <h4>{{__('Login Activities')}}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tr>
                                        <th>{{ __('BROWSER') }}</th>
                                        <th>{{ __('PLATFORM') }}</th>
                                        <th>{{ __('IP') }}</th>
                                        <th>{{ __('TIME') }}</th>
                                    </tr>
                                    @foreach($logs as $key => $log)
                                    <tr>
                                        <td> {{ $log->browser }} </td>
                                        <td>{{ $log->platform }}</td>
                                        <td>{{ $log->ip }}</td>
                                        <td>{{ \Carbon\Carbon::parse($log->created_at)->toDayDateTimeString() }}</td>
                                    </tr>
                                    @endforeach
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $logs->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection


