@extends('admin.partials.master')

@section('title')
    {{ __('Notifications') }}
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Notifications') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $notifications->total() . ' ' . __('notification') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Notification') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Title') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Date & Time') }}</th>
                                        <th>{{ __('Details') }}</th>
                                        <th>{{ __('Options') }}</th>
                                    </tr>
                                    @php
                                        $user_type = authUser()->user_type != 'customer' ? authUser()->user_type : '';
                                    @endphp
                                    @foreach ($notifications as $key => $notification)
                                        <tr id="row_{{$notification->id}}">
                                            <td>{{ $notifications->firstItem() + $key }}</td>
                                            <td><a href="{{ $notification->url != '' || $notification->url != null ? url($user_type.'/'.$notification->url) : "javascript:void(0)" }}">{{ $notification->title }}</a></td>
                                            <td class="text-capitalize">{{ @$notification->status }}</td>
                                            <td>{{ $notification->created_at != '' ? date('M d, Y h:i a', strtotime($notification->created_at)) : '' }}</td>
                                            <td>{{ @$notification->details }}</td>
                                            <td>
                                                <a href="{{ route('notification.status.change', $notification->id) }}"
                                                   class="btn {{ $notification->status == 'seen' ? 'btn-outline-secondary' : "btn-outline-info" }}  btn-circle"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ $notification->status == 'seen' ? __('Mark As Unseen') : __('Mark As Seen') }}"><i class="bx bx-show"></i>
                                                </a>
                                                <a href="javascript:void(0)"
                                                   onclick="delete_row('delete/notifications/', {{ $notification->id }},'notification')"
                                                   class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                   title="" data-original-title="{{ __('Delete') }}">
                                                    <i class='bx bx-trash'></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $notifications->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
@include('admin.common.common-modal')

