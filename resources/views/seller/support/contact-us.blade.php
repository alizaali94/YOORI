@extends('admin.partials.master')

@section('title')
    {{ __('Contact Us') }}
@endsection
@section('tickets_active')
    active
@endsection
@section('contact_us')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Contact Messages')}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Contact Summary ')}}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{__('Name')}}</th>
                                        <th>{{__('Email')}}</th>
                                        <th>{{__('Message')}}</th>
                                        <th>{{__('Sending Date')}}</th>
                                        <th>{{__('Replay')}}</th>
                                    </tr>


                                    @foreach ($contacts as $key => $contact)
                                        <tr id="row_{{$contact->id}}">
                                            <td>{{$contacts->firstItem() + $key}}</td>
                                            <td>{{$contact->name}}
                                                @if ($contact->reply)
                                                    <span class="badge badge-success">{{ __('replied')}}</span>
                                                @endif
                                            </td>
                                            <td>{{$contact->email}}</td>
                                            <td>{{$contact->message}}</td>
                                            <td>{{ \Carbon\Carbon::parse($contact->updated_at)}}</td>
                                            <td>
                                                <a href="javascript:void(0)" class="btn btn-outline-primary btn-circle modal-menu"
                                                   data-title="{{__('Replay Message')}}"
                                                   data-url="{{ route('seller.edit-info', ['page_name' => 'contact-replay','param1' => $contact->id]) }}"
                                                   data-toggle="modal" data-target="#common-modal"
                                                   data-original-title="{{ __('Replay') }}"><i class='bx bx-reply'></i>
                                                </a>
                                                <a href="javascript:void(0)" class="btn btn-outline-primary btn-circle modal-menu"
                                                   data-title="{{__('View Message')}}"
                                                   data-url="{{ route('seller.edit-info', ['page_name' => 'view-message','param1' => $contact->id]) }}"
                                                   data-toggle="modal" data-target="#common-modal"
                                                   data-original-title="{{ __('Replay') }}"><i class='bx bx-show'></i>
                                                </a>
                                                <a href="javascript:void(0)"
                                                   onclick="delete_row('delete/contact_us/',{{$contact->id}})"
                                                   class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                   title=""
                                                   data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i>
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
                                {{ $contacts->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.common-modal')
@include('admin.common.delete-ajax')



