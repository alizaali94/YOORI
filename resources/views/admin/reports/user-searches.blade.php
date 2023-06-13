@extends('admin.partials.master')
@section('report')
    active
@endsection
@section('user_searches')
    active
@endsection
@section('title')
    {{ __('User Searches') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Report') }}</h2>
                    <p class="section-lead">
                        {{ __('User Searches Report') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('User Searches') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <thead>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Search By') }}</th>
                                        <th>{{ __('Total Searches') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($searches as $key => $value)
                                        <tr>
                                            <td> {{ $searches->firstItem() + $key  }} </td>
                                            <td>{{ $value->query }}</td>
                                            <td>{{ $value->total_search }}</td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $searches->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
