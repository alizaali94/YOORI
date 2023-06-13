@extends('admin.partials.master')
@section('title')
    {{ __('Subscribers') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('subscriber')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Subscribers') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $subscriber->total() . ' ' . __('subscribers') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Subscribers') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Email') }}</th>
                                        <th>{{ __('Subscribe At') }}</th>
                                        @if(hasPermission('subscriber_delete'))
                                        <th>{{ __('Option') }}</th>
                                        @endif
                                    </tr>
                                    @foreach($subscriber as $key => $value)
                                        <tr id="{{ $key }}">
                                            <td> {{ $subscriber->firstItem() + $key }} </td>
                                            <td>{{ isDemoServer() ? emailAddressMask($value->email) : $value->email }}</td>
                                            <td> {{ date('M y, Y h:i a', strtotime($value->created_at)) }}</td>
                                            <td>
                                                @if(hasPermission('subscriber_delete'))
                                                <a href="javascript:void(0)" onclick="delete_row('delete/subscribers/', {{ $value->id }})"
                                                    class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title="" data-original-title="{{ __('Unsubscribe') }}">
                                                     <i class='bx bx-trash'></i>
                                                 </a>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $subscriber->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection @include('admin.common.delete-ajax')
